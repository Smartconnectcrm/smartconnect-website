"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import * as React from "react"

import Hero3DErrorBoundary from "./Hero3DErrorBoundary"

/**
 * Concept B: Modern Institutional Hero
 * - 70vh height with fixed background effect
 * - Centered overlay content
 * - Dramatic typography with tight tracking
 * - Animated gradient border decoration
 */

const SmartConnectHero3D = dynamic(() => import("./SmartConnectHero3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-brand-light-bg dark:bg-brand-dark-bg">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-brand-diamond border-t-transparent" />
        <p className="mt-4 text-sm font-medium text-brand-light-muted dark:text-brand-dark-muted">
          Initialisiere 3D-Visualisierung...
        </p>
      </div>
    </div>
  ),
})

export default function HeroSlot() {
  const [mounted, setMounted] = React.useState(false)
  const [inView, setInView] = React.useState(false)
  const heroRef = React.useRef<HTMLDivElement | null>(null)

  // Mount detection
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Intersection observer for lazy loading
  React.useEffect(() => {
    if (!mounted || !heroRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(heroRef.current)

    return () => observer.disconnect()
  }, [mounted])

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden bg-brand-light-bg dark:bg-brand-dark-bg"
      style={{ height: "70vh", minHeight: "500px", maxHeight: "800px" }}
    >
      {/* Poster Image (Always Visible) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero-poster.webp"
          alt="SmartConnect CRM – Interlocked rings visualization"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 dark:opacity-20"
        />
      </div>

      {/* 3D Canvas Layer */}
      {mounted && inView ? (
        <div className="absolute inset-0 z-10">
          <Hero3DErrorBoundary>
            <SmartConnectHero3D />
          </Hero3DErrorBoundary>
        </div>
      ) : null}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-brand-light-bg/80 via-brand-light-bg/40 to-brand-light-bg/90 dark:from-brand-dark-bg/80 dark:via-brand-dark-bg/40 dark:to-brand-dark-bg/90" />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-6">
            {/* Decorative Element */}
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-brand-gold via-brand-diamond to-brand-gold blur-xl opacity-50" />
                <div className="relative rounded-full border-4 border-brand-gold/50 px-6 py-2 backdrop-blur-sm">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-light-text dark:text-brand-dark-text">
                    Enterprise &amp; Public Sector
                  </span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-light-text dark:text-brand-dark-text mb-6 leading-none animate-fade-in">
              Strukturierte
              <br />
              <span className="bg-gradient-to-r from-brand-gold via-brand-diamond to-brand-gold bg-clip-text text-transparent">
                IT-Lösungen
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-brand-light-muted dark:text-brand-dark-muted leading-relaxed mb-12 animate-slide-up">
              Compliance-orientiert · Dokumentiert · Tender-ready
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up">
              <a
                href="#content"
                className="btn btn-primary btn-large"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#content")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Mehr erfahren
              </a>

              <a href="/services" className="btn btn-secondary btn-large">
                Leistungen
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <svg
                className="mx-auto h-6 w-6 text-brand-light-muted dark:text-brand-dark-muted"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
