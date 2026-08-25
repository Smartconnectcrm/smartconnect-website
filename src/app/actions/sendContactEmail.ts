'use server'

import { Resend } from 'resend'

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  console.log('Sending email with data:', { name, email, subject, message })

  if (!process.env.RESEND_API_KEY) {
    console.error('MISSING RESEND_API_KEY')
    return { success: false, error: 'Resend API key is missing on the server.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: 'SmartConnect CRM <info@smartclientcrm.com>',
      to: ['info@smartclientcrm.com'],
      replyTo: email,
      subject: subject || `New Contact Form Submission from ${name}`,
      text: `Name/Org: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error('Resend API Error:', error)
      return { success: false, error: error.message }
    }

    console.log('Resend Response Data:', data)
    return { success: true, data }
  } catch (err: any) {
    console.error('Unexpected Send Error:', err)
    return { success: false, error: err?.message || 'Failed to send email.' }
  }
}
