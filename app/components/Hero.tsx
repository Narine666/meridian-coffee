import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-espresso"
    >
      {/* full-bleed illustration + warm readability overlays + parallax */}
      <HeroBackground />

      {/* content sits on top of the image */}
      <div className="relative z-10 mx-auto flex w-full max-w-[88rem] flex-1 flex-col px-6 pb-10 pt-28 sm:px-10 sm:pt-32">
        {/* archival top strip */}
        <div className="flex items-center justify-between text-ink/70">
          <span className="label">Est. 2014 — Portland, OR</span>
          <span className="label hidden sm:inline">Lat. 45.5° N</span>
          <span className="label">№ 001 / Single-Origin</span>
        </div>
        <div className="hairline mt-8 text-ink" />

        {/* headline — anchored left, vertically centred in the hero */}
        <div className="flex flex-1 flex-col justify-center py-14">
          <div className="max-w-2xl">
            <h1 className="font-display font-light leading-[0.9] tracking-[-0.02em] text-ink text-[clamp(3rem,9vw,8rem)] [text-shadow:0_2px_40px_rgba(25,20,16,0.55)]">
              <span className="block">Roasted to</span>
              <span className="block">
                its own{" "}
                <span className="italic text-marigold">true north.</span>
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/85 [text-shadow:0_1px_18px_rgba(25,20,16,0.6)]">
              A heritage coffee house, reimagined. We source single-origin
              beans from a handful of trusted farms and roast them in small
              batches — nothing hidden, nothing rushed.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#coffees"
                className="label group inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-4 text-espresso transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore the coffees
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#story"
                className="label inline-flex items-center gap-2 text-ink/90 transition-colors hover:text-marigold"
              >
                Our story
              </a>
            </div>
          </div>
        </div>

        {/* bottom meta row — editorial ledger */}
        <div className="hairline text-ink" />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 sm:grid-cols-4">
          {[
            { k: "Origins", v: "9 farms" },
            { k: "Batch size", v: "12 kg" },
            { k: "Roasted", v: "To order" },
            { k: "Traceable", v: "Every lot" },
          ].map((stat) => (
            <div key={stat.k}>
              <dt className="label text-ink/60">{stat.k}</dt>
              <dd className="mt-2 font-display text-3xl font-normal text-ink sm:text-4xl">
                {stat.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
