/**
 * Service Catalog for SmartConnect CRM UG
 * Procurement-grade service definitions with multilingual support
 */

import { type Locale } from './i18n';

export interface Service {
  id: string;
  category: 'run' | 'change' | 'advisory';
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  inputs: Record<Locale, string[]>;
  outputs: Record<Locale, string[]>;
  scopeExclusions: Record<Locale, string[]>;
  procurementAlignment: Record<Locale, string>;
}

export const services: Service[] = [
  // RUN (Operations)
  {
    id: 'it-service-operations',
    category: 'run',
    title: {
      de: 'IT Service & Operations Support',
      en: 'IT Service & Operations Support',
      fr: 'Support IT Service & Opérations',
    },
    description: {
      de: 'Strukturierte Unterstützung bei IT-Service-Management-Prozessen (Incident, Request, Change) und operativer Systembetreuung.',
      en: 'Structured support for IT service management processes (Incident, Request, Change) and operational system administration.',
      fr: 'Support structuré pour les processus de gestion des services IT (Incident, Demande, Changement) et administration système opérationnelle.',
    },
    deliverables: {
      de: [
        'Incident- und Request-Bearbeitung nach ITIL-Prinzipien',
        'Change-Koordination und Dokumentation',
        'Eskalationsmanagement und Statusreporting',
        'Prozessdokumentation und Runbooks',
      ],
      en: [
        'Incident and request handling according to ITIL principles',
        'Change coordination and documentation',
        'Escalation management and status reporting',
        'Process documentation and runbooks',
      ],
      fr: [
        'Traitement des incidents et demandes selon principes ITIL',
        'Coordination et documentation des changements',
        'Gestion des escalades et reporting de statut',
        'Documentation des processus et runbooks',
      ],
    },
    inputs: {
      de: [
        'Bestehende ITSM-Prozesse und Tools',
        'Service-Katalog und SLAs',
        'Zugriff auf relevante Systeme',
      ],
      en: [
        'Existing ITSM processes and tools',
        'Service catalog and SLAs',
        'Access to relevant systems',
      ],
      fr: [
        'Processus et outils ITSM existants',
        'Catalogue de services et SLAs',
        'Accès aux systèmes pertinents',
      ],
    },
    outputs: {
      de: [
        'Bearbeitete Tickets mit Lösungsdokumentation',
        'Change-Protokolle und Nachweise',
        'Statusberichte und Metriken',
      ],
      en: [
        'Processed tickets with solution documentation',
        'Change logs and evidence',
        'Status reports and metrics',
      ],
      fr: [
        'Tickets traités avec documentation de solution',
        'Journaux de changements et preuves',
        'Rapports de statut et métriques',
      ],
    },
    scopeExclusions: {
      de: [
        'Keine Entwicklung neuer Anwendungen',
        'Keine Infrastruktur-Planung',
        'Keine Architektur-Beratung',
      ],
      en: [
        'No development of new applications',
        'No infrastructure planning',
        'No architecture consulting',
      ],
      fr: [
        'Pas de développement de nouvelles applications',
        'Pas de planification d\'infrastructure',
        'Pas de conseil en architecture',
      ],
    },
    procurementAlignment: {
      de: 'Geeignet für Rahmenverträge im Bereich IT-Betrieb und Service Management (CPV 72000000, 72250000)',
      en: 'Suitable for framework agreements in IT operations and service management (CPV 72000000, 72250000)',
      fr: 'Adapté aux accords-cadres en opérations IT et gestion de services (CPV 72000000, 72250000)',
    },
  },
  {
    id: 'cloud-modern-workplace',
    category: 'run',
    title: {
      de: 'Cloud & Modern Workplace Operations',
      en: 'Cloud & Modern Workplace Operations',
      fr: 'Opérations Cloud & Modern Workplace',
    },
    description: {
      de: 'Operative Betreuung von Microsoft 365, Azure und Modern Workplace-Umgebungen mit Fokus auf Stabilität und Compliance.',
      en: 'Operational support for Microsoft 365, Azure, and Modern Workplace environments with focus on stability and compliance.',
      fr: 'Support opérationnel pour environnements Microsoft 365, Azure et Modern Workplace avec focus sur stabilité et conformité.',
    },
    deliverables: {
      de: [
        'M365-Tenant-Administration (User, Lizenzen, Policies)',
        'Azure-Ressourcen-Management (VMs, Storage, Networking)',
        'Monitoring und Incident Response',
        'Compliance-Checks und Reporting',
      ],
      en: [
        'M365 tenant administration (users, licenses, policies)',
        'Azure resource management (VMs, storage, networking)',
        'Monitoring and incident response',
        'Compliance checks and reporting',
      ],
      fr: [
        'Administration tenant M365 (utilisateurs, licences, politiques)',
        'Gestion ressources Azure (VMs, stockage, réseau)',
        'Surveillance et réponse aux incidents',
        'Vérifications conformité et reporting',
      ],
    },
    inputs: {
      de: [
        'Bestehende M365/Azure-Umgebung',
        'Admin-Zugriff und Berechtigungen',
        'Compliance-Anforderungen',
      ],
      en: [
        'Existing M365/Azure environment',
        'Admin access and permissions',
        'Compliance requirements',
      ],
      fr: [
        'Environnement M365/Azure existant',
        'Accès admin et permissions',
        'Exigences de conformité',
      ],
    },
    outputs: {
      de: [
        'Konfigurationsdokumentation',
        'Monitoring-Dashboards',
        'Compliance-Reports',
      ],
      en: [
        'Configuration documentation',
        'Monitoring dashboards',
        'Compliance reports',
      ],
      fr: [
        'Documentation de configuration',
        'Tableaux de bord de surveillance',
        'Rapports de conformité',
      ],
    },
    scopeExclusions: {
      de: [
        'Keine Migrations-Planung',
        'Keine Lizenz-Beratung',
        'Keine Custom-Development',
      ],
      en: [
        'No migration planning',
        'No license consulting',
        'No custom development',
      ],
      fr: [
        'Pas de planification de migration',
        'Pas de conseil en licences',
        'Pas de développement personnalisé',
      ],
    },
    procurementAlignment: {
      de: 'Geeignet für Cloud-Operations und Managed Services (CPV 72260000, 72263000)',
      en: 'Suitable for cloud operations and managed services (CPV 72260000, 72263000)',
      fr: 'Adapté aux opérations cloud et services managés (CPV 72260000, 72263000)',
    },
  },

  // CHANGE (Integration)
  {
    id: 'system-integration',
    category: 'change',
    title: {
      de: 'Systemintegration & Schnittstellen',
      en: 'System Integration & Interfaces',
      fr: 'Intégration Système & Interfaces',
    },
    description: {
      de: 'Konzeption und Umsetzung von API-basierten Integrationen zwischen Geschäftsanwendungen mit Fokus auf Stabilität und Nachvollziehbarkeit.',
      en: 'Design and implementation of API-based integrations between business applications with focus on stability and traceability.',
      fr: 'Conception et mise en œuvre d\'intégrations basées API entre applications métier avec focus sur stabilité et traçabilité.',
    },
    deliverables: {
      de: [
        'Integrations-Konzept mit Datenfluss-Diagrammen',
        'API-Implementierung (REST, SOAP, Webhooks)',
        'Fehlerbehandlung und Logging',
        'Integrations-Dokumentation',
      ],
      en: [
        'Integration concept with data flow diagrams',
        'API implementation (REST, SOAP, webhooks)',
        'Error handling and logging',
        'Integration documentation',
      ],
      fr: [
        'Concept d\'intégration avec diagrammes de flux de données',
        'Implémentation API (REST, SOAP, webhooks)',
        'Gestion d\'erreurs et journalisation',
        'Documentation d\'intégration',
      ],
    },
    inputs: {
      de: [
        'API-Dokumentation der Zielsysteme',
        'Datenmodelle und Mapping-Anforderungen',
        'Zugriff auf Test-Umgebungen',
      ],
      en: [
        'API documentation of target systems',
        'Data models and mapping requirements',
        'Access to test environments',
      ],
      fr: [
        'Documentation API des systèmes cibles',
        'Modèles de données et exigences de mapping',
        'Accès aux environnements de test',
      ],
    },
    outputs: {
      de: [
        'Funktionierende Integration mit Tests',
        'Technische Dokumentation',
        'Monitoring-Setup',
      ],
      en: [
        'Functional integration with tests',
        'Technical documentation',
        'Monitoring setup',
      ],
      fr: [
        'Intégration fonctionnelle avec tests',
        'Documentation technique',
        'Configuration de surveillance',
      ],
    },
    scopeExclusions: {
      de: [
        'Keine Anpassung der Quell-/Zielsysteme',
        'Keine Datenmigrationen',
        'Keine Business-Process-Reengineering',
      ],
      en: [
        'No modification of source/target systems',
        'No data migrations',
        'No business process reengineering',
      ],
      fr: [
        'Pas de modification des systèmes source/cible',
        'Pas de migrations de données',
        'Pas de réingénierie des processus métier',
      ],
    },
    procurementAlignment: {
      de: 'Geeignet für Integrationsprojekte und Middleware-Services (CPV 72260000, 72263000)',
      en: 'Suitable for integration projects and middleware services (CPV 72260000, 72263000)',
      fr: 'Adapté aux projets d\'intégration et services middleware (CPV 72260000, 72263000)',
    },
  },
  {
    id: 'data-reporting',
    category: 'change',
    title: {
      de: 'Data & Reporting Foundations',
      en: 'Data & Reporting Foundations',
      fr: 'Fondations Data & Reporting',
    },
    description: {
      de: 'Aufbau strukturierter Datengrundlagen und Reporting-Lösungen für Geschäftsentscheidungen und Compliance-Nachweise.',
      en: 'Building structured data foundations and reporting solutions for business decisions and compliance evidence.',
      fr: 'Construction de fondations de données structurées et solutions de reporting pour décisions métier et preuves de conformité.',
    },
    deliverables: {
      de: [
        'Datenmodell-Design und Normalisierung',
        'ETL-Prozesse und Datenqualitäts-Checks',
        'Reporting-Dashboards (Power BI, Tableau)',
        'KPI-Definitionen und Metriken-Katalog',
      ],
      en: [
        'Data model design and normalization',
        'ETL processes and data quality checks',
        'Reporting dashboards (Power BI, Tableau)',
        'KPI definitions and metrics catalog',
      ],
      fr: [
        'Conception modèle de données et normalisation',
        'Processus ETL et vérifications qualité données',
        'Tableaux de bord reporting (Power BI, Tableau)',
        'Définitions KPI et catalogue de métriques',
      ],
    },
    inputs: {
      de: [
        'Datenquellen und Zugriff',
        'Reporting-Anforderungen',
        'Compliance-Vorgaben',
      ],
      en: [
        'Data sources and access',
        'Reporting requirements',
        'Compliance specifications',
      ],
      fr: [
        'Sources de données et accès',
        'Exigences de reporting',
        'Spécifications de conformité',
      ],
    },
    outputs: {
      de: [
        'Datenbank-Schema und Dokumentation',
        'Automatisierte Reports',
        'Datenqualitäts-Metriken',
      ],
      en: [
        'Database schema and documentation',
        'Automated reports',
        'Data quality metrics',
      ],
      fr: [
        'Schéma base de données et documentation',
        'Rapports automatisés',
        'Métriques qualité données',
      ],
    },
    scopeExclusions: {
      de: [
        'Keine Big-Data-Architekturen',
        'Keine KI/ML-Modelle',
        'Keine Daten-Governance-Strategie',
      ],
      en: [
        'No big data architectures',
        'No AI/ML models',
        'No data governance strategy',
      ],
      fr: [
        'Pas d\'architectures big data',
        'Pas de modèles IA/ML',
        'Pas de stratégie de gouvernance des données',
      ],
    },
    procurementAlignment: {
      de: 'Geeignet für Datenmanagement und BI-Projekte (CPV 72000000, 72310000)',
      en: 'Suitable for data management and BI projects (CPV 72000000, 72310000)',
      fr: 'Adapté aux projets de gestion de données et BI (CPV 72000000, 72310000)',
    },
  },

  // ADVISORY (Security/Procurement)
  {
    id: 'security-baseline',
    category: 'advisory',
    title: {
      de: 'Security-by-Design & Baseline Hardening',
      en: 'Security-by-Design & Baseline Hardening',
      fr: 'Security-by-Design & Durcissement Baseline',
    },
    description: {
      de: 'Sicherheitskonzepte und Baseline-Härtung für IT-Systeme nach BSI-Grundschutz und Best Practices.',
      en: 'Security concepts and baseline hardening for IT systems according to BSI IT-Grundschutz and best practices.',
      fr: 'Concepts de sécurité et durcissement baseline pour systèmes IT selon BSI IT-Grundschutz et meilleures pratiques.',
    },
    deliverables: {
      de: [
        'Security-Konzept mit Risikoanalyse',
        'Härtungs-Checklisten und Konfigurationen',
        'Zugriffskontroll-Modell (RBAC)',
        'Security-Dokumentation',
      ],
      en: [
        'Security concept with risk analysis',
        'Hardening checklists and configurations',
        'Access control model (RBAC)',
        'Security documentation',
      ],
      fr: [
        'Concept de sécurité avec analyse de risques',
        'Checklists de durcissement et configurations',
        'Modèle de contrôle d\'accès (RBAC)',
        'Documentation de sécurité',
      ],
    },
    inputs: {
      de: [
        'Systemlandschaft und Architektur',
        'Compliance-Anforderungen (DSGVO, BSI)',
        'Bestehende Security-Policies',
      ],
      en: [
        'System landscape and architecture',
        'Compliance requirements (GDPR, BSI)',
        'Existing security policies',
      ],
      fr: [
        'Paysage système et architecture',
        'Exigences de conformité (RGPD, BSI)',
        'Politiques de sécurité existantes',
      ],
    },
    outputs: {
      de: [
        'Security-Baseline-Dokumentation',
        'Implementierungs-Leitfaden',
        'Compliance-Nachweis',
      ],
      en: [
        'Security baseline documentation',
        'Implementation guide',
        'Compliance evidence',
      ],
      fr: [
        'Documentation baseline de sécurité',
        'Guide d\'implémentation',
        'Preuve de conformité',
      ],
    },
    scopeExclusions: {
      de: [
        'Keine Penetration-Tests',
        'Keine Security-Operations (SOC)',
        'Keine Zertifizierungs-Begleitung',
      ],
      en: [
        'No penetration testing',
        'No security operations (SOC)',
        'No certification support',
      ],
      fr: [
        'Pas de tests de pénétration',
        'Pas d\'opérations de sécurité (SOC)',
        'Pas d\'accompagnement certification',
      ],
    },
    procurementAlignment: {
      de: 'Geeignet für Security-Beratung und Compliance-Projekte (CPV 72224000, 79400000)',
      en: 'Suitable for security consulting and compliance projects (CPV 72224000, 79400000)',
      fr: 'Adapté au conseil en sécurité et projets de conformité (CPV 72224000, 79400000)',
    },
  },
  {
    id: 'procurement-enablement',
    category: 'advisory',
    title: {
      de: 'EU Tender & Procurement Enablement',
      en: 'EU Tender & Procurement Enablement',
      fr: 'Activation Appels d\'Offres UE & Procurement',
    },
    description: {
      de: 'Unterstützung bei der Vorbereitung auf EU-Vergabeverfahren und Aufbau procurement-tauglicher Dokumentation.',
      en: 'Support in preparing for EU procurement procedures and building procurement-ready documentation.',
      fr: 'Support dans la préparation aux procédures de passation UE et construction de documentation prête pour procurement.',
    },
    deliverables: {
      de: [
        'Procurement-Readiness-Assessment',
        'Leistungskatalog und Scope-Definitionen',
        'Referenz-Dokumentation und Nachweise',
        'Tender-Response-Templates',
      ],
      en: [
        'Procurement readiness assessment',
        'Service catalog and scope definitions',
        'Reference documentation and evidence',
        'Tender response templates',
      ],
      fr: [
        'Évaluation de préparation procurement',
        'Catalogue de services et définitions de périmètre',
        'Documentation de référence et preuves',
        'Modèles de réponse aux appels d\'offres',
      ],
    },
    inputs: {
      de: [
        'Unternehmens-Profil und Leistungen',
        'Ziel-Vergabeverfahren (VgV, UVgO)',
        'Bestehende Dokumentation',
      ],
      en: [
        'Company profile and services',
        'Target procurement procedures (VgV, UVgO)',
        'Existing documentation',
      ],
      fr: [
        'Profil entreprise et services',
        'Procédures de passation cibles (VgV, UVgO)',
        'Documentation existante',
      ],
    },
    outputs: {
      de: [
        'Procurement-Profil',
        'Strukturierte Leistungsbeschreibungen',
        'Compliance-Checklisten',
      ],
      en: [
        'Procurement profile',
        'Structured service descriptions',
        'Compliance checklists',
      ],
      fr: [
        'Profil procurement',
        'Descriptions de services structurées',
        'Checklists de conformité',
      ],
    },
    scopeExclusions: {
      de: [
        'Keine Rechtsberatung',
        'Keine Angebotsabgabe im Namen des Kunden',
        'Keine Erfolgsgarantien',
      ],
      en: [
        'No legal advice',
        'No bid submission on behalf of client',
        'No success guarantees',
      ],
      fr: [
        'Pas de conseil juridique',
        'Pas de soumission d\'offre au nom du client',
        'Pas de garanties de succès',
      ],
    },
    procurementAlignment: {
      de: 'Geeignet für Beratungsleistungen im Bereich Public Procurement (CPV 79400000, 79421000)',
      en: 'Suitable for consulting services in public procurement (CPV 79400000, 79421000)',
      fr: 'Adapté aux services de conseil en marchés publics (CPV 79400000, 79421000)',
    },
  },
];

export const capabilities = {
  de: [
    'ITSM-Prozesse (Incident/Request/Change)',
    'API-Integration',
    'Baseline Hardening (Security)',
    'Procurement Dokumentation',
    'M365/Azure Operations',
    'Datenqualität & KPI-Definition',
    'Projekt-Stabilisierung',
  ],
  en: [
    'ITSM Processes (Incident/Request/Change)',
    'API Integration',
    'Baseline Hardening (Security)',
    'Procurement Documentation',
    'M365/Azure Operations',
    'Data Quality & KPI Definition',
    'Project Stabilization',
  ],
  fr: [
    'Processus ITSM (Incident/Demande/Changement)',
    'Intégration API',
    'Durcissement Baseline (Sécurité)',
    'Documentation Procurement',
    'Opérations M365/Azure',
    'Qualité Données & Définition KPI',
    'Stabilisation Projet',
  ],
};
