// src/lib/translations.ts

export const pageTranslations: Record<string, Record<string, string>> = {
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

export const cardIndexTranslations: Record<
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
        'Biztonságorientált megvalósítás alapvető keményítéssel (baseline hardening), kockázati áttekintéssel és auditálható igazolásokkal.',
      deliverables: [
        'Baseline-Hardening ellenőrzőlista (systemspezifisch, CIS/BSI-orientiert)',
        'Kockázat- és intézkedéslista (priorizálva)',
        'Lognaplózási és monitorozási ajánlások (GDPR-konform)',
        'Dokumentáció felülvizsgálathoz és audithoz',
        'Szerepkör-elv és Least-Privilege koncepció',
        'Incidens-kezelési alapok',
      ],
      boundaries: [
        'Nincs behatolási tesztelés (Penetration Test) külön megbízás nélkül',
        'Nincs garantált abszolút biztonság',
        'Nincs követési/analitikai eszközök bevezetése külön jóváhagyás nélkül',
        'Nincs tanúsítási tanácsadás (ISO 27001, BSI IT-Grundschutz)',
      ],
    },
    {
      title: 'Rendszerintegráció & Interfészek',
      description:
        'Meglévő rendszerek integrációja API-kon, ETL-folyamatokon vagy köztes szoftvereken keresztül.',
      deliverables: [
        'Interfész-leírás (adatmezők, hitelesítés, hibakezelés)',
        'Integrációs és folyamatdiagramok (UML/BPMN)',
        'Tesztetek és átvételi kritériumok',
        'Üzemeltetési és monitorozási útmutató',
        'Adatfolyam-dokumentáció',
        'Hibakezelési és naplózási koncepció',
      ],
      boundaries: [
        'Személyes adatok különleges kategóriáinak feldolgozása kizárt',
        'Nincs élesítés tesztigazolás nélkül',
        'Nincs tartós adattárolás a megállapodott rendszereken kívül',
        'Nincs garancia az adatminőségre hibás forrásadatok esetén',
      ],
    },
    {
      title: 'IT Szolgáltatás & Üzemeltetési Támogatás',
      description:
        'Támogatás a napi működésben világos szolgáltatási modulokkal és auditálható átadhatósággal.',
      deliverables: [
        'Üzemeltetési és szolgáltatási dokumentáció (Runbookok, SOP-k)',
        'Incidens- / kérelem- / módosítási folyamatok',
        'Szolgáltatási áttekintés a felelősségekkel (RACI-mátrix)',
        'Átadási és betanítási anyagok az üzemeltető csapatok számára',
        'Monitorozási és riasztási alapok',
        'Eszkalációs és kommunikációs struktúra',
      ],
      boundaries: [
        'Nincs 24/7 üzemeltetés kifejezett SLA nélkül',
        'Nincs módosítás az éles rendszereken jóváhagyott Change-folyamat nélkül',
        'Nincs licenc- vagy szolgáltatói szerződések átvállalása',
        'Nincs felelősségvállalás a meglévő korábbi architektúrákért',
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
        'No guarantee of award or success',
        'No legal advice',
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
        'No penetration testing without separate mandate',
        'No security guarantees',
        'No tracking/analytics implementation without consent concept',
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
        'No production deployment without acceptance test proof',
        'No permanent data retention outside agreed systems',
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
        'No liability for legacy architectures without full transparency',
      ],
    },
  ],
}
