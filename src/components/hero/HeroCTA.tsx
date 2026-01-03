import Link from "next/link"

export default function HeroCTA() {
  return (
    <Link
      href="/contact"
      aria-label="Kontakt aufnehmen – Beratung anfragen"
      className="
        inline-flex items-center justify-center
        rounded-xl px-6 py-3
        text-sm font-medium
        text-slate-900
        bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300
        shadow-lg shadow-emerald-500/20
        transition
        hover:brightness-105
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/30
        focus-visible:ring-offset-2
        focus-visible:ring-offset-slate-950
      "
    >
      Request a Consultation
    </Link>
  )
}
