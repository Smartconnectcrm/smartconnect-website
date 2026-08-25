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

    let tendersCount = 0
    let openRfpsCount = 0
    let proposalsCount = 0
    let aiProposalsCount = 0

    try {
      const [tendersRes, openRfpsRes, proposalsRes, aiProposalsRes] = await Promise.all([
        payload.count({ collection: 'tenders', overrideAccess: true }),
        payload.count({
          collection: 'tenders',
          where: { status: { equals: 'open' } }, // Adjust field name/value to match your schema
          overrideAccess: true,
        }),
        payload.count({ collection: 'proposals', overrideAccess: true }),
        payload.count({
          collection: 'proposals',
          where: { isAiGenerated: { equals: true } }, // Adjust field name/value to match your schema
          overrideAccess: true,
        }),
      ])

      tendersCount = tendersRes.totalDocs
      openRfpsCount = openRfpsRes.totalDocs
      proposalsCount = proposalsRes.totalDocs
      aiProposalsCount = aiProposalsRes.totalDocs
    } catch (err) {
      console.error('Error fetching dashboard counts:', err)
    }

    return (
      <CustomDashboard
        user={user}
        metrics={{
          tendersCount,
          openRfpsCount,
          proposalsCount,
          aiProposalsCount,
        }}
      />
    )
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
