/**
 * CoffeeBeans — a light, tasteful scatter of minimalist vector coffee beans
 * for the footer background. Ochre, low-opacity, varied size/rotation, a mix
 * of filled and outline. Purely decorative, static, sits behind the content
 * and never over text.
 *
 * The `Bean` shape is exported so other sections can reuse the exact same
 * silhouette with their own colour set.
 */

export type BeanColors = { fill: string; stroke: string; crease: string };

// simple bean silhouette: an oval with the characteristic S-shaped centre crease
export function Bean({
  filled,
  colors,
}: {
  filled: boolean;
  colors: BeanColors;
}) {
  return (
    <svg
      viewBox="0 0 44 60"
      fill="none"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="22"
        cy="30"
        rx="18"
        ry="28"
        fill={filled ? colors.fill : "none"}
        stroke={filled ? "none" : colors.stroke}
        strokeWidth="2"
      />
      <path
        d="M22 5 C 31 18, 13 42, 22 55"
        stroke={colors.crease}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const OCHRE: BeanColors = {
  fill: "rgba(231,163,58,0.12)",
  stroke: "rgba(231,163,58,0.16)",
  crease: "rgba(231,163,58,0.20)",
};

type Placed = {
  filled: boolean;
  size: number;
  rotate: number;
  style: React.CSSProperties;
};

// scattered toward corners + whitespace, kept clear of the densest text
const BEANS: Placed[] = [
  { filled: true, size: 52, rotate: -20, style: { top: "14%", left: "43%" } },
  { filled: false, size: 34, rotate: 28, style: { top: "58%", left: "6%" } },
  { filled: false, size: 60, rotate: 14, style: { top: "22%", right: "5%" } },
  { filled: true, size: 40, rotate: -34, style: { bottom: "12%", right: "24%" } },
  { filled: false, size: 26, rotate: 46, style: { bottom: "20%", left: "34%" } },
];

export default function CoffeeBeans() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {BEANS.map((bean, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...bean.style,
            width: bean.size,
            height: bean.size * 1.36,
            transform: `rotate(${bean.rotate}deg)`,
          }}
        >
          <Bean filled={bean.filled} colors={OCHRE} />
        </div>
      ))}
    </div>
  );
}
