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

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      // Branding update: Appears in browser tab titles
      titleSuffix: '- SmartConnect CMS',
      description: 'SmartConnect CRM Management Dashboard',
    },
    components: {
      graphics: {
        // Replaces default Payload branding with your SmartConnect CRM Logo
        Logo: '/components/SccrmLogo#SccrmLogo',
        Icon: '/components/SccrmLogo#SccrmLogo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // --- Native Multi-Language Localization Configuration ---
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
    fallback: true, // Fallback to German if a field isn't translated yet
  },
  collections: [Users, Media, Services, Proposals, Tenders],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || process.env.DATABASE_URI || '',
    },
    push: true, // Automatically syncs localized schema columns into PostgreSQL
  }),
  sharp,
  plugins: [],
})
