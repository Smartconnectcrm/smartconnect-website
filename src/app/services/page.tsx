import ServicesCatalog from "./ServicesCatalog"

import type { ServiceDTO } from "./types"

export const metadata = {
  title: "Leistungen | SmartConnect CRM UG (haftungsbeschränkt)",
  description:
    "Strukturierter Leistungskatalog für Beschaffung, Vergabe und EU-tendernahe Vorhaben. Fokussiert auf klare Abgrenzung, Dokumentation und Compliance-by-Design.",
}

export default function ServicesPage() {
  const services: ServiceDTO[] = [
    {
      title: "IT Service & Operations Support",
      category: "Operations",
      shortScope:
        "Unterstützung im Betrieb (Run) mit klaren Leistungsbausteinen, Dokumentation und Übergabefähigkeit.",
      deliverables: [
        "Betriebs-/Service-Dokumentation (Runbooks, SOPs)",
        "Incident-/Request-Prozesse (Definition/Anpassung)",
        "Service-Übersicht inkl. Verantwortlichkeiten (RACI nach Bedarf)",
        "Übergabe-/Onboarding-Unterlagen für Betriebsteams",
      ],
      typicalInputs: [
        "Bestehende Betriebsprozesse/ITSM-Vorgaben",
        "System-/Zugangsübersichten (nach Rollenprinzip)",
        "Service- und Zuständigkeitsmodelle (falls vorhanden)",
      ],
      boundaries: [
        "Kein 24/7-NOC ohne separate Vereinbarung",
        "Kein Betrieb ohne definierte Verantwortlichkeiten und Zugänge",
        "Changes erfolgen kontrolliert (Change-Flow/Approval)",
      ],
      tenderAlignment: [
        "Nachvollziehbare Leistungsabgrenzung",
        "Audit-/Review-fähige Dokumentation",
        "Betriebs- und Übergabefähigkeit",
      ],
      iconKey: "settings",
    },
    {
      title: "Systemintegration & Schnittstellen",
      category: "Integration",
      shortScope:
        "Integration bestehender Systeme über APIs/ETL mit nachvollziehbaren Datenflüssen und kontrollierten Changes.",
      deliverables: ["Schnittstellen-/Datenfluss-Doku", "API-/ETL-Implementierung (scoped)", "Test- & Übergabeprotokoll"],
      typicalInputs: ["Systemlandschaft/Architektur-Skizze", "Zugänge/Keys (rollenbasiert)", "Datenmodelle / Mapping"],
      boundaries: ["Keine Blackbox-Integration ohne Doku", "Keine produktiven Changes ohne Test/Abnahme"],
      tenderAlignment: ["Nachvollziehbarkeit", "Change-Kontrolle", "Übergabefähigkeit"],
      iconKey: "network",
    },
    {
      title: "Security-by-Design & Baseline Hardening",
      category: "Security",
      shortScope:
        "Sicherheitsorientierte Umsetzung (Baseline), Risiko- und Maßnahmenübersicht ohne pauschale Zertifikatsclaims.",
      deliverables: ["Baseline-Checkliste", "Maßnahmenplan (priorisiert)", "Dokumentierte Hardening-Änderungen (scoped)"],
      typicalInputs: ["Asset-/Systemliste", "Rollen-/Rechtekonzept", "Aktuelle Konfigurationen (export/scan)"],
      boundaries: ["Kein Zertifizierungsversprechen", "Kein Pentest ohne separates Angebot"],
      tenderAlignment: ["Risikobasierter Ansatz", "Dokumentationspflicht", "Nachvollziehbare Maßnahmen"],
      iconKey: "shield",
    },
    {
      title: "EU Tender & Procurement Enablement",
      category: "Procurement",
      shortScope:
        "Unterstützung bei tendertauglicher Dokumentation, Angebotsstruktur und prüffähiger Aufbereitung für Beschaffung & Vergabe.",
      deliverables: ["Leistungsbeschreibung/Scope-Struktur", "Abgrenzungen & Annahmen", "Dokumentationspaket (Review-ready)"],
      typicalInputs: ["RFP/RFQ-Unterlagen", "Projekt-/Zielbild", "Randbedingungen (Datenschutz, Fristen, Rollen)"],
      boundaries: ["Keine Rechtsberatung", "Kein Guarantee auf Zuschlag"],
      tenderAlignment: ["Vergabekontext geeignet", "Scope-Klarheit", "Prüffähige Struktur"],
      iconKey: "filecheck",
    },
    {
      title: "Cloud & Modern Workplace Operations",
      category: "Cloud",
      shortScope: "Stabile Cloud-Basis (scoped) inkl. Betriebskonzept, Rollenmodell und dokumentierter Übergabe.",
      deliverables: ["Betriebskonzept", "Konfigurations-Standards (scoped)", "Übergabe/Runbook"],
      typicalInputs: ["Tenant/Account-Zugänge (rollenbasiert)", "Zielbild/Policies", "Bestehende Standards"],
      boundaries: ["Kein Vollbetrieb ohne SLA", "Keine Changes ohne Approval"],
      tenderAlignment: ["Betriebsfähigkeit", "Governance", "Dokumentation"],
      iconKey: "cloud",
    },
    {
      title: "Data & Reporting Foundations",
      category: "Data",
      shortScope: "Saubere Datenbasis für Reporting/Controlling mit klaren Definitionen, Qualitätssicherung und Doku.",
      deliverables: ["Datenmodell (scoped)", "Definitionen/KPIs", "ETL/Extract-Konzept (scoped)", "Doku & Übergabe"],
      typicalInputs: ["Datenquellen & Zugänge", "KPIs/Reporting-Ziele", "Governance/Compliance-Randbedingungen"],
      boundaries: ["Kein Data Warehouse ‘Big Bang’ ohne Phasenplan"],
      tenderAlignment: ["Nachvollziehbare Definitionen", "Audit-Trail (scoped)", "Übergabefähigkeit"],
      iconKey: "database",
    },
    {
      title: "Delivery Support & Project Recovery",
      category: "Delivery",
      shortScope: "Stabilisierung laufender Vorhaben durch klare Maßnahmen, Status-Transparenz und priorisierte Umsetzung.",
      deliverables: ["Recovery-Plan", "Risikolog", "Status-/Fortschrittsreporting (scoped)", "Change-/Decision-Log"],
      typicalInputs: ["Aktueller Stand/Backlog", "Stakeholder/Entscheider", "Constraints & Deadlines"],
      boundaries: ["Kein ‘Heldentum’ ohne Scope/Fakten", "Entscheidungen bleiben beim Auftraggeber"],
      tenderAlignment: ["Transparenz", "Nachvollziehbare Entscheidungen", "Governance"],
      iconKey: "target",
    },
  ]

  return <ServicesCatalog services={services} />
}
