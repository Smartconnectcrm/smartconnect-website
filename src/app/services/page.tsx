import { BRAND } from "@/lib/branding"
import { SERVICES } from "@/lib/content"

import ServiceDetail from "./ServiceDetail"

export const metadata = {
  title: `Leistungen | ${BRAND?.name ?? "SmartConnect CRM"}`,
  description:
    "Strukturierter Leistungskatalog für Beschaffung, Vergabe und EU-tendernahe Vorhaben. Fokussiert auf klare Abgrenzung, Dokumentation und Compliance-by-Design.",
}

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-20">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block rounded-full bg-gradient-to-r from-brand-gold to-brand-diamond px-4 py-1.5 text-xs font-bold text-brand-charcoal mb-6">
          Tender-Ready Delivery
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text mb-6 leading-tight">
          Leistungskatalog
        </h1>
        
        <p className="text-lg md:text-xl font-light text-brand-light-muted dark:text-brand-dark-muted leading-relaxed max-w-3xl mx-auto">
          Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und compliance-orientierter
          Umsetzung für öffentliche Auftraggeber und regulierte Unternehmen.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-12">
        {SERVICES.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 pt-16 border-t border-brand-light-border dark:border-brand-dark-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-light-text dark:text-brand-dark-text mb-4">
            Geschäftsanfrage
          </h2>
          <p className="text-base text-brand-light-muted dark:text-brand-dark-muted mb-6">
            Für Anfragen zu Leistungen, Tender-Unterstützung oder Projektanfragen kontaktieren Sie uns über das Kontaktformular.
          </p>
          <a href="/contact" className="btn btn-primary btn-large">
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  )
}
