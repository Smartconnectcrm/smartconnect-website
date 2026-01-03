"use client"

import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMemo } from "react"
import * as THREE from "three"

function CoreRings() {
  const rings = useMemo(
    () => [
      { r: 1.1, rot: [0.2, 0.0, 0.0] as [number, number, number] },
      { r: 1.35, rot: [0.0, 0.25, 0.0] as [number, number, number] },
      { r: 1.6, rot: [0.0, 0.0, 0.35] as [number, number, number] },
    ],
    []
  )

  return (
    <group>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={ring.rot}>
          <torusGeometry args={[ring.r, 0.05, 16, 160]} />
          <meshStandardMaterial
            color="#C7CDD6"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>
      ))}

      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshPhysicalMaterial
          color="#DFF9FF"
          metalness={0.0}
          roughness={0.05}
          transmission={0.95}
          thickness={0.8}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 35 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 4]} intensity={1.0} />
        <directionalLight position={[-4, 2, 2]} intensity={0.35} />

        <CoreRings />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
