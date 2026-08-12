import { writeFileSync } from "fs";
import { spawnSync } from "child_process";

/**
 * Rigger competency slide course (98 slides ≈ 5 min each).
 * Content drawn from lesson modules + OHSR Part 15 + BCCSA rigger competency framing.
 */

const STANDARD_URLS = {
  ohrsPart8:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-08-personal-protective-clothing-and-equipment",
  ohrsPart14:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation-part-14",
  ohrsPart15:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation-part-15",
  ohrsPart19:
    "https://www.worksafebc.com/en/law-policy/occupational-health-safety/searchable-ohs-regulation/ohs-regulation/part-19-electrical-safety",
  bcHydroPowerLines:
    "https://www.bchydro.com/safety-outages/electrical-safety/worker-training.html",
  bcHydroOverheadGuide:
    "https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/safety/working-near-the-bc-hydro-overhead-system.pdf",
  bccsa: "https://bccranesafety.ca/",
  bccsaCompetency:
    "https://bccranesafety.ca/rigger-competency-a-critical-safety-standard-under-ohsr-part-15/",
  bccsaLiftPlan: "https://bccranesafety.ca/lift-planning-template-available/",
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
    secondaryImage: extra.secondaryImage ?? null,
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
    quiz: extra.quiz ?? false,
    quizQuestions: extra.quizQuestions ?? null,
  };
}

const SLIDES = [
  // ── INTRO (7) ~35 min ──
  s(
    "intro",
    "Introduction",
    "Rigger competency",
    "Rules, rigging stats, sharp edges, sling angles, sine math, L ÷ H, and why softeners.",
    [
      "BC rules and accident context",
      "Sharp edges · compressive forces · leg angles",
      "Sine, L ÷ H, and two calculator quizzes",
    ],
    {
      image: "/images/luffer.png",
      cover: true,
      panelBg: "cover",
      focusKicker: "Basic Rigging Info in Course",
    }
  ),
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
    "Shallow bridle — squeeze on the load and overload in each leg.",
    [],
    {
      focus: true,
      panelBg: "compress",
      critical: true,
      diagram: "bucket-compression",
      focusKicker: "Introduction · Sling geometry",
      focusCallout: "Low angle → squeeze + high leg tension",
      sections: [
        {
          heading: "Compression",
          headingEmphasis: "yellow",
          items: [
            "Each leg pushes inward on the load",
            { label: "Low angle = high squeeze", emphasis: "red" },
          ],
        },
        {
          heading: "Sling tension",
          items: [
            "Shallow angle multiplies tension in each leg",
            "Steeper bridle reduces both problems",
          ],
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Angles — 60°, 45°, and 30°",
    "Steep legs hold more. Flat legs hold less.",
    [],
    {
      focus: true,
      panelBg: "angle",
      critical: true,
      diagram: "sling-angle-slopes",
      chart: "/slides/charts?chart=sling-angle",
      focusKicker: "Introduction · Sling geometry",
      focusCallout: "Harder pull → less capacity",
      sections: [
        {
          heading: "Steep legs",
          headingEmphasis: "yellow",
          items: [
            { label: "60° — ~87% capacity", emphasis: "yellow" },
            { label: "45° — ~71% capacity", emphasis: "yellow" },
          ],
        },
        {
          heading: "Flat legs",
          items: [
            { label: "30° — 50% capacity · double pull", emphasis: "red" },
            "Harder pull → less capacity",
          ],
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Sling tension — sine",
    "Steeper = easier. Flatter = harder. Harder = hold less.",
    [],
    {
      focus: true,
      panelBg: "sine",
      critical: true,
      diagram: "sling-tension-sine",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=sling-angle",
      focusKicker: "Introduction · Simple rigging math",
      focusCallout: "Flat angle = pull harder = lift less",
      sections: [
        {
          heading: "The idea",
          headingEmphasis: "yellow",
          items: [
            "Flat ropes = harder pull on each leg",
            "Harder pull = less safe load",
          ],
        },
        {
          heading: "45° example",
          items: [
            { label: "≈ 7 of 10 pounds safe", emphasis: "red" },
            "Steep is strong · flat is weak",
          ],
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Calculator check — sine",
    "Four quick problems in DEG mode. Enter each on your calculator before answers are revealed.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Introduction · Quick quiz",
      quizQuestions: [
        {
          id: "sin-60",
          prompt: "Using a scientific calculator in Degrees (DEG), enter Sin(60). What number do you get?",
          options: [
            { id: "a", text: "0.866" },
            { id: "b", text: "0.707" },
            { id: "c", text: "0.500" },
            { id: "d", text: "1.000" },
          ],
          correctAnswer: "a",
          explanation: "sin 60° ≈ 0.866 — used when checking sling leg tension at a 60° leg angle.",
        },
        {
          id: "sin-45",
          prompt: "Still in DEG mode, enter Sin(45). What number do you get?",
          options: [
            { id: "a", text: "0.500" },
            { id: "b", text: "0.707" },
            { id: "c", text: "0.866" },
            { id: "d", text: "0.577" },
          ],
          correctAnswer: "b",
          explanation: "sin 45° ≈ 0.707 — matches the ≈7/10 safe-load example from the previous slide.",
        },
        {
          id: "sin-30",
          prompt: "In DEG mode, enter Sin(30). What number do you get?",
          options: [
            { id: "a", text: "0.259" },
            { id: "b", text: "0.500" },
            { id: "c", text: "0.707" },
            { id: "d", text: "0.866" },
          ],
          correctAnswer: "b",
          explanation: "sin 30° = 0.500 — a 30° leg angle doubles tension per leg (T = W).",
        },
        {
          id: "inv-sin-60",
          prompt: "What is 1 divided by 0.866?",
          options: [
            { id: "a", text: "1.155" },
            { id: "b", text: "1.000" },
            { id: "c", text: "0.866" },
            { id: "d", text: "1.414" },
          ],
          correctAnswer: "a",
          explanation: "1 ÷ sin 60° ≈ 1.155 — the tension multiplier per leg at a 60° angle.",
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Length ÷ height — 45°",
    "At a 45° leg angle, compare sling length (L) to vertical height (H).",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/l-w.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=sling-angle",
      focusKicker: "Introduction · L and H",
      focusCallout: "L ÷ H = tension · H ÷ L = reduction",
      sections: [
        {
          heading: "45° example",
          headingEmphasis: "yellow",
          items: [
            "Vertical height H = 10 ft · sling leg length L ≈ 14.1 ft",
            "Both legs at 45° from horizontal — symmetric bridle",
          ],
        },
        {
          heading: "Tension",
          headingEmphasis: "red",
          items: [
            { label: "Length ÷ height → L ÷ H", emphasis: "yellow" },
            { label: "14.1 ÷ 10 = 1.41 tension factor per leg", emphasis: "red" },
            "Pull harder than half the load — multiply weight by ~1.41",
          ],
        },
        {
          heading: "Reduction",
          items: [
            { label: "Height ÷ length → H ÷ L", emphasis: "yellow" },
            { label: "10 ÷ 14.1 = 0.71 (~7/10 safe load)", emphasis: "red" },
            "Flatter angle — less of your WLL is available",
          ],
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "L ÷ H quiz — 60°, 45°, 30°",
    "Length ÷ height gives tension. Height ÷ length gives reduction. Work each before revealing.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Introduction · L and H quiz",
      quizQuestions: [
        {
          id: "lh-60",
          prompt: "H = 10 ft, L = 11.55 ft (60° leg angle). What is L ÷ H?",
          options: [
            { id: "a", text: "1.155" },
            { id: "b", text: "1.414" },
            { id: "c", text: "2.000" },
            { id: "d", text: "0.866" },
          ],
          correctAnswer: "a",
          explanation: "11.55 ÷ 10 = 1.155 — tension factor per leg at 60°.",
        },
        {
          id: "lh-45",
          prompt: "H = 10 ft, L = 14.1 ft (45° leg angle). What is L ÷ H?",
          options: [
            { id: "a", text: "1.155" },
            { id: "b", text: "1.414" },
            { id: "c", text: "2.000" },
            { id: "d", text: "0.707" },
          ],
          correctAnswer: "b",
          explanation: "14.1 ÷ 10 = 1.41 — tension factor per leg at 45°.",
        },
        {
          id: "lh-30",
          prompt: "H = 10 ft, L = 20 ft (30° leg angle). What is L ÷ H?",
          options: [
            { id: "a", text: "1.155" },
            { id: "b", text: "1.414" },
            { id: "c", text: "2.000" },
            { id: "d", text: "0.500" },
          ],
          correctAnswer: "c",
          explanation: "20 ÷ 10 = 2.000 — tension factor per leg at 30°.",
        },
        {
          id: "hl-45",
          prompt: "H = 10 ft, L = 14.1 ft (45° leg angle). What is H ÷ L?",
          options: [
            { id: "a", text: "1.414" },
            { id: "b", text: "0.866" },
            { id: "c", text: "0.707" },
            { id: "d", text: "0.500" },
          ],
          correctAnswer: "c",
          explanation: "10 ÷ 14.1 = 0.71 — reduction factor (~7/10 safe load) at 45°.",
        },
      ],
    }
  ),
  s(
    "intro",
    "Introduction",
    "Why Softeners?",
    "Wrap up the intro — tie angles, sine, and L ÷ H to protecting your sling at sharp corners.",
    [],
    {
      focus: true,
      panelBg: "white",
      ohrs: "15.39",
      critical: true,
      image: "/images/rigging/softner.png",
      lesson: "/lessons/module-5",
      focusKicker: "Introduction · Wrap-up",
      focusCallout: "Protect the sling — not just the corner",
      sections: [
        {
          heading: "You learned",
          headingEmphasis: "yellow",
          items: [
            "Rules, angles, sine, and L ÷ H",
            "Steeper legs → lower tension → more capacity",
          ],
        },
        {
          heading: "Why softeners",
          headingEmphasis: "red",
          items: [
            { label: "Sharp edges cut synthetic and wire rope — pad the sling", emphasis: "red" },
            { label: "OHSR 15.39 — protect slings at the contact point", emphasis: "yellow" },
            "Pads, sleeves, and engineered protection before the lift",
          ],
        },
      ],
    }
  ),

  // ── REGULATIONS (12) ~60 min ──
  s(
    "regulations",
    "Regulations & standards",
    "Rigging Removal Criteria",
    "",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/block.png",
      lesson: "/lessons/module-3",
      focusKicker: "Lesson 1",
      focusCallout: "Nothing lasts forever — some things never even start.",
      critical: true,
      sections: [
        {
          heading: "Removal criteria",
          headingEmphasis: "yellow",
          items: [
            "Worn, damaged, or altered rigging — remove from service",
            "Broken wires, cracked hooks, missing tags, bad fittings",
          ],
        },
        {
          heading: "Before the lift",
          headingEmphasis: "red",
          items: [
            { label: "OHSR 15.31 — inspect before every use", emphasis: "yellow" },
            { label: "If in doubt — tag out and do not use", emphasis: "red" },
            "Unmarked or makeshift hardware never starts safe",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "What All Rigging Must Have",
    "",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/pile-shackle.png",
      lesson: "/lessons/module-2",
      focusKicker: "Lesson 1",
      focusCallout: "If you can't read it, you can't rate it.",
      source: "WorkSafeBC OHSR 15.5",
      sections: [
        {
          heading: "Every fitting must show",
          headingEmphasis: "yellow",
          items: [
            "Manufacturer name or identification mark",
            "Product identifier — size, grade, or part number",
            { label: "Working load limit (WLL) — or enough info to look it up", emphasis: "yellow" },
          ],
        },
        {
          heading: "OHSR & standards",
          headingEmphasis: "red",
          items: [
            { label: "OHSR 15.5 — manufacturer's ID, product ID, and WLL", emphasis: "yellow" },
            { label: "ASME B30.26 — rigging hardware identification markings", emphasis: "yellow" },
            "B30.9 slings — capacity tags; catalogue on site when WLL is not stamped",
            { label: "Unmarked gear — qualified person rates it or remove from service", emphasis: "red" },
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Removal Criteria",
    "Remove the hook from service immediately if any of the following are found:",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/hooks.png",
      lesson: "/lessons/module-3",
      focusKicker: "Hooks",
      focusCallout:
        "When in doubt, tag it out. Never attempt to straighten, heat, weld, or repair a hook unless specifically permitted by the manufacturer and applicable standards.",
      source: "ASME B30.10 — Hooks (Current Edition)",
      critical: true,
      sections: [
        {
          heading: "Remove immediately",
          headingEmphasis: "yellow",
          items: [
            "Cracks, fractures, or unauthorized weld repairs",
            "Throat opening increased by more than 5% (max 6 mm / ¼ in. unless manufacturer specifies otherwise)",
            "More than 10% wear of the original cross-section",
            "Any visible bend or twist from the original plane of the hook",
            "Excessive corrosion, pitting, or other damage affecting strength",
            { label: "Damaged, missing, or non-functioning safety latch (where required)", emphasis: "red" },
            { label: "Missing or illegible manufacturer or WLL markings", emphasis: "yellow" },
            "Any condition identified by the manufacturer as requiring removal",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Removal Criteria",
    "Remove the chain sling from service immediately if any of the following are found:",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/chain.png",
      lesson: "/lessons/module-3",
      focusKicker: "Hoisting Chain",
      focusCallout:
        "Never weld, heat, straighten, or repair alloy hoisting chain unless performed by the manufacturer or a qualified repair facility authorized by the manufacturer.",
      source: "ASME B30.9 — Slings · ASME B30.26 — Rigging Hardware · manufacturer inspection criteria",
      critical: true,
      sections: [
        {
          heading: "Remove immediately",
          headingEmphasis: "yellow",
          items: [
            "Cracked, broken, bent, twisted, or stretched links",
            "Gouges, nicks, or excessive wear on any link",
            "Wear exceeding 10% of the original link diameter",
            "Elongation or deformation beyond the manufacturer's allowable limits",
            "Evidence of heat damage — discoloration, weld spatter, arc strikes, or high-temperature exposure",
            { label: "Severe corrosion or pitting that reduces the chain's strength", emphasis: "red" },
            { label: "Damaged or missing identification tag — grade, size, WLL, or serial number", emphasis: "yellow" },
            "Damaged hooks, master links, coupling links, or other sling components",
            "Any condition identified by the manufacturer as requiring removal",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Minimum Chain Grade",
    "Minimum grade for overhead lifting",
    [],
    {
      focus: true,
      panelBg: "chain",
      lesson: "/lessons/module-3",
      focusKicker: "Hoisting Chain",
      focusCallout:
        "Grade 80 is the minimum alloy chain grade for overhead lifting. Grade 70 transport chain is for load securement, not hoisting.",
      source: "ASME B30.9 — Slings and manufacturer requirements",
      critical: true,
      sections: [
        {
          heading: "Acceptable for hoisting",
          headingEmphasis: "yellow",
          items: [
            "Grade 80 or higher",
            "Grade 80 alloy chain",
            "Grade 100 alloy chain",
            "Grade 120 alloy chain",
            "Any higher-grade alloy chain specifically rated and marked for overhead lifting",
          ],
        },
        {
          heading: "Not acceptable for overhead lifting",
          headingEmphasis: "red",
          items: [
            "Grade 30 proof coil chain",
            "Grade 43 high test chain",
            "Grade 70 transport chain",
            { label: "Any chain not marked with the proper grade and WLL", emphasis: "red" },
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Required Identification Tag",
    "Under ASME B30.9 and common manufacturer requirements, a chain bridle sling must have a permanently affixed, durable identification tag.",
    [],
    {
      focus: true,
      panelBg: "chain",
      lesson: "/lessons/module-3",
      focusKicker: "Chain Bridle Sling",
      focusCallout:
        "This is one of the few sling types where reach (length) and number of legs are specifically required as part of the sling identification because they directly affect the sling's rated capacity.",
      source: "ASME B30.9 — Slings",
      critical: true,
      sections: [
        {
          heading: "Tag must show",
          headingEmphasis: "yellow",
          items: [
            "Manufacturer's name or trademark",
            "Manufacturer's code or stock number",
            "Chain grade (e.g., Grade 80, 100, or 120)",
            "Chain size (nominal diameter)",
            "Number of sling legs",
            "Reach (length)",
            { label: "Rated Working Load Limit (WLL) for the applicable hitch(es) and sling angle(s)", emphasis: "yellow" },
          ],
        },
        {
          heading: "Remove from service if",
          headingEmphasis: "red",
          items: [{ label: "Tag is missing or illegible", emphasis: "red" }],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Understanding Bridle Sling Capacity",
    "",
    [],
    {
      focus: true,
      panelBg: "chain",
      image: "/images/rigging/bridle.png",
      lesson: "/lessons/module-3",
      focusKicker: "Bridle Slings",
      focusCallout:
        "Never assume all four legs carry the load equally. Always calculate the lift using the applicable sling angle and the rated capacity of a three-leg bridle.",
      source: "WorkSafeBC OHS Regulation 15.33; ASME B30.9 — Slings",
      critical: true,
      sections: [
        {
          heading: "Capacity",
          headingEmphasis: "yellow",
          items: [
            "Bridle slings may have 2, 3, or 4 legs",
            { label: "The load is not always shared equally between all legs", emphasis: "yellow" },
            "Sling angle has a significant effect on leg tension and overall capacity",
            {
              label: "For WLL calculations, a 4-leg bridle sling is rated as a 3-leg sling",
              emphasis: "red",
            },
            "The WLL of the sling assembly is limited by the lowest-rated component",
            "Every leg, fitting, and master link must have adequate capacity for the lift",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Basic Load Calculations",
    "Always calculate load share, tension multiplier, and actual leg tension — then verify the leg WLL exceeds the calculated tension.",
    [],
    {
      focus: true,
      panelBg: "chalk",
      diagram: "bridle-math-lh",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=sling-angle",
      focusKicker: "Bridle Sling Math",
      focusCallout:
        "As the sling angle decreases, leg tension increases. A smaller angle = greater derating and higher forces in each sling leg.",
      critical: true,
      sections: [
        {
          heading: "1. Load Share",
          headingEmphasis: "yellow",
          items: [
            "Load per Leg = Total Load ÷ Number of Loaded Legs",
            "Example: 6,000 lb ÷ 2 = 3,000 lb per leg (before sling angle is considered)",
          ],
        },
        {
          heading: "2. Tension Multiplier (Derating)",
          headingEmphasis: "yellow",
          items: [
            "Leg Tension = Load per Leg × Tension Multiplier",
            "Tension Multiplier = L ÷ H",
            "or Tension Multiplier = 1 ÷ sin(θ)",
            "L = Sling Length · H = Vertical Height · θ = Sling Angle (from horizontal)",
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            "Load Share",
            "Tension Multiplier",
            "Actual Leg Tension",
            "Verify the leg WLL exceeds the calculated tension",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Common Sling Angles",
    "Leg Tension = (Load ÷ Number of Loaded Legs) × Tension Multiplier",
    [],
    {
      focus: true,
      panelBg: "chalk",
      diagram: "tension-multiplier-chart",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=sling-angle",
      focusKicker: "Tension Multipliers",
      focusCallout: "Lower angle = higher leg tension.",
      source: "WorkSafeBC OHSR Table 15-3 · ASME B30.9 — Slings",
      critical: true,
      sections: [
        {
          heading: "Angle chart",
          headingEmphasis: "yellow",
          items: ["90° · 1.00", "75° · 1.04", "60° · 1.15", "45° · 1.41", "30° · 2.00"],
        },
        {
          heading: "Proof",
          headingEmphasis: "red",
          items: [
            {
              label:
                "BC Regulation — Uses derating based on angle from the vertical (Table 15-3)",
              emphasis: "yellow",
            },
            {
              label:
                "Industry best practice (ASME B30.9) — Do not use sling angles below 30° from the horizontal unless approved by the manufacturer or a qualified person",
              emphasis: "red",
            },
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Calculator check — tension",
    "Four quick problems. Use the tension multiplier chart. Work each before answers are revealed.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Bridle Sling Math · Quick quiz",
      chart: "/slides/charts?chart=sling-angle",
      quizQuestions: [
        {
          id: "tm-45",
          prompt: "What is the tension multiplier for a 45° sling angle (from horizontal)?",
          options: [
            { id: "a", text: "1.15" },
            { id: "b", text: "1.41" },
            { id: "c", text: "2.00" },
            { id: "d", text: "1.00" },
          ],
          correctAnswer: "b",
          explanation: "At 45° from horizontal, the tension multiplier is 1.41 (L ÷ H or 1 ÷ sin 45°).",
        },
        {
          id: "load-share-2",
          prompt: "A 6,000 lb load is on a 2-leg bridle. What is the load share per leg before sling angle is considered?",
          options: [
            { id: "a", text: "6,000 lb" },
            { id: "b", text: "4,000 lb" },
            { id: "c", text: "3,000 lb" },
            { id: "d", text: "1,500 lb" },
          ],
          correctAnswer: "c",
          explanation: "Load per leg = Total Load ÷ Number of Loaded Legs → 6,000 ÷ 2 = 3,000 lb.",
        },
        {
          id: "leg-t-45",
          prompt: "6,000 lb load · 2-leg bridle · 45° sling angle. What is the tension in each sling leg?",
          options: [
            { id: "a", text: "3,000 lb" },
            { id: "b", text: "4,230 lb" },
            { id: "c", text: "6,000 lb" },
            { id: "d", text: "8,460 lb" },
          ],
          correctAnswer: "b",
          explanation: "Leg tension = (6,000 ÷ 2) × 1.41 = 3,000 × 1.41 = 4,230 lb.",
        },
        {
          id: "leg-t-30",
          prompt: "8,000 lb load · 2-leg bridle · 30° sling angle. What is the tension in each sling leg?",
          options: [
            { id: "a", text: "4,000 lb" },
            { id: "b", text: "5,640 lb" },
            { id: "c", text: "8,000 lb" },
            { id: "d", text: "2,000 lb" },
          ],
          correctAnswer: "c",
          explanation: "Leg tension = (8,000 ÷ 2) × 2.00 = 4,000 × 2.00 = 8,000 lb — each leg carries the full load weight at 30°.",
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Inspection & Removal Criteria",
    "Remove a wire rope sling from service if any of the following are found:",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/wirerope.png",
      secondaryImage: "/images/rigging/wirecut.png",
      lesson: "/lessons/module-3",
      focusKicker: "Wire Rope Slings",
      focusCallout: "When in doubt, tag it out.",
      source: "ASME B30.9 — Slings; WorkSafeBC OHSR Part 15",
      critical: true,
      sections: [
        {
          heading: "Remove from service",
          headingEmphasis: "yellow",
          items: [
            {
              label: "10 or more randomly distributed broken wires in one rope lay, or",
              emphasis: "yellow",
            },
            {
              label: "5 or more broken wires in one strand within one rope lay",
              emphasis: "yellow",
            },
            "Kinks, birdcaging, crushing, or core protrusion",
            "Heat damage, arc strikes, or weld spatter",
            {
              label: "Severe corrosion or pitting",
              emphasis: "red",
            },
            "End attachments are cracked, deformed, loose, or damaged",
            "Any reduction in rope diameter beyond the manufacturer's limits",
            {
              label: "Missing or illegible identification tag",
              emphasis: "yellow",
            },
          ],
        },
        {
          heading: "Sling Identification Tag",
          headingEmphasis: "yellow",
          items: [
            "Manufacturer's name or trademark",
            "Manufacturer's code or stock number",
            {
              label: "Rated Working Load Limit (WLL) for applicable hitch(es)",
              emphasis: "yellow",
            },
            "Rope diameter",
            "Number of legs (if multi-leg)",
            "Reach (length) (multi-leg assemblies)",
            "Legible identification tag",
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            "Inspect before each use",
            {
              label: "Never use a sling with a missing or illegible tag",
              emphasis: "red",
            },
            "Follow manufacturer removal criteria whenever they are more restrictive",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Removal Criteria",
    "Remove from service if any of the following are found:",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/websling.png",
      lesson: "/lessons/module-3",
      focusKicker: "Synthetic Web Slings",
      focusCallout: "No tag = No lift.",
      source: "ASME B30.9 — Slings · WSTDA WS-1 — Synthetic Web Slings · WorkSafeBC OHSR Part 15",
      critical: true,
      sections: [
        {
          heading: "Remove from service",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Missing or illegible identification tag",
              emphasis: "yellow",
            },
            "Acid or caustic burns",
            "Melting, charring, or heat damage",
            {
              label: "Holes, tears, cuts, punctures, or snags",
              emphasis: "red",
            },
            "Broken or worn stitching in load-bearing splices",
            "Excessive abrasive wear",
            {
              label: "Knots in any part of the sling",
              emphasis: "red",
            },
            "Discoloration, brittle fibers, or UV/environmental degradation affecting strength",
            "Damaged fittings (bent, cracked, worn, or corroded)",
            "Any manufacturer removal criteria are met",
          ],
        },
        {
          heading: "Required Identification Tag",
          headingEmphasis: "yellow",
          items: [
            "Manufacturer's name or trademark",
            "Manufacturer's code or stock number",
            {
              label: "Rated Working Load Limit (WLL) for applicable hitch(es)",
              emphasis: "yellow",
            },
            "Sling material (Nylon or Polyester)",
            "Number of legs (if multi-leg)",
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            {
              label: "No tag = No lift",
              emphasis: "red",
            },
            "Never tie knots to shorten a sling",
            "Protect web slings from sharp edges with suitable edge protection",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Removal Criteria",
    "Remove from service if any of the following are found:",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/roundsling.png",
      lesson: "/lessons/module-3",
      focusKicker: "Synthetic Round Slings",
      focusCallout: "No tag = No lift.",
      source: "ASME B30.9 — Slings · WSTDA RS-1 — Synthetic Roundslings · WorkSafeBC OHSR Part 15",
      critical: true,
      sections: [
        {
          heading: "Remove from service",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Missing or illegible identification tag",
              emphasis: "yellow",
            },
            {
              label: "Cuts, tears, punctures, or snags in the cover",
              emphasis: "red",
            },
            {
              label: "Exposed core yarns",
              emphasis: "red",
            },
            "Heat damage, melting, charring, or weld spatter",
            "Acid or caustic burns",
            "UV degradation, discoloration, or brittle fibers",
            {
              label: "Knots in the sling",
              emphasis: "red",
            },
            "Damaged fittings (if fitted)",
            "Any manufacturer removal criteria are met",
          ],
        },
        {
          heading: "Required Identification Tag",
          headingEmphasis: "yellow",
          items: [
            "Manufacturer's name or trademark",
            "Manufacturer's code or stock number",
            {
              label: "Rated Working Load Limit (WLL) for applicable hitch(es)",
              emphasis: "yellow",
            },
            "Core material (where required by the manufacturer)",
            "Number of legs (if multi-leg)",
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            {
              label: "No tag = No lift",
              emphasis: "red",
            },
            {
              label:
                "If the protective cover is damaged and the load-bearing core is exposed, remove the sling from service immediately",
              emphasis: "red",
            },
            "Protect round slings from sharp edges using appropriate edge protection",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Rated Hitch Capacities",
    "*When the manufacturer's tag does not specify otherwise.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/webslingtag.png",
      lesson: "/lessons/module-3",
      focusKicker: "Synthetic Sling Hitches",
      focusCallout: "Always use the WLL shown on the sling tag.",
      source: "ASME B30.9 — Section 9-2 (Synthetic Web Slings) and Section 9-6 (Polyester Roundslings)",
      critical: true,
      sections: [
        {
          heading: "Hitch ratings",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Vertical · 100%",
              emphasis: "yellow",
            },
            "Choker – Web Sling · 75%",
            "Choker – Polyester Roundsling · 75%",
            {
              label: "Basket · 200% (legs vertical & load balanced)",
              emphasis: "yellow",
            },
          ],
        },
        {
          heading: "Important",
          headingEmphasis: "red",
          items: [
            {
              label: "Always use the WLL shown on the sling tag",
              emphasis: "red",
            },
            {
              label:
                "If the tag does not list a choker rating: Synthetic Web Slings and Polyester Roundslings = 75% of the vertical rating",
              emphasis: "yellow",
            },
            "For choke angles less than 120°, additional derating is required using the ASME B30.9 choke-angle tables or the manufacturer's instructions",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Bunched & Pinched Slings",
    "Do not constrict the sling in the hook or fitting — and never knot or twist it to change length.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/pinchedsling.png",
      lesson: "/lessons/module-3",
      focusKicker: "Synthetic Sling Hitches",
      focusCallout: "ASME B30.9 — do not constrict, bunch, or pinch the sling",
      source: "ASME B30.9 — Slings · WorkSafeBC OHSR Part 15",
      sourceLinks: [
        { label: "ASME B30.9 — Slings", href: STANDARD_URLS.asmeB309 },
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
      ],
      critical: true,
      sections: [
        {
          heading: "Pinched / bunched",
          headingEmphasis: "yellow",
          items: [
            "Sling folded tight in a hook, shackle, or fitting",
            "Load not shared across the full web or roundsling body",
            "ASME B30.9 — do not constrict, bunch, or pinch by load, hook, or fitting",
            "Use hardware wide enough for the sling — or a wider connection",
          ],
        },
        {
          heading: "Knots & twists",
          headingEmphasis: "red",
          items: [
            "Never shorten or lengthen a sling by knotting or twisting",
            "Avoid twisting and kinking during the lift",
            "A knot in a synthetic sling — remove from service",
            "If it looks bunched, knotted, or twisted — stop and re-rig",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Common Hitch Configurations",
    "*Typical rated capacity when the manufacturer's tag does not specify otherwise.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/hitch.png",
      lesson: "/lessons/module-3",
      focusKicker: "Synthetic Sling Hitches",
      focusCallout: "Always use the manufacturer's sling tag to determine WLL.",
      source: "ASME B30.9 — Slings · WSTDA WS-1 — Synthetic Web Slings · WSTDA RS-1 — Synthetic Roundslings",
      critical: true,
      sections: [
        {
          heading: "Configurations",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Vertical Hitch · 100%",
              emphasis: "yellow",
            },
            {
              label: "Basket Hitch · 200%",
              emphasis: "yellow",
            },
            "Basket Hitch (Inclined Legs) · Apply Sling Angle Derating",
            "Single Choker Hitch · 75% (Web / Roundsling)",
            "Double-Leg Choker Hitch · 150% (Web / Roundsling)",
            {
              label: "Double Wrap Hitch · Use Manufacturer's WLL",
              emphasis: "red",
            },
          ],
        },
        {
          heading: "Key Points",
          headingEmphasis: "yellow",
          items: [
            "Vertical Hitch – One sling leg supports the load",
            "Basket Hitch – Up to 200% capacity when both legs are vertical and the load is balanced",
            "Basket Hitch (Inclined Legs) – Capacity decreases as the sling angle decreases",
            "Single Choker Hitch – Reduces capacity due to the choking action around the load",
            {
              label:
                "Double-Leg Choker Hitch – Twice the single choker rating (150% web / roundsling)",
              emphasis: "yellow",
            },
            {
              label:
                "Double Wrap Hitch – Increases grip; does not increase rated capacity unless the manufacturer specifically rates it",
              emphasis: "red",
            },
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            {
              label: "Always use the manufacturer's sling tag to determine the Working Load Limit (WLL)",
              emphasis: "red",
            },
            "Consider both the hitch type and sling angle when calculating sling capacity",
            "Protect synthetic slings from sharp edges",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Vertical vs Inclined Basket Legs",
    "Vertical legs can use the full basket rating. Inclined legs require sling-angle derating.",
    [],
    {
      focus: true,
      panelBg: "chalk",
      diagram: "basket-vertical-vs-inclined",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=sling-angle",
      focusKicker: "Synthetic Sling Hitches",
      focusCallout: "Inclined legs ≠ 200%. Apply sling-angle derating before you lift.",
      source:
        "ASME B30.9 · WSTDA WS-1 / RS-1 · WorkSafeBC OHSR Part 15 · BC Crane Safety",
      critical: true,
      sections: [
        {
          heading: "1. Vertical legs",
          headingEmphasis: "yellow",
          items: [
            "Basket rating = up to 200% of the vertical hitch WLL",
            "Both legs plumb and the load balanced",
          ],
        },
        {
          heading: "2. Inclined legs",
          headingEmphasis: "yellow",
          items: [
            "Do not use the full 200% basket rating",
            "Effective capacity = Basket WLL ÷ (L ÷ H)  or  × sin(θ)",
          ],
        },
        {
          heading: "Best practices",
          headingEmphasis: "red",
          items: [
            "Keep basket legs as vertical as practical",
            "Use a spreader or longer reach when the angle would go shallow",
            "Verify hitch type and angle against the sling tag WLL",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Choke & basket math quiz",
    "Use hitch ratings from the tag. Work each before revealing. Vertical WLL = 10,000 lb unless noted.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Synthetic Sling Hitches · Quick quiz",
      chart: "/slides/charts?chart=sling-angle",
      quizQuestions: [
        {
          id: "basket-200",
          prompt:
            "Vertical WLL = 10,000 lb. Basket hitch with both legs vertical and the load balanced. What is the rated capacity?",
          options: [
            { id: "a", text: "7,500 lb" },
            { id: "b", text: "10,000 lb" },
            { id: "c", text: "15,000 lb" },
            { id: "d", text: "20,000 lb" },
          ],
          correctAnswer: "d",
          explanation:
            "Vertical basket rating = 200% of vertical WLL → 10,000 × 2.00 = 20,000 lb.",
        },
        {
          id: "choker-web-75",
          prompt:
            "Vertical WLL = 10,000 lb. Single choker hitch on a synthetic web sling (choke angle ≥ 120°). What is the rated capacity?",
          options: [
            { id: "a", text: "5,000 lb" },
            { id: "b", text: "7,500 lb" },
            { id: "c", text: "8,000 lb" },
            { id: "d", text: "10,000 lb" },
          ],
          correctAnswer: "b",
          explanation:
            "Web sling single choker ≈ 75% of vertical → 10,000 × 0.75 = 7,500 lb (unless the tag says otherwise).",
        },
        {
          id: "choker-round-75",
          prompt:
            "Vertical WLL = 10,000 lb. Single choker hitch on a polyester roundsling (choke angle ≥ 120°). What is the rated capacity?",
          options: [
            { id: "a", text: "7,500 lb" },
            { id: "b", text: "8,000 lb" },
            { id: "c", text: "10,000 lb" },
            { id: "d", text: "16,000 lb" },
          ],
          correctAnswer: "a",
          explanation:
            "Polyester roundsling single choker ≈ 75% of vertical → 10,000 × 0.75 = 7,500 lb.",
        },
        {
          id: "double-leg-choke",
          prompt:
            "One web sling in a double-leg (two-leg) choker hitch. Vertical WLL = 10,000 lb. What is the rated capacity?",
          options: [
            { id: "a", text: "7,500 lb" },
            { id: "b", text: "10,000 lb" },
            { id: "c", text: "15,000 lb" },
            { id: "d", text: "20,000 lb" },
          ],
          correctAnswer: "c",
          explanation:
            "One-sling / double-leg choker = 2 × single choker. Web or roundsling: 2 × 75% = 150% → 10,000 × 1.50 = 15,000 lb.",
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Double Wrap & Double Choke",
    "Loads made of 2 or more pieces over 3 m (10 ft) long must be double wrapped and choked — OHSR 15.40.",
    [],
    {
      focus: true,
      panelBg: "white",
      ohrs: "15.40",
      image: "/images/rigging/hitch.png",
      lesson: "/lessons/module-5",
      focusKicker: "OHSR Part 15 · Slinging loads",
      focusCallout: "2+ pieces · over 3 m (10 ft) · double wrap · choke each sling",
      source: "WorkSafeBC OHSR 15.40 — Slinging loads",
      critical: true,
      sections: [
        {
          heading: "When it applies",
          headingEmphasis: "yellow",
          items: [
            {
              label: "2 or more pieces of material",
              emphasis: "yellow",
            },
            {
              label: "Each piece over 3 m (10 ft) long",
              emphasis: "yellow",
            },
          ],
        },
        {
          heading: "Required method",
          headingEmphasis: "red",
          items: [
            {
              label: "Use a 2-legged sling arrangement",
              emphasis: "red",
            },
            "Position the slings to keep the load horizontal during the lift",
            {
              label: "Each sling must be choked around the load with a double wrap",
              emphasis: "red",
            },
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            {
              label: "Double wrap + choke = grip that resists slip and bundle shift",
              emphasis: "red",
            },
            "Select and use the sling to prevent slipping or overstressing (OHSR 15.40(1))",
            "Protect synthetic slings from sharp edges",
          ],
        },
      ],
      sourceLinks: [{ label: "OHSR Part 15", href: STANDARD_URLS.ohrsPart15 }],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Never Hammer a Choke",
    "Never force the choke eye down the sling. Hammering creates an acute choke angle, damages the sling, and drops capacity below the tagged choker rating.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/hammerchoke.png",
      lesson: "/lessons/module-5",
      focusKicker: "Synthetic Sling Hitches",
      focusCallout: "Let the choke set naturally — never hammer it down.",
      source: "ASME B30.9 · WSTDA WS-1 / RS-1 / RS-2 · manufacturer instructions · WorkSafeBC OHSR Part 15",
      critical: true,
      sections: [
        {
          heading: "Choke angle reduction",
          headingEmphasis: "yellow",
          items: [
            {
              label: "120°–180° · × 1.00 (full choker rating)",
              emphasis: "yellow",
            },
            "105°–<120° · × 0.82",
            "90°–<105° · × 0.71",
            "60°–<90° · × 0.58",
            {
              label: "0°–<60° · × 0.50",
              emphasis: "red",
            },
          ],
        },
        {
          heading: "Why never hammer",
          headingEmphasis: "red",
          items: [
            {
              label: "Forces an acute choke angle well below 120°",
              emphasis: "red",
            },
            "Damages sling body fibres at the choke point",
            "Creates an unrated condition — capacity may be lower than any table predicts",
            "Let the choke settle naturally as the load is lifted",
          ],
        },
        {
          heading: "Standards & practice",
          headingEmphasis: "yellow",
          items: [
            {
              label: "ASME B30.9 — choke angles under 120° need manufacturer or qualified-person ratings",
              emphasis: "yellow",
            },
            "WSTDA WS-1 / RS-1 / RS-2 — multiply choker WLL by the angle reduction factor",
            "Manufacturer instructions — do not hammer, pound, or force a choke",
            "OHSR Part 15 — select and use slings to prevent slipping or overstressing",
          ],
        },
      ],
    }
  ),
  s(
    "regulations",
    "Regulations & standards",
    "Opposing Chokes",
    "Two choker hitches placed in opposite directions improve load stability and help prevent rolling or slipping on cylindrical loads.",
    [],
    {
      focus: true,
      panelBg: "oppose",
      diagram: "opposing-chokes",
      lesson: "/lessons/module-5",
      focusKicker: "Synthetic Sling Hitches",
      focusCallout: "Opposing chokes improve stability — not the sling's rated capacity.",
      source: "ASME B30.9 – Slings; WSTDA WS-1 – Synthetic Web Slings; WSTDA RS-1 – Synthetic Roundslings",
      critical: true,
      sections: [
        {
          heading: "When to Use Opposing Chokes",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Two choker hitches are placed in opposite directions around the load",
              emphasis: "yellow",
            },
            "Used to improve load stability and help prevent the load from rolling or slipping",
            "Commonly used on pipe, poles, logs, structural steel, and other cylindrical loads",
            "Position the chokes so they are evenly spaced and the load remains balanced",
            "Ensure both sling legs share the load as equally as possible",
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            "Use adequate edge protection where required",
            "Maintain proper sling angles",
            "The WLL is limited by the lowest-rated component and the manufacturer's hitch rating",
            {
              label: "Opposing chokes improve stability, not the sling's rated capacity",
              emphasis: "red",
            },
          ],
        },
      ],
    }
  ),
  s(
    "bth",
    "Below-the-hook",
    "Underhook Attachments",
    "Devices suspended from a crane hook to lift or handle a specific load — designed, rated, inspected, and used within WLL.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/selfdump.png",
      lesson: "/lessons/module-12",
      focusKicker: "Below-the-Hook · ASME B30.20",
      focusCallout: "No tag / illegible markings = do not use.",
      source: "ASME B30.20 – Below-the-Hook Lifting Devices; ASME BTH-1; WorkSafeBC OHSR Part 15",
      sourceLinks: [
        { label: "ASME B30.20", href: STANDARD_URLS.asmeB3020 },
        { label: "OHSR Part 15", href: STANDARD_URLS.ohrsPart15 },
      ],
      critical: true,
      sections: [
        {
          heading: "What Are Underhook Attachments?",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Devices suspended from a crane hook to lift or handle a specific load",
              emphasis: "yellow",
            },
            "Must be designed for the intended application and rated for the load",
            "Inspect before use — remove from service if damaged or defective",
            {
              label: "Never exceed the Working Load Limit (WLL)",
              emphasis: "red",
            },
            "Use only with compatible rigging and crane hook",
          ],
        },
        {
          heading: "Required markings · ASME B30.20",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Rated load — legible on the main structure or an attached tag",
              emphasis: "yellow",
            },
            "Manufacturer's name and contact information",
            "Serial number (unique unit identifier)",
            "Lifter weight if over 100 lb (45 kg)",
            "ASME BTH-1 Design Category and Service Class",
            "Electrical data when applicable (voltage / cold current)",
            {
              label: "Missing or illegible markings — remove from service",
              emphasis: "red",
            },
          ],
        },
        {
          heading: "Common Underhook Attachments",
          headingEmphasis: "yellow",
          items: [
            "Concrete buckets",
            "Lifting beams and spreader beams",
            "Plate clamps",
            "Pipe grabs and tongs",
            "Coil lifters",
            "Magnets",
            "Vacuum lifters",
          ],
        },
      ],
    }
  ),
  s(
    "bth",
    "Below-the-hook",
    "Concrete Buckets",
    "",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/concretebucket.png",
      lesson: "/lessons/module-12",
      focusKicker: "Below-the-Hook · Concrete pours",
      focusCallout: "As the bucket gets lighter, the boom or jib rises — anticipate the hook rising during the pour.",
      source:
        "ASME B30.5 – Mobile & Locomotive Cranes; ASME B30.20 – Below-the-Hook Lifting Devices; crane manufacturer operating manuals",
      sourceLinks: [
        { label: "ASME B30.5", href: STANDARD_URLS.asmeB305 },
        { label: "ASME B30.20", href: STANDARD_URLS.asmeB3020 },
      ],
      critical: true,
      sections: [
        {
          heading: "Boom/Jib Deflection During a Pour",
          headingEmphasis: "yellow",
          items: [
            "Inspect the bucket, bail, hinges, latch, and discharge gate before each use",
            {
              label: "Never exceed the bucket's Working Load Limit (WLL)",
              emphasis: "red",
            },
            {
              label: "As concrete discharges, load drops — boom/jib rebounds upward",
              emphasis: "yellow",
            },
            "Hook and bucket rise during the pour — keep clearance from forms, rebar, and personnel",
            "Open the discharge gate smoothly; avoid sudden crane movements",
          ],
        },
      ],
    }
  ),
  s(
    "bth",
    "Below-the-hook",
    "Personnel Manbaskets & DEPs",
    "Personnel platforms must be PE-designed and certified, permanently marked, and supported by rigging with a minimum 10:1 design factor.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/DEP.png",
      lesson: "/lessons/module-12",
      focusKicker: "Below-the-Hook · Personnel lifting",
      focusCallout: "Personnel lifting requires a 10:1 design factor for all supporting rigging.",
      source:
        "WorkSafeBC OHSR Part 14 / Part 15 · ASME B30.23 — Personnel Lifting Systems · manufacturer instructions",
      sourceLinks: [
        { label: "OHSR Part 14", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15", href: STANDARD_URLS.ohrsPart15 },
      ],
      critical: true,
      sections: [
        {
          heading: "Design Requirements",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Designed and certified by a Professional Engineer",
              emphasis: "yellow",
            },
            {
              label: "All supporting rigging — minimum Design Factor 10:1 (Breaking Strength ÷ WLL)",
              emphasis: "red",
            },
            "Bridle legs connected to a master link or shackle so the load is shared between the legs",
            "Inspect the platform and all rigging before every lift",
          ],
        },
        {
          heading: "Platform must be permanently marked with",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Working Load Limit (WLL)",
              emphasis: "yellow",
            },
            "Maximum occupants",
            "Empty weight",
            "All-Up Weight",
            "Platform identification",
          ],
        },
      ],
    }
  ),
  s(
    "bth",
    "Below-the-hook",
    "Personnel Manbaskets & DEPs",
    "When hoisting personnel, keep the crane at or below 50% of rated capacity and include every suspended component in the all-up weight.",
    [],
    {
      focus: true,
      panelBg: "personnel",
      image: "/images/rigging/manbasket.png",
      lesson: "/lessons/module-12",
      focusKicker: "Below-the-Hook · Personnel lifting",
      focusCallout: "10:1 Design Factor ≠ 50% Crane Capacity",
      source:
        "WorkSafeBC OHSR Part 14 / Part 15 · ASME B30.23 — Personnel Lifting Systems · manufacturer instructions",
      sourceLinks: [
        { label: "OHSR Part 14", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15", href: STANDARD_URLS.ohrsPart15 },
      ],
      critical: true,
      sections: [
        {
          heading: "Crane Capacity & All-Up Weight",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Do not load the crane beyond 50% of its rated capacity when lifting a personnel platform",
              emphasis: "red",
            },
            "Calculate crane capacity using the total suspended load — not just the occupants",
            "Lift personnel smoothly with continuous communication",
          ],
        },
        {
          heading: "All-Up Weight includes",
          headingEmphasis: "yellow",
          items: [
            "Platform",
            "Personnel",
            "Tools and equipment",
            "Hook block",
            "Slings, shackles, master links, and all rigging",
          ],
        },
        {
          heading: "Key Concept",
          headingEmphasis: "red",
          items: [
            {
              label:
                "10:1 Design Factor — applies to platform rigging (slings, shackles, master links). Minimum breaking strength must be at least 10 × all-up weight",
              emphasis: "yellow",
            },
            {
              label:
                "50% Crane Capacity — separate WorkSafeBC limit on how much of the crane's rated capacity may be used when hoisting personnel",
              emphasis: "red",
            },
          ],
        },
      ],
    }
  ),
  s(
    "ratings",
    "WLL, design factor & strength",
    "Design Factor vs Breaking Strength vs WLL",
    "",
    [],
    {
      focus: true,
      panelBg: "strength",
      diagram: "sling-design-factors",
      lesson: "/lessons/module-2",
      focusKicker: "Ratings · ASME B30.9",
      focusCallout: "Never calculate WLL from an estimated breaking strength — use the manufacturer's tag.",
      source: "ASME B30.9 — Slings; WorkSafeBC OHSR Part 15",
      sourceLinks: [
        { label: "ASME B30.9", href: STANDARD_URLS.asmeB309 },
        { label: "OHSR Part 15", href: STANDARD_URLS.ohrsPart15 },
      ],
      critical: true,
      sections: [
        {
          heading: "Key Definitions",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Breaking Strength — load at which the sling or component is expected to fail",
              emphasis: "yellow",
            },
            {
              label: "Design Factor — Breaking Strength ÷ WLL",
              emphasis: "yellow",
            },
            {
              label: "WLL — maximum load permitted during normal service",
              emphasis: "yellow",
            },
          ],
        },
        {
          heading: "Example",
          headingEmphasis: "yellow",
          items: [
            "Wire rope: 25,000 lb ÷ 5 = 5,000 lb WLL",
            "Grade 80 alloy chain: 20,000 lb ÷ 4 = 5,000 lb WLL",
          ],
        },
        {
          heading: "Remember",
          headingEmphasis: "red",
          items: [
            {
              label: "Always use the manufacturer's tag — never estimate breaking strength",
              emphasis: "red",
            },
            {
              label: "Personnel platforms require 10:1 supporting rigging under WorkSafeBC (not 4:1 / 5:1)",
              emphasis: "red",
            },
          ],
        },
      ],
    }
  ),
  s(
    "ratings",
    "WLL, design factor & strength",
    "Calculator check — strength & WLL",
    "Four quick problems. Use WLL = Breaking Strength ÷ Design Factor. Work each before answers are revealed.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Ratings · Quick quiz",
      lesson: "/lessons/module-2",
      quizQuestions: [
        {
          id: "wll-wire-5",
          prompt:
            "A wire rope sling has a Minimum Breaking Strength of 25,000 lb. Design factor = 5. What is the WLL?",
          options: [
            { id: "a", text: "2,500 lb" },
            { id: "b", text: "5,000 lb" },
            { id: "c", text: "12,500 lb" },
            { id: "d", text: "20,000 lb" },
          ],
          correctAnswer: "b",
          explanation: "WLL = Breaking Strength ÷ Design Factor → 25,000 ÷ 5 = 5,000 lb.",
        },
        {
          id: "wll-chain-4",
          prompt:
            "A Grade 80 alloy chain sling has a Minimum Breaking Strength of 20,000 lb. Design factor = 4. What is the WLL?",
          options: [
            { id: "a", text: "4,000 lb" },
            { id: "b", text: "5,000 lb" },
            { id: "c", text: "8,000 lb" },
            { id: "d", text: "16,000 lb" },
          ],
          correctAnswer: "b",
          explanation: "WLL = Breaking Strength ÷ Design Factor → 20,000 ÷ 4 = 5,000 lb.",
        },
        {
          id: "mbs-wire-5",
          prompt:
            "A wire rope sling is tagged for 8,000 lb WLL. Design factor = 5. What Minimum Breaking Strength is required?",
          options: [
            { id: "a", text: "8,000 lb" },
            { id: "b", text: "16,000 lb" },
            { id: "c", text: "32,000 lb" },
            { id: "d", text: "40,000 lb" },
          ],
          correctAnswer: "d",
          explanation: "Breaking Strength = WLL × Design Factor → 8,000 × 5 = 40,000 lb.",
        },
        {
          id: "mbs-chain-4",
          prompt:
            "An alloy chain sling is tagged for 6,000 lb WLL. Design factor = 4. What Minimum Breaking Strength is required?",
          options: [
            { id: "a", text: "12,000 lb" },
            { id: "b", text: "18,000 lb" },
            { id: "c", text: "24,000 lb" },
            { id: "d", text: "30,000 lb" },
          ],
          correctAnswer: "c",
          explanation: "Breaking Strength = WLL × Design Factor → 6,000 × 4 = 24,000 lb.",
        },
      ],
    }
  ),
  s(
    "math",
    "Material Weights",
    "Volume × Density",
    "Estimate load weight from material density — then verify with tags, drawings, or a scale when the lift is critical.",
    [
      "Material density chart",
      "Worked examples: lumber, concrete, steel, cast iron",
      "Metric concrete bucket volume",
      "Center of gravity — symbol, offset load, hook over CG",
    ],
    {
      cover: true,
      panelBg: "cover",
      image: "/images/math/dirtpilemath.png",
      focusKicker: "Rigging math",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=density",
    }
  ),
  s(
    "math",
    "Rigging math",
    "Material Weights Chart",
    "Density, lumber per LF, plywood and drywall by thickness.",
    [],
    {
      focus: true,
      panelBg: "concrete",
      formula: "material-weights-chart",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=density",
      focusKicker: "Rigging math · Field charts",
      focusCallout: "4×8 sheet = 32 ft² · Wt = rate × length or area",
      critical: true,
      sections: [
        {
          heading: "Density | lb/ft³",
          headingEmphasis: "yellow",
          items: [
            "Steel · 490",
            "Cast iron · 450",
            "Copper · 560",
            "Aluminum · 170",
            "Concrete (plain) · 150",
            "Reinf. concrete · 160–170",
            "Douglas fir · 35",
            "Water · 62.4",
            "Sand dry / wet · 100 / 120",
            "Gravel dry / wet · 100 / 120",
            "Soil dry / wet · 85 / 110",
            "Brick / masonry · ≈ 120",
          ],
        },
        {
          heading: "Lumber | lb/LF",
          headingEmphasis: "yellow",
          items: [
            "2×4 · 1.5",
            "2×6 · 2.0",
            "2×8 · 2.6",
            "2×10 · 3.3",
            "2×12 · 4.7",
            "4×4 · 2.9",
            "4×6 · 4.3",
            "4×8 · 5.8",
            "6×6 · 6.5",
            "6×8 · 8.6",
            "8×8 · 11.5",
            "Wt = lb/LF × length (ft)",
          ],
        },
        {
          heading: "Plywood | lb/ft²",
          headingEmphasis: "yellow",
          items: [
            "⅛ in · ≈ 0.4",
            "¼ in · ≈ 0.75",
            "⅜ in · ≈ 1.1",
            "½ in · ≈ 1.5",
            "⅝ in · ≈ 1.9",
            "¾ in · ≈ 2.3",
            "1 in · ≈ 3.0",
            "1⅛ in · ≈ 3.4",
            "½ in OSB · ≈ 1.6",
            "¾ in OSB · ≈ 2.3",
            "¾ in MDF · ≈ 3.7",
            "4×8 × rate = sheet wt",
          ],
        },
        {
          heading: "Drywall | lb/ft²",
          headingEmphasis: "yellow",
          items: [
            "¼ in drywall · ≈ 1.2",
            "⅜ in drywall · ≈ 1.4",
            "½ in drywall · ≈ 1.7",
            "⅝ in Type X · ≈ 2.3",
            "¾ in drywall · ≈ 2.9",
            "½ in cement board · ≈ 3.0",
            "½ in fiber-cement · ≈ 2.8",
            "½ in 4×8 drywall · ≈ 54 lb",
            "⅝ in 4×8 Type X · ≈ 74 lb",
            "½ in 4×12 drywall · ≈ 82 lb",
            "Pallet / banding · add extra",
            "Wt = lb/ft² × area",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Douglas Fir Lumber Bundle",
    "Answer: 8,960 lb",
    [],
    {
      focus: true,
      panelBg: "concrete",
      image: "/images/math/lumbermath.png",
      lesson: "/lessons/appendix-b",
      focusKicker: "Rigging math · Lumber",
      focusCallout: "Rule: Weight = Volume × Density",
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Size: 16 ft long × 4 ft wide × 4 ft high",
            "Density: 35 lb per ft³ (Douglas fir)",
          ],
        },
        {
          heading: "Step 1 — Volume",
          headingEmphasis: "yellow",
          items: [
            "16 × 4 = 64",
            "64 × 4 = 256 ft³",
          ],
        },
        {
          heading: "Step 2 — Weight",
          headingEmphasis: "yellow",
          items: [
            "256 × 35 = 8,960 lb",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["8,960 lb"],
        },
      ],
    }
  ),

  s(
    "math",
    "Rigging math",
    "Lock Block Weight",
    "Answer: 3,750 lb",
    [],
    {
      focus: true,
      panelBg: "concrete",
      image: "/images/math/lockblockmath.png",
      lesson: "/lessons/appendix-b",
      focusKicker: "Rigging math · Concrete",
      focusCallout: "Rule: Weight = Volume × Density",
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Size: 4 ft × 2.5 ft × 2.5 ft",
            "Density: 150 lb per ft³ (concrete)",
          ],
        },
        {
          heading: "Step 1 — Volume",
          headingEmphasis: "yellow",
          items: [
            "2.5 × 2.5 = 6.25",
            "4 × 6.25 = 25 ft³",
          ],
        },
        {
          heading: "Step 2 — Weight",
          headingEmphasis: "yellow",
          items: [
            "25 × 150 = 3,750 lb",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["3,750 lb"],
        },
      ],
    }
  ),  s(
    "math",
    "Rigging math",
    "Plywood Stack Weight",
    "Answer: 960 lb",
    [],
    {
      focus: true,
      panelBg: "concrete",
      image: "/images/math/plywoodmath.png",
      lesson: "/lessons/appendix-b",
      focusKicker: "Rigging math · Plywood",
      focusCallout: "Rule: Weight = Area × lb/ft² × number of sheets",
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Each sheet: 4 ft × 10 ft",
            "Stack height: 8 in · 16 sheets of 1/2 in plywood",
            "1/2 in plywood ≈ 1.5 lb/ft²",
          ],
        },
        {
          heading: "Step 1 — Area of one sheet",
          headingEmphasis: "yellow",
          items: ["4 × 10 = 40 ft²"],
        },
        {
          heading: "Step 2 — Weight of one sheet",
          headingEmphasis: "yellow",
          items: ["40 × 1.5 = 60 lb"],
        },
        {
          heading: "Step 3 — Whole stack",
          headingEmphasis: "yellow",
          items: ["16 × 60 = 960 lb"],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["960 lb"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Steel Beam Weight",
    "Answer: 256 lb",
    [],
    {
      focus: true,
      panelBg: "concrete",
      image: "/images/math/beammath.png",
      lesson: "/lessons/appendix-b",
      focusKicker: "Rigging math · Steel",
      focusCallout: "Rule: Find steel area → make ft³ → × 490",
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Beam: 8 in tall × 4 in wide × 10 ft long",
            "Flanges 5/8 in thick · web 3/8 in thick",
            "Density: 490 lb per ft³ (steel)",
          ],
        },
        {
          heading: "Step 1 — Flange area",
          headingEmphasis: "yellow",
          items: [
            "One flange: 4 × 5/8 = 2.5 in²",
            "Two flanges: 2.5 × 2 = 5.0 in²",
          ],
        },
        {
          heading: "Step 2 — Web area",
          headingEmphasis: "yellow",
          items: [
            "Web height: 8 − 5/8 − 5/8 = 6.75 in",
            "Web area: 6.75 × 3/8 = 2.53 in²",
          ],
        },
        {
          heading: "Step 3 — Weight",
          headingEmphasis: "yellow",
          items: [
            "Total area: 5.0 + 2.53 = 7.53 in²",
            "Volume: 7.53 × 120 ÷ 1728 ≈ 0.52 ft³",
            "0.52 × 490 ≈ 256 lb",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["256 lb"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Cast Iron Pipe Weight",
    "Answer: 239 lb",
    [],
    {
      focus: true,
      panelBg: "concrete",
      image: "/images/math/castironpipemath.png",
      lesson: "/lessons/appendix-b",
      focusKicker: "Rigging math · Cast iron",
      focusCallout: "Rule: Metal only = outside circle − inside hole",
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Outside: 10 in · Inside: 9.5 in · Length: 10 ft",
            "Density: 450 lb per ft³ (cast iron)",
          ],
        },
        {
          heading: "Step 1 — Metal ring area",
          headingEmphasis: "yellow",
          items: [
            "10² = 100 · 9.5² = 90.25",
            "100 − 90.25 = 9.75",
            "Area ≈ 0.785 × 9.75 = 7.66 in²",
          ],
        },
        {
          heading: "Step 2 — Volume",
          headingEmphasis: "yellow",
          items: [
            "Length = 10 ft = 120 in",
            "7.66 × 120 = 919 in³",
            "919 ÷ 1728 ≈ 0.53 ft³",
          ],
        },
        {
          heading: "Step 3 — Weight",
          headingEmphasis: "yellow",
          items: [
            "0.53 × 450 ≈ 239 lb",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["239 lb"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Concrete Bucket — Metric Volume",
    "Answer: 0.83 m³",
    [],
    {
      focus: true,
      panelBg: "concrete",
      image: "/images/math/concretebucketmath.png",
      lesson: "/lessons/appendix-b",
      focusKicker: "Rigging math · Metric",
      focusCallout: "Rule: Volume = Weight ÷ Density",
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Concrete in bucket: 2,000 kg",
            "1 m³ of concrete ≈ 2,400 kg",
          ],
        },
        {
          heading: "Step 1 — Why 2,400 kg/m³?",
          headingEmphasis: "yellow",
          items: [
            "Concrete ≈ 150 lb/ft³",
            "That converts to about 2,400 kg/m³",
          ],
        },
        {
          heading: "Step 2 — Find the volume",
          headingEmphasis: "yellow",
          items: [
            "2,000 ÷ 2,400 = 0.83 m³",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["0.83 m³ of concrete"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Calculator check — material weights",
    "Four new problems — not the lesson examples. Use the density / LF / sheet chart. Work each before answers are revealed.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Rigging math · Quick quiz",
      lesson: "/lessons/appendix-b",
      chart: "/slides/charts?chart=density",
      quizQuestions: [
        {
          id: "mw-wetsand",
          prompt:
            "A pile of wet sand is about 8 ft × 4 ft × 2 ft. Wet sand ≈ 120 lb/ft³. About what is the weight?",
          options: [
            { id: "a", text: "3,840 lb" },
            { id: "b", text: "5,760 lb" },
            { id: "c", text: "7,680 lb" },
            { id: "d", text: "9,600 lb" },
          ],
          correctAnswer: "c",
          explanation: "Volume = 8 × 4 × 2 = 64 ft³. Weight = 64 × 120 = 7,680 lb.",
        },
        {
          id: "mw-lumber-lf",
          prompt:
            "You have 40 pieces of 2×4 lumber, each 16 ft long. Chart rate = 1.5 lb/LF. What is the total weight?",
          options: [
            { id: "a", text: "480 lb" },
            { id: "b", text: "640 lb" },
            { id: "c", text: "960 lb" },
            { id: "d", text: "1,280 lb" },
          ],
          correctAnswer: "c",
          explanation: "Wt = lb/LF × length × count → 1.5 × 16 × 40 = 960 lb.",
        },
        {
          id: "mw-drywall",
          prompt:
            "A pallet has 15 sheets of 1/2 in 4×8 drywall. Chart says ≈ 54 lb per sheet. About what does the pallet weigh?",
          options: [
            { id: "a", text: "540 lb" },
            { id: "b", text: "810 lb" },
            { id: "c", text: "900 lb" },
            { id: "d", text: "1,080 lb" },
          ],
          correctAnswer: "b",
          explanation: "15 × 54 = 810 lb (banding/pallet weight not included).",
        },
        {
          id: "mw-steel-plate",
          prompt:
            "A steel plate is 6 ft × 3 ft × 1 in thick. Steel = 490 lb/ft³. What is the weight?",
          options: [
            { id: "a", text: "490 lb" },
            { id: "b", text: "735 lb" },
            { id: "c", text: "980 lb" },
            { id: "d", text: "1,470 lb" },
          ],
          correctAnswer: "b",
          explanation:
            "Thickness = 1/12 ft. Volume = 6 × 3 × (1/12) = 1.5 ft³. Weight = 1.5 × 490 = 735 lb.",
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Center of Gravity Symbol",
    "The international CG mark — the balance point of the load.",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/centergravitysymbol.png",
      lesson: "/lessons/module-6",
      ohrs: "14.46",
      focusKicker: "Rigging math · Center of gravity",
      focusCallout: "Weight is evenly distributed on all sides of this point",
      source: "WorkSafeBC OHSR Part 14 · BC Crane Safety — rigger competency (OHSR Part 15)",
      sourceLinks: [
        { label: "OHSR Part 14 — Cranes & hoists", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — rigger competency", href: STANDARD_URLS.bccsaCompetency },
      ],
      critical: true,
      sections: [
        {
          heading: "International symbol",
          headingEmphasis: "yellow",
          items: [
            "Circle divided into four quadrants — alternating red / white",
            "Marks the load’s center of gravity (CG)",
          ],
        },
        {
          heading: "What CG means",
          headingEmphasis: "yellow",
          items: [
            "The point where weight is evenly distributed on all sides",
            "The balance point of the load in every direction",
            "Loads rotate until CG hangs under the hook",
          ],
        },
        {
          heading: "Why it matters",
          headingEmphasis: "red",
          items: [
            {
              label: "Miss the CG → tilt, swing, unequal sling forces, shock loading",
              emphasis: "red",
            },
            "BC Crane Safety: riggers must assess load weight, stability, and balance before the lift (OHSR Part 15)",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Offset Load — Sea Can CG",
    "Answer: 12 ft toward the heavy side",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/seacanmath.png",
      lesson: "/lessons/module-6",
      ohrs: "14.46",
      focusKicker: "Rigging math · Offset CG",
      focusCallout: "Rule: Distance = (Heavy side ÷ Total) × Length",
      source: "WorkSafeBC OHSR Part 14 · BC Crane Safety — rigger competency (OHSR Part 15)",
      sourceLinks: [
        { label: "OHSR Part 14 — Cranes & hoists", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — rigger competency", href: STANDARD_URLS.bccsaCompetency },
      ],
      critical: true,
      sections: [
        {
          heading: "Known",
          headingEmphasis: "yellow",
          items: [
            "Sea can = 2,000 lb · Crate = 2,000 lb",
            "Total weight = 4,000 lb",
            "Container length = 16 ft",
            "Crate offset → heavy side 3,000 lb · light side 1,000 lb",
          ],
        },
        {
          heading: "Step 1 — Heavy-side share",
          headingEmphasis: "yellow",
          items: [
            "3,000 ÷ 4,000 = 0.75",
          ],
        },
        {
          heading: "Step 2 — Distance from light end",
          headingEmphasis: "yellow",
          items: [
            "16 × 0.75 = 12 ft",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["CG is 12 ft toward the heavy side"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Hook Directly Over CG",
    "Always place the hook directly above the center of gravity.",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/directlybelow.png",
      lesson: "/lessons/module-6",
      ohrs: "14.46",
      focusKicker: "Rigging math · Lift setup",
      focusCallout: "Hook must hang DIRECTLY over the center of gravity",
      source: "WorkSafeBC OHSR 14.46 — Vertical load line · BC Crane Safety — rigger competency",
      sourceLinks: [
        { label: "OHSR 14.46 — Vertical load line", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — rigger competency", href: STANDARD_URLS.bccsaCompetency },
      ],
      critical: true,
      sections: [
        {
          heading: "The rule",
          headingEmphasis: "yellow",
          items: [
            {
              label: "Hook ALWAYS directly over the center of gravity",
              emphasis: "red",
            },
            "Pick points / sling arrangement must keep CG under the hook",
            "Test-lift a short distance to confirm balance before the full hoist",
          ],
        },
        {
          heading: "WorkSafeBC OHSR 14.46",
          headingEmphasis: "yellow",
          items: [
            "Load line above the hook / load block must stay vertical",
            "Prevents side-loading the crane and uncontrolled swing",
          ],
        },
        {
          heading: "If the hook is off the CG",
          headingEmphasis: "red",
          items: [
            {
              label: "Load tilts or swings until CG hangs under the hook",
              emphasis: "red",
            },
            "Unequal leg loading · shock · possible tip or drop",
            "Changing CG during a lift is treated as a critical-lift condition under Part 14",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Reading Rigging Charts",
    "Wire Rope & Chain Charts",
    "Pick the right size from the chart — then use Sin() from one column.",
    [
      "Wire rope SWL chart",
      "Grade T (8) chain chart",
      "Single · choker · basket · bridle",
      "Vertical + Sin()",
    ],
    {
      cover: true,
      panelBg: "cover",
      formula: "chart-guide",
      image: "/images/math/wireropechart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      focusKicker: "Rigging math",
    }
  ),
  s(
    "math",
    "Rigging math",
    "Wire Rope Sling Chart",
    "Find the diameter row. Then read the hitch column for your lift.",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/wireropechart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      ohrs: "15.5",
      focusKicker: "Reading charts · Wire rope",
      focusCallout: "Diameter row × hitch column = safe load",
      source: "OH&S design factor 5 · ASME B30.9 — Slings · WorkSafeBC OHSR Part 15",
      sourceLinks: [
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "ASME B30.9 — Slings", href: STANDARD_URLS.asmeB309 },
      ],
      critical: true,
      sections: [
        {
          heading: "Chart columns",
          headingEmphasis: "yellow",
          items: [
            "Single vertical",
            "Single choker",
            "Basket — legs straight up",
            "2-leg bridle — 60°, 45°, or 30°",
          ],
        },
        {
          heading: "1/2 in example",
          headingEmphasis: "yellow",
          items: [
            "Vertical = 4,700 lb",
            "Choker = 3,500 lb",
            "Basket = 9,400 lb",
            "2-leg @ 60° = 8,150 lb",
          ],
        },
        {
          heading: "Extra notes",
          headingEmphasis: "red",
          items: [
            "Choker on a bridle → × 0.75",
            "Double basket → × 2",
            "Trust the sling tag over the classroom chart",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Chain Sling Chart",
    "Same layout as wire rope. Use Grade T (8) alloy — links stamped 8 or T.",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/chainchart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      ohrs: "15.5",
      focusKicker: "Reading charts · Chain",
      focusCallout: "Same columns — Grade T (8) numbers",
      source: "OH&S design factor 5 · ASME B30.9 — Slings · WorkSafeBC OHSR Part 15",
      sourceLinks: [
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "ASME B30.9 — Slings", href: STANDARD_URLS.asmeB309 },
      ],
      critical: true,
      sections: [
        {
          heading: "Chart columns",
          headingEmphasis: "yellow",
          items: [
            "Single vertical",
            "Single choker",
            "Basket — legs straight up",
            "2-leg bridle — 60°, 45°, or 30°",
          ],
        },
        {
          heading: "1/2 in example",
          headingEmphasis: "yellow",
          items: [
            "Vertical = 9,600 lb",
            "Choker = 7,200 lb",
            "Basket = 19,200 lb",
            "2-leg @ 45° = 13,574 lb",
          ],
        },
        {
          heading: "Field checks",
          headingEmphasis: "red",
          items: [
            "Links stamped 8 or T",
            "Scrap if wear is over 10%",
            "Choker on bridle → × 0.75",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "How to Pick Diameter",
    "Fulford-style chart reading: hitch column · lower angle · then multiply if choked or double basket.",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/wireropechart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      focusKicker: "Reading charts · Selection",
      focusCallout: "Angle between chart columns? Always use the LOWER column",
      source: "CraneSafe / Fulford chart practice · ASME B30.9 · WorkSafeBC OHSR Part 15",
      sourceLinks: [
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — rigger competency", href: STANDARD_URLS.bccsaCompetency },
      ],
      critical: true,
      sections: [
        {
          heading: "Problem gives you",
          headingEmphasis: "yellow",
          items: [
            "Load weight",
            "Wire rope or chain",
            "Hitch (vertical · choker · basket · bridle)",
            "Sling angle from horizontal",
          ],
        },
        {
          heading: "Chart steps",
          headingEmphasis: "yellow",
          items: [
            "Open the hitch / angle column",
            "Angle not listed? Use the next LOWER column (50° → 45°)",
            "Read down until capacity ≥ load",
            "That row is the minimum size",
          ],
        },
        {
          heading: "Extra multipliers",
          headingEmphasis: "red",
          items: [
            {
              label: "2-leg bridle choked → multiply chart value × 0.75",
              emphasis: "red",
            },
            "Double basket hitch → multiply chart value × 2",
            "Sling tag always wins over the classroom chart",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Vertical + Sin()",
    "Same answer as the angle column — built from Vertical only.",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/chainchart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts?chart=sine-angle",
      focusKicker: "Reading charts · Sin()",
      focusCallout: "Chart column ≈ Vertical × Legs × Sin(angle)",
      source: "Sling angle from horizontal · CraneSafe / Fulford practice format",
      critical: true,
      sections: [
        {
          heading: "From Vertical (V)",
          headingEmphasis: "yellow",
          items: [
            "Vertical hitch = V",
            "Choker = V × 0.75",
            "Basket (legs straight) = V × 2",
            "2-leg bridle = V × 2 × Sin(angle)",
          ],
        },
        {
          heading: "Sin() values (DEG)",
          headingEmphasis: "yellow",
          items: [
            "Sin(60°) ≈ 0.866",
            "Sin(45°) ≈ 0.707",
            "Sin(30°) = 0.500",
          ],
        },
        {
          heading: "Why it matches the chart",
          headingEmphasis: "yellow",
          items: [
            "1/2 in wire · V = 4,700",
            "2-leg @ 60° → 4,700 × 2 × 0.866 ≈ 8,140",
            "Chart 60° column shows 8,150",
          ],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Example — Wire Rope Bridle",
    "Answer: 1/2 in · attachment distance 20 ft",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/wireropechart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      focusKicker: "Reading charts · Fulford-style example",
      focusCallout: "Load 7,500 lb · 2-leg bridle @ 60° · legs each 20 ft",
      critical: true,
      sections: [
        {
          heading: "Problem",
          headingEmphasis: "yellow",
          items: [
            "Load = 7,500 lb",
            "2-leg wire rope bridle @ 60°",
            "Each leg = 20 ft · same length",
            "What minimum size? What distance between attachments?",
          ],
        },
        {
          heading: "Step 1 — Chart column",
          headingEmphasis: "yellow",
          items: [
            "Use the 60° 2-leg column",
            "1/2 in @ 60° = 8,150 lb ≥ 7,500 lb",
          ],
        },
        {
          heading: "Step 2 — Sin() check",
          headingEmphasis: "yellow",
          items: [
            "Half load = 3,750 lb",
            "3,750 ÷ Sin(60°) ≈ 3,750 ÷ 0.866 ≈ 4,330 lb",
            "1/2 in Vertical = 4,700 lb ≥ 4,330 lb",
          ],
        },
        {
          heading: "Step 3 — Distance",
          headingEmphasis: "yellow",
          items: [
            "Equal legs → equal angles",
            "60° + 60° + top angle = 180° → top is 60°",
            "Equilateral → distance = leg length = 20 ft",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["1/2 in wire rope · 20 ft between attachments"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Example — Chain Bridle Choked",
    "Answer: 1/2 in Grade T (8) chain",
    [],
    {
      focus: true,
      panelBg: "cog",
      image: "/images/math/chainchart.png",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      focusKicker: "Reading charts · Fulford-style example",
      focusCallout: "Load 10,000 lb · 2-leg bridle choked @ 50°",
      critical: true,
      sections: [
        {
          heading: "Problem",
          headingEmphasis: "yellow",
          items: [
            "Load = 10,000 lb beam",
            "Grade T (8) chain",
            "2-leg bridle · each leg choked",
            "Sling angle = 50°",
          ],
        },
        {
          heading: "Step 1 — Angle column",
          headingEmphasis: "yellow",
          items: [
            "50° is not on the chart",
            "Use the next LOWER column → 45°",
          ],
        },
        {
          heading: "Step 2 — Choker reduction",
          headingEmphasis: "yellow",
          items: [
            "2-leg bridle choked → × 0.75",
            "1/2 in @ 45° = 13,574 lb",
            "13,574 × 0.75 ≈ 10,180 lb",
          ],
        },
        {
          heading: "Step 3 — Compare to load",
          headingEmphasis: "yellow",
          items: [
            "10,180 lb ≥ 10,000 lb → OK",
            "Smaller sizes fall short after × 0.75",
          ],
        },
        {
          heading: "Answer",
          headingEmphasis: "yellow",
          items: ["Minimum size = 1/2 in Grade T (8) chain"],
        },
      ],
    }
  ),
  s(
    "math",
    "Rigging math",
    "Calculator check — reading charts",
    "Four Fulford-style problems. DEG mode. Work each before answers are revealed.",
    [],
    {
      quiz: true,
      panelBg: "sine",
      focusKicker: "Reading charts · Quick quiz",
      lesson: "/lessons/appendix-b",
      chart: "/slides/rigging-charts",
      quizQuestions: [
        {
          id: "chart-angle-lower",
          prompt:
            "A 2-leg bridle is at 50°. The chart only shows 60°, 45°, and 30°. Which column do you use?",
          options: [
            { id: "a", text: "60°" },
            { id: "b", text: "45°" },
            { id: "c", text: "30°" },
            { id: "d", text: "Average of 60° and 45°" },
          ],
          correctAnswer: "b",
          explanation: "Angle between chart values → always use the next LOWER column (50° → 45°).",
        },
        {
          id: "chart-choker-mult",
          prompt:
            "2-leg bridle @ 45° chart capacity = 13,574 lb. The bridle is choked. What capacity do you use?",
          options: [
            { id: "a", text: "6,787 lb" },
            { id: "b", text: "10,180 lb" },
            { id: "c", text: "13,574 lb" },
            { id: "d", text: "27,148 lb" },
          ],
          correctAnswer: "b",
          explanation: "Choked 2-leg bridle → multiply by 0.75 → 13,574 × 0.75 ≈ 10,180 lb.",
        },
        {
          id: "chart-bridle-60",
          prompt:
            "Wire rope Vertical = 4,700 lb. 2-leg @ 60°. Capacity ≈ Vertical × 2 × Sin(60°). About how much?",
          options: [
            { id: "a", text: "4,700 lb" },
            { id: "b", text: "6,650 lb" },
            { id: "c", text: "8,140 lb" },
            { id: "d", text: "9,400 lb" },
          ],
          correctAnswer: "c",
          explanation: "Sin(60°) ≈ 0.866 → 4,700 × 2 × 0.866 ≈ 8,140 lb (chart shows 8,150).",
        },
        {
          id: "chart-equal-legs",
          prompt:
            "Two bridle legs are each 20 ft at 60° from horizontal. Equal leg lengths. Distance between attachments?",
          options: [
            { id: "a", text: "10 ft" },
            { id: "b", text: "15 ft" },
            { id: "c", text: "20 ft" },
            { id: "d", text: "40 ft" },
          ],
          correctAnswer: "c",
          explanation:
            "Equal legs → equal angles. 60°+60° → top angle 60°. Equilateral triangle → distance = 20 ft.",
        },
      ],
    }
  ),

  // ── TAGLINES (6) ~30 min ──
  s(
    "taglines",
    "Taglines",
    "Taglines",
    "Control the load from a safe distance — clean rope, gloves on, knots you trust.",
    [
      "When OHSR requires a tagline",
      "Safe stance · 45° slope · waist-high hands",
      "Clove hitch · bowline · figure-eight eye",
    ],
    {
      cover: true,
      panelBg: "cover",
      image: "/images/rigging/tagtitle.png",
      lesson: "/lessons/module-2",
      focusKicker: "Load control",
      source: "WorkSafeBC OHSR 14.28(5)",
      sourceLinks: [
        { label: "OHSR 14.28(5) — Tag lines", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 8 — PPE / gloves", href: STANDARD_URLS.ohrsPart8 },
      ],
    }
  ),
  s(
    "taglines",
    "Taglines",
    "Safe Tagline Practice",
    "Keep the rope clean and yourself clear of the load path.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/tagtitle.png",
      lesson: "/lessons/module-2",
      ohrs: "14.28(5)",
      focusKicker: "Taglines · Practice",
      focusCallout: "OHSR 14.28(5) — tag lines when needed to control or position the load",
      source: "WorkSafeBC OHSR 14.28(5) · OHSR 8.2 / 8.19 — hand protection",
      sourceLinks: [
        { label: "OHSR 14.28(5) — Tag lines", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR 8.2 / 8.19 — Gloves", href: STANDARD_URLS.ohrsPart8 },
      ],
      critical: true,
      sections: [
        {
          heading: "Gear & PPE",
          headingEmphasis: "yellow",
          items: [
            "Keep the tagline clean — no mud, grease, or frays that cut grip",
            {
              label: "Wear gloves — OHSR 8.2 general-purpose work gloves; 8.19 if abrasion risk",
              emphasis: "yellow",
            },
            "Allow extra length — never run out mid-swing",
          ],
        },
        {
          heading: "Stance & slope",
          headingEmphasis: "yellow",
          items: [
            "Stand about 1:1 from the load — distance ≈ height for a ~45° tagline slope",
            "Aim for a clean ~45° slope — not straight out, not under the load",
            "Hands on the load only at waist height — otherwise control with the rope",
          ],
        },
        {
          heading: "Regulation",
          headingEmphasis: "red",
          items: [
            {
              label: "OHSR 14.28(5) — use tag lines or other effective means when needed",
              emphasis: "yellow",
            },
            "Not every lift needs one — use them when movement or placement is hazardous without them",
          ],
        },
      ],
    }
  ),
  s(
    "taglines",
    "Taglines",
    "Allow Extra — Fixed Eye",
    "Leave spare rope, and finish the working end with a knot that will not slip.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/tagextra.png",
      lesson: "/lessons/module-2",
      focusKicker: "Taglines · Extra length",
      focusCallout: "Extra rope + a fixed eye beats a short line and a slipping hitch",
      critical: true,
      sections: [
        {
          heading: "Why extra",
          headingEmphasis: "yellow",
          items: [
            "Load swings, turns, and rises — you need spare line in hand",
            "Never wrap the tagline around your wrist or body",
            "Keep enough free length to step clear without letting go",
          ],
        },
        {
          heading: "Figure-eight on a bight",
          headingEmphasis: "yellow",
          items: [
            "Double the rope to make a bight",
            "Form a figure-eight and pull the bight through",
            "Dress and snug — gives a strong fixed eye for hardware or a handhold",
          ],
        },
      ],
    }
  ),
  s(
    "taglines",
    "Taglines",
    "Knots for Taglines",
    "Two hitches you will use constantly — clove for the load, bowline for a fixed loop.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/tagclove.png",
      lesson: "/lessons/module-2",
      focusKicker: "Taglines · Knots",
      focusCallout: "Pick the knot for the job — then dress it before the lift",
      sections: [
        {
          heading: "Clove hitch",
          headingEmphasis: "yellow",
          items: [
            "Fast attachment around pipe, rail, or load corner",
            "Holds under steady pull — check it after every move",
          ],
        },
        {
          heading: "Bowline",
          headingEmphasis: "yellow",
          items: [
            "Fixed loop that will not slip under load",
            "Easy to untie after it has been loaded",
          ],
        },
        {
          heading: "Before you trust it",
          headingEmphasis: "red",
          items: [
            "Dress the knot — no crossed strands left loose",
            "Leave a working-end tail long enough to see",
            "If it looks wrong, retie — do not fly a mystery knot",
          ],
        },
      ],
    }
  ),
  s(
    "taglines",
    "Taglines",
    "Clove Hitch",
    "Two wraps that cross — the working end tucks under the last turn.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/tagclove.png",
      lesson: "/lessons/module-2",
      focusKicker: "Taglines · Clove hitch",
      focusCallout: "Wrap · cross · tuck — then snug the X flat on the bar",
      critical: true,
      sections: [
        {
          heading: "How to tie",
          headingEmphasis: "yellow",
          items: [
            "Pass the rope behind (or around) the bar / attachment",
            "Bring it over the top and around again so the second wrap crosses the first",
            "Tuck the working end under the second wrap (follow the arrow)",
            "Pull both ends to dress — you should see a clear X on the face of the hitch",
          ],
        },
        {
          heading: "On the job",
          headingEmphasis: "red",
          items: [
            "Standing part and working end exit opposite ways through the X",
            "Re-check after the load shifts — cloves can walk if left loose",
            "Add a half-hitch backup if the line will see shock or slack cycles",
          ],
        },
      ],
    }
  ),
  s(
    "taglines",
    "Taglines",
    "Bowline",
    "Rabbit up the hole, around the tree, back down the hole — fixed eye that unties after loading.",
    [],
    {
      focus: true,
      panelBg: "white",
      image: "/images/rigging/tagbowline.png",
      lesson: "/lessons/module-2",
      focusKicker: "Taglines · Bowline",
      focusCallout: "Up · around · back down — then dress the loop",
      critical: true,
      sections: [
        {
          heading: "How to tie",
          headingEmphasis: "yellow",
          items: [
            "Make a small loop in the standing part (the rabbit hole)",
            "Pass the working end up through the loop",
            "Wrap it behind the standing part (around the tree)",
            "Bring it back down through the loop and pull to dress",
          ],
        },
        {
          heading: "On the job",
          headingEmphasis: "red",
          items: [
            "Leaves a fixed eye that will not slip like a slipknot",
            "Still unties after it has taken load — good for tagline ends",
            "Leave a visible tail; unfinished bowlines can capsize",
          ],
        },
      ],
    }
  ),

  // ── LIFT PLANNING (2) ~15 min ──
  s(
    "planning",
    "Lift planning",
    "Lift Planning",
    "Plan the lift before the hook moves — load, gear, people, and how you will talk.",
    [],
    {
      focus: true,
      panelBg: "white",
      lesson: "/lessons/module-15",
      focusKicker: "Lift planning",
      focusCallout: "BC Crane Safety — written lift plan for critical and tandem lifts",
      source: "WorkSafeBC OHSR Parts 14 & 15 · BC Crane Safety lift plan template",
      sourceLinks: [
        { label: "OHSR Part 14 — Cranes & hoists", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — Lift plan template", href: STANDARD_URLS.bccsaLiftPlan },
        { label: "BC Crane Safety — Rigger competency", href: STANDARD_URLS.bccsaCompetency },
      ],
      critical: true,
      sections: [
        {
          heading: "Plan covers",
          headingEmphasis: "yellow",
          items: [
            "Load weight, CG, and path",
            "Crane config, radius, and chart capacity",
            "Rigging, hitch, and WLL with angle derates",
            "Hazards — power lines, wind, blind spots",
            "Signals / radio — who talks, who listens",
          ],
        },
        {
          heading: "Regulation & guidance",
          headingEmphasis: "red",
          items: [
            { label: "OHSR Part 14 — crane ops, tandem & critical lifts, signals", emphasis: "yellow" },
            { label: "OHSR 15.2 — qualified rigger who knows the signals", emphasis: "yellow" },
            { label: "BC Crane Safety — lift plan template (Parts 14 & 15)", emphasis: "yellow" },
            "Brief the crew before the hook moves",
            "Update the plan if people or gear change",
          ],
        },
      ],
    }
  ),
  s(
    "planning",
    "Lift planning",
    "Critical Lift",
    "Written plan on site. Brief the crew. Then hoist.",
    [],
    {
      focus: true,
      panelBg: "white",
      lesson: "/lessons/module-15",
      ohrs: "14.42.1",
      focusKicker: "Lift planning · Critical lift",
      focusCallout: "Every critical lift needs a written plan at the worksite",
      source: "WorkSafeBC OHSR 14.42.1 · critical lift definition · BC Crane Safety",
      sourceLinks: [
        { label: "OHSR 14.42.1 — Critical lift", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — Lift plan template", href: STANDARD_URLS.bccsaLiftPlan },
      ],
      critical: true,
      sections: [
        {
          heading: "It is critical when",
          headingEmphasis: "yellow",
          items: [
            "Over 90% of capacity at more than half the max radius",
            "Tandem lift — any crane over 75%, or more than two cranes",
            "Lifting a person in a suspended platform",
            "Load CG or sling length changes during the lift",
            "Floating base, over live high voltage, or a submerged load",
          ],
        },
        {
          heading: "Before you hoist",
          headingEmphasis: "red",
          items: [
            "Write the plan — rigging, wind, speeds, load share, signallers",
            "Hold a pre-job meeting and document who was briefed",
            "Repeat the meeting if people or equipment change",
            "Keep clear radio / signals for the whole lift",
            "Keep the written plan available at the worksite",
          ],
        },
      ],
    }
  ),
  s(
    "planning",
    "Lift planning",
    "Hand Signals",
    "If you use hand signals, use Figure 15-1 only — same code for everyone on the lift.",
    [],
    {
      focus: true,
      panelBg: "signals",
      image: "/images/crane/handsignals.png",
      lesson: "/lessons/module-7",
      ohrs: "15.20",
      focusKicker: "Lift planning · Communication",
      focusCallout: "OHSR 15.20 — hand signals must match Figure 15-1",
      source: "WorkSafeBC OHSR 15.20 · 14.47 · 14.48 · 15.2",
      sourceLinks: [
        { label: "OHSR 15.20 — Hand signals / Figure 15-1", href: STANDARD_URLS.ohrsPart15 },
        { label: "OHSR Part 14 — Signals", href: STANDARD_URLS.ohrsPart14 },
      ],
      critical: true,
      sections: [
        {
          heading: "Standard code",
          headingEmphasis: "yellow",
          items: [
            {
              label: "15.20 — signaller ↔ operator hand signals must be Figure 15-1",
              emphasis: "yellow",
            },
            "Same chart for crawler, truck, overhead, and gantry",
            "One designated signaller for movement commands",
            "Stop from anyone — operator must stop (14.47)",
          ],
        },
        {
          heading: "See it · switch it",
          headingEmphasis: "red",
          items: [
            "Keep signals clear and visible to the operator",
            {
              label: "14.47 — no clear view → qualified signaller directs",
              emphasis: "yellow",
            },
            {
              label: "14.48 — hand signals unsafe / impractical → radio or Board A/V",
              emphasis: "yellow",
            },
            "15.2 — know the authorized signal code",
          ],
        },
      ],
    }
  ),
  s(
    "planning",
    "Lift planning",
    "Figure 15-1 — All Signals",
    "",
    [],
    {
      focus: true,
      panelBg: "signals",
      formula: "signal-chart",
      lesson: "/lessons/appendix-a",
      ohrs: "15.20",
      focusKicker: "Communication · Figure 15-1",
      focusCallout: "Unclear or STOP → operator stops until the signal is clear",
      source: "WorkSafeBC OHSR 15.20 · 14.47 · ASME B30.5 signal practice",
      sourceLinks: [
        { label: "OHSR 15.20 — Figure 15-1", href: STANDARD_URLS.ohrsPart15 },
        { label: "OHSR 14.47 — Stop from anyone", href: STANDARD_URLS.ohrsPart14 },
      ],
      critical: true,
      sections: [
        {
          heading: "Stop & hold",
          headingEmphasis: "red",
          items: [
            "Stop",
            "Emergency stop",
            "Dog everything",
            "Move slowly",
          ],
        },
        {
          heading: "Hoist & boom",
          headingEmphasis: "yellow",
          items: [
            "Hoist",
            "Lower",
            "Raise boom",
            "Lower boom",
            "Raise boom & lower load",
            "Lower boom & raise load",
            "Use main hoist",
            "Use auxiliary hoist",
          ],
        },
        {
          heading: "Travel · swing · telescope",
          headingEmphasis: "yellow",
          items: [
            "Swing",
            "Travel / tower travel",
            "Trolley travel",
            "Extend telescoping boom",
            "Retract telescoping boom",
            "Crawler travel — both tracks",
            "Crawler travel — one track",
          ],
        },
        {
          heading: "Stop when",
          headingEmphasis: "red",
          items: [
            "Signal is unclear or not understood",
            "Signal is lost or conflicting",
            "Anyone gives STOP (OHSR 14.47)",
            "Do not move until the signal is clear",
          ],
        },
      ],
    }
  ),
  s(
    "planning",
    "Lift planning",
    "Radio Communication and Rigging in the Blind",
    "Blind lifts need a qualified signaller. Use radio when hand signals are unsafe or impractical.",
    [],
    {
      focus: true,
      panelBg: "radio",
      image: "/images/crane/radio.png",
      lesson: "/lessons/module-7",
      ohrs: "14.47",
      focusKicker: "Lift planning · Communication",
      focusCallout: "OHSR 14.47 — operator moves only on a qualified signaller",
      source: "WorkSafeBC OHSR 14.47 · 14.48 · 14.49 · 15.2",
      sourceLinks: [
        { label: "OHSR Part 14 — Signals & radio", href: STANDARD_URLS.ohrsPart14 },
        { label: "OHSR 15.2 — Qualified riggers", href: STANDARD_URLS.ohrsPart15 },
      ],
      critical: true,
      sections: [
        {
          heading: "Rigging in the blind",
          headingEmphasis: "yellow",
          items: [
            {
              label: "14.47 — can't see boom, jib, line, hook, or load → qualified signaller who can",
              emphasis: "yellow",
            },
            "Operator acts only on that signaller",
            "Anyone can call stop — operator must stop",
            "15.2 — know the authorized signal code",
          ],
        },
        {
          heading: "Radio rules",
          headingEmphasis: "red",
          items: [
            {
              label: "14.48 — two-way radio (or Board A/V) when hand signals won't work",
              emphasis: "yellow",
            },
            {
              label: "14.49 — tower / self-erecting: Board frequency & power",
              emphasis: "yellow",
            },
            "No multi-channel radios to direct movement",
            "Only operator + assigned riggers / signallers transmit",
          ],
        },
      ],
    }
  ),
  s(
    "planning",
    "Lift planning",
    "Minimum Approach Distance",
    "",
    [],
    {
      focus: true,
      panelBg: "hydro",
      formula: "mad-chart",
      lesson: "/lessons/module-7",
      ohrs: "19.24.1",
      focusKicker: "Electrical safety · BC Hydro",
      focusCallout: "Can't hold MAD → Assurance in Writing (30M33)",
      source: "WorkSafeBC OHSR Table 19-1A · 19.25 · BC Hydro",
      sourceLinks: [
        { label: "OHSR Part 19", href: STANDARD_URLS.ohrsPart19 },
        { label: "BC Hydro — power lines", href: STANDARD_URLS.bcHydroPowerLines },
      ],
      critical: true,
      sections: [
        {
          heading: "Intact · Table 19-1A | Voltage · m · ft",
          headingEmphasis: "yellow",
          items: [
            "Under 750 V · 1 · 3",
            "750 V – 75 kV · 3 · 10",
            "75 – 250 kV · 4.5 · 15",
            "250 – 550 kV · 6 · 20",
          ],
        },
        {
          heading: "Downed / damaged | Hazard · m",
          headingEmphasis: "red",
          items: [
            "Distribution · 10 ·",
            "Transmission · 33 ·",
            "Manholes · 33 ·",
          ],
        },
        {
          heading: "30M33",
          headingEmphasis: "yellow",
          items: [
            {
              label: "19.25 — get Assurance in Writing from BC Hydro",
              emphasis: "yellow",
            },
            "Displace / isolate / guard as stated on the form",
            "Call Express Connect 1-877-520-1355 first",
          ],
        },
        {
          heading: "Move away safely",
          headingEmphasis: "red",
          items: [
            {
              label: "Shuffle heel-to-toe — no long strides (step potential)",
              emphasis: "yellow",
            },
            "Clear 10 m (distribution) or 33 m (transmission)",
            "Down. Danger. Dial. — call 911",
          ],
        },
      ],
    }
  ),

  // ── CLOSE — Rigging Competencies matrix (all 92) ──
  s(
    "close",
    "Rigging Competencies",
    "Rigging Competencies",
    "WorkSafeBC framework — 92 competencies. Gold = covered in this Basic course. Badges mark Intermediate and Advanced leftovers.",
    [],
    {
      focus: true,
      panelBg: "competency",
      formula: "competency-overview",
      lesson: "/lessons/module-1",
      focusKicker: "Competency matrix",
      focusCallout: "92 competencies · Basic covered · leftovers badged",
      source: "WorkSafeBC competency framework · OHSR Parts 14 & 15 · BC Crane Safety",
      sourceLinks: [
        { label: "OHSR Part 15 — Rigging", href: STANDARD_URLS.ohrsPart15 },
        { label: "BC Crane Safety — Rigger competency", href: STANDARD_URLS.bccsaCompetency },
      ],
      critical: true,
      sections: [
        {
          heading: "Path",
          headingEmphasis: "yellow",
          items: [
            "Knowledge → Demonstration → Assessment → Sign-off",
            "Qualified rigger under OHSR 15.2",
            "Next slides list every competency with level badges",
          ],
        },
      ],
    }
  ),
  s(
    "close",
    "Rigging Competencies",
    "Competencies 1–3",
    "",
    [],
    {
      focus: true,
      panelBg: "competency",
      formula: "competency-matrix",
      lesson: "/lessons/module-1",
      focusKicker: "92 competencies · Part A",
      focusCallout: "Gold / Basic = covered here · Int / Adv = leftovers",
      source: "WorkSafeBC competency framework",
      critical: true,
      sections: [
        { heading: "BASIC_KNOWLEDGE", items: [] },
        { heading: "RIGGING_TERMINOLOGY", items: [] },
        { heading: "COMMUNICATION", items: [] },
      ],
    }
  ),
  s(
    "close",
    "Rigging Competencies",
    "Competencies 4–5",
    "",
    [],
    {
      focus: true,
      panelBg: "competency",
      formula: "competency-matrix",
      lesson: "/lessons/module-1",
      focusKicker: "92 competencies · Part B",
      focusCallout: "Gold / Basic = covered here · Int / Adv = leftovers",
      source: "WorkSafeBC competency framework",
      critical: true,
      sections: [
        { heading: "SAFETY_STANDARDS", items: [] },
        { heading: "PLANNING", items: [] },
      ],
    }
  ),
  s(
    "close",
    "Rigging Competencies",
    "Competencies 6 — Execution",
    "",
    [],
    {
      focus: true,
      panelBg: "competency",
      formula: "competency-matrix",
      lesson: "/lessons/module-1",
      focusKicker: "92 competencies · Part C",
      focusCallout: "Gold / Basic = covered here · Int / Adv = leftovers",
      source: "WorkSafeBC competency framework",
      critical: true,
      sections: [{ heading: "EXECUTION", items: [] }],
    }
  ),
];

if (SLIDES.length !== 74) {
  throw new Error(`Expected 74 slides, got ${SLIDES.length}`);
}

const UNITS = [
  { id: "intro", label: "Introduction", durationMin: 55 },
  { id: "regulations", label: "Regulations & standards", durationMin: 60 },
  { id: "protection", label: "Edge protection & softeners", durationMin: 20 },
  { id: "inspection", label: "Pre-use inspection & removal", durationMin: 55 },
  { id: "bth", label: "Below-the-hook", durationMin: 35 },
  { id: "ratings", label: "WLL, design factor & strength", durationMin: 50 },
  { id: "math", label: "Rigging math", durationMin: 180 },
  { id: "taglines", label: "Taglines", durationMin: 30 },
  { id: "planning", label: "Lift planning", durationMin: 50 },
  { id: "close", label: "Rigging Competencies", durationMin: 25 },
];

let slideStart = 1;
const unitsWithRanges = UNITS.flatMap((u) => {
  const count = SLIDES.filter((sl) => sl.unit === u.id).length;
  if (count === 0) return [];
  const entry = { ...u, slideStart, slideEnd: slideStart + count - 1 };
  slideStart += count;
  return [entry];
});

const course = {
  slug: "rigger-competency",
  title: "Rigger competency slides",
  description:
    "Instructor classroom slides — regulations, WLL, inspection, hitch types, softeners, rigging math, below-the-hook, taglines, signals, and lift planning. Teaching aid only — not a certification.",
  sourceUrl: "https://bccranesafety.ca/rigger-competency-a-critical-safety-standard-under-ohsr-part-15/",
  totalDurationMin: unitsWithRanges.reduce((a, u) => a + u.durationMin, 0),
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
    secondaryImage: sl.secondaryImage,
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
    quiz: sl.quiz,
    quizQuestions: sl.quizQuestions,
  })),
};

writeFileSync("src/data/competency-slides.json", JSON.stringify(course, null, 2));
console.log(`Wrote ${SLIDES.length} slides (${course.totalDurationMin} min planned).`);

const esGen = spawnSync("node", ["scripts/generate-competency-slides-es.mjs"], { stdio: "inherit" });
if (esGen.status !== 0) {
  process.exit(esGen.status ?? 1);
}
