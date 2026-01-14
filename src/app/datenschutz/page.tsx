import type { Metadata } from "next";

import { COMPANY_LEGAL } from "@/lib/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | SmartConnect CRM UG",
  description:
    "Datenschutzerklärung gemäß DSGVO für SmartConnect CRM UG (haftungsbeschränkt). Informationen zur Datenverarbeitung und Ihren Rechten.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Informationen gemäß Art. 13, 14 DSGVO
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                1. Verantwortlicher
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                  (DSGVO) und anderer datenschutzrechtlicher Bestimmungen ist:
                </p>
                <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-6">
                  <p className="font-semibold text-foreground">
                    {COMPANY_LEGAL.legalName}
                  </p>
                  <p>{COMPANY_LEGAL.address}</p>
                  <p>
                    Geschäftsführung: {COMPANY_LEGAL.managingDirector}
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href={`mailto:${COMPANY_LEGAL.email}`}
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      {COMPANY_LEGAL.email}
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a
                      href={`tel:${COMPANY_LEGAL.phone}`}
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      {COMPANY_LEGAL.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection Principles */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                2. Grundsätze der Datenverarbeitung
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Wir verarbeiten personenbezogene Daten nach den Grundsätzen
                  der Datensparsamkeit (Privacy by Design) und
                  Zweckbindung. Die Verarbeitung erfolgt ausschließlich:
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>auf Grundlage einer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
                  <li>zur Erfüllung vertraglicher Pflichten (Art. 6 Abs. 1 lit. b DSGVO)</li>
                  <li>zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO)</li>
                  <li>zur Wahrung berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO)</li>
                </ul>
                <p className="font-medium text-foreground">
                  Wir setzen keine Tracking-Technologien ohne ausdrückliche
                  Einwilligung ein. Es erfolgt kein Profiling zu
                  Marketingzwecken.
                </p>
              </div>
            </div>

            {/* Website Usage */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                3. Nutzung der Website
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">
                  3.1 Technisch notwendige Daten
                </h3>
                <p>
                  Bei jedem Aufruf unserer Website werden automatisch
                  Informationen durch den Browser übermittelt und in
                  Server-Logfiles gespeichert:
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>IP-Adresse (anonymisiert nach 7 Tagen)</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                  <li>Inhalt der Anforderung (konkrete Seite)</li>
                  <li>Zugriffsstatus/HTTP-Statuscode</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Referrer-URL</li>
                  <li>Browser und Betriebssystem</li>
                </ul>
                <p>
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an der Bereitstellung und Sicherheit der Website).
                </p>
                <p>
                  Speicherdauer: Automatische Löschung nach 30 Tagen.
                </p>
              </div>
            </div>

            {/* Contact Forms */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                4. Kontaktaufnahme
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Bei Kontaktaufnahme per E-Mail oder Kontaktformular werden
                  die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse,
                  Nachrichteninhalt) gespeichert, um Ihre Anfrage zu
                  bearbeiten.
                </p>
                <p>
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
                  Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an der Beantwortung von Anfragen).
                </p>
                <p>
                  Speicherdauer: Löschung nach Erledigung der Anfrage, sofern
                  keine gesetzlichen Aufbewahrungspflichten bestehen.
                </p>
              </div>
            </div>

            {/* Hosting */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                5. Hosting und Content Delivery
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">
                  5.1 Vercel Inc.
                </h3>
                <p>
                  Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave
                  #4133, Walnut, CA 91789, USA.
                </p>
                <p>
                  Vercel verarbeitet im Auftrag technische Daten (IP-Adressen,
                  Zugriffsdaten) zur Bereitstellung der Website. Die
                  Verarbeitung erfolgt auf Grundlage eines
                  Auftragsverarbeitungsvertrags (Art. 28 DSGVO) und
                  EU-Standardvertragsklauseln.
                </p>
                <p>
                  Weitere Informationen:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    className="text-sky-500 hover:text-sky-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel Privacy Policy
                  </a>
                </p>
                <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-base text-amber-700 dark:text-amber-300">
                  <strong>TODO:</strong> Auftragsverarbeitungsvertrag (AVV) mit
                  Vercel abschließen und dokumentieren.
                </p>
              </div>
            </div>

            {/* No Tracking */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                6. Keine Tracking-Technologien
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="font-medium text-foreground">
                  Wir setzen keine Tracking-Technologien wie Google Analytics
                  oder ähnliche Dienste ein.
                </p>
                <p>
                  Es erfolgt keine Erstellung von Nutzerprofilen, kein
                  Retargeting und keine Weitergabe von Daten an
                  Werbeplattformen.
                </p>
                <p>
                  Cookies werden ausschließlich für technisch notwendige
                  Funktionen (z.B. Theme-Präferenz) verwendet und erfordern
                  keine Einwilligung gemäß § 25 TTDSG.
                </p>
              </div>
            </div>

            {/* Data Subject Rights */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                7. Ihre Rechte als betroffene Person
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Sie haben gemäß DSGVO folgende Rechte gegenüber dem
                  Verantwortlichen:
                </p>
                <ul className="ml-6 space-y-3 list-disc">
                  <li>
                    <strong className="text-foreground">
                      Recht auf Auskunft (Art. 15 DSGVO):
                    </strong>{" "}
                    Sie können Auskunft über Ihre gespeicherten
                    personenbezogenen Daten verlangen.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Recht auf Berichtigung (Art. 16 DSGVO):
                    </strong>{" "}
                    Sie können die Berichtigung unrichtiger Daten verlangen.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Recht auf Löschung (Art. 17 DSGVO):
                    </strong>{" "}
                    Sie können die Löschung Ihrer Daten verlangen, sofern keine
                    gesetzlichen Aufbewahrungspflichten bestehen.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
                    </strong>{" "}
                    Sie können die Einschränkung der Verarbeitung verlangen.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Recht auf Datenübertragbarkeit (Art. 20 DSGVO):
                    </strong>{" "}
                    Sie können Ihre Daten in einem strukturierten, gängigen
                    Format erhalten.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Widerspruchsrecht (Art. 21 DSGVO):
                    </strong>{" "}
                    Sie können der Verarbeitung Ihrer Daten aus Gründen, die
                    sich aus Ihrer besonderen Situation ergeben, widersprechen.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3
                      DSGVO):
                    </strong>{" "}
                    Sie können eine erteilte Einwilligung jederzeit widerrufen.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Beschwerderecht (Art. 77 DSGVO):
                    </strong>{" "}
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
                    beschweren.
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact for Data Requests */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                8. Kontakt für Datenschutzanfragen
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Für Anfragen zu Ihren Datenschutzrechten oder zur
                  Datenverarbeitung wenden Sie sich bitte an:
                </p>
                <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-6">
                  <p className="font-semibold text-foreground">
                    {COMPANY_LEGAL.legalName}
                  </p>
                  <p>Datenschutzanfragen</p>
                  <p>{COMPANY_LEGAL.address}</p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href={`mailto:${COMPANY_LEGAL.email}?subject=Datenschutzanfrage`}
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      {COMPANY_LEGAL.email}
                    </a>
                  </p>
                </div>
                <p className="text-base">
                  Wir werden Ihre Anfrage innerhalb von 30 Tagen gemäß Art. 12
                  Abs. 3 DSGVO beantworten.
                </p>
              </div>
            </div>

            {/* Supervisory Authority */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                9. Zuständige Aufsichtsbehörde
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Die zuständige Aufsichtsbehörde für datenschutzrechtliche
                  Fragen ist:
                </p>
                <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-6">
                  <p className="font-semibold text-foreground">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit
                    Nordrhein-Westfalen
                  </p>
                  <p>Kavalleriestraße 2-4</p>
                  <p>40213 Düsseldorf</p>
                  <p>
                    Telefon:{" "}
                    <a
                      href="tel:+492211384240"
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      +49 211 38424-0
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:poststelle@ldi.nrw.de"
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      poststelle@ldi.nrw.de
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://www.ldi.nrw.de"
                      className="text-sky-500 hover:text-sky-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.ldi.nrw.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                10. Änderungen dieser Datenschutzerklärung
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                  um sie an geänderte Rechtslagen oder Änderungen unserer
                  Datenverarbeitung anzupassen.
                </p>
                <p>
                  Stand dieser Datenschutzerklärung:{" "}
                  <strong className="text-foreground">Januar 2026</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
