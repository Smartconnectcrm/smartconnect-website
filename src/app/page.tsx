import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="doc-prose">
      <h1>SmartConnect CRM UG (haftungsbeschränkt)</h1>

      <p className="lead">
        B2B IT &amp; Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben. Fokus:
        strukturierte Umsetzung, nachvollziehbare Dokumentation und compliance-orientierte Arbeitsweise.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {/* Keep your shadcn Button if you want, but styling it to match */}
        <Link href="/contact" className="btn-primary">
          Geschäftsanfrage
        </Link>

        <Link href="/services" className="btn-secondary">
          Leistungskatalog ansehen
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card-soft p-5">
          <div className="flex items-center justify-between">
            <h2 className="m-0 text-base">Arbeitsweise (procurement-tauglich)</h2>
          </div>
          <div className="mt-3 text-sm">
            <ul>
              <li>Klare Leistungsabgrenzung, nachvollziehbare Deliverables</li>
              <li>Dokumentation (technisch + organisatorisch) für Audit-/Review-Kontexte</li>
              <li>Datensparsamkeit, Sicherheits- und Compliance-by-Design</li>
              <li>Keine unbestätigten Referenzen oder Kennzahlen auf der Website</li>
            </ul>
          </div>
        </div>

        <div className="card-soft p-5">
          <h2 className="m-0 text-base">Schnellübersicht</h2>

          <table className="table-soft mt-3">
            <tbody>
              <tr>
                <td>Standort</td>
                <td>Düsseldorf, Deutschland</td>
              </tr>
              <tr>
                <td>Einsatz</td>
                <td>Remote / On-site (nach Vereinbarung)</td>
              </tr>
              <tr>
                <td>Kontakt</td>
                <td>
                  <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
                </td>
              </tr>
              <tr>
                <td>Schwerpunkt</td>
                <td>IT Services, Integration, Security-by-Design, Betriebsnähe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 card-soft p-5" style={{ background: "var(--card-soft)" }}>
        <div className="font-extrabold">Hinweis zur Transparenz</div>
        <p className="small-muted mt-2">
          Diese Website enthält keine Marketing-Behauptungen, keine erfundenen Kennzahlen, keine Zertifikats-Badges ohne
          Nachweis, und keine Tracking-/Analytics-Tools ohne Einwilligung.
        </p>
      </div>
    </div>
  )
}
