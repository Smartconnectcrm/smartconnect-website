"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Color, Euler, type Group, type Mesh } from "three"

function useAdaptiveDpr() {
  return useMemo(() => {
    if (typeof window === "undefined") return [1, 1.25] as [number, number]
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    return isSmall ? ([1, 1.25] as [number, number]) : ([1, 1.35] as [number, number])
  }, [])
}

// Smooth approach without extra deps
function damp(current: number, target: number, lambda: number, dt: number) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt))
}

function Scene() {
  const group = useRef<Group | null>(null)
  const ringGold = useRef<Mesh | null>(null)
  const ringSilver = useRef<Mesh | null>(null)
  const ringOcean = useRef<Mesh | null>(null)

  const paused = useRef(false)
  const settled = useRef(false)
  const settleTime = 5 // seconds until we enter micro-shimmer
  const { invalidate } = useThree()

  useEffect(() => {
    const onVisibilityChange = () => {
      paused.current = document.visibilityState !== "visible"
      if (!paused.current) invalidate()
    }
    onVisibilityChange()
    document.addEventListener("visibilitychange", onVisibilityChange)
    return () => document.removeEventListener("visibilitychange", onVisibilityChange)
  }, [invalidate])

  // Colors
  const crystal = useMemo(() => new Color("#eef7ff"), [])
  const edgeBlue = useMemo(() => new Color("#38bdf8"), [])
  const gold = useMemo(() => new Color("#d4af37"), [])
  const silver = useMemo(() => new Color("#cfd6dd"), [])
  const oceanBlue = useMemo(() => new Color("#0ea5e9"), []) // ocean blue diamond ring

  // Planes that swap between rings (for the first phase)
  const planes = useMemo(
    () => [
      new Euler(Math.PI / 2, 0, 0), // X plane
      new Euler(0, Math.PI / 2, 0), // Y plane
      new Euler(Math.PI / 3, Math.PI / 4, 0), // angled
    ],
    []
  )

  useFrame((state, dt) => {
    if (paused.current) return
    if (!group.current) return

    const t = state.clock.elapsedTime
    const rings: Array<Mesh | null> = [ringGold.current, ringSilver.current, ringOcean.current]

    // ----- Phase 1: premium motion + swapping (0..5s) -----
    if (t < settleTime) {
      group.current.rotation.y += dt * 0.10
      group.current.rotation.x += dt * 0.03

      const SWITCH_SEC = 6
      const slot = Math.floor(t / SWITCH_SEC) % 3
      const speeds = [0.14, 0.20, 0.26] // slow/med/fast

      rings.forEach((r, i) => {
        if (!r) return

        const targetPlane = planes[(i + slot) % 3]
        r.rotation.x = damp(r.rotation.x, targetPlane.x, 6, dt)
        r.rotation.y = damp(r.rotation.y, targetPlane.y, 6, dt)
        r.rotation.z = damp(r.rotation.z, targetPlane.z, 6, dt)

        const speed = speeds[(i + slot) % 3]
        r.rotation.z += dt * speed
      })

      invalidate()
      return
    }

    // ----- Phase 2: micro-shimmer (after 5s) -----
    // We "settle" once into the current pose so it doesn't jump.
    if (!settled.current) {
      settled.current = true
    }

    // Ultra-subtle living motion (tiny oscillations)
    const shimmer = 0.012 // overall amplitude (keep tiny)
    const s1 = Math.sin(t * 0.55) * shimmer
    const s2 = Math.cos(t * 0.42) * shimmer

    // Core: barely moves
    group.current.rotation.y += dt * 0.012
    group.current.rotation.x += dt * 0.006
    group.current.rotation.z = damp(group.current.rotation.z, s2, 2.5, dt)

    // Rings: slow constant rotation + tiny “breathing”
    rings.forEach((r, i) => {
      if (!r) return
      const base = 0.018 + i * 0.004 // slightly different per ring
      r.rotation.z += dt * base

      // micro “breath” on x/y so it feels premium, not static
      const phase = i * 1.7
      const tx = s1 * (0.9 - i * 0.15) + Math.sin(t * 0.33 + phase) * 0.004
      const ty = s2 * (0.9 - i * 0.15) + Math.cos(t * 0.31 + phase) * 0.004
      r.rotation.x = damp(r.rotation.x, r.rotation.x + tx, 1.6, dt)
      r.rotation.y = damp(r.rotation.y, r.rotation.y + ty, 1.6, dt)
    })

    invalidate()
  })

  return (
    <group ref={group} scale={0.9}>
      {/* Diamond core */}
      <mesh>
        <icosahedronGeometry args={[1.38, 2]} />
        <meshStandardMaterial
          color={crystal}
          metalness={0.28}
          roughness={0.16}
          envMapIntensity={0.9}
        />
      </mesh>

      {/* Facet sheen */}
      <mesh scale={1.01}>
        <icosahedronGeometry args={[1.38, 2]} />
        <meshStandardMaterial
          color={edgeBlue}
          metalness={0.12}
          roughness={0.34}
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Gold ring */}
      <mesh ref={ringGold} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.042, 24, 128]} />
        <meshStandardMaterial color={gold} metalness={0.92} roughness={0.24} />
      </mesh>

      {/* Silver ring */}
      <mesh ref={ringSilver} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.9, 0.036, 24, 128]} />
        <meshStandardMaterial color={silver} metalness={0.88} roughness={0.32} />
      </mesh>

      {/* Ocean blue “diamond” ring */}
      <mesh ref={ringOcean} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.1, 0.032, 24, 128]} />
        <meshStandardMaterial
          color={oceanBlue}
          metalness={0.78}
          roughness={0.18}
          transparent
          opacity={0.96}
          envMapIntensity={1.0}
        />
      </mesh>
    </group>
  )
}

export default function SmartConnectHero3D() {
  const dpr = useAdaptiveDpr()
  const [lost, setLost] = useState(false)

  const onCreated = useCallback(({ gl }: any) => {
    const canvas: HTMLCanvasElement | undefined = gl?.domElement
    if (!canvas) return

    const handleLost = (e: Event) => {
      try {
        ;(e as any).preventDefault?.()
      } catch {}
      setLost(true)
    }

    canvas.addEventListener("webglcontextlost", handleLost as any, { passive: false })
    return () => canvas.removeEventListener("webglcontextlost", handleLost as any)
  }, [])

  if (lost) {
    return (
      <div className="h-[420px] md:h-[520px] w-full">
        <Image
          src="/hero/hero-poster.webp"
          alt="SmartConnect CRM UG – Hero"
          width={1890}
          height={1080}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="h-[420px] md:h-[520px] w-full">
      <Canvas
        key="hero-canvas"
        frameloop="demand"
        camera={{ position: [0, 0, 6.0], fov: 42 }}
        dpr={dpr}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        onCreated={onCreated}
      >
        {/* Keep Canvas transparent; your Hero3D rectangle provides the background */}
        <ambientLight intensity={0.42} />
        <directionalLight position={[6, 8, 6]} intensity={1.45} />
        <directionalLight position={[-6, -4, 4]} intensity={0.62} />
        <directionalLight position={[0, 4, -6]} intensity={0.42} />

        <Scene />
      </Canvas>
    </div>
  )
}
