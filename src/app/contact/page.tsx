import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="doc-prose">
      <h1>Kontakt</h1>

      <p>
        Für Geschäftsanfragen (z. B. Beschaffung, öffentliche Auftraggeber,
        EU-tendernahe Vorhaben oder projektbezogene Abstimmungen) nutzen Sie bitte
        das folgende Formular oder kontaktieren Sie uns direkt per E-Mail.
      </p>

      {/* Contact form */}
      <div className="mt-6">
        <ContactForm />
      </div>

      {/* Privacy notice (important for DSGVO) */}
      <div className="policy-note mt-6">
        <div className="section-title">Datenschutzhinweis</div>
        <p className="small-muted mt-2">
          Die im Kontaktformular übermittelten Daten werden ausschließlich zur
          Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verarbeitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
          bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation).
        </p>
        <p className="small-muted">
          Weitere Informationen zur Verarbeitung personenbezogener Daten finden
          Sie in unserer{" "}
          <a href="/privacy">Datenschutzerklärung</a>.
        </p>
      </div>

      {/* Direct contact */}
      <div className="policy-note mt-8">
        <div className="section-title">Kontakt (direkt)</div>
        <div className="small-muted mt-2">
          E-Mail:{" "}
          <a href="mailto:admin@smartclientcrm.com">
            admin@smartclientcrm.com
          </a>
          <br />
          Telefon:{" "}
          <a href="tel:+4921187973999233">
            +49&nbsp;211&nbsp;87973999233
          </a>
        </div>
      </div>
    </div>
  )
}
