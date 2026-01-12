import type { IconKey } from "@/components/ServiceCard"

export type ServiceCategory =
  | "Operations"
  | "Integration"
  | "Security"
  | "Procurement"
  | "Cloud"
  | "Data"
  | "Delivery"

export type ServiceDTO = {
  title: string
  category: ServiceCategory
  shortScope: string
  deliverables: string[]
  typicalInputs: string[]
  boundaries: string[]
  tenderAlignment: string[]
  iconKey?: IconKey
}
