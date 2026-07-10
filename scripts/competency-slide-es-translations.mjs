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
  }
];
