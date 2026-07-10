export const ES_COURSE_META = {
  "title": "Curso de diapositivas de competencia de aparejador",
  "description": "Curso de diapositivas en el aula para competencia de aparejador — regulaciones, WLL/factor de diseño, inspección, matemáticas de aparejo, bajo el gancho y planificación de izajes. Alineado con BC Crane Safety y OHSR Parte 15 de WorkSafeBC."
};

export const ES_UNIT_LABELS = {
  "intro": "Introducción",
  "regulations": "Regulaciones y normas",
  "ratings": "WLL, factor de diseño y resistencia",
  "protection": "Protección de bordes y suavizadores",
  "inspection": "Inspección previa al uso y retiro",
  "math": "Matemáticas de aparejo",
  "bth": "Bajo el gancho",
  "planning": "Planificación de izajes",
  "close": "Izajes críticos y cierre"
};

export const ES_SLIDE_TEXT = [
  {
    "title": "Competencia de aparejador",
    "summary": "Reglas, estadísticas de aparejo, bordes afilados, ángulos de eslinga, matemáticas del seno, L ÷ H y por qué los suavizadores.",
    "bullets": [
      "Reglas de BC y contexto de accidentes",
      "Bordes afilados · fuerzas de compresión · ángulos de pierna",
      "Seno, L ÷ H y dos cuestionarios de calculadora"
    ],
    "focusKicker": "Información básica de aparejo en el curso"
  },
  {
    "title": "Las reglas",
    "summary": "La ley primero — luego las normas adoptadas y los límites del fabricante.",
    "source": "WorkSafeBC OHSR · BC Crane Safety",
    "sections": [
      {
        "heading": "Regulación de BC",
        "items": [
          {
            "label": "WorkSafeBC OHSR Parte 14 — grúas y manipulación de materiales"
          },
          {
            "label": "WorkSafeBC OHSR Parte 15 — aparejo y trabajadores calificados"
          },
          {
            "label": "BC Crane Safety (BCCSA) — orientación sobre competencia"
          }
        ]
      },
      {
        "heading": "CSA torre, móvil y aparejo",
        "items": [
          {
            "label": "CSA Z248 — grúas torre (montaje, operación, inspección)"
          },
          {
            "label": "CSA Z150 — código de seguridad para grúas móviles"
          },
          {
            "label": "Criterios de aparejo — eslingas, accesorios, WLL (OHSR Parte 15)"
          }
        ]
      },
      {
        "heading": "ANSI / ASME B30",
        "items": [
          {
            "label": "ANSI — normas nacionales de EE. UU. (volúmenes B30 de aparejo)"
          },
          {
            "label": "B30.3 torre · B30.5 grúas móviles"
          },
          {
            "label": "B30.9 eslingas · B30.26 accesorios de aparejo"
          },
          {
            "label": "B30.10 ganchos · B30.20 bajo el gancho"
          }
        ]
      },
      {
        "heading": "Internacional y otros",
        "items": [
          {
            "label": "EN 13155 — accesorios de izaje de carga"
          },
          {
            "label": "FEM — normas europeas de grúas y polipastos"
          },
          {
            "label": "El procedimiento del empleador y el WLL del fabricante rigen"
          }
        ]
      }
    ]
  },
  {
    "title": "Estadísticas de accidentes de aparejo",
    "summary": "Canadá y BC — por qué importa la capacitación en competencia.",
    "source": "BC Gov · WorkSafeBC · AWCBC · estudio Wiethorn sobre grúas",
    "sections": [
      {
        "heading": "Registro documentado",
        "items": [
          {
            "label": "Kelowna 2021 — cinco trabajadores fallecidos"
          },
          {
            "label": "WS 2025-01 — boletín sobre falla de aparejo"
          },
          {
            "label": "56,7 % de fallas de aparejo — sin suavizadores"
          }
        ]
      }
    ],
    "heroStats": [
      {
        "label": "Muertes en BC\n(5 años)"
      },
      {
        "label": "incidentes con torre"
      },
      {
        "label": "participación del aparejo"
      }
    ]
  },
  {
    "title": "Bordes afilados — proteger la eslinga",
    "summary": "OHSR Parte 15 — las esquinas afiladas cortan eslingas sintéticas y cable de acero; acolchar el punto de contacto de la eslinga.",
    "source": "WorkSafeBC OHSR Parte 15",
    "focusCallout": "Proteger la eslinga — no el borde",
    "sections": [
      {
        "heading": "OHSR 15.39",
        "items": [
          {
            "label": "Proteger las eslingas de bordes y esquinas afiladas en la carga"
          },
          {
            "label": "No el borde — proteger la eslinga donde apoya en la esquina"
          },
          {
            "label": "Almohadillas, fundas, madera o protección diseñada en el punto de contacto"
          }
        ]
      },
      {
        "heading": "En obra",
        "items": [
          {
            "label": "Revisar los suavizadores tras los primeros centímetros de izaje — pueden desplazarse"
          },
          {
            "label": "Fibras de eslinga cortadas o aplastadas — retirar del servicio de inmediato"
          }
        ]
      }
    ]
  },
  {
    "title": "Fuerzas de compresión — ángulos de eslinga",
    "summary": "Brida poco inclinada — compresión sobre la carga y sobrecarga en cada pierna.",
    "focusKicker": "Introducción · Geometría de eslingas",
    "focusCallout": "Ángulo bajo → compresión + alta tensión en pierna",
    "sections": [
      {
        "heading": "Compresión",
        "items": [
          "Cada pierna empuja hacia adentro sobre la carga",
          {
            "label": "Ángulo bajo = alta compresión"
          }
        ]
      },
      {
        "heading": "Tensión de eslinga",
        "items": [
          "Un ángulo poco inclinado multiplica la tensión en cada pierna",
          "Una brida más inclinada reduce ambos problemas"
        ]
      }
    ]
  },
  {
    "title": "Ángulos — 60°, 45° y 30°",
    "summary": "Piernas inclinadas sostienen más. Piernas planas sostienen menos.",
    "focusKicker": "Introducción · Geometría de eslingas",
    "focusCallout": "Mayor tracción → menor capacidad",
    "sections": [
      {
        "heading": "Piernas inclinadas",
        "items": [
          {
            "label": "60° — ~87 % de capacidad"
          },
          {
            "label": "45° — ~71 % de capacidad"
          }
        ]
      },
      {
        "heading": "Piernas planas",
        "items": [
          {
            "label": "30° — 50 % de capacidad · doble tracción"
          },
          "Mayor tracción → menor capacidad"
        ]
      }
    ]
  },
  {
    "title": "Tensión de eslinga — seno",
    "summary": "Más inclinado = más fácil. Más plano = más difícil. Más difícil = sostener menos.",
    "focusKicker": "Introducción · Matemáticas simples de aparejo",
    "focusCallout": "Ángulo plano = tirar más fuerte = izar menos",
    "sections": [
      {
        "heading": "La idea",
        "items": [
          "Eslingas planas = mayor tracción en cada pierna",
          "Mayor tracción = menor carga segura"
        ]
      },
      {
        "heading": "Ejemplo a 45°",
        "items": [
          {
            "label": "≈ 7 de 10 libras seguras"
          },
          "Inclinado es fuerte · plano es débil"
        ]
      }
    ]
  },
  {
    "title": "Verificación con calculadora — seno",
    "summary": "Cuatro problemas rápidos en modo DEG. Ingrese cada uno en su calculadora antes de revelar las respuestas.",
    "focusKicker": "Introducción · Cuestionario rápido",
    "quizQuestions": [
      {
        "prompt": "Con una calculadora científica en Grados (DEG), ingrese Sin(60). ¿Qué número obtiene?",
        "explanation": "sin 60° ≈ 0,866 — se usa al verificar la tensión de pierna de eslinga a un ángulo de pierna de 60°."
      },
      {
        "prompt": "Aún en modo DEG, ingrese Sin(45). ¿Qué número obtiene?",
        "explanation": "sin 45° ≈ 0,707 — coincide con el ejemplo de carga segura ≈7/10 de la diapositiva anterior."
      },
      {
        "prompt": "En modo DEG, ingrese Sin(30). ¿Qué número obtiene?",
        "explanation": "sin 30° = 0,500 — un ángulo de pierna de 30° duplica la tensión por pierna (T = W)."
      },
      {
        "prompt": "¿Cuánto es 1 dividido por 0,866?",
        "explanation": "1 ÷ sin 60° ≈ 1,155 — el multiplicador de tensión por pierna a un ángulo de 60°."
      }
    ]
  },
  {
    "title": "Longitud ÷ altura — 45°",
    "summary": "A un ángulo de pierna de 45°, compare la longitud de eslinga (L) con la altura vertical (H).",
    "focusKicker": "Introducción · L y H",
    "focusCallout": "L ÷ H = tensión · H ÷ L = reducción",
    "sections": [
      {
        "heading": "Ejemplo a 45°",
        "items": [
          "Altura vertical H = 10 pies · longitud de pierna de eslinga L ≈ 14,1 pies",
          "Ambas piernas a 45° desde la horizontal — brida simétrica"
        ]
      },
      {
        "heading": "Tensión",
        "items": [
          {
            "label": "Longitud ÷ altura → L ÷ H"
          },
          {
            "label": "14,1 ÷ 10 = 1,41 factor de tensión por pierna"
          },
          "Tirar más fuerte que la mitad de la carga — multiplicar el peso por ~1,41"
        ]
      },
      {
        "heading": "Reducción",
        "items": [
          {
            "label": "Altura ÷ longitud → H ÷ L"
          },
          {
            "label": "10 ÷ 14,1 = 0,71 (~7/10 de carga segura)"
          },
          "Ángulo más plano — menos de su WLL está disponible"
        ]
      }
    ]
  },
  {
    "title": "Cuestionario L ÷ H — 60°, 45°, 30°",
    "summary": "Longitud ÷ altura da tensión. Altura ÷ longitud da reducción. Resuelva cada una antes de revelar las respuestas.",
    "focusKicker": "Introducción · Cuestionario L y H",
    "quizQuestions": [
      {
        "prompt": "H = 10 pies, L = 11,55 pies (ángulo de pierna 60°). ¿Cuánto es L ÷ H?",
        "explanation": "11,55 ÷ 10 = 1,155 — factor de tensión por pierna a 60°."
      },
      {
        "prompt": "H = 10 pies, L = 14,1 pies (ángulo de pierna 45°). ¿Cuánto es L ÷ H?",
        "explanation": "14,1 ÷ 10 = 1,41 — factor de tensión por pierna a 45°."
      },
      {
        "prompt": "H = 10 pies, L = 20 pies (ángulo de pierna 30°). ¿Cuánto es L ÷ H?",
        "explanation": "20 ÷ 10 = 2,000 — factor de tensión por pierna a 30°."
      },
      {
        "prompt": "H = 10 pies, L = 14,1 pies (ángulo de pierna 45°). ¿Cuánto es H ÷ L?",
        "explanation": "10 ÷ 14,1 = 0,71 — factor de reducción (~7/10 de carga segura) a 45°."
      }
    ]
  },
  {
    "title": "¿Por qué suavizadores?",
    "summary": "Cierre de la introducción — conecte ángulos, seno y L ÷ H con la protección de la eslinga en esquinas afiladas.",
    "focusKicker": "Introducción · Cierre",
    "focusCallout": "Proteja la eslinga — no solo la esquina",
    "sections": [
      {
        "heading": "Aprendió",
        "items": [
          "Reglas, ángulos, seno y L ÷ H",
          "Piernas más empinadas → menor tensión → más capacidad"
        ]
      },
      {
        "heading": "Por qué suavizadores",
        "items": [
          {
            "label": "Los bordes afilados cortan eslinga sintética y cable — acolche la eslinga"
          },
          {
            "label": "OHSR 15.39 — proteja las eslingas en el punto de contacto"
          },
          "Almohadillas, mangas y protección diseñada antes del izaje"
        ]
      }
    ]
  },
  {
    "title": "Marco OHSR Parte 14 y 15",
    "summary": "Estructura legal del aparejo en BC.",
    "bullets": [
      "Parte 14 — manipulación de materiales y grúas; Parte 15 — detalle de aparejo.",
      "La orientación de BCCSA apoya pero no reemplaza la regulación.",
      "CSA Z248 torre, Z150 móvil, ANSI/ASME B30.9 eslingas y B30.26 accesorios comúnmente referenciados."
    ],
    "source": "WorkSafeBC OHSR"
  },
  {
    "title": "OHSR 15.2 — Aparejadores calificados",
    "summary": "Quién puede realizar aparejo.",
    "bullets": [
      "Aparejo/eslingado por o bajo supervisión directa de un trabajador calificado.",
      "Debe conocer el aparejo específico en uso.",
      "Debe conocer el código de señales autorizado por la Junta."
    ]
  },
  {
    "title": "Calificado frente a competente",
    "summary": "Capacitación y supervisión.",
    "bullets": [
      "Calificado: educación, capacitación, experiencia, comprende peligros y controles.",
      "Los aprendices aparejan solo bajo supervisión directa de un aparejador calificado.",
      "El empleador verifica la competencia antes de asignar el trabajo."
    ]
  },
  {
    "title": "Deberes del empleador y del trabajador",
    "summary": "Responsabilidades en capas.",
    "bullets": [
      "Empleador: lugar de trabajo seguro, equipo mantenido y marcado, procedimientos, capacitación.",
      "Trabajador: seguir procedimientos, inspeccionar equipo, rechazar trabajo inseguro.",
      "Supervisor: asegurar el cumplimiento en el izaje."
    ]
  },
  {
    "title": "Derecho a rechazar trabajo inseguro",
    "summary": "Detener cuando el riesgo es indebido.",
    "bullets": [
      "Rechazar trabajo que presente peligro indebido para uno mismo o para otros.",
      "Aparejo dañado, peso desconocido o sin plan de izaje son ejemplos.",
      "Documentar y escalar — no proceder bajo presión."
    ]
  },
  {
    "title": "OHSR 15.3 — Apoyar antes de desenganchar",
    "summary": "Regla innegociable de descarga.",
    "bullets": [
      "Las cargas deben apoyarse de forma segura antes de desenganchar.",
      "Las cargas caídas durante el desenganche son prevenibles.",
      "Conclusión clave de BCCSA: apoyar antes de desenganchar."
    ]
  },
  {
    "title": "OHSR 15.4 — No exceder el WLL",
    "summary": "Prohibición de sobrecarga.",
    "bullets": [
      "La carga en cualquier conjunto de aparejo no debe exceder el WLL.",
      "El componente más débil rige el conjunto.",
      "Verificar antes de que el operador tome la carga."
    ]
  },
  {
    "title": "OHSR 15.5 — Identificación",
    "summary": "Accesorios clasificados y marcados.",
    "bullets": [
      "Los accesorios muestran ID del fabricante, ID del producto y WLL.",
      "Equipo heredado sin marca: una persona calificada lo clasifica o se retira del servicio.",
      "Etiquetas faltantes en eslingas — no usar."
    ]
  },
  {
    "title": "Accesorios improvisados prohibidos",
    "summary": "Sin aparejo improvisado.",
    "bullets": [
      "OHSR 15.32 — accesorios improvisados prohibidos.",
      "Pernos como pasadores de grillete, eslabones caseros, hardware desconocido — rechazar.",
      "Usar solo componentes clasificados e identificados."
    ]
  },
  {
    "title": "Pila de normas",
    "summary": "Cómo encajan las reglas.",
    "bullets": [
      "Ley (OHSR) → normas CSA / ANSI·ASME → fabricante → procedimiento de obra.",
      "Los planes de izaje diseñados por ingeniería prevalecen sobre izajes rutinarios cuando se requieren.",
      "En caso de conflicto, se aplica el requisito más protector."
    ]
  },
  {
    "title": "Documentación y diligencia debida",
    "summary": "Demostrar que planificó e inspeccionó.",
    "bullets": [
      "Registros de inspección, planes de izaje, registros de competencia.",
      "FLHA antes de la tarea; charla de seguridad para izajes complejos.",
      "Apoya la diligencia debida del empleador ante WorkSafeBC."
    ]
  },
  {
    "title": "Límite de carga de trabajo (WLL)",
    "summary": "Carga máxima clasificada para una configuración.",
    "bullets": [
      "El WLL es la carga máxima que el fabricante asigna para ese enganche.",
      "Cambia con el tipo de enganche, el ángulo y la terminación.",
      "Nunca exceder el WLL en ningún componente de la trayectoria."
    ]
  },
  {
    "title": "WLL frente a SWL frente a capacidad nominal",
    "summary": "Alineación terminológica.",
    "bullets": [
      "OHSR de BC usa WLL en accesorios de aparejo.",
      "Las tablas de grúa usan capacidad nominal al radio — límite diferente.",
      "No intercambiar capacidad de grúa por WLL de eslinga."
    ]
  },
  {
    "title": "Resistencia a la rotura",
    "summary": "Carga última antes de la falla.",
    "bullets": [
      "La resistencia a la rotura es el valor último de laboratorio/catálogo.",
      "No es un número de trabajo — nunca izar hasta la resistencia a la rotura.",
      "Se usa con el factor de diseño para derivar el WLL."
    ]
  },
  {
    "title": "Factor de diseño (OHSR 15.1, 15.6)",
    "summary": "Margen de seguridad en el sistema.",
    "bullets": [
      "Factor de diseño = resistencia a la rotura ÷ WLL (valores mínimos en Tabla 15-1).",
      "Ejemplo: eslinga de cable de acero, FD mínimo = 5.",
      "Aparejo que soporta trabajadores: FD al menos 10."
    ]
  },
  {
    "title": "Factores de diseño Tabla 15-1",
    "summary": "Mínimos por tipo de componente.",
    "bullets": [
      "Eslinga de cable de acero: 5 · Eslinga de cadena de aleación: 4 · Eslinga sintética de cinta: 5.",
      "Conjunto dedicado diseñado por ingeniería puede usar FD reducido solo para ese izaje.",
      "Reclasificar según Tabla 15-1 antes del uso general continuado."
    ]
  },
  {
    "title": "Eficiencia de terminación",
    "summary": "Empalmes y grapas reducen la capacidad.",
    "bullets": [
      "OHSR 15.21 — reducir WLL según eficiencia Figura 15-2 salvo que el fabricante indique lo contrario.",
      "Grapas, ojos de retorno y extremos prensados no son 100 % eficientes.",
      "Incluir en el cálculo del conjunto."
    ]
  },
  {
    "title": "Capacidad según ángulo de eslinga",
    "summary": "El ángulo reduce la capacidad efectiva.",
    "bullets": [
      "OHSR 15.34 — considerar el ángulo; reducciones Tabla 15-3.",
      "Ángulo incluido bajo entre piernas aumenta la tensión.",
      "El bloque de matemáticas cubre sin θ y multiplicadores."
    ]
  },
  {
    "title": "Estrangulamiento frente a canasta frente a vertical",
    "summary": "El enganche cambia el WLL.",
    "bullets": [
      "Enganche vertical: WLL nominal completo por pierna (izaje simétrico).",
      "Estrangulamiento: reducción de capacidad según fabricante/tabla.",
      "Canasta: capacidad aumentada — verificar ángulo y tabla de WLL."
    ]
  },
  {
    "title": "El conjunto es tan fuerte como el eslabón más débil",
    "summary": "Pensamiento sistémico.",
    "bullets": [
      "Grillete + eslinga + gancho + viga — verificar cada elemento.",
      "Incluir peso del bloque de gancho y dispositivo bajo el gancho si está en la carga.",
      "Si cualquier pieza está sobrecargada, detener y replanificar."
    ]
  },
  {
    "title": "Prueba de carga frente a carga de trabajo",
    "summary": "Definiciones OHSR.",
    "bullets": [
      "La prueba de carga detecta defectos de fabricación — no es la carga diaria de trabajo.",
      "Ojos plegados y algunas eslingas requieren registros de prueba de carga (15.24, 15.36).",
      "El WLL es el límite operativo en campo."
    ]
  },
  {
    "title": "OHSR 15.39 — Bordes afilados",
    "summary": "Protección de bordes según regulación.",
    "bullets": [
      "Proteger las eslingas de bordes y esquinas afiladas.",
      "Usar almohadillas, fundas, madera o protección de bordes diseñada.",
      "Bordes sin protección cortan sintéticos y dañan cable de acero."
    ]
  },
  {
    "title": "Suavizadores y protección de eslinga",
    "summary": "Práctica en campo.",
    "bullets": [
      "Almohadillas de esquina, almohadillas magnéticas, manguera, madera — apropiado para la obra.",
      "La protección debe permanecer en su lugar durante todo el izaje.",
      "Inspeccionar la protección por daños; reemplazar si está comprimida o cortada."
    ]
  },
  {
    "title": "Superficie de carga frente a superficie de eslinga",
    "summary": "Ambas importan.",
    "bullets": [
      "Superficies rugosas de carga desgastan eslingas durante apoyo e izaje.",
      "Rebaba, soldadura y bordes de brida son puntos de falla comunes.",
      "Cuando haya duda, agregar protección y reducir la velocidad del izaje."
    ]
  },
  {
    "title": "Exposición a temperatura y químicos",
    "summary": "Límites de eslingas sintéticas.",
    "bullets": [
      "OHSR 15.53–15.54 — calor y químicos dañan eslingas de cinta.",
      "Mantener eslingas alejadas de trabajo en caliente salvo que estén clasificadas.",
      "Aislar e inspeccionar tras la exposición."
    ]
  },
  {
    "title": "OHSR 15.31 — Inspeccionar antes del uso",
    "summary": "Cada turno, cada pieza.",
    "bullets": [
      "Inspeccionar eslingas y accesorios antes de cada uso.",
      "Visual y funcional — etiquetas, pasadores, seguros, deformación.",
      "Sin inspección = sin izaje."
    ]
  },
  {
    "title": "Pasos de inspección previa al uso",
    "summary": "Rutina consistente.",
    "bullets": [
      "Lo suficientemente limpio para ver daños; verificar etiquetas y WLL.",
      "Buscar desgaste, grietas, dobleces, corrosión, alambres rotos, cortes.",
      "Verificar pasadores asegurados, seguro de gancho, sin modificaciones no autorizadas."
    ]
  },
  {
    "title": "Cable de acero — regla 3-6",
    "summary": "OHSR 15.25 cable en movimiento.",
    "bullets": [
      "Retirar: 6+ alambres rotos aleatorios en un paso, O 3+ en un torón en un paso.",
      "Estacionario/guyline: 3+ alambres rotos entre conexiones.",
      "También rechazar torcedura, jaula de pájaro, calor/arco, pérdida de diámetro."
    ]
  },
  {
    "title": "Cable resistente a la rotación",
    "summary": "Criterios más estrictos.",
    "bullets": [
      "OHSR 15.26: 2 alambres rotos en 6 diámetros, o 4 en 30 diámetros.",
      "Más todos los criterios 15.25.",
      "Común en muchas líneas de carga de grúas móviles."
    ]
  },
  {
    "title": "Rechazo de gancho — 15.29",
    "summary": "Cuándo los ganchos salen de servicio.",
    "bullets": [
      "Grietas, deformación, apertura excesiva de garganta, seguro dañado.",
      "Desgaste en puntos de apoyo y orificios de pasador.",
      "Etiquetar — no devolver sin revisión calificada."
    ]
  },
  {
    "title": "Rechazo de eslinga de cable de acero",
    "summary": "OHSR 15.43.",
    "bullets": [
      "Torceduras, aplastamiento, jaula de pájaro, alambres rotos, daño por calor.",
      "Accesorios sueltos o deformados.",
      "En caso de duda, etiquetar."
    ]
  },
  {
    "title": "Rechazo de eslinga de cadena",
    "summary": "OHSR 15.48–15.49.",
    "bullets": [
      "Elongación, grietas, muescas, eslabones torcidos o doblados.",
      "Medir desgaste en puntos de apoyo — comparar con límites.",
      "La inspección periódica complementa la inspección diaria previa al uso."
    ]
  },
  {
    "title": "Eslingas sintéticas de cinta y redondas",
    "summary": "OHSR 15.54.",
    "bullets": [
      "Cortes, quemaduras, daño por UV, puntadas rotas, ataque químico.",
      "Etiqueta WLL faltante o ilegible — retirar del servicio.",
      "No usar eslingas de nailon/cinta en bordes afilados sin protección."
    ]
  },
  {
    "title": "Etiquetar y aislar",
    "summary": "Evitar reutilización.",
    "bullets": [
      "Retirar del área de grúa; destruir o guardar bajo llave si está condenado.",
      "Reportar al supervisor; registrar en el registro de grúa/aparejo.",
      "Reinspeccionar tras carga de choque, sobrecarga o contacto con arco."
    ]
  },
  {
    "title": "Pasadores de grillete y ganchos abiertos",
    "summary": "OHSR 15.10–15.12.",
    "bullets": [
      "Los ganchos necesitan seguro salvo exención; pasadores asegurados contra rotación.",
      "Nunca reemplazar pasador de grillete con un perno.",
      "Extremo muerto de cuña asegurado (15.9)."
    ]
  },
  {
    "title": "Almacenamiento — 15.37",
    "summary": "Proteger entre usos.",
    "bullets": [
      "Fuera del suelo, seco, alejado de químicos y UV.",
      "Sin torceduras en cable de acero; sin aplastar sintéticos.",
      "La cultura de inspección vence la prisa."
    ]
  },
  {
    "title": "Por qué importan las matemáticas de aparejo",
    "summary": "Las fuerzas aumentan más rápido que la intuición.",
    "bullets": [
      "Ángulos bajos de eslinga, CdG desplazado y cargas dinámicas sobrecargan el equipo.",
      "Las matemáticas apoyan el cumplimiento OHSR — no es papeleo opcional.",
      "Lecciones: Módulo 6, Apéndice B."
    ]
  },
  {
    "title": "Regulatorio: determinar el peso de la carga",
    "summary": "OHSR 15.33.",
    "bullets": [
      "El aparejador debe conocer el peso de la carga y comunicarlo al operador.",
      "Adivinar no es cumplimiento.",
      "Usar planos, básculas, tablas o ingeniería."
    ]
  },
  {
    "title": "Referencia de tablas de peso",
    "summary": "Abrir tablas durante la clase.",
    "bullets": [
      "Densidad de material, placa, viga lb/pie, madera, contrachapado/OSB, tubería, conversiones, ángulos de eslinga.",
      "Tablas desplegables en /slides/charts — usar en teléfono o proyector.",
      "Los datos del fabricante superan las estimaciones de campo."
    ]
  },
  {
    "title": "Método volumen × densidad",
    "summary": "Estimaciones de bloque y placa.",
    "bullets": [
      "Volumen (pies³) × densidad (lb/pies³) = peso (lb).",
      "Acero ≈ 490 lb/pies³; concreto ≈ 150 lb/pies³.",
      "Agregar aparejo, calzos y agua absorbida."
    ]
  },
  {
    "title": "Ejemplo de placa de acero",
    "summary": "Cálculo didáctico.",
    "bullets": [
      "Placa 4 pies × 8 pies × ½ pulg de espesor.",
      "Área 32 pies² × 20,4 lb/pies² (½ pulg) ≈ 653 lb.",
      "Redondear hacia arriba; agregar hardware e incertidumbre."
    ]
  },
  {
    "title": "Ejemplo de viga de ala ancha",
    "summary": "lb/pie × longitud.",
    "bullets": [
      "W14×30 a 40 pies de largo ≈ 30 × 40 = 1,200 lb solo de acero.",
      "Agregar rigidizadores, pernos, pintura y dispositivo de izaje.",
      "Usar marcado de viga o manual de acero."
    ]
  },
  {
    "title": "Ejemplo de peso de tubería",
    "summary": "Tablas de tubería nominal.",
    "bullets": [
      "Consultar lb/pie para tamaño nominal y schedule.",
      "Peso = lb/pie × longitud en pies.",
      "Tabla: /slides/charts?chart=pipe"
    ]
  },
  {
    "title": "Ejemplo de volumen de concreto",
    "summary": "Yardas y toneladas.",
    "bullets": [
      "Volumen en yd³ × ~4,000 lb/yd³ (orden de magnitud de concreto húmedo).",
      "O pies³ × 150 lb/pies³ para estimar.",
      "Siempre confirmar con ticket de vaciado o ingeniería."
    ]
  },
  {
    "title": "Conversiones de unidades",
    "summary": "Imperial ↔ métrico.",
    "bullets": [
      "1 kg ≈ 2,205 lb · 1 tonelada ≈ 2,205 lb.",
      "1 pie = 0,305 m — mantener unidades consistentes en un cálculo.",
      "Tabla: /slides/charts?chart=conversions"
    ]
  },
  {
    "title": "Incluir aparejo en el peso total suspendido",
    "summary": "Lo que ve la grúa.",
    "bullets": [
      "Carga + dispositivo bajo el gancho + bloque + peso de aparejo (según aplique).",
      "OHSR 15.60 — el dispositivo puede ser parte de la carga izada.",
      "Comunicar el total al operador."
    ]
  },
  {
    "title": "Introducción a la tensión de eslinga",
    "summary": "El ángulo amplifica la fuerza.",
    "bullets": [
      "Cada pierna lleva más de la mitad de la carga cuando el ángulo disminuye.",
      "El modelo simétrico de dos piernas es la base didáctica.",
      "Piernas desiguales se cubren más adelante en este bloque."
    ]
  },
  {
    "title": "Fórmula de tensión de eslinga",
    "summary": "Enganche simétrico de dos piernas.",
    "bullets": [
      "T = W ÷ (2 sin θ)",
      "T = tensión por pierna · W = peso de carga · θ = ángulo desde la horizontal",
      "Hacer coincidir la calculadora con el procedimiento (modo DEG)."
    ]
  },
  {
    "title": "Calculadora: DEG y SIN",
    "summary": "Habilidad de campo.",
    "bullets": [
      "Configurar calculadora en DEG (grados), no RAD.",
      "SIN(45) ≈ 0,707 · SIN(60) ≈ 0,866 · SIN(30) = 0,5",
      "Practicar en el teléfono antes del izaje de prueba."
    ]
  },
  {
    "title": "Ángulo de pierna frente a ángulo incluido",
    "summary": "Leer la tarjeta de aparejo.",
    "bullets": [
      "θ en T = W/(2 sin θ) es el ángulo de cada pierna desde la horizontal.",
      "Ángulo incluido entre piernas = 2θ solo en brida simétrica.",
      "Ángulo de pierna 30° = incluido 60° — verificar qué convención usa su obra."
    ]
  },
  {
    "title": "90° desde la horizontal",
    "summary": "Multiplicador × 1,0",
    "bullets": [
      "Cada pierna lleva W/2 en el modelo simétrico de brida vertical.",
      "Ángulo práctico más inclinado — menor tensión por pierna.",
      "Aún verificar WLL de cada componente."
    ]
  },
  {
    "title": "60° desde la horizontal",
    "summary": "Multiplicador × 1,155",
    "bullets": [
      "T ≈ W × 1,155 ÷ 2 por pierna en multiplicador abreviado.",
      "sin 60° ≈ 0,866 → T = W/(2×0,866).",
      "Ángulo de aparejo común — aún aceptable con equipo clasificado."
    ]
  },
  {
    "title": "45° desde la horizontal",
    "summary": "Multiplicador × 1,414",
    "bullets": [
      "sin 45° ≈ 0,707 → T = W/(2×0,707).",
      "15 % más de tensión que vertical según tabla de multiplicadores.",
      "Vigilar compresión horizontal sobre la carga."
    ]
  },
  {
    "title": "30° desde la horizontal",
    "summary": "Multiplicador × 2,0",
    "bullets": [
      "sin 30° = 0,5 → T = W — ¡cada pierna iguala el peso total de la carga!",
      "Evitar salvo diseño por ingeniería; fuerza horizontal extrema.",
      "BCCSA: seleccionar componentes correctamente clasificados."
    ]
  },
  {
    "title": "Ejemplo resuelto: 10,000 lb @ 45°",
    "summary": "Práctica con calculadora.",
    "bullets": [
      "T = 10,000 ÷ (2 × sin 45°) ≈ 10,000 ÷ 1,414 ≈ 7,070 lb por pierna.",
      "Cada eslinga y grillete debe exceder 7,070 lb de WLL en este enganche.",
      "Redondear hacia arriba; agregar factor dinámico según política de obra."
    ]
  },
  {
    "title": "Ejemplo resuelto: 10,000 lb @ 30°",
    "summary": "Por qué fallan los ángulos bajos.",
    "bullets": [
      "T = 10,000 ÷ (2 × 0,5) = 10,000 lb por pierna.",
      "Una eslinga de 5 toneladas no es suficiente a 30° para una carga de 5 toneladas.",
      "Reaparejar más inclinado o usar barra separadora."
    ]
  },
  {
    "title": "Geometría triangular en aparejo",
    "summary": "Visualizar fuerzas.",
    "bullets": [
      "Pierna de eslinga, horizontal y vertical forman un triángulo de fuerzas.",
      "Un ángulo poco inclinado alarga el vector de pierna de eslinga.",
      "Usar tarjetas de aparejo de la obra para coincidir con la convención de ángulo."
    ]
  },
  {
    "title": "Compresión horizontal",
    "summary": "Efecto secundario de ángulo bajo.",
    "bullets": [
      "Las piernas empujan hacia adentro sobre la carga — pueden aplastar o deslizar.",
      "Usar barra separadora para aumentar el ángulo incluido.",
      "Calzos y resistencia de la carga importan."
    ]
  },
  {
    "title": "Fundamentos del centro de gravedad",
    "summary": "Punto de equilibrio.",
    "bullets": [
      "El CdG es donde la carga se equilibra en todos los ejes.",
      "El punto de izaje debe estar sobre el CdG para estabilidad.",
      "La carga se inclina hacia el lado pesado cuando el CdG está desplazado."
    ]
  },
  {
    "title": "Centro de gravedad desplazado",
    "summary": "Longitudes de pierna desiguales.",
    "bullets": [
      "Acortar eslinga en el lado pesado o usar equipo ajustable.",
      "La carga puede nivelarse cuando el CdG está bajo el gancho — verificar antes del izaje completo.",
      "Línea de guía para controlar rotación."
    ]
  },
  {
    "title": "CdG complejo / multiparte",
    "summary": "Ensamblajes y plataformas.",
    "bullets": [
      "Encontrar CdG según plano o cálculo; probar con izaje de prueba bajo.",
      "Maquinaria, recipientes y plataformas a menudo ocultan masa interna.",
      "Puntos de izaje diseñados por ingeniería cuando el CdG es incierto."
    ]
  },
  {
    "title": "Carga asimétrica de dos piernas",
    "summary": "Participación desigual.",
    "bullets": [
      "Piernas con ángulos o longitudes diferentes no comparten 50/50.",
      "El lado pesado y la geometría determinan la carga de cada pierna.",
      "Usar cálculo de ingeniería o suposiciones conservadoras."
    ]
  },
  {
    "title": "Brida de tres piernas",
    "summary": "No asumir 33 % cada una.",
    "bullets": [
      "Una pierna puede quedar floja; dos piernas llevan la mayor parte de la carga.",
      "Diseñar para reparto desigual salvo diseño por ingeniería.",
      "Izajes de cuatro puntos requieren precaución similar."
    ]
  },
  {
    "title": "Capacidad de enganche en estrangulamiento",
    "summary": "Reducción de clasificación.",
    "bullets": [
      "El estrangulamiento reduce el WLL efectivo — seguir tabla del fabricante.",
      "El ángulo de estrangulamiento en el punto de estrangulamiento afecta la clasificación.",
      "Nunca estrangular en bordes afilados sin protección."
    ]
  },
  {
    "title": "Capacidad de enganche en canasta",
    "summary": "Clasificación aumentada — con límites.",
    "bullets": [
      "La canasta puede aumentar el WLL si ambas piernas comparten verticalmente.",
      "El ángulo incluido y el equilibrio afectan la capacidad real.",
      "Aún verificar tensión por ángulo en cada pierna."
    ]
  },
  {
    "title": "Conocimiento de Tabla 15-3",
    "summary": "Reducciones regulatorias por ángulo.",
    "bullets": [
      "OHSR Tabla 15-3 — reducciones de WLL para eslingas en ángulo.",
      "Usar con tablas del fabricante.",
      "Espejo de tabla: /slides/charts?chart=sling-angle"
    ]
  },
  {
    "title": "Carga dinámica y de choque",
    "summary": "Las matemáticas estáticas son el mínimo.",
    "bullets": [
      "Balanceo, enganche y parada brusca multiplican fuerzas.",
      "Iniciar izajes suavemente; controlar líneas de guía.",
      "La política de obra puede requerir margen de capacidad adicional."
    ]
  },
  {
    "title": "Conocimiento del momento de carga",
    "summary": "Efecto del radio de grúa.",
    "bullets": [
      "Momento = fuerza × distancia horizontal.",
      "Conciencia del aparejador: mayor radio reduce capacidad de grúa.",
      "Coordinar con el operador sobre radio y trayectoria."
    ]
  },
  {
    "title": "Comunicar el peso al operador",
    "summary": "Cerrar el ciclo.",
    "bullets": [
      "Indicar peso calculado, peso de aparejo y notas de CdG.",
      "El operador confirma contra tabla y plan.",
      "Detener si los números no coinciden."
    ]
  },
  {
    "title": "Cuándo escalar a ingeniería",
    "summary": "Más allá de las matemáticas de campo.",
    "bullets": [
      "CdG desconocido, multigrúa, alto valor o izajes con tolerancia ajustada.",
      "Plan de izaje sellado por ingeniero y diseño de aparejo.",
      "Disparadores de izaje crítico del Módulo 15."
    ]
  },
  {
    "title": "Práctica: elegir la eslinga",
    "summary": "Ejercicio de clase.",
    "bullets": [
      "Carga 8,000 lb, brida de dos piernas a 45° desde la horizontal.",
      "T ≈ 8,000 ÷ 1,414 ≈ 5,657 lb por pierna — se necesita WLL de eslinga por encima de eso.",
      "Agregar margen; verificar grilletes y ganchos también."
    ]
  },
  {
    "title": "Repaso del bloque de matemáticas",
    "summary": "Antes de bajo el gancho.",
    "bullets": [
      "Determinar peso · convertir unidades · tensión de eslinga · CdG · tipo de enganche.",
      "Tablas en /slides/charts — mantener abiertas en segunda pantalla.",
      "Lectura: Módulo 6 + Apéndice B."
    ]
  },
  {
    "title": "Resumen OHSR 15.57–15.60",
    "summary": "Dispositivos de izaje diseñados.",
    "bullets": [
      "Las normas aplican a barras separadoras, vigas, pinzas, imanes, etc.",
      "WLL marcado; el peso del dispositivo puede contar en la carga (15.60).",
      "No exceder el WLL del dispositivo."
    ]
  },
  {
    "title": "Barras separadoras",
    "summary": "Aumentar el ángulo incluido.",
    "bullets": [
      "Reducir tensión de pierna en cargas anchas.",
      "La barra recibe compresión; eslingas a la barra y al gancho.",
      "Inspeccionar orejetas, pasadores y soldaduras; verificar WLL."
    ]
  },
  {
    "title": "Vigas de izaje frente a barras separadoras",
    "summary": "Carga diferente.",
    "bullets": [
      "La viga de izaje se flexiona — el aparejo superior lleva la flexión.",
      "La barra separadora es principalmente compresión.",
      "Usar el dispositivo correcto para la carga y los puntos de izaje."
    ]
  },
  {
    "title": "WLL y peso del dispositivo",
    "summary": "OHSR 15.58.",
    "bullets": [
      "Incluir peso de barra/viga en la carga de grúa cuando se requiera.",
      "Las marcas deben coincidir con la configuración en uso.",
      "Sello de ingeniero o ingeniería para izajes no estándar."
    ]
  },
  {
    "title": "Pinzas de placa e imanes",
    "summary": "Accesorios especializados.",
    "bullets": [
      "Clasificados para espesor y orientación de placa.",
      "Tirón de prueba donde el procedimiento lo requiera.",
      "Nunca usar pinzas dañadas o sin marca."
    ]
  },
  {
    "title": "Inspección de dispositivos BTH",
    "summary": "Antes de cada uso.",
    "bullets": [
      "Soldaduras, orejetas, pasadores, almohadillas y etiquetas WLL.",
      "Retirar si hay grietas, dobleces o historial de sobrecarga.",
      "Almacenamiento para evitar daños."
    ]
  },
  {
    "title": "Puntos de izaje y soldadura",
    "summary": "OHSR 15.28.",
    "bullets": [
      "Puntos de izaje soldados en campo requieren aprobación de ingeniero.",
      "La cadena de aleación no debe soldarse.",
      "Usar orejetas diseñadas por ingeniería cuando sea posible."
    ]
  },
  {
    "title": "Elementos de planificación previa al izaje",
    "summary": "Antes de enganchar.",
    "bullets": [
      "Peso, CdG, trayectoria, zona de apoyo, clima, personal, aparejo, configuración de grúa.",
      "FLHA y revisión de charla de seguridad.",
      "Lección: Módulo 15."
    ]
  },
  {
    "title": "Peligros y controles",
    "summary": "Específico de la obra.",
    "bullets": [
      "Líneas eléctricas, suelo, giro, puntos de pellizco, interfaz con el público.",
      "Líneas de guía, zonas de exclusión, observadores.",
      "Detener trabajo cuando cambien las condiciones."
    ]
  },
  {
    "title": "Trayectoria de izaje y zona de apoyo",
    "summary": "Hacia dónde va.",
    "bullets": [
      "Ruta despejada de recogida a colocación; sin personal bajo la carga.",
      "Área de apoyo preparada; calzos listos.",
      "Rutas de escape para aparejadores."
    ]
  },
  {
    "title": "Plan de comunicación",
    "summary": "Señales OHSR 15.20.",
    "bullets": [
      "Señales manuales según Figura 15-1 cuando se usen.",
      "Una persona de señales con autoridad cuando se requiera.",
      "Radio: frecuencia dedicada para torre (OHSR 14.49)."
    ]
  },
  {
    "title": "Roles: aparejador, operador, señalizador",
    "summary": "Coordinación del equipo.",
    "bullets": [
      "Aparejador: integridad del aparejo y control de carga en el gancho.",
      "Operador: funciones de grúa según señales.",
      "Señalizador: vista clara y señales estándar."
    ]
  },
  {
    "title": "Documentación",
    "summary": "Demostrar el plan.",
    "bullets": [
      "Boceto de plan de izaje, cálculo de peso, lista de equipo, firmas.",
      "Los izajes críticos requieren plan diseñado por ingeniería en archivo.",
      "Informar al equipo antes del primer izaje."
    ]
  },
  {
    "title": "Izajes rutinarios frente a planificados",
    "summary": "Escalar la documentación.",
    "bullets": [
      "Rutinario: verificación mental + FLHA puede bastar según el empleador.",
      "No rutinario: plan escrito como mínimo.",
      "Cuando se cumplan disparadores → proceso de izaje crítico."
    ]
  },
  {
    "title": "Disparadores de izaje crítico",
    "summary": "Cuándo se requiere rigor adicional.",
    "bullets": [
      "Alta consecuencia, peso/forma inusual, multigrúa, tolerancia ajustada.",
      "Sobre el público, planta en operación o exclusión diseñada de lo rutinario.",
      "La política del empleador/obra puede agregar disparadores."
    ]
  },
  {
    "title": "Plan de izaje diseñado por ingeniería",
    "summary": "Participación de ingeniero.",
    "bullets": [
      "Planos sellados, disposición de aparejo, configuración de grúa, secuencia.",
      "El director de izaje coordina la ejecución.",
      "Sin improvisación en izajes críticos."
    ]
  },
  {
    "title": "Conocimiento de multigrúa",
    "summary": "Introducción Módulo 11.",
    "bullets": [
      "Reparto de carga, sincronización, viento, comunicación.",
      "Siempre diseñado por ingeniería — no aparejado en campo.",
      "Lectura: Módulo 11 izajes en tándem."
    ]
  },
  {
    "title": "Repaso de competencia",
    "summary": "Lo que debe llevar a la obra.",
    "bullets": [
      "Regulaciones · WLL/FD · inspección · matemáticas · BTH · planificación.",
      "Tablas: /slides/charts · Profundidad: /lessons · Práctica: /practice-test.",
      "Apoyar antes de desenganchar · determinar peso · proteger bordes."
    ]
  },
  {
    "title": "Preparación para el campo",
    "summary": "Próximos pasos.",
    "bullets": [
      "Practicar problemas de eslinga con calculadora diariamente.",
      "Inspeccionar previo al uso cada turno.",
      "Certificación presencial: evaluación escrita + práctica."
    ]
  }
];
