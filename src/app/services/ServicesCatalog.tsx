"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

import ServiceCard from "@/components/ServiceCard"

import type { ServiceDTO } from "./page"


function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const CATEGORIES: Array<ServiceDTO["category"] | "All"> = [
  "All",
  "Operations",
  "Integration",
  "Security",
  "Procurement",
  "Cloud",
  "Data",
  "Delivery",
]

export default function ServicesCatalog({ services }: { services: ServiceDTO[] }) {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All")

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()

    return services.filter((s) => {
      const catOk = cat === "All" ? true : s.category === cat
      if (!catOk) return false
      if (!query) return true

      const hay = [
        s.title,
        s.shortScope,
        s.category,
        ...s.deliverables,
        ...s.typicalInputs,
        ...s.boundaries,
        ...s.tenderAlignment,
      ]
        .join(" ")
        .toLowerCase()

      return hay.includes(query)
    })
  }, [services, q, cat])

  const toc = useMemo(
    () =>
      filtered.slice(0, 12).map((s) => ({
        id: slugify(s.title),
        label: s.title,
      })),
    [filtered]
  )

  return (
    <div className="doc-prose">
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          Tender-ready · Dokumentations- &amp; Compliance-orientiert
        </div>

        <h1 className="mt-4">Leistungen</h1>

        <p className="lead">
          Strukturierter Leistungskatalog für Beschaffung, Vergabe und EU-tendernahe Vorhaben — bewusst klar abgegrenzt,
          prüfbar dokumentiert und auf Betriebs- und Übergabefähigkeit ausgelegt.
        </p>
      </div>

      {/* Executive Principles Cards */}
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          { k: "Governance", v: "Audit-fähige Artefakte", d: "Dokumentation als Teil der Lieferung." },
          { k: "Compliance", v: "Datensparsamkeit", d: "Zweckbindung, Rollenprinzip, Minimal Logging." },
          { k: "Transparenz", v: "Klare Abgrenzung", d: "Änderungen über Change-Prozesse." },
          { k: "Vergabe", v: "Prüfkontext geeignet", d: "Struktur für Beschaffung & Review." },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{x.k}</div>
            <div className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{x.v}</div>
            <div className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{x.d}</div>
          </div>
        ))}
      </section>

      {/* Filter + Mini-TOC */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-950">
            <Search size={16} className="text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Suchen: Leistung, Deliverable, Scope, Stichwort …"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const active = c === cat
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    active
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300",
                  ].join(" ")}
                >
                  {c === "All" ? "Alle" : c}
                </button>
              )
            })}
          </div>
        </div>

        {/* Mini TOC */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Springe zu:</span>
          {toc.length === 0 ? (
            <span className="text-xs text-slate-500">Keine Treffer.</span>
          ) : (
            toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                {t.label}
              </a>
            ))
          )}
        </div>

        <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Treffer: <span className="font-semibold">{filtered.length}</span>
        </div>
      </section>

      {/* Services Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((s) => (
          <div key={s.title} id={slugify(s.title)} className="scroll-mt-28">
            <ServiceCard
              title={s.title}
              shortScope={s.shortScope}
              deliverables={s.deliverables}
              typicalInputs={s.typicalInputs}
              boundaries={s.boundaries}
              tenderAlignment={s.tenderAlignment}
              iconKey={s.iconKey}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="policy-note mt-10">
        <div className="section-title">Anfrage / Abstimmung</div>
        <p className="small-muted mt-2">
          Für eine sachgerechte Einordnung sind ein kurzer Kontext (Ziel, Systemumfeld, Restriktionen) und ggf. eine
          gewünschte Lieferform (Dokument, Umsetzung, Übergabe) hilfreich.
        </p>
        <div className="mt-4">
          <Link href="/contact" className="btn-primary">
            Zur Geschäftsanfrage (Kontakt)
          </Link>
        </div>
      </section>
    </div>
  )
}
