import { writeFileSync } from "fs";
import { spawnSync } from "child_process";

/**
 * Rigger competency slide course (98 slides ≈ 5 min each).
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
];

if (SLIDES.length !== 17) {
  throw new Error(`Expected 17 slides, got ${SLIDES.length}`);
}

const UNITS = [
  { id: "intro", label: "Introduction", durationMin: 55 },
  { id: "regulations", label: "Regulations & standards", durationMin: 60 },
  { id: "ratings", label: "WLL, design factor & strength", durationMin: 50 },
  { id: "protection", label: "Edge protection & softeners", durationMin: 20 },
  { id: "inspection", label: "Pre-use inspection & removal", durationMin: 55 },
  { id: "math", label: "Rigging math", durationMin: 180 },
  { id: "bth", label: "Below-the-hook", durationMin: 35 },
  { id: "planning", label: "Lift planning", durationMin: 35 },
  { id: "close", label: "Critical lifts & wrap-up", durationMin: 25 },
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
  title: "Rigger Competency Slide Course",
  description:
    "Classroom slide course for rigger competency — regulations, WLL/design factor, inspection, rigging math, below-the-hook, and lift planning. Aligned with BC Crane Safety and WorkSafeBC OHSR Part 15.",
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
