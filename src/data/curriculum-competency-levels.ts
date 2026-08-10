import {
  CURRICULUM_COMPETENCY_GROUPS,
  TOTAL_CURRICULUM_COMPETENCIES,
} from "@/data/curriculum-competencies";

/** Pathway level for each of the 92 WorkSafeBC / BCCSA rigger competencies. */
export type CompetencyPathwayLevel = "basic" | "intermediate" | "advanced";

/**
 * Basic = introduced in this course.
 * Intermediate / Advanced = leftovers for later courses.
 */
const BASIC_COVERED = new Set<string>([
  // 1 · Basic knowledge — foundations this course touched
  "Define basic crane terminology.",
  "Describe importance of standard hand signals used in rigging and lifting operations.",
  "Identify hazards.",
  "Explain safe work procedures and PPE.",
  "Describe importance of the effects of size, shape, weight, and center of gravity of the load being lifted.",
  "Describe importance of crane capacity/load charts and limitations.",

  // 2 · Terminology — all
  "Identify slings.",
  "Identify rigging hardware.",
  "Identify hooks.",
  "Identify below-the-hook lifting devices.",
  "Identify auxiliary equipment.",
  "Identify working load limit.",
  "Identify hitch configurations.",

  // 3 · Communication — signals & radio intro
  "Explain providing clear and visible hand signals.",
  "Describe the importance of keeping constant communication with the operator.",
  "Describe dedicated radio channels.",
  "Demonstrate hand signals for mobile cranes.",
  "Demonstrate radio communication.",

  // 4 · Standards — core rules this course hit
  "Describe the importance of applicable provincial OHS regulations.",
  "Describe the importance of provincial OHS inspection regulations.",
  "Describe the importance of WorkSafeBC and provincial standards, including requirements concerning personnel under loads.",
  "Define qualified riggers.",
  "Describe the importance of manufacturers' rejection criteria.",
  "Describe the importance of ASME B30 standards.",
  "List design factors for rigging components according to OHS regulations.",
  "Explain the process for rejected rigging and devices.",
  "Identify the hazard of shock loading.",
  "Explain electrical power-line hazards, applicable regulations, and safety requirements.",

  // 5 · Planning — lift plan fundamentals
  "Plan a lift.",
  "Determine the weight of the load.",
  "Describe lifting characteristics of rigging equipment.",
  "Describe how to determine rigging equipment requirements.",
  "Calculate tension.",
  "Describe how to recognize special handling requirements related to an offset center of gravity.",
  "Describe critical lifts.",
  "Describe reviewing lift requirements with site supervision, operator, and crew.",

  // 6 · Execution — inspect, hitch, protect, control
  "Identify load characteristics — weight, attachment, and center of gravity.",
  "Confirm capacity calculations based on the weight of the load to be lifted.",
  "Interpret rigging capacity cards/charts.",
  "Inspect rigging tools and lifting equipment before use.",
  "Demonstrate use of slings.",
  "Demonstrate use of effective edge protection.",
  "Demonstrate use of hitch configurations.",
  "Demonstrate use of rigging hardware.",
  "Demonstrate proper use of tag lines/load-control equipment.",
  "Demonstrate use of below-the-hook lifting devices.",
  "Recognize unsafe rigging practices.",
]);

const ADVANCED = new Set<string>([
  "Explain responsibilities of the lift director.",
  "Explain multi-piece lifts.",
  "Explain single- and multi-crane lifts.",
  "Describe engineered lift plans.",
  "Explain the purpose and function of engineered lifting and pick points in rigging operations.",
  "Describe the effects of D/d ratio on rigging.",
  "Calculate load distribution.",
  "Identify and inspect non-commercial manufactured rigging and devices.",
  "Describe scenarios that require atypical lifting techniques.",
  "Apply multi-leg slings.",
]);

export function getCompetencyPathwayLevel(competency: string): CompetencyPathwayLevel {
  if (BASIC_COVERED.has(competency)) return "basic";
  if (ADVANCED.has(competency)) return "advanced";
  return "intermediate";
}

export type LeveledCompetency = {
  label: string;
  level: CompetencyPathwayLevel;
};

export type LeveledCompetencyGroup = {
  moduleCode: string;
  title: string;
  competencies: readonly LeveledCompetency[];
};

export const LEVELED_COMPETENCY_GROUPS: readonly LeveledCompetencyGroup[] =
  CURRICULUM_COMPETENCY_GROUPS.map((group) => ({
    moduleCode: group.moduleCode,
    title: group.title,
    competencies: group.competencies.map((label) => ({
      label,
      level: getCompetencyPathwayLevel(label),
    })),
  }));

export function countCompetenciesByLevel() {
  const counts = { basic: 0, intermediate: 0, advanced: 0, total: TOTAL_CURRICULUM_COMPETENCIES };
  for (const group of LEVELED_COMPETENCY_GROUPS) {
    for (const item of group.competencies) {
      counts[item.level] += 1;
    }
  }
  return counts;
}
