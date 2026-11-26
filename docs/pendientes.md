# Pendientes

- **Monitoreo y síntesis de medios** (agente 3): corte diario de medios locales de Oaxaca, web y Facebook con palabras clave del cliente. En espera: el Mtro. Joab aún define esta área de la empresa. **No mezclar con Mapeo Electoral.**
- **Caballo de ajedrez vectorial** para piezas estáticas: falta redibujarlo en vector limpio con el logo real.
- **Reputación digital (Cumbre, 25-nov-2026):** el Mtro. Joab subirá a INSUMOS videos de José Norte (Reputación Digital), ponente de la Cumbre, que aplica reputación digital con Facebook y redes. Notas de su ponencia en Drive: NOTAS_dia2_Jose_Norte_reputacion_digital_gemelos.txt (carpeta de la Cumbre). Al recibirlos: analizarlos y proponer cómo aplicarlo en Domo (como con Buzzi y "Hackeo de la mente"). Tema relacionado que mencionó: **gemelos digitales** (réplicas simuladas de segmentos del electorado o de la audiencia para probar mensajes antes de publicarlos); revisar qué hacen, cómo se construyen y si es viable y legal para Domo (sin datos personales).

- **DOMO Listening · escucha social (propuesta del Mtro. Joab, 26-nov-2026). Para revisar.** Complemento de Mapeo Electoral: el Mapeo dice cómo votó un territorio; Listening, de qué se habla hoy (temas, percepción de actores e instituciones, narrativas, sentimiento, volumen, alertas de crisis, agenda de medios, lugares mencionados). Se une al pendiente de **Monitoreo de medios** de arriba y al módulo **Reclamos** de Mapeo, que ya clasifica quejas por tema y sección y nunca guarda al autor.
  - **Fuentes a evaluar:**
    - Gratuitas o abiertas: Google News RSS, RSS de medios locales, GDELT, YouTube Data API (cuota gratuita), Bluesky, Google Trends.
    - Restringidas o de pago: Facebook e Instagram (API limitada; Meta Content Library solo para investigadores elegibles), X (según plan), TikTok.
    - Facebook es la fuente más valiosa en Oaxaca y la más difícil de automatizar.
  - **Repos open source a verificar** (no instalados ni probados; revisar funcionamiento, seguridad, licencia y acceso real a fuentes antes de usar): Radar Intelligence (Scognamiglio1969/radar-intelligence), Social Explorer (spiculedata), Harken (VladUZH/harken), OpenMagpie (obris-dev/openmagpie), PySentimiento (sentimiento, emociones e ironía en español).
  - **Pila propuesta:** feedparser, trafilatura (solo sitios que lo permitan), PySentimiento, BERTopic, sentence-transformers, PostgreSQL + pgvector, Streamlit o integración en Mapeo, Ollama o modelos locales.
  - **Regla de presupuesto $0:** solo herramientas gratuitas; cualquier fuente de pago se reporta con costo/beneficio antes de pedir autorización.
  - **Reglas de datos (LFPDPPP):**
    - Solo contenido público y agregado.
    - No guardar autores ni perfilar a personas.
    - Un lugar mencionado en una publicación no es el domicilio de quien la escribió.
    - Las redes no representan a toda la población: no son encuesta.
    - Nada de padrones ni datos personales en la nube.
  - **Visión de productos:** DOMO Electoral (Mapeo), DOMO Listening, DOMO Trends (búsquedas y agenda) y DOMO Studio (producción 3D/video), con infraestructura compartida.
  - **Pregunta para la ponencia de Martha Hernández (minería de datos):** ¿qué APIs o proveedores usan para recolectar redes en México, cómo resuelven las restricciones de Meta y cómo validan representatividad y ubicación?

- **Agente de contraste (pedido del Mtro. Joab, 26-nov-2026).** Base: diapositiva de la conferencia de contraste en la Cumbre (`kit/metodologia/referencias/contraste_cumbre_4_ejes.jpg`). Los 4 ejes:
  1. **Carácter:** la fragilidad de su temperamento.
  2. **Coherencia:** detectar y explotar inconsistencias.
  3. **Simbólico:** los códigos (lujos, camionetas, restaurantes).
  4. **Narrativo:** incumplimientos; una historia donde el adversario es el villano.

  **CONSTRUIDO el 26-nov-2026** con las notas del Mtro. Joab: agente `.claude/agents/contraste-estrategico.md` y metodología `kit/metodologia/contraste_estrategico.md`. No producir piezas con esto todavía.
  - **Diseño previsto:** recibe un expediente de fuentes públicas (de `investigacion-datos`) y propone un encuadre por eje, con evidencia fechada para cada afirmación.
  - **Filtro obligatorio:** todo pasa por `juridico-electoral` y `revision`.
  - **Candados desde el inicio:**
    - solo hechos públicos documentados y declaraciones propias;
    - calumnia: nada sin sentencia;
    - **violencia política de género** cuando la adversaria es mujer: el eje "carácter/temperamento" es el más riesgoso y no puede apelar a estereotipos;
    - familiares fuera;
    - "simbólico" solo con gasto o bienes acreditados;
    - nada de perfiles falsos, bots ni pauta sin identificar.
  - **Caso de prueba:** el expediente de Liz Concha (eje coherencia).

- **DOMO Debate · entrenamiento de debate con IA (idea del Mtro. Joab, 26-nov-2026).** Referencia: "Debate Coach" de Pulso 360° / Electoralia, visto en la Cumbre (`kit/metodologia/referencias/debate_coach_ia_cumbre.jpg`): "Ensaya. Mide. Mejora." Tiene dos modos: analizar un debate (transcripción o video → calificación) y simulacro en vivo contra una IA adversaria. El Mtro. Joab tiene experiencia propia en entrenamientos de debate: **su metodología es el diferencial**.
  - **Versión mínima posible con lo que ya tenemos, a bajo costo:**
    1. **Análisis:** se sube el video o el audio del ensayo, ElevenLabs lo transcribe y se califica con la rúbrica del Mtro. Joab (mensaje, tiempo, ataques y defensas, cifras, muletillas, cierre). Sale un informe con marca Domo.
    2. **Simulacro en vivo:** un agente de voz de ElevenLabs hace de rival, alimentado con el expediente público del adversario (sus declaraciones, posturas y flancos), más un moderador con tiempos.
  - **Falta:** la rúbrica y el formato de entrenamiento del Mtro. Joab; probar costos del agente de voz; reglas (el rival simulado no inventa hechos ni usa datos personales).
  - **Producto vendible** a candidatos rumbo a 2027, junto con DOMO Electoral, Listening y Studio.

- **DOMO Imagen · análisis de imagen del candidato con IA (idea del Mtro. Joab, 26-nov-2026).** Referencia: módulo "Imagen del Candidato" de Pulso 360°, visto en la Cumbre (`kit/metodologia/referencias/imagen_candidato_ia_cumbre.jpg`). Analiza una foto y devuelve un informe de comunicación no verbal: postura, gesto, mirada, vestimenta, encuadre, fondo, símbolos y coherencia con el arquetipo político.
  - **Ya es posible hoy sin costo extra:** Claude lee imágenes. Falta definir la rúbrica de Domo y el formato del informe (PDF con marca, vía `informes-documentos`).
  - **Se une con DOMO Debate:** el mismo análisis, pero sobre video del ensayo (gestos, manos, mirada a cámara, ritmo).
  - **Candados:**
    - solo fotos del cliente con su autorización, o fotos públicas de actores públicos;
    - nada de reconocimiento facial ni de inferir salud, origen étnico u orientación;
    - nada de juicios sobre el físico;
    - con mujeres, cuidar estereotipos de género (violencia política de género si se publica sobre una rival).

- **Notas del panel de Pulso 360° en la Cumbre (26-nov-2026)**, sobre las fotos de Debate Coach, Imagen del Candidato y Campo en Vivo. Lo útil para Domo:
  - **Debate:** analiza debates en los que ya participó el candidato y simula en vivo a partir del contexto (estado, municipio o distrito). Su mensaje: "un debate puede definir una elección"; hay que contestar lo que se pregunta, llevar los temas propios y diferenciarse.
  - **Imagen:** con una foto analiza lenguaje no verbal, vestimenta y estilo, y **arquetipo político y su "match" con la comunidad**. Ejemplo que dieron: un candidato rural de corbata, incongruente con su distrito. Permite comparar muchas fotos del candidato.
  - **Campo:** rutas asignadas a brigadistas, puntualidad, gestiones, fotos de baches y de propaganda ilegal como **evidencia para quejas o impugnaciones**, y todo centralizado, no en el celular. Mencionaron nombrar representantes de casilla.
  - **Mercado al que apuntan:** candidatos de **distrito local y regidurías**, que no pueden pagar varios consultores. Venden "varios consultores 24/7". Ofrecen **convenios a consultoras para revender** su herramienta (decisión del Mtro. Joab: ¿aliado o competencia?).
  - **Ojo, dato legal a verificar:** el ponente dijo que el art. 242 LGIPE obliga a los brigadistas a reportar violaciones al informe del candidato. El art. 242 define campaña y propaganda; no encontramos esa obligación. Lo correcto: las evidencias sirven para presentar quejas (procedimiento especial sancionador). Validar con `juridico-electoral` antes de usarlo en material de Domo.
  - **Para Domo:** cerraron con un QR para agendar demo. Domo ya tiene su página de demo (artifact "Plataforma Domo"); falta hacer su QR cuando el Mtro. Joab la comparta en público.
