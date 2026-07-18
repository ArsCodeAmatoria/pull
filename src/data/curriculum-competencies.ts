/** Official Tower Crane Rigger competency outcomes (92), grouped by curriculum module. */

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
      "Describe the importance of standard hand signals used in rigging and lifting operations.",
      "Explain signaling cranes while being moved on site.",
      "Explain keeping personnel from the load path.",
      "Identify hazards.",
      "Explain safe work procedures and PPE requirements.",
      "Describe safety devices and operator aids.",
      "Describe the importance of environmental factors.",
      "Explain emergency procedures.",
      "Describe the importance and effect of size, shape, weight, and center of gravity of the load being lifted.",
      "Describe the importance of boom deflection and how to compensate for it.",
      "Describe the importance and effects of side loading.",
      "Describe the importance of crane capacity, load charts, and limitations.",
      "Describe the importance, causes, and consequences of two-blocking.",
      "Describe common musculoskeletal injury (MSI) prevention techniques.",
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
      "Identify working load limit (WLL).",
      "Identify hitch configurations.",
    ],
  },
  {
    moduleCode: "COMMUNICATION",
    title: "Communication",
    competencies: [
      "Explain hazards of moving equipment on the jobsite.",
      "Explain remaining visible to the operator whenever possible.",
      "Explain providing clear and visible hand signals.",
      "Describe the importance of maintaining constant communication with the operator.",
      "Explain the operator's perspective while signaling.",
      "Explain communication barriers.",
      "Explain the action to take if the operator is not following signals correctly.",
      "Describe dedicated radio channels.",
      "Demonstrate hand signals for overhead cranes.",
      "Demonstrate hand signals for tower cranes.",
      "Demonstrate hand signals for mobile cranes.",
      "Demonstrate radio communication.",
      "Demonstrate hazard communication to others on site.",
    ],
  },
  {
    moduleCode: "SAFETY_STANDARDS",
    title: "Safety Standards and Regulations",
    competencies: [
      "Describe the importance of applicable provincial OHS regulations.",
      "Describe the importance of provincial OHS inspection regulations.",
      "Describe the importance of WorkSafeBC and provincial standards, including personnel under suspended loads.",
      "Define a qualified rigger.",
      "Describe the importance of manufacturers' rejection criteria.",
      "Describe the importance of ASME B30 standards.",
      "List design factors for rigging components as required by OHS regulations.",
      "Explain the process for rejected rigging and lifting devices.",
      "Identify the hazards of shock loading.",
      "Explain refusing unsafe work.",
      "Explain the hazards of the line of fire.",
      "Explain electrical power line hazards, applicable regulations, and safe work practices.",
      "Describe the importance of fall protection.",
    ],
  },
  {
    moduleCode: "PLANNING",
    title: "Planning the Rigging Activity",
    competencies: [
      "Plan a lift.",
      "Describe the importance of environmental conditions.",
      "Describe the importance of checking manufacturer's safety specifications before operating equipment.",
      "Determine the weight of the load.",
      "Describe lifting characteristics of rigging equipment.",
      "Determine rigging equipment requirements.",
      "Identify the load's travel path.",
      "Identify and define the boundaries of a safe load drop zone.",
      "Calculate headroom requirements.",
      "Calculate sling tension.",
      "Recognize special handling requirements for load configurations.",
      "Describe scenarios requiring atypical lifting techniques.",
      "Explain multi-piece lifts.",
      "Recognize special handling requirements for offset centers of gravity.",
      "Explain single-crane and multi-crane lifts.",
      "Describe critical lifts.",
      "Describe engineered lift plans.",
      "Explain the purpose and function of engineered lifting points and pick points.",
      "Describe the effects of D/d ratio on rigging.",
      "Calculate load distribution.",
      "Identify and inspect non-commercial manufactured rigging and lifting devices.",
      "Describe reviewing lift requirements with site supervision, the operator, and the crew.",
    ],
  },
  {
    moduleCode: "EXECUTION",
    title: "Execution of Rigging Activity",
    competencies: [
      "Identify load characteristics, including weight, attachment points, and center of gravity.",
      "Explain site-specific rigging activities.",
      "Confirm capacity calculations based on the weight of the load.",
      "Interpret rigging capacity cards and charts.",
      "Inspect rigging tools and lifting equipment before use.",
      "Demonstrate proper use of slings.",
      "Demonstrate effective use of edge protection.",
      "Demonstrate proper hitch configurations.",
      "Demonstrate proper use of rigging hardware.",
      "Demonstrate proper use of tag lines for load control.",
      "Demonstrate safe rigging practices, including proper body positioning.",
      "Demonstrate landing and supporting the load.",
      "Verify that rigging can be safely removed.",
      "Demonstrate post-load movement activities, including disconnecting the rigging.",
      "Apply multi-leg slings correctly.",
      "Demonstrate proper use of below-the-hook lifting devices.",
      "Recognize unsafe rigging practices.",
      "Demonstrate post-load movement activities, including storing the rigging.",
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
