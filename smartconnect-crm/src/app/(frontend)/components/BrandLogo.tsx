import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SiteSetting, Media } from '@/payload-types'

const FALLBACK_LIGHT = '/media/logo_white-3.png'

interface BrandLogoProps {
  variant?: 'light' | 'dark'
  priority?: boolean
}

export const BrandLogo: React.FC<BrandLogoProps> = async ({
  variant = 'light',
  priority = false,
}) => {
  let logoSrc = FALLBACK_LIGHT
  let altText = 'SmartConnect CRM Logo'

  try {
    const payload = await getPayload({ config: configPromise })
    const settings = (await payload.findGlobal({
      slug: 'site-settings',
    })) as SiteSetting

    const logoField = variant === 'light' ? settings?.lightLogo : settings?.darkLogo
    const isMediaObject = typeof logoField === 'object' && logoField !== null
    const mediaObj = isMediaObject ? (logoField as Media) : null

    if (mediaObj?.url) logoSrc = mediaObj.url
    if (mediaObj?.alt) altText = mediaObj.alt
  } catch (error) {
    console.warn('BrandLogo fallback in use:', error)
  }

  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
      title="SmartConnect CRM - Home"
    >
      {/* Icon Graphic */}
      <div
        style={{
          position: 'relative',
          width: '42px',
          height: '42px',
          flexShrink: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={logoSrc}
          alt={altText}
          width={120}
          height={120}
          priority={priority}
          style={{
            height: '180%',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'contain',
            objectPosition: '12% center', // Focuses directly on the metallic mark, hiding stray text
            mixBlendMode: 'multiply',
            filter: 'contrast(115%) brightness(102%)',
          }}
        />
      </div>

      {/* Brand Company Name */}
      <span
        style={{
          fontSize: '20px',
          fontWeight: '900',
          color: '#0f172a',
          letterSpacing: '-0.02em',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          whiteSpace: 'nowrap',
        }}
      >
        SmartConnect <span style={{ color: '#2563eb' }}>CRM</span>
      </span>
    </Link>
  )
}
