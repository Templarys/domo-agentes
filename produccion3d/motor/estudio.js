// Escenario de estudio: base tipo maqueta, luz suave, sombras.
import * as THREE from 'three';
export function crearEstudio(op = {}) {
  const W = 1080, H = 1920;
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); renderer.setSize(W, H); renderer.setPixelRatio(1);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
  document.body.prepend(renderer.domElement);
  const escena = new THREE.Scene(); escena.background = new THREE.Color(op.fondo || '#f5f1e8');
  const cam = new THREE.PerspectiveCamera(op.fov || 30, W / H, .1, 500);
  escena.add(new THREE.HemisphereLight('#ffffff', '#d8ccb8', 1.25));
  const sol = new THREE.DirectionalLight('#fff4e4', 2.6); sol.position.set(-12, 22, 14); sol.castShadow = true; sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25, near: 1, far: 80 }); sol.shadow.radius = 6; sol.shadow.bias = -.0005; escena.add(sol);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(op.radio || 14, (op.radio || 14) + .3, .6, 96), new THREE.MeshStandardMaterial({ color: op.base || '#ece3d3', roughness: 1 }));
  base.position.y = -.3; base.receiveShadow = true; escena.add(base);
  const piso = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.ShadowMaterial({ opacity: .12 })); piso.rotation.x = -Math.PI / 2; piso.position.y = -.6; piso.receiveShadow = true; escena.add(piso);
  return { renderer, escena, cam, sol };
}
export const suave = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
export const rebote = x => { const c = 1.70158 + 1; return 1 + c * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2); };
export const lim = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export function semilla(s = 7) { let a = s; return () => ((a = (a * 16807) % 2147483647) / 2147483647); }
