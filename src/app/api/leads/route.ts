// src/app/api/leads/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    // 1. Verify API Key header
    const apiKey = req.headers.get('x-api-key')
    const WORKFLOW_SECRET = process.env.N8N_WORKFLOW_SECRET || 'my-super-secret-key-123'

    if (apiKey !== WORKFLOW_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Parse request body
    const body = await req.json()

    // 3. Initialize Payload
    const payload = await getPayload({ config: configPromise })

    // 4. Create lead record using Payload Local API
    const lead = await payload.create({
      collection: 'leads' as any, // Cast to bypass strict collection type checking if needed
      data: {
        email: body.email || '',
        company: body.company || '',
        serviceInterest: body.serviceInterest || '',
        submittedAt: body.submittedAt || new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error creating lead:', err)
    return NextResponse.json({ error: err?.message || 'Failed to process lead' }, { status: 500 })
  }
}
