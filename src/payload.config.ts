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

const connectionString = process.env.DATABASE_URL || process.env.DATABASE_URI || ''

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: '@/components/SccrmLogo#SccrmLogo',
        Icon: '@/components/SccrmLogo#SccrmLogo',
      },
    },
    meta: {
      titleSuffix: '- SmartConnect CRM Engine',
      description: 'Enterprise Backend Control Center',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
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
      ssl: { rejectUnauthorized: false },
    },
    push: true,
  }),
  sharp,
  plugins: [],
})
