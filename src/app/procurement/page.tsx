import Link from "next/link"

import { BRAND } from "@/lib/branding"
import { PROCUREMENT_PROFILE, BAFA_CONSULTING_NEEDS } from "@/lib/content"
import { COMPANY_LEGAL } from "@/lib/company"

export const metadata = {
  title: `Procurement | ${BRAND?.name ?? "SmartConnect CRM"}`,
  description:
    "EU Tender & Procurement Profile für öffentliche Auftraggeber. Leistungsgegenstand, Lieferobjekte, Dokumentationsumfang und Compliance-Arbeitsweise.",
}

export default function ProcurementPage() {
  return (
    <div className="container py-16 md:py-20">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-4 py-1.5 text-xs font-bold text-brand-charcoal mb-6">
          EU Tender & Public Procurement
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text mb-6 leading-tight">
          Procurement-Profil
        </h1>
        
        <p className="text-lg md:text-xl font-light text-brand-light-muted dark:text-brand-dark-muted leading-relaxed max-w-3xl mx-auto">
          Strukturierte Informationen für öffentliche Beschaffung, EU-Tender und Vergabeverfahren mit prüffähiger Dokumentation und Compliance-Bausteinen.
        </p>
      </div>

      {/* Leistungsgegenstand */}
      <section className="mb-12">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
            Leistungsgegenstand
          </h2>
          <p className="text-base text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
            {PROCUREMENT_PROFILE.leistungsgegenstand}
          </p>
        </div>
      </section>

      {/* Lieferobjekte */}
      <section className="mb-12">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Lieferobjekte
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {PROCUREMENT_PROFILE.lieferobjekte.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border"
              >
                <span className="w-6 h-6 rounded bg-brand-diamond/10 flex items-center justify-center text-xs font-bold text-brand-diamond shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-sm text-brand-light-text dark:text-brand-dark-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumentationsumfang */}
      <section className="mb-12">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Dokumentationsumfang
          </h2>
          <ul className="space-y-3">
            {PROCUREMENT_PROFILE.dokumentationsumfang.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-brand-light-muted dark:text-brand-dark-muted">
                <span className="text-brand-diamond mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Abgrenzung */}
      <section className="mb-12">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-red-500/20 p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Abgrenzung
          </h2>
          <ul className="space-y-3">
            {PROCUREMENT_PROFILE.abgrenzung.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-brand-light-muted dark:text-brand-dark-muted">
                <span className="text-red-500 mt-1">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Einsatzbereiche */}
      <section className="mb-12">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Einsatzbereiche
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {PROCUREMENT_PROFILE.einsatzbereiche.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-brand-gold/10 to-brand-diamond/10 border border-brand-light-border dark:border-brand-dark-border"
              >
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center text-sm font-bold text-brand-charcoal shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm font-bold text-brand-light-text dark:text-brand-dark-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance-Arbeitsweise */}
      <section className="mb-12">
        <div className="rounded-2xl bg-gradient-to-br from-brand-light-muted/30 to-brand-light-muted/10 dark:from-brand-dark-muted/30 dark:to-brand-dark-muted/10 border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Compliance-Arbeitsweise
          </h2>
          <ul className="space-y-3">
            {PROCUREMENT_PROFILE.complianceArbeitsweise.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-brand-light-muted dark:text-brand-dark-muted">
                <span className="text-brand-diamond mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BAFA Consulting Needs */}
      <section className="mb-12">
        <div className="rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
            Unternehmensphase &amp; Beratungsbedarf
          </h2>
          <p className="text-base text-brand-light-muted dark:text-brand-dark-muted mb-8 leading-relaxed">
            Strukturierte Darstellung der Unternehmensentwicklung und des Beratungsbedarfs für BAFA-Förderung und Organisationsentwicklung.
          </p>

          <div className="space-y-6">
            {BAFA_CONSULTING_NEEDS.map((need, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center text-sm font-bold text-brand-charcoal shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                      {need.phase}
                    </h3>
                    <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted mb-3">
                      {need.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 ml-11">
                  {need.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                      <span className="text-brand-diamond mt-0.5">→</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <div className="rounded-2xl bg-gradient-to-br from-brand-light-bg to-brand-light-muted/30 dark:from-brand-dark-bg dark:to-brand-dark-muted/30 border-2 border-brand-light-border dark:border-brand-dark-border p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6">
            Kontakt für Procurement-Anfragen
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                Formale Kontaktdaten
              </h3>
              <div className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                <div>
                  <span className="font-bold">Unternehmen:</span> {COMPANY_LEGAL.legalName}
                </div>
                <div>
                  <span className="font-bold">Adresse:</span> {COMPANY_LEGAL.address}
                </div>
                <div>
                  <span className="font-bold">E-Mail:</span>{" "}
                  <a
                    href={`mailto:${COMPANY_LEGAL.email}`}
                    className="text-brand-diamond hover:text-brand-gold transition-colors underline"
                  >
                    {COMPANY_LEGAL.email}
                  </a>
                </div>
                <div>
                  <span className="font-bold">Telefon:</span>{" "}
                  <a
                    href={`tel:${COMPANY_LEGAL.phone}`}
                    className="text-brand-diamond hover:text-brand-gold transition-colors underline"
                  >
                    {COMPANY_LEGAL.phone}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-3">
                Geschäftsführung
              </h3>
              <div className="space-y-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                <div>
                  <span className="font-bold">Geschäftsführer:</span> {COMPANY_LEGAL.managingDirector}
                </div>
                <div>
                  <span className="font-bold">Registergericht:</span> {COMPANY_LEGAL.registerCourt}
                </div>
                <div>
                  <span className="font-bold">Registernummer:</span>{" "}
                  <span className="text-amber-500">{COMPANY_LEGAL.registerNumber}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-brand-light-border dark:border-brand-dark-border">
            <Link href="/contact" className="btn btn-primary">
              Geschäftsanfrage stellen
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <section>
        <div className="rounded-xl p-6 bg-brand-light-muted/30 dark:bg-brand-dark-muted/30 border border-brand-light-border dark:border-brand-dark-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-diamond/10 flex items-center justify-center text-lg shrink-0">
              ℹ️
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                Hinweis zur Transparenz
              </h3>
              <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
                Alle Angaben auf dieser Seite sind faktisch und nachvollziehbar. Es werden keine unbestätigten Referenzen,
                keine erfundenen Kennzahlen und keine Zertifikats-Badges ohne Nachweis verwendet. Für rechtliche Fragen
                zu Vergabeverfahren konsultieren Sie bitte spezialisierte Rechtsstellen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
