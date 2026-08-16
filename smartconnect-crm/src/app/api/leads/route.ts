// src/app/api/leads/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config: configPromise })

    const lead = await payload.create({
      collection: 'leads' as any, // Casts string to bypass the outdated union type
      data: {
        email: body.email,
        company: body.company,
        serviceInterest: body.serviceInterest,
        submittedAt: new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true, leadId: lead.id })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process lead' }, { status: 500 })
  }
}
