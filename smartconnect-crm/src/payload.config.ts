// src/payload.config.ts
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

// Collections
import { Users } from './collections/Users'
import { Services } from './collections/Services'
import { Media } from './collections/Media'
import { Leads } from './collections/Leads'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || ''

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname), // Kept at project root
    },
    meta: {
      titleSuffix: ' - SCCRM Admin',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/logo.png',
        },
      ],
    },
    //components: {
    // graphics: {
    //    Logo: '/src/components/SccrmLogo#SccrmLogo', // 👈 Fixed: Explicit path from root
    //  Icon: '/src/components/SccrmLogo#SccrmIcon', // 👈 Fixed: Explicit path from root
    // },
    //},
  },
  collections: [Users, Services, Media, Leads],
  editor: lexicalEditor({}),
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
})
