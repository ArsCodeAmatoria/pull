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
            "Choker – Polyester Roundsling · 80%",
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
                "If the tag does not list a choker rating: Synthetic Web Slings = 75% of the vertical rating; Polyester Roundslings = 80% of the vertical rating",
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
            "Single Choker Hitch · 75% (Web) / 80% (Roundsling)",
            "Double-Leg Choker Hitch · 150% (Web) / 160% (Roundsling)",
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
                "Double-Leg Choker Hitch – Twice the single choker rating (150% web / 160% roundsling)",
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
          id: "choker-round-80",
          prompt:
            "Vertical WLL = 10,000 lb. Single choker hitch on a polyester roundsling (choke angle ≥ 120°). What is the rated capacity?",
          options: [
            { id: "a", text: "7,500 lb" },
            { id: "b", text: "8,000 lb" },
            { id: "c", text: "10,000 lb" },
            { id: "d", text: "16,000 lb" },
          ],
          correctAnswer: "b",
          explanation:
            "Polyester roundsling single choker ≈ 80% of vertical → 10,000 × 0.80 = 8,000 lb.",
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
            "One-sling / double-leg choker = 2 × single choker. Web: 2 × 75% = 150% → 10,000 × 1.50 = 15,000 lb. (Roundsling: 2 × 80% = 160%.)",
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
];

if (SLIDES.length !== 33) {
  throw new Error(`Expected 33 slides, got ${SLIDES.length}`);
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
