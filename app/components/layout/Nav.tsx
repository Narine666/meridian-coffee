"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#coffees", label: "Coffees" },
  { href: "#roast", label: "The Roast" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-espresso/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-4 sm:px-10">
          {/* wordmark */}
          <a
            href="#top"
            aria-label="Meridian Coffee Roasters — home"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Meridian Coffee Roasters"
              width={501}
              height={77}
              priority
              className="h-8 w-auto sm:h-9 lg:h-10"
            />
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label text-ink-muted transition-colors hover:text-marigold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#visit"
              className="label rounded-full border border-ink/25 px-5 py-2.5 text-ink transition-colors hover:border-marigold hover:bg-marigold hover:text-espresso"
            >
              Order Beans
            </a>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-espresso-deep px-6 pb-10 pt-28 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {LINKS.map((link, i) => (
            <li key={link.href} className="border-b border-ink/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5"
              >
                <span className="font-display text-4xl text-ink">
                  {link.label}
                </span>
                <span className="label text-ink-faint">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#visit"
          onClick={() => setOpen(false)}
          className="label mt-8 inline-flex items-center justify-center rounded-full bg-marigold px-6 py-4 text-espresso"
        >
          Order Beans
        </a>
      </div>
    </header>
  );
}
