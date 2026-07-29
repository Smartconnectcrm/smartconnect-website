import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

const pageTranslations: Record<string, Record<string, string>> = {
  DE: {
    heroTitle: 'Leistungskatalog',
    heroSub:
      'Strukturierte Leistungsbausteine mit klarer Abgrenzung, dokumentierter Übergabe und compliance-orientierter Umsetzung.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Abgrenzung',
  },
  EN: {
    heroTitle: 'Service Catalog',
    heroSub:
      'Structured service modules with clear boundaries, documented handovers, and compliance-oriented execution.',
    deliverables: '✓ Deliverables',
    boundaries: '⊘ Out of Scope',
  },
  HU: {
    heroTitle: 'Szolgáltatási Katalógus',
    heroSub:
      'Strukturált szolgáltatási modulok világos határokkal, dokumentált átadással és megfelelőség-orientált megvalósítással.',
    deliverables: '✓ A CSOMAG TARTALMA',
    boundaries: '⊘ KIZÁRÁSOK',
  },
  FR: {
    heroTitle: 'Catalogue de Services',
    heroSub:
      'Modules de services structurés avec délimitation claire, transfert documenté et exécution orientée conformité.',
    deliverables: '✓ Livrables',
    boundaries: '⊘ Périmètre Exclu',
  },
  ES: {
    heroTitle: 'Catálogo de Servicios',
    heroSub:
      'Módulos de servicio estructurados con clara delimitación, entrega documentada y ejecución orientada al cumplimiento.',
    deliverables: '✓ Entregables',
    boundaries: '⊘ Fuera de Alcance',
  },
  IT: {
    heroTitle: 'Catalogo Servizi',
    heroSub:
      'Moduli di servizio strutturati con chiara delimitazione, consegna documentata ed esecuzione orientata alla conformità.',
    deliverables: '✓ Deliverable',
    boundaries: '⊘ Esclusioni',
  },
  NL: {
    heroTitle: 'Dienstencatalogus',
    heroSub:
      'Gestructureerde servicemodules met heldere afbakening, gedocumenteerde overdracht en op naleving gerichte uitvoering.',
    deliverables: '✓ Opleveringen',
    boundaries: '⊘ Buiten Scope',
  },
  PL: {
    heroTitle: 'Katalog Usług',
    heroSub:
      'Strukturyzowane moduły usługowe z jasnym rozgraniczeniem, udokumentowanym przekazaniem i realizacją zorientowaną na zgodność.',
    deliverables: '✓ Zakres Usługi',
    boundaries: '⊘ Wyłączenia',
  },
}

// Full 7-card translations across all 8 languages (0 to 6)
const cardIndexTranslations: Record<
  string,
  Array<{ title: string; description: string; deliverables: string[]; boundaries?: string[] }>
> = {
  HU: [
    {
      title: 'Szállítási Támogatás és Projekt Helyreállítás',
      description:
        'Stabilizációs és átadás-központú támogatás szállítási nyomás, nyitott pontok és tisztázatlan felelősségek esetén.',
      deliverables: [
        'Helyzetfelmérés és probléma-backlog (kockázat és hatás szerinti priorizálás)',
        'Stabilizációs sprint (korlátozás, gyors győzelmek, javítási terv)',
        'Tiszta átadás (RACI, Runbookok, nyitott kockázatok, következő lépések)',
        'Minőségbiztosítási és átvételi ellenőrzőlisták (kritériumok, igazolások, maradványpontok)',
        'Kommunikációs és eszkalációs struktúra (státuszformátum, érdekelt felek térképe)',
        'Tanulságok dokumentációja',
      ],
      boundaries: [
        'Operatív vonalvezetés / L1-L2 támogatás',
        'Szoftverfejlesztés vagy egyedi kódolás',
      ],
    },
    {
      title: 'Adat- és Jelentéskészítési Alapok',
      description:
        'Adat- és jelentéskészítési alapok kiépítése világos definíciókkal, adatminőség-ellenőrzéssel és nyomon követhető KPI-logikával.',
      deliverables: [
        'KPI- és mátrix-katalógus (definíciók, számítási logika, adatforrások)',
        'Adatmodell-alapok (feltérképezés, felelősségek, adatfolyamok)',
        'Adatminőség-ellenőrzések (teljesség, duplikációk, hihetőség, konzisztencia)',
        'Műszerfal- és jelentés-prototípusok (korlátozott terjedelmű, iteratív, ellenőrizhető)',
        'Üzemeltetési és továbbfejlesztési dokumentáció (adatszótár, módosítási logika)',
        'Adatvédelmi és megőrzési koncepció',
      ],
      boundaries: ['Adatbázis-architektúra átalakítása', 'Folyamatos adatelemzési üzemeltetés'],
    },
    {
      title: 'Felhő és Modern Munkahelyi Üzemeltetés',
      description:
        'Operatív támogatás Microsoft 365/Azure környezetekhez, beleértve az identitásokat, végpontokat, irányítást és monitorozást.',
      deliverables: [
        'Üzemeltetési folyamatok felhőszolgáltatásokhoz (incidens/kérés/módosítás ITIL-logika szerint)',
        'Identitás- és hozzáférés-beállítás (MFA, feltételes hozzáférés, szerepkörök, PIM)',
        'Végpontkezelési szabványok (szabálykészlet, eszközszabványok, megfelelőségi irányelvek)',
        'Bérlői és szolgáltatásirányítás (névkonvenciók, életciklus, jogosultságok)',
        'Monitorozási és riasztási alapok (integráció a meglévő rendszerekbe)',
        'Átadási dokumentáció (adminisztrációs kézikönyv, runbookok, üzemeltetési határok)',
      ],
      boundaries: [
        '24/7 Call-Center L1 támogatás',
        'Harmadik féltől származó hardverek fizikai javítása',
      ],
    },
    {
      title: 'EU Tenderek és Beszerzési Támogatás',
      description:
        'Tenderre kész dokumentáció, ajánlati struktúra és ellenőrizhető előkészítés a közbeszerzési és EU-s eljárásokhoz.',
      deliverables: [
        'Tender-Readiness csomag (vállalati profil, teljesítménylap, melléklet-struktúra)',
        'Megfelelőségi és adatvédelmi modulok (GDPR, TOMS, adatfeldolgozási logika)',
        'Szállítási és szolgáltatási koncepció (kiterjedés, elhatárolás, feltételezések, kizárások)',
        'Kockázatértékelés és intézkedési terv (szállítási, határidő- és minőségi kockázatok)',
        'Ár- és teljesítménystruktúra (modulok, opciók, SLA-logika)',
        'Ellenőrizhető mellékletek (RACI, folyamatábrázolás, átadási koncepció, referenciaszövegek)',
      ],
      boundaries: [
        'Nincs garancia a nyertes pályázatra vagy sikerre',
        'Nincs jogi tanácsadás',
        'Nincs tartalom-bővítés jóváhagyott módosítási folyamat nélkül',
        'Nincs felelősségvállalás harmadik felek pályázati tartalmáért',
      ],
    },
    {
      title: 'Szervezeti Biztonság & Alapbeállítások',
      description:
        'Biztonságorientált megvalósítás alapvető keményítéssel, kockázati áttekintéssel és auditálható igazolásokkal.',
      deliverables: [
        'Baseline-Hardening ellenőrzőlista (rendszerspecifikus, CIS/BSI-orientált)',
        'Kockázat- és intézkedéslista (valószínűség és hatás szerint priorizálva)',
        'Lognaplózási és monitorozási ajánlások (minimális, célhoz kötött, GDPR-konform)',
        'Dokumentáció felülvizsgálathoz és audithoz (műszaki igazolások, konfigurációs exportok)',
        'Szerepkör-elv és Least-Privilege koncepció',
        'Incidens-kezelési alapok (eszkaláció, kommunikáció, korlátozás)',
      ],
      boundaries: [
        'Nincs behatolási tesztelés külön megbízás és jogi jóváhagyás nélkül',
        'Nincs garantált abszolút biztonság',
        'Nincs követési/analitikai eszközök bevezetése dokumentált koncepció nélkül',
        'Nincs tanúsítási tanácsadás (ISO 27001, BSI IT-Grundschutz) külön megbízás nélkül',
      ],
    },
    {
      title: 'Rendszerintegráció & Interfészek',
      description:
        'Meglévő rendszerek integrációja API-kon, ETL-folyamatokon vagy köztes szoftvereken keresztül, dokumentált adatfolyamokkal.',
      deliverables: [
        'Interfész-leírás (adatmezők, hitelesítés, hibakezelés, újrapróbálkozási logika)',
        'Integrációs és folyamatdiagramok (műszakilag nyomon követhető, UML/BPMN)',
        'Tesztetek és átvételi kritériumok (funkcionális, biztonsági, határesetek)',
        'Üzemeltetési és monitorozási útmutató az integrációhoz',
        'Adatfolyam-dokumentáció (forrás, transzformáció, cél, megőrzés)',
        'Hibakezelési és naplózási koncepció',
      ],
      boundaries: [
        'Személyes adatok különleges kategóriáinak (GDPR 9. cikk) feldolgozása kizárt',
        'Nincs élesítés tesztigazolás és dokumentált Change-folyamat nélkül',
        'Nincs tartós adattárolás a megállapodott rendszereken és célokon kívül',
        'Nincs garancia az adatminőségre a forrásrendszer hiányos validációja esetén',
      ],
    },
    {
      title: 'IT Szolgáltatás & Üzemeltetési Támogatás',
      description:
        'Támogatás a napi működésben világos szolgáltatási modulokkal, strukturált dokumentációval és auditálható átadhatósággal.',
      deliverables: [
        'Üzemeltetési és szolgáltatási dokumentáció (Runbookok, Standard Operating Procedures)',
        'Incidens- / kérelem- / módosítási folyamatok (ITSM-integráció)',
        'Szolgáltatási áttekintés a felelősségekkel (RACI-mátrix)',
        'Átadási és betanítási anyagok az üzemeltető csapatok számára',
        'Monitorozási és riasztási alapok (integráció a meglévő rendszerekbe)',
        'Eszkalációs és kommunikációs struktúra',
      ],
      boundaries: [
        'Nincs 24/7 üzemeltetés kifejezett megállapodás és SLA nélkül',
        'Nincs módosítás az éles rendszereken dokumentált Change-folyamat nélkül',
        'Nincs licenc- vagy szolgáltatói szerződések átvállalása külön megbízás nélkül',
        'Nincs felelősségvállalás a meglévő korábbi architektúrákért teljes átláthatóság nélkül',
      ],
    },
  ],
  EN: [
    {
      title: 'Delivery Support & Project Recovery',
      description:
        'Stabilization and handover-oriented support under delivery pressure, open issues, and unresolved responsibilities.',
      deliverables: [
        'As-is assessment & problem backlog (prioritized by risk and impact)',
        'Stabilization sprint (containment, quick wins, fix plan)',
        'Clean handover (RACI, runbooks, open risks, next steps)',
        'QA and acceptance checklists (criteria, proofs, residual items)',
        'Communication and escalation structure (status format, stakeholder map)',
        'Lessons learned documentation',
      ],
      boundaries: [
        'Operational line management / L1-L2 support',
        'Software development or custom coding',
      ],
    },
    {
      title: 'Data & Reporting Foundations',
      description:
        'Establishment of data and reporting foundations with clear definitions, data quality checks, and traceable KPI logic.',
      deliverables: [
        'KPI and metrics catalog (definitions, calculation logic, data sources)',
        'Data model foundations (mapping, responsibilities, data flows)',
        'Data quality checks (completeness, duplicates, plausibility, consistency)',
        'Dashboard and report prototypes (scope-limited, iterative, verifiable)',
        'Documentation for operation and further development (data dictionary, change logic)',
        'Data protection and retention concept',
      ],
      boundaries: ['Database architecture overhaul', 'Continuous data analysis operations'],
    },
    {
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operational support for Microsoft 365/Azure environments including identities, endpoints, governance, and monitoring.',
      deliverables: [
        'Operational processes for cloud services (incident/request/change according to ITIL logic)',
        'Identity and access setup (MFA, conditional access, role models, PIM)',
        'Endpoint management standards (policy set, device standards, compliance policies)',
        'Tenant and service governance (naming conventions, lifecycle, permissions)',
        'Monitoring and alerting foundations (integration into existing systems)',
        'Handover documentation (admin handbook, runbooks, operational boundaries)',
      ],
      boundaries: ['24/7 Call-center L1 support', 'Physical repair of third-party hardware'],
    },
    {
      title: 'EU Tender & Procurement Enablement',
      description:
        'Support for tender-ready documentation, proposal structure, and verifiable preparation for public procurement and EU tenders.',
      deliverables: [
        'Tender-Readiness Pack (company profile, service sheet, annex structure)',
        'Compliance and privacy modules (GDPR, TOMS, data processing logic)',
        'Delivery and service concept (scope, boundaries, assumptions, exclusions)',
        'Risk assessment and action plan (delivery, timeline, quality risks)',
        'Pricing and service structure (modules, options, SLA logic as needed)',
        'Auditable annexes (RACI, process mapping, handover concept, reference texts)',
      ],
      boundaries: [
        'No guarantee of award or success (decision rests with awarding bodies)',
        'No legal advice (tender and legal questions via specialized legal department)',
        'No content expansion without agreed change process',
        'No liability assumed for third-party tender content',
      ],
    },
    {
      title: 'Security-by-Design & Baseline Hardening',
      description:
        'Security-oriented implementation with baseline hardening, risk and action overview without blanket certificate claims.',
      deliverables: [
        'Baseline hardening checklist (system-specific, CIS/BSI-oriented)',
        'Risk and action list (prioritized by probability and impact)',
        'Logging and monitoring recommendations (minimal, purpose-bound, GDPR-compliant)',
        'Documentation for review and audit (technical proofs, configuration exports)',
        'Role principle and Least-Privilege concept',
        'Incident response foundations (escalation, communication, containment)',
      ],
      boundaries: [
        'No penetration testing without separate mandate, scope definition, and legal approval',
        'No security guarantees (results are context-dependent and point-in-time)',
        'No tracking/analytics implementation without documented consent concept',
        'No certification consulting (ISO 27001, BSI IT-Grundschutz) without separate mandate',
      ],
    },
    {
      title: 'System Integration & Interfaces',
      description:
        'Integration of existing systems via APIs, ETL processes, or middleware with traceable data flows and documented interfaces.',
      deliverables: [
        'Interface description (data fields, authentication, error handling, retry logic)',
        'Integration and flow diagrams (technically traceable, UML/BPMN)',
        'Test cases and acceptance criteria (functional, security-relevant, edge cases)',
        'Operations and monitoring notes for integration',
        'Data flow documentation (source, transformation, target, retention)',
        'Error handling and logging concept',
      ],
      boundaries: [
        'No processing of special categories of personal data (Art. 9 GDPR) without separate review',
        'No production deployment without acceptance test proof and documented change process',
        'No permanent data retention outside agreed systems and purposes',
        'No data quality guarantee in case of missing source system validations',
      ],
    },
    {
      title: 'IT Service & Operations Support',
      description:
        'Support in ongoing operations with clear service modules, structured documentation, and auditable handover capability.',
      deliverables: [
        'Operations and service documentation (Runbooks, Standard Operating Procedures)',
        'Incident/Request/Change processes (definition, customization, ITSM integration)',
        'Service overview including responsibilities (RACI matrix as needed)',
        'Handover and onboarding documents for operations teams',
        'Monitoring and alerting foundations (integration into existing systems)',
        'Escalation and communication structure',
      ],
      boundaries: [
        'No 24/7 operations without explicit agreement and SLA definition',
        'No changes to production systems without documented change process and approval',
        'No assumption of license or provider contracts without separate mandate',
        'No liability for legacy architectures without full transparency and documentation',
      ],
    },
  ],
  FR: [
    {
      title: 'Support à la Livraison et Redressement de Projet',
      description:
        'Assistance axée sur la stabilisation et le transfert sous pression de livraison, points ouverts et responsabilités non définies.',
      deliverables: [
        "Évaluation de l'état actuel et backlog des problèmes (priorisé par risque et impact)",
        'Sprint de stabilisation (confinement, victoires rapides, plan de résolution)',
        'Passage de relais propre (RACI, Runbooks, risques ouverts, étapes suivantes)',
        "Check-lists d'assurance qualité et de recette (critères, preuves, points résiduels)",
        "Structure de communication et d'escalade (format d'état, carte des parties prenantes)",
        'Documentation des leçons apprises',
      ],
      boundaries: [
        'Gestion de ligne opérationnelle / Support L1-L2',
        'Développement logiciel ou codage spécifique',
      ],
    },
    {
      title: 'Fondations Données et Reporting',
      description:
        'Mise en place de bases de données et de reporting avec des définitions claires, des contrôles de qualité et une logique KPI traçable.',
      deliverables: [
        'Catalogue de KPI et métriques (définitions, logique de calcul, sources de données)',
        'Fondations du modèle de données (cartographie, responsabilités, flux de données)',
        'Contrôles de qualité des données (exhaustivité, doublons, plausibilité, cohérence)',
        'Prototypes de tableaux de bord et rapports (périmètre limité, itératifs, vérifiables)',
        "Documentation pour l'exploitation et les évolutions (dictionnaire de données, logique de changement)",
        'Concept de protection et de conservation des données',
      ],
      boundaries: [
        "Refonte de l'architecture de base de données",
        "Opérations d'analyse de données en continu",
      ],
    },
    {
      title: 'Opérations Cloud et Modern Workplace',
      description:
        'Support opérationnel pour les environnements Microsoft 365/Azure, incluant identités, postes de travail, gouvernance et supervision.',
      deliverables: [
        'Processus opérationnels pour les services Cloud (Incidents/Demandes/Changements selon la logique ITIL)',
        'Configuration des identités et des accès (MFA, accès conditionnel, modèles de rôles, PIM)',
        "Normes de gestion des points de terminaison (jeu de politiques, normes d'équipements, conformité)",
        'Gouvernance du tenant et des services (conventions de nommage, cycle de vie, autorisations)',
        "Bases de supervision et d'alerte (intégration dans les systèmes existants)",
        "Documentation de transfert (manuel d'administration, runbooks, limites opérationnelles)",
      ],
      boundaries: ["Support L1 centre d'appels 24/7", 'Réparation physique de matériel tiers'],
    },
    {
      title: "Appels d'Offres UE & Support Achats",
      description:
        "Documentation prête pour les appels d'offres, structure de proposition et préparation vérifiable pour les marchés publics.",
      deliverables: [
        "Pack Tender-Readiness (profil d'entreprise, fiche de service, structure d'annexes)",
        'Modules de conformité et de confidentialité (RGPD, TOMS, logique de traitement des données)',
        'Concept de livraison et de service (périmètre, limites, hypothèses, exclusions)',
        "Évaluation des risques et plan d'action (risques de livraison, de calendrier, de qualité)",
        'Structure de prix et de services (modules, options, logique SLA selon les besoins)',
        'Annexes vérifiables (RACI, cartographie des processus, concept de transfert)',
      ],
      boundaries: [
        "Aucune garantie d'attribution ou de succès",
        'Aucun conseil juridique',
        "Pas d'extension du contenu sans processus de changement validé",
        "Aucune responsabilité pour le contenu des appels d'offres tiers",
      ],
    },
    {
      title: 'Sécurité dès la Conception & Durcissement',
      description:
        'Mise en œuvre axée sur la sécurité avec durcissement de base, aperçu des risques et preuves vérifiables.',
      deliverables: [
        'Liste de contrôle de durcissement de base (spécifique au système, orientée CIS/BSI)',
        'Liste des risques et actions (priorisée par probabilité et impact)',
        'Recommandations de journalisation et supervision (minimales, conformes au RGPD)',
        'Documentation pour examen et audit (preuves techniques, exports de configuration)',
        'Principe des rôles et concept du moindre privilège',
        'Bases de réponse aux incidents (escalade, communication, confinement)',
      ],
      boundaries: [
        'Pas de tests de pénétration sans mandat séparé et approbation juridique',
        'Aucune garantie de sécurité absolue',
        "Pas de mise en œuvre d'outils de suivi sans concept de consentement",
        'Pas de conseil en certification (ISO 27001) sans mandat séparé',
      ],
    },
    {
      title: 'Intégration de Systèmes & Interfaces',
      description:
        'Intégration des systèmes existants via API, processus ETL ou middleware avec flux de données traçables.',
      deliverables: [
        'Description des interfaces (champs de données, authentification, gestion des erreurs)',
        "Diagrammes d'intégration et de flux (techniquement traçables, UML/BPMN)",
        'Cas de test et critères de recette (fonctionnels, de sécurité, cas limites)',
        "Notes d'exploitation et de supervision pour l'intégration",
        'Documentation des flux de données (source, transformation, cible, conservation)',
        'Concept de gestion des erreurs et de journalisation',
      ],
      boundaries: [
        'Traitement des catégories particulières de données personnelles (Art. 9 RGPD) exclu',
        "Pas de mise en production sans preuve de test d'acceptation",
        'Pas de conservation permanente des données hors systèmes convenus',
        'Pas de garantie de qualité des données en cas de validations défaillantes des systèmes sources',
      ],
    },
    {
      title: 'Services IT & Support Opérationnel',
      description:
        'Soutien dans les opérations quotidiennes avec des modules de service clairs et une capacité de transfert vérifiable.',
      deliverables: [
        "Documentation d'exploitation et de service (Runbooks, Procédures Opérationnelles Standards)",
        "Processus d'incidents/demandes/changements (définition, intégration ITSM)",
        'Aperçu des services incluant les responsabilités (Matrice RACI)',
        "Documents de transfert et d'intégration pour les équipes d'exploitation",
        "Bases de supervision et d'alerte (intégration dans les systèmes existants)",
        "Structure d'escalade et de communication",
      ],
      boundaries: [
        'Pas de fonctionnement 24/7 sans accord explicite et définition SLA',
        'Pas de modifications des systèmes de production sans processus de changement',
        'Pas de reprise de contrats de licences ou de fournisseurs',
        'Aucune responsabilité pour les architectures anciennes sans transparence totale',
      ],
    },
  ],
  ES: [
    {
      title: 'Soporte de Entrega y Recuperación de Proyectos',
      description:
        'Asistencia orientada a la estabilización y transferencia bajo presión de entrega, puntos pendientes y responsabilidades no resueltas.',
      deliverables: [
        'Evaluación del estado actual y backlog de problemas (priorizado por riesgo e impacto)',
        'Sprint de estabilización (contención, victorias rápidas, plan de solución)',
        'Transferencia limpia (RACI, Runbooks, riesgos abiertos, siguientes pasos)',
        'Checklists de control de calidad y aceptación (criterios, pruebas, puntos pendientes)',
        'Estructura de comunicación y escalamiento (formato de estado, mapa de partes interesadas)',
        'Documentación de lecciones aprendidas',
      ],
      boundaries: [
        'Gestión operativa de línea / Soporte L1-L2',
        'Desarrollo de software o código personalizado',
      ],
    },
    {
      title: 'Fundamentos de Datos e Informes',
      description:
        'Construcción de bases de datos e informes con definiciones claras, verificaciones de calidad de datos y lógica KPI trazable.',
      deliverables: [
        'Catálogo de KPIs y métricas (definiciones, lógica de cálculo, fuentes de datos)',
        'Fundamentos del modelo de datos (mapeo, responsabilidades, flujos de datos)',
        'Controles de calidad de datos (completitud, duplicados, plausibilidad, consistencia)',
        'Prototipos de paneles e informes (alcance limitado, iterativos, verificables)',
        'Documentación para operación y desarrollo posterior (diccionario de datos, lógica de cambios)',
        'Concepto de protección de datos y retención',
      ],
      boundaries: [
        'Reorganización de arquitectura de base de datos',
        'Operaciones continuas de análisis de datos',
      ],
    },
    {
      title: 'Operaciones de Nube y Puesto de Trabajo Moderno',
      description:
        'Soporte operativo para entornos orientados a Microsoft 365/Azure, incluyendo identidades, dispositivos finales, gobernanza y monitoreo.',
      deliverables: [
        'Procesos operativos para servicios en la nube (Incidencias/Solicitudes/Cambios según lógica ITIL)',
        'Configuración de identidad y acceso (MFA, acceso condicional, roles, PIM)',
        'Estándares de gestión de endpoints (conjunto de directivas, estándares de dispositivos, políticas de cumplimiento)',
        'Gobernanza de inquilinos y servicios (convenciones de nomenclatura, ciclo de vida, permisos)',
        'Fundamentos de monitoreo y alertas (integración en sistemas existentes)',
        'Documentación de entrega (manual de administración, runbooks, límites operativos)',
      ],
      boundaries: ['Soporte L1 de call-center 24/7', 'Reparación física de hardware de terceros'],
    },
    {
      title: 'Licitaciones UE y Soporte de Contratación',
      description:
        'Documentación lista para licitaciones, estructura de propuestas y preparación verificable para contratación pública.',
      deliverables: [
        'Paquete Tender-Readiness (perfil de empresa, hoja de servicio, estructura de anexos)',
        'Módulos de cumplimiento y privacidad (RGPD, TOMS, lógica de procesamiento)',
        'Concepto de entrega y servicio (alcance, límites, supuestos, exclusiones)',
        'Evaluación de riesgos y plan de acción (riesgos de entrega, plazo, calidad)',
        'Estructura de precios y servicios (módulos, opciones, lógica de SLA)',
        'Anexos auditales (RACI, mapeo de procesos, concepto de entrega)',
      ],
      boundaries: [
        'Sin garantía de adjudicación o éxito',
        'Sin asesoramiento legal',
        'Sin ampliación de contenido sin proceso de cambio acordado',
        'Sin responsabilidad asumida por el contenido de licitaciones de terceros',
      ],
    },
    {
      title: 'Seguridad por Diseño y Fortalecimiento Base',
      description:
        'Implementación orientada a la seguridad con fortalecimiento base, resumen de riesgos y pruebas auditables.',
      deliverables: [
        'Lista de verificación de fortalecimiento base (específica del sistema, orientada a CIS/BSI)',
        'Lista de riesgos y acciones (priorizada por probabilidad e impacto)',
        'Recomendaciones de registro y monitoreo (mínimas, conformes con RGPD)',
        'Documentación para revisión y auditoría (pruebas técnicas, exportación de configuración)',
        'Principio de roles y concepto de privilegio mínimo',
        'Fundamentos de respuesta a incidentes (escalamiento, comunicación, contención)',
      ],
      boundaries: [
        'Sin pruebas de penetración sin mandato independiente y aprobación legal',
        'Sin garantías de seguridad absoluta',
        'Sin implementación de herramientas de rastreo sin concepto de consentimiento',
        'Sin consultoría de certificación (ISO 27001) sin mandato independiente',
      ],
    },
    {
      title: 'Integración de Sistemas e Interfaces',
      description:
        'Integración de sistemas existentes a través de APIs, procesos ETL o middleware con flujos de datos trazables.',
      deliverables: [
        'Descripción de interfaz (campos de datos, autenticación, gestión de errores, lógica de reintento)',
        'Diagramas de integración y flujo (técnicamente trazables, UML/BPMN)',
        'Casos de prueba y criterios de aceptación (funcionales, de seguridad, casos límite)',
        'Notas de operaciones y monitoreo para la integración',
        'Documentación de flujo de datos (origen, transformación, destino, retención)',
        'Concepto de gestión de errores y registro',
      ],
      boundaries: [
        'Tratamiento de categorías especiales de datos personales (Art. 9 RGPD) excluido',
        'Sin despliegue en producción sin prueba de aceptación',
        'Sin retención permanente de datos fuera de los sistemas acordados',
        'Sin garantía de calidad de datos en caso de validaciones de origen deficientes',
      ],
    },
    {
      title: 'Servicio TI y Soporte de Operaciones',
      description:
        'Soporte en operaciones continuas con módulos de servicio claros, documentación estructurada y capacidad de entrega auditable.',
      deliverables: [
        'Documentación de operaciones y servicio (Runbooks, Procedimientos Operativos Estándar)',
        'Procesos de incidencias/solicitudes/cambios (definición, integración ITSM)',
        'Resumen de servicio incluyendo responsabilidades (Matriz RACI)',
        'Documentos de entrega e incorporación para equipos de operaciones',
        'Fundamentos de monitoreo y alertas (integración en sistemas existentes)',
        'Estructura de escalamiento y comunicación',
      ],
      boundaries: [
        'Sin operaciones 24/7 sin acuerdo explícito y definición de SLA',
        'Sin cambios en sistemas de producción sin proceso de cambio documentado',
        'Sin asunción de contratos de licencias o proveedores',
        'Sin responsabilidad por arquitecturas heredadas sin transparencia total',
      ],
    },
  ],
  IT: [
    {
      title: 'Supporto alla Consegna e Recupero Progetti',
      description:
        'Supporto orientato alla stabilizzazione e al passaggio di consegne in situazioni di pressione sui tempi, punti aperti e responsabilità non definite.',
      deliverables: [
        'Valutazione dello stato attuale e backlog dei problemi (prioritizzazione per rischio e impatto)',
        'Sprint di stabilizzazione (contenimento, vittorie rapide, piano di risoluzione)',
        'Passaggio di consegne pulito (RACI, Runbook, rischi aperti, passaggi successivi)',
        'Checklist di garanzia della qualità e collaudo (criteri, verifiche, elementi residui)',
        'Struttura di comunicazione ed escalation (formato di stato, mappa degli stakeholder)',
        'Documentazione delle lezioni apprese',
      ],
      boundaries: [
        'Gestione operativa di linea / Supporto L1-L2',
        'Sviluppo software o codice personalizzato',
      ],
    },
    {
      title: 'Fondamenta Dati e Reportistica',
      description:
        'Creazione delle basi per dati e reportistica con definizioni chiare, controlli di qualità dei dati e logica KPI tracciabile.',
      deliverables: [
        'Catalogo KPI e metriche (definizioni, logica di calcolo, fonti dati)',
        'Fondamenta del modello dati (mappatura, responsabilità, flussi dati)',
        'Controlli di qualità dei dati (completezza, duplicati, plausibilità, coerenza)',
        'Prototipi di dashboard e report (ambito limitato, iterativi, verificabili)',
        "Documentazione per l'operatività e lo sviluppo ulteriore (dizionario dati, logica di modifica)",
        'Concetto di protezione e conservazione dei dati',
      ],
      boundaries: [
        "Ristrutturazione dell'architettura del database",
        'Operazioni di analisi dati continua',
      ],
    },
    {
      title: 'Operatività Cloud e Modern Workplace',
      description:
        'Supporto operativo per ambienti Microsoft 365/Azure, inclusi identità, dispositivi, governance e monitoraggio.',
      deliverables: [
        'Processi operativi per servizi cloud (incidenti/richieste/modifiche secondo logica ITIL)',
        'Configurazione identità e accessi (MFA, accesso condizionale, ruoli, PIM)',
        'Standard di gestione degli endpoint (set di policy, standard dispositivi, policy di conformità)',
        'Governance tenant e servizi (convenzioni di denominazione, ciclo di vita, autorizzazioni)',
        'Fondamenta di monitoraggio e avvisi (integrazione nei sistemi esistenti)',
        'Documentazione di consegna (manuale di amministrazione, runbook, limiti operativi)',
      ],
      boundaries: ['Supporto L1 call-center 24/7', 'Riparazione fisica di hardware di terze parti'],
    },
    {
      title: "Gare d'Appalto UE e Supporto Procurement",
      description:
        "Documentazione pronta per gare d'appalto, struttura di proposta e preparazione verificabile per gli appalti pubblici.",
      deliverables: [
        'Pacchetto Tender-Readiness (profilo aziendale, scheda servizio, struttura allegati)',
        'Moduli di conformità e privacy (GDPR, TOMS, logica di trattamento dati)',
        'Concetto di consegna e servizio (ambito, limiti, presupposti, esclusioni)',
        "Valutazione dei rischi e piano d'azione (rischi di consegna, tempistiche, qualità)",
        'Struttura dei prezzi e dei servizi (moduli, opzioni, logica SLA)',
        'Allegati verificabili (RACI, mappatura processi, concetto di consegna)',
      ],
      boundaries: [
        'Nessuna garanzia di aggiudicazione o successo',
        'Nessuna consulenza legale',
        'Nessuna estensione del contenuto senza processo di modifica approvato',
        'Nessuna responsabilità assunta per i contenuti di gare di terzi',
      ],
    },
    {
      title: 'Sicurezza Fin dalla Progettazione & Hardening',
      description:
        'Implementazione orientata alla sicurezza con hardening di base, panoramica dei rischi e prove verificabili.',
      deliverables: [
        'Checklist di hardening di base (specifica per sistema, orientata CIS/BSI)',
        'Elenco rischi e azioni (prioritizzato per probabilità e impatto)',
        'Raccomandazioni di registrazione e monitoraggio (minime, conformi al GDPR)',
        'Documentazione per revisione e audit (prove tecniche, esportazioni configurazione)',
        'Principio dei ruoli e concetto di privilegio minimo',
        'Fondamenta di risposta agli incidenti (escalation, comunicazione, contenimento)',
      ],
      boundaries: [
        'Nessun penetration test senza mandato separato e approvazione legale',
        'Nessuna garanzia di sicurezza assoluta',
        'Nessuna implementazione di strumenti di tracciamento senza consenso',
        'Nessuna consulenza di certificazione (ISO 27001) senza mandato separato',
      ],
    },
    {
      title: 'Integrazione di Sistemi e Interfacce',
      description:
        'Integrazione dei sistemi esistenti tramite API, processi ETL o middleware con flussi dati tracciabili.',
      deliverables: [
        'Descrizione interfaccia (campi dati, autenticazione, gestione errori, logica di remapping)',
        'Diagrammi di integrazione e flusso (tecnicamente tracciabili, UML/BPMN)',
        'Casi di test e criteri di collaudo (funzionali, di sicurezza, casi limite)',
        "Note operative e di monitoraggio per l'integrazione",
        'Documentazione flusso dati (origine, trasformazione, destinazione, conservazione)',
        'Concetto di gestione errori e registrazione',
      ],
      boundaries: [
        'Trattamento di categorie particolari di dati personali (Art. 9 GDPR) escluso',
        'Nessuna messa in produzione senza prova di collaudo',
        'Nessuna conservazione permanente dei dati fuori dai sistemi concordati',
        'Nessuna garanzia di qualità dati in caso di validazioni di origine mancanti',
      ],
    },
    {
      title: 'Servizi IT e Supporto Operativo',
      description:
        'Supporto nelle operazioni quotidiane con moduli di servizio chiari, documentazione strutturata e collaudabilità.',
      deliverables: [
        'Documentazione operativa e di servizio (Runbook, Procedure Operative Standard)',
        'Processi di incidenti/richieste/modifiche (definizione, integrazione ITSM)',
        'Panoramica dei servizi con responsabilità (Matrice RACI)',
        'Documenti di consegna e onboarding per i team operativi',
        'Fondamenta di monitoraggio e avvisi (integrazione nei sistemi esistenti)',
        'Struttura di escalation e comunicazione',
      ],
      boundaries: [
        'Nessun funzionamento 24/7 senza accordo esplicito e definizione SLA',
        'Nessuna modifica ai sistemi di produzione senza processo di modifica documentato',
        'Nessun subentro in contratti di licenza o fornitori',
        'Nessuna responsabilità per architetture legacy senza piena trasparenza',
      ],
    },
  ],
  NL: [
    {
      title: 'Opleverondersteuning & Projectherstel',
      description:
        'Ondersteuning gericht op stabilisatie en overdracht onder opleverdruk, openstaande punten en onduidelijke verantwoordelijkheden.',
      deliverables: [
        'Nulmeting en probleem-backlog (geprioriteerd op risico en impact)',
        'Stabilisatiesprint (beheersing, snelle winst, herstelplan)',
        "Schone overdracht (RACI, Runbooks, openstaande risico's, vervolgstappen)",
        'Kwaliteitsborging en acceptatiechecklists (criteria, bewijzen, restpunten)',
        'Communicatie- en escalatiestructuur (statusformaat, stakeholderkaart)',
        'Documentatie van geleerde lessen',
      ],
      boundaries: [
        'Lijnmanagement / L1-L2 ondersteuning',
        'Softwareontwikkeling of maatwerkcodering',
      ],
    },
    {
      title: 'Data- & Rapportagefundamenten',
      description:
        'Opbouw van data- en rapportagebasis met duidelijke definities, datakwaliteitscontroles en traceerbare KPI-logica.',
      deliverables: [
        'KPI- en metricscatalogus (definies, berekeningslogica, databronnen)',
        'Datamodel-fundamenten (mapping, verantwoordelijkheden, datastromen)',
        'Datakwaliteitscontroles (volledigheid, duplicaten, plausibiliteit, consistentie)',
        'Dashboard- en rapportprototypes (beperkte scope, iteratief, verifieerbaar)',
        'Documentatie voor beheer en doorontwikkeling (datawoordenboek, wijzigingslogica)',
        'Databeschermings- en bewaarconcept',
      ],
      boundaries: [
        'Herziening van database-architectuur',
        'Continu datageneratie- en analysebeheer',
      ],
    },
    {
      title: 'Cloud & Modern Workplace Operations',
      description:
        'Operationele ondersteuning voor Microsoft 365/Azure-omgevingen inclusief identiteiten, endpoints, governance en monitoring.',
      deliverables: [
        'Operationele processen voor cloudservices (incident/request/change volgens ITIL-logica)',
        'Identiteits- en toegangsinrichting (MFA, conditional access, rolmodellen, PIM)',
        'Endpoint management-standaarden (beleidsset, apparaatstandaarden, compliancebeleid)',
        'Tenant- en servicegovernance (naamconventies, levenscyclus, rechten)',
        'Monitoring- en alertfundamenten (integratie in bestaande systemen)',
        'Overdrachtsdocumentatie (beheerdershandboek, runbooks, operationele grenzen)',
      ],
      boundaries: ['24/7 Callcenter L1-ondersteuning', 'Fysieke reparatie van hardware van derden'],
    },
    {
      title: 'EU-Tenders & Inkoopondersteuning',
      description:
        'Tender-klare documentatie, voorstelstructuur en verifieerbare voorbereiding voor openbare aanbestedingen.',
      deliverables: [
        'Tender-Readiness Pack (bedrijfsprofiel, serviceblad, bijlagenstructuur)',
        'Compliance- en privacymodules (AVG, TOMS, verwerkingslogica)',
        'Leverings- en serviceconcept (scope, grenzen, aannames, uitsluitingen)',
        "Risicobeoordeling en actieplan (leverings-, plannings- en kwaliteitsrisico's)",
        'Prijs- en servicestructuur (modules, opties, SLA-logica)',
        'Auditeerbare bijlagen (RACI, procesmapping, overdrachtsconcept)',
      ],
      boundaries: [
        'Geen garantie op gunning of succes',
        'Geen juridisch advies',
        'Geen inhoudelijke uitbreiding zonder goedgekeurd wijzigingsproces',
        'Geen aansprakelijkheid voor tenderinhoud van derden',
      ],
    },
    {
      title: 'Security-by-Design & Hardening',
      description:
        'Beveiligingsgerichte uitvoering met baseline hardening, risico-overzicht en auditeerbare bewijzen.',
      deliverables: [
        'Baseline hardening-checklist (systeemspecifiek, CIS/BSI-gericht)',
        'Risico- en actielijst (geprioriteerd op waarschijnlijkheid en impact)',
        'Aanbevelingen voor loggin en monitoring (minimaal, AVG-conform)',
        'Documentatie voor controle en audit (technische bewijzen, configuratie-exports)',
        'Rollenprincipe en Least-Privilege-concept',
        'Incident response-basis (escalatie, communicatie, beheersing)',
      ],
      boundaries: [
        'Geen penetratietesten zonder afzonderlijk mandaat en juridische goedkeuring',
        'Geen absolute beveiligingsgaranties',
        'Geen implementatie van tracking-tools zonder toestemmingsconcept',
        'Geen certificeringsadvies (ISO 27001) zonder afzonderlijk mandaat',
      ],
    },
    {
      title: 'Systeemintegratie & Interfaces',
      description:
        "Integratie van bestaande systemen via API's, ETL-processen of middleware met traceerbare datastromen.",
      deliverables: [
        'Interfacebeschrijving (datavelden, authenticatie, foutafhandeling, retry-logica)',
        'Integratie- en stroomdiagrammen (technisch traceerbaar, UML/BPMN)',
        'Testcases en acceptatiecriteria (functioneel, beveiliging, randgevallen)',
        'Beheers- en monitoringnotities voor de integratie',
        'Datastroomdocumentatie (bron, transformatie, doel, bewaartermijn)',
        'Foutafhandeling en loggingconcept',
      ],
      boundaries: [
        'Verwerking van bijzondere categorieën persoonsgegevens (Art. 9 AVG) uitgesloten',
        'Geen livegang zonder acceptatietestbewijs',
        'Geen permanente databewaring buiten overeengekomen systemen',
        'Geen datakwaliteitsgarantie bij ontbrekende bronvalidaties',
      ],
    },
    {
      title: 'IT-Service & Operations Support',
      description:
        'Ondersteuning bij dagelijks beheer met heldere servicemodules, gestructureerde documentatie en overdraagbaarheid.',
      deliverables: [
        'Beheers- en servicedocumentatie (Runbooks, Standard Operating Procedures)',
        'Incident/Request/Change-processen (definitie, ITSM-integratie)',
        'Service-overzicht inclusief verantwoordelijkheden (RACI-matrix)',
        'Overdrachts- en onboardingdocumenten voor beheerteams',
        'Monitoring- en alertfundamenten (integratie in bestaande systemen)',
        'Escalatie- en communicatiestructuur',
      ],
      boundaries: [
        'Geen 24/7 beheer zonder expliciete overeenkomst en SLA-definitie',
        'Geen wijzigingen aan productiesystemen zonder gedocumenteerd change-proces',
        'Geen overname van licentie- of providercontracten',
        'Geen aansprakelijkheid voor verouderde architecturen zonder volledige transparantie',
      ],
    },
  ],
  PL: [
    {
      title: 'Wsparcie Realizacji i Naprawa Projektów',
      description:
        'Wsparcie ukierunkowane na stabilizację i przekazanie zadań pod presją czasu, przy otwartych kwestiach i niejasnych odpowiedzialnościach.',
      deliverables: [
        'Ocena stanu faktycznego i backlog problemów (priorytetyzacja według ryzyka i wpływu)',
        'Sprint stabilizacyjny (opanowanie sytuacji, szybkie wygrane, plan naprawczy)',
        'Czyste przekazanie (RACI, Runbooki, otwarte ryzyka, kolejne kroki)',
        'Listy kontrolne zapewnienia jakości i odbioru (kryteria, dowody, punkty pozostałe)',
        'Struktura komunikacji i eskalacji (format statusu, mapa interesariuszy)',
        'Dokumentacja wyciągniętych wniosków (Lessons Learned)',
      ],
      boundaries: [
        'Liniowe zarządzanie operacyjne / Wsparcie L1-L2',
        'Tworzenie oprogramowania lub dedykowany kod',
      ],
    },
    {
      title: 'Fundamenty Danych i Raportowania',
      description:
        'Budowa fundamentów danych i raportowania z jasnymi definicjami, kontrolą jakości danych i przejrzystą logiką KPI.',
      deliverables: [
        'Katalog KPI i metryk (definicje, logika obliczeń, źródła danych)',
        'Podstawy modelu danych (mapowanie, odpowiedzialności, przepływy danych)',
        'Kontrole jakości danych (kompletność, duplikaty, wiarygodność, spójność)',
        'Prototypy pulpitów nawigacyjnych i raportów (ograniczony zakres, iteracyjne, weryfikowalne)',
        'Dokumentacja operacyjna i rozwojowa (słownik danych, logika zmian)',
        'Koncepcja ochrony danych i ich przechowywania',
      ],
      boundaries: ['Przebudowa architektury bazy danych', 'Ciągłe operacje analizy danych'],
    },
    {
      title: 'Operacje Chmurowe i Nowoczesne Miejsce Pracy',
      description:
        'Wsparcie operacyjne dla środowisk Microsoft 365/Azure, w tym tożsamości, urządzeń końcowych, zarządzania i monitoringu.',
      deliverables: [
        'Procesy operacyjne dla usług chmurowych (incydenty/wnioski/zmiany zgodnie z logiką ITIL)',
        'Konfiguracja tożsamości i dostępu (MFA, dostęp warunkowy, modele ról, PIM)',
        'Standardy zarządzania urządzeniami końcowymi (zbiór polityk, standardy urządzeń, zgodność)',
        'Gubernancja dzierżawy i usług (konwencje nazewnictwa, cykl życia, uprawnienia)',
        'Podstawy monitorowania i alertów (integracja z istniejącymi systemami)',
        'Dokumentacja przekazania (podręcznik administratora, runbooki, granice operacyjne)',
      ],
      boundaries: ['Wsparcie L1 call-center 24/7', 'Fizyczna naprawa sprzętu firm trzecich'],
    },
    {
      title: 'Przetargi UE i Wsparcie Zamówień',
      description:
        'Dokumentacja gotowa do przetargów, struktura propozycji i weryfikowalne przygotowanie do zamówień publicznych.',
      deliverables: [
        'Pakiet Tender-Readiness (profil firmy, karta usług, struktura załączników)',
        'Moduły zgodności i prywatności (RODO, TOMS, logika przetwarzania danych)',
        'Koncepcja dostawy i usług (zakres, granice, założenia, wyłączenia)',
        'Ocena ryzyka i plan działań (ryzyka dostaw, harmonogramu, jakości)',
        'Struktura cenowa i usługowa (moduły, opcje, logika SLA)',
        'Załączniki audytowalne (RACI, mapowanie procesów, koncepcja przekazania)',
      ],
      boundaries: [
        'Brak gwarancji wygranej w przetargu lub sukcesu',
        'Brak doradztwa prawnego',
        'Brak rozszerzenia treści bez uzgodnionego procesu zmian',
        'Brak odpowiedzialności za treść przetargów osób trzecich',
      ],
    },
    {
      title: 'Bezpieczeństwo w Fazie Projektowania & Utwardzanie',
      description:
        'Realizacja zorientowana na bezpieczeństwo z utwardzaniem bazowym, przeglądem ryzyk i audytowalnymi dowodami.',
      deliverables: [
        'Lista kontrolna utwardzania bazowego (specyficzna dla systemu, zorientowana na CIS/BSI)',
        'Lista ryzyk i działań (priorytetyzowana wg prawdopodobieństwa i wpływu)',
        'Rekomendacje dotyczące logowania i monitoringu (minimalne, zgodne z RODO)',
        'Dokumentacja do przeglądu i audytu (dowody techniczne, eksporty konfiguracji)',
        'Zasada ról i koncepcja minimalnych uprawnień (Least Privilege)',
        'Podstawy reagowania na incydenty (eskalacja, komunikacja, opanowanie)',
      ],
      boundaries: [
        'Brak testów penetracyjnych bez osobnego mandatu i zgody prawnej',
        'Brak gwarancji bezwzględnego bezpieczeństwa',
        'Brak wdrażania narzędzi śledzących bez koncepcji zgody',
        'Brak doradztwa certyfikacyjnego (ISO 27001) bez osobnego mandatu',
      ],
    },
    {
      title: 'Integracja Systemów i Interfejsy',
      description:
        'Integracja istniejących systemów poprzez API, procesy ETL lub oprogramowanie pośredniczące.',
      deliverables: [
        'Opis interfejsu (pola danych, uwierzytelnianie, obsługę błędów, logika ponawiania)',
        'Diagramy integracji i przepływu (technicznie do prześledzenia, UML/BPMN)',
        'Przypadki testowe i kryteria odbioru (funkcjonalne, bezpieczeństwa, brzegowe)',
        'Uwagi operacyjne i monitoringowe dla integracji',
        'Dokumentacja przepływu danych (źródło, transformacja, cel, retencja)',
        'Koncepcja obsługi błędów i logowania',
      ],
      boundaries: [
        'Przetwarzanie szczególnych kategorii danych osobowych (Art. 9 RODO) wyłączone',
        'Brak wdrożenia produkcyjnego bez dowodu testu odbiorczego',
        'Brak trwałego przechowywania danych poza uzgodnionymi systemami',
        'Brak gwarancji jakości danych w przypadku braku walidacji w systemie źródłowym',
      ],
    },
    {
      title: 'Usługi IT i Wsparcie Operacyjne',
      description:
        'Wsparcie w codziennych operacjach z jasnymi modułami usługowymi, ustrukturyzowaną dokumentacją i możliwością przekazania.',
      deliverables: [
        'Dokumentacja operacyjna i usługowa (Runbooki, Standardowe Procedury Operacyjne)',
        'Procesy incydentów/wniosków/zmian (definicja, integracja z ITSM)',
        'Przegląd usług wraz z odpowiedzialnościami (Macierz RACI)',
        'Materiały przekazania i wdrażania dla zespołów operacyjnych',
        'Podstawy monitorowania i alertów (integracja z istniejącymi systemami)',
        'Struktura eskalacji i komunikacji',
      ],
      boundaries: [
        'Brak pracy w trybie 24/7 bez wyraźnej umowy i definicji SLA',
        'Brak zmian w systemach produkcyjnych bez udokumentowanego procesu zmian',
        'Brak przejmowania umów licencyjnych lub dostawców',
        'Brak odpowiedzialności za starsze architektury bez pełnej przejrzystości',
      ],
    },
  ],
}

interface PageProps {
  searchParams: Promise<{ lang?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const rawLang = resolvedParams?.lang || 'de'
  const langKey = rawLang.toUpperCase()

  const t = pageTranslations[langKey] || pageTranslations.DE

  let services: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const res = await payload.find({
      collection: 'services',
    })
    services = res.docs || []
  } catch (err) {
    console.error('Failed to fetch services from Payload:', err)
  }

  return (
    <main
      style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-primary)',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        minHeight: 'calc(100vh - 80px - 300px)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '40px 20px 80px 20px',
        }}
      >
        {/* Hero Header */}
        <section
          style={{
            marginBottom: '36px',
            borderBottom: '2px solid var(--border-color)',
            paddingBottom: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
              color: 'var(--text-primary)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {t.heroTitle}
          </h1>
          <p
            style={{
              fontWeight: '500',
              maxWidth: '680px',
              fontSize: '15px',
              lineHeight: '1.6',
              margin: 0,
              color: 'var(--text-secondary)',
            }}
          >
            {t.heroSub}
          </p>
        </section>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => {
            const translation = cardIndexTranslations[langKey]?.[index]

            const displayTitle = translation?.title || service.title
            const displayDesc = translation?.description || service.description
            const deliverablesList =
              translation?.deliverables ||
              service.deliverables?.map((d: any) => d?.item).filter(Boolean) ||
              []
            const boundariesList =
              translation?.boundaries ||
              service.boundaries?.map((b: any) => b?.item).filter(Boolean) ||
              []

            return (
              <div
                key={service.id || index}
                className="service-card"
                style={{
                  border: '2px solid var(--border-color)',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '4px 4px 0px 0px var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-card)',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease',
                }}
              >
                <div>
                  {/* Title & Tag */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '18px',
                        fontWeight: '800',
                        margin: 0,
                        lineHeight: '1.3',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {displayTitle}
                    </h2>
                    {service.categoryTag && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '4px 8px',
                          border: '1px solid var(--border-color)',
                          borderRadius: '4px',
                          whiteSpace: 'nowrap',
                          backgroundColor: 'var(--bg-tag, var(--bg-boundary))',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {service.categoryTag}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {displayDesc && (
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        margin: '0 0 24px 0',
                      }}
                    >
                      {displayDesc}
                    </p>
                  )}

                  {/* Deliverables */}
                  {deliverablesList.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3
                        style={{
                          fontSize: '12px',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-primary)',
                          margin: '0 0 8px 0',
                        }}
                      >
                        {t.deliverables}
                      </h3>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          fontSize: '12px',
                          color: 'var(--text-body, var(--text-primary))',
                        }}
                      >
                        {deliverablesList.map((itemText: string, idx: number) => (
                          <li
                            key={idx}
                            style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                          >
                            <span style={{ color: 'var(--accent, #2563eb)', fontWeight: 'bold' }}>
                              →
                            </span>
                            <span style={{ lineHeight: '1.4' }}>{itemText}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Boundaries / Out of Scope */}
                {boundariesList.length > 0 && (
                  <div
                    className="boundary-box"
                    style={{
                      backgroundColor: 'var(--bg-boundary)',
                      border: '1px solid var(--border-color)',
                      padding: '16px',
                      borderRadius: '6px',
                      marginTop: '16px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '12px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-primary)',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {t.boundaries}
                    </h3>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {boundariesList.map((itemText: string, idx: number) => (
                        <li
                          key={idx}
                          style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                        >
                          <span style={{ color: 'var(--text-secondary)' }}>×</span>
                          <span style={{ lineHeight: '1.4' }}>{itemText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
