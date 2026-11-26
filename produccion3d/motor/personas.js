// DOMO PEOPLE · personas 3D estilizadas tipo figura coleccionable (procedurales, sin licencias de terceros).
import * as THREE from 'three';
const PIELES = ['#e9c4a6', '#d8a47f', '#b9825d', '#8f5f43', '#f1d3bd'];
const ROPAS = ['#5b6b8c', '#7d8a6a', '#a9927a', '#6f6f7a', '#8b6d82', '#557a85', '#9a7a5c'];
const CABELLOS = ['#2b2118', '#4a3426', '#1d1a19', '#6b5544', '#8a8a8a'];
export function crearPersona(op = {}) {
  const r = op.azar || Math.random;
  const pick = a => a[Math.floor(r() * a.length)];
  const piel = op.piel || pick(PIELES), ropa = op.ropa || pick(ROPAS), pantalon = op.pantalon || '#3d4250', pelo = op.pelo || pick(CABELLOS);
  const mat = c => new THREE.MeshStandardMaterial({ color: c, roughness: .65 });
  const g = new THREE.Group(); const esc = op.escala || (0.9 + r() * 0.2);
  const pierna = (x) => { const p = new THREE.Group(); const m = new THREE.Mesh(new THREE.CapsuleGeometry(.11, .5, 4, 10), mat(pantalon)); m.position.y = -.36; p.add(m); p.position.set(x, .78, 0); return p; };
  const brazo = (x) => { const b = new THREE.Group(); const m = new THREE.Mesh(new THREE.CapsuleGeometry(.075, .42, 4, 10), mat(ropa)); m.position.y = -.28; b.add(m);
    const mano = new THREE.Mesh(new THREE.SphereGeometry(.075, 12, 10), mat(piel)); mano.position.y = -.58; b.add(mano); b.position.set(x, 1.38, 0); return b; };
  const pi = pierna(-.13), pd = pierna(.13), bi = brazo(-.3), bd = brazo(.3);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(.24, .42, 6, 14), mat(ropa)); torso.position.y = 1.12; torso.scale.set(1, 1, .72);
  const cuello = new THREE.Mesh(new THREE.CylinderGeometry(.07, .08, .1, 10), mat(piel)); cuello.position.y = 1.47;
  const cabeza = new THREE.Mesh(new THREE.SphereGeometry(.22, 20, 16), mat(piel)); cabeza.position.y = 1.68; cabeza.scale.set(1, 1.08, 1);
  const cabello = new THREE.Mesh(new THREE.SphereGeometry(.232, 20, 12, 0, Math.PI * 2, 0, Math.PI * (op.largo ?? r() > .5 ? .62 : .5)), mat(pelo)); cabello.position.y = 1.7;
  g.add(pi, pd, bi, bd, torso, cuello, cabeza, cabello);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.scale.setScalar(esc);
  g.userData = { pi, pd, bi, bd, torso, fase: r() * Math.PI * 2, mats: { ropa: torso.material } };
  return g;
}
// Ciclo de caminata (t en segundos, velocidad de paso en ciclos/s); intensidad 0 = de pie.
export function animarPersona(p, t, intensidad = 1, ciclo = 1.6) {
  const u = p.userData, a = Math.sin(t * ciclo * Math.PI * 2 + u.fase) * 0.55 * intensidad;
  u.pi.rotation.x = a; u.pd.rotation.x = -a; u.bi.rotation.x = -a * .8; u.bd.rotation.x = a * .8;
  u.torso.position.y = 1.12 + Math.abs(Math.sin(t * ciclo * Math.PI * 2 + u.fase)) * .03 * intensidad;
  if (!intensidad) { const resp = Math.sin(t * 1.3 + u.fase) * .015; u.torso.scale.y = 1 + resp; }
}
export function colorear(p, color) { p.userData.mats.ropa.color.set(color); p.userData.bi.children[0].material = p.userData.mats.ropa; p.userData.bd.children[0].material = p.userData.mats.ropa; }
