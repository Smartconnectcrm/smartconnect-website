import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export default function HomePage() {
  return (
    <div className="doc-prose">
      <h1>SmartConnect CRM UG (haftungsbeschränkt)</h1>
      <p>
        B2B IT &amp; Digital Solutions für Unternehmen, öffentliche Auftraggeber und EU-tendernahe Vorhaben. Fokus:
        strukturierte Umsetzung, nachvollziehbare Dokumentation und compliance-orientierte Arbeitsweise.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Button asChild className="rounded-none">
          <Link href="/contact">Geschäftsanfrage</Link>
        </Button>

        <Link href="/services" className="underline text-brand-link">
          Leistungskatalog ansehen
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="rounded-none border border-brand-muted shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Arbeitsweise (procurement-tauglich)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc space-y-1 pl-5">
              <li>Klare Leistungsabgrenzung, nachvollziehbare Deliverables</li>
              <li>Dokumentation (technisch + organisatorisch) für Audit-/Review-Kontexte</li>
              <li>Datensparsamkeit, Sicherheits- und Compliance-by-Design</li>
              <li>Keine unbestätigten Referenzen oder Kennzahlen auf der Website</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-none border border-brand-muted shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Schnellübersicht</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Standort</TableCell>
                  <TableCell>Düsseldorf, Deutschland</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Einsatz</TableCell>
                  <TableCell>Remote / On-site (nach Vereinbarung)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Kontakt</TableCell>
                  <TableCell>
                    <a href="mailto:admin@smartclientcrm.com" className="underline text-brand-link">
                      admin@smartclientcrm.com
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Schwerpunkt</TableCell>
                  <TableCell>IT Services, Integration, Security-by-Design, Betriebsnähe</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 border border-brand-muted bg-white p-4">
        <div className="font-bold">Hinweis zur Transparenz</div>
        <p className="small-muted mt-1">
          Diese Website enthält keine Marketing-Behauptungen, keine erfundenen Kennzahlen, keine Zertifikats-Badges ohne
          Nachweis, und keine Tracking-/Analytics-Tools ohne Einwilligung.
        </p>
      </div>
    </div>
  )
}
