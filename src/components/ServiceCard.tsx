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
        "group overflow-hidden rounded-xl border transition-all duration-300",
        "border-slate-200 bg-white shadow-sm hover:border-slate-300",
        "dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            {Icon ? (
              <div className="rounded-lg bg-slate-100 p-3 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                <Icon size={22} />
              </div>
            ) : null}

            <div className="flex-1">
              <h2 className="m-0 text-base font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                {title}
              </h2>
              <p className="m-0 mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{shortScope}</p>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-5">
          <Accordion type="single" collapsible>
            <AccordionItem value={itemValue} className="border-0">
              <AccordionTrigger className="sc-accordion-trigger group">
                <span className="sc-accordion-trigger-label">Details</span>

                {/* If your shadcn trigger already renders a chevron, hide this via CSS. */}
                <span className="ml-auto inline-flex items-center text-slate-400">
                  <ChevronDown size={18} className="group-data-[state=open]:hidden" />
                  <ChevronUp size={18} className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>

              <AccordionContent className="sc-accordion-content">
                <div className="mt-4">
                  <div className="grid gap-8 lg:grid-cols-12">
                    {/* Deliverables */}
                    {deliverablesSafe.length ? (
                      <div className="lg:col-span-7">
                        <div className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">
                          <FileCheck size={14} /> Ergebnisse &amp; Artefakte
                        </div>

                        <div className="grid gap-3">
                          {deliverablesSafe.map((d, idx) => (
                            <div
                              key={`${idx}-${d}`}
                              className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-3 dark:border-slate-700/50 dark:bg-slate-800/50"
                            >
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-500" />
                              <span className="text-sm leading-snug text-slate-700 dark:text-slate-300">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Inputs + Boundaries */}
                    <div className={deliverablesSafe.length ? "lg:col-span-5 space-y-8" : "lg:col-span-12 space-y-8"}>
                      {typicalInputsSafe.length ? (
                        <div>
                          <div className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                            Typische Eingaben (Client Inputs)
                          </div>
                          <ul className="space-y-2">
                            {typicalInputsSafe.map((i, idx) => (
                              <li key={`${idx}-${i}`} className="flex gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <span className="text-slate-400">•</span>
                                {i}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {boundariesSafe.length ? (
                        <div className="rounded-xl border border-red-100/60 bg-red-50/30 p-4 dark:border-red-900/25 dark:bg-red-900/10">
                          <div className="mb-3 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-red-600 dark:text-red-400">
                            <AlertCircle size={14} /> Abgrenzung (Scope Boundaries)
                          </div>
                          <ul className="space-y-2">
                            {boundariesSafe.map((b, idx) => (
                              <li
                                key={`${idx}-${b}`}
                                className="flex gap-2 text-xs italic leading-snug text-red-700/80 dark:text-red-300/80"
                              >
                                <span>–</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Tender alignment tags */}
                  {tenderAlignmentSafe.length ? (
                    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6 dark:border-slate-800">
                      <span className="mr-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        Ausrichtung (EU-/Vergabe-Kontext):
                      </span>
                      {tenderAlignmentSafe.map((t, idx) => (
                        <span
                          key={`${idx}-${t}`}
                          className="rounded border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
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
      </div>
    </section>
  )
}
