const FALLBACK_SITE_URL = "https://www.smartconnectcrm.eu"

export const BRAND = {
  name: "SmartConnect CRM",

  legalName: "SmartConnect CRM UG (haftungsbeschränkt)",

  domain: "smartconnectcrm.eu",

  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL).replace(/\/+$/, ""),

  email: "admin@smartclientcrm.com",

  location: "Düsseldorf, Deutschland",
} as const

export type Brand = typeof BRAND
