import * as THREE from 'three'

export function addDefaultMeshes() {
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}

export function sphereMaker(color) {
	const geometry = new THREE.SphereGeometry(0.5, 32, 32)
	const material = new THREE.MeshStandardMaterial({ color: color })
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}


export function addStandardMeshes() {
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshStandardMaterial({
		color: 0x00ff00,
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}
