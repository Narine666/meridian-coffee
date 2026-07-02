import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="bg-marigold text-espresso">
      <div className="mx-auto max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32">
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
