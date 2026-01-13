"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import ServiceCard from "@/components/ServiceCard"
import { cn } from "@/lib/utils"

import type { ServiceCategory, ServiceDTO } from "./types"

type CategoryFilter = "All" | ServiceCategory

const CATEGORIES: Array<{ key: CategoryFilter; label: string }> = [
  { key: "All", label: "Alle" },
  { key: "Operations", label: "Operations" },
  { key: "Integration", label: "Integration" },
  { key: "Security", label: "Security" },
  { key: "Procurement", label: "Procurement" },
  { key: "Cloud", label: "Cloud" },
  { key: "Data", label: "Data" },
  { key: "Delivery", label: "Delivery" },
]

/**
 * Canonical slugify used by jump index + service section ids.
 * Keep this identical wherever anchors/ids must match.
 */
function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function includesQuery(hay: string, q: string) {
  const h = hay.toLowerCase()
  const query = q.toLowerCase()
  return h.includes(query)
}

export default function ServicesCatalog({ services }: { services: ServiceDTO[] }) {
  const [query, setQuery] = React.useState("")
  const [cat, setCat] = React.useState<CategoryFilter>("All")

  const filtered = React.useMemo(() => {
    const q = query.trim()
    return services.filter((s) => {
      const categoryOk = cat === "All" ? true : s.category === cat
      if (!categoryOk) return false
      if (!q) return true

      const hay = [
        s.title,
        s.category,
        s.shortScope,
        ...(s.deliverables ?? []),
        ...(s.typicalInputs ?? []),
        ...(s.boundaries ?? []),
        ...(s.tenderAlignment ?? []),
      ].join(" ")

      return includesQuery(hay, q)
    })
  }, [services, query, cat])

  const jumpItems = React.useMemo(
    () =>
      filtered.map((s) => ({
        id: slugify(s.title),
        label: s.title,
      })),
    [filtered]
  )

  return (
    <div>
      {/* Header */}
      <div className="mt-2">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-black tracking-wide">
          TENDER-READY • DOKUMENTATIONS- &amp; COMPLIANCE-ORIENTIERT
        </div>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div className="doc-prose">
            <h1>Leistungen</h1>
            <p className="lead">
              Strukturierter Leistungskatalog für Beschaffung, Vergabe und EU-tendernahe Vorhaben — bewusst klar
              abgegrenzt, prüfbar dokumentiert und auf Betriebs- und Übergabefähigkeit ausgelegt.
            </p>
          </div>

          <div className="mt-1 flex items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Kontakt
            </Link>
            <a href="#catalog" className="btn-secondary">
              Zum Katalog
            </a>
          </div>
        </div>

        <hr className="hr-soft mt-6" />
      </div>

      {/* Pillars */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="policy-note">
          <div className="section-title">Governance</div>
          <p className="small-muted mt-2">Audit-fähige Artefakte. Dokumentation als Teil der Lieferung.</p>
        </div>
        <div className="policy-note">
          <div className="section-title">Compliance</div>
          <p className="small-muted mt-2">Datensparsamkeit, Zweckbindung, Rollenprinzip, Minimal Logging.</p>
        </div>
        <div className="policy-note">
          <div className="section-title">Transparenz</div>
          <p className="small-muted mt-2">Klare Abgrenzung. Änderungen über Change-Prozesse.</p>
        </div>
        <div className="policy-note">
          <div className="section-title">Vergabe</div>
          <p className="small-muted mt-2">Prüfkontext geeignet. Struktur für Beschaffung & Review.</p>
        </div>
      </div>

      {/* Controls */}
      <div id="catalog" className="mt-7 card-soft p-5">
        <div className="flex flex-col gap-4">
          <div className="input-enterprise">
            <Search className="h-4 w-4 opacity-70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Suchen: Leistung, Deliverable, Scope, Stichwort …"
              aria-label="Services durchsuchen"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCat(c.key)}
                className={cn("pill", cat === c.key && "pill-active")}
              >
                {c.label}
              </button>
            ))}
            <div className="ml-auto text-sm font-black opacity-70">Treffer: {filtered.length}</div>
          </div>

          {/* Jump index */}
          {jumpItems.length > 0 && (
            <div className="mt-1 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <div className="text-xs font-black opacity-70">SPRINGE ZU</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {jumpItems.map((j) => (
                  <a key={j.id} href={`#${j.id}`} className="pill">
                    {j.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* List */}
      <div className="mt-6 grid gap-5">
        {filtered.map((s) => (
          <div key={s.title} id={slugify(s.title)} className="scroll-mt-24">
            <ServiceCard
              title={s.title}
              iconKey={s.iconKey}
              shortScope={s.shortScope}
              deliverables={s.deliverables ?? []}
              typicalInputs={s.typicalInputs ?? []}
              boundaries={s.boundaries ?? []}
              tenderAlignment={s.tenderAlignment ?? []}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="policy-note mt-10">
        <div className="section-title">Anfrage / Abstimmung</div>
        <p className="small-muted mt-2">
          Für eine sachgerechte Einordnung sind ein kurzer Kontext (Ziel, Systemumfeld, Restriktionen) und ggf. die
          gewünschte Lieferform (Dokument, Umsetzung, Übergabe) hilfreich.
        </p>
        <div className="mt-4">
          <Link href="/contact" className="btn-primary">
            Zur Geschäftsanfrage (Kontakt)
          </Link>
        </div>
      </section>

      <div className="h-10" />
    </div>
  )
}
