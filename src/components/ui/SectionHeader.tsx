import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  metadata?: ReactNode
  align?: "left" | "center"
  className?: string
}

/**
 * Section Header Component
 * Provides consistent title + subtitle + optional metadata styling
 */
export function SectionHeader({
  title,
  subtitle,
  metadata,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={cn("mb-12 md:mb-16 max-w-3xl", alignClass, className)}>
      {metadata && (
        <div className="mb-4">
          {metadata}
        </div>
      )}
      <h2 className="font-heading text-sc-h2-mobile md:text-sc-h2 text-sc-neutral-900 dark:text-sc-neutral-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sc-subtitle text-sc-neutral-600 dark:text-sc-neutral-400 max-w-sc-prose">
          {subtitle}
        </p>
      )}
    </div>
  )
}
