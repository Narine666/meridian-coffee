import { Bean, type BeanColors } from "../ui/CoffeeBeans";
import Reveal from "../ui/Reveal";

// dark espresso beans so they read against the ochre background, ~10% opacity
const ESPRESSO: BeanColors = {
  fill: "rgba(33,26,21,0.1)",
  stroke: "rgba(33,26,21,0.12)",
  crease: "rgba(33,26,21,0.16)",
};

// beans tucked into empty areas only (desktop, where the whitespace exists),
// each gently floating on a slightly different, staggered loop
const VISIT_BEANS = [
  { filled: true, size: 52, rotate: -22, alt: false, dur: 8.5, delay: 0, style: { top: "36%", left: "51%" } },
  { filled: false, size: 34, rotate: 30, alt: true, dur: 10, delay: 1.2, style: { bottom: "15%", left: "6%" } },
  { filled: false, size: 26, rotate: -12, alt: false, dur: 7.5, delay: 0.6, style: { bottom: "30%", left: "43%" } },
  { filled: true, size: 30, rotate: 16, alt: true, dur: 9.5, delay: 2, style: { top: "60%", left: "54%" } },
  { filled: false, size: 40, rotate: -8, alt: false, dur: 8, delay: 1.6, style: { bottom: "13%", left: "31%" } },
];

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-marigold text-espresso"
    >
      {/* quiet coffee-bean detail in the empty space (desktop only), each
          gently floating. Outer wrapper carries the float animation; the
          inner element holds the bean's resting tilt so the two don't fight. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {VISIT_BEANS.map((bean, i) => (
          <div
            key={i}
            className={`absolute ${bean.alt ? "bean-float-alt" : "bean-float"}`}
            style={{
              ...bean.style,
              width: bean.size,
              height: bean.size * 1.36,
              animationDuration: `${bean.dur}s`,
              animationDelay: `${bean.delay}s`,
            }}
          >
            <div
              className="h-full w-full"
              style={{ transform: `rotate(${bean.rotate}deg)` }}
            >
              <Bean filled={bean.filled} colors={ESPRESSO} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="label text-espresso/60">(04) — The counter</span>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,8vw,6.5rem)] font-light leading-[0.9] tracking-[-0.02em]">
                Come stand
                <br />
                at the bar.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-espresso/80">
                The roastery doubles as our tasting room. Pull up a stool, watch
                the drum turn, and let us brew whatever came off the roaster
                that morning. First pour&apos;s on us.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@meridian.coffee"
                  className="label inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-4 text-bone transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Book a cupping
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#coffees"
                  className="label inline-flex items-center gap-2 rounded-full border border-espresso/30 px-6 py-4 text-espresso transition-colors hover:bg-espresso hover:text-bone"
                >
                  Subscribe to beans
                </a>
              </div>
            </Reveal>
          </div>

          {/* details card */}
          <div className="lg:col-span-5">
            <Reveal delay={80} className="h-full">
              <div className="h-full rounded-2xl border border-espresso/20 bg-bone/40 p-8 sm:p-10">
                <div className="hairline text-espresso" />
                <dl className="divide-y divide-espresso/15">
                  {[
                    { k: "Address", v: ["148 Kiln Street", "Portland, OR 97209"] },
                    { k: "Hours", v: ["Tue – Sun", "7:00 – 16:00"] },
                    { k: "Roasting", v: ["Wednesdays", "Watch from the bar"] },
                    { k: "Say hello", v: ["hello@meridian.coffee", "+1 503 555 0148"] },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-start justify-between gap-6 py-5"
                    >
                      <dt className="label text-espresso/60">{row.k}</dt>
                      <dd className="text-right">
                        {row.v.map((line) => (
                          <p
                            key={line}
                            className="font-display text-lg leading-snug text-espresso"
                          >
                            {line}
                          </p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
