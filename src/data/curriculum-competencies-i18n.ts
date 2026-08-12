import type { Locale } from "@/i18n/config";
import {
  COMPETENCY_INTRO,
  CURRICULUM_COMPETENCY_GROUPS,
  type CurriculumCompetencyGroup,
} from "@/data/curriculum-competencies";
import {
  getCompetencyPathwayLevel,
  LEVELED_COMPETENCY_GROUPS,
  type LeveledCompetencyGroup,
} from "@/data/curriculum-competency-levels";

/** Spanish translations keyed by the official English competency wording. */
export const COMPETENCY_LABEL_ES: Record<string, string> = {
  "Explain responsibilities of the signal person.": "Explicar las responsabilidades de la persona de señales.",
  "Explain responsibilities of the equipment operator.": "Explicar las responsabilidades del operador del equipo.",
  "Explain responsibilities of the lift director.": "Explicar las responsabilidades del director de izaje.",
  "Define basic crane terminology.": "Definir la terminología básica de grúas.",
  "Describe importance of standard hand signals used in rigging and lifting operations.":
    "Describir la importancia de las señales manuales estándar usadas en aparejo e izaje.",
  "Explain signaling cranes while being moved on site.": "Explicar la señalización de grúas mientras se mueven en el sitio.",
  "Explain keeping personnel from the load path.": "Explicar cómo mantener al personal fuera de la trayectoria de la carga.",
  "Identify hazards.": "Identificar peligros.",
  "Explain safe work procedures and PPE.": "Explicar procedimientos de trabajo seguro y EPP.",
  "Describe safety devices and operator aids.": "Describir dispositivos de seguridad y ayudas al operador.",
  "Describe importance of environmental factors.": "Describir la importancia de los factores ambientales.",
  "Explain emergency procedures.": "Explicar procedimientos de emergencia.",
  "Describe importance of the effects of size, shape, weight, and center of gravity of the load being lifted.":
    "Describir la importancia de los efectos del tamaño, forma, peso y centro de gravedad de la carga.",
  "Describe importance of boom deflection and how to compensate for it.":
    "Describir la importancia de la deflexión de la pluma y cómo compensarla.",
  "Describe importance of effects of side loading.": "Describir la importancia de los efectos de la carga lateral.",
  "Describe importance of crane capacity/load charts and limitations.":
    "Describir la importancia de las tablas de capacidad/carga de la grúa y sus limitaciones.",
  "Describe importance of causes and consequences of two-blocking.":
    "Describir la importancia de las causas y consecuencias del two-blocking.",
  "Describe common MSI-prevention techniques.": "Describir técnicas comunes de prevención de lesiones musculoesqueléticas.",
  "Describe the need for lifelong learning.": "Describir la necesidad del aprendizaje continuo.",

  "Identify slings.": "Identificar eslingas.",
  "Identify rigging hardware.": "Identificar herrajes de aparejo.",
  "Identify hooks.": "Identificar ganchos.",
  "Identify below-the-hook lifting devices.": "Identificar dispositivos de izaje bajo el gancho.",
  "Identify auxiliary equipment.": "Identificar equipo auxiliar.",
  "Identify working load limit.": "Identificar el límite de carga de trabajo (WLL).",
  "Identify hitch configurations.": "Identificar configuraciones de enganche.",

  "Explain hazards of moving equipment on the jobsite.": "Explicar los peligros de mover equipo en el sitio de trabajo.",
  "Explain remaining visible to the operator when possible.": "Explicar permanecer visible para el operador cuando sea posible.",
  "Explain providing clear and visible hand signals.": "Explicar cómo dar señales manuales claras y visibles.",
  "Describe the importance of keeping constant communication with the operator.":
    "Describir la importancia de mantener comunicación constante con el operador.",
  "Explain operator perspective while signaling.": "Explicar la perspectiva del operador al señalizar.",
  "Explain communication barriers.": "Explicar las barreras de comunicación.",
  "Explain action to take if the operator is not following signals correctly.":
    "Explicar qué hacer si el operador no sigue las señales correctamente.",
  "Describe dedicated radio channels.": "Describir canales de radio dedicados.",
  "Demonstrate hand signals for overhead cranes.": "Demostrar señales manuales para grúas puente.",
  "Demonstrate hand signals for tower cranes.": "Demostrar señales manuales para grúas torre.",
  "Demonstrate hand signals for mobile cranes.": "Demostrar señales manuales para grúas móviles.",
  "Demonstrate radio communication.": "Demostrar comunicación por radio.",
  "Demonstrate hazard communication to others on-site.": "Demostrar comunicación de peligros a otros en el sitio.",

  "Describe the importance of applicable provincial OHS regulations.":
    "Describir la importancia de las regulaciones provinciales de SST aplicables.",
  "Describe the importance of provincial OHS inspection regulations.":
    "Describir la importancia de las regulaciones provinciales de inspección de SST.",
  "Describe the importance of WorkSafeBC and provincial standards, including requirements concerning personnel under loads.":
    "Describir la importancia de WorkSafeBC y las normas provinciales, incluidos los requisitos sobre personal bajo cargas.",
  "Define qualified riggers.": "Definir aparejadores calificados.",
  "Describe the importance of manufacturers' rejection criteria.":
    "Describir la importancia de los criterios de rechazo del fabricante.",
  "Describe the importance of ASME B30 standards.": "Describir la importancia de las normas ASME B30.",
  "List design factors for rigging components according to OHS regulations.":
    "Enumerar los factores de diseño de componentes de aparejo según las regulaciones de SST.",
  "Explain the process for rejected rigging and devices.": "Explicar el proceso para aparejo y dispositivos rechazados.",
  "Identify the hazard of shock loading.": "Identificar el peligro de la carga de impacto (shock loading).",
  "Explain refusing unsafe work.": "Explicar el rechazo al trabajo inseguro.",
  "Explain the hazards of the line of fire.": "Explicar los peligros de la línea de fuego.",
  "Explain electrical power-line hazards, applicable regulations, and safety requirements.":
    "Explicar los peligros de líneas eléctricas, regulaciones aplicables y requisitos de seguridad.",
  "Describe the importance of fall protection.": "Describir la importancia de la protección contra caídas.",

  "Plan a lift.": "Planificar un izaje.",
  "Describe the importance of effects of environmental conditions.":
    "Describir la importancia de los efectos de las condiciones ambientales.",
  "Describe the importance of checking manufacturer's safety specifications prior to operation of equipment.":
    "Describir la importancia de revisar las especificaciones de seguridad del fabricante antes de operar el equipo.",
  "Determine the weight of the load.": "Determinar el peso de la carga.",
  "Describe lifting characteristics of rigging equipment.": "Describir las características de izaje del equipo de aparejo.",
  "Describe how to determine rigging equipment requirements.": "Describir cómo determinar los requisitos del equipo de aparejo.",
  "Identify the load's travel path.": "Identificar la trayectoria de desplazamiento de la carga.",
  "Identify and define the boundaries of a safe load drop zone.":
    "Identificar y definir los límites de una zona segura de caída de carga.",
  "Calculate headroom.": "Calcular el espacio libre vertical (headroom).",
  "Calculate tension.": "Calcular la tensión.",
  "Describe how to recognize special handling requirements related to load configurations.":
    "Describir cómo reconocer requisitos especiales de manejo según la configuración de la carga.",
  "Describe scenarios that require atypical lifting techniques.":
    "Describir escenarios que requieren técnicas de izaje atípicas.",
  "Explain multi-piece lifts.": "Explicar izajes de varias piezas.",
  "Describe how to recognize special handling requirements related to an offset center of gravity.":
    "Describir cómo reconocer requisitos especiales de manejo relacionados con un centro de gravedad desplazado.",
  "Explain single- and multi-crane lifts.": "Explicar izajes con una o varias grúas.",
  "Describe critical lifts.": "Describir izajes críticos.",
  "Describe engineered lift plans.": "Describir planes de izaje de ingeniería.",
  "Explain the purpose and function of engineered lifting and pick points in rigging operations.":
    "Explicar el propósito y la función de puntos de izaje/ingeniería en operaciones de aparejo.",
  "Describe the effects of D/d ratio on rigging.": "Describir los efectos de la relación D/d en el aparejo.",
  "Calculate load distribution.": "Calcular la distribución de la carga.",
  "Identify and inspect non-commercial manufactured rigging and devices.":
    "Identificar e inspeccionar aparejo y dispositivos fabricados fuera de lo comercial.",
  "Describe reviewing lift requirements with site supervision, operator, and crew.":
    "Describir la revisión de requisitos de izaje con supervisión del sitio, operador y cuadrilla.",

  "Identify load characteristics — weight, attachment, and center of gravity.":
    "Identificar características de la carga — peso, puntos de sujeción y centro de gravedad.",
  "Explain site-specific rigging activities.": "Explicar actividades de aparejo específicas del sitio.",
  "Confirm capacity calculations based on the weight of the load to be lifted.":
    "Confirmar cálculos de capacidad según el peso de la carga a izar.",
  "Interpret rigging capacity cards/charts.": "Interpretar tarjetas/tablas de capacidad de aparejo.",
  "Inspect rigging tools and lifting equipment before use.":
    "Inspeccionar herramientas de aparejo y equipo de izaje antes de usarlos.",
  "Demonstrate use of slings.": "Demostrar el uso de eslingas.",
  "Demonstrate use of effective edge protection.": "Demostrar el uso de protección efectiva de bordes.",
  "Demonstrate use of hitch configurations.": "Demostrar el uso de configuraciones de enganche.",
  "Demonstrate use of rigging hardware.": "Demostrar el uso de herrajes de aparejo.",
  "Demonstrate proper use of tag lines/load-control equipment.":
    "Demostrar el uso correcto de líneas de guía / equipo de control de carga.",
  "Demonstrate unsafe rigging practices and body positioning.":
    "Demostrar prácticas inseguras de aparejo y posicionamiento del cuerpo.",
  "Demonstrate landing and supporting the load.": "Demostrar el aterrizaje y soporte de la carga.",
  "Verify that the rigging can be removed.": "Verificar que el aparejo se pueda retirar.",
  "Demonstrate post-load movement activities — disconnect the rigging.":
    "Demostrar actividades posteriores al movimiento de la carga — desconectar el aparejo.",
  "Apply multi-leg slings.": "Aplicar eslingas de varias patas.",
  "Demonstrate use of below-the-hook lifting devices.": "Demostrar el uso de dispositivos de izaje bajo el gancho.",
  "Recognize unsafe rigging practices.": "Reconocer prácticas inseguras de aparejo.",
  "Demonstrate post-load movement activities — store the rigging.":
    "Demostrar actividades posteriores al movimiento de la carga — almacenar el aparejo.",
};

export const COMPETENCY_GROUP_TITLE_ES: Record<string, string> = {
  BASIC_KNOWLEDGE: "Conocimientos básicos de operaciones con grúas",
  RIGGING_TERMINOLOGY: "Identificar terminología de aparejo",
  COMMUNICATION: "Comunicación",
  SAFETY_STANDARDS: "Normas y regulaciones de seguridad",
  PLANNING: "Planificación de la actividad de aparejo",
  EXECUTION: "Ejecución de la actividad de aparejo",
};

export const COMPETENCY_INTRO_ES =
  "Un aparejador en construcción y/o manufactura debe ser capaz de:";

export function localizeCompetencyLabel(label: string, locale: Locale): string {
  if (locale !== "es") return label;
  return COMPETENCY_LABEL_ES[label] ?? label;
}

export function localizeCompetencyGroupTitle(moduleCode: string, title: string, locale: Locale): string {
  if (locale !== "es") return title;
  return COMPETENCY_GROUP_TITLE_ES[moduleCode] ?? title;
}

export function getCompetencyIntro(locale: Locale): string {
  return locale === "es" ? COMPETENCY_INTRO_ES : COMPETENCY_INTRO;
}

/** Official outcomes introduced in this Basic classroom course. */
export function getBasicCompetencyGroups(locale: Locale = "en"): CurriculumCompetencyGroup[] {
  return CURRICULUM_COMPETENCY_GROUPS.map((group) => {
    const competencies = group.competencies
      .filter((label) => getCompetencyPathwayLevel(label) === "basic")
      .map((label) => localizeCompetencyLabel(label, locale));
    return {
      moduleCode: group.moduleCode,
      title: localizeCompetencyGroupTitle(group.moduleCode, group.title, locale),
      competencies,
    };
  }).filter((group) => group.competencies.length > 0);
}

export function getBasicCompetencyTotal(): number {
  return getBasicCompetencyGroups("en").reduce((sum, group) => sum + group.competencies.length, 0);
}

export function getLocalizedLeveledCompetencyGroups(locale: Locale): LeveledCompetencyGroup[] {
  return LEVELED_COMPETENCY_GROUPS.map((group) => ({
    moduleCode: group.moduleCode,
    title: localizeCompetencyGroupTitle(group.moduleCode, group.title, locale),
    competencies: group.competencies.map((item) => ({
      label: localizeCompetencyLabel(item.label, locale),
      level: item.level,
    })),
  }));
}

export function getBasicCompetenciesForModule(
  moduleCode: string,
  locale: Locale = "en"
): CurriculumCompetencyGroup | undefined {
  return getBasicCompetencyGroups(locale).find((group) => group.moduleCode === moduleCode);
}
