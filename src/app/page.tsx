import Link from "next/link"

import { BRAND } from "@/lib/branding"
import { SERVICES, CAPABILITIES } from "@/lib/content"

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Institutional */}
      <section className="border-b border-brand-light-border dark:border-brand-dark-border bg-gradient-to-b from-brand-light-bg to-brand-light-muted/30 dark:from-brand-dark-bg dark:to-brand-dark-muted/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-block rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-4 py-1.5 text-xs font-bold text-brand-charcoal mb-6">
              Enterprise &amp; Public Sector IT Services
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text mb-6 leading-tight">
              {BRAND.name}
            </h1>

            <p className="text-xl md:text-2xl font-light text-brand-light-muted dark:text-brand-dark-muted leading-relaxed mb-8">
              B2B IT &amp; Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben.
            </p>

            <p className="text-base text-brand-light-muted dark:text-brand-dark-muted max-w-2xl mb-8 leading-relaxed">
              Fokus: strukturierte Umsetzung, nachvollziehbare Dokumentation und compliance-orientierte Arbeitsweise.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/services" className="btn btn-primary btn-large">
                Leistungskatalog
              </Link>

              <Link href="/procurement" className="btn btn-secondary btn-large">
                Procurement-Profil
              </Link>

              <Link href="/contact" className="btn btn-outline btn-large">
                Geschäftsanfrage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="border-b border-brand-light-border dark:border-brand-dark-border">
        <div className="container py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-8 text-center">
              Positionierung
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl p-6 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center text-xl font-bold text-brand-charcoal mb-4">
                  1
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Öffentliche Auftraggeber
                </h3>
                <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                  Tender-ready Delivery mit prüffähiger Dokumentation, Compliance-Bausteinen und nachvollziehbaren Prozessen.
                </p>
              </div>

              <div className="rounded-xl p-6 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-diamond to-brand-gold flex items-center justify-center text-xl font-bold text-brand-charcoal mb-4">
                  2
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Regulierte Unternehmen
                </h3>
                <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                  Security-by-Design, DSGVO-konforme Umsetzung und audit-fähige Nachweise für Finanz, Gesundheit, Energie.
                </p>
              </div>

              <div className="rounded-xl p-6 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center text-xl font-bold text-brand-charcoal mb-4">
                  3
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Mittelstand
                </h3>
                <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                  Strukturierte Leistungsbausteine mit klarer Abgrenzung, Deliverables und Übergabefähigkeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-b border-brand-light-border dark:border-brand-dark-border">
        <div className="container py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
                Leistungskatalog
              </h2>
              <p className="text-base text-brand-light-muted dark:text-brand-dark-muted max-w-2xl mx-auto">
                Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und compliance-orientierter Umsetzung.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.slice(0, 6).map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="group rounded-xl p-6 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond hover:shadow-soft-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text group-hover:text-brand-diamond transition-colors">
                      {service.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-2.5 py-0.5 text-xs font-bold text-brand-charcoal">
                      {service.role}
                    </span>
                  </div>
                  <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                    {service.shortDescription}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/services" className="btn btn-primary">
                Alle Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-brand-light-border dark:border-brand-dark-border bg-brand-light-muted/30 dark:bg-brand-dark-muted/30">
        <div className="container py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
                Capabilities
              </h2>
              <p className="text-base text-brand-light-muted dark:text-brand-dark-muted max-w-2xl mx-auto">
                Strukturierte Fähigkeiten und Methoden für nachvollziehbare Umsetzung.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.id}
                  className="rounded-lg px-4 py-2 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border"
                >
                  <div className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                    {cap.name}
                  </div>
                  <div className="text-xs text-brand-light-muted dark:text-brand-dark-muted">
                    {cap.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="border-b border-brand-light-border dark:border-brand-dark-border">
        <div className="container py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-8 text-center">
              Arbeitsweise
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl p-6 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border">
                <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
                  Procurement-tauglich
                </h3>
                <ul className="space-y-3 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Klare Leistungsabgrenzung, nachvollziehbare Deliverables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Dokumentation (technisch + organisatorisch) für Audit-/Review-Kontexte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Datensparsamkeit, Sicherheits- und Compliance-by-Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Keine unbestätigten Referenzen oder Kennzahlen auf der Website</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl p-6 bg-brand-light-bg dark:bg-brand-dark-bg border border-brand-light-border dark:border-brand-dark-border">
                <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
                  Compliance-orientiert
                </h3>
                <ul className="space-y-3 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>DSGVO-konforme Umsetzung (Art. 5, 25, 32)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Security-by-Design und Privacy-by-Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Rollenprinzip und Least Privilege</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-diamond mt-0.5">→</span>
                    <span>Keine Tracking-Technologien ohne Einwilligung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="border-b border-brand-light-border dark:border-brand-dark-border bg-brand-light-muted/30 dark:bg-brand-dark-muted/30">
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl p-6 md:p-8 bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-diamond/10 flex items-center justify-center text-lg shrink-0">
                  🔒
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                    Hinweis zur Transparenz
                  </h3>
                  <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                    Diese Website enthält keine Marketing-Behauptungen, keine erfundenen Kennzahlen, keine Zertifikats-Badges
                    ohne Nachweis und keine Tracking-/Analytics-Tools ohne Einwilligung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
