'use server'

import { Resend } from 'resend'

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Check if API key is present in the Vercel environment
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined in environment variables.')
    return {
      success: false,
      error: 'RESEND_API_KEY path missing in Vercel settings.',
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'SmartConnect CRM <info@smartclientcrm.com>',
      to: ['info@smartclientcrm.com'],
      replyTo: email,
      subject: subject || `Neue Anfrage von ${name}`,
      text: `Organisation: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    })

    if (error) {
      console.error('Resend returned an error:', error)
      return { success: false, error: error.message }
    }

    console.log('Resend Response Data:', data)
    return { success: true, data }
  } catch (err: any) {
    console.error('Unexpected error sending email:', err)
    return { success: false, error: err?.message || 'Fehler beim E-Mail-Versand.' }
  }
}
