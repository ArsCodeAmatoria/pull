import { writeFileSync } from "fs";

/**
 * Rigger competency slide course (97 slides ≈ 5 min each).
 * Content drawn from lesson modules + OHSR Part 15 + BCCSA rigger competency framing.
 */

const STANDARD_URLS = {
  ohrsPart14:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation-part-14",
  ohrsPart15:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation-part-15",
  bccsa: "https://bccranesafety.ca/",
  bccsaCompetency:
    "https://bccranesafety.ca/rigger-competency-a-critical-safety-standard-under-ohsr-part-15/",
  ansi: "https://www.ansi.org/standards",
  asmeB30:
    "https://www.asme.org/codes-standards/find-codes-standards/b30-safety-standards-cableways-cranes-derricks-hoists-hooks-jacks-and-slings",
  asmeB303: "https://www.asme.org/codes-standards/b30-3-tower-cranes",
  asmeB305: "https://www.asme.org/codes-standards/b30-5-mobile-and-locomotive-cranes",
  asmeB309: "https://www.asme.org/codes-standards/b30-9-slings",
  asmeB3010: "https://www.asme.org/codes-standards/b30-10-hooks",
  asmeB3020: "https://www.asme.org/codes-standards/b30-20-below-the-hook-lifting-devices",
  asmeB3026: "https://www.asme.org/codes-standards/b30-26-rigging-hardware",
  csaZ248: "https://www.csagroup.org/store/product/Z248-26/",
  csaZ150: "https://www.csagroup.org/store/product/Z150-20/",
  en13155: "https://www.en-standard.eu/din-en-13155-cranes-safety-non-fixed-load-lifting-attachments/",
  fem: "https://www.fem-eur.com/",
};

const STATS_URLS = {
  bcGovCraneLicensing: "https://news.gov.bc.ca/releases/2026LBR0004-000211",
  worksafebcTowerCraneSafety:
    "https://www.worksafebc.com/en/about-us/news-events/news-releases/2024/March/worksafebc-bringing-industry-labour-stakeholders-together-discuss-crane-safety",
  worksafebcRiggingBulletin:
    "https://www.worksafebc.com/en/resources/health-safety/bulletins/preventing-crane-rigging-failures",
  worksafebcTowerCranes:
    "https://www.worksafebc.com/en/health-safety/tools-machinery-equipment/cranes-mobile-equipment/types/tower-cranes",
  awcbcFatalities: "https://awcbc.org/data-and-statistics/national-work-injury-disease-statistics-program",
  wiethornCraneStudy: "https://ccra-aclg.ca/wp-content/uploads/2024/02/JimWiethorn-CraneAccidentReport.pdf",
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
    focusKicker: extra.focusKicker ?? null,
    focusCallout: extra.focusCallout ?? null,
  };
}

const SLIDES = [
  // ── INTRO (6) ~30 min ──
  s("intro", "Introduction", "Rigger competency", "Open BC rigging education — classroom slides for in-person delivery.", [
    "Clicker, TV cast, phone, and offline save.",
    "Roughly one slide every 5 minutes, plus breaks.",
    "Reading depth in /lessons — charts at /slides/charts during math.",
  ], { image: "/images/rigging/self-closing.png", cover: true }),
  s(
    "intro",
    "Regulations & standards",
    "The Rules",
    "Law first — then adopted standards and manufacturer limits.",
    [],
    {
      hero: true,
      panelBg: "white",
      lesson: "/lessons/module-1",
      source: "WorkSafeBC OHSR · BC Crane Safety",
      sections: [
        {
          heading: "BC regulation",
          headingEmphasis: "yellow",
          items: [
            {
              label: "WorkSafeBC OHSR Part 14 — cranes & material handling",
              href: STANDARD_URLS.ohrsPart14,
              logo: "worksafebc",
              emphasis: "yellow",
            },
            {
              label: "WorkSafeBC OHSR Part 15 — rigging & qualified workers",
              href: STANDARD_URLS.ohrsPart15,
              logo: "worksafebc",
              emphasis: "yellow",
            },
            {
              label: "BC Crane Safety (BCCSA) — competency guidance",
              href: STANDARD_URLS.bccsaCompetency,
              logo: "bccsa",
            },
          ],
        },
        {
          heading: "CSA tower, mobile & rigging",
          items: [
            {
              label: "CSA Z248 — tower cranes (erect, operate, inspect)",
              href: STANDARD_URLS.csaZ248,
              logo: "csa",
            },
            {
              label: "CSA Z150 — mobile crane safety code",
              href: STANDARD_URLS.csaZ150,
              logo: "csa",
            },
            {
              label: "Rigging criteria — slings, hardware, WLL (OHSR Part 15)",
              href: STANDARD_URLS.ohrsPart15,
              logo: "worksafebc",
              emphasis: "yellow",
            },
          ],
        },
        {
          heading: "ANSI / ASME B30",
          items: [
            {
              label: "ANSI — US national standards (B30 rigging volumes)",
              href: STANDARD_URLS.ansi,
              logo: "ansi",
            },
            {
              label: "B30.3 tower · B30.5 mobile cranes",
              href: STANDARD_URLS.asmeB30,
              logo: "asme",
            },
            {
              label: "B30.9 slings · B30.26 rigging hardware",
              href: STANDARD_URLS.asmeB309,
              logo: "asme",
            },
            {
              label: "B30.10 hooks · B30.20 below-the-hook",
              href: STANDARD_URLS.asmeB3020,
              logo: "asme",
            },
          ],
        },
        {
          heading: "International & other",
          items: [
            {
              label: "EN 13155 — load lifting attachments",
              href: STANDARD_URLS.en13155,
              logo: "en",
            },
            {
              label: "FEM — European crane & hoist rules",
              href: STANDARD_URLS.fem,
              logo: "fem",
            },
            { label: "Employer procedure & manufacturer WLL govern", emphasis: "red" },
          ],
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Rigging accident statistics",
    "Canada & BC — why competency training matters.",
    [],
    {
      hero: true,
      panelBg: "bc",
      diagram: "canada-rigging-stats",
      source: "BC Gov · WorkSafeBC · AWCBC · Wiethorn crane study",
      lesson: "/lessons/module-25",
      heroStats: [
        {
          value: "7",
          label: "BC deaths\n(5 yr)",
          emphasis: "red",
          href: STATS_URLS.bcGovCraneLicensing,
        },
        {
          value: "22",
          label: "tower incidents",
          emphasis: "yellow",
          href: STATS_URLS.worksafebcTowerCraneSafety,
        },
        {
          value: "6%",
          label: "rigging share",
          emphasis: "yellow",
          href: STATS_URLS.wiethornCraneStudy,
        },
      ],
      sections: [
        {
          heading: "On the record",
          items: [
            {
              label: "Kelowna 2021 — five workers killed",
              emphasis: "red",
              href: STATS_URLS.worksafebcTowerCraneSafety,
            },
            {
              label: "WS 2025-01 — rigging failure bulletin",
              href: STATS_URLS.worksafebcRiggingBulletin,
            },
            {
              label: "56.7% rigging failures — no softeners",
              emphasis: "red",
              href: STATS_URLS.wiethornCraneStudy,
            },
          ],
        },
      ],
      sourceLinks: [
        { label: "BC Gov", href: STATS_URLS.bcGovCraneLicensing },
        { label: "WorkSafeBC incidents", href: STATS_URLS.worksafebcTowerCraneSafety },
        { label: "WS 2025-01", href: STATS_URLS.worksafebcRiggingBulletin },
        { label: "AWCBC fatalities", href: STATS_URLS.awcbcFatalities },
        { label: "Wiethorn study", href: STATS_URLS.wiethornCraneStudy },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Sharp edges — protect the sling",
    "OHSR Part 15 — sharp corners cut synthetic and wire rope; pad the sling contact point.",
    [],
    {
      focus: true,
      panelBg: "warm",
      ohrs: "15.39",
      critical: true,
      focusCallout: "Protect the sling — not the edge",
      image: "/images/rigging/edge-protection.png",
      lesson: "/lessons/module-5",
      source: "WorkSafeBC OHSR Part 15",
      sections: [
        {
          heading: "OHSR 15.39",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Protect slings from sharp edges and corners on the load",
              emphasis: "yellow",
              href: STANDARD_URLS.ohrsPart15,
            },
            {
              label: "Not the edge — protect the sling where it bears on the corner",
              emphasis: "red",
            },
            {
              label: "Pads, sleeves, wood, or engineered protection at the contact point",
              emphasis: null,
            },
          ],
        },
        {
          heading: "On site",
          items: [
            {
              label: "Re-check softeners after the first few inches of lift — they can shift",
              emphasis: null,
            },
            { label: "Cut or crushed sling fibres — remove from service immediately", emphasis: "red" },
          ],
        },
      ],
      sourceLinks: [{ label: "OHSR Part 15", href: STANDARD_URLS.ohrsPart15 }],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Compressive forces — sling angles",
    "Low bridle angles increase sling leg tension and horizontal compression on the load — the same geometry.",
    [],
    {
      focus: true,
      panelBg: "compress",
      critical: true,
      diagram: "bucket-compression",
      focusKicker: "Introduction · Sling geometry",
      focusCallout: "Low included angle → higher sling tension and compression on the load",
      sections: [
        {
          heading: "Compressive forces",
          headingEmphasis: "yellow",
          items: [
            "Two-leg bridle: each leg pushes inward on the load — horizontal compression",
            {
              label: "Low included angle → high compressive force on the load",
              emphasis: "red",
            },
            "Can crush soft loads, bend members, or shift lifting lugs",
          ],
        },
        {
          heading: "Sling tension",
          items: [
            "Shallow leg angle also multiplies tension in each sling leg (T)",
            "Higher T and higher compression both come from the same bridle geometry",
            {
              label:
                "Classroom example: two buckets on one string, lift at center — same squeeze as a shallow bridle",
              emphasis: "yellow",
            },
          ],
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Angles — 60°, 45°, and 30°",
    "Leg angle from horizontal sets slope, sling length, and tension — know the big three.",
    [],
    {
      focus: true,
      panelBg: "angle",
      critical: true,
      diagram: "sling-angle-slopes",
      focusKicker: "Introduction · Sling geometry",
      focusCallout: "Equilateral triangle · perfect slope · double tension at 30°",
      sections: [
        {
          heading: "60° — equilateral",
          headingEmphasis: "yellow",
          items: [
            "Equilateral triangle — every angle is 60°",
            "Steepest common leg angle — lowest tension of the three",
            "Symmetric bridle included angle ≈ 120°",
          ],
        },
        {
          heading: "45° & 30°",
          items: [
            { label: "45° — perfect slope: rise = run (1:1)", emphasis: "yellow" },
            "30° — leg length ≈ 2× lift height (sin 30° = ½)",
            { label: "30° — double tension: each leg ≈ full load weight (× 2.0)", emphasis: "red" },
          ],
        },
      ],
    }
  ),

  // ── REGULATIONS (11) ~55 min ──
  s("regulations", "Regulations & standards", "OHSR Part 14 & 15 framework", "BC rigging law structure.", [
    "Part 14 — material handling and cranes; Part 15 — rigging detail.",
    "BCCSA guidance supports but does not replace regulation.",
    "CSA Z248 tower, Z150 mobile, ANSI/ASME B30.9 slings & B30.26 hardware commonly referenced.",
  ], { lesson: "/lessons/module-1", source: "WorkSafeBC OHSR" }),
  s("regulations", "Regulations & standards", "OHSR 15.2 — Qualified riggers", "Who may perform rigging.", [
    "Rigging/slinging by or under direct supervision of a qualified worker.",
    "Must know the specific rigging in use.",
    "Must know Board-authorized code of signals.",
  ], { ohrs: "15.2", lesson: "/lessons/module-1" }),
  s("regulations", "Regulations & standards", "Qualified vs competent", "Training and supervision.", [
    "Qualified: education, training, experience, understands hazards and controls.",
    "Trainees rig only under direct supervision of a qualified rigger.",
    "Employer verifies competency before assigning work.",
  ], { lesson: "/lessons/module-1" }),
  s("regulations", "Regulations & standards", "Employer & worker duties", "Layered responsibilities.", [
    "Employer: safe workplace, maintained marked gear, procedures, training.",
    "Worker: follow procedures, inspect gear, refuse unsafe work.",
    "Supervisor: ensure compliance on the lift.",
  ], { lesson: "/lessons/module-1" }),
  s("regulations", "Regulations & standards", "Right to refuse unsafe work", "Stop when risk is undue.", [
    "Refuse work presenting undue hazard to self or others.",
    "Damaged rigging, unknown weight, or no lift plan are examples.",
    "Document and escalate — do not proceed under pressure.",
  ], { lesson: "/lessons/module-1", critical: true }),
  s("regulations", "Regulations & standards", "OHSR 15.3 — Land before detach", "Non-negotiable unload rule.", [
    "Loads must be safely landed and supported before unhooking.",
    "Dropped loads during unhooking are preventable.",
    "BCCSA key takeaway: land before detach.",
  ], { ohrs: "15.3", diagram: "land-before-detach", critical: true }),
  s("regulations", "Regulations & standards", "OHSR 15.4 — WLL not exceeded", "Overload prohibition.", [
    "Load on any rigging assembly must not exceed WLL.",
    "Weakest component governs the assembly.",
    "Verify before the operator takes the load.",
  ], { ohrs: "15.4", lesson: "/lessons/module-2", diagram: "weakest-link", critical: true }),
  s("regulations", "Regulations & standards", "OHSR 15.5 — Identification", "Marked rated hardware.", [
    "Fittings show manufacturer ID, product ID, and WLL.",
    "Unmarked legacy gear: qualified person rates or remove from service.",
    "Missing tags on slings — do not use.",
  ], { ohrs: "15.5", lesson: "/lessons/module-2" }),
  s("regulations", "Regulations & standards", "Makeshift fittings prohibited", "No improvised rigging.", [
    "OHSR 15.32 — makeshift fittings prohibited.",
    "Bolts for shackle pins, homemade links, unknown hardware — reject.",
    "Use rated, identified components only.",
  ], { ohrs: "15.32" }),
  s("regulations", "Regulations & standards", "Standards stack", "How rules fit together.", [
    "Law (OHSR) → CSA / ANSI·ASME standards → manufacturer → site procedure.",
    "Engineered lift plans override routine picks when required.",
    "When in conflict, most protective requirement applies.",
  ], { lesson: "/lessons/appendix-e" }),
  s("regulations", "Regulations & standards", "Documentation & due diligence", "Prove you planned and inspected.", [
    "Inspection records, lift plans, competency records.",
    "FLHA before task; toolbox talk for complex picks.",
    "Supports employer due diligence under WorkSafeBC.",
  ], { lesson: "/lessons/module-1" }),

  // ── RATINGS (10) ~50 min ──
  s("ratings", "WLL, design factor & strength", "Working Load Limit (WLL)", "Maximum rated load for a configuration.", [
    "WLL is the maximum load the manufacturer assigns for that hook-up.",
    "Changes with hitch type, angle, and termination.",
    "Never exceed WLL on any component in the path.",
  ], { lesson: "/lessons/module-2", diagram: "vertical-hitch" }),
  s("ratings", "WLL, design factor & strength", "WLL vs SWL vs rated capacity", "Terminology alignment.", [
    "BC OHSR uses WLL on rigging hardware.",
    "Crane charts use rated capacity at radius — different limit.",
    "Do not swap crane capacity for sling WLL.",
  ], { lesson: "/lessons/module-2", diagram: "load-moment" }),
  s("ratings", "WLL, design factor & strength", "Breaking strength", "Ultimate load before failure.", [
    "Breaking strength is lab/ catalog ultimate value.",
    "Not a working number — never lift to breaking strength.",
    "Used with design factor to derive WLL.",
  ], { lesson: "/lessons/module-2" }),
  s("ratings", "WLL, design factor & strength", "Design factor (OHSR 15.1, 15.6)", "Safety margin in the system.", [
    "Design factor = breaking strength ÷ WLL (minimum values in Table 15-1).",
    "Example: wire rope sling minimum DF = 5.",
    "Rigging supporting workers: DF at least 10.",
  ], { ohrs: "15.6", lesson: "/lessons/module-2", diagram: "design-factor" }),
  s("ratings", "WLL, design factor & strength", "Table 15-1 design factors", "Minimums by component type.", [
    "Wire rope sling: 5 · Alloy chain sling: 4 · Synthetic web: 5.",
    "Engineered dedicated assembly may use reduced DF for that lift only.",
    "Re-rate per Table 15-1 before continued general use.",
  ], { ohrs: "15.6" }),
  s("ratings", "WLL, design factor & strength", "Termination efficiency", "Splices and clips reduce capacity.", [
    "OHSR 15.21 — reduce WLL per Figure 15-2 efficiency unless manufacturer says otherwise.",
    "Clips, turnback eyes, and swaged ends are not 100% efficient.",
    "Include in assembly calculation.",
  ], { ohrs: "15.21" }),
  s("ratings", "WLL, design factor & strength", "Sling angle capacity", "Angle reduces effective capacity.", [
    "OHSR 15.34 — account for angle; Table 15-3 reductions.",
    "Low included angle between legs increases tension.",
    "Math block covers sin θ and multipliers.",
  ], { ohrs: "15.34", chart: "/slides/charts?chart=sling-angle", diagram: "tension-multiplier-chart" }),
  s("ratings", "WLL, design factor & strength", "Choker vs basket vs vertical", "Hitch changes WLL.", [
    "Vertical hitch: full rated WLL per leg (symmetric pick).",
    "Choker: capacity reduction per manufacturer/table.",
    "Basket: increased capacity — verify angle and WLL chart.",
  ], { lesson: "/lessons/module-5", diagram: "basket-hitch" }),
  s("ratings", "WLL, design factor & strength", "Assembly is only as strong as weakest link", "System thinking.", [
    "Shackle + sling + hook + beam — check every element.",
    "Include hook block weight and below-the-hook device if in load.",
    "If any piece is overloaded, stop and re-plan.",
  ], { lesson: "/lessons/module-5", diagram: "weakest-link" }),
  s("ratings", "WLL, design factor & strength", "Proof test vs working load", "OHSR definitions.", [
    "Proof test finds manufacturing defects — not daily working load.",
    "Fold-back eyes and some slings need proof test records (15.24, 15.36).",
    "WLL is the field operating limit.",
  ], { ohrs: "15.1" }),

  // ── PROTECTION (4) ~20 min ──
  s("protection", "Edge protection & softeners", "OHSR 15.39 — Sharp edges", "Regulatory edge protection.", [
    "Protect slings from sharp edges and corners.",
    "Use pads, sleeves, wood, or engineered edge protection.",
    "Unprotected edges cut synthetics and damage wire rope.",
  ], { ohrs: "15.39", lesson: "/lessons/module-5", diagram: "edge-protection" }),
  s("protection", "Edge protection & softeners", "Softeners and sling protection", "Field practice.", [
    "Corner pads, magnetic pads, hose, timber — site-appropriate.",
    "Protection must stay in place during the full lift.",
    "Inspect protection for damage; replace if compressed or cut.",
  ], { lesson: "/lessons/module-5", diagram: "edge-protection" }),
  s("protection", "Edge protection & softeners", "Load surface vs sling surface", "Both matter.", [
    "Rough load surfaces abrade slings during set-down and hoist.",
    "Burr, weld, and flange edges are common failure points.",
    "When unsure, add protection and slow the lift.",
  ]),
  s("protection", "Edge protection & softeners", "Temperature & chemical exposure", "Synthetic sling limits.", [
    "OHSR 15.53–15.54 — heat and chemicals damage web slings.",
    "Keep slings away from hot work unless rated.",
    "Quarantine and inspect after exposure.",
  ], { ohrs: "15.53" }),

  // ── INSPECTION (11) ~55 min ──
  s("inspection", "Pre-use inspection & removal", "OHSR 15.31 — Inspect before use", "Every shift, every piece.", [
    "Inspect slings and hardware before each use.",
    "Visual and functional — tags, pins, latches, distortion.",
    "No inspection = no lift.",
  ], { ohrs: "15.31", lesson: "/lessons/module-3" }),
  s("inspection", "Pre-use inspection & removal", "Pre-use inspection steps", "Consistent routine.", [
    "Clean enough to see damage; check tags and WLL.",
    "Look for wear, cracks, bends, corrosion, broken wires, cuts.",
    "Check pins secured, hooks latch, no unauthorized mods.",
  ], { lesson: "/lessons/module-3" }),
  s("inspection", "Pre-use inspection & removal", "Wire rope — 3-6 rule", "OHSR 15.25 running rope.", [
    "Remove: 6+ random broken wires in one lay, OR 3+ in one strand in one lay.",
    "Stationary/guyline: 3+ broken wires between connections.",
    "Also reject kinking, birdcaging, heat/arc, diameter loss.",
  ], { ohrs: "15.25", lesson: "/lessons/module-18", diagram: "wire-rope-broken" }),
  s("inspection", "Pre-use inspection & removal", "Rotation-resistant rope", "Stricter criteria.", [
    "OHSR 15.26: 2 broken wires in 6 diameters, or 4 in 30 diameters.",
    "Plus all 15.25 criteria.",
    "Common on many mobile crane load lines.",
  ], { ohrs: "15.26" }),
  s("inspection", "Pre-use inspection & removal", "Hook rejection — 15.29", "When hooks leave service.", [
    "Cracks, deformation, excessive throat opening, damaged latch.",
    "Wear at bearing points and pin holes.",
    "Tag out — do not return without qualified review.",
  ], { ohrs: "15.29", lesson: "/lessons/module-3", diagram: "hook-throat" }),
  s("inspection", "Pre-use inspection & removal", "Wire rope sling rejection", "OHSR 15.43.", [
    "Kinks, crushing, birdcaging, broken wires, heat damage.",
    "Fittings loose or distorted.",
    "When in doubt, tag out.",
  ], { ohrs: "15.43" }),
  s("inspection", "Pre-use inspection & removal", "Chain sling rejection", "OHSR 15.48–15.49.", [
    "Stretch, cracks, gouges, twisted or bent links.",
    "Measure wear at bearing points — compare to limits.",
    "Periodic inspection complements daily pre-use.",
  ], { ohrs: "15.48", lesson: "/lessons/module-3" }),
  s("inspection", "Pre-use inspection & removal", "Synthetic web & round slings", "OHSR 15.54.", [
    "Cuts, burns, UV damage, broken stitches, chemical attack.",
    "Missing or illegible WLL tag — remove from service.",
    "Do not use nylon/web slings for sharp unprotected edges.",
  ], { ohrs: "15.54", lesson: "/lessons/module-3", diagram: "edge-protection" }),
  s("inspection", "Pre-use inspection & removal", "Tag out and quarantine", "Prevent reuse.", [
    "Remove from crane area; destroy or lock away if condemned.",
    "Report to supervisor; log in crane/rigging record.",
    "Re-inspect after shock load, overload, or arc contact.",
  ], { ohrs: "15.27", lesson: "/lessons/module-3" }),
  s("inspection", "Pre-use inspection & removal", "Shackle pins & open hooks", "OHSR 15.10–15.12.", [
    "Hooks need latch unless exempt; pins secured against rotation.",
    "Never replace shackle pin with a bolt.",
    "Wedge socket dead end secured (15.9).",
  ], { ohrs: "15.11" }),
  s("inspection", "Pre-use inspection & removal", "Storage — 15.37", "Protect between uses.", [
    "Off ground, dry, away from chemicals and UV.",
    "No kinks in wire rope; no crushing synthetics.",
    "Inspection culture beats rush.",
  ], { ohrs: "15.37", lesson: "/lessons/module-3" }),

  // ── MATH (36) ~180 min ──
  s("math", "Rigging math", "Why rigging math matters", "Forces rise faster than intuition.", [
    "Low sling angles, offset COG, and dynamic loads overload gear.",
    "Math supports OHSR compliance — not optional paperwork.",
    "Lessons: Module 6, Appendix B.",
  ], { lesson: "/lessons/module-6", diagram: "tension-multiplier-chart" }),
  s("math", "Rigging math", "Regulatory: determine load weight", "OHSR 15.33.", [
    "Rigger must know load weight and communicate to operator.",
    "Guessing is not compliance.",
    "Use drawings, scales, tables, or engineering.",
  ], { ohrs: "15.33", lesson: "/lessons/module-6", diagram: "volume-block" }),
  s("math", "Rigging math", "Weight charts reference", "Open charts during class.", [
    "Material density, plate, beam lb/ft, lumber, plywood/OSB, pipe, conversions, sling angles.",
    "Dropdown charts at /slides/charts — use on phone or projector.",
    "Manufacturer data beats field estimates.",
  ], { chart: "/slides/charts?chart=density", lesson: "/lessons/module-18", diagram: "volume-block" }),
  s("math", "Rigging math", "Volume × density method", "Block and plate estimates.", [
    "Volume (ft³) × density (lb/ft³) = weight (lb).",
    "Steel ≈ 490 lb/ft³; concrete ≈ 150 lb/ft³.",
    "Add rigging, dunnage, and absorbed water.",
  ], { chart: "/slides/charts?chart=density", formula: "Wt = V × ρ", diagram: "volume-block" }),
  s("math", "Rigging math", "Steel plate example", "Teaching calculation.", [
    "Plate 4 ft × 8 ft × ½ in thick.",
    "Area 32 ft² × 20.4 lb/ft² (½ in) ≈ 653 lb.",
    "Round up; add hardware and uncertainty.",
  ], { chart: "/slides/charts?chart=plate", diagram: "plate-dimensions" }),
  s("math", "Rigging math", "Wide-flange beam example", "lb/ft × length.", [
    "W14×30 at 40 ft long ≈ 30 × 40 = 1,200 lb steel only.",
    "Add stiffeners, bolts, paint, and lifting device.",
    "Use beam marking or steel handbook.",
  ], { chart: "/slides/charts?chart=w-shape", diagram: "volume-block" }),
  s("math", "Rigging math", "Pipe weight example", "Nominal pipe tables.", [
    "Look up lb/ft for nominal size and schedule.",
    "Weight = lb/ft × length in feet.",
    "Chart: /slides/charts?chart=pipe",
  ], { chart: "/slides/charts?chart=pipe", diagram: "volume-block" }),
  s("math", "Rigging math", "Concrete volume example", "Yards and tons.", [
    "Volume in yd³ × ~4,000 lb/yd³ (wet concrete order of magnitude).",
    "Or ft³ × 150 lb/ft³ for estimating.",
    "Always confirm with pour ticket or engineering.",
  ], { chart: "/slides/charts?chart=density", formula: "Wt ≈ V × 150 lb/ft³" }),
  s("math", "Rigging math", "Unit conversions", "Imperial ↔ metric.", [
    "1 kg ≈ 2.205 lb · 1 tonne ≈ 2,205 lb.",
    "1 ft = 0.305 m — keep units consistent in one calculation.",
    "Chart: /slides/charts?chart=conversions",
  ], { chart: "/slides/charts?chart=conversions", lesson: "/lessons/appendix-b" }),
  s("math", "Rigging math", "Include rigging in total suspended weight", "What the crane sees.", [
    "Load + below-the-hook device + block + rigging weight (as applicable).",
    "OHSR 15.60 — device may be part of lifted load.",
    "Communicate total to operator.",
  ], { ohrs: "15.60" }),
  s("math", "Rigging math", "Sling tension introduction", "Angle amplifies force.", [
    "Each leg carries more than half the load when angle drops.",
    "Symmetric two-leg model is the teaching baseline.",
    "Unequal legs covered later in this block.",
  ], { lesson: "/lessons/module-6", diagram: "sling-bridle-intro" }),
  s("math", "Rigging math", "Sling tension formula", "Symmetric two-leg hitch.", [
    "T = W ÷ (2 sin θ)",
    "T = tension per leg · W = load weight · θ = angle from horizontal",
    "Match calculator to procedure (DEG mode).",
  ], { formula: "T = W / (2 sin θ)", lesson: "/lessons/appendix-b", diagram: "force-triangle" }),
  s("math", "Rigging math", "Calculator: DEG and SIN", "Field skill.", [
    "Set calculator to DEG (degrees), not RAD.",
    "SIN(45) ≈ 0.707 · SIN(60) ≈ 0.866 · SIN(30) = 0.5",
    "Practice on phone before the test lift.",
  ], { diagram: "force-triangle" }),
  s("math", "Rigging math", "Leg angle vs included angle", "Read the rigging card.", [
    "θ in T = W/(2 sin θ) is each leg angle from horizontal.",
    "Included angle between legs = 2θ only in symmetric bridle.",
    "30° leg angle = 60° included — verify which convention your site uses.",
  ], { lesson: "/lessons/appendix-b", diagram: "leg-included-angle" }),
  s("math", "Rigging math", "90° from horizontal", "Multiplier × 1.0", [
    "Each leg carries W/2 in symmetric vertical-bridle model.",
    "Steepest practical angle — lowest tension per leg.",
    "Still verify WLL of each component.",
  ], { chart: "/slides/charts?chart=sling-angle", formula: "T = W/2 at 90°", diagram: "sling-bridle-90" }),
  s("math", "Rigging math", "60° from horizontal", "Multiplier × 1.155", [
    "T ≈ W × 1.155 ÷ 2 per leg in multiplier shorthand.",
    "sin 60° ≈ 0.866 → T = W/(2×0.866).",
    "Common rigging angle — still acceptable with rated gear.",
  ], { chart: "/slides/charts?chart=sling-angle", diagram: "sling-bridle-60" }),
  s("math", "Rigging math", "45° from horizontal", "Multiplier × 1.414", [
    "sin 45° ≈ 0.707 → T = W/(2×0.707).",
    "15% more tension than vertical per multiplier table.",
    "Watch horizontal compression on the load.",
  ], { chart: "/slides/charts?chart=sling-angle", diagram: "sling-bridle-45" }),
  s("math", "Rigging math", "30° from horizontal", "Multiplier × 2.0", [
    "sin 30° = 0.5 → T = W — each leg equals full load weight!",
    "Avoid unless engineered; extreme horizontal force.",
    "BCCSA: select correctly rated components.",
  ], { chart: "/slides/charts?chart=sling-angle", diagram: "sling-bridle-30" }),
  s("math", "Rigging math", "Worked example: 10,000 lb @ 45°", "Calculator practice.", [
    "T = 10,000 ÷ (2 × sin 45°) ≈ 10,000 ÷ 1.414 ≈ 7,070 lb per leg.",
    "Each sling and shackle must exceed 7,070 lb WLL in this hitch.",
    "Round up; add dynamic factor per site policy.",
  ], { formula: "T = 10000 / (2 × 0.707)", diagram: "sling-bridle-45" }),
  s("math", "Rigging math", "Worked example: 10,000 lb @ 30°", "Why low angles fail.", [
    "T = 10,000 ÷ (2 × 0.5) = 10,000 lb per leg.",
    "A 5-ton sling is not enough at 30° for a 5-ton load.",
    "Re-rig steeper or use a spreader bar.",
  ], { formula: "T = 10000 / (2 × 0.5)", diagram: "sling-bridle-30" }),
  s("math", "Rigging math", "Triangle geometry in rigging", "Visualize forces.", [
    "Sling leg, horizontal, and vertical form a force triangle.",
    "Shallow angle lengthens the sling leg vector.",
    "Use site rigging cards to match angle convention.",
  ], { lesson: "/lessons/module-8", diagram: "force-triangle" }),
  s("math", "Rigging math", "Horizontal compression", "Low angle side effect.", [
    "Legs push inward on the load — can crush or slide.",
    "Use spreader bar to increase included angle.",
    "Blocking and load strength matter.",
  ], { lesson: "/lessons/module-8", diagram: "horizontal-compression" }),
  s("math", "Rigging math", "Center of gravity basics", "Balance point.", [
    "COG is where the load balances in all axes.",
    "Lift point should be above COG for stability.",
    "Load tilts toward heavy side when COG is offset.",
  ], { lesson: "/lessons/module-6", diagram: "cog-centered" }),
  s("math", "Rigging math", "Offset center of gravity", "Unequal leg lengths.", [
    "Shorten sling on heavy side or use adjustable gear.",
    "Load may level when COG is under hook — verify before full hoist.",
    "Tag line to control rotation.",
  ], { lesson: "/lessons/module-8", diagram: "cog-offset" }),
  s("math", "Rigging math", "Complex / multi-part COG", "Assemblies and skids.", [
    "Find COG per drawing or calculation; test with trial hoist low.",
    "Machinery, vessels, and skids often hide internal mass.",
    "Engineered pick points when COG is uncertain.",
  ], { lesson: "/lessons/module-8", diagram: "cog-complex" }),
  s("math", "Rigging math", "Non-symmetrical two-leg loading", "Unequal share.", [
    "Legs at different angles or lengths do not share 50/50.",
    "Heavier side and geometry determine each leg load.",
    "Use engineered calculation or conservative assumptions.",
  ], { lesson: "/lessons/module-8", diagram: "cog-offset" }),
  s("math", "Rigging math", "Three-leg bridle", "Do not assume 33% each.", [
    "One leg may go slack; two legs carry most of the load.",
    "Design for uneven sharing unless engineered.",
    "Four-point picks need similar caution.",
  ], { lesson: "/lessons/module-8", diagram: "three-leg-bridle" }),
  s("math", "Rigging math", "Choker hitch capacity", "Rating reduction.", [
    "Choker reduces effective WLL — follow manufacturer table.",
    "Choke angle at choke point affects rating.",
    "Never choke on unprotected sharp edges.",
  ], { lesson: "/lessons/module-5", diagram: "choker-hitch" }),
  s("math", "Rigging math", "Basket hitch capacity", "Increased rating — with limits.", [
    "Basket can increase WLL if both legs share vertically.",
    "Included angle and balance affect real capacity.",
    "Still check angle tension on each leg.",
  ], { lesson: "/lessons/module-5", diagram: "basket-hitch" }),
  s("math", "Rigging math", "Table 15-3 awareness", "Regulatory angle reductions.", [
    "OHSR Table 15-3 — WLL reductions for slings at angle.",
    "Use with manufacturer charts.",
    "Chart mirror: /slides/charts?chart=sling-angle",
  ], { ohrs: "15.34", chart: "/slides/charts?chart=sling-angle", diagram: "tension-multiplier-chart" }),
  s("math", "Rigging math", "Dynamic and shock loading", "Static math is minimum.", [
    "Swing, snag, sudden stop multiply forces.",
    "Start lifts smoothly; control tag lines.",
    "Site policy may require extra capacity margin.",
  ], { lesson: "/lessons/appendix-b", diagram: "horizontal-compression" }),
  s("math", "Rigging math", "Load moment awareness", "Crane radius effect.", [
    "Moment = force × horizontal distance.",
    "Rigger awareness: farther radius reduces crane capacity.",
    "Coordinate with operator on radius and path.",
  ], { formula: "M = F × d", lesson: "/lessons/module-4", diagram: "load-moment" }),
  s("math", "Rigging math", "Communicate weight to operator", "Close the loop.", [
    "State calculated weight, rigging weight, and COG notes.",
    "Operator confirms against chart and plan.",
    "Stop if numbers do not match.",
  ], { ohrs: "15.33" }),
  s("math", "Rigging math", "When to escalate to engineering", "Beyond field math.", [
    "Unknown COG, multi-crane, high value, or tight tolerance picks.",
    "PE-stamped lift plan and rigging design.",
    "Module 15 critical lift triggers.",
  ], { lesson: "/lessons/module-15" }),
  s("math", "Rigging math", "Practice: pick the sling", "Class exercise.", [
    "Load 8,000 lb, two-leg bridle at 45° from horizontal.",
    "T ≈ 8,000 ÷ 1.414 ≈ 5,657 lb per leg — need sling WLL above that.",
    "Add margin; check shackles and hooks too.",
  ], { formula: "T = 8000 / (2 × 0.707)", diagram: "sling-bridle-45" }),
  s("math", "Rigging math", "Math block review", "Before below-the-hook.", [
    "Determine weight · convert units · sling tension · COG · hitch type.",
    "Charts at /slides/charts — keep open on second screen.",
    "Reading: Module 6 + Appendix B.",
  ], { chart: "/slides/charts", diagram: "tension-multiplier-chart" }),

  // ── BELOW-THE-HOOK (7) ~35 min ──
  s("bth", "Below-the-hook", "OHSR 15.57–15.60 overview", "Engineered lifting devices.", [
    "Standards apply to spreader bars, beams, clamps, magnets, etc.",
    "WLL marked; device weight may count in load (15.60).",
    "Do not exceed device WLL.",
  ], { ohrs: "15.57", lesson: "/lessons/module-12", diagram: "spreader-bar" }),
  s("bth", "Below-the-hook", "Spreader bars", "Increase included angle.", [
    "Reduce leg tension on wide loads.",
    "Bar takes compression; slings to bar and hook.",
    "Inspect lugs, pins, and welds; verify WLL.",
  ], { lesson: "/lessons/module-12", diagram: "spreader-bar" }),
  s("bth", "Below-the-hook", "Lifting beams vs spreader bars", "Different loading.", [
    "Lifting beam bends — top rigging carries bending.",
    "Spreader bar is primarily compression.",
    "Use correct device for the load and pick points.",
  ], { lesson: "/lessons/module-12", diagram: "spreader-bar" }),
  s("bth", "Below-the-hook", "WLL and device weight", "OHSR 15.58.", [
    "Include bar/beam weight in crane load when required.",
    "Markings must match configuration in use.",
    "PE stamp or engineering for non-standard picks.",
  ], { ohrs: "15.58" }),
  s("bth", "Below-the-hook", "Plate clamps & magnets", "Specialty attachments.", [
    "Rated for plate thickness and orientation.",
    "Test pull where procedure requires.",
    "Never use damaged or unmarked clamps.",
  ], { lesson: "/lessons/module-12" }),
  s("bth", "Below-the-hook", "Inspection of BTH devices", "Before each use.", [
    "Welds, lugs, pins, pads, and WLL labels.",
    "Remove if cracked, bent, or overloaded history.",
    "Storage to prevent damage.",
  ], { lesson: "/lessons/module-12" }),
  s("bth", "Below-the-hook", "Pick points & welding", "OHSR 15.28.", [
    "Field-welded pick points need PE approval.",
    "Alloy chain must not be welded.",
    "Use engineered lugs where possible.",
  ], { ohrs: "15.28", lesson: "/lessons/module-12" }),

  // ── PLANNING (7) ~35 min ──
  s("planning", "Lift planning", "Pre-lift planning elements", "Before attaching.", [
    "Weight, COG, path, landing zone, weather, personnel, rigging, crane config.",
    "FLHA and toolbox review.",
    "Lesson: Module 15.",
  ], { lesson: "/lessons/module-15" }),
  s("planning", "Lift planning", "Hazards & controls", "Site-specific.", [
    "Powerlines, ground, swing, pinch points, public interface.",
    "Tag lines, exclusion zones, spotters.",
    "Stop work when conditions change.",
  ], { lesson: "/lessons/module-14", diagram: "lift-exclusion" }),
  s("planning", "Lift planning", "Lift path & landing zone", "Where it goes.", [
    "Clear route from pick to set; no personnel under load.",
    "Landing area prepared; cribbing ready.",
    "Escape routes for riggers.",
  ], { lesson: "/lessons/module-16", diagram: "land-before-detach" }),
  s("planning", "Lift planning", "Communication plan", "OHSR 15.20 signals.", [
    "Hand signals per Figure 15-1 when used.",
    "One authoritative signal person when required.",
    "Radio: dedicated frequency for tower (OHSR 14.49).",
  ], { ohrs: "15.20", lesson: "/lessons/module-7" }),
  s("planning", "Lift planning", "Roles: rigger, operator, signaler", "Team coordination.", [
    "Rigger: rigging integrity and load control at hook.",
    "Operator: crane functions per signals.",
    "Signaler: clear view and standard signals.",
  ], { lesson: "/lessons/module-7" }),
  s("planning", "Lift planning", "Documentation", "Prove the plan.", [
    "Lift plan sketch, weight calc, equipment list, signatures.",
    "Critical lifts need engineered plan on file.",
    "Brief crew before first pick.",
  ], { lesson: "/lessons/module-15" }),
  s("planning", "Lift planning", "Routine vs planned lifts", "Scale the paperwork.", [
    "Routine: mental check + FLHA may suffice per employer.",
    "Non-routine: written plan minimum.",
    "When triggers met → critical lift process.",
  ], { lesson: "/lessons/module-15" }),

  // ── CRITICAL / CLOSE (5) ~25 min ──
  s("close", "Critical lifts & wrap-up", "Critical lift triggers", "When extra rigor is required.", [
    "High consequence, unusual weight/shape, multi-crane, tight tolerance.",
    "Over public, live plant, or engineered exclusion from routine.",
    "Employer/site policy may add triggers.",
  ], { lesson: "/lessons/module-15", diagram: "lift-exclusion" }),
  s("close", "Critical lifts & wrap-up", "Engineered lift plan", "PE involvement.", [
    "Stamped drawings, rigging arrangement, crane config, sequence.",
    "Lift director coordinates execution.",
    "No improvisation on critical picks.",
  ], { lesson: "/lessons/module-15", diagram: "spreader-bar" }),
  s("close", "Critical lifts & wrap-up", "Multi-crane awareness", "Module 11 intro.", [
    "Load sharing, synchronization, wind, communication.",
    "Always engineered — not field rigged.",
    "Reading: Module 11 tandem lifts.",
  ], { lesson: "/lessons/module-11" }),
  s("close", "Critical lifts & wrap-up", "Competency review", "What you should carry to site.", [
    "Regulations · WLL/DF · inspection · math · BTH · planning.",
    "Charts: /slides/charts · Depth: /lessons · Practice: /practice-test.",
    "Land before detach · determine weight · protect edges.",
  ], { diagram: "tension-multiplier-chart" }),
  s("close", "Critical lifts & wrap-up", "Field readiness", "Next steps.", [
    "Practice calculator sling problems daily.",
    "Pre-use inspect every shift.",
    "In-person certification: written + practical evaluation.",
  ], { lesson: "/certification" }),
];

if (SLIDES.length !== 97) {
  throw new Error(`Expected 97 slides, got ${SLIDES.length}`);
}

const UNITS = [
  { id: "intro", label: "Introduction", durationMin: 30 },
  { id: "regulations", label: "Regulations & standards", durationMin: 55 },
  { id: "ratings", label: "WLL, design factor & strength", durationMin: 50 },
  { id: "protection", label: "Edge protection & softeners", durationMin: 20 },
  { id: "inspection", label: "Pre-use inspection & removal", durationMin: 55 },
  { id: "math", label: "Rigging math", durationMin: 180 },
  { id: "bth", label: "Below-the-hook", durationMin: 35 },
  { id: "planning", label: "Lift planning", durationMin: 35 },
  { id: "close", label: "Critical lifts & wrap-up", durationMin: 25 },
];

let slideStart = 1;
const unitsWithRanges = UNITS.map((u) => {
  const count = SLIDES.filter((sl) => sl.unit === u.id).length;
  const entry = { ...u, slideStart, slideEnd: slideStart + count - 1 };
  slideStart += count;
  return entry;
});

const course = {
  slug: "rigger-competency",
  title: "Rigger Competency Slide Course",
  description:
    "Classroom slide course for rigger competency — regulations, WLL/design factor, inspection, rigging math, below-the-hook, and lift planning. Aligned with BC Crane Safety and WorkSafeBC OHSR Part 15.",
  sourceUrl: "https://bccranesafety.ca/rigger-competency-a-critical-safety-standard-under-ohsr-part-15/",
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
    focusKicker: sl.focusKicker,
    focusCallout: sl.focusCallout,
  })),
};

writeFileSync("src/data/competency-slides.json", JSON.stringify(course, null, 2));
console.log(`Wrote ${SLIDES.length} slides (${course.totalDurationMin} min planned).`);
