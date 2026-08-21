/** WorkSafeBC rigger competency outcomes (92) under development, grouped by curriculum module. */

export const COMPETENCY_INTRO =
  "A rigger in construction and/or manufacturing must be able to:";

export type CurriculumCompetencyGroup = {
  moduleCode: string;
  title: string;
  competencies: readonly string[];
};

export const CURRICULUM_COMPETENCY_GROUPS: readonly CurriculumCompetencyGroup[] = [
  {
    moduleCode: "BASIC_KNOWLEDGE",
    title: "Basic Knowledge of Crane Operations",
    competencies: [
      "Explain responsibilities of the signal person.",
      "Explain responsibilities of the equipment operator.",
      "Explain responsibilities of the lift director.",
      "Define basic crane terminology.",
      "Describe importance of standard hand signals used in rigging and lifting operations.",
      "Explain signaling cranes while being moved on site.",
      "Explain keeping personnel from the load path.",
      "Identify hazards.",
      "Explain safe work procedures and PPE.",
      "Describe safety devices and operator aids.",
      "Describe importance of environmental factors.",
      "Explain emergency procedures.",
      "Describe importance of the effects of size, shape, weight, and center of gravity of the load being lifted.",
      "Describe importance of boom deflection and how to compensate for it.",
      "Describe importance of effects of side loading.",
      "Describe importance of crane capacity/load charts and limitations.",
      "Describe importance of causes and consequences of two-blocking.",
      "Describe common MSI-prevention techniques.",
      "Describe the need for lifelong learning.",
    ],
  },
  {
    moduleCode: "RIGGING_TERMINOLOGY",
    title: "Identify Rigging Terminology",
    competencies: [
      "Identify slings.",
      "Identify rigging hardware.",
      "Identify hooks.",
      "Identify below-the-hook lifting devices.",
      "Identify auxiliary equipment.",
      "Identify working load limit.",
      "Identify hitch configurations.",
    ],
  },
  {
    moduleCode: "COMMUNICATION",
    title: "Communication",
    competencies: [
      "Explain hazards of moving equipment on the jobsite.",
      "Explain remaining visible to the operator when possible.",
      "Explain providing clear and visible hand signals.",
      "Describe the importance of keeping constant communication with the operator.",
      "Explain operator perspective while signaling.",
      "Explain communication barriers.",
      "Explain action to take if the operator is not following signals correctly.",
      "Describe dedicated radio channels.",
      "Demonstrate hand signals for overhead cranes.",
      "Demonstrate hand signals for tower cranes.",
      "Demonstrate hand signals for mobile cranes.",
      "Demonstrate radio communication.",
      "Demonstrate hazard communication to others on-site.",
    ],
  },
  {
    moduleCode: "SAFETY_STANDARDS",
    title: "Safety Standards and Regulations",
    competencies: [
      "Describe the importance of applicable provincial OHS regulations.",
      "Describe the importance of provincial OHS inspection regulations.",
      "Describe the importance of WorkSafeBC and provincial standards, including requirements concerning personnel under loads.",
      "Define qualified riggers.",
      "Describe the importance of manufacturers' rejection criteria.",
      "Describe the importance of ASME B30 standards.",
      "List design factors for rigging components according to OHS regulations.",
      "Explain the process for rejected rigging and devices.",
      "Identify the hazard of shock loading.",
      "Explain refusing unsafe work.",
      "Explain the hazards of the line of fire.",
      "Explain electrical power-line hazards, applicable regulations, and safety requirements.",
      "Describe the importance of fall protection.",
    ],
  },
  {
    moduleCode: "PLANNING",
    title: "Planning the Rigging Activity",
    competencies: [
      "Plan a lift.",
      "Describe the importance of effects of environmental conditions.",
      "Describe the importance of checking manufacturer's safety specifications prior to operation of equipment.",
      "Determine the weight of the load.",
      "Describe lifting characteristics of rigging equipment.",
      "Describe how to determine rigging equipment requirements.",
      "Identify the load's travel path.",
      "Identify and define the boundaries of a safe load drop zone.",
      "Calculate headroom.",
      "Calculate tension.",
      "Describe how to recognize special handling requirements related to load configurations.",
      "Describe scenarios that require atypical lifting techniques.",
      "Explain multi-piece lifts.",
      "Describe how to recognize special handling requirements related to an offset center of gravity.",
      "Explain single- and multi-crane lifts.",
      "Describe critical lifts.",
      "Describe engineered lift plans.",
      "Explain the purpose and function of engineered lifting and pick points in rigging operations.",
      "Describe the effects of D/d ratio on rigging.",
      "Calculate load distribution.",
      "Identify and inspect non-commercial manufactured rigging and devices.",
      "Describe reviewing lift requirements with site supervision, operator, and crew.",
    ],
  },
  {
    moduleCode: "EXECUTION",
    title: "Execution of the Rigging Activity",
    competencies: [
      "Identify load characteristics — weight, attachment, and center of gravity.",
      "Explain site-specific rigging activities.",
      "Confirm capacity calculations based on the weight of the load to be lifted.",
      "Interpret rigging capacity cards/charts.",
      "Inspect rigging tools and lifting equipment before use.",
      "Demonstrate use of slings.",
      "Demonstrate use of effective edge protection.",
      "Demonstrate use of hitch configurations.",
      "Demonstrate use of rigging hardware.",
      "Demonstrate proper use of tag lines/load-control equipment.",
      "Demonstrate unsafe rigging practices and body positioning.",
      "Demonstrate landing and supporting the load.",
      "Verify that the rigging can be removed.",
      "Demonstrate post-load movement activities — disconnect the rigging.",
      "Apply multi-leg slings.",
      "Demonstrate use of below-the-hook lifting devices.",
      "Recognize unsafe rigging practices.",
      "Demonstrate post-load movement activities — store the rigging.",
    ],
  },
] as const;

export const TOTAL_CURRICULUM_COMPETENCIES = CURRICULUM_COMPETENCY_GROUPS.reduce(
  (sum, group) => sum + group.competencies.length,
  0,
);

export function getCompetenciesForModule(moduleCode: string) {
  return CURRICULUM_COMPETENCY_GROUPS.find((group) => group.moduleCode === moduleCode);
}
