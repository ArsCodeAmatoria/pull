export type WeightChartRow = { readonly label: string; readonly value: string; readonly note?: string };

export type WeightChartCategory = {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly rows: readonly WeightChartRow[];
};

/** Field reference tables aligned with Module 18 / Appendix B lesson content. */
export const WEIGHT_CHART_CATEGORIES: readonly WeightChartCategory[] = [
  {
    id: "density",
    label: "Material density",
    description: "Volume × density for blocks, plates, and irregular solids. Verify with manufacturer data when available.",
    rows: [
      { label: "Steel", value: "490 lb/ft³", note: "≈ 7,850 kg/m³" },
      { label: "Concrete (plain)", value: "150 lb/ft³", note: "≈ 2,400 kg/m³" },
      { label: "Reinforced concrete", value: "160–170 lb/ft³", note: "Use drawings when possible" },
      { label: "Aluminum", value: "170 lb/ft³", note: "≈ 2,700 kg/m³" },
      { label: "Water", value: "62.4 lb/ft³", note: "Tanks, vessels, hydro test" },
      { label: "Wood (dry, varies)", value: "35–60 lb/ft³", note: "Species and moisture matter" },
      { label: "Grout / mortar", value: "≈ 140 lb/ft³", note: "Estimate only" },
    ],
  },
  {
    id: "plate",
    label: "Steel plate (per ft²)",
    description: "Flat plate weight ≈ thickness × 40.8 lb/ft² per inch of thickness (carbon steel).",
    rows: [
      { label: "¼ in plate", value: "10.2 lb/ft²" },
      { label: "⅜ in plate", value: "15.3 lb/ft²" },
      { label: "½ in plate", value: "20.4 lb/ft²" },
      { label: "¾ in plate", value: "30.6 lb/ft²" },
      { label: "1 in plate", value: "40.8 lb/ft²" },
      { label: "Formula", value: "Wt = L × W × t × 40.8", note: "L,W in ft; t in inches" },
    ],
  },
  {
    id: "w-shape",
    label: "Wide-flange beam (lb/ft)",
    description: "Multiply length (ft) × lb/ft from nameplate or handbook. Add connection hardware.",
    rows: [
      { label: "W8×10", value: "10 lb/ft" },
      { label: "W10×12", value: "12 lb/ft" },
      { label: "W12×26", value: "26 lb/ft" },
      { label: "W14×30", value: "30 lb/ft" },
      { label: "W16×36", value: "36 lb/ft" },
      { label: "W18×50", value: "50 lb/ft" },
      { label: "W21×62", value: "62 lb/ft" },
      { label: "W24×84", value: "84 lb/ft" },
      { label: "W27×94", value: "94 lb/ft" },
      { label: "W30×108", value: "108 lb/ft" },
    ],
  },
  {
    id: "dimensional-lumber",
    label: "Dimensional lumber (lb/ft)",
    description:
      "Framing lumber weight per linear foot — dry Douglas fir / SPF teaching estimates. Actual dressed size (e.g. 2×4 = 1.5 in × 3.5 in). Weigh a sample when moisture or species is unknown.",
    rows: [
      { label: "1×4", value: "0.6 lb/ft", note: "Actual 0.75 in × 3.5 in" },
      { label: "1×6", value: "0.9 lb/ft", note: "Actual 0.75 in × 5.5 in" },
      { label: "1×8", value: "1.2 lb/ft", note: "Actual 0.75 in × 7.25 in" },
      { label: "2×4", value: "1.5 lb/ft", note: "Actual 1.5 in × 3.5 in" },
      { label: "2×6", value: "2.0 lb/ft", note: "Actual 1.5 in × 5.5 in" },
      { label: "2×8", value: "2.6 lb/ft", note: "Actual 1.5 in × 7.25 in" },
      { label: "2×10", value: "3.3 lb/ft", note: "Actual 1.5 in × 9.25 in" },
      { label: "2×12", value: "4.7 lb/ft", note: "Actual 1.5 in × 11.25 in" },
      { label: "4×4", value: "2.9 lb/ft", note: "Post / timber" },
      { label: "4×6", value: "4.3 lb/ft" },
      { label: "6×6", value: "6.5 lb/ft" },
      { label: "Formula", value: "Wt = lb/ft × L", note: "L = length in feet; add for bundles" },
    ],
  },
  {
    id: "sheet-goods",
    label: "Plywood & sheet goods (lb/ft²)",
    description:
      "Panel weight per square foot. A standard 4×8 sheet = 32 ft² — multiply lb/ft² × 32 for one full sheet. Values vary by species, glue, and moisture.",
    rows: [
      { label: "¼ in plywood", value: "0.75 lb/ft²", note: "≈ 24 lb per 4×8 sheet" },
      { label: "⅜ in plywood", value: "1.1 lb/ft²", note: "≈ 35 lb per 4×8 sheet" },
      { label: "½ in plywood", value: "1.5 lb/ft²", note: "≈ 48 lb per 4×8 sheet" },
      { label: "⅝ in plywood", value: "1.9 lb/ft²", note: "≈ 61 lb per 4×8 sheet" },
      { label: "¾ in plywood", value: "2.3 lb/ft²", note: "≈ 74 lb per 4×8 sheet" },
      { label: "7/16 in OSB", value: "1.3 lb/ft²", note: "≈ 42 lb per 4×8 sheet" },
      { label: "15/32 in OSB", value: "1.5 lb/ft²", note: "≈ 48 lb per 4×8 sheet" },
      { label: "19/32 in OSB", value: "1.8 lb/ft²", note: "≈ 58 lb per 4×8 sheet" },
      { label: "23/32 in OSB", value: "2.1 lb/ft²", note: "≈ 67 lb per 4×8 sheet" },
      { label: "½ in MDF", value: "2.5 lb/ft²", note: "≈ 80 lb per 4×8 sheet" },
      { label: "Formula", value: "Wt = lb/ft² × area", note: "4×8 sheet area = 32 ft²" },
    ],
  },
  {
    id: "pipe",
    label: "Pipe & round bar (approx.)",
    description: "Use schedule tables or weigh a sample section. These are teaching estimates only.",
    rows: [
      { label: '6" SCH 40 pipe', value: "≈ 18.97 lb/ft" },
      { label: '8" SCH 40 pipe', value: "≈ 28.55 lb/ft" },
      { label: '10" SCH 40 pipe', value: "≈ 40.48 lb/ft" },
      { label: '12" SCH 40 pipe', value: "≈ 49.56 lb/ft" },
      { label: "Round bar (steel)", value: "d² × 2.67 lb/ft", note: "d = diameter in inches" },
    ],
  },
  {
    id: "conversions",
    label: "Unit conversions",
    description: "Check calculator mode (DEG for angles). Confirm force vs mass in your procedure.",
    rows: [
      { label: "1 US ton", value: "2,000 lb" },
      { label: "1 metric tonne", value: "2,204.6 lb" },
      { label: "1 kg", value: "2.205 lb" },
      { label: "1 lb", value: "0.454 kg" },
      { label: "1 ft", value: "0.305 m" },
      { label: "1 m", value: "3.281 ft" },
      { label: "1 kN (approx.)", value: "224.8 lbf" },
    ],
  },
  {
    id: "sling-angle",
    label: "Sling angle multipliers",
    description: "Symmetric two-leg vertical hitch — tension per leg ÷ share of vertical load. Angle from horizontal.",
    rows: [
      { label: "90°", value: "× 1.000" },
      { label: "75°", value: "× 1.035" },
      { label: "60°", value: "× 1.155" },
      { label: "45°", value: "× 1.414" },
      { label: "30°", value: "× 2.000" },
      { label: "Formula", value: "T = W ÷ (2 sin θ)", note: "θ from horizontal" },
    ],
  },
] as const;

export function getWeightChartCategory(id: string): WeightChartCategory | undefined {
  return WEIGHT_CHART_CATEGORIES.find((c) => c.id === id);
}
