"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Grid, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

/* =========================
   ROBOT MODEL
========================= */
function Robot() {
  const headRef = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (!headRef.current) return;

    // Clamp cursor influence
    const targetY = THREE.MathUtils.clamp(mouse.x * 0.6, -0.4, 0.4);
    const targetX = THREE.MathUtils.clamp(-mouse.y * 0.4, -0.25, 0.25);

    // Smooth inertial easing
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetY,
      0.08
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetX,
      0.08
    );
  });

  return (
    // Robot fills hero via scale + camera, not extreme positioning
    <group position={[0, -1.8, 0]} scale={3.8}>

      {/* ===== PEDESTAL (TALL GLOSSY CUBE) ===== */}
      <RoundedBox
        args={[2.4, 3.2, 2.4]}
        radius={0.15}
        smoothness={6}
        position={[0, -2.2, 0]}
      >
        <meshStandardMaterial
          color="#0b0b0b"
          metalness={0.85}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Top blue highlight panel */}
      <RoundedBox
        args={[2.4, 0.18, 2.4]}
        radius={0.08}
        smoothness={6}
        position={[0, -0.55, 0]}
      >
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.95}
          roughness={0.2}
        />
      </RoundedBox>

      {/* ===== NECK (BALL JOINT + SHAFT) ===== */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.22, 0.26, 0.9, 32]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* ===== HEAD ===== */}
      <group ref={headRef} position={[0, 1.9, 0]} rotation={[0.25, 0, 0]}>

        {/* Outer metallic frame */}
        <RoundedBox
          args={[2.6, 1.6, 1.4]}
          radius={0.2}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#e5e7eb"
            metalness={0.85}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Inner face panel */}
        <RoundedBox
          args={[2.3, 1.3, 1.35]}
          radius={0.14}
          smoothness={8}
          position={[0, 0, 0.06]}
        >
          <meshStandardMaterial
            color="#020617"
            metalness={0.9}
            roughness={0.35}
          />
        </RoundedBox>

        {/* Eyes */}
        <mesh position={[-0.45, 0.1, 0.85]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#f9fafb"
            emissive="#e5e7eb"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh position={[0.45, 0.1, 0.85]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#f9fafb"
            emissive="#e5e7eb"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </group>
  );
}

/* =========================
   SCENE
========================= */
export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 3.2, 11], fov: 40 }}
      shadows
      gl={{ antialias: true }}
      className="absolute inset-0"
    >
      {/* ===== LIGHTING ===== */}

      {/* Soft ambient */}
      <ambientLight intensity={0.35} />

      {/* Top-down spotlight (panel light feel) */}
      <spotLight
        position={[0, 14, 6]}
        angle={0.5}
        penumbra={1}
        intensity={6}
        castShadow
      />

      {/* Blue fill */}
      <pointLight
        position={[-8, 5, 6]}
        intensity={2}
        color="#2563eb"
      />

      {/* Rim light */}
      <pointLight
        position={[8, 7, -8]}
        intensity={1.8}
        color="#93c5fd"
      />

      {/* ===== FLOOR GRID ===== */}
      <Grid
        position={[0, -4.6, 0]}
        args={[40, 40]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#1e293b"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#334155"
        fadeDistance={30}
        fadeStrength={1}
      />

      {/* Blue spotlight pool */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.55, 0]}>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial
          color="#1e40af"
          emissive="#1e40af"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Contact shadow */}
      <ContactShadows
        position={[0, -4.55, 0]}
        opacity={0.5}
        scale={18}
        blur={3}
        far={10}
      />

      <Robot />
    </Canvas>
  );
}
