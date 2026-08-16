// src/lib/servicesData.ts
export interface ServiceItem {
  id: string
  category: string
  translations: Record<
    string,
    {
      title: string
      description: string
      features: string[]
    }
  >
}

export const defaultServices: ServiceItem[] = [
  {
    id: '1',
    category: 'Cloud Infrastructure',
    translations: {
      DE: {
        title: 'Multi-Cloud & Souveräne Architektur',
        description:
          'Konzeption und Bereitstellung hochverfügbarer hybrider Multi-Cloud-Umgebungen auf AWS, Azure und europäischen souveränen Clouds.',
        features: [
          'Souveräne Cloud Bereit',
          'Automatisches Failover',
          'Infrastructure as Code (Terraform)',
        ],
      },
      EN: {
        title: 'Multi-Cloud & Sovereign Architecture',
        description:
          'Design and deployment of highly available hybrid multi-cloud environments across AWS, Azure, and European sovereign clouds.',
        features: [
          'Sovereign Cloud Ready',
          'Automated Failover',
          'Infrastructure as Code (Terraform)',
        ],
      },
      HU: {
        title: 'Multi-Cloud és Szuverén Architektúra',
        description:
          'Hibrid multi-cloud környezetek tervezése és bevezetése AWS, Azure és európai szuverén felhők felett.',
        features: [
          'Szuverén Felhő Kész',
          'Automatizált Hibatűrés',
          'Infrastructure as Code (Terraform)',
        ],
      },
      FR: {
        title: 'Architecture Multi-Cloud & Souveraine',
        description:
          'Conception et déploiement d’environnements hybrides multi-cloud à haute disponibilité sur AWS, Azure et clouds souverains européens.',
        features: [
          'Prêt pour Cloud Souverain',
          'Basculement Automatique',
          'Infrastructure as Code (Terraform)',
        ],
      },
      ES: {
        title: 'Arquitectura Multi-Cloud y Soberana',
        description:
          'Diseño y despliegue de entornos híbridos multi-cloud de alta disponibilidad en AWS, Azure y nubes soberanas europeas.',
        features: [
          'Listo para Nube Soberana',
          'Conmutación por Error Automática',
          'Infrastructure as Code (Terraform)',
        ],
      },
      IT: {
        title: 'Architettura Multi-Cloud e Sovrana',
        description:
          'Progettazione e distribuzione di ambienti ibridi multi-cloud ad alta disponibilità su AWS, Azure e cloud sovrani europei.',
        features: [
          'Pronto per Cloud Sovrano',
          'Failover Automatizzato',
          'Infrastructure as Code (Terraform)',
        ],
      },
      NL: {
        title: 'Multi-Cloud & Souvereine Architectuur',
        description:
          'Ontwerp en uitrol van hoogbeschikbare hybride multi-cloudomgevingen op AWS, Azure en Europese souvereine clouds.',
        features: [
          'Souvereine Cloud Gereed',
          'Geautomatiseerde Failover',
          'Infrastructure as Code (Terraform)',
        ],
      },
      PL: {
        title: 'Architektura Multi-Cloud i Suwerenna',
        description:
          'Projektowanie i wdrażanie wysoce dostępnych środowisk hybrydowych multi-cloud w AWS, Azure i europejskich chmurach suwerennych.',
        features: [
          'Gotowość na Chmurę Suwerenną',
          'Automatyczne Przełączanie',
          'Infrastructure as Code (Terraform)',
        ],
      },
    },
  },
  {
    id: '2',
    category: 'Cloud Infrastructure',
    translations: {
      DE: {
        title: 'Container-Orchestrierung & DevOps',
        description:
          'Enterprise Kubernetes Cluster-Management, CI/CD Pipeline-Automatisierung und Zero-Downtime Deployment-Prozesse.',
        features: ['Kubernetes / OpenShift', 'GitOps Workflows', '24/7 Telemetrie & Logging'],
      },
      EN: {
        title: 'Container Orchestration & DevOps',
        description:
          'Enterprise Kubernetes cluster management, CI/CD pipeline automation, and zero-downtime deployment workflows.',
        features: ['Kubernetes / OpenShift', 'GitOps Workflows', '24/7 Telemetry & Logging'],
      },
      HU: {
        title: 'Konténer Orkesztráció és DevOps',
        description:
          'Vállalati Kubernetes klaszterkezelés, CI/CD automatizáció és leállásmentes telepítések.',
        features: [
          'Kubernetes / OpenShift',
          'GitOps Munkafolyamatok',
          '24/7 Telemetria és Naplózás',
        ],
      },
      FR: {
        title: 'Orchestration de Conteneurs & DevOps',
        description:
          'Gestion de clusters Kubernetes d’entreprise, automatisation CI/CD et déploiements sans interruption.',
        features: [
          'Kubernetes / OpenShift',
          'Flux de Travail GitOps',
          'Télémétrie & Journaux 24/7',
        ],
      },
      ES: {
        title: 'Orquestación de Contenedores y DevOps',
        description:
          'Gestión de clusters Kubernetes empresariales, automatización de canalizaciones CI/CD y despliegues sin interrupciones.',
        features: [
          'Kubernetes / OpenShift',
          'Flujos de Trabajo GitOps',
          'Telemetría y Registros 24/7',
        ],
      },
      IT: {
        title: 'Orchestrazione Container e DevOps',
        description:
          'Gestione cluster Kubernetes enterprise, automazione pipeline CI/CD e workflow di deployment a zero downtime.',
        features: ['Kubernetes / OpenShift', 'Workflow GitOps', 'Telemetria e Logging 24/7'],
      },
      NL: {
        title: 'Container Orchestratie & DevOps',
        description:
          'Enterprise Kubernetes clusterbeheer, CI/CD-pijplijnautomatisering en zero-downtime uitrolworkflows.',
        features: ['Kubernetes / OpenShift', 'GitOps Workflows', '24/7 Telemetrie & Logging'],
      },
      PL: {
        title: 'Orkiestracja Kontenerów i DevOps',
        description:
          'Zarządzanie klastrami Kubernetes, automatyzacja potoków CI/CD i wdrożenia bez przestojów.',
        features: ['Kubernetes / OpenShift', 'Przepływy GitOps', 'Telemetria i Logowanie 24/7'],
      },
    },
  },
  {
    id: '3',
    category: 'Cloud Infrastructure',
    translations: {
      DE: {
        title: 'Disaster Recovery & Business Continuity',
        description:
          'Robuste Datenreplikation, automatisierte Failover-Protokolle und Backup-Architektur mit niedrigen RTO/RPO für kritische Workloads.',
        features: [
          'Minimale Datenverluste (Near-Zero)',
          'ISO 22301 Konform',
          'Automatisierte Recovery-Tests',
        ],
      },
      EN: {
        title: 'Disaster Recovery & Business Continuity',
        description:
          'Robust data replication, automated failover protocols, and low-RTO/RPO backup architecture for critical workloads.',
        features: ['Near-Zero Data Loss', 'ISO 22301 Aligned', 'Automated Recovery Testing'],
      },
      HU: {
        title: 'Katasztrófa-helyreállítás és Üzletmenet-folytonosság',
        description:
          'Robusztus adatreplikáció, automatizált átállás és alacsony RTO/RPO mentési architektúra kritikus rendszerekhez.',
        features: [
          'Közel Nullás Adatvesztés',
          'ISO 22301 Megfelelőség',
          'Automatizált Helyreállítási Teszt',
        ],
      },
      FR: {
        title: 'Reprise après Sinistre & Continuité d’Activité',
        description:
          'Réplication de données robuste, basculement automatique et architecture de sauvegarde à faible RTO/RPO pour charges critiques.',
        features: [
          'Perte de Données Quasi Nulle',
          'Aligné sur ISO 22301',
          'Tests de Reprise Automatisés',
        ],
      },
      ES: {
        title: 'Recuperación ante Desastres y Continuidad de Negocio',
        description:
          'Replicación de datos robusta, protocolos de conmutación por error y respaldo de bajo RTO/RPO para cargas críticas.',
        features: [
          'Pérdida de Datos Casi Nula',
          'Alineado con ISO 22301',
          'Pruebas Automatizadas de Recuperación',
        ],
      },
      IT: {
        title: 'Disaster Recovery e Continuità Operativa',
        description:
          'Replicazione dati robusta, failover automatizzato e architettura di backup a basso RTO/RPO per carichi di lavoro critici.',
        features: [
          'Perdita Dati Quasi Nulla',
          'Allineato ISO 22301',
          'Test di Ripristino Automatizzati',
        ],
      },
      NL: {
        title: 'Disaster Recovery & Business Continuity',
        description:
          'Robuuste datareplicatie, geautomatiseerde failover-protocollen en lage RTO/RPO backuparchitectuur voor kritieke workloads.',
        features: [
          'Nijpende Nul Dataverlies',
          'ISO 22301 Conform',
          'Geautomatiseerde Hersteltests',
        ],
      },
      PL: {
        title: 'Awaryjne Przywracanie i Ciągłość Działań',
        description:
          'Solidna replikacja danych, automatyczne przełączanie i kopie zapasowe o niskim RTO/RPO dla kluczowych zasobów.',
        features: [
          'Prawie Zerowa Utrata Danych',
          'Zgodność z ISO 22301',
          'Automatyczne Testy Odzyskiwania',
        ],
      },
    },
  },
  {
    id: '4',
    category: 'Cybersecurity',
    translations: {
      DE: {
        title: 'ISO 27001 & NIS2 Compliance Frameworks',
        description:
          'Implementierung von Informationssicherheits-Managementsystemen (ISMS) gemäß EU-NIS2-Richtlinien und ISO-Standards.',
        features: ['ISMS Implementierung', 'Audit-Bereitschaft', 'Automatisierte Risikobewertung'],
      },
      EN: {
        title: 'ISO 27001 & NIS2 Compliance Frameworks',
        description:
          'Implementation of Information Security Management Systems (ISMS) tailored to meet EU NIS2 directives and ISO standards.',
        features: ['ISMS Implementation', 'Audit Readiness', 'Risk Assessment Automation'],
      },
      HU: {
        title: 'ISO 27001 és NIS2 Megfelelőségi Keretrendszerek',
        description:
          'Információbiztonsági irányítási rendszerek (ISMS) kiépítése az EU NIS2 és ISO szabványok szerint.',
        features: ['ISMS Bevezetés', 'Audit Készültség', 'Kockázatelemzés Automatizálás'],
      },
      FR: {
        title: 'Cadres de Conformité ISO 27001 & NIS2',
        description:
          'Mise en œuvre de systèmes de gestion de la sécurité de l’information (SMSI) conformes aux directives NIS2 et normes ISO.',
        features: [
          'Mise en Œuvre SMSI',
          'Préparation aux Audits',
          'Automatisation de l’Évaluation des Risques',
        ],
      },
      ES: {
        title: 'Marcos de Cumplimiento ISO 27001 y NIS2',
        description:
          'Implementación de Sistemas de Gestión de Seguridad de la Información (SGSI) según directivas NIS2 de la UE e ISO.',
        features: [
          'Implementación SGSI',
          'Preparación para Auditorías',
          'Automatización de Evaluación de Riesgos',
        ],
      },
      IT: {
        title: 'Framework di Conformità ISO 27001 e NIS2',
        description:
          'Implementazione di Sistemi di Gestione della Sicurezza delle Informazioni (SGSI) conformi a direttive NIS2 e ISO.',
        features: [
          'Implementazione SGSI',
          'Prontitudine per Audit',
          'Automazione Valutazione Rischio',
        ],
      },
      NL: {
        title: 'ISO 27001 & NIS2 Compliance Frameworks',
        description:
          'Implementatie van Information Security Management Systems (ISMS) conform EU NIS2-richtlijnen en ISO-normen.',
        features: ['ISMS Implementatie', 'Audit Gereedheid', 'Risicobeoordeling Automatisering'],
      },
      PL: {
        title: 'Ramy Zgodności ISO 27001 i NIS2',
        description:
          'Wdrażanie Systemów Zarządzania Bezpieczeństwem Informacji (SZBI) zgodnie z dyrektywą NIS2 i normami ISO.',
        features: ['Wdrożenie SZBI', 'Gotowość Do Audytu', 'Automatyzacja Oceny Ryzyka'],
      },
    },
  },
  {
    id: '5',
    category: 'Cybersecurity',
    translations: {
      DE: {
        title: 'DSGVO / GDPR Compliance & Datenschutz',
        description:
          'Technische und organisatorische Maßnahmen (TOMs) für durchgängigen Datenschutz, Anonymisierung und EU-Hosting.',
        features: [
          'DSGVO-konforme Architektur',
          'Data Leak Prevention (DLP)',
          'Garantierte EU-Datengrenze',
        ],
      },
      EN: {
        title: 'DSGVO / GDPR Compliance & Data Protection',
        description:
          'Technical and organizational measures (TOMs) for end-to-end data privacy, anonymization, and compliant cloud hosting.',
        features: [
          'GDPR Compliant Architecture',
          'Data Leak Prevention',
          'EU Data Boundary Guarantee',
        ],
      },
      HU: {
        title: 'GDPR Megfelelőség és Adatvédelem',
        description:
          'Technikai és szervezési intézkedések (TOMs) a teljes körű adatvédelemért és EU-s felhőalapú hostingért.',
        features: [
          'GDPR Konform Architektúra',
          'Adatszivárgás Elleni Védelem',
          'EU Adathatár Garancia',
        ],
      },
      FR: {
        title: 'Conformité RGPD & Protection des Données',
        description:
          'Mesures techniques et organisationnelles (TOMs) pour la confidentialité des données, l’anonymisation et l’hébergement UE.',
        features: [
          'Architecture Conforme au RGPD',
          'Prévention des Fuites de Données',
          'Garantie de Frontière de Données UE',
        ],
      },
      ES: {
        title: 'Cumplimiento RGPD y Protección de Datos',
        description:
          'Medidas técnicas y organizativas (TOMs) para privacidad de datos, anonimización y alojamiento seguro en la UE.',
        features: [
          'Arquitectura Conforme a RGPD',
          'Prevención de Fuga de Datos',
          'Garantía de Límite de Datos en la UE',
        ],
      },
      IT: {
        title: 'Conformità GDPR e Protezione Dati',
        description:
          'Misure tecniche e organizzative (TOMs) per la riservatezza dei dati, anonimizzazione e hosting conforme nell’UE.',
        features: [
          'Architettura Conforme al GDPR',
          'Data Leak Prevention',
          'Garanzia Confini Dati UE',
        ],
      },
      NL: {
        title: 'AVG / GDPR Compliance & Databescherming',
        description:
          'Technische en organisatorische maatregelen (TOMs) voor end-to-end privacy, anonimisering en EU-hosting.',
        features: ['AVG-Conforme Architectuur', 'Datalek Preventie', 'EU Datagrens Garantie'],
      },
      PL: {
        title: 'Zgodność z RODO i Ochrona Danych',
        description:
          'Środki techniczne i organizacyjne (TOMS) dla ochrony prywatności danych, anonimizacji i hostingu w UE.',
        features: [
          'Architektura Zgodna z RODO',
          'Ochrona Przed Wyciekiem Danych',
          'Gwarancja Przetwarzania w UE',
        ],
      },
    },
  },
  {
    id: '6',
    category: 'Cybersecurity',
    translations: {
      DE: {
        title: 'Zero Trust & Identity Access Management (IAM)',
        description:
          'Zentrale Zugriffskontrollsysteme mit Multi-Faktor-Authentifizierung (MFA), Single Sign-On (SSO) und Mikrosegmentierung.',
        features: [
          'OAuth2 / SAML Integration',
          'Rollenbasierte Zugriffssteuerung (RBAC)',
          'Privileged Access Management (PAM)',
        ],
      },
      EN: {
        title: 'Zero Trust & Identity Access Management (IAM)',
        description:
          'Centralized access control systems using Multi-Factor Authentication (MFA), Single Sign-On (SSO), and micro-segmentation.',
        features: [
          'OAuth2 / SAML Integration',
          'Role-Based Access Control',
          'Privileged Access Management',
        ],
      },
      HU: {
        title: 'Zero Trust és Identitáskezelés (IAM)',
        description:
          'Központi hozzáférés-vezérlési rendszerek többfejű hitelesítéssel (MFA), SSO-val és mikroszegmentációval.',
        features: [
          'OAuth2 / SAML Integráció',
          'Szerepkör Alapú Hozzáférés',
          'Adivilégizált Hozzáférés-kezelés',
        ],
      },
      FR: {
        title: 'Zero Trust & Gestion des Accès et Identités (IAM)',
        description:
          'Systèmes de contrôle d’accès centralisés avec authentification multifacteur (MFA), SSO et micro-segmentation.',
        features: [
          'Intégration OAuth2 / SAML',
          'Contrôle d’Accès Basé sur les Rôles',
          'Gestion des Accès Privilégiés',
        ],
      },
      ES: {
        title: 'Zero Trust y Gestión de Identidades y Accesos (IAM)',
        description:
          'Sistemas de control de acceso centralizados con autenticación de doble factor (MFA), SSO y microsegmentación.',
        features: [
          'Integración OAuth2 / SAML',
          'Control de Acceso Basado en Roles',
          'Gestión de Accesos Privilegiados',
        ],
      },
      IT: {
        title: 'Zero Trust e Gestione Identità e Accessi (IAM)',
        description:
          'Sistemi di controllo accessi centralizzati con autenticazione a più fattori (MFA), SSO e micro-segmentazione.',
        features: [
          'Integrazione OAuth2 / SAML',
          'Controllo Accessi Basato sui Ruoli',
          'Gestione Accessi Privilegiati',
        ],
      },
      NL: {
        title: 'Zero Trust & Identity Access Management (IAM)',
        description:
          'Gecentraliseerde toegangssystemen met Multi-Factor Authenticatie (MFA), Single Sign-On (SSO) en micro-segmentatie.',
        features: [
          'OAuth2 / SAML Integratie',
          'Role-Based Access Control',
          'Privileged Access Management',
        ],
      },
      PL: {
        title: 'Zero Trust i Zarządzanie Tożsamością (IAM)',
        description:
          'Zdecentralizowane systemy kontroli dostępu z uwierzytelnianiem wieloskładnikowym (MFA), SSO i mikrosegmentacją.',
        features: [
          'Integracja OAuth2 / SAML',
          'Kontrola Dostępu Oparta na Rolach',
          'Zarządzanie Uprawnieniami Specjalnymi',
        ],
      },
    },
  },
  {
    id: '7',
    category: 'Software Engineering',
    translations: {
      DE: {
        title: 'Individuelle Enterprise CRM-Entwicklung',
        description:
          'Maßgeschneiderte CRM-Systeme für komplexe Vertriebszyklen, Kundensupport-Automatisierung und Multi-Mandanten-Verwaltung.',
        features: ['Eigene Workflow-Engines', 'Multi-Tenant-Architektur', 'Echtzeit-Telemetrie'],
      },
      EN: {
        title: 'Custom Enterprise CRM Development',
        description:
          'Tailor-made CRM systems engineered for complex sales cycles, customer support automation, and multi-tenant management.',
        features: ['Custom Workflow Engines', 'Multi-Tenant Architecture', 'Real-Time Telemetry'],
      },
      HU: {
        title: 'Egyedi Vállalati CRM Fejlesztés',
        description:
          'Testreszabott CRM rendszerek komplex értékesítési folyamatokhoz és többbérlős struktúrákhoz.',
        features: [
          'Egyedi Munkafolyamat Motor',
          'Többbérlős Architektúra',
          'Valós Idejű Telemetria',
        ],
      },
      FR: {
        title: 'Développement CRM Sur Mesure pour Entreprises',
        description:
          'Systèmes CRM personnalisés conçus pour des cycles de vente complexes, l’automatisation du support et le multi-tenant.',
        features: [
          'Moteurs de Workflow Sur Mesure',
          'Architecture Multi-Tenant',
          'Télémétrie en Temps Réel',
        ],
      },
      ES: {
        title: 'Desarrollo de CRM Empresarial a Medida',
        description:
          'Sistemas CRM personalizados diseñados para ciclos de ventas complejos, automatización y gestión multi-inquilino.',
        features: [
          'Motores de Flujos Personalizados',
          'Arquitectura Multi-Inquilino',
          'Telemetría en Tiempo Real',
        ],
      },
      IT: {
        title: 'Sviluppo CRM Enterprise Su Misura',
        description:
          'Sistemi CRM personalizzati per cicli di vendita complessi, automazione supporto e gestione multi-tenant.',
        features: [
          'Engine Workflow Personalizzati',
          'Architettura Multi-Tenant',
          'Telemetria in Tempo Reale',
        ],
      },
      NL: {
        title: 'Maatwerk Enterprise CRM Ontwikkeling',
        description:
          'Op maat gemaakte CRM-systemen voor complexe verkoopcycli, klantenservice-automatisering en multi-tenant beheer.',
        features: [
          'Aangepaste Workflow Engines',
          'Multi-Tenant Architectuur',
          'Real-time Telemetrie',
        ],
      },
      PL: {
        title: 'Dedykowane Systemy CRM Dla Przedsiębiorstw',
        description:
          'Szyte na miarę systemy CRM dla złożonych cykli sprzedaży, automatyzacji obsługi i architektury multi-tenant.',
        features: [
          'Dedykowane Silniki Workflow',
          'Architektura Multi-Tenant',
          'Telemetria w Czasie Rzeczywistym',
        ],
      },
    },
  },
  {
    id: '8',
    category: 'Software Engineering',
    translations: {
      DE: {
        title: 'Enterprise API & Integrations-Middleware',
        description:
          'Skalierbare REST/GraphQL Middleware zur Verbindung von Legacy-ERP-Plattformen, Custom-Apps und Drittanbieter-SaaS.',
        features: [
          'Ereignisgesteuerte Architektur',
          'Hochdurchsatz-Gateways',
          'Legacy ERP-Adapter',
        ],
      },
      EN: {
        title: 'Enterprise API & Integration Middleware',
        description:
          'Scalable REST/GraphQL middleware connecting legacy ERP platforms, custom applications, and third-party SaaS tools.',
        features: ['Event-Driven Architecture', 'High-Throughput Gateways', 'Legacy ERP Adapters'],
      },
      HU: {
        title: 'Vállalati API és Integrációs Middleware',
        description:
          'Skálázható REST/GraphQL middleware meglévő ERP rendszerek, egyedi alkalmazások és SaaS eszközök összekötésére.',
        features: [
          'Eseményvezérelt Architektúra',
          'Nagy Áteresztőképességű Gateway-ek',
          'Legacy ERP Adapterek',
        ],
      },
      FR: {
        title: 'API Enterprise & Middleware d’Intégration',
        description:
          'Middleware REST/GraphQL scalable connectant les ERP existants, les applications personnalisées et les SaaS tiers.',
        features: [
          'Architecture Orientée Événements',
          'Passerelles Haut Débit',
          'Adaptateurs ERP Hérités',
        ],
      },
      ES: {
        title: 'API Empresarial y Middleware de Integración',
        description:
          'Middleware REST/GraphQL escalable que conecta plataformas ERP heredadas, aplicaciones a medida y herramientas SaaS.',
        features: [
          'Arquitectura Dirigida por Eventos',
          'Gateways de Alto Rendimiento',
          'Adaptadores para ERP Heredados',
        ],
      },
      IT: {
        title: 'API Enterprise e Middleware di Integrazione',
        description:
          'Middleware REST/GraphQL scalabile per connettere ERP legacy, applicazioni personalizzate e SaaS di terze parti.',
        features: [
          'Architettura Event-Driven',
          'Gateway ad Alta Capacità',
          'Adattatori ERP Legacy',
        ],
      },
      NL: {
        title: 'Enterprise API & Integratie Middleware',
        description:
          'Schaalbare REST/GraphQL middleware die legacy ERP-platformen, eigen applicaties en SaaS-tools verbindt.',
        features: ['Event-Driven Architectuur', 'High-Throughput Gateways', 'Legacy ERP Adapters'],
      },
      PL: {
        title: 'Enterprise API i Middleware Integracyjny',
        description:
          'Skalowalne middleware REST/GraphQL łączące starsze systemy ERP, dedykowane aplikacje i narzędzia SaaS.',
        features: [
          'Architektura Sterowana Zdarzeniami',
          'Bramy o Wysokiej Przepustowości',
          'Adaptery Starszych Systemów ERP',
        ],
      },
    },
  },
  {
    id: '9',
    category: 'Software Engineering',
    translations: {
      DE: {
        title: 'Modernisierung von Legacy-Anwendungen',
        description:
          'Refactoring monolithischer Altsysteme in containerisierte, cloud-native Microservices ohne Betriebsunterbrechung.',
        features: [
          'Monolith-zu-Microservices',
          'Zero-Downtime Migration',
          'Code-Refactoring & Härtung',
        ],
      },
      EN: {
        title: 'Legacy Application Modernization',
        description:
          'Refactoring monolithic legacy applications into containerized, cloud-native microservices with zero operational impact.',
        features: ['Monolith-to-Microservices', 'Zero-Downtime Migration', 'Code Refactoring'],
      },
      HU: {
        title: 'Legacy Alkalmazások Modernizációja',
        description:
          'Monolitikus régi rendszerek átalakítása konténerizált, felhőalapú mikroszolgáltatásokká üzleti leállás nélkül.',
        features: ['Monolitból Mikroszolgáltatás', 'Leállásmentes Migráció', 'Kód Refaktorálás'],
      },
      FR: {
        title: 'Modernisation d’Applications Héritées',
        description:
          'Refactorisation d’applications monolithiques en microservices conteneurisés et cloud-native sans impact opérationnel.',
        features: [
          'Du Monolithe aux Microservices',
          'Migration Sans Interruption',
          'Refactorisation de Code',
        ],
      },
      ES: {
        title: 'Modernización de Aplicaciones Heredadas',
        description:
          'Refactorización de aplicaciones monolíticas heredadas en microservicios nativos de la nube sin impacto operativo.',
        features: [
          'De Monolito a Microservicios',
          'Migración Sin Interrupciones',
          'Refactorización de Código',
        ],
      },
      IT: {
        title: 'Modernizzazione Applicazioni Legacy',
        description:
          'Refactoring di applicazioni monolitiche legacy in microservizi containerizzati cloud-native a impatto operativo zero.',
        features: [
          'Da Monolito a Microservizi',
          'Migrazione Zero Downtime',
          'Refactoring del Codice',
        ],
      },
      NL: {
        title: 'Modernisering van Legacy Applicaties',
        description:
          'Herstructurering van monolithische legacy-systemen naar gecontaineriseerde, cloud-native microservices.',
        features: ['Monoliet naar Microservices', 'Zero-Downtime Migratie', 'Code Refactoring'],
      },
      PL: {
        title: 'Modernizacja Starszych Aplikacji (Legacy)',
        description:
          'Przebudowa monolitycznych systemów na kontenerowe mikrousługi cloud-native bez wpływu na operacje.',
        features: ['Od Monolitu do Mikrousług', 'Migracja Bez Przestojów', 'Refaktoryzacja Kodu'],
      },
    },
  },
  {
    id: '10',
    category: 'Public Sector',
    translations: {
      DE: {
        title: 'EVB-IT-konforme Projektabwicklung',
        description:
          'Spezialisierte IT-Dienstleistung strukturiert zur direkten Einhaltung deutscher EVB-IT-Vertragsstandards (System/Dienstleistung/Erstellung).',
        features: [
          'EVB-IT Standardverträge',
          'Öffentliche SLAs & Dokumentation',
          'Compliance-Nachweise',
        ],
      },
      EN: {
        title: 'EVB-IT Compliant Project Execution',
        description:
          'Specialized IT service delivery structured to comply directly with German EVB-IT contract frameworks (System/Pflege/Erstellung).',
        features: ['EVB-IT Standard Contracts', 'Public Sector SLAs', 'Compliance Documentation'],
      },
      HU: {
        title: 'EVB-IT Megfelelő Projektmegvalósítás',
        description:
          'Német EVB-IT szerződéses kereteknek közvetlenül megfelelő IT szolgáltatásnyújtás.',
        features: ['EVB-IT Szabvány Szerződések', 'Közszféra SLA-k', 'Megfelelőségi Dokumentáció'],
      },
      FR: {
        title: 'Exécution de Projets Conformes EVB-IT',
        description:
          'Prestation de services IT structurée pour respecter directement les cadres contractuels EVB-IT allemands.',
        features: [
          'Contrats Standards EVB-IT',
          'SLA Secteur Public',
          'Documentation de Conformité',
        ],
      },
      ES: {
        title: 'Ejecución de Proyectos Conforme a EVB-IT',
        description:
          'Prestación de servicios TI estructurada para cumplir directamente con marcos contractuales EVB-IT alemanes.',
        features: [
          'Contratos Estándar EVB-IT',
          'SLA Sector Público',
          'Documentación de Cumplimiento',
        ],
      },
      IT: {
        title: 'Esecuzione Progetti Conforme EVB-IT',
        description:
          'Erogazione di servizi IT strutturata per conformarsi direttamente ai contratti EVB-IT tedeschi.',
        features: [
          'Contratti Standard EVB-IT',
          'SLA Settore Pubblico',
          'Documentazione di Conformità',
        ],
      },
      NL: {
        title: 'EVB-IT Conforme Projectuitvoering',
        description:
          'Gespecialiseerde IT-dienstverlening gestructureerd volgens Duitse EVB-IT contractkaders.',
        features: ['EVB-IT Standaardcontracten', 'Publieke Sector SLAs', 'Compliance Documentatie'],
      },
      PL: {
        title: 'Realizacja Projektów Zgodna z EVB-IT',
        description:
          'Dostarczanie usług IT ustrukturyzowane ściśle według niemieckich ram umownych EVB-IT.',
        features: ['Standardowe Umowy EVB-IT', 'SLA Sektora Publicznego', 'Dokumentacja Zgodności'],
      },
    },
  },
  {
    id: '11',
    category: 'Public Sector',
    translations: {
      DE: {
        title: 'Digitalisierung im öffentlichen Sektor & OZG',
        description:
          'Digitale Transformation für die öffentliche Verwaltung gemäß Onlinezugangsgesetz (OZG) und BITV 2.0 Barrierefreiheit.',
        features: ['BITV 2.0 Barrierefreiheit', 'OZG-Schnittstellen', 'Sichere Behördenportale'],
      },
      EN: {
        title: 'Public Sector Digitalization & OZG Services',
        description:
          'Digital service transformation for public administration entities aligned with the Online Access Act (OZG) and BITV accessibility.',
        features: [
          'BITV 2.0 Accessibility',
          'OZG Standard Interfaces',
          'Secure Public Portal Delivery',
        ],
      },
      HU: {
        title: 'Közszféra Digitalizáció és OZG Szolgáltatások',
        description:
          'Közigazgatási digitális átalakítás az Online Access Act (OZG) és BITV akadálymentesítés szerint.',
        features: [
          'BITV 2.0 Akadálymentesítés',
          'OZG Szabvány Interfészek',
          'Biztonságos Portálok',
        ],
      },
      FR: {
        title: 'Digitalisation du Secteur Public & Services OZG',
        description:
          'Transformation numérique de l’administration publique conforme aux normes d’accessibilité OZG et BITV.',
        features: [
          'Accessibilité BITV 2.0',
          'Interfaces Standards OZG',
          'Portails Publics Sécurisés',
        ],
      },
      ES: {
        title: 'Digitalización del Sector Público y Servicios OZG',
        description:
          'Transformación digital para administraciones públicas alineada con la Ley de Acceso Online (OZG) y accesibilidad BITV.',
        features: [
          'Accesibilidad BITV 2.0',
          'Interfaces Estándar OZG',
          'Portales Públicos Seguros',
        ],
      },
      IT: {
        title: 'Digitalizzazione Settore Pubblico e Servizi OZG',
        description:
          'Trasformazione digitale per la pubblica amministrazione in linea con l’Online Access Act (OZG) e accessibilità BITV.',
        features: [
          'Accessibilità BITV 2.0',
          'Interfacce Standard OZG',
          'Erogazione Portali Pubblici Sicuri',
        ],
      },
      NL: {
        title: 'Publieke Sector Digitalisering & OZG Diensten',
        description:
          'Digitale transformatie voor de overheid afgestemd op de Online Access Act (OZG) en BITV toegankelijkheid.',
        features: [
          'BITV 2.0 Toegankelijkheid',
          'OZG Standaard Interfaces',
          'Veilige Publieke Portalen',
        ],
      },
      PL: {
        title: 'Cyfryzacja Sektora Publicznego i Usługi OZG',
        description:
          'Cyfrowa transformacja administracji publicznej zgodna z ustawą OZG oraz dostępnością BITV 2.0.',
        features: [
          'Dostępność BITV 2.0',
          'Interfejsy Standardu OZG',
          'Bezpieczne Portale Publiczne',
        ],
      },
    },
  },
  {
    id: '12',
    category: 'Public Sector',
    translations: {
      DE: {
        title: 'EU-Tender & Ausschreibungsberatung',
        description:
          'Technische Bieterunterstützung, Architekturplanung und Compliance-Prüfung für öffentliche EU-Ausschreibungen.',
        features: [
          'Ausschreibungs-Compliance-Matrix',
          'Erstellung technischer Spezifikationen',
          'Lieferanten-Audits',
        ],
      },
      EN: {
        title: 'EU Tender & RFP Technical Advisory',
        description:
          'Technical bid support, architecture planning, and compliance verification for enterprise and EU public procurement tenders.',
        features: ['RFP Compliance Matrix', 'Technical Specification Preparation', 'Vendor Audits'],
      },
      HU: {
        title: 'EU Tenderek és RFP Technikai Tanácsadás',
        description:
          'Műszaki ajánlattételi támogatás, architektúra tervezés és megfelelőségi ellenőrzés EU-s közbeszerzéseknél.',
        features: [
          'RFP Megfelelőségi Mátrix',
          'Műszaki Specifikáció Készítés',
          'Beszállítói Auditok',
        ],
      },
      FR: {
        title: 'Conseil Technique Appels d’Offres UE & RFP',
        description:
          'Support technique aux réponses, planification d’architecture et vérification de conformité pour marchés publics UE.',
        features: [
          'Matrice de Conformité RFP',
          'Préparation des Spécifications Techniques',
          'Audits Fournisseurs',
        ],
      },
      ES: {
        title: 'Asesoría Técnica para Licitaciones UE y RFP',
        description:
          'Soporte técnico para ofertas, planificación de arquitectura y verificación de cumplimiento en licitaciones públicas de la UE.',
        features: [
          'Matriz de Cumplimiento RFP',
          'Preparación de Especificaciones Técnicas',
          'Auditorías de Proveedores',
        ],
      },
      IT: {
        title: 'Consulenza Tecnica Gare d’Appalto UE e RFP',
        description:
          'Supporto tecnico alle offerte, pianificazione dell’architettura e verifica di conformità per gare pubbliche UE.',
        features: [
          'Matrice di Conformità RFP',
          'Preparazione Specifiche Tecniche',
          'Audit dei Fornitori',
        ],
      },
      NL: {
        title: 'EU Tender & RFP Technisch Advies',
        description:
          'Technische biedingsondersteuning, architectuurplanning en compliance-verificatie voor Europese aanbestedingen.',
        features: [
          'RFP Compliance Matrix',
          'Technische Specificatie Voorbereiding',
          'Leveranciersaudits',
        ],
      },
      PL: {
        title: 'Doradztwo Techniczne przy Przetargach UE i RFP',
        description:
          'Techniczne wsparcie ofertowe, planowanie architektury i weryfikacja zgodności w przetargach publicznych UE.',
        features: [
          'Macierz Zgodności RFP',
          'Przygotowanie Specyfikacji Technicznej',
          'Audyty Dostawców',
        ],
      },
    },
  },
]
