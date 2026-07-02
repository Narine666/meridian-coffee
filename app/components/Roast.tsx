import Reveal from "./Reveal";

const STEPS = [
  {
    no: "01",
    title: "Cup green",
    body: "Every arrival is sample-roasted and tasted blind before we commit. If a lot doesn't sing, it doesn't ship.",
  },
  {
    no: "02",
    title: "Profile by taste",
    body: "We build each roast curve around the bean's own character — developing sweetness and clarity, never chasing a house color.",
  },
  {
    no: "03",
    title: "Roast to order",
    body: "Beans are roasted the day they leave us, in twelve-kilo batches, logged and repeatable down to the degree.",
  },
  {
    no: "04",
    title: "Rest & release",
    body: "A short rest lets the gases settle, then each bag is dated by hand so you always know exactly how fresh it is.",
  },
];

export default function Roast() {
  return (
    <section id="roast" className="relative bg-espresso-deep">
      <div className="mx-auto max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* sticky heading rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="label text-ink-faint">(03) — The craft</span>
                <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-light leading-[0.95] tracking-[-0.02em] text-ink">
                  How we
                  <br />
                  <span className="italic text-marigold">roast.</span>
                </h2>
                <p className="mt-8 max-w-sm leading-relaxed text-ink-muted">
                  No two origins want the same heat. Our approach is patient and
                  unfussy — four steps, repeated with discipline, so every bag
                  tastes like the last one you loved.
                </p>
                <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3">
                  <span className="h-2 w-2 rounded-full bg-marigold" />
                  <span className="label text-ink-muted">
                    Loring Smart Roast · S15
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* steps */}
          <ol className="lg:col-span-7">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.no}
                delay={i * 60}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/12 py-9 sm:gap-10"
              >
                <span className="font-display text-4xl font-light text-marigold sm:text-5xl">
                  {step.no}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-normal text-ink sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
