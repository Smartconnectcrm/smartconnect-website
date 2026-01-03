"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

import type { Group, Mesh } from "three"

type RingDef = {
  id: "gold" | "silver" | "diamond"
  baseRadius: number
  tube: number
  phase: number
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function Scene() {
  const root = useRef<Group | null>(null)
  const bg = useRef<Mesh | null>(null)

  const paused = useRef(false)
  const { invalidate } = useThree()

  // 3 rings: gold, silver, ocean-blue diamond
  const rings = useMemo<RingDef[]>(
    () => [
      { id: "gold", baseRadius: 1.25, tube: 0.08, phase: 0.0 },
      { id: "silver", baseRadius: 1.18, tube: 0.075, phase: (Math.PI * 2) / 3 },
      { id: "diamond", baseRadius: 1.1, tube: 0.07, phase: (Math.PI * 4) / 3 },
    ],
    []
  )

  const materials = useMemo(() => {
    const gold = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d4af37"),
      metalness: 0.95,
      roughness: 0.22,
      envMapIntensity: 1.0,
    })

    const silver = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#c7cdd6"),
      metalness: 0.95,
      roughness: 0.18,
      envMapIntensity: 1.0,
    })

    // “Ocean blue diamond” feel: physical + transmission + clearcoat
    const diamond = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#1fb6ff"), // ocean-ish blue
      metalness: 0.05,
      roughness: 0.05,
      transmission: 0.65,
      thickness: 0.6,
      ior: 2.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.2,
    })

    const bgMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#071523"),
      roughness: 1,
      metalness: 0,
      emissive: new THREE.Color("#03111a"),
      emissiveIntensity: 0.8,
    })

    return { gold, silver, diamond, bgMat }
  }, [])

  useEffect(() => {
    const onVisibilityChange = () => {
      paused.current = document.visibilityState !== "visible"
      // wake a render when coming back
      if (!paused.current) invalidate()
    }
    onVisibilityChange()
    document.addEventListener("visibilitychange", onVisibilityChange)
    return () => document.removeEventListener("visibilitychange", onVisibilityChange)
  }, [invalidate])

  // tiny shimmer while paused (tab inactive): render very rarely
  const shimmerClock = useRef(0)

  useFrame((_, delta) => {
    const g = root.current
    if (!g) return

    // If tab is hidden -> micro shimmer (slow & low frequency)
    if (paused.current) {
      shimmerClock.current += delta
      if (shimmerClock.current < 0.45) return
      shimmerClock.current = 0

      g.rotation.y += 0.002
      g.rotation.x += 0.001
      if (bg.current) bg.current.rotation.z += 0.0008

      invalidate()
      return
    }

    // Normal animation
    const t = performance.now() * 0.001

    // Keep everything comfortably inside the hero rectangle:
    // - orbitRadius small
    // - z depth small
    const orbitRadius = 0.22
    const zDepth = 0.10

    // Root gentle motion
    g.rotation.y += delta * 0.12
    g.rotation.x += delta * 0.04

    // Inter-change: each ring orbits and also spins,
    // with phase offsets so they “swap” positions over time.
    for (let i = 0; i < g.children.length; i++) {
      const child = g.children[i]
      if (!(child instanceof THREE.Mesh)) continue

      const def = rings[i]
      const speed = 0.7
      const tt = t * speed + def.phase

      const x = Math.cos(tt) * orbitRadius
      const y = Math.sin(tt * 0.9) * (orbitRadius * 0.55)
      const z = Math.sin(tt * 1.15) * zDepth

      child.position.set(x, y, z)

      // Each ring rotates differently (inter-change feel)
      child.rotation.x = tt * 0.9
      child.rotation.y = tt * 1.1
      child.rotation.z = tt * 0.7
    }

    // Background subtle parallax
    if (bg.current) {
      const p = clamp(Math.sin(t * 0.5) * 0.03, -0.03, 0.03)
      bg.current.rotation.z = p
    }

    invalidate()
  })

  return (
    <>
      {/* Graphic background plane */}
      <mesh ref={bg} position={[0, 0, -1.1]}>
        <planeGeometry args={[10, 6]} />
        <primitive object={materials.bgMat} attach="material" />
      </mesh>

      {/* Soft vignette-ish rim lights */}
      <pointLight position={[2.6, 1.8, 2.4]} intensity={1.0} />
      <pointLight position={[-2.2, -1.6, 2.0]} intensity={0.8} />

      <group ref={root}>
        {rings.map((r) => {
          const mat =
            r.id === "gold" ? materials.gold : r.id === "silver" ? materials.silver : materials.diamond

          return (
            <mesh key={r.id}>
              <torusGeometry args={[r.baseRadius, r.tube, 64, 220]} />
              <primitive object={mat} attach="material" />
            </mesh>
          )
        })}
      </group>
    </>
  )
}

function useAdaptiveDpr() {
  return useMemo(() => {
    if (typeof window === "undefined") return [1, 1.25] as [number, number]
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    return isSmall ? ([1, 1.25] as [number, number]) : ([1, 1.5] as [number, number])
  }, [])
}

export default function SmartConnectHero3D() {
  const dpr = useAdaptiveDpr()

  return (
    <div className="h-[420px] md:h-[520px] w-full">
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 4.7], fov: 45 }}
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 4, 6]} intensity={1.0} />
        <Scene />
      </Canvas>
    </div>
  )
}
