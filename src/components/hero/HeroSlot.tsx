// src/components/hero/HeroSlot.tsx
"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import Hero3DErrorBoundary from "./Hero3DErrorBoundary"

const SmartConnectHero3D = dynamic(() => import("./SmartConnectHero3D"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-slate-950">
      <div className="text-white/60 text-sm">Loading 3D visualization...</div>
    </div>
  ),
})

type HeroMode = "stable" | "scale" | "defense"

const HERO_MODES: Record<
  HeroMode,
  {
    label: string
    speed: number
    intensity: number
    status: string
  }
> = {
  stable: {
    label: "Stable",
    speed: 0.7,
    intensity: 1.0,
    status: "All services operating within nominal thresholds.",
  },
  scale: {
    label: "Scale",
    speed: 1.1,
    intensity: 1.15,
    status: "Capacity expansion active. Monitoring saturation signals.",
  },
  defense: {
    label: "Defense",
    speed: 0.45,
    intensity: 0.9,
    status: "Security posture tightened. Elevated monitoring enabled.",
  },
}

export default function HeroSlot() {
  const [mounted, setMounted] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [inView, setInView] = useState(false)
  const hostRef = useRef<HTMLDivElement | null>(null)

  // simple mode switch (deterministic, no external calls)
  const [mode, setMode] = useState<HeroMode>("stable")

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(media.matches)
    onChange()
    media.addEventListener?.("change", onChange)
    return () => media.removeEventListener?.("change", onChange)
  }, [])

  useEffect(() => {
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: "250px 0px", threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show3D = mounted && inView && !reduced
  const preset = HERO_MODES[mode]

  return (
    <section ref={hostRef} className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        {/* Always render poster as base layer */}
        <Image
          src="/hero/hero-poster.webp"
          alt="SmartConnect CRM UG – Enterprise IT & Digital Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay 3D when ready */}
        {show3D && (
          <div className="absolute inset-0 z-10">
            <Hero3DErrorBoundary>
              <SmartConnectHero3D speed={preset.speed} intensity={preset.intensity} />
            </Hero3DErrorBoundary>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />

        {/* Mode controls + status (enterprise-safe, subtle) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-4">
          <div className="pointer-events-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-950/65 backdrop-blur-2xl shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
              <div className="min-w-[220px]">
                <div className="text-[11px] font-semibold text-white/80">System Status</div>
                <div className="text-[10px] text-white/50">{preset.status}</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest hidden sm:inline">
                  Profile
                </span>

                {(Object.keys(HERO_MODES) as HeroMode[]).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setMode(k)}
                    className={`px-3 py-2 rounded-lg text-[10px] font-semibold border transition
                      ${
                        mode === k
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-transparent border-white/10 text-white/70 hover:bg-white/5"
                      }`}
                  >
                    {HERO_MODES[k].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-[10px] text-white/45 uppercase tracking-[0.22em]">
                  Procurement-safe · Deterministic visuals · No external calls
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-[10px] text-white/50">Params</div>
                  <div className="text-[10px] text-white/60">
                    speed {preset.speed.toFixed(2)} · intensity {preset.intensity.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end controls */}
      </div>
    </section>
  )
}
