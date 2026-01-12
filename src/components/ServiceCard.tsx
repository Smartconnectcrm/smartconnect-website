"use client"

import {
  AlertCircle,
  Boxes,
  CheckCircle2,
  Cloud,
  Database,
  FileCheck,
  GanttChartSquare,
  Lock,
  Network,
  Settings,
  Target,
} from "lucide-react"
import * as React from "react"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export type IconKey =
  | "settings"
  | "network"
  | "shield"
  | "filecheck"
  | "cloud"
  | "database"
  | "target"
  | "boxes"
  | "lock"
  | "alert"
  | "check"
  | "gantt"

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  settings: Settings,
  network: Network,
  shield: Lock,
  filecheck: FileCheck,
  cloud: Cloud,
  database: Database,
  target: Target,
  boxes: Boxes,
  lock: Lock,
  alert: AlertCircle,
  check: CheckCircle2,
  gantt: GanttChartSquare,
}

type Props = {
  title: string
  category: string
  shortScope: string
  deliverables: string[]
  typicalInputs: string[]
  boundaries: string[]
  tenderAlignment?: string[]
  iconKey?: IconKey
}

function safe(list: string[] | undefined) {
  return Array.isArray(list) ? list.filter(Boolean) : []
}

export default function ServiceCard({
  title,
  category,
  shortScope,
  deliverables,
  typicalInputs,
  boundaries,
  tenderAlignment,
  iconKey = "settings",
}: Props) {
  const Icon = ICONS[iconKey] ?? Settings

  const itemValue = React.useMemo(() => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
    return `svc-${slug}`
  }, [title])

  return (
    <div className="card-soft p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white/60 dark:bg-white/5">
            <Icon className="h-5 w-5 opacity-80" />
          </div>

          <div>
            <div className="text-xs font-black tracking-wide opacity-70">{category}</div>
            <h2 className="mt-1 text-[1.25rem]">{title}</h2>
            <p className="small-muted mt-2">{shortScope}</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem value={itemValue}>
            <AccordionTrigger className={cn("sc-accordion-trigger")}>
              <span className="sc-accordion-trigger-label">Details</span>
            </AccordionTrigger>

            <AccordionContent className="sc-accordion-content">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="section-title">Deliverables</div>
                  <ul className="mt-2">
                    {safe(deliverables).map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="section-title">Typische Inputs</div>
                  <ul className="mt-2">
                    {safe(typicalInputs).map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="section-title">Abgrenzung</div>
                  <ul className="mt-2">
                    {safe(boundaries).map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="section-title">Tender-Alignment</div>
                  <ul className="mt-2">
                    {safe(tenderAlignment).map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
