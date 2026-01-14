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
    <div className="space-y-16">
      {/* Pillars Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-2xl border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg p-8 transition-all hover:border-brand-diamond hover:shadow-soft-lg">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-diamond">Governance</div>
          <p className="text-base leading-relaxed text-brand-light-muted dark:text-brand-dark-muted">
            Audit-fähige Artefakte. Dokumentation als Teil der Lieferung.
          </p>
        </div>
        <div className="group rounded-2xl border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg p-8 transition-all hover:border-brand-diamond hover:shadow-soft-lg">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-diamond">Compliance</div>
          <p className="text-base leading-relaxed text-brand-light-muted dark:text-brand-dark-muted">
            Datensparsamkeit, Zweckbindung, Rollenprinzip, Minimal Logging.
          </p>
        </div>
        <div className="group rounded-2xl border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg p-8 transition-all hover:border-brand-diamond hover:shadow-soft-lg">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-diamond">Transparenz</div>
          <p className="text-base leading-relaxed text-brand-light-muted dark:text-brand-dark-muted">
            Klare Abgrenzung. Änderungen über Change-Prozesse.
          </p>
        </div>
        <div className="group rounded-2xl border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg p-8 transition-all hover:border-brand-diamond hover:shadow-soft-lg">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-diamond">Vergabe</div>
          <p className="text-base leading-relaxed text-brand-light-muted dark:text-brand-dark-muted">
            Prüfkontext geeignet. Struktur für Beschaffung & Review.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div id="catalog" className="rounded-2xl border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg p-8 shadow-soft-lg">
        <div className="flex flex-col gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-light-muted dark:text-brand-dark-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Suchen: Leistung, Deliverable, Scope, Stichwort …"
              aria-label="Services durchsuchen"
              className="w-full rounded-xl border border-brand-light-border dark:border-brand-dark-border bg-white dark:bg-brand-charcoal pl-12 pr-4 py-4 text-base text-brand-light-text dark:text-brand-dark-text placeholder:text-brand-light-muted dark:placeholder:text-brand-dark-muted focus:border-brand-diamond focus:outline-none focus:ring-2 focus:ring-brand-diamond/20 transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCat(c.key)}
                className={cn(
                  "rounded-lg border px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all",
                  cat === c.key
                    ? "border-brand-diamond bg-brand-diamond text-brand-charcoal shadow-soft-md"
                    : "border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg text-brand-light-text dark:text-brand-dark-text hover:border-brand-diamond hover:bg-brand-diamond/10"
                )}
              >
                {c.label}
              </button>
            ))}
            <div className="ml-auto text-sm font-bold text-brand-light-muted dark:text-brand-dark-muted">
              Treffer: {filtered.length}
            </div>
          </div>

          {/* Jump Index */}
          {jumpItems.length > 0 && (
            <div className="rounded-2xl border-2 border-brand-light-border/50 dark:border-brand-dark-border/50 bg-gradient-to-br from-brand-light-bg to-brand-light-muted/10 dark:from-brand-dark-bg dark:to-brand-dark-muted/10 p-6">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-light-muted dark:text-brand-dark-muted">
                Springe zu
              </div>
              <div className="flex flex-wrap gap-2">
                {jumpItems.map((j) => (
                  <a
                    key={j.id}
                    href={`#${j.id}`}
                    className="rounded-lg border border-brand-light-border dark:border-brand-dark-border bg-white dark:bg-brand-charcoal px-4 py-2 text-sm font-semibold text-brand-light-text dark:text-brand-dark-text transition-all hover:border-brand-diamond hover:bg-brand-diamond/10 hover:text-brand-diamond"
                  >
                    {j.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2">
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

      {/* CTA Section */}
      <section className="rounded-2xl border-2 border-brand-gold/30 bg-gradient-to-br from-brand-gold/5 to-brand-diamond/5 p-10 text-center">
        <h2 className="font-heading text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
          Anfrage / Abstimmung
        </h2>
        <p className="text-lg text-brand-light-muted dark:text-brand-dark-muted leading-relaxed max-w-2xl mx-auto mb-8">
          Für eine sachgerechte Einordnung sind ein kurzer Kontext (Ziel, Systemumfeld, Restriktionen) und ggf. die
          gewünschte Lieferform (Dokument, Umsetzung, Übergabe) hilfreich.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-8 py-4 text-base font-bold text-brand-charcoal transition-all hover:bg-brand-gold/90 hover:shadow-soft-lg hover:scale-105"
        >
          Zur Geschäftsanfrage (Kontakt)
        </Link>
      </section>
    </div>
  )
}
