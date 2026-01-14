import Link from "next/link"

import { BRAND } from "@/lib/branding"
import { COMPLIANCE_FRAMEWORK } from "@/lib/content"

export const metadata = {
  title: `Compliance | ${BRAND?.name ?? "SmartConnect CRM"}`,
  description:
    "Compliance-Framework mit DSGVO, Informationssicherheit, Qualitätsmanagement und Standards-Orientierung für öffentliche Auftraggeber und regulierte Unternehmen.",
}

export default function CompliancePage() {
  return (
    <div className="container py-16 md:py-20">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-4 py-1.5 text-xs font-bold text-brand-charcoal mb-6">
          Compliance & Standards
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text mb-6 leading-tight">
          Compliance-Framework
        </h1>
        
        <p className="text-lg md:text-xl font-light text-brand-light-muted dark:text-brand-dark-muted leading-relaxed max-w-3xl mx-auto">
          Strukturierte Darstellung der Compliance-Maßnahmen, Standards-Orientierung und Arbeitsweise für nachvollziehbare und prüffähige Umsetzung.
        </p>
      </div>

      {/* Compliance Sections */}
      <div className="space-y-8 mb-16">
        {COMPLIANCE_FRAMEWORK.map((section, idx) => (
          <div
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-brand-light-border dark:border-brand-dark-border bg-gradient-to-r from-brand-light-muted/30 to-transparent dark:from-brand-dark-muted/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center text-lg font-bold text-brand-charcoal shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                    {section.title}
                  </h2>
                  <p className="text-base text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
                Maßnahmen
              </h3>
              <ul className="space-y-3">
                {section.measures.map((measure, measureIdx) => (
                  <li key={measureIdx} className="flex items-start gap-3 text-base text-brand-light-muted dark:text-brand-dark-muted">
                    <span className="text-brand-diamond mt-1">✓</span>
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <section className="mb-16">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Compliance-Dokumentation
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="#corporate-governance"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                1
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Corporate Governance
              </span>
            </Link>

            <Link
              href="#datenschutz-dsgvo"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                2
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Datenschutz &amp; DSGVO
              </span>
            </Link>

            <Link
              href="#informationssicherheit"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                3
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Informationssicherheit
              </span>
            </Link>

            <Link
              href="#qualitaetsmanagement"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                4
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Qualitätsmanagement
              </span>
            </Link>

            <Link
              href="#rollen-zustaendigkeiten"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                5
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Rollen &amp; Zuständigkeiten
              </span>
            </Link>

            <Link
              href="#keine-unbestaetigten-leistungsversprechen"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                6
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Keine unbestätigten Leistungsversprechen
              </span>
            </Link>

            <Link
              href="#standards-orientierung"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                7
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Standards-Orientierung
              </span>
            </Link>

            <Link
              href="#procurement-validation"
              className="flex items-center gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border hover:border-brand-diamond transition-all"
            >
              <span className="w-8 h-8 rounded bg-brand-diamond/10 flex items-center justify-center text-sm font-bold text-brand-diamond shrink-0">
                8
              </span>
              <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">
                Procurement Validation
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal References */}
      <section className="mb-16">
        <div className="rounded-2xl bg-gradient-to-br from-brand-light-muted/30 to-brand-light-muted/10 dark:from-brand-dark-muted/30 dark:to-brand-dark-muted/10 border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Rechtliche Grundlagen
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                Datenschutz
              </h3>
              <ul className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                <li>→ DSGVO (Datenschutz-Grundverordnung)</li>
                <li>→ BDSG (Bundesdatenschutzgesetz)</li>
                <li>→ TMG (Telemediengesetz)</li>
                <li>→ TTDSG (Telekommunikation-Telemedien-Datenschutz-Gesetz)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                Vergabe &amp; Procurement
              </h3>
              <ul className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                <li>→ GWB (Gesetz gegen Wettbewerbsbeschränkungen)</li>
                <li>→ VgV (Vergabeverordnung)</li>
                <li>→ UVgO (Unterschwellenvergabeordnung)</li>
                <li>→ EU-Vergaberichtlinien</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                Sicherheit
              </h3>
              <ul className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                <li>→ BSI IT-Grundschutz (Orientierung)</li>
                <li>→ CIS Benchmarks (Orientierung)</li>
                <li>→ DSGVO Art. 32 (Technisch-organisatorische Maßnahmen)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                Qualität
              </h3>
              <ul className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                <li>→ ITIL (Orientierung, keine Zertifizierung)</li>
                <li>→ ISO 27001 (Orientierung, keine Zertifizierung)</li>
                <li>→ ISO 9001 (Orientierung, keine Zertifizierung)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
            Weitere Informationen
          </h2>
          <p className="text-base text-brand-light-muted dark:text-brand-dark-muted mb-6 max-w-2xl mx-auto">
            Für detaillierte Informationen zu Datenschutz, Impressum oder Procurement-Profil besuchen Sie die entsprechenden Seiten.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/datenschutz" className="btn btn-secondary">
              Datenschutz
            </Link>
            <Link href="/impressum" className="btn btn-secondary">
              Impressum
            </Link>
            <Link href="/procurement" className="btn btn-primary">
              Procurement-Profil
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
