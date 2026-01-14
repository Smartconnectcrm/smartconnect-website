"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import type { ServiceDefinition } from "@/lib/content"

interface ServiceDetailProps {
  service: ServiceDefinition
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div
      id={service.id}
      className="scroll-mt-24 rounded-2xl bg-brand-light-bg dark:bg-brand-dark-bg border-2 border-brand-light-border dark:border-brand-dark-border overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-brand-light-border dark:border-brand-dark-border bg-gradient-to-r from-brand-light-muted/30 to-transparent dark:from-brand-dark-muted/30">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text">
            {service.title}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <span className="rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-3 py-1 text-xs font-bold text-brand-charcoal">
              {service.role}
            </span>
            <span className="rounded-full bg-brand-light-border dark:bg-brand-dark-border px-3 py-1 text-xs font-bold text-brand-light-text dark:text-brand-dark-text">
              {service.category}
            </span>
          </div>
        </div>
        
        <p className="text-base text-brand-light-muted dark:text-brand-dark-muted leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Deliverables */}
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-brand-diamond/10 flex items-center justify-center text-xs font-bold text-brand-diamond">
                ✓
              </span>
              Deliverables
            </h3>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  <span className="text-brand-diamond mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Inputs */}
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-brand-gold/10 flex items-center justify-center text-xs font-bold text-brand-gold">
                ↓
              </span>
              Typische Inputs
            </h3>
            <ul className="space-y-2">
              {service.typicalInputs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  <span className="text-brand-gold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical Outputs */}
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-brand-diamond/10 flex items-center justify-center text-xs font-bold text-brand-diamond">
                ↑
              </span>
              Typische Outputs
            </h3>
            <ul className="space-y-2">
              {service.typicalOutputs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  <span className="text-brand-diamond mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scope Boundaries */}
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-light-text dark:text-brand-dark-text mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center text-xs font-bold text-red-500">
                ⊘
              </span>
              Abgrenzung
            </h3>
            <ul className="space-y-2">
              {service.scopeBoundaries.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                  <span className="text-red-500 mt-0.5">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expandable Section */}
        <div className="mt-8 pt-8 border-t border-brand-light-border dark:border-brand-dark-border">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between gap-4 text-left group"
          >
            <span className="font-heading text-base font-bold text-brand-light-text dark:text-brand-dark-text group-hover:text-brand-diamond transition-colors">
              Tender-Readiness & Procurement-Informationen
            </span>
            <ChevronDown
              className={`h-5 w-5 text-brand-light-muted dark:text-brand-dark-muted transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {expanded && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Tender Readiness */}
              <div>
                <h4 className="font-heading text-sm font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Tender-Readiness
                </h4>
                <ul className="space-y-2">
                  {service.tenderReadiness.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                      <span className="text-brand-diamond mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sector Alignment */}
              <div>
                <h4 className="font-heading text-sm font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                  Sektor-Ausrichtung
                </h4>
                <ul className="space-y-2">
                  {service.sectorAlignment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-brand-light-muted dark:text-brand-dark-muted">
                      <span className="text-brand-gold mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Procurement Category */}
              {service.procurementCategory && (
                <div className="md:col-span-2">
                  <h4 className="font-heading text-sm font-bold text-brand-light-text dark:text-brand-dark-text mb-2">
                    CPV-Kategorie (Common Procurement Vocabulary)
                  </h4>
                  <p className="text-sm text-brand-light-muted dark:text-brand-dark-muted">
                    {service.procurementCategory}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
