"use client";

import { useEffect, useRef } from "react";

/**
 * HeroBackground — the riso coffee illustration as a full-bleed hero
 * backdrop, with warm readability gradients baked on top.
 *
 * Interactive (fine pointer + motion allowed only): the image drifts a few
 * pixels against the cursor for a gentle parallax, and a warm spotlight pool
 * follows the cursor. Touch devices and prefers-reduced-motion get the
 * static image + gradients. The image is always decorative here — the
 * headline carries the meaning — so it's aria-hidden.
 */
export default function HeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const img = imgRef.current;
    if (!root || !img) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    let raf = 0;
    let pointer: { x: number; y: number } | null = null;

    const render = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const glow = glowRef.current;

      if (!pointer) {
        img.style.transform = "scale(1.08) translate3d(0,0,0)";
        if (glow) glow.style.opacity = "0";
        return;
      }

      // parallax — shift opposite the cursor, kept inside the 8% overscan
      const nx = pointer.x / rect.width - 0.5;
      const ny = pointer.y / rect.height - 0.5;
      img.style.transform = `scale(1.08) translate3d(${-nx * 26}px, ${
        -ny * 20
      }px, 0)`;

      if (glow) {
        glow.style.background = `radial-gradient(circle ${
          rect.width * 0.34
        }px at ${pointer.x}px ${pointer.y}px, rgba(231,163,58,0.24), rgba(231,163,58,0) 60%)`;
        glow.style.opacity = "1";
      }
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      request();
    };
    const onLeave = () => {
      pointer = null;
      request();
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="absolute inset-0 overflow-hidden"
    >
      {/* the illustration, slightly overscanned so parallax never reveals an edge */}
      <div
        ref={imgRef}
        className="absolute inset-0 [transition:transform_0.6s_cubic-bezier(0.22,1,0.36,1)]"
        style={{
          backgroundImage: "url(/hero-coffee.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 26%",
          transform: "scale(1.08)",
          willChange: "transform",
        }}
      />

      {/* warm spotlight pool that tracks the cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0 [transition:opacity_0.6s_ease]"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* readability: warm espresso wash, darkest on the left under the headline */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(33,26,21,0.92) 0%, rgba(33,26,21,0.7) 40%, rgba(33,26,21,0.34) 70%, rgba(33,26,21,0.52) 100%)",
        }}
      />
      {/* vertical falloff to seat the nav (top) and the stats row (bottom) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(25,20,16,0.72) 0%, rgba(25,20,16,0) 24%, rgba(25,20,16,0) 54%, rgba(25,20,16,0.85) 100%)",
        }}
      />
    </div>
  );
}
