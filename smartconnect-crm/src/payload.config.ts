// src/payload.config.ts
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Services } from './collections/Services'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
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
    components: {
      graphics: {
        Logo: '/src/components/SccrmLogo#SccrmLogo',
        Icon: '/src/components/SccrmLogo#SccrmIcon',
      },
    },
  },
  collections: [Users, Services, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-payload-secret-key-smartconnect-crm-2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      ssl: {
        rejectUnauthorized: false,
      },
    },
    push: true,
  }),
})
