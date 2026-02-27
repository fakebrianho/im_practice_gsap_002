import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes, addStandardMeshes } from './addDefaultMeshes'
import { addLight } from './addLight'
import Model from './model'
import { sphereMaker } from './addDefaultMeshes'

const scene = new THREE.Scene()
//(FOV, ASPECT RATIO, NEAR, FAR)
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100,
)
const renderer = new THREE.WebGLRenderer({ antialias: true })

const meshes = {}
const lights = {}

init()
function init() {
	// we do all our setup stuff
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
	camera.position.z = 5

	lights.default = addLight()
	scene.add(lights.default)

	//here we populate our meshes container
	meshes.sphere1 = sphereMaker(new THREE.Color(0xff0000))
	scene.add(meshes.sphere1)
	meshes.sphere1.position.set(0, 2, 0)
	meshes.sphere2 = sphereMaker(new THREE.Color(0x00ff00))
	scene.add(meshes.sphere2)
	meshes.sphere2.position.set(-3, 2, 0)
	meshes.sphere3 = sphereMaker(new THREE.Color(0x0000ff))
	scene.add(meshes.sphere3)
	meshes.sphere3.position.set(3, 2, 0)

	interactions()
	resize()
	animate()
}

function interactions(){
	window.addEventListener('click')
}

function instances() {
	const flower = new Model({
		url: './flowers.glb',
		scene: scene,
		meshes: meshes,
		scale: new THREE.Vector3(2, 2, 2),
		position: new THREE.Vector3(0, -0.8, 3),
		replace: true,
	})
	flower.init()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
