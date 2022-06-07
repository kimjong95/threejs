import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {useEffect} from 'react';

export const ThreeCat = () => {

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas'),
      antialias: true
    });
    renderer.outputEncoding = THREE.sRGBEncoding;

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 0, 5);

    scene.background = new THREE.Color('white');

    const loader = new GLTFLoader();
    loader.load('./bananacat.gltf', (gltf) => {
      scene.add(gltf.scene);
      function animate() {
        requestAnimationFrame(animate);
        gltf.scene.rotation.x -= 0.01;
        gltf.scene.rotation.y -= 0.02;
        gltf.scene.rotation.z -= 0.03;

        renderer.render(scene, camera);
      }
      animate();
    })
  }, [])

  return <canvas id="canvas" width={300} height={300} />;
};
