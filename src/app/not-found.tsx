import Link from "next/link"

export default function NotFound() {
  return (
    <div className="doc-prose">
      <h1>Seite nicht gefunden</h1>
      <p>Die angeforderte Seite ist nicht verfügbar.</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link href="/" className="btn-primary">
          Zur Startseite
        </Link>

        <Link href="/contact" className="btn-secondary">
          Kontakt
        </Link>
      </div>

      <p className="mt-6">
        Falls Sie Hilfe benötigen, schreiben Sie uns:{" "}
        <a href="mailto:admin@smartclientcrm.com" className="underline">
          admin@smartclientcrm.com
        </a>
      </p>
    </div>
  )
}
