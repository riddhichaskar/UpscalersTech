"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import * as THREE from "three";
import { useRef } from "react";

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (!meshRef.current) return;

    const t = scrollYProgress.get();

    /* ============================
       CURVED POSITION (REAL 3D)
    ============================ */
    meshRef.current.position.x = THREE.MathUtils.lerp(0, 2.8, t)
      + Math.sin(t * Math.PI) * 0.6;

    meshRef.current.position.y = THREE.MathUtils.lerp(0, -1.8, t)
      + Math.sin(t * Math.PI * 1.2) * 0.4;

    meshRef.current.position.z = THREE.MathUtils.lerp(0, -2.5, t);

    /* ============================
       ROTATION (CONTINUOUS)
    ============================ */
    meshRef.current.rotation.x += 0.01 + t * 0.02;
    meshRef.current.rotation.y += 0.015 + t * 0.03;
    meshRef.current.rotation.z += 0.005;

    /* ============================
       DARKEN ON TECH SECTION
    ============================ */
    const material = meshRef.current.material as THREE.MeshStandardMaterial;
    material.color.lerp(
      new THREE.Color(t > 0.5 ? "#0f172a" : "#6c7cff"),
      0.05
    );
  });

  return (
    <mesh ref={meshRef}>
      {/* REAL GEOMETRY */}
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        roughness={0.25}
        metalness={0.8}
        color="#6c7cff"
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="fixed inset-0 z-10 pointer-events-none"
    >
      {/* LIGHTING */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />

      {/* OBJECT */}
      <FloatingCore />
    </Canvas>
  );
}
