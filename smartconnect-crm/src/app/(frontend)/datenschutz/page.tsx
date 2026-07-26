import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | SmartConnect CRM',
  description:
    'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO durch die SmartConnect CRM UG (haftungsbeschränkt).',
}

export default function DatenschutzPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-100">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
        Datenschutzerklärung
      </h1>

      <p className="text-base leading-relaxed mb-8 text-slate-600 dark:text-slate-300">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Sie können unsere Website
        grundsätzlich nutzen, ohne persönliche Angaben zu machen. Personenbezogene Daten verarbeiten
        wir nur, wenn Sie sie uns freiwillig mitteilen – zum Beispiel über das Kontaktformular oder
        per E-Mail.
      </p>

      <div className="space-y-10 text-slate-700 dark:text-slate-200">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            1. Verantwortlicher
          </h2>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
            <p className="font-semibold text-slate-900 dark:text-white">
              SmartConnect CRM UG (haftungsbeschränkt)
            </p>
            <p>Otto-Braun-Str. 12, 40595 Düsseldorf</p>
            <p>
              <span className="font-medium">E-Mail:</span>{' '}
              <a
                href="mailto:admin@smartclientcrm.com"
                className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
              >
                admin@smartclientcrm.com
              </a>
            </p>
            <p>
              <span className="font-medium">Support:</span>{' '}
              <a
                href="mailto:support@smartclientcrm.com"
                className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
              >
                support@smartclientcrm.com
              </a>
            </p>
            <p>
              <span className="font-medium">Telefon:</span> +49 211 87973999233
            </p>
            <p>
              <span className="font-medium">Geschäftsführer:</span> Alimi Abubakar Bolarinwa
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            2. Kontaktformular & E-Mail
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Wenn Sie das Kontaktformular nutzen oder uns eine E-Mail senden, verarbeiten wir die von
            Ihnen angegebenen Daten (wie Name, E-Mail-Adresse und Telefonnummer) ausschließlich zur
            Bearbeitung Ihrer Anfrage. Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte
            weiter.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            3. Server-Protokolle
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Beim Besuch unserer Website speichert unser Hosting-Anbieter automatisch technische
            Daten (z. B. IP-Adresse in gekürzter Form, Datum, Uhrzeit, aufgerufene Seite,
            Browsertyp). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen
            ausschließlich der technischen Sicherheit und Aufrechterhaltung des Betriebs.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            4. Keine Analyse-Tools, keine Cookies
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Unsere Website verwendet keine Tracking-Tools, keine Analyse-Dienste (wie Google
            Analytics) und keine Cookies, die personenbezogene Daten verarbeiten.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            5. Ihre Rechte
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300 mb-2">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen (DSGVO) jederzeit das Recht
            auf:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-2">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger oder unvollständiger Daten</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten</li>
            <li>Einschränkung der Datenverarbeitung</li>
          </ul>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
            Anfragen bezüglich Ihrer Rechte richten Sie bitte per E-Mail an:{' '}
            <a
              href="mailto:admin@smartclientcrm.com"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              admin@smartclientcrm.com
            </a>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            6. Aktualisierung
          </h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Wir passen diese Datenschutzerklärung an, wenn neue Funktionen auf der Website
            implementiert werden oder sich die gesetzlichen Vorgaben ändern.
          </p>
        </section>
      </div>
    </div>
  )
}
