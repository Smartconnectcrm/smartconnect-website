import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDetailedLegalData } from "@/lib/company"

export default function CompliancePage() {
  const legal = getDetailedLegalData()

  return (
    <div className="doc-prose">
      <h1>Compliance</h1>
      <p>
        Diese Seite beschreibt Grundsätze und Arbeitsmethoden zur Erfüllung typischer Anforderungen aus Procurement,
        Public Sector Reviews und EU-Tender-Kontexten. Konkrete Maßnahmen werden projektbezogen dokumentiert.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Card className="rounded-none shadow-none border" style={{ borderColor: "#E5E5E5" }}>
          <CardHeader>
            <CardTitle className="text-base">DSGVO / GDPR – Grundsätze</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul>
              <li>Datensparsamkeit und Zweckbindung</li>
              <li>Transparenz: klare Informationspflichten</li>
              <li>Vertraulichkeit, Integrität, Verfügbarkeit (projektbezogen)</li>
              <li>Keine Website-Analytics ohne Einwilligung</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-none shadow-none border" style={{ borderColor: "#E5E5E5" }}>
          <CardHeader>
            <CardTitle className="text-base">Security-by-Design – Arbeitsweise</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul>
              <li>Risikobasierte Maßnahmen und Nachvollziehbarkeit</li>
              <li>Least-Privilege, Rollen- und Zugriffskonzepte</li>
              <li>Dokumentierte Changes und Übergaben</li>
              <li>Logging/Monitoring-Anforderungen projektabhängig</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 border p-4" style={{ borderColor: "#E5E5E5", background: "#FFFFFF" }}>
        <div className="font-bold">ISO / Normen – Readiness (ohne Behauptung einer Zertifizierung)</div>
        <p className="small-muted mt-1">
          Auf Wunsch kann ein projektbezogener Readiness-Plan erstellt werden (z. B. Dokumentationsstruktur,
          Verantwortlichkeiten, Prozessnachweise). Eine Zertifizierung wird nicht behauptet; Status und Nachweise erfolgen
          nur mit belegbaren Dokumenten.
        </p>
      </div>

      <h2 className="mt-8">Dokumentation für Reviews</h2>
      <ul>
        <li>Projekt-Scope und Abgrenzung (In/Out-of-Scope)</li>
        <li>Deliverables, Abnahmekriterien, Übergabepaket</li>
        <li>Datenschutz-/Sicherheitsanhänge nach Bedarf</li>
        <li>Rollen, Ansprechpartner, Governance</li>
      </ul>

      <h2 className="mt-8">Impressum / Rechtliche Angaben</h2>
      <div className="mt-4 border p-6" style={{ borderColor: "#E5E5E5", background: "#FAFAFA" }}>
        <div className="space-y-4 text-sm">
          <div>
            <div className="font-bold text-base mb-1">Unternehmen</div>
            <div>{legal.company.name}</div>
            <div className="text-brand-light-muted dark:text-brand-dark-muted">{legal.company.form}</div>
            <div className="text-brand-light-muted dark:text-brand-dark-muted">Sitz: {legal.company.address}</div>
          </div>

          <div>
            <div className="font-bold text-base mb-1">Handelsregister</div>
            <div>{legal.registration.court}</div>
            <div className="text-brand-light-muted dark:text-brand-dark-muted">
              Registernummer: {legal.registration.number}
            </div>
            {legal.registration.number.includes("XXXX") && (
              <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                ⚠️ TODO: Offizielle HRB-Nummer eintragen
              </div>
            )}
          </div>

          <div>
            <div className="font-bold text-base mb-1">Geschäftsführung</div>
            <div>{legal.management.director}</div>
          </div>

          <div>
            <div className="font-bold text-base mb-1">Steuernummer & USt-IdNr</div>
            <div>Steuernummer: {legal.tax.taxNumber}</div>
            <div>USt-IdNr: {legal.tax.vatId}</div>
            {(legal.tax.taxNumber.includes("XXX") || legal.tax.vatId.includes("999")) && (
              <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                ⚠️ TODO: Offizielle Steuernummer und USt-IdNr eintragen
              </div>
            )}
          </div>

          <div>
            <div className="font-bold text-base mb-1">Kontakt</div>
            <div>
              E-Mail:{" "}
              <a
                href={`mailto:${legal.contact.email}`}
                className="text-brand-diamond hover:text-brand-gold transition-colors underline"
              >
                {legal.contact.email}
              </a>
            </div>
            <div>
              Telefon:{" "}
              <a
                href={`tel:${legal.contact.phone.replace(/\s/g, "")}`}
                className="text-brand-diamond hover:text-brand-gold transition-colors underline"
              >
                {legal.contact.phone}
              </a>
            </div>
            <div>
              Website:{" "}
              <a
                href={legal.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-diamond hover:text-brand-gold transition-colors underline"
              >
                {legal.contact.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-brand-light-muted dark:text-brand-dark-muted">
        <p>
          <strong>Hinweis:</strong> Die oben genannten Angaben entsprechen den gesetzlichen Anforderungen gemäß § 5 TMG
          (Telemediengesetz) und § 55 RStV (Rundfunkstaatsvertrag). Alle Angaben sind ohne Gewähr. Platzhalter-Werte
          (markiert mit TODO) müssen vor Produktivbetrieb durch offizielle Daten ersetzt werden.
        </p>
      </div>
    </div>
  )
}
