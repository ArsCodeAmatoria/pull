import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";
import { RIGGING_SLIDE_MODULE_BY_SLUG } from "@/lib/lessons-data";
import { CraneRiggingEducationOverview } from "@/components/rigging/crane-rigging-education-overview";
import { RiggingEducationModule1Regulations } from "@/components/rigging/rigging-education-module-1-regulations";
import { RiggingEducationModule2Equipment } from "@/components/rigging/rigging-education-module-2-equipment";
import { RiggingEducationModule3Inspection } from "@/components/rigging/rigging-education-module-3-inspection";
import { RiggingEducationModule4CraneAwareness } from "@/components/rigging/rigging-education-module-4-crane-awareness";
import { RiggingEducationModule5BasicPractices } from "@/components/rigging/rigging-education-module-5-basic-practices";
import { RiggingEducationModule6RiggingMath } from "@/components/rigging/rigging-education-module-6-rigging-math";
import { RiggingEducationModule7Communication } from "@/components/rigging/rigging-education-module-7-communication";
import { RiggingEducationModule8AdvancedSlingGeometry } from "@/components/rigging/rigging-education-module-8-advanced-sling-geometry";
import { RiggingEducationModule9AdvancedLoadControl } from "@/components/rigging/rigging-education-module-9-advanced-load-control";
import { RiggingEducationModule10ChainfallsLeverHoists } from "@/components/rigging/rigging-education-module-10-chainfalls-lever-hoists";
import { RiggingEducationModule11MultipleCraneTandem } from "@/components/rigging/rigging-education-module-11-multiple-crane-tandem";
import { RiggingEducationModule12SpecialtyLiftingDevices } from "@/components/rigging/rigging-education-module-12-specialty-lifting-devices";
import { RiggingEducationModule13CranePhysicsRiggers } from "@/components/rigging/rigging-education-module-13-crane-physics-riggers";
import { RiggingEducationModule14EnvironmentalSiteHazards } from "@/components/rigging/rigging-education-module-14-environmental-site-hazards";
import { RiggingEducationModule15LiftPlanningCriticalLifts } from "@/components/rigging/rigging-education-module-15-lift-planning-critical-lifts";
import { RiggingEducationModule16PracticalRiggingFieldOperations } from "@/components/rigging/rigging-education-module-16-practical-rigging-field-operations";
import { RiggingEducationModule17SafetyCultureHumanFactors } from "@/components/rigging/rigging-education-module-17-safety-culture-human-factors";
import { RiggingEducationModule18ReferenceTablesFieldGuidelines } from "@/components/rigging/rigging-education-module-18-reference-tables-field-guidelines";
import { RiggingEducationModule19GlossaryCraneRiggingTerms } from "@/components/rigging/rigging-education-module-19-glossary-crane-rigging-terms";
import { RiggingEducationModule20FinalIntegrationAppliedRiggingReadiness } from "@/components/rigging/rigging-education-module-20-final-integration-applied-rigging-readiness";
import { RiggingEducationModule21KnotsHitchesRopeApplications } from "@/components/rigging/rigging-education-module-21-knots-hitches-rope-applications";
import { RiggingEducationModule22BlockTackleReevingMechanicalAdvantage } from "@/components/rigging/rigging-education-module-22-block-tackle-reeving-mechanical-advantage";
import { RiggingEducationModule23HeavyLiftEngineeringAdvancedRiggingSystems } from "@/components/rigging/rigging-education-module-23-heavy-lift-engineering-advanced-rigging-systems";
import { RiggingEducationModule24TowerCraneRiggingOperations } from "@/components/rigging/rigging-education-module-24-tower-crane-rigging-operations";
import { RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis } from "@/components/rigging/rigging-education-module-25-rigging-incident-case-studies-failure-analysis";
import { RiggingEducationAppendixAStandardHandSignals } from "@/components/rigging/rigging-education-appendix-a-standard-hand-signals";
import { RiggingEducationAppendixBBasicRiggingMath } from "@/components/rigging/rigging-education-appendix-b-basic-rigging-math";
import { RiggingEducationAppendixCRiggingEquipmentIdentificationHardwareReference } from "@/components/rigging/rigging-education-appendix-c-rigging-equipment-identification-hardware-reference";
import { RiggingEducationAppendixDCraneTypesOperationalCharacteristics } from "@/components/rigging/rigging-education-appendix-d-crane-types-operational-characteristics";
import { RiggingEducationAppendixEBcRegulationsStandardsComplianceQuickReference } from "@/components/rigging/rigging-education-appendix-e-bc-regulations-standards-compliance-quick-reference";

export type LessonSlug =
  | "overview"
  | "module-1"
  | "module-2"
  | "module-3"
  | "module-4"
  | "module-5"
  | "module-6"
  | "module-7"
  | "module-8"
  | "module-9"
  | "module-10"
  | "module-11"
  | "module-12"
  | "module-13"
  | "module-14"
  | "module-15"
  | "module-16"
  | "module-17"
  | "module-18"
  | "module-19"
  | "module-20"
  | "module-21"
  | "module-22"
  | "module-23"
  | "module-24"
  | "module-25"
  | "appendix-a"
  | "appendix-b"
  | "appendix-c"
  | "appendix-d"
  | "appendix-e";

export type TocEntry = { id: string; label: string };

export type Lesson = {
  slug: LessonSlug;
  title: string;
  badge: string;
  description: string;
  toc: readonly TocEntry[];
  component: ComponentType<{ readonly locale: Locale }>;
  kind: "overview" | "module" | "appendix";
};

type LessonComponent = ComponentType<{ readonly locale: Locale }>;

const APPENDIX_META: Record<
  `appendix-${string}`,
  { title: string; badge: string; description: string; toc: TocEntry[]; component: LessonComponent }
> = {
  "appendix-a": {
    title: "Appendix A — Standard hand signals",
    badge: "Appendix A",
    description: "Reference: hand signals for crane and rigging operations.",
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "signaling-principles", label: "Principles" },
      { id: "emergency-stop-signal", label: "STOP" },
      { id: "hoist-signal", label: "HOIST" },
      { id: "lower-signal", label: "LOWER" },
    ],
    component: RiggingEducationAppendixAStandardHandSignals,
  },
  "appendix-b": {
    title: "Appendix B — Basic rigging math",
    badge: "Appendix B",
    description: "Reference formulas and calculations for rigging operations.",
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "load-weight-calculations", label: "Load weight" },
      { id: "sling-tension-calculations", label: "Sling tension" },
    ],
    component: RiggingEducationAppendixBBasicRiggingMath,
  },
  "appendix-c": {
    title: "Appendix C — Equipment identification & hardware",
    badge: "Appendix C",
    description: "Visual reference for rigging hardware and identification marks.",
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "shackles", label: "Shackles" },
      { id: "hooks", label: "Hooks" },
    ],
    component: RiggingEducationAppendixCRiggingEquipmentIdentificationHardwareReference,
  },
  "appendix-d": {
    title: "Appendix D — Crane types & characteristics",
    badge: "Appendix D",
    description: "Overview of common crane types and operational characteristics.",
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "mobile-cranes", label: "Mobile cranes" },
      { id: "tower-cranes", label: "Tower cranes" },
    ],
    component: RiggingEducationAppendixDCraneTypesOperationalCharacteristics,
  },
  "appendix-e": {
    title: "Appendix E — BC regulations & compliance",
    badge: "Appendix E",
    description: "Quick reference for BC regulations and compliance requirements.",
    toc: [
      { id: "introduction", label: "Introduction" },
      { id: "ohsr-overview", label: "OHSR overview" },
      { id: "competency-requirements", label: "Competency" },
    ],
    component: RiggingEducationAppendixEBcRegulationsStandardsComplianceQuickReference,
  },
};

const MODULE_COMPONENTS: Record<string, LessonComponent> = {
  "module-1": RiggingEducationModule1Regulations,
  "module-2": RiggingEducationModule2Equipment,
  "module-3": RiggingEducationModule3Inspection,
  "module-4": RiggingEducationModule4CraneAwareness,
  "module-5": RiggingEducationModule5BasicPractices,
  "module-6": RiggingEducationModule6RiggingMath,
  "module-7": RiggingEducationModule7Communication,
  "module-8": RiggingEducationModule8AdvancedSlingGeometry,
  "module-9": RiggingEducationModule9AdvancedLoadControl,
  "module-10": RiggingEducationModule10ChainfallsLeverHoists,
  "module-11": RiggingEducationModule11MultipleCraneTandem,
  "module-12": RiggingEducationModule12SpecialtyLiftingDevices,
  "module-13": RiggingEducationModule13CranePhysicsRiggers,
  "module-14": RiggingEducationModule14EnvironmentalSiteHazards,
  "module-15": RiggingEducationModule15LiftPlanningCriticalLifts,
  "module-16": RiggingEducationModule16PracticalRiggingFieldOperations,
  "module-17": RiggingEducationModule17SafetyCultureHumanFactors,
  "module-18": RiggingEducationModule18ReferenceTablesFieldGuidelines,
  "module-19": RiggingEducationModule19GlossaryCraneRiggingTerms,
  "module-20": RiggingEducationModule20FinalIntegrationAppliedRiggingReadiness,
  "module-21": RiggingEducationModule21KnotsHitchesRopeApplications,
  "module-22": RiggingEducationModule22BlockTackleReevingMechanicalAdvantage,
  "module-23": RiggingEducationModule23HeavyLiftEngineeringAdvancedRiggingSystems,
  "module-24": RiggingEducationModule24TowerCraneRiggingOperations,
  "module-25": RiggingEducationModule25RiggingIncidentCaseStudiesFailureAnalysis,
};

function headlineToTitle(headline: string): string {
  return headline.split("|")[0]?.trim() ?? headline;
}

function buildModuleLessons(): Lesson[] {
  return Object.entries(RIGGING_SLIDE_MODULE_BY_SLUG).map(([slug, config]) => ({
    slug: slug as LessonSlug,
    title: headlineToTitle(config.headline),
    badge: `Module ${slug.replace("module-", "")}`,
    description: config.headline,
    toc: config.toc,
    component: MODULE_COMPONENTS[slug],
    kind: "module" as const,
  }));
}

function buildAppendixLessons(): Lesson[] {
  return Object.entries(APPENDIX_META).map(([slug, meta]) => ({
    slug: slug as LessonSlug,
    title: meta.title,
    badge: meta.badge,
    description: meta.description,
    toc: meta.toc,
    component: meta.component,
    kind: "appendix" as const,
  }));
}

export const OVERVIEW_LESSON: Lesson = {
  slug: "overview",
  title: "Crane rigging & advanced rigging",
  badge: "Course overview",
  description:
    "Educational overview of crane rigging: scope, purpose, industry context, standards awareness, and areas of study.",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "purpose", label: "Purpose" },
    { id: "industry-context", label: "Industry context" },
    { id: "standards", label: "Standards & references" },
    { id: "areas-of-study", label: "Areas of study" },
    { id: "philosophy", label: "Educational philosophy" },
  ],
  component: CraneRiggingEducationOverview,
  kind: "overview",
};

export const ALL_LESSONS: Lesson[] = [
  OVERVIEW_LESSON,
  ...buildModuleLessons(),
  ...buildAppendixLessons(),
];

export const NAV_LESSONS = ALL_LESSONS.filter((l) => l.slug !== "overview");

export function getLesson(slug: string): Lesson | undefined {
  return ALL_LESSONS.find((lesson) => lesson.slug === slug);
}

export function getLessonSlugs(): LessonSlug[] {
  return ALL_LESSONS.map((l) => l.slug);
}
