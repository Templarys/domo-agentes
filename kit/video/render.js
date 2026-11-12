const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
(async () => {
  const dur = +(process.argv[2] || 10), fps = 30, only = process.argv[3];
  const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: +(process.env.H||1080) } });
  await pg.goto('file://' + path.resolve(process.env.PAGE||'index.html')); await pg.evaluate(() => document.fonts.ready);
  fs.mkdirSync('frames', { recursive: true });
  const list = only ? only.split(',').map(Number) : [...Array(Math.round(dur * fps)).keys()].map(i => i / fps);
  let i = 0;
  for (const t of list) {
    await pg.evaluate(t => window.render(t), t);
    await pg.screenshot({ path: only ? `still_${t}.png` : `frames/f${String(i).padStart(4, '0')}.png` }); i++;
  }
  await b.close();
})();
