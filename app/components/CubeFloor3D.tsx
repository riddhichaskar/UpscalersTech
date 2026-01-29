"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ---------- CUBE GRID ---------- */
function CubeGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = new THREE.Object3D();

  const count = 20;
  const spacing = 1.2;

  const positions = useMemo(() => {
    const temp = [];
    for (let x = -count / 2; x < count / 2; x++) {
      for (let z = -count / 2; z < count / 2; z++) {
        temp.push([x * spacing, 0, z * spacing]);
      }
    }
    return temp;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;

    positions.forEach((pos, i) => {
      dummy.position.set(pos[0], 0, pos[2]);
      dummy.rotation.y = t;
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, positions.length]}
    >
      <boxGeometry args={[0.9, 0.2, 0.9]} />
      <meshStandardMaterial
        color="#0f1220"
        roughness={0.9}
        metalness={0.2}
      />
    </instancedMesh>
  );
}

/* ---------- CAMERA ---------- */
function CameraRig() {
  const ref = useRef<THREE.PerspectiveCamera>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.15) * 1.2;
    ref.current.position.z = 12 + Math.cos(t * 0.15) * 0.8;
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      fov={50}
      position={[0, 6, 12]}
    />
  );
}

/* ---------- MAIN ---------- */
export default function CubeFloor3D() {
  return (
    <div className="absolute bottom-0 left-0 h-[50vh] w-full">
      <Canvas>
        <CameraRig />
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 10, 4]} intensity={1} />
        <CubeGrid />
      </Canvas>

      {/* Depth fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
    </div>
  );
}
