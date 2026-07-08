import type { Locale } from "@/i18n/config";
import { COMPETENCY_COURSE } from "@/lib/competency-course";

const ES_COURSE = {
  title: "Curso de diapositivas de competencia de aparejador de 8 horas",
  description:
    "95 competencias en el aula para un programa de aparejador de 8 horas — regulaciones, WLL/factor de diseño, inspección, matemáticas de aparejo, bajo el gancho y planificación de izajes. Alineado con BC Crane Safety y OHSR Parte 15 de WorkSafeBC.",
};

const ES_UNITS: Record<string, string> = {
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

const ES_COMPETENCIES = [
  "Regulaciones y normas (OHSR Parte 15, aparejador calificado, WLL, identificación)",
  "WLL, factor de diseño, resistencia a la rotura, tipos de enganche, límites del conjunto",
  "Suavizadores y protección de bordes afilados (OHSR 15.39)",
  "Inspección previa al uso y criterios de retiro por tipo de equipo",
  "Matemáticas de aparejo: tablas de peso, peso de carga, conversiones, tensión de eslinga, ángulos, CdG, izajes asimétricos",
  "Accesorios bajo el gancho y planificación de izajes",
  "Izajes críticos y cierre del curso",
];

export function getLocalizedCompetencyCourse(locale: Locale) {
  if (locale === "en") {
    return {
      title: COMPETENCY_COURSE.title,
      description: COMPETENCY_COURSE.description,
      units: COMPETENCY_COURSE.units.map((u) => ({ ...u, label: u.label })),
      competencies: [
        "Regulations & standards (OHSR Part 15, qualified rigger, WLL, identification)",
        "WLL, design factor, breaking strength, hitch types, assembly limits",
        "Softeners and sharp-edge protection (OHSR 15.39)",
        "Pre-use inspection and removal criteria by gear type",
        "Rigging math: weight charts, load weight, conversions, sling tension, angles, COG, non-symmetrical picks",
        "Below-the-hook attachments and lift planning",
        "Critical lifts and course wrap-up",
      ],
    };
  }

  return {
    title: ES_COURSE.title,
    description: ES_COURSE.description,
    units: COMPETENCY_COURSE.units.map((u) => ({
      ...u,
      label: ES_UNITS[u.id] ?? u.label,
    })),
    competencies: ES_COMPETENCIES,
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
