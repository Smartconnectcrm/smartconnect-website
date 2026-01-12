// src/components/hero/Hero3D.tsx
"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { Suspense, useEffect, useRef, useState } from "react"

const SmartConnectHero3D = dynamic(() => import("./SmartConnectHero3D"), {
  ssr: false,
})

type ScenarioKey = "stable" | "scale" | "defense"

const HERO_SCENARIOS: Record<
  ScenarioKey,
  {
    label: string
    status: string
    mode: string
    risk: "LOW" | "MED" | "HIGH"
    speed: number
    intensity: number
  }
> = {
  stable: {
    label: "Stable",
    status: "All services operating within nominal thresholds.",
    mode: "NORMAL",
    risk: "LOW",
    speed: 0.7,
    intensity: 0.95,
  },
  scale: {
    label: "Scale",
    status: "Capacity expansion active. Monitoring saturation signals.",
    mode: "AUTOSCALE",
    risk: "MED",
    speed: 1.15,
    intensity: 1.1,
  },
  defense: {
    label: "Defense",
    status: "Security posture tightened. Elevated monitoring enabled.",
    mode: "HARDENED",
    risk: "MED",
    speed: 0.45,
    intensity: 1.25,
  },
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [inView, setInView] = useState(false)
  const hostRef = useRef<HTMLDivElement | null>(null)

  // Enterprise deterministic mode selector
  const [scenario, setScenario] = useState<ScenarioKey>("stable")

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
      { root: null, rootMargin: "250px 0px", threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show3D = mounted && inView && !reduced
  const preset = HERO_SCENARIOS[scenario]

  return (
    <div ref={hostRef} className="relative h-full w-full">
      {/* Outer halo */}
      <div
        className="
          pointer-events-none absolute -inset-6 rounded-[28px] blur-2xl
          bg-gradient-to-br from-emerald-400/10 via-sky-500/10 to-amber-300/10
          dark:from-emerald-400/15 dark:via-sky-500/12 dark:to-amber-300/12
        "
      />

      {/* Main frame */}
      <div
        className="
          relative h-full w-full overflow-hidden rounded-2xl border
          border-black/10 bg-white
          dark:border-white/10 dark:bg-slate-950
        "
      >
        {/* Background system */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.12),_transparent_55%)]
              dark:bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.10),_transparent_55%)]
            "
          />
          <div
            className="absolute inset-0 opacity-[0.10] dark:opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.10) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(15,23,42,0.22)_100%)]
              dark:bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(2,6,23,0.65)_100%)]
            "
          />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-[0.06] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.55),_transparent)] dark:hidden" />
        </div>

        {/* Viewport */}
        <div className="relative h-full w-full">
          {!show3D ? (
            <Image
              src="/hero/hero-poster.webp"
              alt="SmartConnect CRM UG – Enterprise IT & Digital Solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <Suspense fallback={null}>
              <div className="absolute inset-0">
                <SmartConnectHero3D speed={preset.speed} intensity={preset.intensity} />
              </div>
            </Suspense>
          )}
        </div>

        {/* ===== Enterprise Overlay (clean) ===== */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Top bar */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
            {/* Left: system label */}
            <div className="pointer-events-none hidden md:block">
              <div className="rounded-xl border border-white/10 bg-slate-950/45 backdrop-blur-xl px-4 py-2">
                <div className="text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                  SmartConnect · Infrastructure Visualization
                </div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.22em] mt-1">
                  Mode: {preset.mode} · Risk: {preset.risk}
                </div>
              </div>
            </div>

            {/* Right: compact diagnostics */}
            <div className="pointer-events-auto ml-auto rounded-xl border border-white/10 bg-slate-950/45 backdrop-blur-xl px-4 py-2">
              <div className="flex items-center gap-3">
                <div className="text-[10px] font-semibold tracking-widest text-white/70 uppercase">Diagnostics</div>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-2 text-[10px] text-white/60">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                  <span>Render OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom enterprise console */}
          <div className="absolute inset-x-0 bottom-5 flex justify-center px-4">
            <div className="pointer-events-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-950/65 backdrop-blur-2xl shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
                <div className="min-w-[220px]">
                  <div className="text-[11px] font-semibold text-white/80">System Status</div>
                  <div className="text-[10px] text-white/50">{preset.status}</div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest hidden sm:inline">Profile</span>

                  {(["stable", "scale", "defense"] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setScenario(key)}
                      className={`px-3 py-2 rounded-lg text-[10px] font-semibold border transition
                        ${
                          scenario === key
                            ? "bg-white/10 border-white/20 text-white"
                            : "bg-transparent border-white/10 text-white/70 hover:bg-white/5"
                        }`}
                    >
                      {HERO_SCENARIOS[key].label}
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
                    <div className="text-[10px] text-white/50">Theme</div>
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300/70" />
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-300/70" />
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== End Enterprise Overlay ===== */}
      </div>
    </div>
  )
}
