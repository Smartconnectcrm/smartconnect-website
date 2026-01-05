"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { Suspense, useEffect, useRef, useState } from "react"

const SmartConnectHero3D = dynamic(() => import("./SmartConnectHero3D"), {
  ssr: false,
})

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [inView, setInView] = useState(false)
  const hostRef = useRef<HTMLDivElement | null>(null)

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

  return (
    <div ref={hostRef} className="relative">
      {/* Outer halo (variant) */}
      <div className="pointer-events-none absolute -inset-6 rounded-[28px] blur-2xl
        bg-gradient-to-br from-emerald-400/10 via-sky-500/10 to-amber-300/10
        dark:from-emerald-400/15 dark:via-sky-500/12 dark:to-amber-300/12"
      />

      <div
        className="
          relative overflow-hidden rounded-2xl border
          border-black/10 bg-white
          dark:border-white/10 dark:bg-slate-950
        "
      >
        {/* ===== Graphical rectangle background (light/dark variants) ===== */}
        <div className="pointer-events-none absolute inset-0">
          {/* Gradient base */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.12),_transparent_55%)]
              dark:bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.10),_transparent_55%)]
            "
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.10] dark:opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.10) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Dark mode grid uses white lines; we overlay a second grid only in dark */}
          <div
            className="absolute inset-0 hidden dark:block opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Vignette (light vs dark) */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(15,23,42,0.22)_100%)]
              dark:bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(2,6,23,0.65)_100%)]
            "
          />

          {/* Inline SVG grain (no external file) */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-[0.06] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Soft top highlight (light mode only) */}
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.55),_transparent)] dark:hidden" />
        </div>

        {/* ===== Poster (LCP) OR 3D ===== */}
        {!show3D ? (
          <Image
            src="/hero/hero-poster.webp"
            alt="SmartConnect CRM UG – Enterprise IT & Digital Solutions"
            width={1890}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="h-[420px] md:h-[520px] w-full object-cover"
          />
        ) : (
          <Suspense fallback={null}>
            <SmartConnectHero3D />
          </Suspense>
        )}

        {/* Brand overlay (variant) */}
        <div className="pointer-events-none absolute left-4 top-4 md:left-5 md:top-5">
          <div
            className="
              flex items-center rounded-xl border px-3 py-2 backdrop-blur-md
              border-black/10 bg-white/65
              dark:border-white/10 dark:bg-slate-950/55
            "
          >
            <Image
              src="/brand/smartconnect-logo.webp"
              alt="SmartConnect CRM UG"
              width={150}
              height={32}
              className="h-8 w-auto"
              style={{ width: "auto", height: "32px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
