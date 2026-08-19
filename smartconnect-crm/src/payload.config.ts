import dotenv from 'dotenv'
dotenv.config()

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Proposals } from './collections/Proposals'
import { Tenders } from './collections/Tenders'

// Globals
import { SiteSettings } from './payload/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || ''

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' - SCCRM Admin',
      description: 'SmartConnect CRM Management Dashboard',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/logo.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: '@/components/SccrmLogo#SccrmLogo',
        Icon: '@/components/SccrmLogo#SccrmLogo',
      },
      views: {
        dashboard: {
          Component: '@/components/Dashboard#CustomDashboard',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  endpoints: [
    {
      path: '/custom-tenders',
      method: 'post',
      handler: async (req) => {
        try {
          // 1. Verify API Key header
          const apiKey = req.headers?.get('x-api-key')
          const WORKFLOW_SECRET = process.env.N8N_WORKFLOW_SECRET || 'my-super-secret-key-123'

          if (apiKey !== WORKFLOW_SECRET) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 })
          }

          // 2. Parse JSON body safely for PayloadRequest
          let body: any = {}
          if (typeof req.json === 'function') {
            body = await req.json()
          } else if ((req as any).body) {
            body = (req as any).body
          }

          // 3. Insert record using Payload Local API instance
          const tender = await req.payload.create({
            collection: 'tenders' as any,
            data: {
              title: body.title || 'Untitled Tender',
              source_url: body.source_url || '',
              organization: body.organization || 'Öffentlicher Auftraggeber',
              ai_score: Number(body.ai_score) || 75,
              ai_justification: body.ai_justification || 'Automated evaluation',
              status: body.status || 'Scraped',
            },
          })

          return Response.json({ success: true, tenderId: tender.id }, { status: 201 })
        } catch (err: any) {
          console.error('Error creating tender:', err)
          return Response.json(
            { error: err?.message || 'Failed to process tender' },
            { status: 500 },
          )
        }
      },
    },
  ],
  localization: {
    locales: [
      { code: 'de', label: 'Deutsch' },
      { code: 'en', label: 'English' },
      { code: 'hu', label: 'Magyar' },
      { code: 'fr', label: 'Français' },
      { code: 'es', label: 'Español' },
      { code: 'it', label: 'Italiano' },
      { code: 'nl', label: 'Nederlands' },
      { code: 'pl', label: 'Polski' },
    ],
    defaultLocale: 'de',
    fallback: true,
  },
  collections: [Users, Media, Services, Proposals, Tenders],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-payload-secret-key-smartconnect-crm-2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    },
    push: true,
  }),
  sharp,
  plugins: [],
})
