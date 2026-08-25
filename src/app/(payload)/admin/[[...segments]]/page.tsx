import type { Metadata } from 'next'
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

  if (segments.length === 1 && segments[0] === 'login') {
    return <CustomLogin />
  }

  if (segments.length === 0 || (segments.length === 1 && segments[0] === 'dashboard')) {
    return <CustomDashboard />
  }

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
