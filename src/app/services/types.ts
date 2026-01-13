export type IconKey = "settings" | "network" | "lock" | "gantt" | "cloud" | "database" | "boxes"

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
  shortScope: string
  deliverables: string[]
  typicalInputs: string[]
  boundaries: string[]
  tenderAlignment: string[]
  iconKey?: IconKey
  category: ServiceCategory
}
