# Metodología Domo · Segmentación psicográfica y etnografía digital

Inspirada en la ponencia de Sergio José Gutiérrez ("Hackeo de la mente", XXV Cumbre Mundial de Comunicación Política, nov-2026) y adaptada al marco legal mexicano. Complementa `segmentacion_por_seccion.md`: aquella dice **dónde** y **cuánto** invertir (7 segmentos por sección); esta dice **qué sienten** y **qué decirles**. Resuelve los modelos M5 (valores) y M6 (psicográfico) que allá quedaron como "investigación cualitativa".

> **Regla legal (LFPDPPP).** Todo se trabaja **agregado**: cuántos y dónde, nunca quién. No se arman perfiles de personas con nombre. Opinión política, religión, salud (incluida la salud mental), vida sexual y datos biométricos son **datos sensibles**: no se infieren ni se usan para segmentar o pautar. Meta retiró en 2022 la segmentación por política, religión, salud y orientación sexual. Si una tarea llega a tener nombres de personas, se queda en Mapeo Electoral, en la computadora del Mtro. Joab.

## 1. Las ideas base

1. **El voto es un gusto, no una decisión.** Una decisión pondera variables y tiene un momento (taxi o Uber en el aeropuerto). El voto no: se forma como el equipo al que le vas, por exposición a emociones (familia, amigos, gente que admiras). Por eso Domo **persuade**, no "convence" con listas de propuestas.
2. **Cómo se estudia cada uno:**
   - la decisión se mide con estudios cuantitativos y demográficos (quién es alguien);
   - el gusto se entiende con estudios etnográficos y psicográficos (qué siente alguien).
   Domo usa los dos: lo cuantitativo ya está en Mapeo Electoral; lo psicográfico se arma con esta metodología.
3. **La sociedad red es adolescente.** No es una edad, es el estado mental de cualquiera frente al celular: ingenuo sobre el amor, opinionado, con hambre de pertenencia, acosador, incomprendido, hormonal, odia a sus padres (al gobierno), se cree inmortal, bipolar. El mensaje digital se escribe para ese estado: elemental, emocional, de pertenencia.

## 2. Cada red y su uso (cifras de la ponencia, no verificadas)

| Red | Penetración* | Edad promedio* | Para qué la usa la gente | Qué le funciona a Domo |
|---|---|---|---|---|
| Facebook | 95% | 41 | Comunidad, chisme, punto de encuentro, contacto | Pertenencia: "somos de aquí", la colonia, el grupo, lo que pasó |
| X | 6% | 43 | Información dura, trabajo, difusión, deporte, seguridad | Postura y dato duro; marcar agenda con periodistas y líderes |
| Instagram | 76% | 34 | Entretenimiento; estatus y aspiración | Aspiración: lo que queremos ser, lo bien hecho, tras bambalinas |
| TikTok | 65% | 24 | Entretenimiento | Tendencia y humor; nada de discurso |

\* Cifras presentadas por el ponente sin fuente visible. **No se publican** como dato de Domo sin verificarlas con `investigacion-datos` (ENDUTIH de INEGI, Asociación de Internet MX, DataReportal) o sin atribuirlas al ponente.

## 3. Cómo se arma el mapa de segmentos de un territorio

Modelo de la ponencia ("Perfilado electoral digital"): partidistas por emoción a la izquierda y "sin opinión" por psicografía a la derecha, cada bloque con su tamaño.

### 3.1 Partidistas: por emoción, no solo duro o blando
Por cada partido o bloque relevante:

| Subsegmento | Qué siente | Qué hacer |
|---|---|---|
| Enojados | Coraje con su propio partido o con el gobierno | Propio: contener y escuchar. Ajeno: ofrecer salida digna, no humillar |
| Oportunistas | Van con quien gana o con quien les resuelve | Mostrar inevitabilidad y beneficio concreto |
| Duros | Identidad, no se mueven | Propio: movilizar. Ajeno: no gastar |

Cómo se estima: resultados y volatilidad por sección (Mapeo Electoral), encuesta con preguntas de emoción (enojo, decepción, esperanza) y etnografía de comentarios.

### 3.2 Sin opinión partidista: por psicografía
Se agrupan por lo que sienten en común: personalidad, valores, actitudes, intereses, miedos y aspiraciones. Ejemplos válidos:
- artistas;
- ambientalistas y animalistas;
- deportistas y fitness;
- emprendedores;
- jubilados y tercera edad;
- madres (incluidas madres solteras);
- estudiantes y centennials;
- gamers y tecnología;
- migrantes y sus familias.

Para cada microsegmento la ficha lleva: tamaño estimado, dónde está (municipios o secciones), miedo principal, aspiración principal, red donde está, tono y un mensaje de prueba.

**Comunidades de dato sensible** (religiosas, LGBT+): se les habla con contenido abierto que la gente elige ver, con aliados y en sus espacios, pero **no se perfilan ni se pautan** por esa condición.

### 3.3 Lo que Domo NO hace: "psicopatografía"
La ponencia mostró microsegmentos por trastorno (paranoicos, hipocondriacos, TOC, histriónicos, narcisistas). **Domo no segmenta por salud mental ni por trastornos**: es dato sensible, Meta no lo permite y es éticamente inaceptable. Si un cliente o proveedor lo propone, se manda a `juridico-electoral`.

## 4. De dónde salen los datos (legal)

| Necesito | Fuente | Nivel |
|---|---|---|
| Tamaño de un microsegmento por interés (gamers, animalistas, fitness) | Estimaciones de público del Administrador de Anuncios de Meta (gratis, sin pautar) | Municipio o radio en km; rangos |
| Qué pautan los demás y a quién le llegan | Biblioteca de Anuncios de Meta (anuncios políticos) | Estado, edad, sexo |
| Hábitos digitales de la población | ENDUTIH (INEGI), Asociación de Internet MX, Google Trends | Estado |
| Comportamiento de la audiencia propia o del cliente | Estadísticas de las páginas (con acceso del cliente) | Página |
| Emociones, miedos, aspiraciones, lenguaje | Etnografía digital (§5), grupos focales, encuesta | Municipio o colonia |
| Comportamiento electoral | Mapeo Electoral: resultados, voto diferenciado, participación por edad | Sección |

## 5. Protocolo de etnografía digital

1. **Observar:** elegir de 5 a 10 espacios públicos del territorio (páginas de noticias locales, grupos públicos de compra-venta o de colonia, páginas del ayuntamiento y de actores) y un periodo (2 a 4 semanas).
2. **Recolectar** a mano o con la exportación que permita la plataforma. **Sin scraping automático** (viola las reglas de Meta). Se guardan solo textos, fecha y espacio, **sin nombres ni fotos de perfil**.
3. **Codificar** (lo hace `investigacion-datos`): tema, emoción (enojo, miedo, esperanza, orgullo, burla), miedo, aspiración, a quién culpa, lenguaje y palabras propias del lugar, y qué microsegmento aparece.
4. **Sintetizar:** el mapa de segmentos (§3) y un glosario del territorio (cómo nombra la gente sus problemas).
5. **Validar:** contrastar con datos de Mapeo Electoral y, si hay presupuesto, con encuesta o grupos focales.

## 6. Qué decirles: reglas para el mensaje

- Se escribe para el "adolescente digital": una idea por pieza, emoción antes que dato, pertenencia antes que propuesta.
- Primero el miedo o la aspiración del segmento, luego la solución, al final el candidato.
- La misma propuesta se cuenta distinto por segmento y por red (ver §2).
- Se prueba: 2 o 3 versiones por segmento con poca pauta; se queda la que más interactúa.

## 7. Quién hace qué
- `investigacion-datos`: tamaños de segmento, fuentes del §4, codificación de la etnografía.
- `estratega-electoral`: mapa de segmentos (§3) y prioridades, cruzado con los 7 segmentos por sección.
- `comunicacion-discurso`: mensajes por segmento y por red (§6).
- `planeacion-contenido`: reparto por red según §2.
- `juridico-electoral`: revisa cualquier uso de datos de proveedores y cualquier segmento cercano a dato sensible.
