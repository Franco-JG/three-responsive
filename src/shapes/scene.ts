import * as THREE from 'three'

export const scene = (canvas: HTMLCanvasElement) => {

	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
	renderer.setPixelRatio(window.devicePixelRatio)

	const fov = 75;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 2;
	
	const scene = new THREE.Scene();

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
  )
  scene.add(cube)

	function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function animate() {
		
		if(resizeRendererToDisplaySize(renderer)){
			const canvas =  renderer.domElement;
			camera.aspect = canvas.clientWidth/canvas.clientHeight
			camera.updateProjectionMatrix()
		}

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

		renderer.render( scene, camera );
		requestAnimationFrame( animate );
	}

  animate()

}