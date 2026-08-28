const links = [
  { label: "Inventory", href: "#inventory" },
  { label: "Containers", href: "#categories" },
  { label: "Logistics", href: "#trust" },
  { label: "Financing", href: "#trust" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline/60 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <span className="font-heading text-2xl font-semibold tracking-tighter text-foreground">
            Megatron<span className="text-brand">Services</span>
          </span>
          <div className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden text-right lg:block">
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Sales &amp; Support
            </p>
            <a
              href="tel:+18005550192"
              className="font-heading text-sm font-semibold text-foreground"
            >
              +1 (800) 555-0192
            </a>
          </div>
          <a
            href="#quote"
            className="rounded-sm bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground ring-1 ring-brand transition-colors hover:bg-brand/90"
          >
            Request Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
