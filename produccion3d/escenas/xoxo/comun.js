// Capa común del reel de Xoxocotlán: subtítulos sincronizados con la voz (tiempo global), fuente y etiquetas.
// Cada escena se renderiza con DESDE=<inicio global>, así que render(t) recibe el tiempo global del reel.
export const lim = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
// [inicio, fin, texto] · tiempos de la voz de Marto medidos con silencedetect
export const SUBS = [
  [0.00, 2.70, '¿Quién decide la elección<br>en Santa Cruz Xoxocotlán?'],
  [3.05, 7.85, 'En 2024 votaron<br><b>49,696</b> personas:'],
  [7.95, 10.80, 'el <b>67%</b> de la lista nominal.'],
  [10.90, 14.45, 'Más de <b>8 puntos</b> arriba de<br>la participación estatal.'],
  [14.55, 17.05, 'Pero no todas las secciones<br>votaron igual:'],
  [17.15, 21.55, 'en la sección <b>2537</b><br>votó el <b>76%</b>;'],
  [21.65, 24.40, 'en la <b>2505</b>, el <b>62%</b>.'],
  [24.50, 26.30, 'La edad también pesó:'],
  [26.35, 30.70, 'de <b>55 a 64</b> años<br>votó el <b>78%</b>;'],
  [30.75, 33.95, 'de <b>25 a 34</b>, solo el <b>58%</b>.'],
  [34.05, 36.55, 'Y las mujeres votaron<br>más que los hombres:'],
  [36.58, 39.55, '<b>72%</b> contra <b>61%</b>.'],
  [39.62, 43.85, 'Casi <b>1 de cada 4</b> votos vino<br>de menores de 30 años.'],
  [43.95, 47.12, 'Así se lee un territorio,<br>sección por sección.'],
];
const css = `
#sub{position:absolute;left:90px;right:130px;top:1250px;display:flex;justify-content:center;pointer-events:none}
#sub div{background:rgba(11,24,48,.86);color:#fff;font-weight:800;font-size:50px;line-height:1.16;text-align:center;padding:16px 28px 14px;border-radius:20px;opacity:0}
#sub b{color:#ff8c96;font-weight:800}
#fte{position:absolute;left:90px;top:1478px;font-weight:300;font-size:30px;color:#3d4454;background:rgba(245,241,232,.82);padding:5px 12px;border-radius:8px}
#alt{position:absolute;left:90px;top:1452px;font-weight:300;font-size:30px;color:#3d4454;background:rgba(245,241,232,.82);padding:5px 12px;border-radius:8px;line-height:1.3}
.logo{position:absolute;top:120px;right:70px;height:70px}`;
export function montarComun({ fuente = false, alturas = false, logo = true } = {}) {
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const s = document.createElement('div'); s.id = 'sub'; s.innerHTML = '<div></div>'; document.body.appendChild(s);
  if (fuente) { const f = document.createElement('div'); f.id = 'fte'; f.textContent = 'Fuente: INE, Conteos Censales 2024'; document.body.appendChild(f); }
  if (alturas && false) { const f = document.createElement('div'); f.id = 'alt'; f.innerHTML = 'Alturas de edificios estimadas<br>Edificios: Overture Maps · © OpenStreetMap contributors'; document.body.appendChild(f); }
  if (logo) { const l = document.createElement('img'); l.className = 'logo'; l.src = '/assets/marca/domo-politico.png'; document.body.appendChild(l); }
}
export function capa(t) {
  const el = document.querySelector('#sub div'); const s = SUBS.find(([a, b]) => t >= a && t < b);
  if (!s) { el.style.opacity = 0; return; }
  if (el.dataset.k !== String(s[0])) { el.innerHTML = s[2]; el.dataset.k = s[0]; }
  el.style.opacity = s[0] === 0 ? 1 : lim((t - s[0]) / .12);
}
export async function fuentesListas() { const i = [...document.images]; await Promise.all(i.map(x => x.decode().catch(() => { }))); await document.fonts.ready; }
