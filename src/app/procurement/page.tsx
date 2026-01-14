import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ProcurementProfile } from "@/components/ProcurementProfile";

export const metadata: Metadata = {
  title: "Procurement & Tender Profile | SmartConnect CRM UG",
  description:
    "EU Procurement Profile, Tender-Dokumentation und BAFA-kompatible Unternehmensdarstellung für öffentliche Auftraggeber.",
};

export default function ProcurementPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Procurement & Tender Profile
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Strukturierte Darstellung für öffentliche Auftraggeber,
              EU-Ausschreibungen und BAFA-Beratungsförderung
            </p>
          </div>
        </div>
      </section>

      {/* Procurement Profile */}
      <ProcurementProfile />

      {/* BAFA-Compatible Consulting Need Statement */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Unternehmensphase & Beratungsbedarf
              </h2>
              <p className="text-xl text-muted-foreground">
                BAFA-kompatible Darstellung der aktuellen Unternehmensphase und
                identifizierten Beratungsbedarfe für Wachstum und
                Professionalisierung.
              </p>
            </div>

            {/* Current Phase */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Aktuelle Unternehmensphase
              </h3>
              <Card className="border-2 border-border bg-card">
                <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                  <p>
                    SmartConnect CRM UG befindet sich in der Phase des
                    Markteintritts und der Produktisierung. Das Unternehmen
                    verfügt über technische Expertise in der Entwicklung von
                    CRM-Systemen und strebt die Etablierung als zuverlässiger
                    Partner für öffentliche Auftraggeber und Mittelstand an.
                  </p>
                  <p className="font-medium text-foreground">
                    Unternehmensgründung: 2024 (UG-Gründung in Vorbereitung)
                  </p>
                  <p className="font-medium text-foreground">
                    Mitarbeiter: Geschäftsführung + projektbasierte Ressourcen
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Consulting Needs */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Identifizierte Beratungsbedarfe
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      1. Markteintritt & Positionierung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Bedarf:</p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Entwicklung einer klaren Marktpositionierung für
                        öffentliche Auftraggeber
                      </li>
                      <li>
                        Identifikation von Zielkunden und Marktsegmenten
                      </li>
                      <li>
                        Wettbewerbsanalyse und Differenzierungsstrategie
                      </li>
                      <li>
                        Aufbau von Netzwerken und Partnerschaften
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      2. Produktisierung & Servicekatalog
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Bedarf:</p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Strukturierung des Leistungsportfolios in
                        standardisierte Produkte
                      </li>
                      <li>
                        Entwicklung eines modularen Servicekatalogs
                      </li>
                      <li>
                        Preisgestaltung und Kalkulationsmodelle
                      </li>
                      <li>
                        Dokumentation von Leistungsbeschreibungen für
                        Ausschreibungen
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      3. Vertriebs- & Angebotsprozesse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Bedarf:</p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Aufbau strukturierter Vertriebsprozesse
                      </li>
                      <li>
                        Entwicklung von Angebotsvorlagen und -prozessen
                      </li>
                      <li>
                        CRM-System für Lead-Management und Kundenbetreuung
                      </li>
                      <li>
                        Schulung in Verhandlungsführung und Vertragsgestaltung
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      4. Ausschreibungsfähigkeit (Öffentliche Beschaffung)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Bedarf:</p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Verständnis von Vergabeverfahren (VgV, UVgO)
                      </li>
                      <li>
                        Erstellung ausschreibungskonformer Angebote
                      </li>
                      <li>
                        Aufbau von Referenzen und Nachweisen
                      </li>
                      <li>
                        Präqualifikation und Zertifizierungsstrategien
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      5. Qualitätssicherung & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Bedarf:</p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Implementierung von Qualitätsmanagement-Prozessen
                      </li>
                      <li>
                        DSGVO-Compliance und Datenschutz-Management
                      </li>
                      <li>
                        Informationssicherheit und Security-by-Design
                      </li>
                      <li>
                        ISO-Readiness und Zertifizierungsvorbereitung
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      6. Organisationsentwicklung & Skalierung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p className="font-semibold text-foreground">Bedarf:</p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Aufbau skalierbarer Organisationsstrukturen
                      </li>
                      <li>
                        Personalplanung und Recruiting-Strategien
                      </li>
                      <li>
                        Prozessoptimierung und Automatisierung
                      </li>
                      <li>
                        Finanzplanung und Controlling
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* BAFA Förderung */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                BAFA-Förderung für Unternehmensberatung
              </h3>
              <Card className="border-2 border-sky-500/30 bg-sky-500/10">
                <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Förderfähigkeit:
                  </p>
                  <p>
                    Als junges Unternehmen in der Wachstumsphase ist
                    SmartConnect CRM UG grundsätzlich förderfähig für
                    BAFA-Beratungsförderung im Rahmen des Programms
                    &quot;Förderung unternehmerischen Know-hows&quot;.
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">
                      Förderschwerpunkte:
                    </p>
                    <ul className="ml-6 space-y-2 list-disc">
                      <li>
                        Unternehmensführung und Organisation
                      </li>
                      <li>
                        Marketing und Vertrieb
                      </li>
                      <li>
                        Finanzierung und Controlling
                      </li>
                      <li>
                        Digitalisierung und Prozessoptimierung
                      </li>
                      <li>
                        Qualitätsmanagement und Zertifizierung
                      </li>
                    </ul>
                  </div>
                  <p className="text-base pt-4">
                    <strong className="text-foreground">Hinweis:</strong> Die
                    tatsächliche Förderfähigkeit und Förderhöhe wird durch das
                    BAFA im Einzelfall geprüft. Diese Darstellung dient der
                    Vorbereitung eines Förderantrags.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* No Exaggerated Claims */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Transparenz und Realismus
              </h3>
              <Card className="border-2 border-amber-500/30 bg-amber-500/10">
                <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Keine übertriebenen Reifegrad-Behauptungen:
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      Wir befinden uns in der Aufbauphase und kommunizieren dies
                      transparent
                    </li>
                    <li>
                      Wir behaupten keine Zertifizierungen oder Standards, die
                      nicht nachweisbar sind
                    </li>
                    <li>
                      Wir nennen keine Umsatzzahlen oder Kundenzahlen ohne
                      Nachweis
                    </li>
                    <li>
                      Wir setzen auf dokumentierte Expertise und nachvollziehbare
                      Leistungen
                    </li>
                    <li>
                      Beratungsbedarf wird realistisch dargestellt, nicht als
                      Schwäche, sondern als Wachstumschance
                    </li>
                  </ul>
                  <p className="text-base pt-4 font-medium text-foreground">
                    Diese Transparenz ist die Grundlage für vertrauensvolle
                    Zusammenarbeit mit öffentlichen Auftraggebern und
                    Beratungspartnern.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
