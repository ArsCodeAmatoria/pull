import type { Locale } from "@/i18n/config";
import type { Lesson, TocEntry } from "@/lib/lessons";

type LessonMeta = {
  title: string;
  badge: string;
  description: string;
  toc?: readonly TocEntry[];
};

const ES_LESSON_META: Partial<Record<string, LessonMeta>> = {
  overview: {
    badge: "Resumen del curso",
    title: "Aparejo de grúas y aparejo avanzado",
    description:
      "Resumen educativo del aparejo de grúas: alcance, propósito, contexto industrial, normas y áreas de estudio.",
    toc: [
      { id: "introduction", label: "Introducción" },
      { id: "purpose", label: "Propósito" },
      { id: "industry-context", label: "Contexto industrial" },
      { id: "standards", label: "Normas y referencias" },
      { id: "areas-of-study", label: "Áreas de estudio" },
      { id: "philosophy", label: "Filosofía educativa" },
    ],
  },
  "module-1": {
    badge: "Módulo 1",
    title: "Módulo 1 — Regulaciones, normas y responsabilidades",
    description: "Marco regulatorio, estándares y responsabilidades del aparejador en BC.",
  },
  "module-2": {
    badge: "Módulo 2",
    title: "Módulo 2 — Conocimiento del equipo de aparejo",
    description: "Hardware, eslingas, capacidades y sistemas de aparejo.",
  },
  "module-3": {
    badge: "Módulo 3",
    title: "Módulo 3 — Inspección y criterios de retiro",
    description: "Inspección previa al uso y criterios de rechazo por tipo de equipo.",
  },
  "module-4": {
    badge: "Módulo 4",
    title: "Módulo 4 — Conciencia de grúa para aparejadores",
    description: "Capacidad, radio, configuración y coordinación con el operador.",
  },
  "module-5": {
    badge: "Módulo 5",
    title: "Módulo 5 — Prácticas básicas de aparejo",
    description: "Técnicas de enganche, protección de bordes y control de carga.",
  },
  "module-6": {
    badge: "Módulo 6",
    title: "Módulo 6 — Matemáticas de aparejo y cálculo de cargas",
    description: "Peso de carga, tensiones de eslinga, ángulos y centro de gravedad.",
  },
  "module-7": {
    badge: "Módulo 7",
    title: "Módulo 7 — Comunicación y señalización",
    description: "Señales manuales, radio y coordinación en el izaje.",
  },
  "module-8": {
    badge: "Módulo 8",
    title: "Módulo 8 — Geometría avanzada de eslingas y comportamiento de carga",
    description: "Ángulos, cargas asimétricas y geometría de fuerzas.",
  },
  "module-9": {
    badge: "Módulo 9",
    title: "Módulo 9 — Control avanzado de carga",
    description: "Líneas de retención, rotación y estabilidad durante el izaje.",
  },
  "module-10": {
    badge: "Módulo 10",
    title: "Módulo 10 — Polipastos, tecles y dispositivos de tensión",
    description: "Cadena, palanca y equipos de tensión en el campo.",
  },
  "module-11": {
    badge: "Módulo 11",
    title: "Módulo 11 — Izajes con múltiples grúas y en tándem",
    description: "Coordinación, reparto de carga e ingeniería requerida.",
  },
  "module-12": {
    badge: "Módulo 12",
    title: "Módulo 12 — Dispositivos de izaje especializados y accesorios",
    description: "Barras esparcidoras, vigas, pinzas y dispositivos bajo el gancho.",
  },
  "module-13": {
    badge: "Módulo 13",
    title: "Módulo 13 — Física de grúas para aparejadores",
    description: "Momento, radio, estabilidad y fuerzas que afectan el izaje.",
  },
  "module-14": {
    badge: "Módulo 14",
    title: "Módulo 14 — Peligros ambientales y del sitio",
    description: "Clima, terreno, líneas eléctricas y entorno de trabajo.",
  },
  "module-15": {
    badge: "Módulo 15",
    title: "Módulo 15 — Planificación de izajes e izajes críticos",
    description: "Plan de izaje, evaluación de riesgos e izajes de alta consecuencia.",
  },
  "module-16": {
    badge: "Módulo 16",
    title: "Módulo 16 — Aplicaciones prácticas y operaciones de campo",
    description: "Procedimientos de campo, comunicación y ejecución segura.",
  },
  "module-17": {
    badge: "Módulo 17",
    title: "Módulo 17 — Cultura de seguridad, factores humanos y decisiones operativas",
    description: "Factores humanos, fatiga y cultura de seguridad en aparejo.",
  },
  "module-18": {
    badge: "Módulo 18",
    title: "Módulo 18 — Tablas de referencia y guías de campo",
    description: "Tablas de campo, multiplicadores y referencias rápidas.",
  },
  "module-19": {
    badge: "Módulo 19",
    title: "Módulo 19 — Glosario de términos de grúas y aparejo",
    description: "Definiciones y terminología del oficio.",
  },
  "module-20": {
    badge: "Módulo 20",
    title: "Módulo 20 — Integración final: conocimiento aplicado y preparación operativa",
    description: "Síntesis del curso y preparación para el trabajo de campo.",
  },
  "module-21": {
    badge: "Módulo 21",
    title: "Módulo 21 — Nudos, amarres y aplicaciones de cuerda",
    description: "Nudos de campo, amarres y uso seguro de cuerda.",
  },
  "module-22": {
    badge: "Módulo 22",
    title: "Módulo 22 — Poleas, reeving y ventaja mecánica",
    description: "Sistemas de poleas, reeving y cálculo de ventaja mecánica.",
  },
  "module-23": {
    badge: "Módulo 23",
    title: "Módulo 23 — Ingeniería de izajes pesados y sistemas avanzados",
    description: "Izajes pesados, ingeniería y sistemas complejos de aparejo.",
  },
  "module-24": {
    badge: "Módulo 24",
    title: "Módulo 24 — Operaciones de aparejo en grúas torre",
    description: "Consideraciones específicas para grúas torre y aparejo.",
  },
  "module-25": {
    badge: "Módulo 25",
    title: "Módulo 25 — Casos de incidentes y análisis de fallas",
    description: "Estudios de caso, lecciones aprendidas y análisis de fallas.",
  },
  "appendix-a": {
    badge: "Apéndice A",
    title: "Apéndice A — Señales manuales estándar",
    description: "Referencia: señales manuales para operaciones de grúa y aparejo.",
  },
  "appendix-b": {
    badge: "Apéndice B",
    title: "Apéndice B — Matemáticas básicas de aparejo",
    description: "Fórmulas y cálculos de referencia para operaciones de aparejo.",
  },
  "appendix-c": {
    badge: "Apéndice C",
    title: "Apéndice C — Identificación de equipo y hardware",
    description: "Referencia visual de hardware de aparejo y marcas de identificación.",
  },
  "appendix-d": {
    badge: "Apéndice D",
    title: "Apéndice D — Tipos de grúas y características",
    description: "Resumen de tipos comunes de grúas y características operativas.",
  },
  "appendix-e": {
    badge: "Apéndice E",
    title: "Apéndice E — Regulaciones de BC y cumplimiento",
    description: "Referencia rápida de regulaciones de BC y requisitos de cumplimiento.",
  },
};

export function getLocalizedLesson(lesson: Lesson, locale: Locale): Lesson {
  if (locale !== "es") return lesson;
  const meta = ES_LESSON_META[lesson.slug];
  if (!meta) return lesson;
  return {
    ...lesson,
    title: meta.title,
    badge: meta.badge,
    description: meta.description,
    toc: meta.toc ?? lesson.toc,
  };
}

export function stripLessonTitlePrefix(title: string, kind: Lesson["kind"]): string {
  if (kind === "module") return title.replace(/^Módulo \d+ — /, "").replace(/^Module \d+ — /, "");
  if (kind === "appendix") {
    return title.replace(/^Apéndice [A-E] — /, "").replace(/^Appendix [A-E] — /, "");
  }
  return title;
}
