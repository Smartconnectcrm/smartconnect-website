"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import ThemeToggle from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"

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

// Uses your enterprise ring variable
const focusRing =
  "outline-none focus-visible:shadow-[0_0_0_6px_var(--ring)] rounded-full"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 pointer-events-auto">
      <div className="container-fixed py-5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <div className="min-w-0">
            <Link
              href="/"
              className={`inline-flex items-center gap-3 ${focusRing}`}
              aria-label="Startseite – SmartConnect CRM UG (haftungsbeschränkt)"
            >
              <Image
                src="/brand/smartconnect-logo.webp"
                alt="SmartConnect"
                width={44}
                height={44}
                priority
                className="shrink-0 rounded-xl"
                style={{ width: "44px", height: "44px" }}
              />

              <div className="min-w-0">
                <div
                  className="truncate text-sm font-black tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  SmartConnect CRM UG (haftungsbeschränkt)
                </div>
                <div className="truncate text-sm small-muted">
                  IT &amp; Digital Solutions · Enterprise &amp; Public Sector
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-3 md:flex">
            {nav.map((i) => {
              const active = isActive(pathname, i.href)
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`${active ? "nav-link nav-link-active" : "nav-link"} ${focusRing}`}
                  aria-current={active ? "page" : undefined}
                >
                  {i.label}
                </Link>
              )
            })}

            <div className="ml-1">
              <ThemeToggle />
            </div>

            <Button asChild variant="default" className="ml-2">
              <Link href="/contact" className={focusRing}>
                Kontakt
              </Link>
            </Button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Button asChild variant="default">
              <Link href="/contact" className={focusRing}>
                Kontakt
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 hr-soft" />

        {/* Compliance micro-bar */}
        <div className="mt-3 text-sm small-muted">
          Hinweis: Diese Website verwendet keine Analyse- oder Tracking-Technologien ohne Einwilligung.
        </div>
      </div>
    </header>
  )
}
