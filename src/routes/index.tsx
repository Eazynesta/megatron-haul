import { createFileRoute } from "@tanstack/react-router";

import heroYard from "@/assets/hero-yard.jpg";
import { Nav } from "@/components/site/Nav";
import { categories, listings } from "@/components/site/inventory-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Megatron Trucking Services | Semi Trucks, Trailers & Containers" },
      {
        name: "description",
        content:
          "Buy certified semi trucks, trailer heads, trailers and shipping containers. Inspected heavy-duty inventory with financing, nationwide delivery and export handling.",
      },
      {
        property: "og:title",
        content: "Megatron Trucking Services | Heavy-Duty Equipment Sales",
      },
      {
        property: "og:description",
        content:
          "Certified semi trucks, trailer heads, trailers and shipping containers ready for immediate deployment.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <Nav />

      <main>
        <section className="relative flex h-[85vh] items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroYard}
              alt="Freight yard at dawn with semi trucks and stacked shipping containers"
              width={1920}
              height={1088}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <div className="max-w-[56ch]">
              <h1 className="mb-6 text-balance font-heading text-5xl leading-tight text-foreground md:text-7xl">
                Heavy-Duty Equipment for{" "}
                <span className="text-muted-foreground">Industrial Scale</span>
              </h1>
            </div>

            <div className="mt-12 max-w-4xl rounded-sm bg-card p-1 shadow-2xl ring-1 ring-foreground/10">
              <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-4">
                <div className="bg-card p-4">
                  <label
                    htmlFor="equipment-type"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Equipment Type
                  </label>
                  <select
                    id="equipment-type"
                    className="w-full bg-transparent text-sm font-medium focus:outline-none"
                  >
                    <option>All Inventory</option>
                    <option>Semi-Trucks</option>
                    <option>Trailer Heads</option>
                    <option>Containers</option>
                  </select>
                </div>
                <div className="bg-card p-4">
                  <label
                    htmlFor="condition"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Condition
                  </label>
                  <select
                    id="condition"
                    className="w-full bg-transparent text-sm font-medium focus:outline-none"
                  >
                    <option>New &amp; Pre-Owned</option>
                    <option>Certified Refurbished</option>
                    <option>Auction Units</option>
                  </select>
                </div>
                <div className="bg-card p-4">
                  <label
                    htmlFor="capacity"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Capacity Range
                  </label>
                  <select
                    id="capacity"
                    className="w-full bg-transparent text-sm font-medium focus:outline-none"
                  >
                    <option>All Capacities</option>
                    <option>20ft Standard</option>
                    <option>40ft High Cube</option>
                    <option>Heavy Haul</option>
                  </select>
                </div>
                <a
                  href="#inventory"
                  className="flex items-center justify-center bg-brand p-4 font-heading text-lg font-semibold uppercase text-brand-foreground transition-colors hover:bg-steel"
                >
                  Browse Inventory
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {categories.map((c) => (
                <div
                  key={c.name}
                  className="group relative aspect-square overflow-hidden bg-card ring-1 ring-foreground/10"
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-heading text-2xl text-foreground">{c.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-widest text-brand">
                      {c.units}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="inventory" className="border-t border-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-end justify-between">
              <div className="max-w-[40ch]">
                <h2 className="mb-2 font-heading text-4xl text-foreground">
                  Featured Inventory
                </h2>
                <p className="text-pretty text-sm text-muted-foreground">
                  Certified heavy equipment inspected for immediate deployment.
                </p>
              </div>
              <a
                href="#quote"
                className="text-sm font-semibold uppercase tracking-widest text-brand transition-colors hover:text-foreground"
              >
                View All Units
              </a>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {listings.map((unit) => (
                <article
                  key={unit.title}
                  className="group flex flex-col bg-card ring-1 ring-foreground/10"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.alt}
                      loading="lazy"
                      width={1024}
                      height={576}
                      className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-lg leading-tight text-foreground">
                          {unit.title}
                        </h3>
                        <p className="text-xs uppercase tracking-tighter text-muted-foreground">
                          {unit.subtitle}
                        </p>
                      </div>
                      <span className="font-heading text-xl font-semibold text-brand">
                        {unit.price}
                      </span>
                    </div>
                    <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-hairline py-4">
                      {unit.specs.map((s) => (
                        <div
                          key={s.label}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="uppercase tracking-widest text-muted-foreground">
                            {s.label}
                          </span>
                          <span className="font-medium text-foreground/80">{s.value}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#quote"
                      className="block w-full rounded-sm border border-hairline bg-secondary py-3 text-center text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-hairline"
                    >
                      {unit.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="bg-steel py-12 text-steel-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 divide-y divide-steel-foreground/5 md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="py-6 md:py-0 md:pr-12">
                <h3 className="mb-2 font-heading text-xl">Certified Inspection</h3>
                <p className="text-sm text-steel-foreground/70">
                  Every unit undergoes a 120-point mechanical and structural rig-readiness
                  audit.
                </p>
              </div>
              <div className="py-6 md:px-12 md:py-0">
                <h3 className="mb-2 font-heading text-xl">Global Logistics</h3>
                <p className="text-sm text-steel-foreground/70">
                  Nationwide delivery and international export handling including all
                  customs documentation.
                </p>
              </div>
              <div className="py-6 md:py-0 md:pl-12">
                <h3 className="mb-2 font-heading text-xl">Equipment Financing</h3>
                <p className="text-sm text-steel-foreground/70">
                  In-house financing options for fleet operators and owner-operators with
                  competitive rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="quote" className="relative overflow-hidden bg-surface py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-5"
          >
            <span className="select-none font-heading text-[300px] font-bold leading-none">
              MEGA
            </span>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-heading text-5xl text-foreground">
                Get a Custom Quote
              </h2>
              <p className="mb-12 max-w-[40ch] text-pretty text-lg text-muted-foreground">
                Ready to expand your fleet? Submit your specifications and our logistics
                team will provide a comprehensive quote within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-hairline bg-card">
                    <span className="font-heading text-xl text-brand">HQ</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Global Headquarters
                    </p>
                    <p className="font-medium text-foreground">
                      1200 Industrial Way, Port of Houston, TX
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-hairline bg-card">
                    <span className="font-heading text-xl text-brand">PH</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground">
                      Sales Line (24/7)
                    </p>
                    <a href="tel:+18005550192" className="text-lg font-medium text-foreground">
                      +1 (800) 555-0192
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 ring-1 ring-foreground/10">
              <form
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border border-hairline bg-surface/50 p-3 text-sm transition-colors focus:border-brand focus:outline-none"
                    placeholder="John Miller"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-hairline bg-surface/50 p-3 text-sm transition-colors focus:border-brand focus:outline-none"
                    placeholder="john@logistics.com"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="inquiry"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    className="w-full border border-hairline bg-surface/50 p-3 text-sm transition-colors focus:border-brand focus:outline-none"
                  >
                    <option>Fleet Purchase</option>
                    <option>Single Unit Quote</option>
                    <option>Container Leasing</option>
                    <option>Trade-In Valuation</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Message / Specs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-hairline bg-surface/50 p-3 text-sm transition-colors focus:border-brand focus:outline-none"
                    placeholder="Specify make, year, or container type required..."
                  />
                </div>
                <div className="col-span-full">
                  <button
                    type="submit"
                    className="w-full bg-brand py-4 font-heading text-lg font-semibold uppercase tracking-widest text-brand-foreground transition-colors hover:bg-steel"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-card bg-surface py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <span className="font-heading text-xl font-semibold tracking-tighter text-foreground">
            Megatron<span className="text-brand">Services</span>
          </span>
          <div className="flex gap-8 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#inventory" className="hover:text-foreground">
              Inventory Archive
            </a>
            <a href="#quote" className="hover:text-foreground">
              Privacy Protocol
            </a>
            <a href="#trust" className="hover:text-foreground">
              Export Compliance
            </a>
            <a href="#trust" className="hover:text-foreground">
              Terms of Sale
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            &copy; 2026 Megatron Trucking Services. All units subject to availability.
          </p>
        </div>
      </footer>
    </div>
  );
}
