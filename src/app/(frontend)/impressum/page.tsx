import React from 'react'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Impressum | SmartConnect CRM',
  description:
    'Rechtliche Anbieterkennzeichnung und Angaben gemäß § 5 TMG / § 18 MStV der SmartConnect CRM UG (haftungsbeschränkt).',
}

export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-100">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
        Impressum
      </h1>

      {/* Corporate Information */}
      <section className="space-y-6 mb-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="font-semibold text-lg text-blue-600 dark:text-blue-400">
            SmartConnect CRM UG (haftungsbeschränkt)
          </p>
          <p>Otto-Braun-Str. 12</p>
          <p>40595 Düsseldorf</p>
          <p>Deutschland</p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-1">Vertreten durch:</h3>
          <p>Geschäftsführer: Alimi Abubakar Bolarinwa</p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-1">Kontakt:</h3>
          <p>
            <span className="font-medium">Telefon:</span> +49 211 87973999233
          </p>
          <p>
            <span className="font-medium">E-Mail:</span>{' '}
            <a
              href="mailto:admin@smartclientcrm.com"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              admin@smartclientcrm.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-1">Registereintrag:</h3>
          <p>Eingetragen im Handelsregister</p>
          <p>Registergericht: Amtsgericht Düsseldorf</p>
          <p>Rechtsform: Unternehmergesellschaft (haftungsbeschränkt)</p>
          <p>Registernummer: HRB 110351</p>
          <p>D-U-N-S® Nummer: 316845618</p>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-1">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          </h3>
          <p>Alimi Abubakar Bolarinwa</p>
          <p>Otto-Braun-Str. 12</p>
          <p>40595 Düsseldorf</p>
        </div>
      </section>

      <hr className="my-8 border-slate-200 dark:border-slate-800" />

      {/* Disclaimers & Dispute Resolution */}
      <section className="space-y-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Haftung für Links
          </h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
            Inhalte umgehend entfernen.
          </p>
        </div>
      </section>
    </div>
  )
}
