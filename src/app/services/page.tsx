import Link from "next/link"
import ServiceCard from "@/components/ServiceCard"

export const metadata = {
  title: "Leistungen | SmartConnect CRM UG (haftungsbeschränkt)",
  description:
    "Strukturierter Leistungskatalog für Beschaffung, Vergabe und EU-tendernahe Vorhaben. Fokussiert auf klare Abgrenzung, Dokumentation und Compliance-by-Design.",
}

type Service = {
  title: string
  shortScope: string
  deliverables: string[]
  typicalInputs: string[]
  boundaries: string[]
  tenderAlignment: string[]
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "IT Service & Operations Support",
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
        "Sicherheits- und Compliance-Vorgaben des Auftraggebers",
      ],
      boundaries: [
        "Kein 24/7-Betrieb ohne explizite Vereinbarung",
        "Keine Änderungen an Produktivsystemen ohne Change-Freigabe",
        "Keine Übernahme von Lizenz-/Provider-Verträgen ohne Mandat",
      ],
      tenderAlignment: ["ITIL-nahe Vorgehensweisen", "Auditierbare Dokumentation", "Betriebsnahe Umsetzung"],
    },

    {
      title: "Systemintegration & Schnittstellen",
      shortScope:
        "Integration bestehender Systeme über APIs/ETL mit nachvollziehbaren Datenflüssen und kontrollierten Changes.",
      deliverables: [
        "Schnittstellenbeschreibung (Datenfelder, Auth, Fehlerbehandlung)",
        "Integrations- und Ablaufdiagramme (technisch, nachvollziehbar)",
        "Testfälle/Abnahmekriterien (funktional, ggf. sicherheitsrelevant)",
        "Betriebs-/Monitoring-Hinweise für die Integration",
      ],
      typicalInputs: [
        "API-Dokumentation / Zugang zu Sandbox/Testumgebung",
        "Datenmodelle (Quelle/Ziel) und Validierungsregeln",
        "Vorgaben zur Protokollierung, Aufbewahrung, Datenschutz",
      ],
      boundaries: [
        "Keine Verarbeitung besonderer Kategorien personenbezogener Daten ohne separate Bewertung",
        "Keine Produktivschaltung ohne Abnahme und Change-Prozess",
        "Keine dauerhafte Datenhaltung außerhalb vereinbarter Systeme",
      ],
      tenderAlignment: ["Nachvollziehbare Datenflüsse", "Security-by-Design", "Dokumentierte Übergabe"],
    },

    {
      title: "Security-by-Design & Baseline Hardening",
      shortScope:
        "Sicherheitsorientierte Umsetzung (Baseline), Risiko- und Maßnahmenübersicht ohne pauschale Zertifikatsclaims.",
      deliverables: [
        "Baseline-Hardening-Checkliste (systemspezifisch)",
        "Risiko-/Maßnahmenliste (priorisiert, nachvollziehbar)",
        "Empfehlungen für Logging/Monitoring (minimal, zweckgebunden)",
        "Dokumentation für Review/Audit (technische Nachweise)",
      ],
      typicalInputs: [
        "Sicherheitsanforderungen/Policies (z. B. Passwort, MFA, Logging)",
        "Systemübersicht (Assets, Rollen, Kritikalität)",
        "Vorgaben zur Datenklassifikation und Aufbewahrung",
      ],
      boundaries: [
        "Keine Penetrationstests ohne separates Mandat/Scope",
        "Keine Sicherheitsgarantien; Ergebnisse sind kontextabhängig",
        "Keine Einführung von Tracking/Analytics ohne Einwilligungskonzept",
      ],
      tenderAlignment: ["Least-Privilege & Rollenprinzip", "Review-fähige Nachweise", "Kontextbezogene Umsetzung"],
    },

    {
      title: "Datenschutz-/DSGVO-nahe Umsetzung (technisch)",
      shortScope:
        "Technische Umsetzung zur Unterstützung von DSGVO-Anforderungen (Datenminimierung, Rechte, Löschkonzepte).",
      deliverables: [
        "Datenflussübersicht (wo entstehen/wandern Daten)",
        "Technische Lösch-/Aufbewahrungslogik (Konzept + Umsetzungshinweise)",
        "Zugriffs-/Berechtigungsmodell (Rollen, Minimierung)",
        "Dokumentation für Datenschutzprüfung (technisch orientiert)",
      ],
      typicalInputs: [
        "Verzeichnis von Verarbeitungstätigkeiten (falls vorhanden)",
        "Datenkategorien, Zwecke, Aufbewahrungsvorgaben",
        "Systemzugang für technische Prüfung (rollenbasiert)",
      ],
      boundaries: [
        "Keine Rechtsberatung; juristische Bewertung erfolgt durch Datenschutzbeauftragte/Rechtsstelle",
        "Keine Verarbeitung ohne dokumentierten Zweck und Rechtsgrundlage",
        "Keine Übermittlung in Drittländer ohne Freigabe/Prüfung",
      ],
      tenderAlignment: ["Datensparsamkeit", "Transparenz/Nachweisbarkeit", "Rollen- und Berechtigungskonzepte"],
    },

    {
      title: "Dokumentation & Übergabe (Audit-/Review-fähig)",
      shortScope:
        "Strukturierte technische und organisatorische Dokumentation zur Übergabe in Betrieb und für Beschaffungsprüfungen.",
      deliverables: [
        "Systemdokumentation (Architektur, Komponenten, Abhängigkeiten)",
        "Betriebsdokumentation (Runbooks, Notfall-/Rollback-Hinweise)",
        "Abnahme-Checkliste und Übergabeprotokoll",
        "Änderungs-/Versionsübersicht (nach Bedarf)",
      ],
      typicalInputs: [
        "Bestehende Dokumente, Tickets, Repo/Config-Stand",
        "Stakeholder/Ansprechpartner für Abnahme",
        "Vorgaben zu Formaten/Tools (Confluence, SharePoint, PDF etc.)",
      ],
      boundaries: [
        "Keine Veröffentlichung interner Inhalte ohne Freigabe",
        "Keine Ersetzung interner Governance-Prozesse",
        "Keine Garantie für Vollständigkeit ohne Zugriff auf relevante Quellen",
      ],
      tenderAlignment: ["Nachvollziehbare Deliverables", "Betriebsübergabe", "Review- und Auditkontexte"],
    },

    {
      title: "Projekt-/Umsetzungsunterstützung (strukturierte Lieferung)",
      shortScope:
        "Unterstützung bei Planung und Umsetzung mit klarer Abgrenzung, Change-Kontrolle und dokumentierter Lieferung.",
      deliverables: [
        "Umsetzungsplan (Scope, Phasen, Abhängigkeiten)",
        "Abnahmekriterien & Liefergegenstände je Phase",
        "Change-Log (Änderungen, Gründe, Freigaben)",
        "Status-/Risikoübersicht (faktisch, ohne Marketing)",
      ],
      typicalInputs: [
        "Ziele/Scope, Prioritäten, Rahmenbedingungen",
        "Entscheidungswege (Owner, Freigaben, Gremien)",
        "Zugänge zu Projektwerkzeugen (Jira, Planner etc.)",
      ],
      boundaries: [
        "Keine Festpreis-/Terminzusagen ohne abgestimmten Scope",
        "Keine eigenmächtige Scope-Erweiterung (Change required)",
        "Keine Abkürzungen bei Dokumentation bei Audit-Relevanz",
      ],
      tenderAlignment: ["Scope-Kontrolle", "Nachweisbare Lieferung", "Vergabe-/Prüfkontext geeignet"],
    },

    {
      title: "EU Tender & Procurement Enablement",
      shortScope:
        "Unterstützung bei tendertauglicher Dokumentation, Angebotsstruktur und prüffähiger Aufbereitung für Beschaffung & Vergabe.",
      deliverables: [
        "Tender-Readiness-Pack (Profil, Leistungsblatt, Annex-Struktur)",
        "Compliance-/Datenschutz-Bausteine (DSGVO, TOMs, AVV-Logik, Zweckbindung)",
        "Liefer- & Leistungskonzept (Scope, Abgrenzung, Annahmen, Ausschlüsse)",
        "Risikobewertung & Maßnahmenplan (Liefer-, Termin-, Qualitätsrisiken)",
        "Preis-/Leistungsstruktur (Module, Optionen, SLA-Logik nach Bedarf)",
        "Prüffähige Anhänge (RACI, Prozessdarstellung, Übergabekonzept)",
      ],
      typicalInputs: [
        "Ausschreibungsunterlagen (Leistungsbeschreibung, Eignung, Vertragsentwurf)",
        "Interne Kapazitäten/Rollen & Partner-Setup (falls relevant)",
        "Technische Zielarchitektur / Vorgaben des Auftraggebers",
        "Interne Preislogik (Stundensätze/Pakete) und gewünschte Angebotsform",
      ],
      boundaries: [
        "Keine Garantie auf Zuschlag/Erfolg; Bewertung liegt bei Vergabestellen",
        "Keine rechtliche Beratung; Vergabe-/Rechtsfragen über Rechtsstelle",
        "Keine inhaltliche Erweiterung ohne abgestimmte Änderungen (Change)",
      ],
      tenderAlignment: ["Vergabe-/Prüfkontext geeignet", "Nachweisbare Struktur", "Compliance-by-Design"],
    },

    {
      title: "Cloud & Modern Workplace Operations",
      shortScope:
        "Betriebsnahe Unterstützung für Microsoft 365/Azure-orientierte Umgebungen inkl. Identitäten, Endpoints und Governance.",
      deliverables: [
        "Betriebsprozesse für Cloud-Services (Incident/Request/Change)",
        "Identity- & Access-Setup (MFA, Conditional Access, Rollenmodelle)",
        "Endpoint-Management-Standards (z. B. Policy-Set, Gerätestandards)",
        "Tenant-/Service-Governance (Namenskonventionen, Lifecycle, Berechtigungen)",
        "Monitoring-/Alerting-Grundlagen (Integration in bestehende Systeme, falls vorhanden)",
        "Übergabeunterlagen (Admin-Handbook, Runbooks, Betriebsgrenzen)",
      ],
      typicalInputs: [
        "Tenant-/Subscription-Übersicht, Rollen & Lizenzen (soweit vorhanden)",
        "Gerätebestand/Nutzergruppen, Sicherheitsanforderungen",
        "Bestehende ITSM-/Betriebsprozesse (falls vorhanden)",
        "Betriebsziele (Stabilität, Security, Kostenkontrolle)",
      ],
      boundaries: [
        "Keine Änderungen ohne Freigabe/Change-Prozess",
        "Keine Übernahme der Provider-/Lizenzverantwortung ohne Mandat",
        "Keine 24/7-Verfügbarkeit ohne separate Vereinbarung",
      ],
      tenderAlignment: ["Betriebsnahe Lieferung", "Governance & Rollenprinzip", "Übergabefähige Dokumentation"],
    },

    {
      title: "Data & Reporting Foundations",
      shortScope:
        "Aufbau von Daten- und Reporting-Grundlagen mit klaren Definitionen, Datenqualität und nachvollziehbarer KPI-Logik.",
      deliverables: [
        "KPI-/Metriken-Katalog (Definitionen, Berechnungslogik, Datenquellen)",
        "Datenmodell-Grundlagen (Mapping, Verantwortlichkeiten, Datenflüsse)",
        "Datenqualitätschecks (Vollständigkeit, Dubletten, Plausibilität)",
        "Dashboard-/Report-Prototypen (Scope-limitiert, iterativ, prüfbar)",
        "Dokumentation für Betrieb/Weiterentwicklung (Data Dictionary, Change-Logik)",
      ],
      typicalInputs: [
        "Zielkennzahlen & Stakeholder-Anforderungen",
        "Datenquellen (DB/CSV/APIs) und Zugriffe (rollenbasiert)",
        "Datenschutzrahmen (Zwecke, Aufbewahrung, Berechtigungen)",
      ],
      boundaries: [
        "Keine KPI-Interpretation als Managementberatung ohne Mandat",
        "Keine Datenzusammenführung ohne dokumentierte Rechtsgrundlage/Zweck",
        "Keine produktive ETL/Automatisierung ohne Abnahme",
      ],
      tenderAlignment: ["Nachvollziehbare KPI-Definitionen", "Datenqualität & Nachweisbarkeit", "Dokumentierte Übergabe"],
    },

    {
      title: "Delivery Support & Project Recovery",
      shortScope:
        "Stabilisierungs- und Übergabeorientierte Unterstützung bei Lieferdruck, offenen Punkten und ungeklärten Verantwortlichkeiten.",
      deliverables: [
        "Ist-Aufnahme & Problem-Backlog (Priorisierung nach Risiko/Impact)",
        "Stabilisierungssprint (Containment, Quick Wins, Fix-Plan)",
        "Saubere Übergabe (RACI, Runbooks, offene Risiken, Next Steps)",
        "QS-/Abnahme-Checklisten (Kriterien, Nachweise, Restpunkte)",
        "Kommunikations- & Eskalationsstruktur (Statusformat, Stakeholder-Map)",
      ],
      typicalInputs: [
        "Projektstatus/Artefakte (Tickets, Dokus, Pläne, Abnahmen)",
        "Zugriffe auf relevante Systeme/Repos (nach Rollenprinzip)",
        "Stakeholderliste & Ziele (Termine, SLA, Compliance-Vorgaben)",
      ],
      boundaries: [
        "Keine Haftung für Altentscheidungen/Altarchitekturen ohne Transparenz und Mandat",
        "Keine Scope-Erweiterung ohne Change und Priorisierung",
        "Keine Produktionsänderungen ohne Freigabe/Abnahme",
      ],
      tenderAlignment: ["Stabilisierung & Nachweisbarkeit", "Betriebsübergabe", "Risikoorientiertes Vorgehen"],
    },
  ]

  return (
    <div className="doc-prose">
      <h1>Leistungen</h1>

      <p className="lead">
        Strukturierter Leistungskatalog für Beschaffung, Vergabe und EU-tendernahe Vorhaben. Die folgenden Bausteine sind
        bewusst klar abgegrenzt und auf dokumentierte, nachvollziehbare Lieferung ausgelegt.
      </p>

      {/* Principles */}
      <section className="policy-note mt-6">
        <div className="section-title">Rahmen &amp; Grundsätze</div>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Leistungsabgrenzung und Änderungen über abgestimmte Change-Prozesse</li>
          <li>Dokumentation als Bestandteil der Lieferung (Audit-/Review-fähig)</li>
          <li>Datensparsamkeit und Rollenprinzip (Least Privilege) als Standardannahme</li>
          <li>Keine unbestätigten Referenzen, Kennzahlen oder Zertifikatsclaims auf der Website</li>
        </ul>
      </section>

      {/* Service cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            title={s.title}
            shortScope={s.shortScope}
            deliverables={s.deliverables}
            typicalInputs={s.typicalInputs}
            boundaries={s.boundaries}
            tenderAlignment={s.tenderAlignment}
          />
        ))}
      </div>

      {/* CTA */}
      <section className="policy-note mt-10">
        <div className="section-title">Anfrage / Abstimmung</div>
        <p className="small-muted mt-2">
          Für eine sachgerechte Einordnung sind ein kurzer Kontext (Ziel, Systemumfeld, Restriktionen) und ggf. eine
          gewünschte Lieferform (Dokument, Umsetzung, Übergabe) hilfreich.
        </p>
        <div className="mt-4">
          <Link href="/contact" className="btn-primary">
            Zur Geschäftsanfrage (Kontakt)
          </Link>
        </div>
      </section>
    </div>
  )
}
