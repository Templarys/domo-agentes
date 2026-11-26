"""Arma los datos de una escena de ciudad en metros locales (origen = centro dado).
Edificios: Overture Maps (huellas; alturas reales si existen, si no ESTIMADAS y marcadas).
Calles, parques y agua: OpenStreetMap vía teselas de OpenFreeMap (ODbL).
Uso: python3 scripts/escena_ciudad.py lon lat radio_m salida.json"""
import json, math, sys, hashlib
import duckdb
lon0, lat0, R, out = float(sys.argv[1]), float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]
kx = 111320 * math.cos(math.radians(lat0)); ky = 110540
def m(c): return [round((c[0]-lon0)*kx, 1), round((c[1]-lat0)*ky, 1)]
def cerca(pts): return any(abs(x) < R and abs(y) < R for x, y in pts)
con = duckdb.connect(); con.execute("LOAD spatial")
edif = []; est = 0
for i, h, nf, cl, g in con.execute("select id,height,num_floors,class,geom from 'data/overture_centro.parquet'").fetchall():
    geo = json.loads(g)
    polys = [geo["coordinates"]] if geo["type"] == "Polygon" else geo["coordinates"]
    for p in polys:
        ring = [m(c) for c in p[0]]
        if not cerca(ring): continue
        if h: alt, fuente = float(h), "real"
        elif nf: alt, fuente = float(nf) * 3.2, "pisos"
        else:
            r = int(hashlib.md5(i.encode()).hexdigest()[:4], 16) / 65535
            alt, fuente = 4.0 + r * 4.5, "estimada"; est += 1
        edif.append({"r": ring, "h": round(alt, 1), "f": fuente})
osm = json.load(open("data/osm_centro.json"))
calles = []
for f in osm["transportation"]:
    g = f["geometry"]; cls = f["properties"].get("class")
    lines = [g["coordinates"]] if g["type"] == "LineString" else g["coordinates"] if g["type"] == "MultiLineString" else []
    for l in lines:
        pts = [m(c) for c in l]
        if cerca(pts): calles.append({"p": pts, "c": cls})
areas = []
for capa in ("park", "landcover", "water"):
    for f in osm.get(capa, []):
        g = f["geometry"]
        polys = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"] if g["type"] == "MultiPolygon" else []
        for p in polys:
            ring = [m(c) for c in p[0]]
            if cerca(ring): areas.append({"r": ring, "t": "agua" if capa == "water" else "verde"})
json.dump({"centro": [lon0, lat0], "radio": R, "edificios": edif, "calles": calles, "areas": areas,
           "fuentes": {"edificios": "Overture Maps Foundation, release 2026-11-18 (huellas; alturas estimadas cuando no hay dato)",
                       "calles": "© OpenStreetMap contributors (ODbL), teselas OpenFreeMap 2026-11-22"},
           "alturas_estimadas": est}, open(out, "w"))
print(len(edif), "edificios (", est, "con altura estimada)", len(calles), "calles", len(areas), "áreas")
