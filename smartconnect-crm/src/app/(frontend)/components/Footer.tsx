import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-600 text-sm py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-neutral-900 mb-2">SmartConnect CRM</h3>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Strukturierte IT-Leistungsbausteine, dokumentierte Übergaben und konforme Umsetzung für
            Enterprise und den öffentlichen Sektor.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-neutral-900 mb-3 text-xs uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:underline">
                Leistungskatalog
              </Link>
            </li>
            <li>
              <Link href="/procurement" className="hover:underline">
                Procurement Profile
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:underline">
                CMS Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-neutral-900 mb-3 text-xs uppercase tracking-wider">
            Compliance & Standards
          </h4>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-1 bg-neutral-200 text-neutral-800 font-mono rounded">
              ISO 27001 Ready
            </span>
            <span className="px-2 py-1 bg-neutral-200 text-neutral-800 font-mono rounded">
              DSGVO / GDPR
            </span>
            <span className="px-2 py-1 bg-neutral-200 text-neutral-800 font-mono rounded">
              EVB-IT Standard
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-neutral-900 mb-3 text-xs uppercase tracking-wider">
            Rechtliches
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/impressum" className="hover:underline">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:underline">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-400 flex justify-between">
        <span>&copy; {new Date().getFullYear()} SmartConnect CRM. All rights reserved.</span>
        <span>EU Tender & Public Procurement Ready</span>
      </div>
    </footer>
  )
}
