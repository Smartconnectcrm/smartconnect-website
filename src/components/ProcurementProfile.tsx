"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * EU Procurement / Tender Profile Component
 * 
 * This component provides a structured overview of service scope, deliverables,
 * and compliance approach for public sector procurement contexts.
 * 
 * NOT a marketing block - this is a tender dossier alignment block.
 */
export function ProcurementProfile() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              EU Procurement / Tender Profile
            </h2>
            <p className="text-xl text-muted-foreground">
              Strukturierte Darstellung von Leistungsgegenstand, Lieferobjekten
              und Compliance-Arbeitsweise für öffentliche Auftraggeber und
              Procurement-Kontexte.
            </p>
          </div>

          {/* Leistungsgegenstand (Scope) */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Leistungsgegenstand
            </h3>
            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">
                  CRM-Systeme und Geschäftsprozess-Digitalisierung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Entwicklung, Implementierung und Wartung von
                  Customer-Relationship-Management-Systemen (CRM) sowie
                  Digitalisierung von Geschäftsprozessen für öffentliche
                  Auftraggeber, Mittelstand und Unternehmen.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">
                    Kernleistungen:
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      Anforderungsanalyse und Konzeption von CRM-Lösungen
                    </li>
                    <li>
                      Entwicklung maßgeschneiderter Softwarelösungen
                    </li>
                    <li>
                      Integration in bestehende IT-Infrastrukturen
                    </li>
                    <li>
                      Schulung und Dokumentation für Anwenderorganisationen
                    </li>
                    <li>
                      Wartung, Support und kontinuierliche Weiterentwicklung
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lieferobjekte (Deliverables) */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Lieferobjekte
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Dokumentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Anforderungsspezifikation</li>
                    <li>• Systemarchitektur-Dokumentation</li>
                    <li>• Benutzerhandbücher (DE/EN)</li>
                    <li>• Technische Dokumentation</li>
                    <li>• Abnahmeprotokolle</li>
                    <li>• Übergabedokumentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Software & Code
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Quellcode (versioniert, dokumentiert)</li>
                    <li>• Deployment-Skripte und Konfiguration</li>
                    <li>• Testprotokolle und Qualitätsnachweise</li>
                    <li>• Sicherheitskonzept und Datenschutz-Dokumentation</li>
                    <li>• Wartungs- und Betriebshandbuch</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Schulung & Wissenstransfer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Anwenderschulungen (vor Ort oder remote)</li>
                    <li>• Administrator-Schulungen</li>
                    <li>• Schulungsunterlagen und Präsentationen</li>
                    <li>• Wissenstransfer-Workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-card hover:border-sky-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Compliance-Nachweise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• DSGVO-Konformitätsnachweise</li>
                    <li>• Sicherheitskonzept (projektspezifisch)</li>
                    <li>• Auftragsverarbeitungsverträge (AVV)</li>
                    <li>• Datenschutz-Folgenabschätzung (bei Bedarf)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dokumentationsumfang */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Dokumentationsumfang
            </h3>
            <Card className="border-2 border-border bg-card">
              <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                <p>
                  Alle Lieferobjekte werden gemäß den Anforderungen öffentlicher
                  Auftraggeber dokumentiert. Die Dokumentation erfolgt in
                  deutscher Sprache (Englisch auf Anfrage) und umfasst:
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Projektdokumentation
                    </h4>
                    <ul className="space-y-1 text-base">
                      <li>• Projektplan und Meilensteine</li>
                      <li>• Statusberichte</li>
                      <li>• Änderungsdokumentation</li>
                      <li>• Abnahmeprotokolle</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Technische Dokumentation
                    </h4>
                    <ul className="space-y-1 text-base">
                      <li>• Systemarchitektur</li>
                      <li>• API-Dokumentation</li>
                      <li>• Datenmodelle</li>
                      <li>• Deployment-Guides</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Anwenderdokumentation
                    </h4>
                    <ul className="space-y-1 text-base">
                      <li>• Benutzerhandbücher</li>
                      <li>• Schulungsunterlagen</li>
                      <li>• FAQ und Troubleshooting</li>
                      <li>• Video-Tutorials (optional)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Abgrenzung */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Abgrenzung</h3>
            <Card className="border-2 border-amber-500/30 bg-amber-500/10">
              <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Folgende Leistungen sind NICHT Bestandteil des
                  Standard-Leistungsumfangs:
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>
                    Hardware-Beschaffung und physische Infrastruktur
                  </li>
                  <li>
                    Netzwerk-Administration und Betriebssystem-Verwaltung
                  </li>
                  <li>
                    Datenmigrationen aus Altsystemen (nur auf Anfrage und nach
                    separater Beauftragung)
                  </li>
                  <li>
                    24/7-Support (Standard: Werktags 9-17 Uhr, erweiterte
                    Support-Zeiten auf Anfrage)
                  </li>
                  <li>
                    Hosting und Betrieb (kann optional als Managed Service
                    beauftragt werden)
                  </li>
                </ul>
                <p className="text-base pt-4">
                  Alle zusätzlichen Leistungen werden transparent angeboten und
                  separat kalkuliert.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Einsatzbereiche */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Einsatzbereiche
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Öffentliche Auftraggeber
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Kommunalverwaltungen</li>
                    <li>• Landesbehörden</li>
                    <li>• Öffentliche Einrichtungen</li>
                    <li>• Bildungseinrichtungen</li>
                  </ul>
                  <p className="text-sm pt-3">
                    Erfahrung mit Vergabeverfahren nach VgV und UVgO.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Mittelstand & Unternehmen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• KMU und Mittelstand</li>
                    <li>• Dienstleistungsunternehmen</li>
                    <li>• Handelsunternehmen</li>
                    <li>• Beratungsunternehmen</li>
                  </ul>
                  <p className="text-sm pt-3">
                    Skalierbare Lösungen für wachsende Organisationen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Compliance-first Arbeitsweise */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Compliance-first Arbeitsweise
            </h3>
            <Card className="border-2 border-sky-500/30 bg-sky-500/10">
              <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Unsere Arbeitsweise ist auf Compliance, Transparenz und
                  Nachvollziehbarkeit ausgerichtet:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      Projektmanagement
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li>• Strukturierte Projektphasen mit klaren Meilensteinen</li>
                      <li>• Regelmäßige Statusberichte und Dokumentation</li>
                      <li>• Transparente Kommunikation und Eskalationswege</li>
                      <li>• Formale Abnahmen und Übergaben</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      Qualitätssicherung
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li>• Code-Reviews und Qualitätsprüfungen</li>
                      <li>• Automatisierte Tests und Testprotokolle</li>
                      <li>• Sicherheitsprüfungen und Vulnerability-Scans</li>
                      <li>• Dokumentierte Änderungen und Versionierung</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base pt-4 font-medium text-foreground">
                  Keine unverifizierbaren Versprechen. Keine Marketing-Claims.
                  Nur dokumentierte, nachvollziehbare Leistungen.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Keine Referenzen ohne Nachweis */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Referenzen und Nachweise
            </h3>
            <Card className="border-2 border-border bg-muted/30">
              <CardContent className="space-y-4 pt-6 text-lg text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Transparenz bei Referenzen:
                </p>
                <p>
                  Wir nennen keine Kunden oder Referenzen ohne deren
                  ausdrückliche schriftliche Zustimmung. Referenzen werden nur
                  im Rahmen von Vergabeverfahren und nach vorheriger Abstimmung
                  mit den betreffenden Organisationen bereitgestellt.
                </p>
                <p>
                  Auf Anfrage im Rahmen von Ausschreibungen können wir
                  Referenzschreiben, Projektbeschreibungen und
                  Leistungsnachweise vorlegen.
                </p>
                <p className="text-base pt-4">
                  <strong className="text-foreground">Kontakt für Referenzanfragen:</strong>{" "}
                  <a
                    href="mailto:admin@smartclientcrm.com?subject=Referenzanfrage"
                    className="text-sky-500 hover:text-sky-400 transition-colors"
                  >
                    admin@smartclientcrm.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
