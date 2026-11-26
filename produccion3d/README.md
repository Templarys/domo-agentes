# Producción 3D de Domo Político (en construcción)

Motor 3D gratuito y local para los videos de Domo: Three.js (MIT) renderizado cuadro por cuadro en Chromium
headless (WebGL por software, sin GPU) + FFmpeg. Presupuesto adicional: $0.

## Fuentes de datos (gratuitas)
- Edificios: Overture Maps Foundation (release 2026-11-18), lectura con DuckDB desde su bucket público.
  Alturas reales cuando existen; si no, **estimadas** (se marca en pantalla).
- Calles, parques, agua y lugares: © OpenStreetMap contributors (ODbL) vía teselas de OpenFreeMap.
- Secciones, municipios y distritos: Base Geográfica Digital del INE (en Mapeo Electoral).

## Piezas
- `motor/ciudad.js` (DOMO CITY): ciudad 3D con edificios extruidos, calles, áreas verdes, agua, árboles, sombras.
- `motor/render.js` (DOMO RENDER): servidor local + Playwright → cuadros PNG (`window.render(t)` determinista).
- `scripts/osm_tiles_a_geojson.js`, `scripts/escena_ciudad.py`: preparan los datos en metros locales.
- `escenas/prueba1/`: Prueba 1, Centro Histórico de Oaxaca de Juárez (8 s).

## Comandos
    npm install                      # three, @mapbox/vector-tile, pbf (versiones fijadas)
    pip install duckdb               # descarga de edificios Overture
    node scripts/osm_tiles_a_geojson.js data/osm data/osm_centro.json
    python3 scripts/escena_ciudad.py -96.7254 17.0625 650 escenas/prueba1/ciudad.json
    node motor/render.js escenas/prueba1/index.html 8 escenas/prueba1/cuadros 30
    ffmpeg -framerate 30 -i escenas/prueba1/cuadros/f%04d.png -c:v libx264 -pix_fmt yuv420p salida.mp4

Rendimiento medido: ~23 s de render por segundo de video (4 núcleos, sin GPU).
