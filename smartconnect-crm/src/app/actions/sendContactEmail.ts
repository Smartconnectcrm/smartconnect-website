'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  try {
    const data = await resend.emails.send({
      from: 'SmartConnect CRM <info@smartclientcrm.com>',
      to: ['info@smartclientcrm.com'],
      replyTo: email,
      subject: `[Website Contact] ${subject || 'New Inquiry'} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
    })

    return { success: true, data }
  } catch (error: any) {
    console.error('Email send error:', error)
    return { success: false, error: error?.message || 'Failed to send email.' }
  }
}
