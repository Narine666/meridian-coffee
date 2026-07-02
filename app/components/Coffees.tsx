import Reveal from "./Reveal";

type Coffee = {
  no: string;
  name: string;
  origin: string;
  process: string;
  notes: string[];
  price: string;
  roast: string;
};

const COFFEES: Coffee[] = [
  {
    no: "01",
    name: "Cerro Azul",
    origin: "Huila, Colombia",
    process: "Washed",
    notes: ["Red apple", "Cane sugar", "Cocoa"],
    price: "$22",
    roast: "Medium",
  },
  {
    no: "02",
    name: "Kochere",
    origin: "Yirgacheffe, Ethiopia",
    process: "Natural",
    notes: ["Blueberry", "Jasmine", "Bergamot"],
    price: "$26",
    roast: "Light",
  },
  {
    no: "03",
    name: "Finca La Luz",
    origin: "Tarrazú, Costa Rica",
    process: "Honey",
    notes: ["Dried fig", "Brown butter", "Orange"],
    price: "$24",
    roast: "Medium",
  },
  {
    no: "04",
    name: "Nyeri Peak",
    origin: "Central, Kenya",
    process: "Washed",
    notes: ["Blackcurrant", "Tomato leaf", "Grapefruit"],
    price: "$27",
    roast: "Light",
  },
  {
    no: "05",
    name: "Frontera Dark",
    origin: "Antigua, Guatemala",
    process: "Washed",
    notes: ["Dark chocolate", "Walnut", "Molasses"],
    price: "$21",
    roast: "Dark",
  },
  {
    no: "06",
    name: "Meridian Blend",
    origin: "Rotating · House",
    process: "Blend",
    notes: ["Caramel", "Toasted almond", "Cherry"],
    price: "$19",
    roast: "Medium",
  },
];

function CoffeeCard({ coffee, delay }: { coffee: Coffee; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group relative flex flex-col border-t border-ink/12 py-8 transition-colors duration-500 hover:border-marigold/60"
    >
      <div className="flex items-start justify-between">
        <span className="label text-ink-faint">№ {coffee.no}</span>
        <span className="label rounded-full border border-ink/15 px-3 py-1 text-ink-muted transition-colors duration-500 group-hover:border-marigold/50 group-hover:text-marigold">
          {coffee.roast}
        </span>
      </div>

      <h3 className="mt-6 font-display text-3xl font-normal leading-tight text-ink sm:text-4xl">
        {coffee.name}
      </h3>
      <p className="mt-2 text-ink-muted">{coffee.origin}</p>

      <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-sm text-ink-muted">
        {coffee.notes.map((note, i) => (
          <li key={note} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink-faint">·</span>}
            {note}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-end justify-between">
        <div>
          <span className="label text-ink-faint">{coffee.process}</span>
          <p className="mt-1 font-display text-2xl text-ink">
            {coffee.price}
            <span className="ml-1 align-baseline text-sm text-ink-faint">
              / 340g
            </span>
          </p>
        </div>
        <span
          aria-hidden
          className="translate-x-0 text-2xl text-marigold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
        >
          →
        </span>
      </div>
    </Reveal>
  );
}

export default function Coffees() {
  return (
    <section id="coffees" className="bg-espresso">
      <div className="mx-auto max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="label text-ink-faint">(02) — The offering</span>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink">
                This season&apos;s
                <br />
                <span className="italic text-marigold">shelf.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-xs text-ink-muted">
              Six lots, roasted to order and shipped within a day. Rotated as
              harvests arrive — subscribe and never guess.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {COFFEES.map((coffee, i) => (
            <CoffeeCard
              key={coffee.no}
              coffee={coffee}
              delay={(i % 3) * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
