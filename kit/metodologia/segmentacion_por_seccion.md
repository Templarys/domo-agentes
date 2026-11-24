# Metodología Domo · Segmentación electoral por sección

Inspirada en la ponencia de Martín Buzzi ("Nanosegmentación de votantes para campañas digitales", XXV Cumbre Mundial de Comunicación Política, 24-nov-2026) y adaptada al marco legal mexicano. Buzzi segmenta **persona por persona** con datos de dispositivos. Domo segmenta **sección por sección** con datos públicos y legales, y usa la pauta digital por zona, edad y horario.

> **Regla legal (LFPDPPP).** Domo NO infiere ni guarda la orientación política, religiosa ni otros datos sensibles de personas identificables. Los padrones y simpatizantes viven solo en Mapeo Electoral, en la computadora del Mtro. Joab. Si un cliente contrata un proveedor de datos de dispositivos, el proveedor debe estar inscrito en el Registro Nacional de Proveedores del INE y garantizar por contrato el origen lícito y el consentimiento de los datos. `juridico-electoral` lo revisa antes de aceptarlo.

## 1. Los 9 modelos (preguntas) y cómo los resolvemos

| # | Modelo (Buzzi) | Pregunta | Cómo lo resuelve Domo (legal) | Fuente |
|---|---|---|---|---|
| M1 | Arquetipo político | ¿A quién vota? | Tipología de secciones (ver §2) y, si hay presupuesto, encuesta por zona | Resultados INE/OPLE por sección; encuesta |
| M2 | Comportamiento electoral | ¿Cómo votó antes? | Historial de 3 o más elecciones por sección: voto dividido local/federal, volatilidad, abstención | Resultados por sección (Mapeo Electoral) |
| M3 | Sociocultural | ¿Cómo vive? | Escolaridad, ocupación, migración, servicios | Censo INEGI por AGEB/sección |
| M4 | Geodemográfico | ¿Dónde vive? | Urbano/rural, colonia, cabecera/periferia | Cartografía INE e INEGI |
| M5 | Valores culturales | ¿Qué lo emociona? | Encuesta o grupos focales; nunca se infiere de datos personales | Investigación cualitativa |
| M6 | Psicográfico | ¿Cómo es? | Igual que M5 | Investigación cualitativa |
| M7 | Ciclo vital | ¿En qué etapa de vida está? | Pirámide de edad y tipo de hogar por sección | Censo INEGI |
| M8 | Identidad religiosa | ¿En qué cree? | Solo de forma agregada por municipio, para cuidar el tono del mensaje. **Nunca para segmentar ni pautar** (dato sensible; Meta tampoco lo permite) | Censo INEGI (agregado) |
| M9 | Nivel socioeconómico | ¿Cuánto tiene? | Rezago social, NSE por AGEB | CONEVAL, INEGI |

## 2. Los 7 segmentos de comportamiento, por sección

Se clasifica cada sección con resultados de las últimas 3 elecciones comparables: % de voto propio, % opositor, margen, volatilidad (cambio entre elecciones) y participación.

| Segmento (Buzzi) | Versión Domo por sección | Criterio orientativo (se ajusta por municipio) |
|---|---|---|
| Voto duro propio | Bastión propio | Gana el partido o la coalición propia en 3 de 3 elecciones, con margen de más de 15 puntos |
| Switch cercano | Competida favorable | Margen de 0 a 10 puntos a favor, o volatilidad alta con tendencia propia |
| Harto de todo | Castigo/volátil | Cambió de ganador en las últimas 2 elecciones y la participación va a la baja |
| Indeciso | Competida pareja | Margen menor de 5 puntos, con alternancia |
| No vota | Baja participación | Participación más de 10 puntos debajo del promedio municipal |
| Switch opositor | Competida desfavorable | Margen de 0 a 10 puntos en contra, con señales de voto dividido |
| Voto duro opositor | Bastión opositor | Gana la oposición en 3 de 3 elecciones, con margen de más de 15 puntos |

## 3. Plan de inversión mes a mes (curva base de Buzzi, campaña de 6 meses)

Cifras en % de la inversión de cada mes; cada columna suma 100%. Es un punto de partida que se adapta a cada campaña (ver `kit/plantillas/plan_inversion_segmentos.xlsx`).

| Segmento | Mes 1 | Mes 2 | Mes 3 | Mes 4 | Mes 5 | Mes 6 | Prioridad |
|---|---|---|---|---|---|---|---|
| Voto duro propio | 4 | 4 | 4 | 5 | 8 | 14 | Media (mantener y movilizar al final) |
| Switch cercano | 40 | 36 | 28 | 20 | 16 | 14 | Alta (se convierte al inicio o no se convierte) |
| Harto de todo | 10 | 12 | 16 | 20 | 20 | 16 | Alta (crece hacia el final) |
| Indeciso | 14 | 16 | 22 | 26 | 22 | 16 | Alta (pico a mitad de campaña) |
| No vota | 12 | 12 | 10 | 9 | 10 | 14 | Media (movilización al cierre) |
| Switch opositor | 20 | 20 | 20 | 20 | 24 | 26 | Alta (aquí va la campaña de contraste) |
| Voto duro opositor | 0 | 0 | 0 | 0 | 0 | 0 | Cero |

Principios:
1. La campaña se planea completa desde el día uno; a medio camino se ajusta, pero no se improvisa.
2. En el voto duro opositor no se invierte. En el propio, solo mantenimiento y movilización al cierre.
3. El contraste se dirige al switch opositor, no a todos.
4. La tecnología no reemplaza la estrategia: le da a quién, qué y cuándo.

## 4. Momento persuasible
No basta saber a quién y con qué mensaje: también **cuándo**. En Meta Ads se programa por horario (traslados, comida, noche) según el perfil de la zona: zona dormitorio, zona comercial o rural. Se prueba con variantes A/B por franja horaria.

## 5. Una persona, varios segmentos
La misma persona puede estar en varios modelos a la vez (ejemplo: indecisa + familia con adolescentes + trabajadora de colonia). Se eligen 1 o 2 cruces por etapa de la campaña, no todos a la vez.

## 6. Flujo en el sistema de agentes
1. **investigacion-datos:** extrae resultados por sección, el censo y CONEVAL, con fuente.
2. **Mapeo Electoral** (computadora del Mtro. Joab): calcula la tipología de secciones. Los datos de personas no salen de ahí.
3. **estratega-electoral:** prioriza las secciones y ajusta la curva de inversión.
4. **comunicacion-discurso:** escribe la matriz segmento × mensaje × momento.
5. **juridico-electoral:** revisa la pauta (fiscalización, datos personales, proveedores).
6. **revision:** filtro final.

## 7. Producto comercial
**"Diagnóstico de segmentos por sección"**: mapa de las secciones por segmento, prioridades, curva de inversión y matriz de mensajes. Es la versión legal y municipal de la nanosegmentación.
