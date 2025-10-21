"use client";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AnimatedMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  const count = 50;
  const sep = 0.8;

  const geometry = new THREE.PlaneGeometry(count * sep, count * sep, count, count);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const pos = geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 2 + time) * 0.1 +
        Math.cos(y * 2 + time * 0.5) * 0.1;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;

    if (mesh.current) {
      mesh.current.rotation.x = -Math.PI / 2.5;
      mesh.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={mesh} geometry={geometry}>
      <meshBasicMaterial wireframe color="black" />
    </mesh>
  );
}

export default function ParametricMeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.5, 2.5], fov: 50 }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <AnimatedMesh />
      </Canvas>
    </div>
  );
}
