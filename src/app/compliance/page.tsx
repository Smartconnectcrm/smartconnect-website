import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompliancePage() {
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
    </div>
  )
}
