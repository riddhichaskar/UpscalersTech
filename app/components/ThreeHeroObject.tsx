"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.008;
  });

  return (
    <mesh ref={meshRef} position={[0, -1.6, 0]}>
      {/* ↑ THIS LINE MOVES THE OBJECT DOWN */}
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#6c7cff"
        roughness={0.25}
        metalness={0.85}
      />
    </mesh>
  );
}

export default function ThreeHeroObject() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 4.5], fov: 45 }}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      {/* LIGHTS */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />

      {/* OBJECT */}
      <CoreMesh />
    </Canvas>
  );
}
