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
