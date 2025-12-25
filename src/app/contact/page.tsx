import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="doc-prose">
      <h1>Kontakt</h1>
      <p>
        Für Geschäftsanfragen (Procurement, öffentliche Auftraggeber, EU-Tender-nahe Vorhaben) nutzen Sie bitte das
        Formular oder senden Sie eine E-Mail.
      </p>

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8 border p-4" style={{ borderColor: "#E5E5E5", background: "#FFFFFF" }}>
        <div className="font-bold">Kontakt (direkt)</div>
        <div className="small-muted mt-1">
          E-Mail: <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
          <br />
          Telefon: <a href="tel:+4921187973999233">+49 211 87973999233</a>
        </div>
      </div>
    </div>
  )
}
