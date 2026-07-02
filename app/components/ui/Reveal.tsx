"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** render as a different element (e.g. "section", "li") */
  as?: ElementType;
  /** stagger the reveal by a few ms for list rhythm */
  delay?: number;
  className?: string;
};

/**
 * Scroll-reveal wrapper. Adds `.is-visible` (see globals.css) the first time
 * the element enters the viewport, then unobserves. Respects reduced-motion
 * via the CSS, and reveals immediately if IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  as,
  delay = 0,
  className = "",
}: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // no observer support — reveal on the next frame (avoids a
      // synchronous setState inside the effect body)
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
