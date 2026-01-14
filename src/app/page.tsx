import Link from "next/link"

import HeroSlot from "@/components/hero/HeroSlot"
import { BRAND } from "@/lib/branding"

export default function HomePage() {
  return (
    <>
      {/* Full-bleed hero */}
      <HeroSlot />

      {/* Main Content */}
      <div id="content" className="container py-24 md:py-32">
        {/* Hero Text Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-light-text dark:text-brand-dark-text mb-8 leading-tight">
            {BRAND.name}
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light text-brand-light-muted dark:text-brand-dark-muted leading-relaxed mb-12">
            B2B IT &amp; Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.
          </p>

          <p className="text-base md:text-lg text-brand-light-muted dark:text-brand-dark-muted max-w-2xl mx-auto mb-12">
            Fokus: strukturierte Umsetzung, nachvollziehbare Dokumentation und compliance-orientierte Arbeitsweise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-large">
              Geschäftsanfrage
            </Link>

            <Link href="/services" className="btn btn-secondary btn-large">
              Leistungskatalog ansehen
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-24">
          {/* Arbeitsweise Card */}
          <div className="group rounded-2xl p-8 md:p-10 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center text-2xl font-bold text-brand-charcoal">
                ✓
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Arbeitsweise
                </h2>
                <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  Procurement-tauglich
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-base text-brand-light-muted dark:text-brand-dark-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-diamond mt-1">→</span>
                <span>Klare Leistungsabgrenzung, nachvollziehbare Deliverables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-diamond mt-1">→</span>
                <span>Dokumentation (technisch + organisatorisch) für Audit-/Review-Kontexte</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-diamond mt-1">→</span>
                <span>Datensparsamkeit, Sicherheits- und Compliance-by-Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-diamond mt-1">→</span>
                <span>Keine unbestätigten Referenzen oder Kennzahlen auf der Website</span>
              </li>
            </ul>
          </div>

          {/* Schnellübersicht Card */}
          <div className="group rounded-2xl p-8 md:p-10 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border hover:border-brand-gold hover:shadow-soft-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-diamond to-brand-gold flex items-center justify-center text-2xl font-bold text-brand-charcoal">
                ℹ
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Schnellübersicht
                </h2>
                <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  Wichtige Informationen
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-light-border dark:border-brand-dark-border">
                <span className="font-medium text-brand-light-muted dark:text-brand-dark-muted">Standort</span>
                <span className="text-right font-medium text-brand-light-text dark:text-brand-dark-text">
                  Düsseldorf, Deutschland
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-light-border dark:border-brand-dark-border">
                <span className="font-medium text-brand-light-muted dark:text-brand-dark-muted">Einsatz</span>
                <span className="text-right font-medium text-brand-light-text dark:text-brand-dark-text">
                  Remote / On-site
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-light-border dark:border-brand-dark-border">
                <span className="font-medium text-brand-light-muted dark:text-brand-dark-muted">Kontakt</span>
                <a
                  href="mailto:admin@smartclientcrm.com"
                  className="text-right font-medium text-brand-diamond hover:underline"
                >
                  admin@smartclientcrm.com
                </a>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="font-medium text-brand-light-muted dark:text-brand-dark-muted">Schwerpunkt</span>
                <span className="text-right font-medium text-brand-light-text dark:text-brand-dark-text max-w-xs">
                  IT Services, Integration, Security-by-Design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Notice */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-brand-light-muted/20 to-brand-light-muted/10 dark:from-brand-dark-muted/20 dark:to-brand-dark-muted/10 border-2 border-brand-light-border dark:border-brand-dark-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-diamond/10 flex items-center justify-center text-xl">
                🔒
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                  Hinweis zur Transparenz
                </h3>
                <p className="text-base text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                  Diese Website enthält keine Marketing-Behauptungen, keine erfundenen Kennzahlen, keine Zertifikats-Badges
                  ohne Nachweis und keine Tracking-/Analytics-Tools ohne Einwilligung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
