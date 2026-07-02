/**
 * Grain — a static film-grain / riso-noise texture overlay for flat sections.
 * Purely decorative and non-interactive; sits above the section content at a
 * whisper opacity so blocks read as one crafted material, never flat. No
 * motion. Tune with `opacity` (default ~4%) and `blend`.
 */
export default function Grain({
  opacity = 0.045,
  blend = "overlay",
}: {
  opacity?: number;
  blend?: React.CSSProperties["mixBlendMode"];
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        mixBlendMode: blend,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "160px 160px",
      }}
    />
  );
}
