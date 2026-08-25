import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ message: 'Custom tenders API endpoint active' })
}

export async function POST(req: Request) {
  try {
    const apiKey = req.headers.get('x-api-key')
    const WORKFLOW_SECRET = process.env.N8N_WORKFLOW_SECRET

    if (!WORKFLOW_SECRET || apiKey !== WORKFLOW_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const payload = await getPayload({ config: configPromise })

    const tender = await payload.create({
      collection: 'tenders',
      locale: 'de',
      data: {
        title: body.title || 'Untitled Tender',
        source_url: body.source_url || '',
        organization: body.organization || 'Öffentlicher Auftraggeber',
        ai_score: Number(body.ai_score) || 75,
        ai_justification: body.ai_justification || 'Automated evaluation',
        status: body.status || 'Scraped',
      },
    })

    return NextResponse.json({ success: true, tenderId: tender.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error in custom-tenders route:', err)
    return NextResponse.json({ error: err?.message || 'Failed to process tender' }, { status: 500 })
  }
}
