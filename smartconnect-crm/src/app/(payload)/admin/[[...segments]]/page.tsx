// src/app/(payload)/admin/[[...segments]]/page.tsx
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'

export const generateMetadata = generatePageMetadata
export default RootPage