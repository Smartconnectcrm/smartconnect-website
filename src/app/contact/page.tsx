import ContactForm from "@/components/ContactForm"

import type { Metadata } from "next"



export const metadata: Metadata = {
  title: "Kontakt | SmartConnect CRM UG (haftungsbeschränkt)",
  description:
    "Kontaktseite von SmartConnect CRM UG für geschäftliche Anfragen, öffentliche Auftraggeber, EU-tendernahe Vorhaben und projektbezogene Abstimmungen.",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="doc-prose">
        <h1>Kontakt</h1>

        <p>
          Für Geschäftsanfragen (z.&nbsp;B. Beschaffung, öffentliche Auftraggeber,
          EU-tendernahe Vorhaben oder projektbezogene Abstimmungen) nutzen Sie bitte
          das folgende Formular oder kontaktieren Sie uns direkt per E-Mail.
        </p>

        {/* Contact form */}
        <div className="mt-6">
          <ContactForm />
        </div>

        {/* Privacy notice (DSGVO) */}
        <div className="policy-note mt-6">
          <div className="section-title">Datenschutzhinweis</div>

          <p className="small-muted mt-2">
            Die im Kontaktformular übermittelten Daten werden ausschließlich zur
            Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verarbeitet.
            Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
            (vorvertragliche Maßnahmen) bzw. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
            DSGVO (berechtigtes Interesse an sachlicher Kommunikation).
          </p>

          <p className="small-muted">
            Weitere Informationen zur Verarbeitung personenbezogener Daten finden
            Sie in unserer{" "}
            <a href="/datenschutz" className="underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        {/* Direct contact */}
        <div className="policy-note mt-8">
          <div className="section-title">Kontakt (direkt)</div>

          <div className="small-muted mt-2">
            E-Mail:{" "}
            <a
              href="mailto:admin@smartclientcrm.com"
              className="underline"
            >
              admin@smartclientcrm.com
            </a>
            <br />
            Telefon:{" "}
            <a
              href="tel:+4921187973999233"
              className="underline"
            >
              +49&nbsp;211&nbsp;87973999233
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
