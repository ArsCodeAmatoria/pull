import { writeFileSync } from "fs";

const STANDARD_URLS = {
  ohrsPart15:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation-part-15",
  bccsa: "https://bccranesafety.ca/",
  asmeB3020: "https://www.asme.org/codes-standards/b30-20-below-the-hook-lifting-devices",
  asmeB3026: "https://www.asme.org/codes-standards/b30-26-rigging-hardware",
  asmeB309: "https://www.asme.org/codes-standards/b30-9-slings",
};

function s(unit, unitLabel, title, summary, bullets, extra = {}) {
  return {
    unit,
    unitLabel,
    title,
    summary,
    bullets,
    ohrsRef: extra.ohrs ?? null,
    source: extra.source ?? null,
    chartHref: extra.chart ?? null,
    lessonHref: extra.lesson ?? null,
    formula: extra.formula ?? null,
    diagram: extra.diagram ?? null,
    image: extra.image ?? null,
    cover: extra.cover ?? false,
    hero: extra.hero ?? false,
    critical: extra.critical ?? false,
    focus: extra.focus ?? false,
    sections: extra.sections ?? null,
    panelBg: extra.panelBg ?? null,
    heroStats: extra.heroStats ?? null,
    sourceLinks: extra.sourceLinks ?? null,
  };
}

const SLIDES = [
  s(
    "intro",
    "Introduction",
    "Pro rigging slide course",
    "Advanced below-the-hook rigging for experienced riggers.",
    [
      "Builds on rigger competency — clamps, spreader bars, lifting beams, asymmetric tension.",
      "Classroom delivery: clicker, TV cast, phone, offline save.",
      "Not a substitute for manufacturer data, engineered lifts, or qualified supervision.",
    ],
    { cover: true, image: "/images/flat-top.png" }
  ),
  s(
    "intro",
    "Introduction",
    "When this course applies",
    "Pro rigging goes beyond basic sling-and-shackle picks.",
    [
      "Plate handling with vertical clamps",
      "Multi-leg bridles with spreader bars or lifting beams",
      "Loads where leg tensions are not equal (COG offset, unequal leg length)",
      "Critical or engineered lifts requiring documented planning",
    ],
    { hero: true, panelBg: "cool", source: "ASME B30.20 · B30.26 · OHSR Part 15" }
  ),
  s("intro", "Introduction", "Competency baseline", "Prerequisites before pro topics.", [
    "Qualified / competent worker per OHSR and site policy",
    "WLL, design factor, hitch types, and pre-use inspection fluency",
    "Sling tension basics and angle factors from competency course",
    "Stop work when ratings, geometry, or planning are uncertain",
  ], { lesson: "/lessons/module-1", ohrs: "OHSR Part 15" }),

  s("clamps", "Vertical plate clamps", "Plate clamp purpose", "Clamps grip steel plate edges for vertical or horizontal lifts.", [
    "Transfer load through clamp jaws — not through sling friction alone",
    "Rated for plate thickness range and hardness",
    "Marked WLL for vertical lift unless rated for other orientations",
    "Never substitute a clamp for a hook on unknown material",
  ], { source: "ASME B30.20", diagram: "plate-dimensions" }),
  s("clamps", "Vertical plate clamps", "Jaw type and grip", "Friction and tooth pattern must match plate condition.", [
    "Smooth jaws for painted or stainless plate (higher clamping force)",
    "Serrated jaws for mill scale and rough carbon steel",
    "Inspect jaw wear, springs, and locking pins before each use",
    "Grease, paint, or ice on plate reduces grip — clean or reject",
  ], { critical: true }),
  s("clamps", "Vertical plate clamps", "Vertical pick with one clamp", "Single-clamp picks need extra controls.", [
    "Load can swing or peel if COG is off-centre or plate flexes",
    "Use tag line; keep body out of fall zone",
    "Often requires two clamps with a spreader or equalized bridle",
    "Follow manufacturer chart for min/max plate thickness",
  ], { formula: "WLLclamp ≥ load ÷ number of clamps (vertical)" }),
  s("clamps", "Vertical plate clamps", "Twin clamp rigging", "Two clamps share load when geometry is controlled.", [
    "Equal leg length from hook to each clamp",
    "Spreader bar or rigid link prevents clamps from closing toward each other",
    "Verify combined WLL and equalization — uneven grip overloads one clamp",
    "Use safety latches on hooks; prevent sideload on clamp shackle",
  ], { diagram: "spreader-bar" }),
  s("clamps", "Vertical plate clamps", "Horizontal plate clamps", "Horizontal models differ from vertical — read the nameplate.", [
    "Locking mechanism must be engaged per manufacturer procedure",
    "Not interchangeable with vertical clamps unless dual-rated",
    "Flipping plate during lift can release grip — plan path and stops",
    "Remove from service if teeth are worn below manufacturer limit",
  ], { ohrs: "OHSR 15.39 — protect slings from sharp plate edges" }),

  s("spreader", "Spreader bars", "Why spreader bars", "Spreaders change sling geometry and protect the load.", [
    "Keep sling legs nearly vertical — reduce horizontal compression on load",
    "Increase stability for wide or flexible loads (duct, vessel sections)",
    "Transfer compression through the bar; slings carry tension only",
    "Bar must be rated for compression and connection points",
  ], { source: "ASME B30.20", diagram: "spreader-bar-basic" }),
  s("spreader", "Spreader bars", "Spreader vs lifting beam", "Know which device you are using.", [
    "Spreader bar: slings go up to hook, bar spreads legs down to load",
    "Lifting beam: beam hangs from hook; load hangs directly from beam",
    "Spreader reduces top sling angle; beam supports load at multiple points",
    "Ratings and inspection requirements differ — read nameplate",
  ], { hero: true, panelBg: "warm" }),
  s("spreader", "Spreader bars", "Spreader bar angles", "Top sling angle still affects tension.", [
    "Longer spreader → lower top sling angle → higher top leg tension",
    "Check WLL at actual span and angle, not just vertical pick",
    "Pad contact points to avoid point loading on bar ends",
    "Tag lines control rotation — spreader can roll if COG is high",
  ], { formula: "Tleg = W ÷ (n × cos θ)" }),
  s("spreader", "Spreader bars", "Adjustable spreaders", "Telescoping or pin-adjusted spreaders need position locks.", [
    "Pin holes and locks must be fully engaged before lift",
    "Re-rate or consult engineer when span differs from chart",
    "Mark configured span on lift plan",
    "Inspect welds, end fittings, and lugs each shift",
  ]),
  s("spreader", "Spreader bars", "Spreader failure modes", "Common issues in the field.", [
    "Buckling if bar is not designed for compression at that span",
    "Unequal leg length → unequal load at pick points → twist or slip",
    "Side pull on bar lugs — keep hook over centre of spread",
    "Mixed hardware ratings in the assembly",
  ], { critical: true }),

  s("beams", "Lifting beams", "Lifting beam basics", "Beam carries bending moment; slings support the beam.", [
    "Top rigging: bridle to crane hook (often 2-leg at angle)",
    "Bottom rigging: load hung from multiple bottom lugs",
    "Beam must be rated for load plus self-weight and moment",
    "Engineered beams may require proof test documentation",
  ], { source: "ASME B30.20", diagram: "load-moment" }),
  s("beams", "Lifting beams", "Bending and lug loading", "Not all lugs share load equally without analysis.", [
    "Simply supported beam: centre lug sees highest moment",
    "Multiple lugs reduce moment when load is distributed",
    "Off-centre COG increases load on one lug",
    "Use engineered drawing or calc for non-uniform picks",
  ], { formula: "M = F × a (moment arm)" }),
  s("beams", "Lifting beams", "Top bridle on beams", "Top sling angles add tension beyond load weight.", [
    "Short top bridle → high angle → high leg tension",
    "Check beam top lugs for combined vertical and lateral load",
    "Swivel hooks reduce twist but do not fix overload",
    "Balance beam before ground rigging when possible",
  ]),
  s("beams", "Lifting beams", "Adjustable counterweights", "Some beams use movable ballast — follow procedure.", [
    "Counterweight position changes COG of beam assembly",
    "Document position on lift plan; verify with engineer",
    "Never modify ballast without authorization",
    "Include beam self-weight in crane load chart selection",
  ]),
  s("beams", "Lifting beams", "Inspection points", "Below-the-hook devices per B30.20.", [
    "Welds, cracks, deformation, lug wear",
    "Load test date and serial / ID marking",
    "Shackle and pin fit; no homemade repairs",
    "Remove from service if rating plate missing or illegible",
  ], { ohrs: "OHSR Part 15 — inspection before use" }),

  s("asymmetry", "Non-symmetric tension", "Equal legs ≠ equal tension", "Geometry and COG split the load.", [
    "Offset COG shifts more weight to shorter or steeper legs",
    "Unequal leg length changes tension even at same angle to horizontal",
    "Basket and choker hits change share when load tilts",
    "Never assume 50/50 on a two-leg unless geometry proves it",
  ], { critical: true, diagram: "cog-offset" }),
  s("asymmetry", "Non-symmetric tension", "COG and pick points", "Locate COG before selecting rigging.", [
    "Trial lift low: observe which legs load up",
    "Shift pick points or add counterweight only when planned",
    "Tag line without changing COG",
    "Document as asymmetric on lift plan",
  ]),
  s("asymmetry", "Non-symmetric tension", "Calculating unequal shares", "Use trig or rigging software for non-trivial picks.", [
    "Resolve forces at pick point with known leg angles",
    "Worst leg must stay under sling WLL at hitch type",
    "Include dynamic factor if procedure requires",
    "When in doubt, engineer or manufacturer review",
  ], { formula: "Σ forces = 0; Tmax ≤ WLL", chart: "/slides/charts" }),
  s("asymmetry", "Non-symmetric tension", "Three- and four-leg bridles", "Multi-leg does not mean equal load.", [
    "Legs on short side of COG carry more",
    "Idle leg on three-leg bridle — never count three at 100%",
    "Four-leg: typically plan for three legs sharing (one may be slack)",
    "Adjust with turnbuckles only when rated and procedure allows",
  ], { diagram: "cog-complex" }),
  s("asymmetry", "Non-symmetric tension", "Field verification", "Prove the rig before full height.", [
    "Initial inching: watch all legs, listen for slack shock",
    "Measure deflection or use load pins when specified",
    "Stop if one leg maxes while others are slack",
    "Re-rig rather than forcing crane or winch",
  ]),
  s("asymmetry", "Non-symmetric tension", "Software and charts", "Tools support but do not replace judgment.", [
    "Rigging calc apps need accurate weight, COG, and angles",
    "Cross-check with manual calc for critical lifts",
    "Keep printout with lift plan",
    "Update calc if rigging or load changes on site",
  ]),

  s("close", "Integration", "Combining devices", "Real picks mix clamps, spreaders, and beams.", [
    "Draw sketch: hook → top rigging → device → bottom rigging → load",
    "Lowest WLL in chain governs assembly",
    "Account for hardware weight in crane chart",
    "Brief entire crew on roles and hand signals",
  ], { focus: true, panelBg: "bc" }),
  s("close", "Integration", "Critical lift checklist", "Document when triggers are met.", [
    "Written plan, competent person, exclusion zones",
    "Rated capacity verified for every component",
    "Weather, ground, and crane configuration reviewed",
    "Stop work authority understood by all",
  ], { critical: true }),
  s("close", "Integration", "Practice test", "Reinforce pro rigging topics.", [
    "Vertical plate clamps and grip limits",
    "Spreader bars vs lifting beams",
    "Non-symmetric sling tension and COG",
    "Take the pro rigging practice test on pull",
  ], { lesson: "/practice-test?track=pro-rigging" }),
  s("close", "Integration", "Course close", "Pro rigging demands proof, not assumptions.", [
    "Manufacturer data and standards govern over memory",
    "Competency course + lessons for fundamentals",
    "Questions? Stop the lift and escalate",
    "Thank you — work safe.",
  ], { cover: false }),
];

const UNITS = [
  { id: "intro", label: "Introduction", durationMin: 15 },
  { id: "clamps", label: "Vertical plate clamps", durationMin: 25 },
  { id: "spreader", label: "Spreader bars", durationMin: 25 },
  { id: "beams", label: "Lifting beams", durationMin: 25 },
  { id: "asymmetry", label: "Non-symmetric tension", durationMin: 30 },
  { id: "close", label: "Integration & close", durationMin: 20 },
];

let slideNum = 0;
const unitsWithRanges = UNITS.map((u) => {
  const unitSlides = SLIDES.filter((sl) => sl.unit === u.id);
  const slideStart = slideNum + 1;
  slideNum += unitSlides.length;
  return { ...u, slideStart, slideEnd: slideNum };
});

const course = {
  slug: "pro-rigging",
  title: "Pro Rigging Slide Course",
  description:
    "Advanced classroom slides — vertical plate clamps, spreader bars, lifting beams, and non-symmetric sling tension. For experienced riggers building on competency fundamentals.",
  sourceUrl: STANDARD_URLS.asmeB3020,
  totalDurationMin: UNITS.reduce((a, u) => a + u.durationMin, 0),
  slideCount: SLIDES.length,
  units: unitsWithRanges,
  slides: SLIDES.map((sl, i) => ({
    id: i + 1,
    unit: sl.unit,
    unitLabel: sl.unitLabel,
    title: sl.title,
    summary: sl.summary,
    bullets: sl.bullets,
    ohrsRef: sl.ohrsRef,
    source: sl.source,
    chartHref: sl.chartHref,
    lessonHref: sl.lessonHref,
    formula: sl.formula,
    diagram: sl.diagram,
    image: sl.image,
    cover: sl.cover,
    hero: sl.hero,
    critical: sl.critical,
    focus: sl.focus,
    sections: sl.sections,
    panelBg: sl.panelBg,
    heroStats: sl.heroStats,
    sourceLinks: sl.sourceLinks,
  })),
};

writeFileSync("src/data/pro-rigging-slides.json", JSON.stringify(course, null, 2));
console.log(`Wrote ${SLIDES.length} pro rigging slides (${course.totalDurationMin} min planned).`);
