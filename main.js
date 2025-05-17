import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

const floorTexture = loader.load('floor.jpg');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(4, 4);
const floorMaterial = new THREE.MeshLambertMaterial({ map: floorTexture });
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
floor.receiveShadow = true;
scene.add(floor);

const cubeTexture = loader.load('cube.jpg');
const cubeMaterial = new THREE.MeshLambertMaterial({ map: cubeTexture });
const cubeGeometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-2, 0, 0);
cube.castShadow = true;
scene.add(cube);

const sphereTexture = loader.load('sphere.jpg');
const sphereMaterial = new THREE.MeshLambertMaterial({ map: sphereTexture });
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 0);
sphere.castShadow = true;
scene.add(sphere);

const torusTexture = loader.load('torus.jpg');
const torusMaterial = new THREE.MeshLambertMaterial({ map: torusTexture });
const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(2, 0, 0);
torus.castShadow = true;
scene.add(torus);

const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.castShadow = true;
light.position.set(3, 5, 3);
scene.add(light);

camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  sphere.rotation.y += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
