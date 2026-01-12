import Link from "next/link"

export default function Footer() {
  const yearText = String(new Date().getFullYear())

  return (
    <footer>
      <div className="container-fixed py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div>
            <div className="text-xs font-black uppercase tracking-[0.12em] opacity-70">Unternehmen</div>
            <div className="mt-3 text-sm font-black text-[color:var(--text)]">
              SmartConnect CRM UG (haftungsbeschränkt)
            </div>

            <div className="small-muted mt-3 leading-relaxed">
              Düsseldorf, Deutschland
              <br />
              E-Mail: <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
              <br />
              Telefon: <a href="tel:+4921187973999233">+49&nbsp;211&nbsp;87973999233</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-black uppercase tracking-[0.12em] opacity-70">Navigation</div>
            <ul className="mt-3 space-y-2 footer-links">
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

          {/* Legal */}
          <div>
            <div className="text-xs font-black uppercase tracking-[0.12em] opacity-70">Rechtliches</div>
            <ul className="mt-3 space-y-2 footer-links">
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

        <div className="hr-soft mt-10" />

        <div className="mt-5 flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <div className="small-muted">
            © {yearText} SmartConnect CRM UG (haftungsbeschränkt). Alle Rechte vorbehalten.
          </div>

          <div className="small-muted">
            Tender-orientiert · Dokumentations- & Compliance-by-Design
          </div>
        </div>
      </div>
    </footer>
  )
}
