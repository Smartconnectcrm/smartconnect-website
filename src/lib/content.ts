/**
 * CONTENT STRUCTURE FOR MODEL C: HYBRID INSTITUTIONAL UX
 * 
 * This file contains all structured content for the SmartConnect CRM website.
 * Content is procurement-friendly, compliance-oriented, and suitable for:
 * - Public institutions
 * - EU tender contexts
 * - Regulated enterprise buyers
 * - Advisory firms
 * 
 * NO marketing hype, NO unverified claims, NO invented KPIs.
 */

// ============================================================================
// SERVICE DEFINITIONS
// ============================================================================

export type ServiceRole = "Advisory" | "Run" | "Change"
export type ServiceCategory = "Operations" | "Integration" | "Security" | "Procurement" | "Cloud" | "Data" | "Delivery"

export interface ServiceDefinition {
  id: string
  title: string
  category: ServiceCategory
  role: ServiceRole
  shortDescription: string
  scopeBoundaries: string[]
  deliverables: string[]
  typicalInputs: string[]
  typicalOutputs: string[]
  procurementCategory?: string
  sectorAlignment: string[]
  tenderReadiness: string[]
}

export const SERVICES: ServiceDefinition[] = [
  {
    id: "it-service-operations-support",
    title: "IT Service & Operations Support",
    category: "Operations",
    role: "Run",
    shortDescription:
      "Unterstützung im laufenden Betrieb mit klaren Leistungsbausteinen, strukturierter Dokumentation und Übergabefähigkeit für Audit- und Review-Kontexte.",
    scopeBoundaries: [
      "Kein 24/7-Betrieb ohne explizite Vereinbarung und SLA-Definition",
      "Keine Änderungen an Produktivsystemen ohne dokumentierten Change-Prozess und Freigabe",
      "Keine Übernahme von Lizenz-/Provider-Verträgen ohne separates Mandat",
      "Keine Haftung für Altarchitekturen ohne vollständige Transparenz und Dokumentation",
    ],
    deliverables: [
      "Betriebs- und Service-Dokumentation (Runbooks, Standard Operating Procedures)",
      "Incident-/Request-/Change-Prozesse (Definition, Anpassung, Integration in ITSM)",
      "Service-Übersicht inkl. Verantwortlichkeiten (RACI-Matrix nach Bedarf)",
      "Übergabe- und Onboarding-Unterlagen für Betriebsteams",
      "Monitoring- und Alerting-Grundlagen (Integration in bestehende Systeme)",
      "Eskalations- und Kommunikationsstruktur",
    ],
    typicalInputs: [
      "Bestehende Betriebsprozesse und ITSM-Vorgaben (falls vorhanden)",
      "System- und Zugangsübersichten (nach Rollenprinzip)",
      "Sicherheits- und Compliance-Vorgaben des Auftraggebers",
      "Service-Level-Anforderungen (Verfügbarkeit, Reaktionszeiten)",
    ],
    typicalOutputs: [
      "Strukturierte Betriebsdokumentation (versioniert, prüfbar)",
      "Implementierte ITSM-Prozesse (Incident, Request, Change)",
      "Übergabefähige Runbooks und Checklisten",
      "Betriebsberichte und Status-Dashboards (nach Vereinbarung)",
    ],
    procurementCategory: "72000000-5 (IT-Dienste: Software, Beratung und Internet)",
    sectorAlignment: ["Öffentliche Auftraggeber", "Regulierte Unternehmen", "Mittelstand"],
    tenderReadiness: [
      "ITIL-nahe Vorgehensweisen ohne Zertifizierungsanspruch",
      "Auditierbare und nachvollziehbare Dokumentation",
      "Betriebsnahe Umsetzung mit klaren Übergabepunkten",
    ],
  },

  {
    id: "systemintegration-schnittstellen",
    title: "Systemintegration & Schnittstellen",
    category: "Integration",
    role: "Change",
    shortDescription:
      "Integration bestehender Systeme über APIs, ETL-Prozesse oder Middleware mit nachvollziehbaren Datenflüssen, dokumentierten Schnittstellen und kontrollierten Changes.",
    scopeBoundaries: [
      "Keine Verarbeitung besonderer Kategorien personenbezogener Daten (Art. 9 DSGVO) ohne separate Bewertung und Rechtsgrundlage",
      "Keine Produktivschaltung ohne Abnahme, Testnachweis und dokumentierten Change-Prozess",
      "Keine dauerhafte Datenhaltung außerhalb vereinbarter Systeme und Zwecke",
      "Keine Garantie für Datenqualität bei fehlenden Quellsystem-Validierungen",
    ],
    deliverables: [
      "Schnittstellenbeschreibung (Datenfelder, Authentifizierung, Fehlerbehandlung, Retry-Logik)",
      "Integrations- und Ablaufdiagramme (technisch nachvollziehbar, UML/BPMN)",
      "Testfälle und Abnahmekriterien (funktional, sicherheitsrelevant, Grenzfälle)",
      "Betriebs- und Monitoring-Hinweise für die Integration",
      "Datenfluss-Dokumentation (Quelle, Transformation, Ziel, Aufbewahrung)",
      "Fehlerbehandlungs- und Logging-Konzept",
    ],
    typicalInputs: [
      "API-Dokumentation und Zugang zu Sandbox/Testumgebung",
      "Datenmodelle (Quelle/Ziel) und Validierungsregeln",
      "Vorgaben zur Protokollierung, Aufbewahrung, Datenschutz (DSGVO Art. 5, 25, 32)",
      "Authentifizierungs- und Autorisierungskonzept",
    ],
    typicalOutputs: [
      "Funktionsfähige Integration (getestet, abgenommen)",
      "Vollständige technische Dokumentation",
      "Testprotokolle und Abnahmenachweise",
      "Betriebshandbuch für Support-Teams",
    ],
    procurementCategory: "72000000-5 (IT-Dienste: Software, Beratung und Internet)",
    sectorAlignment: ["Öffentliche Auftraggeber", "Regulierte Unternehmen", "Enterprise"],
    tenderReadiness: [
      "Nachvollziehbare Datenflüsse und Transformationslogik",
      "Security-by-Design (Verschlüsselung, Authentifizierung, Least Privilege)",
      "Dokumentierte Übergabe mit Betriebshandbuch",
    ],
  },

  {
    id: "security-by-design-baseline-hardening",
    title: "Security-by-Design & Baseline Hardening",
    category: "Security",
    role: "Advisory",
    shortDescription:
      "Sicherheitsorientierte Umsetzung mit Baseline-Hardening, Risiko- und Maßnahmenübersicht ohne pauschale Zertifikatsclaims. Fokus auf nachvollziehbare Nachweise und kontextbezogene Empfehlungen.",
    scopeBoundaries: [
      "Keine Penetrationstests ohne separates Mandat, Scope-Definition und rechtliche Freigabe",
      "Keine Sicherheitsgarantien; Ergebnisse sind kontextabhängig und zeitpunktbezogen",
      "Keine Einführung von Tracking/Analytics ohne dokumentiertes Einwilligungskonzept",
      "Keine Zertifizierungsberatung (ISO 27001, BSI IT-Grundschutz) ohne separates Mandat",
    ],
    deliverables: [
      "Baseline-Hardening-Checkliste (systemspezifisch, CIS/BSI-orientiert)",
      "Risiko- und Maßnahmenliste (priorisiert nach Eintrittswahrscheinlichkeit und Impact)",
      "Empfehlungen für Logging und Monitoring (minimal, zweckgebunden, DSGVO-konform)",
      "Dokumentation für Review und Audit (technische Nachweise, Konfigurationsexporte)",
      "Rollenprinzip und Least-Privilege-Konzept",
      "Incident-Response-Grundlagen (Eskalation, Kommunikation, Containment)",
    ],
    typicalInputs: [
      "Sicherheitsanforderungen und Policies (Passwort, MFA, Logging, Verschlüsselung)",
      "Systemübersicht (Assets, Rollen, Kritikalität, Datenklassifikation)",
      "Vorgaben zur Datenklassifikation und Aufbewahrung",
      "Bestehende Sicherheitsarchitektur und Controls",
    ],
    typicalOutputs: [
      "Gehärtete Systeme (dokumentiert, nachvollziehbar)",
      "Risikobewertung und Maßnahmenplan",
      "Audit-fähige Nachweise (Konfigurationen, Logs, Checklisten)",
      "Empfehlungen für kontinuierliche Verbesserung",
    ],
    procurementCategory: "72000000-5 (IT-Dienste: Software, Beratung und Internet)",
    sectorAlignment: ["Öffentliche Auftraggeber", "Regulierte Unternehmen", "Kritische Infrastrukturen"],
    tenderReadiness: [
      "Least-Privilege und Rollenprinzip (DSGVO Art. 25, 32)",
      "Review-fähige Nachweise und Dokumentation",
      "Kontextbezogene Umsetzung ohne pauschale Garantien",
    ],
  },

  {
    id: "eu-tender-procurement-enablement",
    title: "EU Tender & Procurement Enablement",
    category: "Procurement",
    role: "Advisory",
    shortDescription:
      "Unterstützung bei tendertauglicher Dokumentation, Angebotsstruktur und prüffähiger Aufbereitung für öffentliche Beschaffung und EU-Vergabeverfahren.",
    scopeBoundaries: [
      "Keine Garantie auf Zuschlag oder Erfolg; Bewertung liegt bei Vergabestellen",
      "Keine rechtliche Beratung; Vergabe- und Rechtsfragen über spezialisierte Rechtsstelle",
      "Keine inhaltliche Erweiterung ohne abgestimmte Änderungen (Change-Prozess)",
      "Keine Übernahme von Haftung für Ausschreibungsinhalte Dritter",
    ],
    deliverables: [
      "Tender-Readiness-Pack (Unternehmensprofil, Leistungsblatt, Annex-Struktur)",
      "Compliance- und Datenschutz-Bausteine (DSGVO, TOMs, AVV-Logik, Zweckbindung)",
      "Liefer- und Leistungskonzept (Scope, Abgrenzung, Annahmen, Ausschlüsse)",
      "Risikobewertung und Maßnahmenplan (Liefer-, Termin-, Qualitätsrisiken)",
      "Preis- und Leistungsstruktur (Module, Optionen, SLA-Logik nach Bedarf)",
      "Prüffähige Anhänge (RACI, Prozessdarstellung, Übergabekonzept, Referenzen)",
    ],
    typicalInputs: [
      "Ausschreibungsunterlagen (Leistungsbeschreibung, Eignungskriterien, Vertragsentwurf)",
      "Interne Kapazitäten, Rollen und Partner-Setup (falls relevant)",
      "Technische Zielarchitektur und Vorgaben des Auftraggebers",
      "Interne Preislogik (Stundensätze/Pakete) und gewünschte Angebotsform",
    ],
    typicalOutputs: [
      "Vollständiges Angebotspaket (Angebot, Annexe, Nachweise)",
      "Compliance-Nachweise (DSGVO, TOMs, Zertifikate falls vorhanden)",
      "Prüffähige Dokumentation (Prozesse, Rollen, Qualitätssicherung)",
      "Risikobewertung und Maßnahmenplan",
    ],
    procurementCategory: "79000000-4 (Dienstleistungen für Unternehmen: Recht, Marketing, Beratung, Einstellung, Druck und Sicherheit)",
    sectorAlignment: ["Öffentliche Auftraggeber", "EU-Institutionen", "Vergabestellen"],
    tenderReadiness: [
      "Vergabe- und Prüfkontext geeignet (VgV, UVgO, GWB)",
      "Nachweisbare Struktur und Transparenz",
      "Compliance-by-Design (DSGVO, Sicherheit, Qualität)",
    ],
  },

  {
    id: "cloud-modern-workplace-operations",
    title: "Cloud & Modern Workplace Operations",
    category: "Cloud",
    role: "Run",
    shortDescription:
      "Betriebsnahe Unterstützung für Microsoft 365/Azure-orientierte Umgebungen inkl. Identitäten, Endpoints, Governance und Monitoring.",
    scopeBoundaries: [
      "Keine Änderungen ohne Freigabe und dokumentierten Change-Prozess",
      "Keine Übernahme der Provider- oder Lizenzverantwortung ohne separates Mandat",
      "Keine 24/7-Verfügbarkeit ohne separate Vereinbarung und SLA-Definition",
      "Keine Garantie für Microsoft-Roadmap-Änderungen oder Deprecations",
    ],
    deliverables: [
      "Betriebsprozesse für Cloud-Services (Incident/Request/Change nach ITIL-Logik)",
      "Identity- und Access-Setup (MFA, Conditional Access, Rollenmodelle, PIM)",
      "Endpoint-Management-Standards (Policy-Set, Gerätestandards, Compliance-Policies)",
      "Tenant- und Service-Governance (Namenskonventionen, Lifecycle, Berechtigungen)",
      "Monitoring- und Alerting-Grundlagen (Integration in bestehende Systeme)",
      "Übergabeunterlagen (Admin-Handbook, Runbooks, Betriebsgrenzen)",
    ],
    typicalInputs: [
      "Tenant- und Subscription-Übersicht, Rollen und Lizenzen (soweit vorhanden)",
      "Gerätebestand, Nutzergruppen, Sicherheitsanforderungen",
      "Bestehende ITSM- und Betriebsprozesse (falls vorhanden)",
      "Betriebsziele (Stabilität, Security, Kostenkontrolle)",
    ],
    typicalOutputs: [
      "Konfigurierte Cloud-Umgebung (dokumentiert, abgenommen)",
      "Betriebsprozesse und Runbooks",
      "Governance-Richtlinien und Standards",
      "Monitoring-Dashboards und Alerting-Regeln",
    ],
    procurementCategory: "72000000-5 (IT-Dienste: Software, Beratung und Internet)",
    sectorAlignment: ["Öffentliche Auftraggeber", "Regulierte Unternehmen", "Mittelstand"],
    tenderReadiness: [
      "Betriebsnahe Lieferung mit klaren Übergabepunkten",
      "Governance und Rollenprinzip (Least Privilege)",
      "Übergabefähige Dokumentation für interne Teams",
    ],
  },

  {
    id: "data-reporting-foundations",
    title: "Data & Reporting Foundations",
    category: "Data",
    role: "Change",
    shortDescription:
      "Aufbau von Daten- und Reporting-Grundlagen mit klaren Definitionen, Datenqualitätschecks und nachvollziehbarer KPI-Logik.",
    scopeBoundaries: [
      "Keine KPI-Interpretation als Managementberatung ohne separates Mandat",
      "Keine Datenzusammenführung ohne dokumentierte Rechtsgrundlage und Zweck (DSGVO Art. 5, 6)",
      "Keine produktive ETL/Automatisierung ohne Abnahme und Testnachweis",
      "Keine Garantie für Datenqualität bei fehlenden Quellsystem-Validierungen",
    ],
    deliverables: [
      "KPI- und Metriken-Katalog (Definitionen, Berechnungslogik, Datenquellen)",
      "Datenmodell-Grundlagen (Mapping, Verantwortlichkeiten, Datenflüsse)",
      "Datenqualitätschecks (Vollständigkeit, Dubletten, Plausibilität, Konsistenz)",
      "Dashboard- und Report-Prototypen (Scope-limitiert, iterativ, prüfbar)",
      "Dokumentation für Betrieb und Weiterentwicklung (Data Dictionary, Change-Logik)",
      "Datenschutz- und Aufbewahrungskonzept",
    ],
    typicalInputs: [
      "Zielkennzahlen und Stakeholder-Anforderungen",
      "Datenquellen (DB/CSV/APIs) und Zugriffe (rollenbasiert)",
      "Datenschutzrahmen (Zwecke, Aufbewahrung, Berechtigungen)",
      "Bestehende Reporting-Landschaft (falls vorhanden)",
    ],
    typicalOutputs: [
      "Strukturierter KPI-Katalog (versioniert, nachvollziehbar)",
      "Datenmodell und ETL-Prozesse (dokumentiert, getestet)",
      "Funktionsfähige Dashboards und Reports",
      "Datenqualitäts-Monitoring und Alerting",
    ],
    procurementCategory: "72000000-5 (IT-Dienste: Software, Beratung und Internet)",
    sectorAlignment: ["Öffentliche Auftraggeber", "Regulierte Unternehmen", "Enterprise"],
    tenderReadiness: [
      "Nachvollziehbare KPI-Definitionen und Berechnungslogik",
      "Datenqualität und Nachweisbarkeit",
      "Dokumentierte Übergabe mit Data Dictionary",
    ],
  },

  {
    id: "delivery-support-project-recovery",
    title: "Delivery Support & Project Recovery",
    category: "Delivery",
    role: "Change",
    shortDescription:
      "Stabilisierungs- und übergabeorientierte Unterstützung bei Lieferdruck, offenen Punkten und ungeklärten Verantwortlichkeiten.",
    scopeBoundaries: [
      "Keine Haftung für Altentscheidungen oder Altarchitekturen ohne vollständige Transparenz und Mandat",
      "Keine Scope-Erweiterung ohne Change-Prozess und Priorisierung",
      "Keine Produktionsänderungen ohne Freigabe, Testnachweis und Abnahme",
      "Keine Garantie für Projekterfolg bei unklaren Anforderungen oder fehlenden Ressourcen",
    ],
    deliverables: [
      "Ist-Aufnahme und Problem-Backlog (Priorisierung nach Risiko und Impact)",
      "Stabilisierungssprint (Containment, Quick Wins, Fix-Plan)",
      "Saubere Übergabe (RACI, Runbooks, offene Risiken, Next Steps)",
      "QS- und Abnahme-Checklisten (Kriterien, Nachweise, Restpunkte)",
      "Kommunikations- und Eskalationsstruktur (Statusformat, Stakeholder-Map)",
      "Lessons-Learned-Dokumentation",
    ],
    typicalInputs: [
      "Projektstatus und Artefakte (Tickets, Dokumentation, Pläne, Abnahmen)",
      "Zugriffe auf relevante Systeme und Repositories (nach Rollenprinzip)",
      "Stakeholderliste und Ziele (Termine, SLA, Compliance-Vorgaben)",
      "Bestehende Risiken und offene Punkte",
    ],
    typicalOutputs: [
      "Stabilisierter Projektstatus (dokumentiert, nachvollziehbar)",
      "Priorisiertes Backlog mit klaren Verantwortlichkeiten",
      "Übergabefähige Dokumentation und Runbooks",
      "Lessons-Learned und Empfehlungen",
    ],
    procurementCategory: "79000000-4 (Dienstleistungen für Unternehmen: Recht, Marketing, Beratung, Einstellung, Druck und Sicherheit)",
    sectorAlignment: ["Öffentliche Auftraggeber", "Regulierte Unternehmen", "Enterprise"],
    tenderReadiness: [
      "Stabilisierung und Nachweisbarkeit",
      "Betriebsübergabe mit klaren Verantwortlichkeiten",
      "Risikoorientiertes Vorgehen",
    ],
  },
]

// ============================================================================
// CAPABILITIES TAXONOMY
// ============================================================================

export interface Capability {
  id: string
  name: string
  category: string
  description: string
}

export const CAPABILITIES: Capability[] = [
  {
    id: "itsm-processes",
    name: "ITSM-Prozesse",
    category: "Operations",
    description: "Incident, Request, Change, Problem Management nach ITIL-Logik",
  },
  {
    id: "api-integration",
    name: "API-Integration",
    category: "Integration",
    description: "REST, SOAP, GraphQL, Webhooks, Event-driven Architecture",
  },
  {
    id: "baseline-hardening",
    name: "Baseline Hardening",
    category: "Security",
    description: "CIS Benchmarks, BSI IT-Grundschutz, Least Privilege, MFA",
  },
  {
    id: "tender-documentation",
    name: "Tender-Dokumentation",
    category: "Procurement",
    description: "Angebotsstruktur, Compliance-Bausteine, Prüffähige Annexe",
  },
  {
    id: "m365-azure-ops",
    name: "M365/Azure Operations",
    category: "Cloud",
    description: "Tenant-Governance, Identity, Endpoint, Monitoring",
  },
  {
    id: "data-quality",
    name: "Datenqualität",
    category: "Data",
    description: "Validierung, Plausibilität, Dubletten, Vollständigkeit",
  },
  {
    id: "project-stabilization",
    name: "Projekt-Stabilisierung",
    category: "Delivery",
    description: "Ist-Aufnahme, Backlog, Quick Wins, Übergabe",
  },
]

// ============================================================================
// PROCUREMENT PROFILE
// ============================================================================

export interface ProcurementProfile {
  leistungsgegenstand: string
  lieferobjekte: string[]
  dokumentationsumfang: string[]
  abgrenzung: string[]
  einsatzbereiche: string[]
  complianceArbeitsweise: string[]
}

export const PROCUREMENT_PROFILE: ProcurementProfile = {
  leistungsgegenstand:
    "IT-Dienstleistungen im Bereich Operations, Integration, Security, Cloud, Data und Delivery mit Fokus auf strukturierte Umsetzung, nachvollziehbare Dokumentation und compliance-orientierte Arbeitsweise für öffentliche Auftraggeber und regulierte Unternehmen.",
  lieferobjekte: [
    "Betriebs- und Service-Dokumentation (Runbooks, SOPs, Admin-Handbücher)",
    "Integrations- und Schnittstellenbeschreibungen (APIs, ETL, Datenflüsse)",
    "Sicherheitskonzepte und Baseline-Hardening-Checklisten",
    "Tender-Readiness-Packs und Angebotsstrukturen",
    "Cloud-Governance-Richtlinien und Betriebsprozesse",
    "KPI-Kataloge, Datenmodelle und Dashboard-Prototypen",
    "Stabilisierungspläne, Backlogs und Übergabeunterlagen",
  ],
  dokumentationsumfang: [
    "Technische Dokumentation (Architektur, Konfiguration, Schnittstellen)",
    "Prozessdokumentation (ITSM, Change, Incident, Request)",
    "Compliance-Dokumentation (DSGVO, TOMs, Risikobewertung)",
    "Betriebsdokumentation (Runbooks, Monitoring, Alerting)",
    "Übergabedokumentation (RACI, Checklisten, Lessons Learned)",
  ],
  abgrenzung: [
    "Keine 24/7-Betriebsverantwortung ohne explizite Vereinbarung",
    "Keine Penetrationstests ohne separates Mandat",
    "Keine rechtliche Beratung (Vergabe, Datenschutz, Arbeitsrecht)",
    "Keine Zertifizierungsberatung (ISO, BSI) ohne separates Mandat",
    "Keine Garantien für Projekterfolg oder Zuschlag",
  ],
  einsatzbereiche: [
    "Öffentliche Auftraggeber (Bund, Länder, Kommunen)",
    "EU-Institutionen und EU-tendernahe Vorhaben",
    "Regulierte Unternehmen (Finanz, Gesundheit, Energie)",
    "Mittelstand mit Compliance-Anforderungen",
  ],
  complianceArbeitsweise: [
    "Datensparsamkeit und Zweckbindung (DSGVO Art. 5)",
    "Security-by-Design und Privacy-by-Design (DSGVO Art. 25)",
    "Rollenprinzip und Least Privilege (DSGVO Art. 32)",
    "Nachvollziehbare Dokumentation für Audit und Review",
    "Keine Tracking-Technologien ohne Einwilligung",
    "Keine unbestätigten Referenzen oder Kennzahlen",
  ],
}

// ============================================================================
// BAFA CONSULTING NEEDS
// ============================================================================

export interface BAFAConsultingNeed {
  phase: string
  description: string
  topics: string[]
}

export const BAFA_CONSULTING_NEEDS: BAFAConsultingNeed[] = [
  {
    phase: "Markteintritt & Positionierung",
    description:
      "Klärung der Zielgruppen (öffentliche Auftraggeber, regulierte Unternehmen), Leistungsabgrenzung und Positionierung im Wettbewerbsumfeld.",
    topics: [
      "Zielgruppenanalyse (öffentliche Auftraggeber, EU-Institutionen, regulierte Unternehmen)",
      "Wettbewerbsanalyse und Differenzierung",
      "Positionierung ohne Marketing-Hype",
      "Markteintrittsstrategie für öffentliche Beschaffung",
    ],
  },
  {
    phase: "Produktisierung & Servicekatalog",
    description:
      "Strukturierung der Leistungen in klar abgegrenzte, dokumentierte und prüffähige Servicebausteine mit Deliverables, Inputs und Outputs.",
    topics: [
      "Leistungskatalog-Entwicklung (Scope, Abgrenzung, Deliverables)",
      "Preismodelle und Kalkulation (Stundensätze, Pakete, SLA-Logik)",
      "Dokumentationsstandards (technisch, organisatorisch, rechtlich)",
      "Qualitätssicherung und Abnahmeprozesse",
    ],
  },
  {
    phase: "Vertriebs- & Angebotsprozesse",
    description:
      "Aufbau von Vertriebsprozessen für öffentliche Beschaffung und EU-Tender mit prüffähiger Angebotsstruktur und Compliance-Bausteinen.",
    topics: [
      "Vertriebsprozesse für öffentliche Beschaffung (VgV, UVgO, GWB)",
      "Angebotsstruktur und Tender-Readiness",
      "Compliance-Bausteine (DSGVO, TOMs, Sicherheit)",
      "Preis- und Leistungsverzeichnisse",
    ],
  },
  {
    phase: "Ausschreibungsfähigkeit (öffentliche Beschaffung)",
    description:
      "Vorbereitung auf EU-Tender und öffentliche Ausschreibungen mit prüffähiger Dokumentation, Nachweisen und Compliance-Strukturen.",
    topics: [
      "Tender-Readiness-Assessment",
      "Eignungsnachweise (Referenzen, Zertifikate, Bilanzen)",
      "Compliance-Nachweise (DSGVO, Sicherheit, Qualität)",
      "Angebotsstruktur und Annexe",
    ],
  },
  {
    phase: "Qualitätssicherung & Compliance",
    description:
      "Aufbau von Qualitätssicherungs- und Compliance-Strukturen ohne pauschale Zertifizierungsansprüche, aber mit nachvollziehbaren Nachweisen.",
    topics: [
      "Qualitätssicherungsprozesse (Review, Test, Abnahme)",
      "Compliance-Management (DSGVO, Sicherheit, Arbeitsrecht)",
      "Risikomanagement und Maßnahmenpläne",
      "Audit- und Review-Vorbereitung",
    ],
  },
  {
    phase: "Organisationsentwicklung & Skalierung",
    description:
      "Aufbau von Strukturen für Wachstum und Skalierung mit klaren Rollen, Prozessen und Verantwortlichkeiten.",
    topics: [
      "Organisationsstruktur und Rollen (RACI, Verantwortlichkeiten)",
      "Prozessoptimierung (ITSM, Change, Incident)",
      "Kapazitätsplanung und Ressourcenmanagement",
      "Partner- und Subunternehmer-Management",
    ],
  },
]

// ============================================================================
// COMPLIANCE FRAMEWORK
// ============================================================================

export interface ComplianceSection {
  id: string
  title: string
  description: string
  measures: string[]
}

export const COMPLIANCE_FRAMEWORK: ComplianceSection[] = [
  {
    id: "corporate-governance",
    title: "Corporate Governance",
    description:
      "Organisatorische Strukturen, Rollen und Verantwortlichkeiten für nachvollziehbare Entscheidungen und Transparenz.",
    measures: [
      "Klare Rollen und Verantwortlichkeiten (RACI-Logik)",
      "Dokumentierte Entscheidungsprozesse",
      "Transparente Kommunikationsstrukturen",
      "Eskalations- und Konfliktlösungsmechanismen",
    ],
  },
  {
    id: "datenschutz-dsgvo",
    title: "Datenschutz & DSGVO",
    description:
      "Umsetzung der DSGVO-Grundsätze (Art. 5) mit Datensparsamkeit, Zweckbindung und technisch-organisatorischen Maßnahmen (TOMs).",
    measures: [
      "Datensparsamkeit und Zweckbindung (Art. 5 Abs. 1 lit. b, c DSGVO)",
      "Technisch-organisatorische Maßnahmen (Art. 32 DSGVO)",
      "Auftragsverarbeitung (Art. 28 DSGVO) bei Bedarf",
      "Betroffenenrechte (Art. 12-22 DSGVO): Auskunft, Löschung, Berichtigung",
      "Keine Tracking-Technologien ohne Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
    ],
  },
  {
    id: "informationssicherheit",
    title: "Informationssicherheit",
    description:
      "Baseline-Sicherheitsmaßnahmen ohne Zertifizierungsanspruch, aber mit nachvollziehbaren Nachweisen und kontextbezogener Umsetzung.",
    measures: [
      "Rollenprinzip und Least Privilege (DSGVO Art. 32)",
      "Baseline Hardening (CIS Benchmarks, BSI IT-Grundschutz-orientiert)",
      "Logging und Monitoring (minimal, zweckgebunden)",
      "Incident Response (Eskalation, Kommunikation, Containment)",
      "Regelmäßige Reviews und Updates",
    ],
  },
  {
    id: "qualitaetsmanagement",
    title: "Qualitätsmanagement",
    description:
      "Qualitätssicherungsprozesse ohne ISO-Zertifizierung, aber mit nachvollziehbaren Abnahmekriterien und Testprozessen.",
    measures: [
      "Abnahmekriterien und Testprozesse (funktional, sicherheitsrelevant)",
      "Review- und Freigabeprozesse (4-Augen-Prinzip)",
      "Dokumentationsstandards (technisch, organisatorisch)",
      "Lessons-Learned und kontinuierliche Verbesserung",
    ],
  },
  {
    id: "rollen-zustaendigkeiten",
    title: "Rollen & Zuständigkeiten",
    description:
      "Klare Verantwortlichkeiten für Lieferung, Betrieb, Sicherheit und Compliance mit RACI-Logik.",
    measures: [
      "RACI-Matrix für Projekte und Betrieb",
      "Eskalations- und Kommunikationsstrukturen",
      "Vertretungsregelungen und Backup-Rollen",
      "Dokumentierte Übergabepunkte",
    ],
  },
  {
    id: "keine-unbestaetigten-leistungsversprechen",
    title: "Keine unbestätigten Leistungsversprechen",
    description:
      "Transparenz über Grenzen und Annahmen; keine Marketing-Behauptungen, keine erfundenen Kennzahlen, keine Zertifikats-Badges ohne Nachweis.",
    measures: [
      "Keine unbestätigten Referenzen oder Kundennamen",
      "Keine erfundenen KPIs oder Performance-Claims",
      "Keine Zertifikats-Badges ohne Nachweis",
      "Transparente Kommunikation über Grenzen und Annahmen",
    ],
  },
  {
    id: "standards-orientierung",
    title: "Standards-Orientierung",
    description:
      "Orientierung an etablierten Standards (ITIL, CIS, BSI) ohne Zertifizierungsanspruch, aber mit nachvollziehbarer Umsetzung.",
    measures: [
      "ITIL-nahe Vorgehensweisen (Incident, Request, Change)",
      "CIS Benchmarks und BSI IT-Grundschutz-Orientierung",
      "DSGVO-konforme Umsetzung (Art. 5, 25, 32)",
      "Keine Zertifizierungsansprüche ohne Nachweis",
    ],
  },
  {
    id: "procurement-validation",
    title: "Procurement Validation",
    description:
      "Automatisierte Validierung der Website-Inhalte auf Marketing-Hype, unbestätigte Claims und Compliance-Verstöße.",
    measures: [
      "Automatisierte Validierung bei jedem Pull Request",
      "Prüfung auf Marketing-Hype und unbestätigte Claims",
      "Prüfung auf DSGVO-Referenzen und Datenschutz",
      "Prüfung auf Tracking-Technologien ohne Einwilligung",
    ],
  },
]
