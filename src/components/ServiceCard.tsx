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

export default function ServiceCard({
  title,
  shortScope,
  deliverables,
  typicalInputs,
  boundaries,
  tenderAlignment,
}: ServiceCardProps) {
  return (
    <section className="card-soft p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="m-0 text-base font-extrabold tracking-tight">{title}</h2>
        <p className="m-0 small-muted">{shortScope}</p>
      </div>

      {/* Accordion */}
      <div className="mt-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="details" className="border-0">
            <AccordionTrigger className="sc-acc-trigger">
              <span className="sc-acc-label sc-acc-open">Details anzeigen</span>
              <span className="sc-acc-label sc-acc-close">Details ausblenden</span>
            </AccordionTrigger>

            <AccordionContent>
              <div className="sc-acc-content grid gap-6 md:grid-cols-2">
                <div>
                  <div className="text-sm font-extrabold">Lieferobjekte (Deliverables)</div>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-extrabold">Typische Eingaben (Client Inputs)</div>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {typicalInputs.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <div className="text-sm font-extrabold">Abgrenzung (Scope Boundaries)</div>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {boundaries.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                {tenderAlignment?.length ? (
                  <div className="md:col-span-2">
                    <div className="text-sm font-extrabold">Ausrichtung (EU-/Vergabe-Kontext)</div>
                    <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                      {tenderAlignment.map((t) => (
                        <li key={t}>{t}</li>
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
