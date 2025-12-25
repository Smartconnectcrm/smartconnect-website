import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "#E5E5E5" }}>
      <div className="container-fixed py-8 text-sm">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold">SmartConnect CRM UG (haftungsbeschränkt)</div>
            <div className="small-muted mt-2">
              Düsseldorf, Deutschland
              <br />
              E-Mail: <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
              <br />
              Telefon: <a href="tel:+4921187973999233">+49 211 87973999233</a>
            </div>
          </div>

          <div>
            <div className="font-bold">Navigation</div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/services">Leistungen</Link>
              </li>
              <li>
                <Link href="/compliance">Compliance</Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-bold">Rechtliches</div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/imprint">Impressum</Link>
              </li>
              <li>
                <Link href="/privacy">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/terms">AGB</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 small-muted">
          © {new Date().getFullYear()} SmartConnect CRM UG (haftungsbeschränkt). Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
