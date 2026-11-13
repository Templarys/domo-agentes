# Oaxaca por distritos: tabla maestra (distritos electorales locales)

Preparado por el agente de Investigación y datos, 13 de noviembre de 2026. Solo datos públicos y agregados. **Borrador interno: debe pasar por Revisión antes de usarse.**

## 1. Municipios por régimen electoral

| Dato | Cifra | Fuente |
|---|---|---|
| Municipios de Oaxaca | 570 | INE, acuerdo INE/CG526/2026, marco geográfico electoral 2026-2027 (aprobado el 3 de septiembre de 2026): https://sidof.segob.gob.mx/notas/docFuente/5800306 |
| Eligen por **partidos políticos** | **152** | Resulta de 570 menos los 418 del catálogo de Sistemas Normativos Indígenas (IEEPCO, acuerdo IEEPCO-CG-SNI-17/2025, 25 de junio de 2025: https://www.ieepco.org.mx/archivos/acuerdos/2025/IEEPCO_CG_SNI_17_2025.pdf). La cifra de 152 municipios para el Proceso Electoral Local 2026-2027 se publicó en la declaratoria de inicio del IEEPCO del 26 de octubre de 2026, según nota de prensa: https://municipiosdigitales.com/ieepco-declara-el-inicio-del-proceso-electoral-local-2026-2027/ |
| Eligen por Sistemas Normativos Indígenas | 418 | IEEPCO, catálogo SNI 2024-2025 (IEEPCO-CG-SNI-17/2025), con 418 dictámenes |

**Por qué a veces aparece 153:** hasta febrero de 2024 eran 153 por partidos y 417 por SNI. San Baltazar Chichicápam (DL 17) pasó al régimen de SNI por consulta a la comunidad: el acuerdo IEEPCO-CG-SNI-41/2023 ordenó la consulta y el IEEPCO-CG-SNI-09/2024 (23 de febrero de 2024) aprobó el cambio (https://www.ieepco.org.mx/archivos/acuerdos/2024/IEEPCO_CG_SNI_09_2024.pdf). La página «Historia» del IEEPCO (https://www.ieepco.org.mx/historia) todavía dice 153/417: es texto viejo.

**Lista de los 152 municipios:** se tomó de Wikipedia, «Anexo:Presidentes municipales de Oaxaca (2025-2027)» (https://es.wikipedia.org/wiki/Anexo:Presidentes_municipales_de_Oaxaca_(2025-2027)): son los ayuntamientos electos por partidos en 2024. Los 152 nombres coinciden con el catálogo distrital y Chichicápam no aparece. **Falta cotejarla con un catálogo oficial del IEEPCO.**

## 2. Marco de distritos locales

- **25 distritos locales de mayoría relativa** en Oaxaca, con 570 municipios y 2,567 secciones. Fuente: INE/CG526/2026 (liga de arriba). El acuerdo solo trae totales; no trae municipios por distrito.
- La **demarcación vigente** y sus cabeceras son las del acuerdo **INE/CG870/2022** (14 de diciembre de 2022). Municipios y cabeceras de cada distrito vienen del **Anexo 3B «Descriptivo de la Distritación Electoral Local» del IEEPCO** (noviembre de 2022), que ya está en el programa Mapeo Electoral (`mapeo/referencia/oaxaca_distritos_locales.json`). Página del IEEPCO: https://www.ieepco.org.mx/cartografia-electoral
- El Anexo 3B suma 2,508 secciones. El marco de 2026 tiene 2,567. La diferencia viene de cambios de secciones posteriores a 2022, entre ellos el acuerdo INE/CG33/2025 (límites de Santa María Atzompa con San Lorenzo Cacaotepec, y de Villa de Zaachila con San Bartolo Coyotepec, Santa Catarina Quiané y San Martín Tilcajete) y el INE/DERFE/0001/2026. **Las secciones por municipio pueden haber cambiado.** No hay indicios de que haya cambiado qué municipios forman cada distrito, pero no se pudo comprobar con la cartografía de 2026.
- Hay 6 municipios repartidos entre dos o tres distritos: Tuxtepec, Ojitlán, Santiago Tlazoyaltepec, Matías Romero, Guichicovi y Oaxaca de Juárez. Además hay **homónimos**: San Juan Mixtepec (DL 7 y DL 24) y San Pedro Mixtepec (DL 23 = Puerto Escondido, por partidos; DL 24 = el de Miahuatlán, por SNI) son municipios distintos.
- Según el Anexo 3B, los 25 distritos son indígenas (40% o más de población indígena o afromexicana).

**Lista nominal por distrito local: INCLUIDA (corte 29-oct-2026).** La suma estatal de las 2,566 secciones con datos da 3,175,705 de lista nominal y 3,210,302 de padrón, igual al estadístico oficial. 23 secciones creadas después de 2022 (40,177 en lista nominal, 1.3 %) no vienen en el catálogo de 2022 y están en municipios repartidos entre distritos (San Juan Bautista Tuxtepec: DL 1, 2 o 3; Oaxaca de Juárez: DL 12 o 13), así que no se asignaron; en esos 5 distritos la cifra es un mínimo. Para el reparto exacto, usar la cartografía 2026 del INE en Mapeo Electoral.

**Regiones:** se asignó la región del distrito rentístico de la cabecera, entre las 8 regiones de Oaxaca (COPLADE Oaxaca, p. ej. Diagnóstico Regional Sierra Sur, que agrupa los distritos de Putla, Sola de Vega, Miahuatlán y Yautepec: https://www.oaxaca.gob.mx/coplade/wp-content/uploads/sites/29/2021/04/DR-Sierra-Sur.pdf). Varios distritos electorales cruzan regiones; se indica entre paréntesis.

**Convenciones:** los municipios **en negritas** eligen por partidos políticos; los demás, por Sistemas Normativos Indígenas. Los nombres van como en el catálogo del Anexo 3B (sin acentos). «[n secc.]» es el número de secciones del municipio en ese distrito según el Anexo 3B (2022).

## 3. Resumen

| DL | Cabecera | Región | Municipios | Por partidos | Lista nominal 29-oct-2026 | Padrón 29-oct-2026 | Distintivo propuesto | Confianza del distintivo |
|---|---|---|---|---|---|---|---|---|
| 1 | San Felipe Jalapa de Diaz | Papaloapan | 8 | 8 | 114,347 (mín.) | 115,727 (mín.) | Huipil mazateco bordado de San Felipe Jalapa de Díaz | Media |
| 2 | San Juan Bautista Tuxtepec | Papaloapan | 2 | 2 | 103,877 (mín.) | 104,599 (mín.) | Huipiles de la danza Flor de Piña | Media |
| 3 | Loma Bonita | Papaloapan | 10 | 9 | 108,146 (mín.) | 109,299 (mín.) | La piña de Loma Bonita | Media |
| 4 | Teotitlan de Flores Magon | Cañada | 42 | 10 | 128,694 | 130,357 | Huipil mazateco de Huautla de Jiménez | Buena (acervo museográfico) |
| 5 | Asuncion Nochixtlan | Mixteca | 72 | 7 | 110,782 | 112,188 | Conventos dominicos del siglo XVI de la Mixteca Alta: Yanhuitlán, Teposcolula | Buena |
| 6 | Heroica Ciudad de Huajuapan de Leon | Mixteca | 44 | 24 | 143,617 | 145,364 | Tejido de palma de la Mixteca | Media |
| 7 | Putla Villa de Guerrero | Sierra Sur | 17 | 6 | 121,707 | 123,136 | Huipil triqui de telar de cintura | Media |
| 8 | Heroica Ciudad de Tlaxiaco | Mixteca | 43 | 4 | 123,479 | 124,715 | Tianguis de los sábados de Tlaxiaco, plaza tradicional de la Mixteca Alta | Media |
| 9 | Ixtlan de Juarez | Sierra Norte | 63 | 0 | 114,764 | 116,182 | Capulálpam de Méndez, Pueblo Mágico de la Sierra Juárez | Buena (Capulálpam, fuente oficial estatal) |
| 10 | San Pedro y San Pablo Ayutla | Sierra Norte | 21 | 2 | 112,269 | 113,826 | Blusa mixe | Buena |
| 11 | Matias Romero (Matias Romero Avendaño) | Istmo | 13 | 11 | 114,455 | 115,563 | Selva de los Chimalapas | Buena |
| 12 | Santa Lucia del Camino | Valles Centrales | 5 | 3 | 153,439 (mín.) | 155,072 (mín.) | SIN PROPUESTA VERIFICADA | Pendiente |
| 13 | Oaxaca de Juarez | Valles Centrales | 2 | 1 | 122,235 (mín.) | 123,427 (mín.) | Centro Histórico de Oaxaca y zona arqueológica de Monte Albán, Patrimonio Mundial | Muy buena (fuente oficial) |
| 14 | Villa de Etla | Valles Centrales | 15 | 5 | 120,541 | 122,173 | Barro verde vidriado de Santa María Atzompa | Buena |
| 15 | Santa Cruz Xoxocotlan | Valles Centrales | 6 | 3 | 146,769 | 148,415 | Alebrijes | Buena |
| 16 | Zimatlan de Alvarez | Valles Centrales | 33 | 6 | 109,557 | 111,070 | Mezcal destilado en olla de barro de Villa Sola de Vega | Débil |
| 17 | Tlacolula de Matamoros | Valles Centrales | 28 | 2 | 115,395 | 116,799 | Tapetes de lana de Teotitlán del Valle | Muy buena (fuente oficial) |
| 18 | Santo Domingo Tehuantepec | Istmo | 22 | 8 | 118,793 | 120,280 | Traje de tehuana | Buena |
| 19 | Ciudad Ixtepec | Istmo | 7 | 7 | 134,099 | 135,300 | Alfarería de Asunción Ixtaltepec | Débil (fuente no oficial) |
| 20 | Juchitan de Zaragoza (Heroica Ciudad de Juchitan de Zaragoza) | Istmo | 7 | 6 | 130,393 | 131,199 | Las Velas istmeñas de Juchitán | Buena (fuente oficial estatal) |
| 21 | Ocotlan de Morelos | Valles Centrales | 33 | 7 | 132,382 | 133,826 | Barro negro de San Bartolo Coyotepec | Media (fuente no oficial; dato muy conocido) |
| 22 | Santiago Pinotepa Nacional | Costa | 23 | 19 | 137,196 | 138,334 | Tinte de caracol púrpura y pozahuanco | Buena |
| 23 | Puerto Escondido (San Pedro Mixtepec) | Costa | 12 | 3 | 132,279 | 133,455 | Playa Zicatela de Puerto Escondido, ola de surf de talla mundial | Media (fuente turística) |
| 24 | Miahuatlan de Porfirio Diaz | Sierra Sur | 40 | 2 | 139,729 | 141,051 | Mezcal de la región miahuateca | Media (académica) |
| 25 | San Pedro Pochutla | Costa | 9 | 3 | 146,584 | 148,368 | Café Pluma | Buena |

Total de municipios por partidos que se encontraron en el catálogo: 152 (cada uno contado una vez aunque esté en varios distritos).

Lista nominal y padrón: INE, Datos Abiertos DERFE, archivo `DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx`, corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx). Suma por sección con el catálogo del Anexo 3B del IEEPCO (cálculo de Domo). 75 secciones nuevas (posteriores a 2022) se asignaron por municipio porque su municipio está completo en un solo distrito (DL 8, 9, 14, 15, 20, 22, 23 y 25). «(mín.)»: faltan 23 secciones nuevas sin asignar (Tuxtepec 5 secciones, 11,363 en lista; Oaxaca de Juárez 18 secciones, 28,814 en lista). Suma de los 25 distritos: 3,135,528 de lista y 3,169,725 de padrón; con las 23 sin asignar: 3,175,705 y 3,210,302, igual al estadístico estatal del INE al 29-oct-2026 (residentes en México).

## 4. Fichas por distrito

### Distrito local 01 · San Felipe Jalapa de Diaz

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | San Felipe Jalapa de Diaz | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Papaloapan (incluye municipios de la Cañada) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 8 (8 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 107 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 71.7% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 114,347 (mínimo: hay secciones nuevas de 2023-2026 sin asignar en su municipio) · padrón 115,727 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Huipil mazateco bordado de San Felipe Jalapa de Díaz (aves y flores; de uso diario y de fiesta) | Mexican Textiles (sitio especializado), Mazateca – Jalapa de Díaz: https://mexicantextiles.com/grouppages/groups/mazateca/jalapa1/index.htm |
| Notas | Media: fuente especializada no oficial. | |

**Municipios:** **Acatlan de Perez Figueroa** [33 secc.]; **Cosolapa** [10 secc.]; **San Felipe Jalapa de Diaz** [11 secc.]; **San Jose Independencia** [3 secc.]; **San Jose Tenango** [16 secc.]; **San Juan Bautista Tuxtepec** (parcial; también en DL 2, 3) [1 secc.]; **San Miguel Soyaltepec** [24 secc.]; **San Pedro Ixcatlan** [9 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_01_SAN_FELIPE_JALAPA_DE_DIAZ.pdf

### Distrito local 02 · San Juan Bautista Tuxtepec

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | San Juan Bautista Tuxtepec | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Papaloapan | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 2 (2 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 74 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 52.0% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 103,877 (mínimo: hay secciones nuevas de 2023-2026 sin asignar en su municipio) · padrón 104,599 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Huipiles de la danza Flor de Piña (creada en 1958 por la maestra tuxtepecana Paulina Solís Ocampo para la Guelaguetza) | México Desconocido, «Paulina Solís, Flor de Piña»: https://www.mexicodesconocido.com.mx/paulina-solis-flor-de-pina.html ; El Universal, «Where huipiles are born»: https://www.eluniversal.com.mx/english/where-huipiles-born/ |
| Notas | Media. Es danza de toda la región del Papaloapan; no presentarla como solo de Tuxtepec. | |

**Municipios:** **San Juan Bautista Tuxtepec** (parcial; también en DL 1, 3) [73 secc.]; **San Lucas Ojitlan** (parcial; también en DL 3) [1 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_02_SAN_JUAN_BAUTISTA_TUXTEPEC.pdf

### Distrito local 03 · Loma Bonita

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Loma Bonita | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Papaloapan | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 10 (9 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 91 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 69.9% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 108,146 (mínimo: hay secciones nuevas de 2023-2026 sin asignar en su municipio) · padrón 109,299 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | La piña de Loma Bonita (conocida históricamente como «capital de la piña») | Revista de Geografía Agrícola (Chapingo), estudio sobre la piña en Loma Bonita: https://revistas.chapingo.mx/geografia/article/download/r.rga.2019.64.11/rga.2019.64.11/226 |
| Notas | Media. El propio estudio dice que el título es histórico y que hoy pesa menos frente a Veracruz; evitar decir «primer productor». | |

**Municipios:** **Ayotzintepec** [3 secc.]; **Loma Bonita** [32 secc.]; **San Felipe Usila** [5 secc.]; **San Jose Chiltepec** [6 secc.]; **San Juan Bautista Tlacoatzintepec** [1 secc.]; **San Juan Bautista Tuxtepec** (parcial; también en DL 1, 2) [4 secc.]; **San Juan Bautista Valle Nacional** [15 secc.]; **San Lucas Ojitlan** (parcial; también en DL 2) [11 secc.]; **Santa Maria Jacatepec** [6 secc.]; Santiago Jocotepec [8 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_03_LOMA_BONITA.pdf

### Distrito local 04 · Teotitlan de Flores Magon

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Teotitlan de Flores Magon | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Cañada | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 42 (10 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 136 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 86.1% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 128,694 · padrón 130,357 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Huipil mazateco de Huautla de Jiménez (tres lienzos de manta, bordado de aves y flores, listones) | Fundación Alfredo Harp Helú Oaxaca, repositorio, «Antiguo huipil de Huautla de Jiménez»: https://repositorio.fahho.mx/handle/123456789/36355 |
| Notas | Buena (acervo museográfico). Evitar asociar Huautla con hongos/turismo místico: estereotipo. | |

**Municipios:** Concepcion Papalo [4 secc.]; Cuyamecalco Villa de Zaragoza [4 secc.]; Eloxochitlan de Flores Magon [4 secc.]; **Huautepec** [4 secc.]; **Huautla de Jimenez** [19 secc.]; Mazatlan Villa de Flores [10 secc.]; San Andres Teotilalpam [2 secc.]; San Antonio Nanahuatipam [1 secc.]; **San Bartolome Ayautla** [3 secc.]; San Francisco Chapulapa [1 secc.]; San Francisco Huehuetlan [1 secc.]; San Jeronimo Tecoatl [2 secc.]; **San Juan Bautista Cuicatlan** [13 secc.]; Chiquihuitlan de Benito Juarez [2 secc.]; **San Juan Coatzospam** [1 secc.]; San Juan de los Cues [2 secc.]; San Juan Tepeuxila [4 secc.]; San Lorenzo Cuaunecuiltitla [1 secc.]; San Lucas Zoquiapam [4 secc.]; San Martin Toxpalan [2 secc.]; San Mateo Yoloxochitlan [2 secc.]; San Miguel Santa Flor [1 secc.]; San Pedro Jaltepetongo [1 secc.]; San Pedro Jocotipac [1 secc.]; San Pedro Ocopetatillo [1 secc.]; San Pedro Sochiapam [3 secc.]; San Pedro Teutila [3 secc.]; Santa Ana Ateixtlahuaca [1 secc.]; Santa Ana Cuauhtemoc [1 secc.]; Santa Cruz Acatepec [1 secc.]; Santa Maria la Asuncion [2 secc.]; Santa Maria Chilchotla [17 secc.]; Santa Maria Ixcatlan [1 secc.]; Santa Maria Papalo [1 secc.]; **Santa Maria Tecomavaca** [1 secc.]; **Santa Maria Teopoxco** [2 secc.]; **Santa Maria Texcatitlan** [1 secc.]; Santa Maria Tlalixtac [1 secc.]; Santiago Texcalcingo [2 secc.]; Santos Reyes Papalo [1 secc.]; **Teotitlan de Flores Magon** [6 secc.]; **Valerio Trujano** [2 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_04_TEOTITLAN_DE_FLORES_MAGON.pdf

### Distrito local 05 · Asuncion Nochixtlan

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Asuncion Nochixtlan | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Mixteca (incluye municipios de Valles Centrales del distrito de Etla) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 72 (7 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 161 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 75.1% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 110,782 · padrón 112,188 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Conventos dominicos del siglo XVI de la Mixteca Alta: Yanhuitlán, Teposcolula (capilla abierta) y Coixtlahuaca | INAH, Boletín de Monumentos Históricos: https://revistas.inah.gob.mx/index.php/boletinmonumentos/article/download/2034/1963/3543 ; Archivo Dominicano (2012): https://archivodominicano.dominicos.org/ojs/article/download/290/capilla-Teposcolula-Mixteca-Mexico/41 |
| Notas | Buena. Es patrimonio arquitectónico, no artesanía; los tres municipios están en este distrito. | |

**Municipios:** **Asuncion Nochixtlan** [8 secc.]; Concepcion Buenavista [2 secc.]; Magdalena Jaltepec [4 secc.]; Magdalena Yodocono de Porfirio Diaz [1 secc.]; Magdalena Zahuatlan [1 secc.]; **San Agustin Atenango** [2 secc.]; San Andres Lagunas [1 secc.]; San Andres Nuxiño [2 secc.]; San Andres Sinaxtla [1 secc.]; San Antonio Acutla [1 secc.]; San Bartolo Soyaltepec [2 secc.]; San Cristobal Suchixtlahuaca [1 secc.]; San Francisco Chindua [1 secc.]; San Francisco Jaltepetongo [2 secc.]; San Francisco Nuxaño [1 secc.]; **San Francisco Telixtlahuaca** [6 secc.]; San Francisco Teopan [1 secc.]; San Jeronimo Sosola [4 secc.]; San Juan Bautista Atatlahuca [1 secc.]; San Juan Bautista Coixtlahuaca [4 secc.]; San Juan Diuxi [2 secc.]; San Juan Sayultepec [1 secc.]; San Juan Tamazola [4 secc.]; San Juan Teposcolula [2 secc.]; San Juan Yucuita [1 secc.]; San Mateo Etlatongo [1 secc.]; San Mateo Tlapiltepec [1 secc.]; San Miguel Chicahua [2 secc.]; San Miguel Huautla [2 secc.]; San Miguel Peras [2 secc.]; San Miguel Piedras [1 secc.]; San Miguel Tecomatlan [1 secc.]; San Miguel Tequixtepec [3 secc.]; San Miguel Tulancingo [1 secc.]; **San Pablo Huitzo** [5 secc.]; San Pedro Coxcaltepec Cantaros [2 secc.]; San Pedro Nopala [1 secc.]; San Pedro Teozacoalco [1 secc.]; San Pedro Tidaa [2 secc.]; San Pedro Topiltepec [1 secc.]; **San Pedro y San Pablo Teposcolula** [5 secc.]; San Pedro Yucunama [1 secc.]; San Vicente Nuñu [1 secc.]; Santa Ines de Zaragoza [3 secc.]; Santa Magdalena Jicotlan [1 secc.]; Santa Maria Apazco [2 secc.]; Santa Maria Chachoapam [1 secc.]; Villa de Chilapa de Diaz [3 secc.]; Santa Maria Nativitas [2 secc.]; Santa Maria Peñoles [5 secc.]; Santiago Apoala [2 secc.]; Santiago Huauclilla [3 secc.]; Santiago Ihuitlan Plumas [2 secc.]; Santiago Nacaltepec [4 secc.]; Santiago Nejapilla [1 secc.]; Santiago Tenango [2 secc.]; Santiago Tepetlapa [1 secc.]; Santiago Tilantongo [4 secc.]; Santiago Tillo [1 secc.]; Santiago Tlazoyaltepec (parcial; también en DL 16) [4 secc.]; Santo Domingo Nuxaa [3 secc.]; Santo Domingo Tlatayapam [1 secc.]; Santo Domingo Tonaltepec [1 secc.]; Santo Domingo Yanhuitlan [2 secc.]; Santo Domingo Yodohino [1 secc.]; **Villa Tejupam de la Union** [3 secc.]; Teotongo [1 secc.]; Tepelmeme Villa de Morelos [3 secc.]; **H. Villa Tezoatlán de Segura y Luna (catálogo: "H Villa Tezoatlan Segura y Luna Cuna Ind Oax")** [13 secc.]; Tlacotepec Plumas [1 secc.]; La Trinidad Vista Hermosa [1 secc.]; Yutanduchi de Guerrero [1 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_05_ASUNCION_NOCHIXTLAN.pdf

### Distrito local 06 · Heroica Ciudad de Huajuapan de Leon

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Heroica Ciudad de Huajuapan de Leon | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Mixteca | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 44 (24 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 175 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 59.9% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 143,617 · padrón 145,364 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Tejido de palma de la Mixteca (sombrero, tenate, petate; palma soyate) | México Desconocido, «Palma mixteca o soyate»: https://www.mexicodesconocido.com.mx/palma-mixteca-o-soyate.html |
| Notas | Media. Tradición regional de la Mixteca Baja; Huajuapan es centro de acopio y venta. | |

**Municipios:** **Asuncion Cuyotepeji** [1 secc.]; Calihuala [3 secc.]; Cosoltepec [3 secc.]; **Fresnillo de Trujano** [2 secc.]; **Guadalupe de Ramirez** [3 secc.]; **Heroica Ciudad de Huajuapan de Leon** [38 secc.]; **Mariscala de Juarez** [7 secc.]; **San Andres Dinicuiti** [3 secc.]; San Andres Tepetlapa [1 secc.]; San Francisco Tlapancingo [1 secc.]; **San Jeronimo Silacayoapilla** [2 secc.]; San Jorge Nuchita [3 secc.]; San Jose Ayuquila [2 secc.]; **San Juan Bautista Suchitepec** [2 secc.]; San Juan Bautista Tlachichilco [2 secc.]; San Juan Cieneguilla [1 secc.]; **San Juan Ihualtepec** [2 secc.]; San Lorenzo Victoria [2 secc.]; **San Marcos Arteaga** [3 secc.]; **San Martin Zacatepec** [2 secc.]; San Mateo Nejapam [1 secc.]; **San Miguel Ahuehuetitlan** [2 secc.]; **San Miguel Amatitlan** [9 secc.]; **San Nicolas Hidalgo** [1 secc.]; San Pedro y San Pablo Tequixtepec [7 secc.]; San Simon Zahuatlan [1 secc.]; Santa Catarina Zapoquila [1 secc.]; Santa Cruz de Bravo [1 secc.]; **Santa Cruz Tacache de Mina** [3 secc.]; Santa Maria Camotlan [2 secc.]; **Santiago Ayuquililla** [2 secc.]; **Santiago Cacaloxtepec** [3 secc.]; **Santiago Chazumba** [10 secc.]; Santiago del Rio [2 secc.]; **Santiago Huajolotitlan** [4 secc.]; Santiago Miltepec [1 secc.]; **Santiago Tamazola** [6 secc.]; Santiago Yucuyachi [2 secc.]; **Santo Domingo Tonala** [7 secc.]; Santos Reyes Yucuna [1 secc.]; **Silacayoapam** [15 secc.]; **Villa de Tamazulapam del Progreso** [7 secc.]; **Zapotitlan Lagunas** [3 secc.]; Zapotitlan Palmas [1 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_06_H_CD_DE_HUAJUAPAN_DE_LEON.pdf

### Distrito local 07 · Putla Villa de Guerrero

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Putla Villa de Guerrero | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Sierra Sur (distrito rentístico de Putla; incluye municipios mixtecos de Juxtlahuaca) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 17 (6 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 108 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 74.5% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 121,707 · padrón 123,136 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Huipil triqui de telar de cintura (San Martín Itunyoso y comunidades triquis del distrito) | AILLA, Universidad de Texas, «The process of making a traditional blouse» (San Martín Itunyoso, 2014): https://islandora-ailla.lib.utexas.edu/islandora/object/ailla%3A246702 |
| Notas | Media. Alternativa: huipil amuzgo de San Pedro Amuzgos (también en el distrito; sin fuente verificada aquí). | |

**Municipios:** Coicoyan de las Flores [4 secc.]; Constancia del Rosario [3 secc.]; Mesones Hidalgo [3 secc.]; Ixpantepec Nieves [3 secc.]; **Putla Villa de Guerrero** [18 secc.]; La Reforma [3 secc.]; **San Juan Cacahuatepec** [7 secc.]; San Juan Mixtepec (homónimo; distinto del de DL 24) [11 secc.]; San Martin Itunyoso [1 secc.]; San Martin Peras [6 secc.]; San Miguel Tlacotepec [4 secc.]; **San Pedro Amuzgos** [3 secc.]; San Sebastian Tecomaxtlahuaca [9 secc.]; **Santa Maria Ipalapa** [3 secc.]; **Santa Maria Zacatepec** [10 secc.]; **Santiago Juxtlahuaca** [19 secc.]; Santos Reyes Tepejillo [1 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_07_PUTLA_VILLA_DE_GUERRERO.pdf

### Distrito local 08 · Heroica Ciudad de Tlaxiaco

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Heroica Ciudad de Tlaxiaco | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Mixteca | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 43 (4 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 121 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 85.2% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 123,479 · padrón 124,715 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Tianguis de los sábados de Tlaxiaco, plaza tradicional de la Mixteca Alta | México Desconocido, «Oaxaca y sus mercados»: https://www.mexicodesconocido.com.mx/oaxaca-y-sus-mercados-el-encuentro-de-lo-diverso.html |
| Notas | Media. No es artesanía en sí; si se prefiere artesanía, usar palma o textil mixteco (sin fuente específica de Tlaxiaco). | |

**Municipios:** **Chalcatongo de Hidalgo** [7 secc.]; Magdalena Peñasco [3 secc.]; San Agustin Tlacotepec [2 secc.]; **San Andres Cabecera Nueva** [3 secc.]; San Antonino Monte Verde [4 secc.]; San Antonio Sinicahua [1 secc.]; San Bartolome Yucuañe [1 secc.]; San Cristobal Amoltepec [1 secc.]; San Esteban Atatlahuca [4 secc.]; San Juan Achiutla [1 secc.]; San Juan Ñumi [5 secc.]; San Juan Teita [1 secc.]; San Martin Huamelulpam [1 secc.]; San Mateo Peñasco [2 secc.]; San Mateo Sindihui [1 secc.]; San Miguel Achiutla [1 secc.]; San Miguel el Grande [5 secc.]; San Pablo Tijaltepec [2 secc.]; San Pedro Martir Yucuxaco [2 secc.]; San Pedro Molinos [1 secc.]; San Sebastian Nicananduta [1 secc.]; Santa Catarina Tayata [1 secc.]; Santa Catarina Ticua [2 secc.]; Santa Catarina Yosonotu [3 secc.]; **Santa Cruz Itundujia** [8 secc.]; Santa Cruz Nundaco [1 secc.]; Santa Cruz Tacahua [1 secc.]; Santa Cruz Tayata [1 secc.]; Santa Lucia Monteverde [5 secc.]; Santa Maria del Rosario [1 secc.]; Santa Maria Nduayaco [2 secc.]; Santa Maria Tataltepec [1 secc.]; Santa Maria Yolotepec [1 secc.]; Santa Maria Yosoyua [1 secc.]; Santa Maria Yucuhiti [3 secc.]; Santiago Amoltepec [5 secc.]; Santiago Nundiche [2 secc.]; Santiago Nuyoo [2 secc.]; Santiago Yolomecatl [2 secc.]; Santiago Yosondua [7 secc.]; Santo Domingo Ixcatlan [1 secc.]; Santo Tomas Ocotepec [2 secc.]; **Heroica Ciudad de Tlaxiaco** [20 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_08_H_CD_DE_TLAXIACO.pdf

### Distrito local 09 · Ixtlan de Juarez

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Ixtlan de Juarez | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Sierra Norte (incluye municipios de Valles Centrales y del Papaloapan/Choapam) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 63 (0 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 121 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 73.1% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 114,764 · padrón 116,182 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Capulálpam de Méndez, Pueblo Mágico de la Sierra Juárez; alternativa: huipil de Villa Hidalgo Yalálag | Sectur Oaxaca, Plan de Marketing Capulálpam de Méndez: https://www.oaxaca.gob.mx/sectur/wp-content/uploads/sites/65/2020/12/Plan-de-Marketing-Capulalpam-de-Mendez.pdf ; Redalyc, estudio sobre el huipil de Yalálag: https://www.redalyc.org/journal/6077/607764906004/607764906004.pdf |
| Notas | Buena (Capulálpam, fuente oficial estatal). | |

**Municipios:** Abejones [1 secc.]; Guelatao de Juarez [1 secc.]; Ixtlan de Juarez [7 secc.]; Natividad [1 secc.]; Nuevo Zoquiapam [1 secc.]; San Agustin Etla [2 secc.]; San Andres Solaga [2 secc.]; San Andres Yaa [1 secc.]; San Baltazar Yatzachi el Bajo [3 secc.]; San Bartolome Zoogocho [1 secc.]; San Cristobal Lachirioag [1 secc.]; San Francisco Cajonos [1 secc.]; San Ildefonso Villa Alta [3 secc.]; San Juan Atepec [2 secc.]; San Juan Bautista Guelache [3 secc.]; San Juan Bautista Jayacatlan [1 secc.]; San Juan Chicomezuchil [1 secc.]; San Juan Comaltepec [2 secc.]; San Juan del Estado [2 secc.]; San Juan Evangelista Analco [1 secc.]; San Juan Juquila Vijanos [2 secc.]; San Juan Lalana [7 secc.]; San Juan Petlapa [2 secc.]; San Juan Quiotepec [2 secc.]; San Juan Tabaa [1 secc.]; San Juan Yaee [2 secc.]; San Juan Yatzona [1 secc.]; San Mateo Cajonos [1 secc.]; San Melchor Betaza [1 secc.]; San Miguel Aloapam [2 secc.]; San Miguel Amatlan [3 secc.]; San Miguel del Rio [1 secc.]; Villa Talea de Castro [3 secc.]; San Miguel Yotao [1 secc.]; San Pablo Etla [3 secc.]; San Pablo Macuiltianguis [1 secc.]; San Pablo Yaganiza [1 secc.]; San Pedro Cajonos [1 secc.]; San Pedro Yaneri [1 secc.]; San Pedro Yolox [2 secc.]; Santa Ana Yareni [1 secc.]; Santa Catarina Ixtepeji [4 secc.]; Santa Catarina Lachatao [3 secc.]; Santa Maria del Tule [6 secc.]; Santa Maria Jaltianguis [1 secc.]; Santa Maria Temaxcalapa [1 secc.]; Santa Maria Yalina [1 secc.]; Santa Maria Yavesia [1 secc.]; Santiago Camotlan [2 secc.]; Santiago Choapam [4 secc.]; Santiago Comaltepec [2 secc.]; Santiago Lalopa [1 secc.]; Santiago Laxopa [2 secc.]; Santiago Xiacui [2 secc.]; Santiago Zoochila [1 secc.]; Santo Domingo Roayaga [1 secc.]; Santo Domingo Tomaltepec [2 secc.]; Santo Domingo Xagacia [1 secc.]; Tanetze de Zaragoza [2 secc.]; Teococuilco de Marcos Perez [1 secc.]; Tlalixtac de Cabrera [4 secc.]; Capulalpam de Mendez [1 secc.]; Villa Hidalgo [2 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2025/Cartografia/DTTO_09_IXTLAN_DE_JUAREZ_v2025.pdf (actualizado en 2025)

### Distrito local 10 · San Pedro y San Pablo Ayutla

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | San Pedro y San Pablo Ayutla | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Sierra Norte (región Mixe; incluye parte del Istmo) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 21 (2 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 94 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 88.5% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 112,269 · padrón 113,826 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Blusa mixe (xaam nïxuy) de Santa María Tlahuitoltepec | Milenio, «Mixes denuncian el plagio de sus diseños ancestrales» (2015): https://www.milenio.com/cultura/mixes-denuncian-el-plagio-de-sus-disenos-ancestrales |
| Notas | Buena. Si se menciona el caso de plagio (Isabel Marant, 2015), hacerlo con respeto a la autoría comunitaria. | |

**Municipios:** Asuncion Cacalotepec [3 secc.]; **Matias Romero Avendaño** (parcial; también en DL 11) [2 secc.]; Mixistlan de la Reforma [2 secc.]; San Juan Cotzocon [10 secc.]; **San Juan Guichicovi** (parcial; también en DL 11) [22 secc.]; San Juan Juquila Mixes [4 secc.]; San Juan Mazatlan [9 secc.]; San Lucas Camotlan [1 secc.]; San Miguel Quetzaltepec [3 secc.]; San Pedro Ocotepec [1 secc.]; San Pedro y San Pablo Ayutla [4 secc.]; Santa Maria Alotepec [2 secc.]; Santa Maria Tepantlali [2 secc.]; Santa Maria Tlahuitoltepec [4 secc.]; Santiago Atitlan [2 secc.]; Santiago Ixcuintepec [1 secc.]; Santiago Yaveo [5 secc.]; Santiago Zacatepec [4 secc.]; Santo Domingo Tepuxtepec [3 secc.]; Tamazulapam del Espiritu Santo [5 secc.]; Totontepec Villa de Morelos [5 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_10_SAN_PEDRO_Y_SAN_PABLO_AYUTLA.pdf

### Distrito local 11 · Matias Romero

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Matias Romero, municipio de Matias Romero Avendaño | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Istmo | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 13 (11 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 105 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 59.2% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 114,455 · padrón 115,563 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Selva de los Chimalapas (territorio zoque de San Miguel y Santa María Chimalapa, de alta biodiversidad) | SEMARNAT, presentación «Chimalapas» (2024): https://eventos.semarnat.gob.mx/files/uploads/rodolfo/2024/06/12/chimalapas.pdf |
| Notas | Buena. Distintivo natural, no artesanía. Ojo: hay conflicto de límites con Chiapas; no tocarlo en la pieza. | |

**Municipios:** **El Barrio de la Soledad** [10 secc.]; **Chahuites** [7 secc.]; **Matias Romero Avendaño** (parcial; también en DL 10) [24 secc.]; **Reforma de Pineda** [2 secc.]; **San Juan Guichicovi** (parcial; también en DL 10) [1 secc.]; San Miguel Chimalapa [6 secc.]; **San Pedro Tapanatepec** [9 secc.]; Santa Maria Chimalapa [6 secc.]; **Santa Maria Petapa** [10 secc.]; **Santiago Niltepec** [7 secc.]; **Santo Domingo Ingenio** [5 secc.]; **Santo Domingo Petapa** [9 secc.]; **Santo Domingo Zanatepec** [9 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_11_MATIAS_ROMERO.pdf

### Distrito local 12 · Santa Lucia del Camino

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Santa Lucia del Camino | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales (zona conurbada de la capital) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 5 (3 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 108 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 41.9% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 153,439 (mínimo: hay secciones nuevas de 2023-2026 sin asignar en su municipio) · padrón 155,072 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | SIN PROPUESTA VERIFICADA | No se encontró una artesanía documentada propia de Santa Lucía del Camino ni de los otros 4 municipios. |
| Notas | Pendiente: decide el Mtro. Joab. La única referencia hallada es la fiesta patronal del 13 de diciembre (EcuRed, no oficial). | |

**Municipios:** **Oaxaca de Juarez** (parcial; también en DL 13) [68 secc.]; San Agustin Yatareni [2 secc.]; San Sebastian Tutla [7 secc.]; **Santa Cruz Amilpas** [5 secc.]; **Santa Lucia del Camino** [26 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_12_SANTA_LUCIA_DEL_CAMINO.pdf

### Distrito local 13 · Oaxaca de Juarez

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Oaxaca de Juarez | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 2 (1 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 91 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 45.2% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 122,235 (mínimo: hay secciones nuevas de 2023-2026 sin asignar en su municipio) · padrón 123,427 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Centro Histórico de Oaxaca y zona arqueológica de Monte Albán, Patrimonio Mundial (UNESCO, 1987); la cantera verde del centro | UNESCO, Lista del Patrimonio Mundial, sitio 415: https://whc.unesco.org/es/list/415 |
| Notas | Muy buena (fuente oficial). Monte Albán abarca territorio de varios municipios conurbados. | |

**Municipios:** **Oaxaca de Juarez** (parcial; también en DL 12) [89 secc.]; San Andres Huayapam [2 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_13_OAXACA_DE_JUAREZ.pdf

### Distrito local 14 · Villa de Etla

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Villa de Etla | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 15 (5 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 53 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 46.6% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 120,541 · padrón 122,173 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Barro verde vidriado de Santa María Atzompa | México Desconocido, «Santa María Atzompa, pueblo que da vida al barro»: https://www.mexicodesconocido.com.mx/santa-maria-atzompa.html |
| Notas | Buena. Atzompa está en este distrito según el Anexo 3B. | |

**Municipios:** Guadalupe Etla [1 secc.]; Magdalena Apasco [4 secc.]; Nazareno Etla [2 secc.]; Reyes Etla [3 secc.]; San Andres Ixtlahuaca [1 secc.]; **San Andres Zautla** [2 secc.]; San Felipe Tejalapam [4 secc.]; **San Jacinto Amilpas** [5 secc.]; San Lorenzo Cacaotepec [5 secc.]; San Pedro Ixtlahuaca [2 secc.]; Santa Maria Atzompa [11 secc.]; **Santiago Suchilquitongo** [5 secc.]; Santo Tomas Mazaltepec [1 secc.]; **Soledad Etla** [3 secc.]; **Villa de Etla** [4 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_14_VILLA_DE_ETLA.pdf

### Distrito local 15 · Santa Cruz Xoxocotlan

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Santa Cruz Xoxocotlan | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 6 (3 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 40 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 48.5% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 146,769 · padrón 148,415 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Alebrijes (tallas de copal) de San Antonio Arrazola, comunidad de Santa Cruz Xoxocotlán | México Desconocido, «Manuel Jiménez Ramírez, el pionero de las tallas de madera en Oaxaca»: https://www.mexicodesconocido.com.mx/manuel-jimenez-tallas-madera-oaxaca.html |
| Notas | Buena. San Martín Tilcajete (otro centro de alebrijes) está en el DL 21. | |

**Municipios:** Animas Trujano [2 secc.]; **Cuilapam de Guerrero** [7 secc.]; San Raymundo Jalpan [1 secc.]; **Santa Cruz Xoxocotlan** [22 secc.]; Santa Maria Coyotepec [1 secc.]; **Villa de Zaachila** [7 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_15_SANTA_CRUZ_XOXOCOTLAN.pdf

### Distrito local 16 · Zimatlan de Alvarez

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Zimatlan de Alvarez | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales (incluye Sierra Sur: Villa Sola de Vega) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 33 (6 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 91 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 67.7% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 109,557 · padrón 111,070 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Mezcal destilado en olla de barro de Villa Sola de Vega | Mezcalistas (sitio especializado): https://www.mezcalistas.com/?p=75734 |
| Notas | Débil: solo fuentes de productores y blogs. Se repite el mezcal en el DL 24; conviene elegir otro distintivo para uno de los dos. | |

**Municipios:** Ayoquezco de Aldama [4 secc.]; **Cienega de Zimatlan** [2 secc.]; Magdalena Mixtepec [1 secc.]; San Antonino el Alto [2 secc.]; San Antonio Huitepec [6 secc.]; San Bernardo Mixtepec [2 secc.]; San Francisco Cahuacua [3 secc.]; San Francisco Sola [1 secc.]; San Ildefonso Sola [1 secc.]; San Jacinto Tlacotepec [1 secc.]; San Lorenzo Texmelucan [2 secc.]; San Miguel Mixtepec [2 secc.]; San Pablo Cuatro Venados [1 secc.]; **San Pablo Huixtepec** [6 secc.]; San Vicente Lachixio [1 secc.]; Santa Ana Tlapacoyan [2 secc.]; Santa Catarina Quiane [1 secc.]; Santa Cruz Mixtepec [3 secc.]; Santa Cruz Zenzontepec [8 secc.]; **Santa Gertrudis** [3 secc.]; Santa Ines del Monte [1 secc.]; Santa Ines Yatzeche [1 secc.]; Santa Maria Lachixio [1 secc.]; Santa Maria Sola [1 secc.]; Santa Maria Zaniza [1 secc.]; Santiago Minas [1 secc.]; Santiago Textitlan [2 secc.]; Santiago Tlazoyaltepec (parcial; también en DL 5) [1 secc.]; Santo Domingo Teojomulco [2 secc.]; **Villa Sola de Vega** [10 secc.]; **Trinidad Zaachila** [2 secc.]; San Mateo Yucutindoo [2 secc.]; **Zimatlan de Alvarez** [14 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_16_ZIMATLAN_DE_ALVAREZ.pdf

### Distrito local 17 · Tlacolula de Matamoros

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Tlacolula de Matamoros | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 28 (2 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 80 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 80.7% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 115,395 · padrón 116,799 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Tapetes de lana de Teotitlán del Valle (teñidos con grana cochinilla); Indicación Geográfica del IMPI | IMPI, Declaratoria de la Indicación Geográfica «Tapetes de Teotitlán, Santa Ana y San Miguel del Valle» (2022): https://www.gob.mx/cms/uploads/attachment/file/749823/IMPI.Declaracio_n_Tapetes_T._02.03.22.pdf |
| Notas | Muy buena (fuente oficial). Santa Ana del Valle también está en el distrito. | |

**Municipios:** Magdalena Teitipac [2 secc.]; Rojas de Cuauhtemoc [1 secc.]; San Baltazar Chichicapam [2 secc.]; San Bartolome Quialana [1 secc.]; San Dionisio Ocotepec [5 secc.]; San Francisco Lachigolo [1 secc.]; San Jeronimo Tlacochahuaya [4 secc.]; San Juan del Rio [1 secc.]; San Juan Guelavia [2 secc.]; San Juan Teitipac [2 secc.]; San Lorenzo Albarradas [2 secc.]; San Lucas Quiavini [1 secc.]; San Miguel Tilquiapam [2 secc.]; **San Pablo Villa de Mitla** [8 secc.]; San Pedro Quiatoni [6 secc.]; San Pedro Totolapam [3 secc.]; San Sebastian Abasolo [1 secc.]; San Sebastian Teitipac [1 secc.]; Santa Ana del Valle [2 secc.]; Santa Cruz Papalutla [1 secc.]; Santa Maria Guelace [1 secc.]; Santa Maria Zoquitlan [4 secc.]; Santiago Matatlan [5 secc.]; Santo Domingo Albarradas [1 secc.]; Teotitlan del Valle [4 secc.]; **Tlacolula de Matamoros** [10 secc.]; Villa Diaz Ordaz [5 secc.]; Yaxe [2 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_17_TLACOLULA_DE_MATAMOROS.pdf

### Distrito local 18 · Santo Domingo Tehuantepec

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Santo Domingo Tehuantepec | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Istmo (incluye municipios de la Sierra Sur del distrito de Yautepec) | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 22 (8 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 106 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 72.9% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 118,793 · padrón 120,280 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Traje de tehuana (huipil bordado y enagua) de las mujeres zapotecas del Istmo | The Americas (Cambridge University Press), «The Traje de Tehuana as National Icon»: https://cambridge.org/core/journals/americas/article/traje-de-tehuana-as-national-icon-gender-ethnicity-and-fashion-in-mexico/E490131BB38CD003A59A36E87DA2C35B |
| Notas | Buena. Es de todo el Istmo zapoteco; no reducirlo a disfraz. | |

**Municipios:** Asuncion Tlacolulita [2 secc.]; Guevea de Humboldt [4 secc.]; **Magdalena Tequisistlan** [6 secc.]; **Magdalena Tlacotepec** [1 secc.]; Nejapa de Madero [8 secc.]; San Bartolo Yautepec [1 secc.]; San Carlos Yautepec [10 secc.]; San Juan Lajarcia [1 secc.]; San Miguel Tenango [1 secc.]; **San Pedro Huamelula** [7 secc.]; Santa Ana Tavela [1 secc.]; Santa Maria Ecatepec [4 secc.]; Santa Maria Guienagati [2 secc.]; **Santa Maria Jalapa del Marques** [7 secc.]; **Santa Maria Mixtequilla** [3 secc.]; Santa Maria Quiegolani [1 secc.]; Santa Maria Totolapilla [1 secc.]; Santiago Astata [4 secc.]; Santiago Lachiguiri [5 secc.]; **Santiago Laollaga** [3 secc.]; **Santo Domingo Chihuitan** [1 secc.]; **Santo Domingo Tehuantepec** [33 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_18_STO_DOMINGO_TEHUANTEPEC.pdf

### Distrito local 19 · Ciudad Ixtepec

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Ciudad Ixtepec | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Istmo | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 7 (7 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 90 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 62.7% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 134,099 · padrón 135,300 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Alfarería de Asunción Ixtaltepec (macetas, platos y hornos de barro para cocer totopos) | Wikipedia, «Asunción Ixtaltepec»: https://en.wikipedia.org/wiki/Asunci%C3%B3n_Ixtaltepec |
| Notas | Débil (fuente no oficial). Alternativa: Salina Cruz como puerto del Pacífico (distintivo no artesanal, sin fuente revisada aquí). | |

**Municipios:** **Asuncion Ixtaltepec** [14 secc.]; **Ciudad Ixtepec** [18 secc.]; **Salina Cruz** [43 secc.]; **San Blas Atempa** [8 secc.]; **San Pedro Comitancillo** [2 secc.]; **San Pedro Huilotepec** [1 secc.]; **Santa Maria Xadani** [4 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2025/Cartografia/DTTO_19_CIUDAD_IXTEPEC_v2025.pdf (actualizado en 2025)

### Distrito local 20 · Juchitan de Zaragoza

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Juchitan de Zaragoza, municipio de Heroica Ciudad de Juchitan de Zaragoza | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Istmo | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 7 (6 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 91 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 85.3% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 130,393 · padrón 131,199 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Las Velas istmeñas de Juchitán (fiestas zapotecas con sones en zapoteco y trajes bordados) | Sectur Oaxaca, Guía Ruta Istmo (2024): https://www.oaxaca.gob.mx/sectur/wp-content/uploads/sites/65/2024/08/Guia-Ruta-Istmo.pdf |
| Notas | Buena (fuente oficial estatal). No hay declaratoria de patrimonio inmaterial; no decir que la hay. | |

**Municipios:** **El Espinal** [7 secc.]; **Heroica Ciudad de Juchitan de Zaragoza** [51 secc.]; **San Dionisio del Mar** [3 secc.]; **San Francisco del Mar** [5 secc.]; **San Francisco Ixhuatan** [9 secc.]; San Mateo del Mar [5 secc.]; **Union Hidalgo** [11 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_20_JUCHITAN_DE_ZARAGOZA.pdf

### Distrito local 21 · Ocotlan de Morelos

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Ocotlan de Morelos | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Valles Centrales | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 33 (7 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 98 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 56.6% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 132,382 · padrón 133,826 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Barro negro de San Bartolo Coyotepec (sede del Museo Estatal de Arte Popular de Oaxaca) | Wikipedia, «San Bartolo Coyotepec» y «Museo Estatal de Arte Popular de Oaxaca»: https://en.wikipedia.org/wiki/San_Bartolo_Coyotepec |
| Notas | Media (fuente no oficial; dato muy conocido). Ojo: el acuerdo INE/CG33/2025 modificó límites entre Zaachila, Coyotepec, Quiané y Tilcajete. | |

**Municipios:** **Asuncion Ocotlan** [3 secc.]; Coatecas Altas [4 secc.]; La Compañia [4 secc.]; **Heroica Ciudad de Ejutla de Crespo** [19 secc.]; **Magdalena Ocotlan** [1 secc.]; **Ocotlan de Morelos** [15 secc.]; La Pe [1 secc.]; **San Agustin Amatengo** [2 secc.]; San Agustin de las Juntas [2 secc.]; San Andres Zabache [1 secc.]; **San Antonino Castillo Velasco** [4 secc.]; San Antonio de la Cal [5 secc.]; San Bartolo Coyotepec [3 secc.]; San Dionisio Ocotlan [1 secc.]; San Jeronimo Taviche [1 secc.]; San Jose del Progreso [4 secc.]; San Juan Chilateca [1 secc.]; San Juan Lachigalla [4 secc.]; San Martin de los Cansecos [1 secc.]; San Martin Lachila [1 secc.]; San Martin Tilcajete [1 secc.]; San Miguel Ejutla [1 secc.]; San Pedro Apostol [2 secc.]; San Pedro Martir [1 secc.]; San Pedro Taviche [1 secc.]; San Vicente Coatlan [2 secc.]; **Santa Ana Zegache** [2 secc.]; Santa Catarina Minas [2 secc.]; Santa Lucia Ocotlan [1 secc.]; Santiago Apostol [3 secc.]; Santo Tomas Jalieza [3 secc.]; Taniche [1 secc.]; Yogana [1 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2025/Cartografia/DTTO_21_OCOTLAN_DE_MORELOS_v2025.pdf (actualizado en 2025)

### Distrito local 22 · Santiago Pinotepa Nacional

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Santiago Pinotepa Nacional | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Costa | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 23 (19 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 104 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 82.5% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 137,196 · padrón 138,334 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Tinte de caracol púrpura y pozahuanco (enredo) de los tintoreros mixtecos de Pinotepa de Don Luis | Mongabay Latam (junio de 2025), «Indígenas de Oaxaca buscan salvar al caracol púrpura»: https://es.mongabay.com/2025/06/mexico-indigenas-oaxaca-salvar-caracol-purpura/ |
| Notas | Buena. Especie protegida: la pieza no debe sugerir comprar o extraer caracol. | |

**Municipios:** **Martires de Tacubaya** [1 secc.]; **Pinotepa de Don Luis** [5 secc.]; San Agustin Chayuco [3 secc.]; **San Andres Huaxpaltepec** [3 secc.]; San Antonio Tepetlapa [2 secc.]; **San Jose Estancia Grande** [1 secc.]; **San Juan Bautista Lo de Soto** [2 secc.]; **San Juan Colorado** [5 secc.]; **San Lorenzo** [3 secc.]; **San Miguel Tlacamama** [2 secc.]; **San Pedro Atoyac** [4 secc.]; **San Pedro Jicayan** [7 secc.]; **San Sebastian Ixcapa** [4 secc.]; Santa Catarina Mechoacan [2 secc.]; **Santa Maria Cortijo** [1 secc.]; **Santa Maria Huazolotitlan** [5 secc.]; Santiago Ixtayutla [7 secc.]; **Santiago Jamiltepec** [13 secc.]; **Santiago Llano Grande** [3 secc.]; **Santiago Pinotepa Nacional** [24 secc.]; **Santiago Tapextla** [2 secc.]; **Santiago Tetepec** [3 secc.]; **Santo Domingo Armenta** [2 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_22_SANTIAGO_PINOTEPA_NACIONAL.pdf

### Distrito local 23 · Puerto Escondido

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Puerto Escondido, municipio de San Pedro Mixtepec | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Costa | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 12 (3 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 63 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 75.6% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 132,279 · padrón 133,455 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Playa Zicatela de Puerto Escondido, ola de surf de talla mundial | Lonely Planet, «Playa Zicatela»: https://www.lonelyplanet.com/mexico/puerto-escondido/attractions/playa-zicatela/a/poi-sig/496894/361610 |
| Notas | Media (fuente turística). Distintivo natural y deportivo, no artesanía. | |

**Municipios:** San Gabriel Mixtepec [3 secc.]; San Juan Lachao [2 secc.]; San Juan Quiahije [2 secc.]; San Miguel Panixtlahuaca [2 secc.]; San Pedro Juchatengo [1 secc.]; **San Pedro Mixtepec** (homónimo; distinto del de DL 24) [13 secc.]; **Villa de Tututepec** [21 secc.]; **Santa Catarina Juquila** [7 secc.]; Santa Maria Temaxcaltepec [1 secc.]; Santiago Yaitepec [1 secc.]; Santos Reyes Nopala [7 secc.]; Tataltepec de Valdes [3 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2025/Cartografia/DTTO_23_PUERTO_ESCONDIDO_v2025.pdf (actualizado en 2025)

### Distrito local 24 · Miahuatlan de Porfirio Diaz

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | Miahuatlan de Porfirio Diaz | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Sierra Sur | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 40 (2 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 121 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 72.1% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 139,729 · padrón 141,051 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Mezcal de la región miahuateca | Redalyc, estudio sobre la región miahuateca y la producción de mezcal: https://www.redalyc.org/journal/280/28069360007/28069360007.epub |
| Notas | Media (académica). Se repite el mezcal con el DL 16. | |

**Municipios:** **Miahuatlan de Porfirio Diaz** [23 secc.]; Monjas [2 secc.]; San Agustin Loxicha [13 secc.]; San Andres Paxtlan [3 secc.]; San Baltazar Loxicha [1 secc.]; San Bartolome Loxicha [2 secc.]; San Cristobal Amatlan [4 secc.]; San Francisco Logueche [2 secc.]; San Francisco Ozolotepec [2 secc.]; San Ildefonso Amatlan [2 secc.]; San Jeronimo Coatlan [3 secc.]; San Jose del Peñasco [2 secc.]; San Jose Lachiguiri [3 secc.]; San Juan Mixtepec (homónimo; distinto del de DL 7) [1 secc.]; San Juan Ozolotepec [3 secc.]; San Luis Amatlan [4 secc.]; San Marcial Ozolotepec [2 secc.]; **San Mateo Rio Hondo** [4 secc.]; San Miguel Coatlan [2 secc.]; San Miguel Suchixtepec [2 secc.]; San Nicolas [1 secc.]; San Pablo Coatlan [3 secc.]; San Pedro Martir Quiechapa [1 secc.]; San Pedro Mixtepec (homónimo; distinto del de DL 23) [1 secc.]; San Sebastian Coatlan [2 secc.]; San Sebastian Rio Hondo [3 secc.]; San Simon Almolongas [2 secc.]; Santa Ana [1 secc.]; Santa Catalina Quieri [1 secc.]; Santa Catarina Cuixtla [1 secc.]; Santa Catarina Loxicha [3 secc.]; Santa Catarina Quioquitani [1 secc.]; Santa Cruz Xitla [3 secc.]; Santa Lucia Miahuatlan [2 secc.]; Santa Maria Ozolotepec [5 secc.]; Santiago Xanica [4 secc.]; Santo Domingo de Morelos [4 secc.]; Santo Domingo Ozolotepec [1 secc.]; Santo Tomas Tamazulapan [1 secc.]; Sitio de Xitlapehua [1 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_24_MIAHUATLAN_DE_PORFIRIO_DIAZ.pdf

### Distrito local 25 · San Pedro Pochutla

| Campo | Dato | Fuente |
|---|---|---|
| Cabecera | San Pedro Pochutla | INE/CG870/2022; IEEPCO, Anexo 3B (nov. 2022) |
| Región | Costa | COPLADE Oaxaca (regiones por distrito rentístico) |
| Municipios | 9 (3 por partidos políticos) | IEEPCO, Anexo 3B; régimen: IEEPCO-CG-SNI-17/2025 y lista de 152 |
| Secciones (2022) | 79 | IEEPCO, Anexo 3B (puede haber cambiado con el marco 2026) |
| Población indígena o afromexicana | 54.9% (distrito indígena) | IEEPCO, Anexo 3B |
| Lista nominal | 146,584 · padrón 148,368 | INE, Datos Abiertos DERFE, pdln_edms_re corte 29-oct-2026 (https://ine.mx/wp-content/uploads/2026/01/DatosAbiertos-derfe-pdln_edms_re_20261029.xlsx; portal: https://ine.mx/transparencia/datos-abiertos/#/tematica/padron-electoral); suma por sección con el catálogo del Anexo 3B (cálculo de Domo) |
| Distintivo propuesto | Café Pluma (Denominación de Origen; Pluma Hidalgo) | El Universal, «Café Pluma de Oaxaca obtiene denominación de origen»: https://www.eluniversal.com.mx/estados/cafe-pluma-de-oaxaca-obtiene-denominacion-de-origen/ ; WIPO Lex, declaratoria: https://www.wipo.int/wipolex/es/legislation/details/19620 |
| Notas | Buena. La DO cubre 30 municipios; Pluma Hidalgo está en este distrito. | |

**Municipios:** Candelaria Loxicha [7 secc.]; Pluma Hidalgo [4 secc.]; San Mateo Piñas [4 secc.]; San Miguel del Puerto [6 secc.]; San Pedro el Alto [2 secc.]; **San Pedro Pochutla** [20 secc.]; Santa Maria Colotepec [11 secc.]; **Santa Maria Huatulco** [15 secc.]; **Santa Maria Tonameca** [10 secc.].

Mapa oficial del distrito (IEEPCO): https://www.ieepco.org.mx/archivos/documentos/2023/CartografiaElectoral/DTTO_25_SAN_PEDRO_POCHUTLA.pdf

## 5. Limitaciones

1. El sitio del IEEPCO (ieepco.org.mx) respondió con error 503 al consultarlo el 13-nov-2026. Los acuerdos IEEPCO-CG-SNI-17/2025, -09/2024 y -41/2023 se ubicaron con un buscador web, que mostró extractos de su contenido, pero los documentos no se pudieron abrir. Hay que confirmar las cifras abriendo los PDF.
2. La lista de los 152 municipios por partidos viene de una fuente secundaria (Wikipedia, resultados de 2024). Falta cotejarla con un catálogo oficial del IEEPCO para el proceso 2026-2027. También se puede cotejar con los municipios que tienen resultados de ayuntamiento cargados en Mapeo Electoral (`panorama.municipios_partidos`).
3. Los municipios y cabeceras por distrito son de la distritación de 2022 (INE/CG870/2022), la vigente según INE/CG526/2026. El número de secciones es de 2022.
4. No se incluye la lista nominal por distrito: requiere una descarga autorizada (ver sección 2).
5. Los distintivos son **propuestas** para contenido. Su respaldo va de muy bueno (UNESCO, IMPI) a débil (blogs o Wikipedia); está marcado en cada ficha. El DL 12 no tiene propuesta. El mezcal se repite en los DL 16 y 24.
6. Las regiones son las del distrito rentístico de la cabecera. Varios distritos electorales abarcan más de una región.
