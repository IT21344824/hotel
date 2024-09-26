import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

function ARModelViewer({ modelPath, modelScale = [0.1, 0.1, 0.1] }) {
  const ref = useRef();

  useEffect(() => {
    // Initialize Three.js renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true; // Enable WebXR
    ref.current.appendChild(renderer.domElement);

    // Create scene, camera, and lighting
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
    scene.add(camera);

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    // Load model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(...modelScale);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model', error);
      }
    );

    // Add AR button to enter AR session
    const arButton = ARButton.createButton(renderer);
    document.body.appendChild(arButton);

    // Renderer loop
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    // Cleanup on component unmount
    return () => {
      if (renderer && renderer.xr.getSession()) {
        renderer.xr.getSession().end();
      }
      renderer.dispose();
    };
  }, [modelPath, modelScale]);

  return <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
}

export default ARModelViewer;
