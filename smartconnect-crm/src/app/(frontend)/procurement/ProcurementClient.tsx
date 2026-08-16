'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const procurementTranslations: Record<string, Record<string, string>> = {
  DE: {
    badge: '🇪🇺 Public Sector Compliance Profile',
    title: 'Procurement-Profil',
    subtitle:
      'Qualifikationsprofil, Standards und Compliance-Richtlinien für die Beschaffung im öffentlichen Sektor und in Enterprise-Umgebungen.',
    colStandard: 'Compliance Standard',
    colStatus: 'Status',
    colScope: 'Geltungsbereich & Abdeckung',
    colVerification: 'Prüfstandort / Nachweis',
    evbTitle: 'EVB-IT Standard',
    evbStatus: 'Vollständig Konform',
    evbScope: 'EVB-IT Dienstleistung, Erstellung & Pflege Vertragswerke',
    evbVerify: 'Bereit für Öffentliche Ausschreibungen',
    gdprTitle: 'DSGVO & Compliance',
    gdprStatus: 'EU-Exklusiv',
    gdprScope: 'Dokumentierte AVV-Muster gemäß Art. 28 DSGVO & EU-Hosting',
    gdprVerify: 'Sitz & Datenverarbeitung Exklusiv in der EU',
    securityTitle: 'Information Security',
    securityStatus: 'ISO 27001 Orientiert',
    securityScope: 'Striktes Rollen- & Rechtemodell, MFA-Zwang für Admin-Zugriffe',
    securityVerify: 'Enterprise Access Security Standard',
    tenderTitle: 'RFP & Ausschreibung Einreichen',
    tenderDesc:
      'Senden Sie Ihre Ausschreibungsunterlagen oder unverbindliche Voranfragen direkt an unser Procurement-Spezialistenteam.',
    tenderBtn: 'Ausschreibung Übermitteln →',
  },
  EN: {
    badge: '🇪🇺 Public Sector Compliance Profile',
    title: 'Procurement Profile',
    subtitle:
      'Qualification profile, standards, and compliance guidelines for public sector and enterprise procurement.',
    colStandard: 'Compliance Standard',
    colStatus: 'Status',
    colScope: 'Scope & Coverage',
    colVerification: 'Verification / Location',
    evbTitle: 'EVB-IT Standard',
    evbStatus: 'Fully Compliant',
    evbScope: 'EVB-IT Services, Creation & Maintenance Contract Frameworks',
    evbVerify: 'Ready for Public Sector Tenders',
    gdprTitle: 'GDPR & Compliance',
    gdprStatus: 'EU-Exclusive',
    gdprScope: 'Documented DPA templates pursuant to Art. 28 GDPR & EU Hosting',
    gdprVerify: 'Headquarters & Processing Exclusively in EU',
    securityTitle: 'Information Security',
    securityStatus: 'ISO 27001 Aligned',
    securityScope: 'Strict role & permission models, mandatory MFA for Admin Access',
    securityVerify: 'Enterprise Access Security Standard',
    tenderTitle: 'Submit RFP & Tender',
    tenderDesc:
      'Submit your tender documents or non-binding inquiries directly to our procurement specialist team.',
    tenderBtn: 'Submit Tender →',
  },
  HU: {
    badge: '🇪🇺 Közszféra Megfelelőségi Profil',
    title: 'Beszerzési Profil',
    subtitle:
      'Képesítési profil, szabványok és megfelelőségi irányelvek a közszféra és a vállalati beszerzések számára.',
    colStandard: 'Megfelelőségi Szabvány',
    colStatus: 'Státusz',
    colScope: 'Kiterjedés és Lefedettség',
    colVerification: 'Ellenőrzés / Helyszín',
    evbTitle: 'EVB-IT Szabvány',
    evbStatus: 'Teljesen Megfelelő',
    evbScope: 'EVB-IT Szolgáltatás, Fejlesztés és Karbantartás',
    evbVerify: 'Közbeszerzésre Kész',
    gdprTitle: 'GDPR és Megfelelőség',
    gdprStatus: 'Kizárólag EU',
    gdprScope: 'Adatfeldolgozási sablonok a GDPR 28. cikk szerint & EU Hosting',
    gdprVerify: 'Székhely és Adatfeldolgozás az EU-ban',
    securityTitle: 'Információbiztonság',
    securityStatus: 'ISO 27001 Orientált',
    securityScope: 'Szigorú szerepkörök, kötelező MFA adminisztratív hozzáféréshez',
    securityVerify: 'Vállalati Hozzáférés-biztonsági Szabvány',
    tenderTitle: 'RFP és Tender Benyújtása',
    tenderDesc:
      'Küldje el tenderdokumentációját vagy kötelezettségmentes megkeresését közvetlenül beszerzési szakértő csapatunknak.',
    tenderBtn: 'Tender Benyújtása →',
  },
  FR: {
    badge: '🇪🇺 Profil de Conformité Secteur Public',
    title: 'Profil d’Achat',
    subtitle:
      'Profil de qualification, normes et directives de conformité pour les marchés publics et les achats en entreprise.',
    colStandard: 'Norme de Conformité',
    colStatus: 'Statut',
    colScope: 'Périmètre & Couverture',
    colVerification: 'Vérification / Emplacement',
    evbTitle: 'Norme EVB-IT',
    evbStatus: 'Totalement Conforme',
    evbScope: 'Contrats EVB-IT Prestation, Création et Maintenance',
    evbVerify: 'Prêt pour les Marchés Publics',
    gdprTitle: 'RGPD & Conformité',
    gdprStatus: 'Exclusif UE',
    gdprScope: 'Modèles de sous-traitance Art. 28 RGPD & Hébergement UE',
    gdprVerify: 'Siège et Traitement Situés dans l’UE',
    securityTitle: 'Sécurité de l’Information',
    securityStatus: 'Aligné ISO 27001',
    securityScope: 'Gestion stricte des privilèges, MFA obligatoire pour l’administration',
    securityVerify: 'Norme de Sécurité d’Accès Enterprise',
    tenderTitle: 'Soumettre un RFP & Appel d’Offres',
    tenderDesc:
      'Transmettez vos documents d’appel d’offres ou demandes d’informations directement à notre équipe spécialisée en achats.',
    tenderBtn: 'Soumettre l’Appel d’Offres →',
  },
  ES: {
    badge: '🇪🇺 Perfil de Cumplimiento Sector Público',
    title: 'Perfil de Contratación',
    subtitle:
      'Perfil de cualificación, estándares y directrices de cumplimiento para la contratación pública y empresarial.',
    colStandard: 'Estándar de Cumplimiento',
    colStatus: 'Estado',
    colScope: 'Alcance y Cobertura',
    colVerification: 'Verificación / Ubicación',
    evbTitle: 'Estándar EVB-IT',
    evbStatus: 'Totalmente Conforme',
    evbScope: 'Marcos Contractuales EVB-IT Servicios, Creación y Mantenimiento',
    evbVerify: 'Listo para Licitaciones Públicas',
    gdprTitle: 'RGPD y Cumplimiento',
    gdprStatus: 'Exclusivo UE',
    gdprScope: 'Plantillas de encargado de tratamiento Art. 28 RGPD y Alojamiento UE',
    gdprVerify: 'Sede y Procesamiento Exclusivo en la UE',
    securityTitle: 'Seguridad de la Información',
    securityStatus: 'Orientado a ISO 27001',
    securityScope: 'Modelo estricto de permisos, MFA obligatorio para administración',
    securityVerify: 'Estándar de Seguridad de Acceso Empresarial',
    tenderTitle: 'Enviar RFP y Licitación',
    tenderDesc:
      'Envíe los pliegos de su licitación o consultas preliminares directamente a nuestro equipo especializado en contratación.',
    tenderBtn: 'Enviar Licitación →',
  },
  IT: {
    badge: '🇪🇺 Profilo di Conformità Settore Pubblico',
    title: 'Profilo Appalti',
    subtitle:
      'Profilo di qualificazione, standard e linee guida di conformità per gli appalti del settore pubblico e aziendale.',
    colStandard: 'Standard di Conformità',
    colStatus: 'Stato',
    colScope: 'Ambito e Copertura',
    colVerification: 'Verifica / Posizione',
    evbTitle: 'Standard EVB-IT',
    evbStatus: 'Pienamente Conforme',
    evbScope: 'Contratti EVB-IT Servizi, Creazione e Manutenzione',
    evbVerify: 'Pronto per Gare Pubbliche',
    gdprTitle: 'GDPR & Conformità',
    gdprStatus: 'Esclusivo UE',
    gdprScope: 'Modelli DPA Art. 28 GDPR e Hosting UE',
    gdprVerify: 'Sede e Trattamento Esclusivamente nell’UE',
    securityTitle: 'Sicurezza delle Informazioni',
    securityStatus: 'Allineato ISO 27001',
    securityScope: 'Controllo accessi rigoroso, MFA obbligatoria per amministrazione',
    securityVerify: 'Standard di Sicurezza Accessi Enterprise',
    tenderTitle: 'Invia RFP e Gara d’Appalto',
    tenderDesc:
      'Inviate i documenti di gara o richieste non vincolanti direttamente al nostro team specializzato in appalti.',
    tenderBtn: 'Invia Gara →',
  },
  NL: {
    badge: '🇪🇺 Publieke Sector Compliance Profiel',
    title: 'Inkoopprofiel',
    subtitle:
      'Kwalificatieprofiel, standaarden en richtlijnen voor inkoop in de publieke sector en enterprise-omgevingen.',
    colStandard: 'Compliance Standaard',
    colStatus: 'Status',
    colScope: 'Reikwijdte & Dekking',
    colVerification: 'Verificatie / Locatie',
    evbTitle: 'EVB-IT Standaard',
    evbStatus: 'Volledig Conform',
    evbScope: 'EVB-IT Diensten, Realisatie & Onderhoud Contracten',
    evbVerify: 'Gereed voor Publieke Tenders',
    gdprTitle: 'AVG / GDPR & Compliance',
    gdprStatus: 'Exclusief EU',
    gdprScope: 'Gedocumenteerde verwerkersovereenkomsten Art. 28 AVG & EU Hosting',
    gdprVerify: 'Vestiging & Verwerking Exclusief in de EU',
    securityTitle: 'Informatiebeveiliging',
    securityStatus: 'ISO 27001 Gericht',
    securityScope: 'Strikt rollenmodel, verplichte MFA voor beheerderstoegang',
    securityVerify: 'Enterprise Access Security Standaard',
    tenderTitle: 'RFP & Tender Indienen',
    tenderDesc:
      'Stuur uw tenderdocumenten of vrijblijvende vragen rechtstreeks naar ons inkoopspecialistenteam.',
    tenderBtn: 'Tender Verzenden →',
  },
  PL: {
    badge: '🇪🇺 Profil Zgodności Sektora Publicznego',
    title: 'Profil Zakupowy',
    subtitle:
      'Profil kwalifikacyjny, standardy i wytyczne dotyczące zgodności dla zamówień publicznych i korporacyjnych.',
    colStandard: 'Standard Zgodności',
    colStatus: 'Status',
    colScope: 'Zakres i Pokrycie',
    colVerification: 'Weryfikacja / Lokalizacja',
    evbTitle: 'Standard EVB-IT',
    evbStatus: 'Pełna Zgodność',
    evbScope: 'Umowy EVB-IT Usługi, Tworzenie i Utrzymanie',
    evbVerify: 'Gotowość do Zamówień Publicznych',
    gdprTitle: 'RODO & Zgodność',
    gdprStatus: 'Wyłącznie EU',
    gdprScope: 'Wzorce umów powierzenia Art. 28 RODO i Hosting w EU',
    gdprVerify: 'Siedziba i Przetwarzanie Wyłącznie w EU',
    securityTitle: 'Bezpieczeństwo Informacji',
    securityStatus: 'Zgodność z ISO 27001',
    securityScope: 'Rygorystyczny model ról, obowiązkowe MFA dla adminów',
    securityVerify: 'Standard Bezpieczeństwa Dostępu Enterprise',
    tenderTitle: 'Złóż RFP i Zapytanie Przetargowe',
    tenderDesc:
      'Prześlij dokumentację przetargową lub wstępne zapytania bezpośrednio do naszego zespołu specjalistów ds. zamówień.',
    tenderBtn: 'Wyślij Oferte Przetargową →',
  },
}

export function ProcurementClient() {
  const searchParams = useSearchParams()
  const rawLang = searchParams?.get('lang')?.toLowerCase() || 'de'
  const langKey = rawLang.toUpperCase()

  const t = procurementTranslations[langKey] || procurementTranslations.DE
  const contactHref = rawLang && rawLang !== 'de' ? `/contact?lang=${rawLang}` : '/contact'

  const matrixData = [
    {
      title: t.evbTitle,
      status: t.evbStatus,
      scope: t.evbScope,
      verify: t.evbVerify,
    },
    {
      title: t.gdprTitle,
      status: t.gdprStatus,
      scope: t.gdprScope,
      verify: t.gdprVerify,
    },
    {
      title: t.securityTitle,
      status: t.securityStatus,
      scope: t.securityScope,
      verify: t.securityVerify,
    },
  ]

  return (
    <>
      {/* Hero Header */}
      <section
        style={{
          marginBottom: '40px',
          borderBottom: '2px solid var(--border-color, #000000)',
          paddingBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--bg-tag, #f1f5f9)',
            border: '1px solid var(--border-color, #cbd5e1)',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: '800',
            color: 'var(--text-secondary, #334155)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '12px',
          }}
        >
          {t.badge}
        </div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '900',
            textTransform: 'uppercase',
            color: 'var(--text-primary, #0f172a)',
            marginBottom: '12px',
          }}
        >
          {t.title}
        </h1>
        <p
          style={{
            color: 'var(--text-secondary, #475569)',
            fontSize: '15px',
            lineHeight: '1.6',
            margin: 0,
            maxWidth: '700px',
          }}
        >
          {t.subtitle}
        </p>
      </section>

      {/* Compliance Matrix Table */}
      <div
        style={{
          marginBottom: '48px',
          overflowX: 'auto',
          borderRadius: '8px',
          border: '2px solid var(--border-color, #000000)',
          backgroundColor: 'var(--bg-card, #ffffff)',
          boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
        }}
      >
        <table
          style={{
            width: '100%',
            textAlign: 'left',
            borderCollapse: 'collapse',
            fontSize: '13px',
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--bg-tag, #f1f5f9)',
                borderBottom: '2px solid var(--border-color, #000000)',
                color: 'var(--text-primary, #0f172a)',
                textTransform: 'uppercase',
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '0.05em',
              }}
            >
              <th style={{ padding: '16px' }}>{t.colStandard}</th>
              <th style={{ padding: '16px' }}>{t.colStatus}</th>
              <th style={{ padding: '16px' }}>{t.colScope}</th>
              <th style={{ padding: '16px' }}>{t.colVerification}</th>
            </tr>
          </thead>
          <tbody style={{ color: 'var(--text-secondary, #334155)' }}>
            {matrixData.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom:
                    idx === matrixData.length - 1
                      ? 'none'
                      : '1px solid var(--border-color, #e2e8f0)',
                }}
              >
                <td
                  style={{
                    padding: '16px',
                    fontWeight: '800',
                    color: 'var(--text-primary, #0f172a)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#0284c7', marginRight: '6px' }}>✓</span> {row.title}
                </td>
                <td style={{ padding: '16px', whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      padding: '3px 8px',
                      fontSize: '11px',
                      fontWeight: '700',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(2, 132, 199, 0.1)',
                      color: '#0284c7',
                      border: '1px solid rgba(2, 132, 199, 0.3)',
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: '16px', lineHeight: '1.5' }}>{row.scope}</td>
                <td
                  style={{
                    padding: '16px',
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'monospace',
                  }}
                >
                  {row.verify}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tender Anchor Section */}
      <section
        id="tender"
        style={{
          border: '2px solid var(--border-color, #000000)',
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '900',
            textTransform: 'uppercase',
            marginBottom: '8px',
            color: '#ffffff',
          }}
        >
          {t.tenderTitle}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#94a3b8',
            marginBottom: '24px',
            maxWidth: '600px',
            lineHeight: '1.5',
          }}
        >
          {t.tenderDesc}
        </p>
        <Link
          href={contactHref}
          style={{
            display: 'inline-block',
            backgroundColor: '#fbbf24',
            color: '#000000',
            border: '2px solid #000000',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: '900',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            boxShadow: '2px 2px 0px 0px #ffffff',
          }}
        >
          {t.tenderBtn}
        </Link>
      </section>
    </>
  )
}
