import Grain from "../ui/Grain";
import Reveal from "../ui/Reveal";

export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-bone text-espresso"
    >
      <Grain opacity={0.05} blend="multiply" />
      <div className="relative mx-auto max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="label text-espresso-faint">
                (01) — The house
              </span>
              <div className="hairline mt-6 text-espresso" />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-[clamp(1.8rem,3.6vw,3.1rem)] font-light leading-[1.15] tracking-[-0.01em]">
                We started as a two-barrel roaster behind a repair shop, chasing
                one stubborn idea: that a{" "}
                <span className="text-rust">single cup</span> could carry the
                whole story of where it grew —{" "}
                <span className="italic">the soil, the altitude, the hands.</span>
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <Reveal delay={80}>
                <h3 className="font-display text-xl font-medium">
                  Sourced in season
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-espresso-muted">
                  We buy at harvest and buy directly, paying above market so the
                  farms we love stay farms we can return to. When a lot is gone,
                  it&apos;s gone — and we think that&apos;s the point.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <h3 className="font-display text-xl font-medium">
                  Roasted in small batches
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-espresso-muted">
                  Twelve kilos at a time, profiled by taste rather than by
                  timer. Every batch is cupped before it earns a label and a
                  place on the shelf.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <p className="mt-14 font-display text-2xl italic text-espresso">
                — Della &amp; Marcus Wren, founders
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
