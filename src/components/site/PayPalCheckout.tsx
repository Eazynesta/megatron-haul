import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style?: Record<string, string>;
        createOrder: (
          data: unknown,
          actions: {
            order: {
              create: (order: {
                purchase_units: {
                  amount: { currency_code: string; value: string };
                  description: string;
                }[];
              }) => Promise<string>;
            };
          }
        ) => Promise<string>;
        onApprove: (
          data: { orderID: string },
          actions: { order: { capture: () => Promise<unknown> } }
        ) => Promise<void>;
        onError?: (err: unknown) => void;
      }) => { render: (el: HTMLElement) => void; close?: () => void };
    };
  }
}

const CLIENT_ID = import.meta.env["VITE_PAYPAL_CLIENT_ID"] || "sb";

let sdkPromise: Promise<void> | null = null;

function loadPayPalSdk(): Promise<void> {
  if (window.paypal) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=USD&intent=capture`;
    script.onload = () => resolve();
    script.onerror = () => {
      sdkPromise = null;
      reject(new Error("Failed to load PayPal SDK"));
    };
    document.head.appendChild(script);
  });
  return sdkPromise;
}

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  price: string; // e.g. "$142,500"
};

export function PayPalCheckout({ open, onClose, title, subtitle, price }: Props) {
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "paid" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const amount = price.replace(/[^0-9.]/g, "");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorMsg("");
      return;
    }
    let cancelled = false;
    setStatus("loading");

    loadPayPalSdk()
      .then(() => {
        if (cancelled || !buttonsRef.current || !window.paypal) return;
        buttonsRef.current.innerHTML = "";
        window.paypal
          .Buttons({
            style: {
              layout: "vertical",
              color: "gold",
              shape: "rect",
              label: "paypal",
            },
            createOrder: (_data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: { currency_code: "USD", value: amount },
                    description: `${title} — ${subtitle}`,
                  },
                ],
              }),
            onApprove: async (_data, actions) => {
              await actions.order.capture();
              if (!cancelled) setStatus("paid");
            },
            onError: () => {
              if (!cancelled) {
                setStatus("error");
                setErrorMsg("Payment could not be completed. Please try again.");
              }
            },
          })
          .render(buttonsRef.current);
        if (!cancelled) setStatus("idle");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
          setErrorMsg("Could not load PayPal. Check your connection and retry.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [open, title, subtitle, amount]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Checkout for ${title}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-card p-6 ring-1 ring-foreground/10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Secure Checkout
            </p>
            <h3 className="font-heading text-xl leading-tight text-foreground">{title}</h3>
            <p className="text-xs uppercase tracking-tighter text-muted-foreground">
              {subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between border-y border-hairline py-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Total Due
          </span>
          <span className="font-heading text-2xl font-semibold text-brand">{price}</span>
        </div>

        {status === "paid" ? (
          <div className="py-6 text-center">
            <p className="font-heading text-xl text-foreground">Payment Received</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Our logistics team will contact you within 24 hours to arrange inspection
              and delivery.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full bg-brand py-3 font-heading text-sm font-semibold uppercase tracking-widest text-brand-foreground transition-colors hover:bg-steel"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div ref={buttonsRef} className="min-h-[45px]" />
            {status === "loading" && (
              <p className="mt-2 text-center text-xs uppercase tracking-widest text-muted-foreground">
                Loading PayPal…
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-center text-sm text-destructive">{errorMsg}</p>
            )}
            <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
              Pay securely with your PayPal balance, bank, or card
            </p>
          </>
        )}
      </div>
    </div>
  );
}
