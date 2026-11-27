// DOMO RENDER · renderiza una escena HTML con window.render(t) a cuadros PNG con un servidor local (sin red).
// Uso: node motor/render.js <ruta_escena/index.html> <segundos> <carpeta_cuadros> [fps] [solo_tiempos_coma]
const { chromium } = require('playwright'); const http = require('http'); const fs = require('fs'); const path = require('path');
const raiz = path.resolve(__dirname, '..');
const tipos = { '.html': 'text/html', '.css': 'text/css', '.svg': 'image/svg+xml', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.otf': 'font/otf', '.ttf': 'font/ttf', '.bin': 'application/octet-stream' };
(async () => {
  const [, , escena, seg, salida, fpsS, solo] = process.argv; const fps = +(fpsS || 30);
  const srv = http.createServer((q, r) => { const f = path.join(raiz, decodeURIComponent(q.url.split('?')[0])); if (!f.startsWith(raiz) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': tipos[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(0);
  const port = srv.address().port;
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  p.on('console', m => { if (m.type() === 'error') console.error('[pagina]', m.text()); });
  await p.goto(`http://127.0.0.1:${port}/${path.relative(raiz, path.resolve(escena))}`);
  await p.waitForFunction(() => window.listo === true, null, { timeout: 180000 });
  fs.mkdirSync(salida, { recursive: true });
  // LIMPIO=1 oculta títulos y rótulos (para montar secuencias con subtítulos); DESDE=s desplaza el inicio
  if (process.env.LIMPIO) await p.addStyleTag({ content: '.capa,.titulo,.fuente,.paso,[id=dato],[id=cifra],[id=nota],[id=clave],[id=rotulo]{display:none!important}' });
  const desde = +(process.env.DESDE || 0);
  const tiempos = solo ? solo.split(',').map(Number) : [...Array(Math.round(+seg * fps)).keys()].map(i => desde + i / fps);
  let i = 0; const t0 = Date.now();
  for (const t of tiempos) { await p.evaluate(t => window.render(t), t); await p.screenshot({ path: path.join(salida, solo ? `cuadro_${t}s.png` : `f${String(i).padStart(4, '0')}.png`) }); i++; }
  console.log(`${i} cuadros en ${((Date.now() - t0) / 1000).toFixed(1)} s`); await b.close(); srv.close();
})();
