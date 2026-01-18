import type { Metadata } from "next";

import { COMPANY_LEGAL } from "@/lib/company";

export const metadata: Metadata = {
  title: "Impressum | SmartConnect CRM UG",
  description:
    "Impressum und rechtliche Angaben gemäß § 5 TMG für SmartConnect CRM UG (haftungsbeschränkt), Düsseldorf.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Impressum
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Company Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Unternehmen
              </h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p className="font-semibold text-foreground">
                  {COMPANY_LEGAL.legalName}
                </p>
                <p>{COMPANY_LEGAL.address.full}</p>
              </div>
            </div>

            {/* Commercial Register */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Handelsregister
              </h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Registergericht:
                  </span>{" "}
                  {COMPANY_LEGAL.registerCourt}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Registernummer:
                  </span>{" "}
                  <span className="text-amber-600 dark:text-amber-400">
                    {COMPANY_LEGAL.registerNumber}
                  </span>
                  {COMPANY_LEGAL.registerNumber.includes("XXXX") && (
                    <span className="ml-2 text-sm text-amber-600 dark:text-amber-400">
                      (TODO: Offizielle HRB-Nummer eintragen)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Management */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Geschäftsführung
              </h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Vertretungsberechtigter Geschäftsführer:
                  </span>{" "}
                  {COMPANY_LEGAL.managingDirector}
                </p>
              </div>
            </div>

            {/* Tax Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Steuernummer & Umsatzsteuer-ID
              </h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Steuernummer:
                  </span>{" "}
                  <span className="text-amber-600 dark:text-amber-400">
                    {COMPANY_LEGAL.taxNumber}
                  </span>
                  {COMPANY_LEGAL.taxNumber.includes("XXX") && (
                    <span className="ml-2 text-sm text-amber-600 dark:text-amber-400">
                      (TODO: Offizielle Steuernummer eintragen)
                    </span>
                  )}
                </p>
                {COMPANY_LEGAL.vatId && (
                  <p>
                    <span className="font-medium text-foreground">
                      Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
                    </span>{" "}
                    <span className="text-amber-600 dark:text-amber-400">
                      {COMPANY_LEGAL.vatId}
                    </span>
                    {COMPANY_LEGAL.vatId.includes("999999999") && (
                      <span className="ml-2 text-sm text-amber-600 dark:text-amber-400">
                        (TODO: Offizielle USt-IdNr eintragen)
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Kontakt</h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">E-Mail:</span>{" "}
                  <a
                    href={`mailto:${COMPANY_LEGAL.contact.email}`}
                    className="text-sky-500 hover:text-sky-400 transition-colors"
                  >
                    {COMPANY_LEGAL.contact.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Telefon:</span>{" "}
                  <a
                    href={`tel:${COMPANY_LEGAL.contact.phone}`}
                    className="text-sky-500 hover:text-sky-400 transition-colors"
                  >
                    {COMPANY_LEGAL.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Website:</span>{" "}
                  <a
                    href={COMPANY_LEGAL.contact.website}
                    className="text-sky-500 hover:text-sky-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {COMPANY_LEGAL.contact.website}
                  </a>
                </p>
              </div>
            </div>

            {/* VSBG Notice */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p className="text-base">
                  Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)
                </p>
              </div>
            </div>

            {/* Liability Notice */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Haftung für Inhalte
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>
            </div>

            {/* Copyright Notice */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Urheberrecht</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke
                  auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten,
                  nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
                  auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                  die Urheberrechte Dritter beachtet. Insbesondere werden
                  Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                  von Rechtsverletzungen werden wir derartige Inhalte umgehend
                  entfernen.
                </p>
              </div>
            </div>

            {/* Responsible for Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p className="font-semibold text-foreground">
                  {COMPANY_LEGAL.managingDirector}
                </p>
                <p>{COMPANY_LEGAL.address.full}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
