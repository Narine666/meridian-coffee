import Image from "next/image";

import CoffeeBeans from "../ui/CoffeeBeans";
import Grain from "../ui/Grain";

const COLUMNS = [
  {
    heading: "Shop",
    links: ["Single-origin", "Subscriptions", "Gift boxes", "Equipment"],
  },
  {
    heading: "House",
    links: ["Our story", "Sourcing", "Wholesale", "Journal"],
  },
  {
    heading: "Elsewhere",
    links: ["Instagram", "Newsletter", "Careers", "Stockists"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso-deep text-ink">
      {/* branded scatter of coffee beans, behind everything */}
      <CoffeeBeans />

      <div className="relative z-10 mx-auto max-w-[88rem] px-6 pb-10 pt-20 sm:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* wordmark + newsletter */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              aria-label="Meridian Coffee Roasters — home"
              className="inline-flex"
            >
              <Image
                src="/logo.png"
                alt="Meridian Coffee Roasters"
                width={501}
                height={77}
                className="h-14 w-auto sm:h-20 lg:h-[5.5rem]"
              />
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-muted">
              Single-origin coffee, roasted to its own true north. New lots and
              small stories, sent when there&apos;s something worth saying.
            </p>

            <form className="mt-8 flex max-w-sm items-center gap-3 border-b border-ink/20 pb-3">
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full bg-transparent text-ink placeholder:text-ink-faint focus:outline-none"
              />
              <button
                type="submit"
                className="label whitespace-nowrap text-marigold transition-colors hover:text-marigold-soft"
              >
                Subscribe →
              </button>
            </form>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="label text-ink-faint">{col.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-ink-muted transition-colors hover:text-marigold"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16 text-ink" />
        <div className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center">
          <p className="label text-ink-faint">
            © {new Date().getFullYear()} Meridian Coffee Roasters
          </p>
          <p className="label text-ink-faint">
            Portland, OR · Lat. 45.5° N
          </p>
          <div className="flex gap-6">
            <a href="#" className="label text-ink-faint hover:text-ink">
              Privacy
            </a>
            <a href="#" className="label text-ink-faint hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* static riso-grain texture across the footer */}
      <Grain opacity={0.05} />
    </footer>
  );
}
