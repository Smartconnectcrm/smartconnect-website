'use client'

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { sendContactEmail } from '@/app/actions/sendContactEmail'

const contactTranslations: Record<string, Record<string, string>> = {
  DE: {
    title: 'Kontakt & Anfragen',
    subtitle:
      'Nehmen Sie direkt Kontakt mit unserem Enterprise-Team auf oder übermitteln Sie Ihre Tender-Unterlagen.',
    successTitle: '✓ Anfrage Erfolgreich Übermittelt',
    successText:
      'Vielen Dank! Unser Procurement- und Enterprise-Team wird Ihre Nachricht prüfen und sich in Kürze melden.',
    orgLabel: 'Organisation / Unternehmen *',
    orgPlaceholder: 'z.B. Ministerium / Enterprise AG',
    emailLabel: 'E-Mail Adresse *',
    emailPlaceholder: 'name@organisation.de',
    messageLabel: 'Anfrage / Projektbeschreibung *',
    messagePlaceholder: 'Beschreiben Sie Ihre Anforderungen oder Tender-Details...',
    submitBtn: 'Anfrage Absenden',
    loadingBtn: 'Wird Gesendet...',
  },
  EN: {
    title: 'Contact & Inquiries',
    subtitle: 'Get in direct touch with our Enterprise team or submit your tender documents.',
    successTitle: '✓ Inquiry Successfully Submitted',
    successText:
      'Thank you! Our Procurement and Enterprise team will review your message and reach out shortly.',
    orgLabel: 'Organization / Company *',
    orgPlaceholder: 'e.g., Ministry / Enterprise Corp',
    emailLabel: 'Email Address *',
    emailPlaceholder: 'name@organization.com',
    messageLabel: 'Inquiry / Project Description *',
    messagePlaceholder: 'Describe your requirements or tender details...',
    submitBtn: 'Send Inquiry',
    loadingBtn: 'Sending...',
  },
  HU: {
    title: 'Kapcsolat és Ajánlatkérés',
    subtitle:
      'Lépjen kapcsolatba Enterprise-csapatunkkal közvetlenül, vagy küldje el tenderdokumentációját.',
    successTitle: '✓ Ajánlatkérés Sikeresen Elküldve',
    successText:
      'Köszönjük! Beszerzési és Enterprise-csapatunk áttekinti üzenetét, és hamarosan jelentkezik.',
    orgLabel: 'Szervezet / Vállalat *',
    orgPlaceholder: 'pl. Minisztérium / Enterprise Nyrt.',
    emailLabel: 'E-mail Cím *',
    emailPlaceholder: 'nev@szervezet.hu',
    messageLabel: 'Ajánlatkérés / Projekt Leírása *',
    messagePlaceholder: 'Írja le követelményeit vagy a tender részleteit...',
    submitBtn: 'Ajánlatkérés Küldése',
    loadingBtn: 'Küldés folyamatban...',
  },
  FR: {
    title: 'Contact & Demandes',
    subtitle:
      'Contactez directement notre équipe Enterprise ou soumettez vos documents d’appel d’offres.',
    successTitle: '✓ Demande Envoyée avec Succès',
    successText:
      'Merci ! Notre équipe Achats & Entreprise examinera votre message et vous recontactera rapidement.',
    orgLabel: 'Organisation / Société *',
    orgPlaceholder: 'ex. Ministère / Enterprise SA',
    emailLabel: 'Adresse E-mail *',
    emailPlaceholder: 'nom@organisation.fr',
    messageLabel: 'Demande / Description du Projet *',
    messagePlaceholder: 'Décrivez vos besoins ou les détails de votre appel d’offres...',
    submitBtn: 'Envoyer la Demande',
    loadingBtn: 'Envoi en cours...',
  },
  ES: {
    title: 'Contacto y Consultas',
    subtitle:
      'Póngase en contacto directo con nuestro equipo Enterprise o envíe sus documentos de licitación.',
    successTitle: '✓ Consulta Enviada con Éxito',
    successText:
      '¡Gracias! Nuestro equipo de Contratación y Enterprise revisará su mensaje y se pondrá en contacto pronto.',
    orgLabel: 'Organización / Empresa *',
    orgPlaceholder: 'ej., Ministerio / Empresa S.A.',
    emailLabel: 'Correo Electrónico *',
    emailPlaceholder: 'nombre@organizacion.es',
    messageLabel: 'Consulta / Descripción del Proyecto *',
    messagePlaceholder: 'Describa sus requisitos o detalles de la licitación...',
    submitBtn: 'Enviar Consulta',
    loadingBtn: 'Enviando...',
  },
  IT: {
    title: 'Contatti e Richieste',
    subtitle:
      'Mettetevi in contatto diretto con il nostro team Enterprise o inviate i vostri documenti di gara.',
    successTitle: '✓ Richiesta Inviata con Successo',
    successText:
      'Grazie! Il nostro team Procurement ed Enterprise esaminerà il vostro messaggio e vi risponderà a breve.',
    orgLabel: 'Organizzazione / Azienda *',
    orgPlaceholder: 'es. Ministero / Azienda S.p.A.',
    emailLabel: 'Indirizzo Email *',
    emailPlaceholder: 'nome@organizzazione.it',
    messageLabel: 'Richiesta / Descrizione del Progetto *',
    messagePlaceholder: 'Descrivete i vostri requisiti o i dettagli della gara...',
    submitBtn: 'Invia Richiesta',
    loadingBtn: 'Invio in corso...',
  },
  NL: {
    title: 'Contact & Aanvragen',
    subtitle:
      'Neem rechtstreeks contact op met ons Enterprise-team of stuur uw tenderdocumenten toe.',
    successTitle: '✓ Aanvraag Succesvol Verzonden',
    successText:
      'Bedankt! Ons Procurement- en Enterprise-team zal uw bericht beoordelen en zo snel mogelijk reageren.',
    orgLabel: 'Organisatie / Bedrijf *',
    orgPlaceholder: 'bijv. Ministerie / Enterprise B.V.',
    emailLabel: 'E-mailadres *',
    emailPlaceholder: 'naam@organisatie.nl',
    messageLabel: 'Aanvraag / Projectbeschrijving *',
    messagePlaceholder: 'Beschrijf uw vereisten of tenderdetails...',
    submitBtn: 'Aanvraag Verzenden',
    loadingBtn: 'Verzenden...',
  },
  PL: {
    title: 'Kontakt i Zapytania',
    subtitle:
      'Skontaktuj się bezpośrednio z naszym zespołem Enterprise lub prześlij dokumenty przetargowe.',
    successTitle: '✓ Zapytanie Wysłane Pomyślnie',
    successText:
      'Dziękujemy! Nasz zespół ds. zamówień i Enterprise przeanalizuje Twoją wiadomość i skontaktuje się wkrótce.',
    orgLabel: 'Organizacja / Firma *',
    orgPlaceholder: 'np. Ministerstwo / Enterprise S.A.',
    emailLabel: 'Adres E-mail *',
    emailPlaceholder: 'nazwisko@organizacja.pl',
    messageLabel: 'Zapytanie / Opis Projektu *',
    messagePlaceholder: 'Opisz swoje wymagania lub szczegóły przetargu...',
    submitBtn: 'Wyślij Zapytanie',
    loadingBtn: 'Wysyłanie...',
  },
}

export function ContactClient() {
  const searchParams = useSearchParams()
  const rawLang = searchParams?.get('lang')?.toLowerCase() || 'de'
  const langKey = rawLang.toUpperCase()

  const t = contactTranslations[langKey] || contactTranslations.DE

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    org: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const payload = new FormData()
      payload.append('name', formData.org)
      payload.append('email', formData.email)
      payload.append('subject', `Inquiry from ${formData.org}`)
      payload.append('message', formData.message)

      const result = await sendContactEmail(payload)

      if (result.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(result.error || 'Fehler beim Senden der Anfrage.')
      }
    } catch (err: any) {
      console.error(err)
      setErrorMessage('Ein unerwarteter Fehler ist aufgetreten.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1
        style={{
          fontSize: '32px',
          fontWeight: '900',
          textTransform: 'uppercase',
          marginBottom: '12px',
          color: 'var(--text-primary, #0f172a)',
        }}
      >
        {t.title}
      </h1>
      <p
        style={{ color: 'var(--text-secondary, #475569)', marginBottom: '32px', fontSize: '15px' }}
      >
        {t.subtitle}
      </p>

      {errorMessage && (
        <div
          style={{
            border: '2px solid #ef4444',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#fef2f2',
            color: '#b91c1c',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          {errorMessage}
        </div>
      )}

      {submitted ? (
        <div
          style={{
            border: '2px solid var(--border-color, #000000)',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card, #f0fdf4)',
            boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
          }}
        >
          <h2
            style={{ fontSize: '20px', fontWeight: '900', color: '#166534', marginBottom: '8px' }}
          >
            {t.successTitle}
          </h2>
          <p style={{ color: '#15803d', fontSize: '14px', margin: 0 }}>{t.successText}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            border: '2px solid var(--border-color, #000000)',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-card, #ffffff)',
            boxShadow: '4px 4px 0px 0px var(--border-color, #000000)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '6px',
                textTransform: 'uppercase',
                color: 'var(--text-primary, #0f172a)',
              }}
            >
              {t.orgLabel}
            </label>
            <input
              type="text"
              required
              placeholder={t.orgPlaceholder}
              value={formData.org}
              onChange={(e) => setFormData({ ...formData, org: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid var(--border-color, #cbd5e1)',
                backgroundColor: 'var(--bg-page, #ffffff)',
                color: 'var(--text-primary, #0f172a)',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '6px',
                textTransform: 'uppercase',
                color: 'var(--text-primary, #0f172a)',
              }}
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              required
              placeholder={t.emailPlaceholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid var(--border-color, #cbd5e1)',
                backgroundColor: 'var(--bg-page, #ffffff)',
                color: 'var(--text-primary, #0f172a)',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '6px',
                textTransform: 'uppercase',
                color: 'var(--text-primary, #0f172a)',
              }}
            >
              {t.messageLabel}
            </label>
            <textarea
              rows={5}
              required
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid var(--border-color, #cbd5e1)',
                backgroundColor: 'var(--bg-page, #ffffff)',
                color: 'var(--text-primary, #0f172a)',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#fbbf24',
              color: '#000000',
              border: '2px solid var(--border-color, #000000)',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: '900',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: loading ? 'wait' : 'pointer',
              boxShadow: '2px 2px 0px 0px var(--border-color, #000000)',
              alignSelf: 'flex-start',
            }}
          >
            {loading ? t.loadingBtn : t.submitBtn}
          </button>
        </form>
      )}
    </>
  )
}
