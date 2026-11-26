// Decodifica teselas vectoriales de OpenFreeMap (OpenStreetMap, ODbL) a GeoJSON por capa.
// Uso: node scripts/osm_tiles_a_geojson.js data/osm salida.json
const fs=require('fs'),path=require('path');const {VectorTile}=require('@mapbox/vector-tile');const Pbf=require('pbf');
const dir=process.argv[2], out=process.argv[3]; const capas={};
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.pbf'))){
  const [z,x,y]=f.replace('.pbf','').split('_').map(Number);
  const t=new VectorTile(new Pbf(fs.readFileSync(path.join(dir,f))));
  for(const k of ['transportation','water','waterway','landcover','park','landuse']){const l=t.layers[k];if(!l)continue;
    for(let i=0;i<l.length;i++){(capas[k]=capas[k]||[]).push(l.feature(i).toGeoJSON(x,y,z));}}
}
fs.writeFileSync(out,JSON.stringify(capas));console.log(Object.fromEntries(Object.entries(capas).map(([k,v])=>[k,v.length])));
