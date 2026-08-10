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
  "taglines": "Cuerdas de guía",
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
    "title": "Criterios de retiro del aparejo",
    "summary": "",
    "focusKicker": "Lección 1",
    "focusCallout": "Nada dura para siempre — algunas cosas ni siquiera empiezan seguras.",
    "sections": [
      {
        "heading": "Criterios de retiro",
        "items": [
          "Aparejo desgastado, dañado o alterado — retirar del servicio",
          "Alambres rotos, ganchos agrietados, etiquetas faltantes, accesorios defectuosos"
        ]
      },
      {
        "heading": "Antes del izaje",
        "items": [
          {
            "label": "OHSR 15.31 — inspeccionar antes de cada uso"
          },
          {
            "label": "Si hay duda — etiquetar y no usar"
          },
          "Hardware sin marca o improvisado nunca empieza seguro"
        ]
      }
    ]
  },
  {
    "title": "Lo que todo el aparejo debe tener",
    "summary": "",
    "focusKicker": "Lección 1",
    "focusCallout": "Si no puedes leerlo, no puedes clasificarlo.",
    "source": "WorkSafeBC OHSR 15.5",
    "sections": [
      {
        "heading": "Todo accesorio debe mostrar",
        "items": [
          "Nombre del fabricante o marca de identificación",
          "Identificador del producto — tamaño, grado o número de parte",
          {
            "label": "Límite de carga de trabajo (WLL) — o información suficiente para consultarlo"
          }
        ]
      },
      {
        "heading": "OHSR y normas",
        "items": [
          {
            "label": "OHSR 15.5 — ID del fabricante, ID del producto y WLL"
          },
          {
            "label": "ASME B30.26 — marcas de identificación en accesorios de aparejo"
          },
          "B30.9 eslingas — etiquetas de capacidad; catálogo en sitio si el WLL no está marcado",
          {
            "label": "Equipo sin marca — calificarlo o retirar del servicio"
          }
        ]
      }
    ]
  },
  {
    "title": "Criterios de retiro",
    "summary": "Retire el gancho del servicio de inmediato si se encuentra cualquiera de lo siguiente:",
    "focusKicker": "Ganchos",
    "focusCallout": "Si hay duda, etiquételo y retírelo. Nunca intente enderezar, calentar, soldar o reparar un gancho salvo que el fabricante y las normas aplicables lo permitan expresamente.",
    "source": "ASME B30.10 — Ganchos (edición vigente)",
    "sections": [
      {
        "heading": "Retirar de inmediato",
        "items": [
          "Grietas, fracturas o reparaciones de soldadura no autorizadas",
          "Apertura de garganta aumentada más del 5% (máx. 6 mm / ¼ in. salvo que el fabricante indique otra cosa)",
          "Más del 10% de desgaste de la sección transversal original",
          "Cualquier curvatura o torsión visible respecto al plano original del gancho",
          "Corrosión excesiva, picaduras u otro daño que afecte la resistencia",
          {
            "label": "Seguro de seguridad dañado, faltante o que no funciona (cuando se requiera)"
          },
          {
            "label": "Marcas del fabricante o WLL faltantes o ilegibles"
          },
          "Cualquier condición que el fabricante identifique como motivo de retiro"
        ]
      }
    ]
  },
  {
    "title": "Criterios de retiro",
    "summary": "Retire la eslinga de cadena del servicio de inmediato si se encuentra cualquiera de lo siguiente:",
    "focusKicker": "Cadena de izaje",
    "focusCallout": "Nunca suelde, caliente, enderece ni repare cadena de aleación para izaje salvo que lo realice el fabricante o un taller de reparación calificado autorizado por el fabricante.",
    "source": "ASME B30.9 — Eslingas · ASME B30.26 — Accesorios de aparejo · criterios de inspección del fabricante",
    "sections": [
      {
        "heading": "Retirar de inmediato",
        "items": [
          "Eslabones agrietados, rotos, doblados, torcidos o estirados",
          "Muescas, cortes o desgaste excesivo en cualquier eslabón",
          "Desgaste superior al 10% del diámetro original del eslabón",
          "Elongación o deformación más allá de los límites permitidos por el fabricante",
          "Evidencia de daño por calor — decoloración, salpicaduras de soldadura, arcos eléctricos o exposición a altas temperaturas",
          {
            "label": "Corrosión severa o picaduras que reduzcan la resistencia de la cadena"
          },
          {
            "label": "Etiqueta de identificación dañada o faltante — grado, tamaño, WLL o número de serie"
          },
          "Ganchos, eslabones maestros, eslabones de acoplamiento u otros componentes de la eslinga dañados",
          "Cualquier condición que el fabricante identifique como motivo de retiro"
        ]
      }
    ]
  },
  {
    "title": "Grado mínimo de cadena",
    "summary": "Grado mínimo para izaje aéreo",
    "focusKicker": "Cadena de izaje",
    "focusCallout": "El grado 80 es el mínimo de cadena de aleación para izaje aéreo. La cadena de transporte grado 70 es para sujeción de carga, no para izaje.",
    "source": "ASME B30.9 — Eslingas y requisitos del fabricante",
    "sections": [
      {
        "heading": "Aceptable para izaje",
        "items": [
          "Grado 80 o superior",
          "Cadena de aleación grado 80",
          "Cadena de aleación grado 100",
          "Cadena de aleación grado 120",
          "Cualquier cadena de aleación de grado superior específicamente clasificada y marcada para izaje aéreo"
        ]
      },
      {
        "heading": "No aceptable para izaje aéreo",
        "items": [
          "Cadena grado 30 proof coil",
          "Cadena grado 43 high test",
          "Cadena grado 70 de transporte",
          {
            "label": "Cualquier cadena sin la marca del grado y WLL adecuados"
          }
        ]
      }
    ]
  },
  {
    "title": "Etiqueta de identificación requerida",
    "summary":
      "Según ASME B30.9 y los requisitos habituales del fabricante, una eslinga bridle de cadena debe tener una etiqueta de identificación permanente y duradera.",
    "focusKicker": "Eslinga bridle de cadena",
    "focusCallout":
      "Este es uno de los pocos tipos de eslinga en los que el alcance (longitud) y el número de patas se exigen específicamente en la identificación, porque afectan directamente la capacidad nominal de la eslinga.",
    "source": "ASME B30.9 — Eslingas",
    "sections": [
      {
        "heading": "La etiqueta debe mostrar",
        "items": [
          "Nombre o marca del fabricante",
          "Código o número de stock del fabricante",
          "Grado de la cadena (p. ej., Grado 80, 100 o 120)",
          "Tamaño de la cadena (diámetro nominal)",
          "Número de patas de la eslinga",
          "Alcance (longitud)",
          {
            "label": "Límite de carga de trabajo (WLL) para el(los) enganche(s) y ángulo(s) de eslinga aplicables"
          }
        ]
      },
      {
        "heading": "Retirar del servicio si",
        "items": [
          {
            "label": "La etiqueta falta o es ilegible"
          }
        ]
      }
    ]
  },
  {
    "title": "Capacidad de eslingas bridle",
    "summary": "",
    "focusKicker": "Eslingas bridle",
    "focusCallout":
      "Nunca asuma que las cuatro patas llevan la carga por igual. Calcule siempre el izaje con el ángulo de eslinga aplicable y la capacidad nominal de un bridle de tres patas.",
    "source": "Reglamento de SST de WorkSafeBC 15.33; ASME B30.9 — Eslingas",
    "sections": [
      {
        "heading": "Capacidad",
        "items": [
          "Las eslingas bridle pueden tener 2, 3 o 4 patas",
          {
            "label": "La carga no siempre se reparte por igual entre todas las patas"
          },
          "El ángulo de la eslinga afecta de forma significativa la tensión en cada pata y la capacidad total",
          {
            "label": "Para cálculos de WLL, un bridle de 4 patas se clasifica como uno de 3 patas"
          },
          "La WLL del conjunto de eslinga está limitada por el componente de menor capacidad",
          "Cada pata, accesorio y eslabón maestro debe tener capacidad adecuada para el izaje"
        ]
      }
    ]
  },
  {
    "title": "Cálculos básicos de carga",
    "summary":
      "Calcule siempre la distribución de carga, el multiplicador de tensión y la tensión real de la pata — luego verifique que la WLL de la pata supere la tensión calculada.",
    "focusKicker": "Matemáticas de eslinga bridle",
    "focusCallout":
      "A medida que disminuye el ángulo de la eslinga, aumenta la tensión en la pata. Un ángulo menor = mayor derating y fuerzas más altas en cada pata.",
    "sections": [
      {
        "heading": "1. Distribución de carga",
        "items": [
          "Carga por pata = Carga total ÷ Número de patas cargadas",
          "Ejemplo: 6,000 lb ÷ 2 = 3,000 lb por pata (antes de considerar el ángulo de eslinga)"
        ]
      },
      {
        "heading": "2. Multiplicador de tensión (derating)",
        "items": [
          "Tensión de pata = Carga por pata × Multiplicador de tensión",
          "Multiplicador de tensión = L ÷ H",
          "o Multiplicador de tensión = 1 ÷ sin(θ)",
          "L = Longitud de eslinga · H = Altura vertical · θ = Ángulo de eslinga (desde la horizontal)"
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          "Distribución de carga",
          "Multiplicador de tensión",
          "Tensión real de la pata",
          "Verificar que la WLL de la pata supere la tensión calculada"
        ]
      }
    ]
  },
  {
    "title": "Ángulos comunes de eslinga",
    "summary": "Tensión de pata = (Carga ÷ Número de patas cargadas) × Multiplicador de tensión",
    "focusKicker": "Multiplicadores de tensión",
    "focusCallout": "Ángulo menor = mayor tensión en la pata.",
    "source": "WorkSafeBC OHSR Tabla 15-3 · ASME B30.9 — Eslingas",
    "sections": [
      {
        "heading": "Tabla de ángulos",
        "items": ["90° · 1.00", "75° · 1.04", "60° · 1.15", "45° · 1.41", "30° · 2.00"]
      },
      {
        "heading": "Fundamento",
        "items": [
          {
            "label":
              "Regulación BC — Usa derating según el ángulo desde la vertical (Tabla 15-3)"
          },
          {
            "label":
              "Buena práctica de la industria (ASME B30.9) — No use ángulos de eslinga menores de 30° desde la horizontal salvo aprobación del fabricante o de una persona calificada"
          }
        ]
      }
    ]
  },
  {
    "title": "Verificación con calculadora — tensión",
    "summary":
      "Cuatro problemas rápidos. Use la tabla de multiplicadores de tensión. Resuelva cada uno antes de revelar las respuestas.",
    "focusKicker": "Matemáticas de eslinga bridle · Cuestionario rápido",
    "quizQuestions": [
      {
        "prompt": "¿Cuál es el multiplicador de tensión para un ángulo de eslinga de 45° (desde la horizontal)?",
        "explanation": "A 45° desde la horizontal, el multiplicador de tensión es 1,41 (L ÷ H o 1 ÷ sin 45°).",
        "options": [
          { "text": "1.15" },
          { "text": "1.41" },
          { "text": "2.00" },
          { "text": "1.00" }
        ]
      },
      {
        "prompt":
          "Una carga de 6,000 lb está en un bridle de 2 patas. ¿Cuál es la distribución de carga por pata antes de considerar el ángulo de eslinga?",
        "explanation": "Carga por pata = Carga total ÷ Número de patas cargadas → 6,000 ÷ 2 = 3,000 lb.",
        "options": [
          { "text": "6,000 lb" },
          { "text": "4,000 lb" },
          { "text": "3,000 lb" },
          { "text": "1,500 lb" }
        ]
      },
      {
        "prompt":
          "Carga 6,000 lb · bridle de 2 patas · ángulo de eslinga 45°. ¿Cuál es la tensión en cada pata de eslinga?",
        "explanation": "Tensión de pata = (6,000 ÷ 2) × 1,41 = 3,000 × 1,41 = 4,230 lb.",
        "options": [
          { "text": "3,000 lb" },
          { "text": "4,230 lb" },
          { "text": "6,000 lb" },
          { "text": "8,460 lb" }
        ]
      },
      {
        "prompt":
          "Carga 8,000 lb · bridle de 2 patas · ángulo de eslinga 30°. ¿Cuál es la tensión en cada pata de eslinga?",
        "explanation":
          "Tensión de pata = (8,000 ÷ 2) × 2,00 = 4,000 × 2,00 = 8,000 lb — a 30° cada pata lleva el peso completo de la carga.",
        "options": [
          { "text": "4,000 lb" },
          { "text": "5,640 lb" },
          { "text": "8,000 lb" },
          { "text": "2,000 lb" }
        ]
      }
    ]
  },
  {
    "title": "Inspección y criterios de retiro",
    "summary": "Retire una eslinga de cable de acero del servicio si se encuentra cualquiera de lo siguiente:",
    "focusKicker": "Eslingas de cable de acero",
    "focusCallout": "En caso de duda, etiquétela y retírela.",
    "source": "ASME B30.9 — Eslingas; WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Retire del servicio",
        "items": [
          {
            "label": "10 o más alambres rotos distribuidos al azar en un paso de cable, o"
          },
          {
            "label": "5 o más alambres rotos en un cordón dentro de un paso de cable"
          },
          "Torceduras, jaula de pájaro, aplastamiento o protrusión del alma",
          "Daño por calor, golpes de arco o salpicaduras de soldadura",
          {
            "label": "Corrosión severa o picaduras"
          },
          "Accesorios extremos agrietados, deformados, flojos o dañados",
          "Cualquier reducción del diámetro del cable más allá de los límites del fabricante",
          {
            "label": "Etiqueta de identificación faltante o ilegible"
          }
        ]
      },
      {
        "heading": "Etiqueta de identificación de la eslinga",
        "items": [
          "Nombre o marca del fabricante",
          "Código o número de stock del fabricante",
          {
            "label": "Límite de carga de trabajo nominal (WLL) para el(los) enganche(s) aplicable(s)"
          },
          "Diámetro del cable",
          "Número de patas (si es de varias patas)",
          "Alcance (longitud) (conjuntos de varias patas)",
          "Etiqueta de identificación legible"
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          "Inspeccione antes de cada uso",
          {
            "label": "Nunca use una eslinga con etiqueta faltante o ilegible"
          },
          "Siga los criterios de retiro del fabricante cuando sean más restrictivos"
        ]
      }
    ]
  },
  {
    "title": "Criterios de retiro",
    "summary": "Retire del servicio si se encuentra cualquiera de lo siguiente:",
    "focusKicker": "Eslingas de cinta sintética",
    "focusCallout": "Sin etiqueta = Sin izaje.",
    "source":
      "ASME B30.9 — Eslingas · WSTDA WS-1 — Eslingas de cinta sintética · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Retire del servicio",
        "items": [
          {
            "label": "Etiqueta de identificación faltante o ilegible"
          },
          "Quemaduras por ácido o cáusticos",
          "Derretimiento, carbonización o daño por calor",
          {
            "label": "Agujeros, rasgaduras, cortes, perforaciones o enganches"
          },
          "Costuras rotas o desgastadas en empalmes que soportan carga",
          "Desgaste abrasivo excesivo",
          {
            "label": "Nudos en cualquier parte de la eslinga"
          },
          "Decoloración, fibras quebradizas o degradación por UV/ambiental que afecte la resistencia",
          "Accesorios dañados (doblados, agrietados, desgastados o corroídos)",
          "Se cumple cualquier criterio de retiro del fabricante"
        ]
      },
      {
        "heading": "Etiqueta de identificación requerida",
        "items": [
          "Nombre o marca del fabricante",
          "Código o número de stock del fabricante",
          {
            "label": "Límite de carga de trabajo nominal (WLL) para el(los) enganche(s) aplicable(s)"
          },
          "Material de la eslinga (nailon o poliéster)",
          "Número de patas (si es de varias patas)"
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          {
            "label": "Sin etiqueta = Sin izaje"
          },
          "Nunca ate nudos para acortar una eslinga",
          "Proteja las eslingas de cinta de bordes afilados con protección adecuada"
        ]
      }
    ]
  },
  {
    "title": "Criterios de retiro",
    "summary": "Retire del servicio si se encuentra cualquiera de lo siguiente:",
    "focusKicker": "Eslingas redondas sintéticas",
    "focusCallout": "Sin etiqueta = Sin izaje.",
    "source":
      "ASME B30.9 — Eslingas · WSTDA RS-1 — Eslingas redondas sintéticas · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Retire del servicio",
        "items": [
          {
            "label": "Etiqueta de identificación faltante o ilegible"
          },
          {
            "label": "Cortes, rasgaduras, perforaciones o enganches en la cubierta"
          },
          {
            "label": "Hilos del núcleo expuestos"
          },
          "Daño por calor, derretimiento, carbonización o salpicaduras de soldadura",
          "Quemaduras por ácido o cáusticos",
          "Degradación por UV, decoloración o fibras quebradizas",
          {
            "label": "Nudos en la eslinga"
          },
          "Accesorios dañados (si tiene)",
          "Se cumple cualquier criterio de retiro del fabricante"
        ]
      },
      {
        "heading": "Etiqueta de identificación requerida",
        "items": [
          "Nombre o marca del fabricante",
          "Código o número de stock del fabricante",
          {
            "label": "Límite de carga de trabajo nominal (WLL) para el(los) enganche(s) aplicable(s)"
          },
          "Material del núcleo (cuando lo exija el fabricante)",
          "Número de patas (si es de varias patas)"
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          {
            "label": "Sin etiqueta = Sin izaje"
          },
          {
            "label":
              "Si la cubierta protectora está dañada y el núcleo que soporta la carga está expuesto, retire la eslinga del servicio de inmediato"
          },
          "Proteja las eslingas redondas de bordes afilados con protección adecuada"
        ]
      }
    ]
  },
  {
    "title": "Capacidades nominales por enganche",
    "summary": "*Cuando la etiqueta del fabricante no especifique lo contrario.",
    "focusKicker": "Enganches de eslingas sintéticas",
    "focusCallout": "Use siempre el WLL indicado en la etiqueta de la eslinga.",
    "source":
      "ASME B30.9 — Sección 9-2 (Eslingas de cinta sintética) y Sección 9-6 (Eslingas redondas de poliéster)",
    "sections": [
      {
        "heading": "Capacidades por enganche",
        "items": [
          {
            "label": "Vertical · 100%"
          },
          "Choker – Eslinga de cinta · 75%",
          "Choker – Eslinga redonda de poliéster · 75%",
          {
            "label": "Canasta · 200% (patas verticales y carga equilibrada)"
          }
        ]
      },
      {
        "heading": "Importante",
        "items": [
          {
            "label": "Use siempre el WLL indicado en la etiqueta de la eslinga"
          },
          {
            "label":
              "Si la etiqueta no indica capacidad en choker: Eslingas de cinta sintética y eslingas redondas de poliéster = 75% de la capacidad vertical"
          },
          "Para ángulos de choker menores de 120°, se requiere derating adicional usando las tablas de ángulo de choker de ASME B30.9 o las instrucciones del fabricante"
        ]
      }
    ]
  },
  {
    "title": "Eslingas apretadas y pellizcadas",
    "summary":
      "No constriña la eslinga en el gancho o herraje — y nunca la anude o tuerza para cambiar la longitud.",
    "focusKicker": "Enganches de eslingas sintéticas",
    "focusCallout": "ASME B30.9 — no constriña, apriete ni pellizque la eslinga",
    "source": "ASME B30.9 — Eslingas · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Pellizcada / apretada",
        "items": [
          { "label": "Eslinga doblada apretada en un gancho, grillete u herraje" },
          { "label": "La carga no se reparte en todo el cuerpo de la cinta o redonda" },
          {
            "label":
              "ASME B30.9 — no constriña, apriete ni pellizque con la carga, el gancho o el herraje"
          },
          { "label": "Use herraje lo bastante ancho para la eslinga — o una conexión más ancha" }
        ]
      },
      {
        "heading": "Nudos y torsiones",
        "items": [
          { "label": "Nunca acorte ni alargue una eslinga anudándola o torciéndola" },
          { "label": "Evite torsiones y torceduras durante el izaje" },
          { "label": "Un nudo en una eslinga sintética — retírela del servicio" },
          { "label": "Si se ve apretada, anudada o torcida — deténgase y reapareje" }
        ]
      }
    ]
  },
  {
    "title": "Configuraciones comunes de enganche",
    "summary":
      "*Capacidad nominal típica cuando la etiqueta del fabricante no especifique lo contrario.",
    "focusKicker": "Enganches de eslingas sintéticas",
    "focusCallout": "Use siempre la etiqueta del fabricante para determinar el WLL.",
    "source":
      "ASME B30.9 — Eslingas · WSTDA WS-1 — Eslingas de cinta sintética · WSTDA RS-1 — Eslingas redondas sintéticas",
    "sections": [
      {
        "heading": "Configuraciones",
        "items": [
          {
            "label": "Enganche vertical · 100%"
          },
          {
            "label": "Enganche de canasta · 200%"
          },
          "Enganche de canasta (patas inclinadas) · Aplicar derating por ángulo de eslinga",
          "Enganche choker simple · 75% (cinta / redonda)",
          "Enganche choker de dos patas · 150% (cinta / redonda)",
          {
            "label": "Enganche de doble vuelta · Use el WLL del fabricante"
          }
        ]
      },
      {
        "heading": "Puntos clave",
        "items": [
          "Enganche vertical – Una pata de eslinga sostiene la carga",
          "Enganche de canasta – Hasta 200% de capacidad cuando ambas patas están verticales y la carga está equilibrada",
          "Enganche de canasta (patas inclinadas) – La capacidad disminuye al disminuir el ángulo de eslinga",
          "Enganche choker simple – Reduce la capacidad por la acción de estrangulamiento alrededor de la carga",
          {
            "label":
              "Enganche choker de dos patas – El doble de la capacidad del choker simple (150% cinta / redonda)"
          },
          {
            "label":
              "Enganche de doble vuelta – Aumenta el agarre; no aumenta la capacidad nominal salvo que el fabricante lo califique específicamente"
          }
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          {
            "label":
              "Use siempre la etiqueta del fabricante para determinar el límite de carga de trabajo (WLL)"
          },
          "Considere el tipo de enganche y el ángulo de eslinga al calcular la capacidad",
          "Proteja las eslingas sintéticas de bordes afilados"
        ]
      }
    ]
  },
  {
    "title": "Patas verticales vs inclinadas en canasta",
    "summary":
      "Las patas verticales pueden usar la capacidad completa de canasta. Las patas inclinadas requieren derating por ángulo de eslinga.",
    "focusKicker": "Enganches de eslingas sintéticas",
    "focusCallout": "Patas inclinadas ≠ 200%. Aplique derating por ángulo de eslinga antes de izar.",
    "source":
      "ASME B30.9 · WSTDA WS-1 / RS-1 · WorkSafeBC OHSR Parte 15 · BC Crane Safety",
    "sections": [
      {
        "heading": "1. Patas verticales",
        "items": [
          "Capacidad de canasta = hasta 200% del WLL del enganche vertical",
          "Ambas patas a plomo y la carga equilibrada"
        ]
      },
      {
        "heading": "2. Patas inclinadas",
        "items": [
          "No use la capacidad completa de canasta del 200%",
          "Capacidad efectiva = WLL de canasta ÷ (L ÷ H)  o  × sin(θ)"
        ]
      },
      {
        "heading": "Buenas prácticas",
        "items": [
          "Mantenga las patas de canasta lo más verticales posible",
          "Use un separador o mayor alcance cuando el ángulo sería poco profundo",
          "Verifique el tipo de enganche y el ángulo contra el WLL de la etiqueta"
        ]
      }
    ]
  },
  {
    "title": "Cuestionario de matemáticas de choker y canasta",
    "summary":
      "Use las capacidades de enganche de la etiqueta. Resuelva cada uno antes de revelar. WLL vertical = 10,000 lb salvo indicación.",
    "focusKicker": "Enganches de eslingas sintéticas · Cuestionario rápido",
    "quizQuestions": [
      {
        "prompt":
          "WLL vertical = 10,000 lb. Enganche de canasta con ambas patas verticales y la carga equilibrada. ¿Cuál es la capacidad nominal?",
        "explanation":
          "Capacidad de canasta vertical = 200% del WLL vertical → 10,000 × 2,00 = 20,000 lb.",
        "options": [
          { "text": "7,500 lb" },
          { "text": "10,000 lb" },
          { "text": "15,000 lb" },
          { "text": "20,000 lb" }
        ]
      },
      {
        "prompt":
          "WLL vertical = 10,000 lb. Enganche choker simple en eslinga de cinta sintética (ángulo de choke ≥ 120°). ¿Cuál es la capacidad nominal?",
        "explanation":
          "Choker simple de cinta ≈ 75% del vertical → 10,000 × 0,75 = 7,500 lb (salvo que la etiqueta diga otra cosa).",
        "options": [
          { "text": "5,000 lb" },
          { "text": "7,500 lb" },
          { "text": "8,000 lb" },
          { "text": "10,000 lb" }
        ]
      },
      {
        "prompt":
          "WLL vertical = 10,000 lb. Enganche choker simple en eslinga redonda de poliéster (ángulo de choke ≥ 120°). ¿Cuál es la capacidad nominal?",
        "explanation":
          "Choker simple de eslinga redonda de poliéster ≈ 75% del vertical → 10,000 × 0,75 = 7,500 lb.",
        "options": [
          { "text": "7,500 lb" },
          { "text": "8,000 lb" },
          { "text": "10,000 lb" },
          { "text": "16,000 lb" }
        ]
      },
      {
        "prompt":
          "Una eslinga de cinta en enganche choker de dos patas (una eslinga, dos patas). WLL vertical = 10,000 lb. ¿Cuál es la capacidad nominal?",
        "explanation":
          "Choker de una eslinga / dos patas = 2 × choker simple. Cinta o redonda: 2 × 75% = 150% → 10,000 × 1,50 = 15,000 lb.",
        "options": [
          { "text": "7,500 lb" },
          { "text": "10,000 lb" },
          { "text": "15,000 lb" },
          { "text": "20,000 lb" }
        ]
      }
    ]
  },
  {
    "title": "Doble vuelta y doble choke",
    "summary":
      "Cargas de 2 o más piezas de más de 3 m (10 ft) de largo deben ir con doble vuelta y choke — OHSR 15.40.",
    "focusKicker": "OHSR Parte 15 · Eslingado de cargas",
    "focusCallout": "2+ piezas · más de 3 m (10 ft) · doble vuelta · choke en cada eslinga",
    "source": "WorkSafeBC OHSR 15.40 — Eslingado de cargas",
    "sections": [
      {
        "heading": "Cuándo aplica",
        "items": [
          {
            "label": "2 o más piezas de material"
          },
          {
            "label": "Cada pieza de más de 3 m (10 ft) de largo"
          }
        ]
      },
      {
        "heading": "Método requerido",
        "items": [
          {
            "label": "Use un arreglo de eslinga de 2 patas"
          },
          "Coloque las eslingas para mantener la carga horizontal durante el izaje",
          {
            "label": "Cada eslinga debe ir en choke alrededor de la carga con doble vuelta"
          }
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          {
            "label": "Doble vuelta + choke = agarre que resiste el deslizamiento y el movimiento del paquete"
          },
          "Seleccione y use la eslinga para evitar deslizamiento o sobrecarga (OHSR 15.40(1))",
          "Proteja las eslingas sintéticas de bordes afilados"
        ]
      }
    ]
  },
  {
    "title": "Nunca golpee un choke",
    "summary":
      "Nunca fuerce el ojo del choke hacia abajo por la eslinga. Golpear crea un ángulo de choke agudo, daña la eslinga y reduce la capacidad por debajo del WLL de choker etiquetado.",
    "focusKicker": "Enganches de eslingas sintéticas",
    "focusCallout": "Deje que el choke se asiente de forma natural — nunca lo golpee hacia abajo.",
    "source":
      "ASME B30.9 · WSTDA WS-1 / RS-1 / RS-2 · instrucciones del fabricante · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Reducción por ángulo de choke",
        "items": [
          {
            "label": "120°–180° · × 1.00 (capacidad completa de choker)"
          },
          "105°–<120° · × 0.82",
          "90°–<105° · × 0.71",
          "60°–<90° · × 0.58",
          {
            "label": "0°–<60° · × 0.50"
          }
        ]
      },
      {
        "heading": "Por qué nunca golpear",
        "items": [
          {
            "label": "Fuerza un ángulo de choke agudo muy por debajo de 120°"
          },
          "Daña las fibras del cuerpo de la eslinga en el punto de choke",
          "Crea una condición no calificada — la capacidad puede ser menor que cualquier tabla",
          "Deje que el choke se asiente de forma natural al izar la carga"
        ]
      },
      {
        "heading": "Normas y práctica",
        "items": [
          {
            "label":
              "ASME B30.9 — ángulos de choke menores de 120° requieren calificación del fabricante o de una persona calificada"
          },
          "WSTDA WS-1 / RS-1 / RS-2 — multiplique el WLL de choker por el factor de reducción del ángulo",
          "Instrucciones del fabricante — no golpee, martille ni fuerce un choke",
          "OHSR Parte 15 — seleccione y use eslingas para evitar deslizamiento o sobrecarga"
        ]
      }
    ]
  },
  {
    "title": "Chokes opuestos",
    "summary":
      "Dos enganches choker colocados en direcciones opuestas mejoran la estabilidad de la carga y ayudan a evitar que ruede o se deslice en cargas cilíndricas.",
    "focusKicker": "Enganches de eslingas sintéticas",
    "focusCallout": "Los chokes opuestos mejoran la estabilidad — no la capacidad nominal de la eslinga.",
    "source":
      "ASME B30.9 – Eslingas; WSTDA WS-1 – Eslingas de cinta sintética; WSTDA RS-1 – Eslingas redondas sintéticas",
    "sections": [
      {
        "heading": "Cuándo usar chokes opuestos",
        "items": [
          {
            "label": "Dos enganches choker se colocan en direcciones opuestas alrededor de la carga"
          },
          "Se usan para mejorar la estabilidad y ayudar a evitar que la carga ruede o se deslice",
          "Comunes en tubería, postes, troncos, acero estructural y otras cargas cilíndricas",
          "Coloque los chokes con espaciado uniforme para que la carga permanezca equilibrada",
          "Asegúrese de que ambas patas de la eslinga compartan la carga lo más equitativamente posible"
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          "Use protección de bordes adecuada cuando se requiera",
          "Mantenga ángulos de eslinga adecuados",
          "El WLL está limitado por el componente de menor capacidad y la calificación del enganche del fabricante",
          {
            "label": "Los chokes opuestos mejoran la estabilidad, no la capacidad nominal de la eslinga"
          }
        ]
      }
    ]
  },
  {
    "title": "Accesorios bajo el gancho",
    "summary":
      "Dispositivos suspendidos del gancho de la grúa para izar o manejar una carga específica — diseñados, calificados, inspeccionados y usados dentro del WLL.",
    "focusKicker": "Bajo el gancho · ASME B30.20",
    "focusCallout": "Sin etiqueta / marcajes ilegibles = no usar.",
    "source":
      "ASME B30.20 – Dispositivos de izaje bajo el gancho; ASME BTH-1; WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "¿Qué son los accesorios bajo el gancho?",
        "items": [
          {
            "label": "Dispositivos suspendidos del gancho de la grúa para izar o manejar una carga específica"
          },
          "Deben estar diseñados para la aplicación prevista y calificados para la carga",
          "Inspeccione antes del uso — retire del servicio si están dañados o defectuosos",
          {
            "label": "Nunca exceda el límite de carga de trabajo (WLL)"
          },
          "Use solo con aparejos y gancho de grúa compatibles"
        ]
      },
      {
        "heading": "Marcajes requeridos · ASME B30.20",
        "items": [
          {
            "label": "Carga nominal — legible en la estructura principal o en una etiqueta adjunta"
          },
          "Nombre y datos de contacto del fabricante",
          "Número de serie (identificador único)",
          "Peso del elevador si supera 100 lb (45 kg)",
          "Categoría de diseño y clase de servicio ASME BTH-1",
          "Datos eléctricos cuando apliquen (voltaje / corriente en frío)",
          {
            "label": "Marcajes faltantes o ilegibles — retire del servicio"
          }
        ]
      },
      {
        "heading": "Accesorios bajo el gancho comunes",
        "items": [
          "Cubos de concreto",
          "Vigas de izaje y vigas separadoras",
          "Abrazaderas para placas",
          "Agarres y pinzas para tubería",
          "Elevadores de bobinas",
          "Imanes",
          "Elevadores de vacío"
        ]
      }
    ]
  },
  {
    "title": "Cubos de concreto",
    "summary": "",
    "focusKicker": "Bajo el gancho · Vertidos de concreto",
    "focusCallout":
      "A medida que el cubo se aligera, la pluma o el jib sube — anticipe que el gancho se eleva durante el vertido.",
    "source":
      "ASME B30.5 – Grúas móviles y locomotivas; ASME B30.20 – Dispositivos de izaje bajo el gancho; manuales de operación del fabricante",
    "sections": [
      {
        "heading": "Deflexión de la pluma/jib durante un vertido",
        "items": [
          "Inspeccione el cubo, el aro, las bisagras, el pestillo y la compuerta de descarga antes de cada uso",
          {
            "label": "Nunca exceda el límite de carga de trabajo (WLL) del cubo"
          },
          {
            "label": "Al descargar el concreto, la carga baja — la pluma/jib rebota hacia arriba"
          },
          "El gancho y el cubo suben durante el vertido — mantenga holgura respecto a encofrados, varillas y personal",
          "Abra la compuerta de descarga de forma suave; evite movimientos bruscos de la grúa"
        ]
      }
    ]
  },
  {
    "title": "Canastas de personal y DEP",
    "summary":
      "Las plataformas de personal deben estar diseñadas y certificadas por un ingeniero profesional, marcadas de forma permanente y soportadas por aparejos con un factor de diseño mínimo de 10:1.",
    "focusKicker": "Bajo el gancho · Izaje de personal",
    "focusCallout":
      "El izaje de personal requiere un factor de diseño de 10:1 para todo el aparejo de soporte.",
    "source":
      "WorkSafeBC OHSR Parte 14 / Parte 15 · ASME B30.23 — Sistemas de izaje de personal · instrucciones del fabricante",
    "sections": [
      {
        "heading": "Requisitos de diseño",
        "items": [
          {
            "label": "Diseñada y certificada por un ingeniero profesional"
          },
          {
            "label": "Todo el aparejo de soporte — factor de diseño mínimo 10:1 (resistencia a la rotura ÷ WLL)"
          },
          "Patas del bridle conectadas a un eslabón maestro o grillete para repartir la carga entre las patas",
          "Inspeccione la plataforma y todo el aparejo antes de cada izaje"
        ]
      },
      {
        "heading": "La plataforma debe estar marcada permanentemente con",
        "items": [
          {
            "label": "Límite de carga de trabajo (WLL)"
          },
          "Ocupantes máximos",
          "Peso vacío",
          "Peso total (All-Up Weight)",
          "Identificación de la plataforma"
        ]
      }
    ]
  },
  {
    "title": "Canastas de personal y DEP",
    "summary":
      "Al izar personal, mantenga la grúa al 50% o menos de su capacidad nominal e incluya cada componente suspendido en el peso total (all-up).",
    "focusKicker": "Bajo el gancho · Izaje de personal",
    "focusCallout": "Factor de diseño 10:1 ≠ 50% de capacidad de la grúa",
    "source":
      "WorkSafeBC OHSR Parte 14 / Parte 15 · ASME B30.23 — Sistemas de izaje de personal · instrucciones del fabricante",
    "sections": [
      {
        "heading": "Capacidad de la grúa y peso total (All-Up)",
        "items": [
          {
            "label":
              "No cargue la grúa más allá del 50% de su capacidad nominal al izar una plataforma de personal"
          },
          "Calcule la capacidad usando la carga total suspendida — no solo los ocupantes",
          "Ice al personal de forma suave con comunicación continua"
        ]
      },
      {
        "heading": "El peso total (All-Up) incluye",
        "items": [
          "Plataforma",
          "Personal",
          "Herramientas y equipo",
          "Bloque del gancho",
          "Eslingas, grilletes, eslabones maestros y todo el aparejo"
        ]
      },
      {
        "heading": "Concepto clave",
        "items": [
          {
            "label":
              "Factor de diseño 10:1 — aplica al aparejo de la plataforma (eslingas, grilletes, eslabones maestros). La resistencia mínima a la rotura debe ser al menos 10 × el peso total"
          },
          {
            "label":
              "50% de capacidad de la grúa — límite separado de WorkSafeBC sobre cuánta capacidad nominal de la grúa puede usarse al izar personal"
          }
        ]
      }
    ]
  },
  {
    "title": "Factor de diseño vs resistencia a la rotura vs WLL",
    "summary": "",
    "focusKicker": "Capacidades · ASME B30.9",
    "focusCallout":
      "Nunca calcule el WLL a partir de una resistencia a la rotura estimada — use la etiqueta del fabricante.",
    "source": "ASME B30.9 — Eslingas; WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Definiciones clave",
        "items": [
          {
            "label": "Resistencia a la rotura — carga a la que se espera que falle la eslinga o el componente"
          },
          {
            "label": "Factor de diseño — Resistencia a la rotura ÷ WLL"
          },
          {
            "label": "WLL — carga máxima permitida en servicio normal"
          }
        ]
      },
      {
        "heading": "Ejemplo",
        "items": [
          "Cable: 25,000 lb ÷ 5 = 5,000 lb WLL",
          "Cadena de aleación Grado 80: 20,000 lb ÷ 4 = 5,000 lb WLL"
        ]
      },
      {
        "heading": "Recuerde",
        "items": [
          {
            "label": "Use siempre la etiqueta del fabricante — nunca estime la resistencia a la rotura"
          },
          {
            "label":
              "Las plataformas de personal requieren aparejo de soporte 10:1 según WorkSafeBC (no 4:1 / 5:1)"
          }
        ]
      }
    ]
  },
  {
    "title": "Comprobación con calculadora — resistencia y WLL",
    "summary":
      "Cuatro problemas rápidos. Use WLL = Resistencia a la rotura ÷ Factor de diseño. Resuelva cada uno antes de revelar las respuestas.",
    "focusKicker": "Capacidades · Cuestionario rápido",
    "quizQuestions": [
      {
        "prompt":
          "Una eslinga de cable tiene una resistencia mínima a la rotura de 25,000 lb. Factor de diseño = 5. ¿Cuál es el WLL?",
        "explanation": "WLL = Resistencia a la rotura ÷ Factor de diseño → 25,000 ÷ 5 = 5,000 lb.",
        "options": [
          { "text": "2,500 lb" },
          { "text": "5,000 lb" },
          { "text": "12,500 lb" },
          { "text": "20,000 lb" }
        ]
      },
      {
        "prompt":
          "Una eslinga de cadena de aleación Grado 80 tiene una resistencia mínima a la rotura de 20,000 lb. Factor de diseño = 4. ¿Cuál es el WLL?",
        "explanation": "WLL = Resistencia a la rotura ÷ Factor de diseño → 20,000 ÷ 4 = 5,000 lb.",
        "options": [
          { "text": "4,000 lb" },
          { "text": "5,000 lb" },
          { "text": "8,000 lb" },
          { "text": "16,000 lb" }
        ]
      },
      {
        "prompt":
          "Una eslinga de cable está etiquetada para 8,000 lb WLL. Factor de diseño = 5. ¿Qué resistencia mínima a la rotura se requiere?",
        "explanation": "Resistencia a la rotura = WLL × Factor de diseño → 8,000 × 5 = 40,000 lb.",
        "options": [
          { "text": "8,000 lb" },
          { "text": "16,000 lb" },
          { "text": "32,000 lb" },
          { "text": "40,000 lb" }
        ]
      },
      {
        "prompt":
          "Una eslinga de cadena de aleación está etiquetada para 6,000 lb WLL. Factor de diseño = 4. ¿Qué resistencia mínima a la rotura se requiere?",
        "explanation": "Resistencia a la rotura = WLL × Factor de diseño → 6,000 × 4 = 24,000 lb.",
        "options": [
          { "text": "12,000 lb" },
          { "text": "18,000 lb" },
          { "text": "24,000 lb" },
          { "text": "30,000 lb" }
        ]
      }
    ]
  },
  {
    "title": "Volumen × Densidad",
    "summary": "Estime el peso de la carga a partir de la densidad del material — luego verifique con etiquetas, planos o una báscula cuando el izaje sea crítico.",
    "bullets": [
      "Tabla de densidad de materiales",
      "Ejemplos resueltos: madera, concreto, acero, hierro fundido",
      "Volumen métrico del balde de concreto",
      "Centro de gravedad — símbolo, carga descentrada, gancho sobre el CG"
    ],
    "focusKicker": "Matemáticas de aparejo"
  },
  {
    "title": "Tabla de pesos de materiales",
    "summary": "Densidad, madera por LF, plywood y drywall por espesor.",
    "focusKicker": "Matemáticas de aparejo · Tablas de campo",
    "focusCallout": "Hoja 4×8 = 32 ft² · Wt = tasa × longitud o área",
    "sections": [
      {
        "heading": "Densidad | lb/ft³",
        "items": [
          "Acero · 490",
          "Hierro fundido · 450",
          "Cobre · 560",
          "Aluminio · 170",
          "Concreto (simple) · 150",
          "Concreto reinf. · 160–170",
          "Douglas fir · 35",
          "Agua · 62.4",
          "Arena seca / húmeda · 100 / 120",
          "Grava seca / húmeda · 100 / 120",
          "Suelo seco / húmedo · 85 / 110",
          "Ladrillo / mampostería · ≈ 120"
        ]
      },
      {
        "heading": "Madera | lb/LF",
        "items": [
          "2×4 · 1.5",
          "2×6 · 2.0",
          "2×8 · 2.6",
          "2×10 · 3.3",
          "2×12 · 4.7",
          "4×4 · 2.9",
          "4×6 · 4.3",
          "4×8 · 5.8",
          "6×6 · 6.5",
          "6×8 · 8.6",
          "8×8 · 11.5",
          "Wt = lb/LF × longitud (ft)"
        ]
      },
      {
        "heading": "Plywood | lb/ft²",
        "items": [
          "⅛ in · ≈ 0.4",
          "¼ in · ≈ 0.75",
          "⅜ in · ≈ 1.1",
          "½ in · ≈ 1.5",
          "⅝ in · ≈ 1.9",
          "¾ in · ≈ 2.3",
          "1 in · ≈ 3.0",
          "1⅛ in · ≈ 3.4",
          "½ in OSB · ≈ 1.6",
          "¾ in OSB · ≈ 2.3",
          "¾ in MDF · ≈ 3.7",
          "4×8 × tasa = peso hoja"
        ]
      },
      {
        "heading": "Drywall | lb/ft²",
        "items": [
          "¼ in drywall · ≈ 1.2",
          "⅜ in drywall · ≈ 1.4",
          "½ in drywall · ≈ 1.7",
          "⅝ in Type X · ≈ 2.3",
          "¾ in drywall · ≈ 2.9",
          "½ in cement board · ≈ 3.0",
          "½ in fiber-cement · ≈ 2.8",
          "½ in 4×8 drywall · ≈ 54 lb",
          "⅝ in 4×8 Type X · ≈ 74 lb",
          "½ in 4×12 drywall · ≈ 82 lb",
          "Paleta / fleje · sumar extra",
          "Wt = lb/ft² × área"
        ]
      }
    ]
  },
  {
    "title": "Paquete de madera Douglas fir",
    "summary": "Respuesta: 8,960 lb",
    "focusKicker": "Matemáticas de aparejo · Madera",
    "focusCallout": "Regla: Peso = Volumen × Densidad",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Tamaño: 16 ft de largo × 4 ft de ancho × 4 ft de alto",
          "Densidad: 35 lb por ft³ (Douglas fir)"
        ]
      },
      {
        "heading": "Paso 1 — Volumen",
        "items": ["16 × 4 = 64", "64 × 4 = 256 ft³"]
      },
      {
        "heading": "Paso 2 — Peso",
        "items": ["256 × 35 = 8,960 lb"]
      },
      {
        "heading": "Respuesta",
        "items": ["8,960 lb"]
      }
    ]
  },

  {
    "title": "Peso del lock block",
    "summary": "Respuesta: 3,750 lb",
    "focusKicker": "Matemáticas de aparejo · Concreto",
    "focusCallout": "Regla: Peso = Volumen × Densidad",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Tamaño: 4 ft × 2.5 ft × 2.5 ft",
          "Densidad: 150 lb por ft³ (concreto)"
        ]
      },
      {
        "heading": "Paso 1 — Volumen",
        "items": ["2.5 × 2.5 = 6.25", "4 × 6.25 = 25 ft³"]
      },
      {
        "heading": "Paso 2 — Peso",
        "items": ["25 × 150 = 3,750 lb"]
      },
      {
        "heading": "Respuesta",
        "items": ["3,750 lb"]
      }
    ]
  },  {
    "title": "Peso del paquete de plywood",
    "summary": "Respuesta: 960 lb",
    "focusKicker": "Matemáticas de aparejo · Plywood",
    "focusCallout": "Regla: Peso = Área × lb/ft² × número de hojas",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Cada hoja: 4 ft × 10 ft",
          "Altura del paquete: 8 in · 16 hojas de plywood de 1/2 in",
          "Plywood de 1/2 in ≈ 1.5 lb/ft²"
        ]
      },
      {
        "heading": "Paso 1 — Área de una hoja",
        "items": ["4 × 10 = 40 ft²"]
      },
      {
        "heading": "Paso 2 — Peso de una hoja",
        "items": ["40 × 1.5 = 60 lb"]
      },
      {
        "heading": "Paso 3 — Todo el paquete",
        "items": ["16 × 60 = 960 lb"]
      },
      {
        "heading": "Respuesta",
        "items": ["960 lb"]
      }
    ]
  },
  {
    "title": "Peso de viga de acero",
    "summary": "Respuesta: 256 lb",
    "focusKicker": "Matemáticas de aparejo · Acero",
    "focusCallout": "Regla: Encuentre el área de acero → pase a ft³ → × 490",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Viga: 8 in de alto × 4 in de ancho × 10 ft de largo",
          "Alas de 5/8 in · alma de 3/8 in",
          "Densidad: 490 lb por ft³ (acero)"
        ]
      },
      {
        "heading": "Paso 1 — Área de las alas",
        "items": [
          "Una ala: 4 × 5/8 = 2.5 in²",
          "Dos alas: 2.5 × 2 = 5.0 in²"
        ]
      },
      {
        "heading": "Paso 2 — Área del alma",
        "items": [
          "Altura del alma: 8 − 5/8 − 5/8 = 6.75 in",
          "Área del alma: 6.75 × 3/8 = 2.53 in²"
        ]
      },
      {
        "heading": "Paso 3 — Peso",
        "items": [
          "Área total: 5.0 + 2.53 = 7.53 in²",
          "Volumen: 7.53 × 120 ÷ 1728 ≈ 0.52 ft³",
          "0.52 × 490 ≈ 256 lb"
        ]
      },
      {
        "heading": "Respuesta",
        "items": ["256 lb"]
      }
    ]
  },
  {
    "title": "Peso de tubería de hierro fundido",
    "summary": "Respuesta: 239 lb",
    "focusKicker": "Matemáticas de aparejo · Hierro fundido",
    "focusCallout": "Regla: Solo el metal = círculo exterior − hueco interior",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Exterior: 10 in · Interior: 9.5 in · Largo: 10 ft",
          "Densidad: 450 lb por ft³ (hierro fundido)"
        ]
      },
      {
        "heading": "Paso 1 — Área del anillo de metal",
        "items": [
          "10² = 100 · 9.5² = 90.25",
          "100 − 90.25 = 9.75",
          "Área ≈ 0.785 × 9.75 = 7.66 in²"
        ]
      },
      {
        "heading": "Paso 2 — Volumen",
        "items": [
          "Largo = 10 ft = 120 in",
          "7.66 × 120 = 919 in³",
          "919 ÷ 1728 ≈ 0.53 ft³"
        ]
      },
      {
        "heading": "Paso 3 — Peso",
        "items": ["0.53 × 450 ≈ 239 lb"]
      },
      {
        "heading": "Respuesta",
        "items": ["239 lb"]
      }
    ]
  },
  {
    "title": "Balde de concreto — volumen métrico",
    "summary": "Respuesta: 0.83 m³",
    "focusKicker": "Matemáticas de aparejo · Métrico",
    "focusCallout": "Regla: Volumen = Peso ÷ Densidad",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Concreto en el balde: 2,000 kg",
          "1 m³ de concreto ≈ 2,400 kg"
        ]
      },
      {
        "heading": "Paso 1 — ¿Por qué 2,400 kg/m³?",
        "items": [
          "Concreto ≈ 150 lb/ft³",
          "Eso equivale a unos 2,400 kg/m³"
        ]
      },
      {
        "heading": "Paso 2 — Encuentre el volumen",
        "items": ["2,000 ÷ 2,400 = 0.83 m³"]
      },
      {
        "heading": "Respuesta",
        "items": ["0.83 m³ de concreto"]
      }
    ]
  },
  {
    "title": "Comprobación con calculadora — pesos de materiales",
    "summary":
      "Cuatro problemas nuevos — no los ejemplos de la lección. Use la tabla de densidad / LF / hojas. Resuelva cada uno antes de revelar las respuestas.",
    "focusKicker": "Matemáticas de aparejo · Cuestionario rápido",
    "quizQuestions": [
      {
        "prompt":
          "Un montón de arena húmeda mide aproximadamente 8 ft × 4 ft × 2 ft. Arena húmeda ≈ 120 lb/ft³. ¿Aproximadamente cuál es el peso?",
        "explanation": "Volumen = 8 × 4 × 2 = 64 ft³. Peso = 64 × 120 = 7,680 lb.",
        "options": [
          { "text": "3,840 lb" },
          { "text": "5,760 lb" },
          { "text": "7,680 lb" },
          { "text": "9,600 lb" }
        ]
      },
      {
        "prompt":
          "Tiene 40 piezas de madera 2×4, cada una de 16 ft. Tasa de la tabla = 1.5 lb/LF. ¿Cuál es el peso total?",
        "explanation": "Peso = lb/LF × longitud × cantidad → 1.5 × 16 × 40 = 960 lb.",
        "options": [
          { "text": "480 lb" },
          { "text": "640 lb" },
          { "text": "960 lb" },
          { "text": "1,280 lb" }
        ]
      },
      {
        "prompt":
          "Una tarima tiene 15 hojas de drywall de 1/2 in 4×8. La tabla indica ≈ 54 lb por hoja. ¿Aproximadamente cuánto pesa la tarima?",
        "explanation": "15 × 54 = 810 lb (sin incluir flejes/tarima).",
        "options": [
          { "text": "540 lb" },
          { "text": "810 lb" },
          { "text": "900 lb" },
          { "text": "1,080 lb" }
        ]
      },
      {
        "prompt":
          "Una placa de acero mide 6 ft × 3 ft × 1 in de espesor. Acero = 490 lb/ft³. ¿Cuál es el peso?",
        "explanation":
          "Espesor = 1/12 ft. Volumen = 6 × 3 × (1/12) = 1.5 ft³. Peso = 1.5 × 490 = 735 lb.",
        "options": [
          { "text": "490 lb" },
          { "text": "735 lb" },
          { "text": "980 lb" },
          { "text": "1,470 lb" }
        ]
      }
    ]
  },
  {
    "title": "Símbolo del centro de gravedad",
    "summary": "La marca internacional de CG — el punto de equilibrio de la carga.",
    "focusKicker": "Matemáticas de aparejo · Centro de gravedad",
    "focusCallout": "El peso se distribuye por igual en todos los lados de este punto",
    "source":
      "WorkSafeBC OHSR Parte 14 · BC Crane Safety — competencia del aparejador (OHSR Parte 15)",
    "sections": [
      {
        "heading": "Símbolo internacional",
        "items": [
          "Círculo dividido en cuatro cuadrantes — rojo / blanco alternados",
          "Marca el centro de gravedad (CG) de la carga"
        ]
      },
      {
        "heading": "Qué significa el CG",
        "items": [
          "El punto donde el peso se distribuye por igual en todos los lados",
          "El punto de equilibrio de la carga en todas las direcciones",
          "Las cargas giran hasta que el CG cuelga bajo el gancho"
        ]
      },
      {
        "heading": "Por qué importa",
        "items": [
          {
            "label":
              "Si falla el CG → inclinación, balanceo, fuerzas desiguales en eslingas, carga de impacto"
          },
          "BC Crane Safety: los aparejadores deben evaluar peso, estabilidad y equilibrio antes del izaje (OHSR Parte 15)"
        ]
      }
    ]
  },
  {
    "title": "Carga descentrada — CG del contenedor",
    "summary": "Respuesta: 12 ft hacia el lado pesado",
    "focusKicker": "Matemáticas de aparejo · CG descentrado",
    "focusCallout": "Regla: Distancia = (Lado pesado ÷ Total) × Longitud",
    "source":
      "WorkSafeBC OHSR Parte 14 · BC Crane Safety — competencia del aparejador (OHSR Parte 15)",
    "sections": [
      {
        "heading": "Datos",
        "items": [
          "Contenedor = 2,000 lb · Cajón = 2,000 lb",
          "Peso total = 4,000 lb",
          "Longitud del contenedor = 16 ft",
          "Cajón descentrado → lado pesado 3,000 lb · lado liviano 1,000 lb"
        ]
      },
      {
        "heading": "Paso 1 — Proporción del lado pesado",
        "items": ["3,000 ÷ 4,000 = 0.75"]
      },
      {
        "heading": "Paso 2 — Distancia desde el extremo liviano",
        "items": ["16 × 0.75 = 12 ft"]
      },
      {
        "heading": "Respuesta",
        "items": ["El CG está a 12 ft hacia el lado pesado"]
      }
    ]
  },
  {
    "title": "Gancho directamente sobre el CG",
    "summary": "Coloque siempre el gancho directamente encima del centro de gravedad.",
    "focusKicker": "Matemáticas de aparejo · Preparación del izaje",
    "focusCallout": "El gancho debe colgar DIRECTAMENTE sobre el centro de gravedad",
    "source":
      "WorkSafeBC OHSR 14.46 — Línea de carga vertical · BC Crane Safety — competencia del aparejador",
    "sections": [
      {
        "heading": "La regla",
        "items": [
          {
            "label": "Gancho SIEMPRE directamente sobre el centro de gravedad"
          },
          "Los puntos de izaje / el arreglo de eslingas deben mantener el CG bajo el gancho",
          "Haga un izaje de prueba corto para confirmar el equilibrio antes del izaje completo"
        ]
      },
      {
        "heading": "WorkSafeBC OHSR 14.46",
        "items": [
          "La línea de carga sobre el gancho / bloque debe permanecer vertical",
          "Evita carga lateral en la grúa y balanceo descontrolado"
        ]
      },
      {
        "heading": "Si el gancho no está sobre el CG",
        "items": [
          {
            "label":
              "La carga se inclina o balancea hasta que el CG cuelga bajo el gancho"
          },
          "Carga desigual en patas · impacto · posible volcadura o caída",
          "Un CG que cambia durante el izaje se trata como condición de izaje crítico bajo la Parte 14"
        ]
      }
    ]
  },
  {
    "title": "Cable de acero y cadenas — tablas",
    "summary":
      "Elija el tamaño correcto en la tabla — luego use Sin() desde una sola columna.",
    "bullets": [
      "Tabla SWL de cable de acero",
      "Tabla de cadena Grado T (8)",
      "Simple · choker · canasta · brida",
      "Vertical + Sin()"
    ],
    "focusKicker": "Matemáticas de aparejo"
  },
  {
    "title": "Tabla de eslingas de cable de acero",
    "summary": "Busque la fila de diámetro. Luego lea la columna de enganche del izaje.",
    "focusKicker": "Lectura de tablas · Cable de acero",
    "focusCallout": "Fila de diámetro × columna de enganche = carga segura",
    "source": "OH&S factor de diseño 5 · ASME B30.9 — Eslingas · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Columnas de la tabla",
        "items": [
          "Vertical simple",
          "Choker simple",
          "Canasta — patas rectas",
          "Brida de 2 patas — 60°, 45° o 30°"
        ]
      },
      {
        "heading": "Ejemplo 1/2 in",
        "items": [
          "Vertical = 4,700 lb",
          "Choker = 3,500 lb",
          "Canasta = 9,400 lb",
          "2 patas @ 60° = 8,150 lb"
        ]
      },
      {
        "heading": "Notas extra",
        "items": [
          "Choker en una brida → × 0.75",
          "Canasta doble → × 2",
          "La etiqueta de la eslinga prevalece sobre la tabla de clase"
        ]
      }
    ]
  },
  {
    "title": "Tabla de eslingas de cadena",
    "summary": "El mismo formato que el cable. Use aleación Grado T (8) — eslabones estampados 8 o T.",
    "focusKicker": "Lectura de tablas · Cadena",
    "focusCallout": "Las mismas columnas — números Grado T (8)",
    "source": "OH&S factor de diseño 5 · ASME B30.9 — Eslingas · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "Columnas de la tabla",
        "items": [
          "Vertical simple",
          "Choker simple",
          "Canasta — patas rectas",
          "Brida de 2 patas — 60°, 45° o 30°"
        ]
      },
      {
        "heading": "Ejemplo 1/2 in",
        "items": [
          "Vertical = 9,600 lb",
          "Choker = 7,200 lb",
          "Canasta = 19,200 lb",
          "2 patas @ 45° = 13,574 lb"
        ]
      },
      {
        "heading": "Chequeos de campo",
        "items": [
          "Eslabones estampados 8 o T",
          "Descarte si el desgaste supera 10%",
          "Choker en brida → × 0.75"
        ]
      }
    ]
  },
  {
    "title": "Cómo elegir el diámetro",
    "summary":
      "Lectura de tablas estilo Fulford: columna de enganche · ángulo más bajo · luego multiplique si es choker o canasta doble.",
    "focusKicker": "Lectura de tablas · Selección",
    "focusCallout": "¿Ángulo entre columnas de la tabla? Use siempre la columna MÁS BAJA",
    "source": "Práctica de tablas CraneSafe / Fulford · ASME B30.9 · WorkSafeBC OHSR Parte 15",
    "sections": [
      {
        "heading": "El problema le da",
        "items": [
          "Peso de la carga",
          "Cable o cadena",
          "Enganche (vertical · choker · canasta · brida)",
          "Ángulo de eslinga desde la horizontal"
        ]
      },
      {
        "heading": "Pasos en la tabla",
        "items": [
          "Abra la columna de enganche / ángulo",
          "¿Ángulo no listado? Use la columna MÁS BAJA siguiente (50° → 45°)",
          "Baje hasta que la capacidad ≥ carga",
          "Esa fila es el tamaño mínimo"
        ]
      },
      {
        "heading": "Multiplicadores extra",
        "items": [
          { "label": "Brida de 2 patas en choker → multiplique el valor × 0.75" },
          "Canasta doble → multiplique el valor × 2",
          "La etiqueta de la eslinga siempre gana sobre la tabla de clase"
        ]
      }
    ]
  },
  {
    "title": "Vertical + Sin()",
    "summary": "La misma respuesta que la columna de ángulo — construida solo desde Vertical.",
    "focusKicker": "Lectura de tablas · Sin()",
    "focusCallout": "Columna de la tabla ≈ Vertical × Patas × Sin(ángulo)",
    "source": "Ángulo de eslinga desde la horizontal · formato de práctica CraneSafe / Fulford",
    "sections": [
      {
        "heading": "Desde Vertical (V)",
        "items": [
          "Enganche vertical = V",
          "Choker = V × 0.75",
          "Canasta (patas rectas) = V × 2",
          "Brida de 2 patas = V × 2 × Sin(ángulo)"
        ]
      },
      {
        "heading": "Valores Sin() (DEG)",
        "items": [
          "Sin(60°) ≈ 0.866",
          "Sin(45°) ≈ 0.707",
          "Sin(30°) = 0.500"
        ]
      },
      {
        "heading": "Por qué coincide con la tabla",
        "items": [
          "Cable 1/2 in · V = 4,700",
          "2 patas @ 60° → 4,700 × 2 × 0.866 ≈ 8,140",
          "La columna 60° de la tabla muestra 8,150"
        ]
      }
    ]
  },
  {
    "title": "Ejemplo — brida de cable de acero",
    "summary": "Respuesta: 1/2 in · distancia entre anclajes 20 ft",
    "focusKicker": "Lectura de tablas · Ejemplo estilo Fulford",
    "focusCallout": "Carga 7,500 lb · brida de 2 patas @ 60° · patas de 20 ft cada una",
    "sections": [
      {
        "heading": "Problema",
        "items": [
          "Carga = 7,500 lb",
          "Brida de cable de 2 patas @ 60°",
          "Cada pata = 20 ft · misma longitud",
          "¿Tamaño mínimo? ¿Distancia entre anclajes?"
        ]
      },
      {
        "heading": "Paso 1 — Columna de la tabla",
        "items": [
          "Use la columna de 2 patas a 60°",
          "1/2 in @ 60° = 8,150 lb ≥ 7,500 lb"
        ]
      },
      {
        "heading": "Paso 2 — Comprobación Sin()",
        "items": [
          "Mitad de la carga = 3,750 lb",
          "3,750 ÷ Sin(60°) ≈ 3,750 ÷ 0.866 ≈ 4,330 lb",
          "Vertical 1/2 in = 4,700 lb ≥ 4,330 lb"
        ]
      },
      {
        "heading": "Paso 3 — Distancia",
        "items": [
          "Patas iguales → ángulos iguales",
          "60° + 60° + ángulo superior = 180° → superior 60°",
          "Equilátero → distancia = longitud de pata = 20 ft"
        ]
      },
      {
        "heading": "Respuesta",
        "items": ["Cable de 1/2 in · 20 ft entre anclajes"]
      }
    ]
  },
  {
    "title": "Ejemplo — brida de cadena en choker",
    "summary": "Respuesta: cadena Grado T (8) de 1/2 in",
    "focusKicker": "Lectura de tablas · Ejemplo estilo Fulford",
    "focusCallout": "Carga 10,000 lb · brida de 2 patas en choker @ 50°",
    "sections": [
      {
        "heading": "Problema",
        "items": [
          "Carga = viga de 10,000 lb",
          "Cadena Grado T (8)",
          "Brida de 2 patas · cada pata en choker",
          "Ángulo de eslinga = 50°"
        ]
      },
      {
        "heading": "Paso 1 — Columna de ángulo",
        "items": [
          "50° no está en la tabla",
          "Use la columna MÁS BAJA siguiente → 45°"
        ]
      },
      {
        "heading": "Paso 2 — Reducción por choker",
        "items": [
          "Brida de 2 patas en choker → × 0.75",
          "1/2 in @ 45° = 13,574 lb",
          "13,574 × 0.75 ≈ 10,180 lb"
        ]
      },
      {
        "heading": "Paso 3 — Compare con la carga",
        "items": [
          "10,180 lb ≥ 10,000 lb → OK",
          "Tamaños menores no alcanzan después de × 0.75"
        ]
      },
      {
        "heading": "Respuesta",
        "items": ["Tamaño mínimo = cadena Grado T (8) de 1/2 in"]
      }
    ]
  },
  {
    "title": "Comprobación con calculadora — lectura de tablas",
    "summary":
      "Cuatro problemas estilo Fulford. Modo DEG. Resuelva cada uno antes de revelar las respuestas.",
    "focusKicker": "Lectura de tablas · Cuestionario rápido",
    "quizQuestions": [
      {
        "prompt":
          "Una brida de 2 patas está a 50°. La tabla solo muestra 60°, 45° y 30°. ¿Qué columna usa?",
        "explanation":
          "Ángulo entre valores de la tabla → use siempre la columna MÁS BAJA siguiente (50° → 45°).",
        "options": [
          { "text": "60°" },
          { "text": "45°" },
          { "text": "30°" },
          { "text": "Promedio de 60° y 45°" }
        ]
      },
      {
        "prompt":
          "Capacidad de brida de 2 patas @ 45° en la tabla = 13,574 lb. La brida está en choker. ¿Qué capacidad usa?",
        "explanation":
          "Brida de 2 patas en choker → multiplique por 0.75 → 13,574 × 0.75 ≈ 10,180 lb.",
        "options": [
          { "text": "6,787 lb" },
          { "text": "10,180 lb" },
          { "text": "13,574 lb" },
          { "text": "27,148 lb" }
        ]
      },
      {
        "prompt":
          "Vertical de cable = 4,700 lb. 2 patas @ 60°. Capacidad ≈ Vertical × 2 × Sin(60°). ¿Aproximadamente cuánto?",
        "explanation":
          "Sin(60°) ≈ 0.866 → 4,700 × 2 × 0.866 ≈ 8,140 lb (la tabla muestra 8,150).",
        "options": [
          { "text": "4,700 lb" },
          { "text": "6,650 lb" },
          { "text": "8,140 lb" },
          { "text": "9,400 lb" }
        ]
      },
      {
        "prompt":
          "Dos patas de brida miden 20 ft cada una a 60° desde la horizontal. Longitudes iguales. ¿Distancia entre anclajes?",
        "explanation":
          "Patas iguales → ángulos iguales. 60°+60° → ángulo superior 60°. Triángulo equilátero → distancia = 20 ft.",
        "options": [
          { "text": "10 ft" },
          { "text": "15 ft" },
          { "text": "20 ft" },
          { "text": "40 ft" }
        ]
      }
    ]
  },

  {
    "title": "Cuerdas de guía",
    "summary": "Controle la carga a distancia segura — cuerda limpia, guantes puestos, nudos de confianza.",
    "bullets": [
      "Cuándo OHSR exige una cuerda de guía",
      "Postura segura · pendiente 45° · manos a la cintura",
      "Ballestrinque · as de guía · ojo en ocho"
    ],
    "focusKicker": "Control de carga",
    "source": "WorkSafeBC OHSR 14.28(5)"
  },
  {
    "title": "Práctica segura con cuerda de guía",
    "summary": "Mantenga la cuerda limpia y usted fuera de la trayectoria de la carga.",
    "focusKicker": "Cuerdas de guía · Práctica",
    "focusCallout": "OHSR 14.28(5) — cuerdas de guía cuando haga falta controlar o posicionar la carga",
    "source": "WorkSafeBC OHSR 14.28(5) · OHSR 8.2 / 8.19 — protección de manos",
    "sections": [
      {
        "heading": "Equipo y EPP",
        "items": [
          { "label": "Mantenga la cuerda limpia — sin lodo, grasa ni deshilachados que resten agarre" },
          {
            "label": "Use guantes — OHSR 8.2 guantes de trabajo de uso general; 8.19 si hay riesgo de abrasión"
          },
          { "label": "Deje longitud de sobra — nunca se quede corto a media oscilación" }
        ]
      },
      {
        "heading": "Postura y pendiente",
        "items": [
          { "label": "Colóquese ~1:1 de la carga — distancia ≈ altura para ~45° de pendiente" },
          { "label": "Apunte a una pendiente limpia de ~45° — ni recta afuera ni debajo de la carga" },
          { "label": "Manos en la carga solo a la altura de la cintura — si no, controle con la cuerda" }
        ]
      },
      {
        "heading": "Regulación",
        "items": [
          {
            "label": "OHSR 14.28(5) — use cuerdas de guía u otro medio efectivo cuando sea necesario"
          },
          { "label": "No todo izaje las necesita — úselas cuando el movimiento o la colocación sea peligroso sin ellas" }
        ]
      }
    ]
  },
  {
    "title": "Deje sobra — ojo fijo",
    "summary": "Deje cuerda de sobra y termine el cabo de trabajo con un nudo que no resbale.",
    "focusKicker": "Cuerdas de guía · Longitud extra",
    "focusCallout": "Cuerda de sobra + ojo fijo supera una línea corta y un nudo que resbala",
    "sections": [
      {
        "heading": "Por qué sobra",
        "items": [
          { "label": "La carga oscila, gira y sube — necesita línea de sobra en la mano" },
          { "label": "Nunca enrolle la cuerda de guía en la muñeca o el cuerpo" },
          { "label": "Mantenga suficiente longitud libre para apartarse sin soltar" }
        ]
      },
      {
        "heading": "Ocho en un bucle (figure-eight on a bight)",
        "items": [
          { "label": "Doble la cuerda para formar un bucle" },
          { "label": "Forme un ocho y pase el bucle por él" },
          { "label": "Ajuste — da un ojo fijo fuerte para herraje o agarre" }
        ]
      }
    ]
  },
  {
    "title": "Nudos para cuerdas de guía",
    "summary": "Dos nudos de uso constante — ballestrinque en la carga, as de guía para un ojo fijo.",
    "focusKicker": "Cuerdas de guía · Nudos",
    "focusCallout": "Elija el nudo según el trabajo — luego ajústelo antes del izaje",
    "sections": [
      {
        "heading": "Ballestrinque (clove hitch)",
        "items": [
          { "label": "Sujeción rápida alrededor de tubo, baranda o esquina de la carga" },
          { "label": "Sostiene con tirón constante — verifíquelo tras cada movimiento" }
        ]
      },
      {
        "heading": "As de guía (bowline)",
        "items": [
          { "label": "Ojo fijo que no resbala bajo carga" },
          { "label": "Fácil de desatar después de haber cargado" }
        ]
      },
      {
        "heading": "Antes de confiar",
        "items": [
          { "label": "Ajuste el nudo — sin hebras cruzadas sueltas" },
          { "label": "Deje un cabo de trabajo lo bastante largo para verlo" },
          { "label": "Si se ve mal, vuelva a atar — no vuele un nudo misterioso" }
        ]
      }
    ]
  },
  {
    "title": "Ballestrinque",
    "summary": "Dos vueltas que se cruzan — el cabo de trabajo se mete bajo la última vuelta.",
    "focusKicker": "Cuerdas de guía · Ballestrinque",
    "focusCallout": "Vuelta · cruce · meta — luego apriete la X plana en la barra",
    "sections": [
      {
        "heading": "Cómo atarlo",
        "items": [
          { "label": "Pase la cuerda detrás (o alrededor) de la barra / anclaje" },
          { "label": "Tráigala por arriba y de nuevo alrededor para que la segunda vuelta cruce la primera" },
          { "label": "Meta el cabo de trabajo bajo la segunda vuelta (siga la flecha)" },
          { "label": "Tire de ambos extremos — debe verse una X clara en la cara del nudo" }
        ]
      },
      {
        "heading": "En el trabajo",
        "items": [
          { "label": "La parte fija y el cabo de trabajo salen en sentidos opuestos por la X" },
          { "label": "Vuelva a revisar tras mover la carga — el ballestrinque puede caminar si queda flojo" },
          { "label": "Añada media vuelta de respaldo si habrá golpes o ciclos de holgura" }
        ]
      }
    ]
  },
  {
    "title": "As de guía",
    "summary": "El conejo sube por el agujero, rodea el árbol y baja — ojo fijo que se desata tras cargar.",
    "focusKicker": "Cuerdas de guía · As de guía",
    "focusCallout": "Sube · rodea · baja — luego ajuste el ojo",
    "sections": [
      {
        "heading": "Cómo atarlo",
        "items": [
          { "label": "Haga un lazo pequeño en la parte fija (el agujero del conejo)" },
          { "label": "Pase el cabo de trabajo hacia arriba por el lazo" },
          { "label": "Enróllelo detrás de la parte fija (alrededor del árbol)" },
          { "label": "Bájelo otra vez por el lazo y tire para ajustar" }
        ]
      },
      {
        "heading": "En el trabajo",
        "items": [
          { "label": "Deja un ojo fijo que no resbala como un nudo corredizo" },
          { "label": "Aún se desata después de cargar — bueno para extremos de cuerda de guía" },
          { "label": "Deje un cabo visible; un as de guía incompleto puede volcarse" }
        ]
      }
    ]
  },

  {
    "title": "Planificación de izajes",
    "summary": "Planifique el izaje antes de mover el gancho — carga, equipo, personas y cómo se comunicarán.",
    "focusKicker": "Planificación de izajes",
    "focusCallout": "BC Crane Safety — plan de izaje escrito para izajes críticos y en tándem",
    "source": "WorkSafeBC OHSR Partes 14 y 15 · plantilla de plan de izaje de BC Crane Safety",
    "sections": [
      {
        "heading": "El plan cubre",
        "items": [
          { "label": "Peso de la carga, CG y trayectoria" },
          { "label": "Configuración de la grúa, radio y capacidad de la tabla" },
          { "label": "Aparejo, enganche y WLL con derates por ángulo" },
          { "label": "Peligros — líneas energizadas, viento, puntos ciegos" },
          { "label": "Señales / radio — quién habla, quién escucha" }
        ]
      },
      {
        "heading": "Regulación y orientación",
        "items": [
          { "label": "OHSR Parte 14 — operación de grúas, tándem e izajes críticos, señales" },
          { "label": "OHSR 15.2 — aparejador calificado que conoce las señales" },
          { "label": "BC Crane Safety — plantilla de plan de izaje (Partes 14 y 15)" },
          { "label": "Informe a la cuadrilla antes de mover el gancho" },
          { "label": "Actualice el plan si cambian personas o equipo" }
        ]
      }
    ]
  },
  {
    "title": "Izaje crítico",
    "summary": "Plan escrito en el sitio. Informe a la cuadrilla. Luego izar.",
    "focusKicker": "Planificación de izajes · Izaje crítico",
    "focusCallout": "Todo izaje crítico necesita un plan escrito en el lugar de trabajo",
    "source": "WorkSafeBC OHSR 14.42.1 · definición de izaje crítico · BC Crane Safety",
    "sections": [
      {
        "heading": "Es crítico cuando",
        "items": [
          { "label": "Más del 90% de capacidad a más de la mitad del radio máximo" },
          { "label": "Tándem — cualquier grúa sobre 75%, o más de dos grúas" },
          { "label": "Levantar a una persona en plataforma suspendida" },
          { "label": "El CG de la carga o la longitud de eslinga cambia durante el izaje" },
          { "label": "Base flotante, sobre alta tensión viva, o carga sumergida" }
        ]
      },
      {
        "heading": "Antes de izar",
        "items": [
          { "label": "Escriba el plan — aparejo, viento, velocidades, reparto de carga, señaleros" },
          { "label": "Haga una reunión previa y documente quién fue informado" },
          { "label": "Repita la reunión si cambian personas o equipo" },
          { "label": "Mantenga radio / señales claras durante todo el izaje" },
          { "label": "Mantenga el plan escrito disponible en el lugar de trabajo" }
        ]
      }
    ]
  }

];

