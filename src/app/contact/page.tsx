import ContactForm from "@/components/ContactForm"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | SmartConnect CRM UG (haftungsbeschränkt)",
  description:
    "Kontaktseite von SmartConnect CRM UG für geschäftliche Anfragen, öffentliche Auftraggeber, EU-tendernahe Vorhaben und projektbezogene Abstimmungen.",
}

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center reveal-fade-down">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-light-text dark:text-brand-dark-text mb-6 tracking-tight">
            Kontakt
          </h1>
          <p className="text-xl md:text-2xl text-brand-light-muted dark:text-brand-dark-muted max-w-2xl mx-auto leading-relaxed">
            Für Geschäftsanfragen, öffentliche Auftraggeber, EU-tendernahe Vorhaben
            oder projektbezogene Abstimmungen nutzen Sie bitte das folgende Formular
            oder kontaktieren Sie uns direkt.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-16 reveal-fade-up reveal-delay-200">
          <ContactForm />
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Privacy Notice */}
          <div className="p-8 rounded-2xl bg-brand-light-surface dark:bg-brand-dark-surface border border-brand-light-border dark:border-brand-dark-border reveal-fade-left reveal-delay-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-diamond to-brand-gold flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Datenschutzhinweis
                </h3>
              </div>
            </div>
            <p className="text-base text-brand-light-muted dark:text-brand-dark-muted leading-relaxed mb-4">
              Die im Kontaktformular übermittelten Daten werden ausschließlich zur
              Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verarbeitet.
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
              DSGVO (berechtigtes Interesse an sachlicher Kommunikation).
            </p>
            <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted">
              Weitere Informationen zur Verarbeitung personenbezogener Daten finden
              Sie in unserer{" "}
              <a
                href="/privacy"
                className="text-brand-diamond hover:text-brand-gold transition-colors underline decoration-brand-diamond/30 hover:decoration-brand-gold"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* Direct Contact */}
          <div className="p-8 rounded-2xl bg-brand-light-surface dark:bg-brand-dark-surface border border-brand-light-border dark:border-brand-dark-border reveal-fade-right reveal-delay-400">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold to-brand-diamond flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Direkter Kontakt
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-brand-light-muted dark:text-brand-dark-muted mb-1">
                  E-Mail
                </div>
                <a
                  href="mailto:admin@smartclientcrm.com"
                  className="text-base text-brand-diamond hover:text-brand-gold transition-colors underline decoration-brand-diamond/30 hover:decoration-brand-gold"
                >
                  admin@smartclientcrm.com
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-brand-light-muted dark:text-brand-dark-muted mb-1">
                  Telefon
                </div>
                <a
                  href="tel:+4921187973999233"
                  className="text-base text-brand-diamond hover:text-brand-gold transition-colors underline decoration-brand-diamond/30 hover:decoration-brand-gold"
                >
                  +49 211 87973999233
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-brand-light-muted dark:text-brand-dark-muted mb-1">
                  Standort
                </div>
                <div className="text-base text-brand-light-text dark:text-brand-dark-text">
                  Düsseldorf, Deutschland
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
