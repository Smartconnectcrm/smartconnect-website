import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded font-bold text-lg tracking-wider group-hover:bg-neutral-800 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-neutral-900 block leading-tight">
              SmartConnect CRM
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-neutral-500 block">
              Enterprise & Public Sector
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 font-medium text-sm text-neutral-700">
          <Link href="/" className="hover:text-black transition-colors">
            Leistungskatalog
          </Link>
          <Link href="/procurement" className="hover:text-black transition-colors">
            Procurement-Profil
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-black text-white rounded text-sm font-semibold hover:bg-neutral-800 transition-colors"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  )
}
