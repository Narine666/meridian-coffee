import { coffees, type Coffee } from "@/src/data/coffees";
import AddToBag from "./AddToBag";
import Reveal from "./Reveal";

// light → dark roast indicator: five segments filled to the roast level
function RoastMeter({ roast }: { roast: Coffee["roast"] }) {
  return (
    <div className="flex items-center gap-3">
      <span className="label text-ink-faint">Roast</span>
      <div className="flex items-center gap-1" aria-hidden>
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={`h-1.5 w-4 rounded-full transition-colors ${
              step <= roast.level ? "bg-marigold" : "bg-ink/15"
            }`}
          />
        ))}
      </div>
      <span className="label text-ink-muted">{roast.label}</span>
    </div>
  );
}

function DataCell({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label text-ink-faint">{k}</dt>
      <dd className="mt-1.5 font-mono text-sm text-ink">{v}</dd>
    </div>
  );
}

function CoffeeCard({ coffee, delay }: { coffee: Coffee; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col rounded-2xl border border-ink/12 bg-espresso-deep/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-marigold/40 hover:shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)] sm:p-8"
    >
      {/* origin + price */}
      <div className="flex items-start justify-between gap-4">
        <span className="label text-ink-muted">
          {coffee.country} · {coffee.region}
        </span>
        <span className="font-display text-2xl leading-none text-ink">
          ${coffee.price}
        </span>
      </div>

      {/* name */}
      <h3 className="mt-5 font-display text-3xl font-normal leading-tight text-ink sm:text-4xl">
        {coffee.name}
      </h3>

      {/* tasting notes */}
      <p className="mt-3 font-display text-lg italic text-marigold">
        {coffee.notes.join(" · ")}
      </p>

      {/* data row */}
      <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-ink/12 pt-6">
        <DataCell k="Altitude" v={coffee.altitude} />
        <DataCell k="Process" v={coffee.process} />
        <DataCell k="Varietal" v={coffee.varietal} />
      </dl>

      {/* roast indicator */}
      <div className="mt-7">
        <RoastMeter roast={coffee.roast} />
      </div>

      {/* add to bag — pinned to the bottom for even card heights */}
      <div className="mt-auto pt-8">
        <AddToBag name={coffee.name} />
      </div>
    </Reveal>
  );
}

export default function Coffees() {
  return (
    <section id="coffees" className="bg-espresso">
      <div className="mx-auto max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="label text-ink-faint">On the bench now</span>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink">
              This month&apos;s{" "}
              <span className="italic text-marigold">origins.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-ink-muted">
              Four single origins, roasted to order and rotated as fresh
              harvests land on the cupping bench.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {coffees.map((coffee, i) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              delay={(i % 2) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
