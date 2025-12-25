import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const nav = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Unternehmen" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Kontakt" },
]

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: "#E5E5E5" }}>
      <div className="container-fixed py-5">
        <div className="flex items-center justify-between gap-6">
          <div className="min-w-0">
            <Link href="/" className="no-underline">
              <div className="text-base font-bold text-brand-text">
                SmartConnect CRM UG (haftungsbeschränkt)
              </div>
              <div className="text-sm small-muted">
                IT & Digital Solutions · Enterprise & Public Sector
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="no-underline">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden text-sm">
            <Link href="/contact" className="no-underline">
              Kontakt
            </Link>
          </div>
        </div>

        <Separator className="mt-5" />
        <div className="mt-3 text-sm small-muted">
          Hinweis: Diese Website verwendet keine Analyse- oder Tracking-Technologien ohne Einwilligung.
        </div>
      </div>
    </header>
  )
}
