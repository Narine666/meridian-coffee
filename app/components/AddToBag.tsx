"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The only interactive piece of a coffee card. Gives quick visual
 * confirmation on click, then settles back to rest.
 */
export default function AddToBag({ name }: { name: string }) {
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const onClick = () => {
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Add ${name} to bag`}
      aria-live="polite"
      className={`label group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3.5 transition-all duration-300 ${
        added
          ? "border-marigold bg-marigold text-espresso"
          : "border-ink/25 text-ink hover:border-marigold hover:bg-marigold hover:text-espresso"
      }`}
    >
      {added ? (
        <>
          Added to bag
          <span aria-hidden>✓</span>
        </>
      ) : (
        <>
          Add to bag
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          >
            →
          </span>
        </>
      )}
    </button>
  );
}
