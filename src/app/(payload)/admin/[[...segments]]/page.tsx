import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import { headers } from 'next/headers'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import configPromise from '@payload-config'
import { importMap } from '../importMap.js'
import CustomLogin from '@/components/CustomLogin'
import CustomDashboard from '@/components/CustomDashboard'

type Args = {
  params: Promise<{
    segments?: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config: configPromise, params, searchParams })

export default async function Page({ params, searchParams }: Args) {
  const resolvedParams = await params
  const segments = resolvedParams?.segments || []

  // Initialize Payload local API & authenticate request
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers: await headers() })

  // 1. /admin/login Route
  if (segments.length === 1 && segments[0] === 'login') {
    if (user) {
      redirect('/admin')
    }
    return <CustomLogin />
  }

  // 2. /admin or /admin/dashboard Route
  if (segments.length === 0 || (segments.length === 1 && segments[0] === 'dashboard')) {
    if (!user) {
      redirect('/admin/login')
    }

    // Fetch database document counts server-side
    const [{ totalDocs: tendersCount }, { totalDocs: proposalsCount }] = await Promise.all([
      payload.count({ collection: 'tenders' }),
      payload.count({ collection: 'proposals' }),
    ])

    return <CustomDashboard user={user} metrics={{ tendersCount, proposalsCount }} />
  }

  // Fallback to standard Payload CMS admin UI
  const payloadParams = Promise.resolve({
    segments,
  })

  return RootPage({
    config: configPromise,
    importMap,
    params: payloadParams,
    searchParams,
  })
}
