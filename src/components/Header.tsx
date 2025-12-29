"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b" style={{ borderColor: "var(--border)" }}>
      <div className="container-fixed py-5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <div className="min-w-0">
            <Link href="/" className="no-underline">
              <div className="text-base font-extrabold tracking-tight" style={{ color: "var(--text-strong)" }}>
                SmartConnect CRM UG (haftungsbeschränkt)
              </div>
              <div className="text-sm small-muted">IT &amp; Digital Solutions · Enterprise &amp; Public Sector</div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {nav.map((i) => {
              const active = isActive(pathname, i.href)
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={active ? "nav-link nav-link-active" : "nav-link"}
                  aria-current={active ? "page" : undefined}
                >
                  {i.label}
                </Link>
              )
            })}

            <Link href="/contact" className="btn-primary">
              Kontakt
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Link href="/contact" className="btn-primary">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="mt-5 hr-soft" />
        <div className="mt-3 text-sm small-muted">
          Hinweis: Diese Website verwendet keine Analyse- oder Tracking-Technologien ohne Einwilligung.
        </div>
      </div>
    </header>
  )
}
