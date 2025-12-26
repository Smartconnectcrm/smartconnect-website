import Link from "next/link"

const nav = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Unternehmen" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Kontakt" },
]

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: "var(--border)" }}>
      <div className="container-fixed py-5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <div className="min-w-0">
            <Link href="/" className="no-underline">
              <div className="text-base font-extrabold tracking-tight">
                SmartConnect CRM UG (haftungsbeschränkt)
              </div>
              <div className="text-sm small-muted">
                IT &amp; Digital Solutions · Enterprise &amp; Public Sector
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {nav
              .filter((i) => i.href !== "/contact")
              .map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="no-underline"
                  style={{ color: "var(--text)" }}
                >
                  {i.label}
                </Link>
              ))}

            {/* Desktop CTA */}
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

        {/* Notice bar */}
        <div className="mt-5 hr-soft" />
        <div className="mt-3 text-sm small-muted">
          Hinweis: Diese Website verwendet keine Analyse- oder Tracking-Technologien ohne Einwilligung.
        </div>
      </div>
    </header>
  )
}
