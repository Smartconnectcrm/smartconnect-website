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
          Component: '@/components/CustomDashboard#CustomDashboard',
        },
        // Force Payload to render ONLY your custom login component (bypasses DefaultTemplate)
        login: {
          Component: '@/components/CustomLogin#default',
          exact: true,
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
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
