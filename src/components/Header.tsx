"use client"

import { ChevronDown, Mail, Phone, ShieldCheck } from "lucide-react"
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
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen", mega: true as const },
  { href: "/about", label: "Unternehmen" },
  { href: "/compliance", label: "Compliance" },
]

const megaPrimary: MegaItem[] = [
  {
    href: "/services#it-service-operations-support",
    title: "IT Service & Operations",
    desc: "Runbooks, ITSM-nahe Prozesse, Übergabe & Betriebsfähigkeit.",
    tag: "Operations",
  },
  {
    href: "/services#cloud-modern-workplace-operations",
    title: "Cloud & Modern Workplace",
    desc: "M365/Azure Ops, Identity, Endpoint, Governance & Monitoring.",
    tag: "Cloud",
  },
  {
    href: "/services#security-by-design-baseline-hardening",
    title: "Security-by-Design",
    desc: "Baseline Hardening, Maßnahmenplan, Audit-fähige Nachweise.",
    tag: "Security",
  },
  {
    href: "/services#systemintegration-schnittstellen",
    title: "Systemintegration",
    desc: "APIs/ETL, dokumentierte Datenflüsse, kontrollierte Changes.",
    tag: "Integration",
  },
]

const megaSecondary: MegaItem[] = [
  {
    href: "/services#eu-tender-procurement-enablement",
    title: "EU Tender Enablement",
    desc: "Prüffähige Angebots-/Anhangstruktur, Compliance-Bausteine.",
    tag: "Procurement",
  },
  {
    href: "/services#data-reporting-foundations",
    title: "Data & Reporting",
    desc: "KPI-Katalog, Datenqualität, prüfbare Dashboard-Prototypen.",
    tag: "Data",
  },
  {
    href: "/services#delivery-support-project-recovery",
    title: "Delivery & Recovery",
    desc: "Stabilisierungssprints, Backlog, QS/Abnahme & Übergabe.",
    tag: "Delivery",
  },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

/**
 * Accessible focus ring
 */
const focusRing =
  "focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-slate-900/30 dark:focus-visible:ring-white/30 " +
  "focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ")
}

export default function Header() {
  const pathname = usePathname()
  const [megaOpen, setMegaOpen] = React.useState(false)

  const megaRef = React.useRef<HTMLDivElement | null>(null)

  // Close mega menu on outside click
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

  // Close on ESC
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!megaOpen) return
      if (e.key === "Escape") setMegaOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [megaOpen])

  // Close mega when route changes
  React.useEffect(() => {
    setMegaOpen(false)
  }, [pathname])

  // Language links (safe, non-breaking). You can later implement actual i18n routing.
  const langDE = `${pathname}?lang=de`
  const langEN = `${pathname}?lang=en`

  return (
    <header
      className={cx(
        "sticky top-0 z-40",
        "border-b",
        "bg-white/85 dark:bg-slate-950/70",
        "backdrop-blur supports-[backdrop-filter]:bg-white/75 supports-[backdrop-filter]:dark:bg-slate-950/60"
      )}
      style={{ borderColor: "var(--border)" }}
    >
      {/* Utility bar */}
      <div className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="container-fixed">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href="mailto:admin@smartclientcrm.com"
                className={cx(
                  "inline-flex items-center gap-2 font-semibold",
                  "text-slate-700 hover:text-slate-950",
                  "dark:text-slate-300 dark:hover:text-white",
                  focusRing
                )}
              >
                <Mail className="h-3.5 w-3.5 opacity-80" />
                admin@smartclientcrm.com
              </a>

              <a
                href="tel:+4921187973999233"
                className={cx(
                  "inline-flex items-center gap-2 font-semibold",
                  "text-slate-700 hover:text-slate-950",
                  "dark:text-slate-300 dark:hover:text-white",
                  focusRing
                )}
              >
                <Phone className="h-3.5 w-3.5 opacity-80" />
                +49 211 87973999233
              </a>

              <Link
                href="/compliance"
                className={cx(
                  "inline-flex items-center gap-2 font-semibold",
                  "text-slate-700 hover:text-slate-950",
                  "dark:text-slate-300 dark:hover:text-white",
                  focusRing
                )}
              >
                <ShieldCheck className="h-3.5 w-3.5 opacity-80" />
                Status / Compliance
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-semibold">Sprache:</span>

              <Link
                href={langDE}
                className={cx(
                  "rounded-full border px-2.5 py-1 font-extrabold tracking-wide",
                  "border-black/10 bg-slate-900/[0.03] text-slate-700 hover:bg-slate-900/[0.06]",
                  "dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]",
                  focusRing
                )}
              >
                DE
              </Link>
              <Link
                href={langEN}
                className={cx(
                  "rounded-full border px-2.5 py-1 font-extrabold tracking-wide",
                  "border-black/10 bg-slate-900/[0.03] text-slate-700 hover:bg-slate-900/[0.06]",
                  "dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]",
                  focusRing
                )}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-fixed">
        <div className="flex items-center justify-between gap-6 py-4 md:py-5">
          {/* Brand */}
          <Link
            href="/"
            className={cx(
              "group inline-flex min-w-0 items-center gap-3 rounded-xl px-2 py-2",
              "hover:bg-slate-900/[0.03] dark:hover:bg-white/[0.04]",
              focusRing
            )}
            aria-label={`Startseite – ${BRAND.name}`}
          >
            <div
              className={cx(
                "relative h-11 w-11 shrink-0 overflow-hidden rounded-xl",
                "ring-1 ring-black/5 dark:ring-white/10",
                "bg-white dark:bg-slate-900 shadow-sm"
              )}
            >
              <Image
                src="/brand/smartconnect-logo.webp"
                alt={BRAND.name}
                fill
                sizes="44px"
                priority
                className="object-contain p-1.5"
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-[15px] font-extrabold tracking-tight text-slate-950 dark:text-slate-50">
                {BRAND.name}
              </div>
              <div className="truncate text-xs font-semibold text-slate-600 dark:text-slate-400">
                IT &amp; Digital Solutions · Enterprise &amp; Public Sector
              </div>
            </div>
          </Link>

          {/* Desktop Nav with Mega Menu */}
          <div className="hidden md:flex items-center gap-2">
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
                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                        active
                          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                          : "text-slate-700 hover:bg-slate-900/[0.05] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white",
                        focusRing
                      )}
                    >
                      {i.label}
                      <ChevronDown className={cx("h-4 w-4 opacity-80 transition-transform", megaOpen && "rotate-180")} />
                    </button>

                    {/* Mega panel */}
                    {megaOpen ? (
                      <div
                        role="menu"
                        aria-label="Leistungen Menü"
                        className={cx(
                          "absolute left-0 mt-3 w-[720px] max-w-[85vw] overflow-hidden rounded-2xl",
                          "border border-black/10 dark:border-white/10",
                          "bg-white/95 dark:bg-slate-950/95",
                          "backdrop-blur shadow-xl"
                        )}
                      >
                        <div className="grid gap-0 md:grid-cols-12">
                          {/* Left: highlight */}
                          <div className="md:col-span-4 p-5 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/10">
                            <div className="text-xs font-extrabold tracking-wide text-slate-500 dark:text-slate-400">
                              LEISTUNGEN
                            </div>
                            <div className="mt-2 text-sm font-extrabold text-slate-950 dark:text-white">
                              Tender-ready Delivery
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                              Klar abgegrenzt, prüfbar dokumentiert und auf Betriebs- &amp; Übergabefähigkeit ausgelegt.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <Link
                                href="/services"
                                className={cx(
                                  "rounded-full border px-3 py-1 text-xs font-extrabold tracking-wide",
                                  "border-black/10 bg-slate-900/[0.03] text-slate-700 hover:bg-slate-900/[0.06]",
                                  "dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]",
                                  focusRing
                                )}
                              >
                                Übersicht
                              </Link>
                              <Link
                                href="/contact"
                                className={cx(
                                  "rounded-full border px-3 py-1 text-xs font-extrabold tracking-wide",
                                  "border-black/10 bg-slate-950 text-white hover:opacity-90",
                                  "dark:bg-white dark:text-slate-950",
                                  focusRing
                                )}
                              >
                                Geschäftsanfrage
                              </Link>
                            </div>
                          </div>

                          {/* Right: links */}
                          <div className="md:col-span-8 p-5">
                            <div className="grid gap-4 sm:grid-cols-2">
                              {[...megaPrimary, ...megaSecondary].map((m) => (
                                <Link
                                  key={m.href}
                                  href={m.href}
                                  className={cx(
                                    "group rounded-xl border border-black/5 dark:border-white/10",
                                    "bg-slate-900/[0.02] dark:bg-white/[0.03]",
                                    "p-4 hover:bg-slate-900/[0.04] dark:hover:bg-white/[0.06]",
                                    focusRing
                                  )}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="text-sm font-extrabold text-slate-950 dark:text-white">
                                      {m.title}
                                    </div>
                                    {m.tag ? (
                                      <span className="shrink-0 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-slate-600 dark:text-slate-300">
                                        {m.tag}
                                      </span>
                                    ) : null}
                                  </div>
                                  <div className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    {m.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-3">
                              <Link
                                href="/services#catalog"
                                className={cx(
                                  "text-xs font-extrabold tracking-wide text-slate-700 hover:text-slate-950",
                                  "dark:text-slate-300 dark:hover:text-white",
                                  focusRing
                                )}
                              >
                                Zum Katalog →
                              </Link>

                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                Dokumentation · Governance · Compliance
                              </span>
                            </div>
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
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-700 hover:bg-slate-900/[0.05] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white",
                    focusRing
                  )}
                >
                  {i.label}
                </Link>
              )
            })}

            <div className="ml-2 flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className={cx(
                  "rounded-full px-5 py-2.5 text-sm font-extrabold tracking-tight",
                  "bg-slate-950 text-white shadow-sm hover:shadow-md transition-shadow hover:opacity-95",
                  "dark:bg-white dark:text-slate-950",
                  focusRing
                )}
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Mobile actions (kept minimal; we can add a mobile drawer next) */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className={cx(
                "rounded-full px-4 py-2 text-sm font-extrabold tracking-tight",
                "bg-slate-950 text-white shadow-sm hover:opacity-95",
                "dark:bg-white dark:text-slate-950",
                focusRing
              )}
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* Compliance microcopy row (optional, corporate) */}
        <div className="pb-4">
          <div className="hr-soft" />
          <p className="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
            Hinweis: Diese Website verwendet keine Analyse- oder Tracking-Technologien ohne Einwilligung.
          </p>
        </div>
      </div>
    </header>
  )
}
