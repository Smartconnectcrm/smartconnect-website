import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export default function AboutPage() {
  return (
    <div className="doc-prose">
      <h1>Unternehmen</h1>
      <p>
        SmartConnect CRM UG (haftungsbeschränkt) ist ein B2B-orientierter IT- und Digitaldienstleister mit Fokus auf
        strukturierte Umsetzung, dokumentationsfähige Ergebnisse und compliance-orientierte Zusammenarbeit.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Card className="rounded-none shadow-none border" style={{ borderColor: "#E5E5E5" }}>
          <CardHeader>
            <CardTitle className="text-base">Rechtsform & Basisdaten</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Firma</TableCell>
                  <TableCell>SmartConnect CRM UG (haftungsbeschränkt)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sitz</TableCell>
                  <TableCell>Düsseldorf, Deutschland</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Register</TableCell>
                  <TableCell>Handelsregister: [bitte eintragen]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">USt-IdNr.</TableCell>
                  <TableCell>[falls vorhanden, eintragen]</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="rounded-none shadow-none border" style={{ borderColor: "#E5E5E5" }}>
          <CardHeader>
            <CardTitle className="text-base">Positionierung für Procurement</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul>
              <li>Faktenbasierte Darstellung ohne Werbeclaims</li>
              <li>Dokumentation, Übergabefähigkeit, Betriebsnähe</li>
              <li>Datenschutz und Sicherheitsprinzipien als Standard</li>
              <li>Projektbezogene Nachweise statt pauschaler Aussagen</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-6 small-muted">
        Details zur rechtlichen Anbieterkennzeichnung: <a href="/imprint">Impressum</a>
      </p>
    </div>
  )
}
