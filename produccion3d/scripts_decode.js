const fs=require('fs');const {VectorTile}=require('@mapbox/vector-tile');const Pbf=require('pbf');
const t=new VectorTile(new Pbf(fs.readFileSync(process.argv[2])));
for(const k of Object.keys(t.layers)){const l=t.layers[k];console.log(k,l.length, l.length? JSON.stringify(l.feature(0).properties).slice(0,150):'')}
