// Single-origin lineup — the source of truth for the Coffees section.
// Add / remove entries here; the grid maps over this array.

export type Roast = {
  /** display label, e.g. "Medium-Light" */
  label: string;
  /** 1 (lightest) … 5 (darkest) — drives the roast indicator */
  level: 1 | 2 | 3 | 4 | 5;
};

export type Coffee = {
  id: string;
  name: string;
  country: string;
  region: string;
  altitude: string;
  process: string;
  varietal: string;
  notes: [string, string, string];
  roast: Roast;
  /** price in USD for a 340g bag */
  price: number;
};

export const coffees: Coffee[] = [
  {
    id: "guji-reserve",
    name: "Guji Reserve",
    country: "Ethiopia",
    region: "Guji",
    altitude: "2,050m",
    process: "Washed",
    varietal: "Heirloom",
    notes: ["Jasmine", "White peach", "Bergamot"],
    roast: { label: "Light", level: 1 },
    price: 22,
  },
  {
    id: "la-esperanza",
    name: "La Esperanza",
    country: "Colombia",
    region: "Huila",
    altitude: "1,750m",
    process: "Honey",
    varietal: "Caturra",
    notes: ["Red apple", "Caramel", "Cocoa nib"],
    roast: { label: "Medium-Light", level: 2 },
    price: 21,
  },
  {
    id: "kirinyaga-aa",
    name: "Kirinyaga AA",
    country: "Kenya",
    region: "Kirinyaga",
    altitude: "1,900m",
    process: "Washed",
    varietal: "SL28",
    notes: ["Blackcurrant", "Grapefruit", "Cane sugar"],
    roast: { label: "Light", level: 1 },
    price: 24,
  },
  {
    id: "lintong-batak",
    name: "Lintong Batak",
    country: "Indonesia",
    region: "Sumatra",
    altitude: "1,400m",
    process: "Wet-hulled",
    varietal: "Ateng",
    notes: ["Cedar", "Dark chocolate", "Fig"],
    roast: { label: "Medium-Dark", level: 4 },
    price: 20,
  },
];
