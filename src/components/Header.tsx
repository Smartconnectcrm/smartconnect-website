"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


import ThemeToggle from "@/components/ThemeToggle"

const nav = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Unternehmen" },
  { href: "/compliance", label: "Compliance" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

/**
 * Accessible focus ring
 * - Light mode: dark ring + white offset
 * - Dark mode: light ring + dark offset
 */
const focusRing =
  "focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-slate-900/30 dark:focus-visible:ring-white/30 " +
  "focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="border-b" style={{ borderColor: "var(--border)" }}>
      <div className="container-fixed py-5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <div className="min-w-0">
            <Link
              href="/"
              className={`no-underline ${focusRing} inline-flex items-center gap-3 rounded-md`}
              aria-label="Startseite – SmartConnect CRM UG (haftungsbeschränkt)"
            >
              <Image
                src="/brand/smartconnect-logo.webp"
                alt="SmartConnect"
                width={44}
                height={44}
                priority
                className="shrink-0 rounded-md"
                style={{ width: "44px", height: "44px" }}
              />

              <div className="min-w-0">
                <div
                  className="text-base font-extrabold tracking-tight truncate"
                  style={{ color: "var(--text-strong)" }}
                >
                  SmartConnect CRM UG (haftungsbeschränkt)
                </div>
                <div className="text-sm small-muted truncate">
                  IT &amp; Digital Solutions · Enterprise &amp; Public Sector
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-5 text-sm">
            {nav.map((i) => {
              const active = isActive(pathname, i.href)
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`${active ? "nav-link nav-link-active" : "nav-link"} ${focusRing} rounded-md`}
                  aria-current={active ? "page" : undefined}
                >
                  {i.label}
                </Link>
              )
            })}

            <ThemeToggle />

            <Link href="/contact" className={`btn-primary ${focusRing}`}>
              Kontakt
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className={`btn-primary ${focusRing}`}>
              Kontakt
            </Link>
          </div>
        </div>

        <div className="mt-5 hr-soft" />

        <p className="mt-3 text-sm small-muted">
          Hinweis: Diese Website verwendet keine Analyse- oder Tracking-Technologien ohne Einwilligung.
        </p>
      </div>
    </div>
  )
}
