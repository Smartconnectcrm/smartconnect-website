"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card className="rounded-none border border-brand-muted shadow-none">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <p className="small-muted mt-1">{shortScope}</p>
      </CardHeader>

      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details" className="border-brand-muted">
            <AccordionTrigger className="text-sm">Details anzeigen</AccordionTrigger>
            <AccordionContent>
              <div className="mt-3 grid gap-5">
                <section>
                  <div className="font-bold text-sm">Lieferobjekte (Deliverables)</div>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <div className="font-bold text-sm">Typische Eingaben (Client Inputs)</div>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {typicalInputs.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <div className="font-bold text-sm">Abgrenzung (Scope Boundaries)</div>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                    {boundaries.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </section>

                {tenderAlignment?.length ? (
                  <section>
                    <div className="font-bold text-sm">Ausrichtung (EU-/Vergabe-Kontext)</div>
                    <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                      {tenderAlignment.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
