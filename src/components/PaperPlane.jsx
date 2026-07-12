import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A simple low-poly paper plane built from basic geometry — no external model needed.
function PaperPlaneMesh() {
  return (
    <group rotation={[0, Math.PI / 2, 0]} scale={0.6}>
      {/* Body */}
      <mesh rotation={[0, 0, 0]}>
        <coneGeometry args={[0.15, 1, 4]} />
        <meshStandardMaterial color="#f0f4f8" flatShading />
      </mesh>
      {/* Left wing */}
      <mesh position={[-0.18, -0.02, 0]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.35, 0.6, 3]} />
        <meshStandardMaterial color="#38f0c8" flatShading />
      </mesh>
      {/* Right wing */}
      <mesh position={[0.18, -0.02, 0]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.35, 0.6, 3]} />
        <meshStandardMaterial color="#38f0c8" flatShading />
      </mesh>
    </group>
  );
}

export default function PaperPlane() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    // Looping flight path: a wide horizontal figure-eight-ish sweep
    const loopDuration = 8;
    const progress = (t % loopDuration) / loopDuration; // 0 -> 1
    const angle = progress * Math.PI * 2;

    const x = Math.sin(angle) * 2.4;
    const y = Math.sin(angle * 2) * 0.5 + 0.3;
    const z = Math.cos(angle) * 0.6;

    groupRef.current.position.set(x, y, z);

    // Bank into the turn — face direction of travel
    const nextAngle = angle + 0.01;
    const nextX = Math.sin(nextAngle) * 2.4;
    const nextY = Math.sin(nextAngle * 2) * 0.5 + 0.3;
    const dir = new THREE.Vector3(nextX - x, nextY - y, 0).normalize();
    groupRef.current.rotation.z = Math.atan2(dir.y, dir.x);
  });

  return (
    <group ref={groupRef}>
      <PaperPlaneMesh />
    </group>
  );
}
