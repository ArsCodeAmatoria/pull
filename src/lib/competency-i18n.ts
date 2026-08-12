import type { Locale } from "@/i18n/config";
import type { TrackSlug } from "@/lib/tracks";
import { getSlideCourse } from "@/lib/competency-course";
import {
  getBasicCompetencyGroups,
  getBasicCompetencyTotal,
} from "@/data/curriculum-competencies-i18n";

const ES_RIGGER_TOPICS = [
  "Regulaciones y normas (OHSR Partes 14–15, aparejador calificado, WLL, identificación)",
  "WLL, factor de diseño, resistencia a la rotura, tipos de enganche y límites del conjunto",
  "Suavizadores y protección de bordes afilados (OHSR 15.39)",
  "Inspección previa al uso y criterios de retiro por tipo de equipo",
  "Pesos de materiales: tabla de densidad, madera, lock block, contrachapado, viga de acero, tubo de hierro fundido, balde métrico de concreto",
  "Centro de gravedad — cargas descentradas y gancho sobre el CdG",
  "Lectura de tablas de eslingas de cable y cadena (vertical + sen)",
  "Accesorios bajo el gancho, líneas de guía y nudos",
  "Planificación de izajes, izajes críticos, señales, radio y distancia mínima de aproximación",
];

const ES_PRO = {
  competencies: [
    "Pinzas verticales para placas — garras, espesor y rigging gemelo",
    "Barras separadoras — ángulos, compresión y modos de falla",
    "Vigas de izaje — momento flector y bridles superiores",
    "Tensión no simétrica — CdG, piernas desiguales y verificación en campo",
    "Integración de dispositivos e izajes críticos",
  ],
};

const RIGGER_TOPICS_EN = [
  "Regulations & standards (OHSR Parts 14–15, qualified rigger, WLL, identification)",
  "WLL, design factor, breaking strength, hitch types, and assembly limits",
  "Softeners and sharp-edge protection (OHSR 15.39)",
  "Pre-use inspection and removal criteria by gear type",
  "Material weights: density chart, lumber, lock block, plywood, steel beam, cast iron pipe, metric concrete bucket",
  "Center of gravity — offset loads and hook over CG",
  "Reading wire rope and chain sling charts (vertical + sin)",
  "Below-the-hook attachments, taglines, and knots",
  "Lift planning, critical lifts, signals, radio, and minimum approach distance",
];

const PRO_COMPETENCIES_EN = [
  "Vertical plate clamps — jaws, thickness range, twin-clamp rigging",
  "Spreader bars — angles, compression, and failure modes",
  "Lifting beams — bending moment and top bridles",
  "Non-symmetric tension — COG offset, unequal legs, field verification",
  "Combining devices and critical lift planning",
];

export function getLocalizedCompetencyCourse(locale: Locale, track: TrackSlug = "rigger-competency") {
  const course = getSlideCourse(track, locale);

  if (track === "intermediate") {
    return {
      title: course.title,
      description: course.description,
      units: course.units,
      topics: locale === "es" ? ES_PRO.competencies : PRO_COMPETENCIES_EN,
      competencyGroups: [],
      competencyCount: 0,
    };
  }

  return {
    title: course.title,
    description: course.description,
    units: course.units,
    topics: locale === "es" ? ES_RIGGER_TOPICS : RIGGER_TOPICS_EN,
    competencyGroups: getBasicCompetencyGroups(locale),
    competencyCount: getBasicCompetencyTotal(),
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
