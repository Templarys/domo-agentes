// DOMO CITY · escena de ciudad 3D (Three.js) con render determinista por tiempo: window.render(t)
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export async function crearCiudad(datos, opciones = {}) {
  const W = opciones.ancho || 1080, H = opciones.alto || 1920;
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.setSize(W, H);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  document.body.appendChild(renderer.domElement);
  const escena = new THREE.Scene();
  const fondo = new THREE.Color(opciones.fondo || '#f5f1e8');
  escena.background = fondo; escena.fog = new THREE.Fog(fondo, opciones.nieblaDesde || 2200, opciones.nieblaHasta || 5200);
  const cam = new THREE.PerspectiveCamera(32, W / H, 1, 6000);
  // Luz de estudio suave: hemisférica + sol con sombras
  escena.add(new THREE.HemisphereLight('#fffaf0', '#cbbfa9', 1.05));
  const sol = new THREE.DirectionalLight('#fff1dc', 2.9);
  sol.position.set(-620, 430, 260); sol.castShadow = true;
  sol.shadow.mapSize.set(4096, 4096); const sc = sol.shadow.camera;
  sc.left = -800; sc.right = 800; sc.top = 800; sc.bottom = -800; sc.near = 10; sc.far = 2000;
  sol.shadow.bias = -0.0004; sol.shadow.radius = 4; escena.add(sol);
  // Suelo
  const suelo = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.MeshStandardMaterial({ color: '#e4d9c6', roughness: 1 }));
  suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true; escena.add(suelo);
  // Áreas verdes y agua (planos apenas sobre el suelo)
  const verdes = [], aguas = [];
  for (const a of datos.areas) {
    const s = new THREE.Shape(a.r.map(([x, y]) => new THREE.Vector2(x, -y)));
    const g = new THREE.ShapeGeometry(s); g.rotateX(-Math.PI / 2); g.translate(0, a.t === 'agua' ? 0.25 : 0.2, 0);
    (a.t === 'agua' ? aguas : verdes).push(g);
  }
  if (verdes.length) { const m = new THREE.Mesh(mergeGeometries(verdes), new THREE.MeshStandardMaterial({ color: '#b9cfa0', roughness: 1 })); m.receiveShadow = true; escena.add(m); }
  if (aguas.length) escena.add(new THREE.Mesh(mergeGeometries(aguas), new THREE.MeshStandardMaterial({ color: '#8fbbe0', roughness: .4 })));
  // Calles: cintas planas con ancho por categoría
  const anchos = { primary: 12, secondary: 10, tertiary: 8, minor: 6.5, service: 4, path: 3, track: 3 };
  const tiras = [];
  for (const c of datos.calles) {
    const w = (anchos[c.c] || 5) / 2;
    for (let i = 0; i < c.p.length - 1; i++) {
      const [x1, y1] = c.p[i], [x2, y2] = c.p[i + 1]; const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy); if (!L) continue;
      const nx = -dy / L * w, ny = dx / L * w;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute([x1 + nx, .5, -(y1 + ny), x1 - nx, .5, -(y1 - ny), x2 + nx, .5, -(y2 + ny), x2 - nx, .5, -(y2 - ny)], 3));
      g.setIndex([0, 2, 1, 1, 2, 3]); g.computeVertexNormals(); tiras.push(g);
    }
  }
  if (tiras.length) { const m = new THREE.Mesh(mergeGeometries(tiras), new THREE.MeshStandardMaterial({ color: '#bdb5a8', roughness: 1 })); m.receiveShadow = true; escena.add(m); }
  // Edificios extruidos (blanco cálido mate; opcionalmente resaltados)
  const grupos = { base: [], resalte: [] };
  for (const e of datos.edificios) {
    if (e.r.length < 4) continue;
    const s = new THREE.Shape(e.r.map(([x, y]) => new THREE.Vector2(x, y)));
    const g = new THREE.ExtrudeGeometry(s, { depth: e.h, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);
    (opciones.resaltar && opciones.resaltar(e) ? grupos.resalte : grupos.base).push(g);
  }
  const matBase = new THREE.MeshStandardMaterial({ color: '#fdfbf7', roughness: .8 });
  const geoBase = mergeGeometries(grupos.base);
  const edificios = new THREE.Mesh(geoBase, matBase); edificios.castShadow = edificios.receiveShadow = true; escena.add(edificios);
  // Aristas finas tipo maqueta
  const aristas = new THREE.LineSegments(new THREE.EdgesGeometry(geoBase, 25), new THREE.LineBasicMaterial({ color: '#cfc5b5', transparent: true, opacity: .55 }));
  escena.add(aristas);
  // Árboles instanciados (copas redondeadas) dentro de áreas verdes
  const arboles = [];
  const azar = (() => { let a = 12345; return () => ((a = (a * 16807) % 2147483647) / 2147483647); })();
  for (const a of datos.areas.filter(a => a.t === 'verde')) {
    const xs = a.r.map(p => p[0]), ys = a.r.map(p => p[1]);
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    const n = Math.min(120, Math.round((x1 - x0) * (y1 - y0) / 140));
    for (let i = 0; i < n * 3 && arboles.length < 2500; i++) { const x = x0 + azar() * (x1 - x0), y = y0 + azar() * (y1 - y0); if (dentro([x, y], a.r)) arboles.push([x, y, 3 + azar() * 3]); }
  }
  if (arboles.length) {
    const copa = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshStandardMaterial({ color: '#7fa86a', roughness: .9, flatShading: true }), arboles.length);
    const tronco = new THREE.InstancedMesh(new THREE.CylinderGeometry(.25, .35, 1, 6), new THREE.MeshStandardMaterial({ color: '#8d6e55' }), arboles.length);
    const M = new THREE.Matrix4();
    arboles.forEach(([x, y, r], i) => { M.compose(new THREE.Vector3(x, r * 1.1 + 1.5, -y), new THREE.Quaternion(), new THREE.Vector3(r, r * 1.05, r)); copa.setMatrixAt(i, M);
      M.compose(new THREE.Vector3(x, 1.2, -y), new THREE.Quaternion(), new THREE.Vector3(1, 2.4, 1)); tronco.setMatrixAt(i, M); });
    copa.castShadow = tronco.castShadow = true; escena.add(copa, tronco);
  }
  if (grupos.resalte.length) { const r = new THREE.Mesh(mergeGeometries(grupos.resalte), new THREE.MeshStandardMaterial({ color: '#8E1537', roughness: .7 })); r.castShadow = true; escena.add(r); }
  return { renderer, escena, cam, sol };
}

export function dentro([x, y], r) { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c; } return c; }
export function aMetros(datos, lon, lat) { const [lon0, lat0] = datos.centro; return [(lon - lon0) * 111320 * Math.cos(lat0 * Math.PI / 180), (lat - lat0) * 110540]; }
export const suave = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
