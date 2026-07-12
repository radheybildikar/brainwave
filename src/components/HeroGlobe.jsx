import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import PaperPlane from "./PaperPlane";

// Approximate lat/long for a few Indian destinations, converted to 3D points on the sphere
const DESTINATIONS = [
  { name: "Goa", lat: 15.4909, lon: 73.8278 },
  { name: "Kerala", lat: 9.9312, lon: 76.2673 },
  { name: "Rajasthan", lat: 26.9124, lon: 75.7873 },
  { name: "Himachal", lat: 31.1048, lon: 77.1734 },
];

function latLonToVec3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function Marker({ position }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 3) * 0.3;
    if (ref.current) ref.current.scale.setScalar(scale);
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.035, 12, 12]} />
      <meshBasicMaterial color="#38f0c8" />
    </mesh>
  );
}

function Globe() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Base sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshStandardMaterial
          color="#0b3d3a"
          emissive="#0a2e2b"
          roughness={0.7}
          metalness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay for that "globe grid" look */}
      <mesh>
        <sphereGeometry args={[1.505, 24, 24]} />
        <meshBasicMaterial
          color="#38f0c8"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Destination markers */}
      {DESTINATIONS.map((d) => (
        <Marker key={d.name} position={latLonToVec3(d.lat, d.lon, 1.52)} />
      ))}
    </group>
  );
}

export default function HeroGlobe() {
  return (
    <div className="w-full h-[380px] md:h-[460px]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <Globe />
          <PaperPlane />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
