import { FC, useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

//@ts-ignore
import { default as LogoGLTF } from '@Assets/gltf/LogoScene.gltf';

import * as THREE from 'three';

interface Props {
    [index: string]: any;
}

const size = {
    width: 300,
    height: 510
};

const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
scene.add(ambientLight)

const camera = new THREE.PerspectiveCamera(
    58,
    size.width / size.height,
    0.1,
    1000
);

camera.position.set(0, 0, 7.75);

var loader = new GLTFLoader();

function loadGLTF() {
    loader.load(LogoGLTF, gltf => {
        scene.add(gltf.scene);
        console.log("Loaded GLTF")
    })
}

const LogoBackground : FC<Props> = props => {
    
    const div = useRef<HTMLDivElement>();
    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(size.width, size.height);

    useEffect(() => {
        if (scene.children.length <= 1) loadGLTF();

        var t = 0;
        var logo : THREE.Object3D | undefined;

        function render() {
            if (!logo) {
                logo = scene.getObjectByName('Logo');
            }

            if (!logo) return;

            t += 1;
            const sin = Math.sin(t / 100 * Math.PI) / 1.5;

            logo.position.set(0, sin, 0);
            logo.rotation.set(logo.rotation.x, logo.rotation.y + 0.015, logo.rotation.z);

            renderer.render(scene, camera as THREE.PerspectiveCamera);
        }

        div.current?.appendChild(renderer.domElement);
        
        const interval = setInterval(render, 1000 / 60);

        return () => {
            logo?.rotation.set(logo.rotation.x, 0, logo.rotation.z);
            clearInterval(interval);

            div.current?.removeChild(renderer.domElement);
            renderer.clear();
        }
    });

    return <div ref={ref => div.current = ref as HTMLDivElement} className="logo-background" {...props} />
}

export default LogoBackground