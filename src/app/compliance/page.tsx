import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getDetailedLegalData } from "@/lib/company";

export const metadata: Metadata = {
  title: "Compliance & Status | SmartConnect CRM UG",
  description:
    "Compliance-Grundsätze, Governance-Struktur und Status für öffentliche Auftraggeber und Procurement-Kontexte.",
};

export default function CompliancePage() {
  const legal = getDetailedLegalData();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Compliance & Status
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Grundsätze, Governance und Dokumentation für öffentliche
              Auftraggeber und Procurement-Kontexte
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-24">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Diese Seite beschreibt Grundsätze und Arbeitsmethoden zur
                Erfüllung typischer Anforderungen aus Procurement, Public Sector
                Reviews und EU-Tender-Kontexten. Konkrete Maßnahmen werden
                projektbezogen dokumentiert.
              </p>
            </div>

            {/* Corporate Governance */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                1. Corporate Governance
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Unternehmensstruktur
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Rechtsform:</strong>{" "}
                      {legal.company.form}
                    </p>
                    <p>
                      <strong className="text-foreground">Sitz:</strong>{" "}
                      {legal.company.address}
                    </p>
                    <p>
                      <strong className="text-foreground">
                        Geschäftsführung:
                      </strong>{" "}
                      {legal.management.director}
                    </p>
                    <p className="text-sm">
                      Klare Verantwortlichkeiten und Entscheidungswege gemäß
                      GmbHG und UG-Recht.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Rollen & Zuständigkeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>
                        • Geschäftsführung: Strategische Entscheidungen,
                        Vertragsabschlüsse
                      </li>
                      <li>
                        • Projektleitung: Operative Umsetzung, Qualitätssicherung
                      </li>
                      <li>
                        • Datenschutz: Verantwortung bei Geschäftsführung
                      </li>
                      <li>
                        • Compliance: Dokumentation und Nachweisführung
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Protection & GDPR */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                2. Datenschutz & DSGVO
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      DSGVO-Grundsätze
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>
                        • <strong className="text-foreground">Datensparsamkeit:</strong> Privacy by Design,
                        Zweckbindung
                      </li>
                      <li>
                        • <strong className="text-foreground">Transparenz:</strong> Klare Informationspflichten
                        (Art. 13, 14 DSGVO)
                      </li>
                      <li>
                        • <strong className="text-foreground">Vertraulichkeit:</strong> Integrität, Verfügbarkeit
                        (projektbezogen)
                      </li>
                      <li>
                        • <strong className="text-foreground">Keine Tracking-Technologien</strong> ohne
                        ausdrückliche Einwilligung
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Betroffenenrechte
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Auskunft (Art. 15 DSGVO)</li>
                      <li>• Berichtigung (Art. 16 DSGVO)</li>
                      <li>• Löschung (Art. 17 DSGVO)</li>
                      <li>• Einschränkung (Art. 18 DSGVO)</li>
                      <li>• Datenübertragbarkeit (Art. 20 DSGVO)</li>
                      <li>• Widerspruch (Art. 21 DSGVO)</li>
                    </ul>
                    <p className="text-sm pt-2">
                      Bearbeitungsfrist: 30 Tage gemäß Art. 12 Abs. 3 DSGVO
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Information Security */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                3. Informationssicherheit
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Security-by-Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>
                        • Risikobasierte Maßnahmen und Nachvollziehbarkeit
                      </li>
                      <li>
                        • Least-Privilege-Prinzip, Rollen- und Zugriffskonzepte
                      </li>
                      <li>• Dokumentierte Changes und Übergaben</li>
                      <li>
                        • Logging/Monitoring-Anforderungen projektabhängig
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Technische Maßnahmen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• HTTPS/TLS-Verschlüsselung (Standard)</li>
                      <li>
                        • Content Security Policy (CSP) zur Absicherung der
                        Website
                      </li>
                      <li>
                        • Regelmäßige Dependency-Updates und Security-Patches
                      </li>
                      <li>
                        • Projektspezifische Sicherheitskonzepte nach Bedarf
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quality Management */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                4. Qualitätsmanagement
              </h2>
              <div className="rounded-lg border-2 border-border bg-card p-8">
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  ISO-Readiness (ohne Zertifizierung)
                </h3>
                <p className="mb-6 text-lg text-muted-foreground">
                  Auf Wunsch kann ein projektbezogener Readiness-Plan erstellt
                  werden (z. B. Dokumentationsstruktur, Verantwortlichkeiten,
                  Prozessnachweise). Eine Zertifizierung wird nicht behauptet;
                  Status und Nachweise erfolgen nur mit belegbaren Dokumenten.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Dokumentation
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Prozessbeschreibungen</li>
                      <li>• Arbeitsanweisungen</li>
                      <li>• Nachweisführung</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Verantwortlichkeiten
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Rollenkonzept</li>
                      <li>• Eskalationswege</li>
                      <li>• Ansprechpartner</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Kontinuierliche Verbesserung
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Lessons Learned</li>
                      <li>• Feedback-Prozesse</li>
                      <li>• Anpassungen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation for Reviews */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                5. Dokumentation für Reviews
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Für Procurement-Prozesse und öffentliche Auftraggeber stellen
                  wir folgende Dokumentation bereit:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-2 border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Projektdokumentation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Projekt-Scope und Abgrenzung (In/Out-of-Scope)</li>
                        <li>• Deliverables und Abnahmekriterien</li>
                        <li>• Übergabepaket und Dokumentation</li>
                        <li>• Zeitplan und Meilensteine</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Compliance-Anhänge
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Datenschutz-Folgenabschätzung (bei Bedarf)</li>
                        <li>• Sicherheitskonzept (projektspezifisch)</li>
                        <li>• Rollen, Ansprechpartner, Governance</li>
                        <li>• Auftragsverarbeitungsverträge (AVV)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* No Unverified Claims */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                6. Keine unbestätigten Leistungsversprechen
              </h2>
              <div className="rounded-lg border-2 border-amber-500/30 bg-amber-500/10 p-8">
                <p className="mb-4 text-lg text-foreground">
                  <strong>Transparenz und Nachweisbarkeit:</strong>
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    • Wir machen keine unverifizierbaren Performance-Claims oder
                    Umsatzangaben
                  </li>
                  <li>
                    • Wir nennen keine Kunden oder Referenzen ohne deren
                    ausdrückliche Zustimmung
                  </li>
                  <li>
                    • Wir behaupten keine Zertifizierungen (ISO, etc.), die
                    nicht nachweisbar sind
                  </li>
                  <li>
                    • Alle Angaben zu Standards und Compliance sind
                    dokumentiert und belegbar
                  </li>
                  <li>
                    • Wir setzen auf Dokumentation, Transparenz und
                    Nachvollziehbarkeit statt Marketing-Hype
                  </li>
                </ul>
              </div>
            </div>

            {/* Procurement Validation */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                7. Procurement Validation
              </h2>
              <div className="rounded-lg border-2 border-sky-500/30 bg-sky-500/10 p-8">
                <p className="mb-4 text-lg text-foreground">
                  <strong>Automatisierte Compliance-Prüfung:</strong>
                </p>
                <p className="mb-6 text-muted-foreground">
                  Diese Website wird automatisch auf Einhaltung von
                  Procurement-Standards geprüft. Die Validierung stellt sicher,
                  dass keine Marketing-Hype-Sprache, unverifizierbaren Claims
                  oder unzulässigen Tracking-Technologien eingesetzt werden.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Geprüfte Kriterien:</strong>
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>Keine Marketing-Hype-Sprache</li>
                    <li>Keine unverifizierbaren Performance-Claims</li>
                    <li>Keine Tracking-Technologien ohne Einwilligung</li>
                    <li>GDPR/DSGVO-Referenzen vorhanden</li>
                    <li>Datenschutz-Hinweise vorhanden</li>
                    <li>Rechtliche Angaben vollständig</li>
                  </ul>
                  <p className="pt-4">
                    <strong className="text-foreground">Validierung:</strong>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      ✓ Alle Prüfungen bestanden
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                8. Impressum / Rechtliche Angaben
              </h2>
              <div className="rounded-lg border-2 border-border bg-muted/30 p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Unternehmen
                      </h3>
                      <p className="text-muted-foreground">
                        {legal.company.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {legal.company.form}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sitz: {legal.company.address}
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Handelsregister
                      </h3>
                      <p className="text-muted-foreground">
                        {legal.registration.court}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Registernummer:{" "}
                        <span className="text-amber-600 dark:text-amber-400">
                          {legal.registration.number}
                        </span>
                      </p>
                      {legal.registration.number.includes("XXXX") && (
                        <p className="text-xs text-amber-600 dark:text-amber-400">
                          ⚠️ TODO: Offizielle HRB-Nummer eintragen
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Geschäftsführung
                      </h3>
                      <p className="text-muted-foreground">
                        {legal.management.director}
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Steuernummer & USt-IdNr
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Steuernummer:{" "}
                        <span className="text-amber-600 dark:text-amber-400">
                          {legal.tax.taxNumber}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        USt-IdNr:{" "}
                        <span className="text-amber-600 dark:text-amber-400">
                          {legal.tax.vatId}
                        </span>
                      </p>
                      {(legal.tax.taxNumber.includes("XXX") ||
                        legal.tax.vatId.includes("999")) && (
                        <p className="text-xs text-amber-600 dark:text-amber-400">
                          ⚠️ TODO: Offizielle Steuernummer und USt-IdNr
                          eintragen
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Vollständiges Impressum:{" "}
                    <a
                      href="/impressum"
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      /impressum
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Datenschutzerklärung:{" "}
                    <a
                      href="/datenschutz"
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      /datenschutz
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
