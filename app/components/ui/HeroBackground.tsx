"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HeroBackground — cursor "spotlight reveal" over a calm, embedded backdrop.
 *
 * The illustration is a single, perfectly-still layer (fixed 1.05 scale so it
 * bleeds past every edge — no mouse-driven movement or scaling). A cheap
 * overlay darkens the whole hero to a moody baseline, with a soft-edged
 * radial "hole" that follows the cursor so the brighter artwork shows through
 * — a warm spotlight of swirls tracking the mouse.
 *
 * The hole is just a repositioned radial-gradient (no CSS mask + filter per
 * frame), so it repaints cheaply and tracks the cursor in real time. A global
 * tint + edge vignette let the artwork melt into the dark page, and the strong
 * left gradient keeps the headline/stats readable.
 *
 * Touch devices and prefers-reduced-motion never mount the shade, so they get
 * the calm static image with no spotlight.
 */

const SCALE = 1.05; // fixed edge-bleed scale (never animated)
const RADIUS = 230; // px — spotlight reveal radius
const EASE = 0.5; // follow smoothing (higher = snappier)
const SHADE = "rgba(23,18,14,0.62)"; // moody dim outside the spotlight

const IMAGE: React.CSSProperties = {
  backgroundImage: "url(/hero-bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "left center",
  transform: `scale(${SCALE})`,
  transformOrigin: "center",
  filter: "brightness(0.78) saturate(0.9)",
};

export default function HeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // decide whether to run the effect at all (fine pointer + motion allowed)
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;
    const id = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // wire up the eased spotlight hole once the shade layer is mounted
  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    const shade = shadeRef.current;
    if (!root || !shade) return;

    let raf = 0;
    let target: { x: number; y: number } | null = null;
    let cx = 0;
    let cy = 0;
    let cr = 0; // current radius (eased 0 → RADIUS)
    let tx = 0;
    let ty = 0;

    const frame = () => {
      const tr = target ? RADIUS : 0;
      if (target) {
        tx = target.x;
        ty = target.y;
      }
      cx += (tx - cx) * EASE;
      cy += (ty - cy) * EASE;
      cr += (tr - cr) * EASE;

      // hole fully closed & idle → solid moody shade, stop the loop
      if (!target && cr < 0.6) {
        shade.style.background = SHADE;
        raf = 0;
        return;
      }

      shade.style.background = `radial-gradient(circle ${cr}px at ${cx}px ${cy}px, transparent 0, transparent 30%, ${SHADE} 78%)`;
      raf = requestAnimationFrame(frame);
    };

    const ensure = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (inside) {
        // snap on (re)entry so the spotlight grows in place, not from a corner
        if (!target) {
          cx = x;
          cy = y;
        }
        target = { x, y };
      } else {
        target = null;
      }
      ensure();
    };
    const onLeave = () => {
      target = null;
      ensure();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return (
    <div ref={rootRef} aria-hidden className="absolute inset-0 overflow-hidden">
      {/* the illustration — calmed, static, bleeding past every edge */}
      <div className="absolute inset-0" style={IMAGE} />

      {/* subtle espresso tint over the whole image — calm, moody atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(33,26,21,0.2)" }}
      />

      {/* moody shade with a cursor-following spotlight hole.
          Only mounted when the effect is enabled. */}
      {enabled && (
        <div
          ref={shadeRef}
          className="pointer-events-none absolute inset-0"
          style={{ background: SHADE, willChange: "background" }}
        />
      )}

      {/* edge vignette — the swirls melt into the dark page at the borders */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 115% at 50% 48%, rgba(25,20,16,0) 52%, rgba(25,20,16,0.92) 100%)",
        }}
      />

      {/* left readability wash — near-solid on the far left, gone by centre.
          Above the image so text stays legible under any spotlight. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(33,26,21,0.95) 0%, rgba(33,26,21,0.9) 18%, rgba(33,26,21,0.58) 36%, rgba(33,26,21,0.18) 52%, rgba(33,26,21,0) 64%)",
        }}
      />

      {/* soft top/bottom falloff to seat the nav + labels and the stats row */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(25,20,16,0.55) 0%, rgba(25,20,16,0.24) 14%, rgba(25,20,16,0) 30%, rgba(25,20,16,0) 66%, rgba(25,20,16,0.6) 100%)",
        }}
      />
    </div>
  );
}
