"use client"

import {
  AlertCircle,
  Boxes,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cloud,
  Database,
  FileCheck,
  GanttChartSquare,
  Lock,
  Network,
  Settings,
  ShieldCheck,
  Target,
} from "lucide-react"
import * as React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type IconKey =
  | "settings"
  | "network"
  | "lock"
  | "gantt"
  | "cloud"
  | "database"
  | "boxes"
  | "shield"
  | "filecheck"
  | "target"

type ServiceCardProps = {
  title: string
  shortScope: string
  deliverables: string[]
  typicalInputs: string[]
  boundaries: string[]
  tenderAlignment?: string[]
  /** Optional: enables the premium icon chip (keeps backwards compatibility). */
  iconKey?: IconKey | string
  className?: string
}

function safeList(list: string[] | undefined) {
  return Array.isArray(list) ? list.filter(Boolean) : []
}

/**
 * Canonical slugify used by ServicesCatalog + MegaMenu + ServiceCard anchors.
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

function normalizeIconKey(k?: string): IconKey | undefined {
  if (!k) return undefined
  const key = String(k).trim().toLowerCase()
  const allowed: IconKey[] = [
    "settings",
    "network",
    "lock",
    "gantt",
    "cloud",
    "database",
    "boxes",
    "shield",
    "filecheck",
    "target",
  ]
  return allowed.includes(key as IconKey) ? (key as IconKey) : undefined
}

function getIcon(iconKey?: IconKey) {
  const map: Record<IconKey, React.ElementType> = {
    settings: Settings,
    network: Network,
    lock: Lock,
    gantt: GanttChartSquare,
    cloud: Cloud,
    database: Database,
    boxes: Boxes,
    shield: ShieldCheck,
    filecheck: FileCheck,
    target: Target,
  }
  return iconKey ? map[iconKey] : null
}

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ")
}

/**
 * Concept B: Modern Institutional ServiceCard
 * - No border, subtle background
 * - Hover scale (1.03)
 * - 64px gradient icon (gold → diamond), centered top
 * - 28px title, 18px body, generous spacing
 * - Slide-down accordion with fade (400ms cubic-bezier)
 */
export default function ServiceCard({
  title,
  shortScope,
  deliverables,
  typicalInputs,
  boundaries,
  tenderAlignment,
  iconKey,
  className,
}: ServiceCardProps) {
  const deliverablesSafe = safeList(deliverables)
  const typicalInputsSafe = safeList(typicalInputs)
  const boundariesSafe = safeList(boundaries)
  const tenderAlignmentSafe = safeList(tenderAlignment)

  const reactId = React.useId()
  const itemValue = React.useMemo(() => {
    // Stable & unique per component instance
    return `details-${slugify(title || "service")}-${reactId.replace(/[:]/g, "")}`
  }, [title, reactId])

  const safeIconKey = React.useMemo(() => normalizeIconKey(iconKey), [iconKey])
  const Icon = React.useMemo(() => getIcon(safeIconKey), [safeIconKey])

  return (
    <section
      aria-label={`Leistung: ${title}`}
      className={cx(
        "group overflow-hidden rounded-2xl transition-all duration-300",
        "bg-brand-light-bg dark:bg-brand-dark-bg",
        "hover:scale-[1.03] hover:shadow-soft-lg",
        className
      )}
    >
      <div className="p-8 md:p-10">
        {/* Icon */}
        {Icon ? (
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold to-brand-diamond text-brand-charcoal">
              <Icon size={32} strokeWidth={2} />
            </div>
          </div>
        ) : null}

        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text text-center mb-4 leading-tight">
          {title}
        </h2>

        {/* Short Scope */}
        <p className="text-base md:text-lg text-brand-light-muted dark:text-brand-dark-muted text-center leading-relaxed mb-8">
          {shortScope}
        </p>

        {/* Accordion */}
        <Accordion type="single" collapsible>
          <AccordionItem value={itemValue} className="border-0">
            <AccordionTrigger className="group flex w-full items-center justify-center gap-2 rounded-lg border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg px-6 py-3 text-base font-semibold text-brand-light-text dark:text-brand-dark-text transition-all hover:border-brand-diamond hover:bg-brand-light-muted/20 dark:hover:bg-brand-dark-muted/20 data-[state=open]:border-brand-diamond data-[state=open]:bg-brand-light-muted/20 dark:data-[state=open]:bg-brand-dark-muted/20">
              <span>Details anzeigen</span>
              <ChevronDown size={20} className="transition-transform group-data-[state=open]:rotate-180" />
            </AccordionTrigger>

            <AccordionContent className="pt-8">
              <div className="space-y-8">
                {/* Deliverables */}
                {deliverablesSafe.length ? (
                  <div>
                    <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-light-muted dark:text-brand-dark-muted">
                      <FileCheck size={18} /> Ergebnisse &amp; Artefakte
                    </div>

                    <div className="space-y-3">
                      {deliverablesSafe.map((d, idx) => (
                        <div
                          key={`${idx}-${d}`}
                          className="flex gap-3 rounded-xl border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg p-4"
                        >
                          <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-diamond" />
                          <span className="text-base leading-relaxed text-brand-light-text dark:text-brand-dark-text">
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Typical Inputs */}
                {typicalInputsSafe.length ? (
                  <div>
                    <div className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-light-muted dark:text-brand-dark-muted">
                      Typische Eingaben (Client Inputs)
                    </div>
                    <ul className="space-y-2">
                      {typicalInputsSafe.map((i, idx) => (
                        <li
                          key={`${idx}-${i}`}
                          className="flex gap-3 text-base text-brand-light-muted dark:text-brand-dark-muted"
                        >
                          <span className="text-brand-diamond">→</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Boundaries */}
                {boundariesSafe.length ? (
                  <div className="rounded-2xl border-2 border-red-200/60 bg-red-50/30 p-6 dark:border-red-900/25 dark:bg-red-900/10">
                    <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      <AlertCircle size={18} /> Abgrenzung (Scope Boundaries)
                    </div>
                    <ul className="space-y-2">
                      {boundariesSafe.map((b, idx) => (
                        <li
                          key={`${idx}-${b}`}
                          className="flex gap-3 text-base italic leading-relaxed text-red-700/80 dark:text-red-300/80"
                        >
                          <span>–</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Tender Alignment Tags */}
                {tenderAlignmentSafe.length ? (
                  <div className="flex flex-wrap items-center gap-3 border-t-2 border-brand-light-border dark:border-brand-dark-border pt-6">
                    <span className="mr-2 text-xs font-bold uppercase tracking-wider text-brand-light-muted dark:text-brand-dark-muted">
                      Ausrichtung (EU-/Vergabe-Kontext):
                    </span>
                    {tenderAlignmentSafe.map((t, idx) => (
                      <span
                        key={`${idx}-${t}`}
                        className="rounded-lg border border-brand-light-border dark:border-brand-dark-border bg-brand-light-bg dark:bg-brand-dark-bg px-4 py-2 text-sm font-semibold text-brand-light-text dark:text-brand-dark-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
