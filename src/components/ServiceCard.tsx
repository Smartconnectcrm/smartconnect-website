"use client"

import * as React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type ServiceCardProps = {
  title: string
  shortScope: string
  deliverables: string[]
  typicalInputs: string[]
  boundaries: string[]
  tenderAlignment?: string[]
}

function safeList(list: string[] | undefined) {
  return Array.isArray(list) ? list.filter(Boolean) : []
}

export default function ServiceCard({
  title,
  shortScope,
  deliverables,
  typicalInputs,
  boundaries,
  tenderAlignment,
}: ServiceCardProps) {
  const deliverablesSafe = safeList(deliverables)
  const typicalInputsSafe = safeList(typicalInputs)
  const boundariesSafe = safeList(boundaries)
  const tenderAlignmentSafe = safeList(tenderAlignment)

  // stable accordion item value (prevents collisions if multiple accordions are on a page)
  const itemValue = React.useMemo(() => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9äöüß\s-]/gi, "")
      .trim()
      .replace(/\s+/g, "-")
    return `details-${slug || "service"}`
  }, [title])

  return (
    <section className="card-soft p-6" aria-label={`Leistung: ${title}`}>
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="m-0 text-base font-extrabold tracking-tight">{title}</h2>
        <p className="m-0 small-muted">{shortScope}</p>
      </div>

      {/* Accordion */}
      <div className="mt-5">
        <Accordion type="single" collapsible>
          <AccordionItem value={itemValue} className="border-0">
            <AccordionTrigger className="sc-accordion-trigger">
              <span className="sc-accordion-trigger-label">Details</span>
            </AccordionTrigger>

            <AccordionContent className="sc-accordion-content">
              <div className="mt-4 grid gap-6">
                {deliverablesSafe.length ? (
                  <div>
                    <div className="text-sm font-extrabold">Lieferobjekte (Deliverables)</div>
                    <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                      {deliverablesSafe.map((d, idx) => (
                        <li key={`${idx}-${d}`}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {typicalInputsSafe.length ? (
                  <div>
                    <div className="text-sm font-extrabold">Typische Eingaben (Client Inputs)</div>
                    <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                      {typicalInputsSafe.map((i, idx) => (
                        <li key={`${idx}-${i}`}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {boundariesSafe.length ? (
                  <div>
                    <div className="text-sm font-extrabold">Abgrenzung (Scope Boundaries)</div>
                    <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                      {boundariesSafe.map((b, idx) => (
                        <li key={`${idx}-${b}`}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {tenderAlignmentSafe.length ? (
                  <div>
                    <div className="text-sm font-extrabold">Ausrichtung (EU-/Vergabe-Kontext)</div>
                    <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                      {tenderAlignmentSafe.map((t, idx) => (
                        <li key={`${idx}-${t}`}>{t}</li>
                      ))}
                    </ul>
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
