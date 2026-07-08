import type { Locale } from "@/i18n/config";
import type { TrackSlug } from "@/lib/tracks";
import { getSlideCourse } from "@/lib/competency-course";

const ES_RIGGER = {
  title: "Curso de diapositivas de competencia de aparejador",
  description:
    "Curso de diapositivas en el aula para competencia de aparejador — regulaciones, WLL/factor de diseño, inspección, matemáticas de aparejo, bajo el gancho y planificación de izajes. Alineado con BC Crane Safety y OHSR Parte 15 de WorkSafeBC.",
  competencies: [
    "Regulaciones y normas (OHSR Parte 15, aparejador calificado, WLL, identificación)",
    "WLL, factor de diseño, resistencia a la rotura, tipos de enganche, límites del conjunto",
    "Suavizadores y protección de bordes afilados (OHSR 15.39)",
    "Inspección previa al uso y criterios de retiro por tipo de equipo",
    "Matemáticas de aparejo: tablas de peso, peso de carga, conversiones, tensión de eslinga, ángulos, CdG, izajes asimétricos",
    "Accesorios bajo el gancho y planificación de izajes",
    "Izajes críticos y cierre del curso",
  ],
};

const ES_PRO = {
  title: "Curso de diapositivas de aparejo profesional",
  description:
    "Diapositivas avanzadas — pinzas verticales para placas, barras separadoras, vigas de izaje y tensión asimétrica de eslingas. Para aparejadores con fundamentos de competencia.",
  competencies: [
    "Pinzas verticales para placas — garras, espesor y rigging gemelo",
    "Barras separadoras — ángulos, compresión y modos de falla",
    "Vigas de izaje — momento flector y bridles superiores",
    "Tensión no simétrica — CdG, piernas desiguales y verificación en campo",
    "Integración de dispositivos e izajes críticos",
  ],
};

const ES_UNITS_RIGGER: Record<string, string> = {
  intro: "Introducción",
  regulations: "Regulaciones y normas",
  ratings: "WLL, factor de diseño y resistencia",
  protection: "Protección de bordes y suavizadores",
  inspection: "Inspección previa al uso y retiro",
  math: "Matemáticas de aparejo",
  bth: "Bajo el gancho",
  planning: "Planificación de izajes",
  close: "Izajes críticos y cierre",
};

const ES_UNITS_PRO: Record<string, string> = {
  intro: "Introducción",
  clamps: "Pinzas verticales para placas",
  spreader: "Barras separadoras",
  beams: "Vigas de izaje",
  asymmetry: "Tensión no simétrica",
  close: "Integración y cierre",
};

const RIGGER_COMPETENCIES_EN = [
  "Regulations & standards (OHSR Part 15, qualified rigger, WLL, identification)",
  "WLL, design factor, breaking strength, hitch types, assembly limits",
  "Softeners and sharp-edge protection (OHSR 15.39)",
  "Pre-use inspection and removal criteria by gear type",
  "Rigging math: weight charts, load weight, conversions, sling tension, angles, COG, non-symmetrical picks",
  "Below-the-hook attachments and lift planning",
  "Critical lifts and course wrap-up",
];

const PRO_COMPETENCIES_EN = [
  "Vertical plate clamps — jaws, thickness range, twin-clamp rigging",
  "Spreader bars — angles, compression, and failure modes",
  "Lifting beams — bending moment and top bridles",
  "Non-symmetric tension — COG offset, unequal legs, field verification",
  "Combining devices and critical lift planning",
];

function localizedMeta(track: TrackSlug, locale: Locale) {
  const course = getSlideCourse(track);
  if (locale === "en") {
    return {
      title: course.title,
      description: course.description,
      competencies: track === "pro-rigging" ? PRO_COMPETENCIES_EN : RIGGER_COMPETENCIES_EN,
    };
  }
  const es = track === "pro-rigging" ? ES_PRO : ES_RIGGER;
  return { title: es.title, description: es.description, competencies: es.competencies };
}

export function getLocalizedCompetencyCourse(locale: Locale, track: TrackSlug = "rigger-competency") {
  const course = getSlideCourse(track);
  const meta = localizedMeta(track, locale);
  const unitLabels = track === "pro-rigging" ? ES_UNITS_PRO : ES_UNITS_RIGGER;

  return {
    title: meta.title,
    description: meta.description,
    units: course.units.map((u) => ({
      ...u,
      label: locale === "en" ? u.label : (unitLabels[u.id] ?? u.label),
    })),
    competencies: meta.competencies,
  };
}

export function formatDurationLocalized(minutes: number, locale: Locale): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (locale === "es") {
    if (h === 0) return `${m} min`;
    if (m === 0) return `${h} h`;
    return `${h} h ${m} min`;
  }
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}
