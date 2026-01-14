"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import ThemeToggle from "@/components/ThemeToggle"
import { BRAND } from "@/lib/branding"

type MegaItem = {
  href: string
  title: string
  desc: string
  tag?: string
}

const nav = [
  { href: "/", label: "START" },
  { href: "/services", label: "LEISTUNGEN", mega: true as const },
  { href: "/procurement", label: "PROCUREMENT" },
  { href: "/compliance", label: "COMPLIANCE" },
  { href: "/contact", label: "KONTAKT" },
]

const megaPrimary: MegaItem[] = [
  {
    href: "/services#it-service-operations-support",
    title: "IT Service & Operations",
    desc: "Runbooks, ITSM-nahe Prozesse, Übergabe & Betriebsfähigkeit.",
    tag: "Run",
  },
  {
    href: "/services#cloud-modern-workplace-operations",
    title: "Cloud & Modern Workplace",
    desc: "M365/Azure Ops, Identity, Endpoint, Governance & Monitoring.",
    tag: "Run",
  },
  {
    href: "/services#security-by-design-baseline-hardening",
    title: "Security-by-Design",
    desc: "Baseline Hardening, Maßnahmenplan, Audit-fähige Nachweise.",
    tag: "Advisory",
  },
  {
    href: "/services#systemintegration-schnittstellen",
    title: "Systemintegration",
    desc: "APIs/ETL, dokumentierte Datenflüsse, kontrollierte Changes.",
    tag: "Change",
  },
]

const megaSecondary: MegaItem[] = [
  {
    href: "/services#eu-tender-procurement-enablement",
    title: "EU Tender Enablement",
    desc: "Prüffähige Angebots-/Anhangstruktur, Compliance-Bausteine.",
    tag: "Advisory",
  },
  {
    href: "/services#data-reporting-foundations",
    title: "Data & Reporting",
    desc: "KPI-Katalog, Datenqualität, prüfbare Dashboard-Prototypen.",
    tag: "Change",
  },
  {
    href: "/services#delivery-support-project-recovery",
    title: "Delivery & Recovery",
    desc: "Stabilisierungssprints, Backlog, QS/Abnahme & Übergabe.",
    tag: "Change",
  },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

const focusRing =
  "focus:outline-none focus-visible:ring-4 " +
  "focus-visible:ring-brand-diamond/30 " +
  "focus-visible:ring-offset-4 " +
  "focus-visible:ring-offset-brand-light-bg dark:focus-visible:ring-offset-brand-dark-bg"

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ")
}

export default function Header() {
  const pathname = usePathname()
  const [megaOpen, setMegaOpen] = React.useState(false)

  const megaRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!megaOpen) return
      const el = megaRef.current
      if (!el) return
      if (e.target instanceof Node && !el.contains(e.target)) setMegaOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [megaOpen])

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!megaOpen) return
      if (e.key === "Escape") setMegaOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [megaOpen])

  React.useEffect(() => {
    setMegaOpen(false)
  }, [pathname])

  return (
    <header
      className={cx(
        "sticky top-0 z-40",
        "bg-brand-light-bg/95 dark:bg-brand-dark-bg/95",
        "backdrop-blur-md",
        "border-b border-brand-light-border dark:border-brand-dark-border",
        "shadow-soft-sm"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Brand */}
          <Link
            href="/"
            className={cx(
              "group inline-flex min-w-0 items-center gap-3 rounded-lg px-2 py-2",
              "hover:bg-brand-light-muted/50 dark:hover:bg-brand-dark-muted/50",
              "transition-all duration-200",
              focusRing
            )}
            aria-label={`Startseite – ${BRAND.name}`}
          >
            <div
              className={cx(
                "relative h-10 w-10 shrink-0 overflow-hidden rounded-lg",
                "bg-gradient-to-br from-brand-gold to-brand-diamond",
                "shadow-soft-md",
                "p-0.5"
              )}
            >
              <div className="h-full w-full bg-white dark:bg-brand-nearblack rounded-lg p-1.5">
                <Image
                  src="/brand/smartconnect-logo.webp"
                  alt={BRAND.name}
                  fill
                  sizes="40px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-heading font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text">
                {BRAND.name}
              </div>
              <div className="truncate text-xs font-medium text-brand-light-muted dark:text-brand-dark-muted">
                Enterprise &amp; Public Sector
              </div>
            </div>
          </Link>

          {/* Desktop Nav with Mega Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {nav.map((i) => {
              const active = isActive(pathname, i.href)

              if (i.mega) {
                return (
                  <div
                    key={i.href}
                    className="relative"
                    ref={megaRef}
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setMegaOpen((v) => !v)}
                      onFocus={() => setMegaOpen(true)}
                      aria-haspopup="menu"
                      aria-expanded={megaOpen}
                      className={cx(
                        "inline-flex items-center gap-2 rounded-lg px-4 py-2",
                        "font-heading text-xs font-bold tracking-wide uppercase",
                        "transition-all duration-200",
                        active
                          ? "bg-brand-gold text-brand-charcoal shadow-glow-gold"
                          : "text-brand-light-text dark:text-brand-dark-text hover:bg-brand-light-muted/50 dark:hover:bg-brand-dark-muted/50",
                        focusRing
                      )}
                    >
                      {i.label}
                      <ChevronDown className={cx("h-4 w-4 transition-transform duration-300", megaOpen && "rotate-180")} />
                    </button>

                    {megaOpen ? (
                      <div
                        role="menu"
                        aria-label="Leistungen Menü"
                        className={cx(
                          "absolute left-1/2 -translate-x-1/2 mt-4 w-[900px] max-w-[90vw]",
                          "rounded-2xl overflow-hidden",
                          "bg-brand-light-bg dark:bg-brand-dark-bg",
                          "border border-brand-light-border dark:border-brand-dark-border",
                          "shadow-soft-xl",
                          "animate-slide-down"
                        )}
                      >
                        <div className="p-8">
                          <div className="mb-6 pb-6 border-b-2 border-gradient-gold-diamond">
                            <h3 className="font-heading text-2xl font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                              Leistungen
                            </h3>
                            <p className="text-brand-light-muted dark:text-brand-dark-muted">
                              Tender-ready Delivery · Klar abgegrenzt, prüfbar dokumentiert
                            </p>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            {[...megaPrimary, ...megaSecondary].map((m) => (
                              <Link
                                key={m.href}
                                href={m.href}
                                className={cx(
                                  "group rounded-xl p-5",
                                  "bg-brand-light-bg dark:bg-brand-dark-bg",
                                  "border border-brand-light-border dark:border-brand-dark-border",
                                  "hover:border-brand-diamond hover:shadow-soft-md",
                                  "transition-all duration-300",
                                  focusRing
                                )}
                              >
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <div className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text group-hover:text-brand-diamond transition-colors">
                                    {m.title}
                                  </div>
                                  {m.tag ? (
                                    <span className="shrink-0 rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-3 py-1 text-xs font-bold text-brand-charcoal">
                                      {m.tag}
                                    </span>
                                  ) : null}
                                </div>
                                <div className="text-sm text-brand-light-muted dark:text-brand-dark-muted">
                                  {m.desc}
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-6 pt-6 border-t border-brand-light-border dark:border-brand-dark-border flex items-center justify-between">
                            <Link href="/services" className={cx("btn btn-primary", focusRing)}>
                              Alle Leistungen
                            </Link>
                            <Link href="/contact" className={cx("btn btn-secondary", focusRing)}>
                              Geschäftsanfrage
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )
              }

              return (
                <Link
                  key={i.href}
                  href={i.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "rounded-lg px-4 py-2",
                    "font-heading text-xs font-bold tracking-wide uppercase",
                    "transition-all duration-200",
                    active
                      ? "bg-brand-gold text-brand-charcoal shadow-glow-gold"
                      : "text-brand-light-text dark:text-brand-dark-text hover:bg-brand-light-muted/50 dark:hover:bg-brand-dark-muted/50",
                    focusRing
                  )}
                >
                  {i.label}
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link href="/contact" className={cx("btn btn-primary hidden lg:inline-flex", focusRing)}>
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
