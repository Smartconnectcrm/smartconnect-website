import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: "default" | "soft" | "highlighted"
  spacing?: "default" | "compact" | "spacious"
}

/**
 * Section Container Component
 * Provides consistent padding, max-width, and background variants
 */
export function Section({
  children,
  className,
  variant = "default",
  spacing = "default",
}: SectionProps) {
  const variants = {
    default: "bg-white dark:bg-sc-neutral-950",
    soft: "bg-sc-neutral-50 dark:bg-sc-neutral-900",
    highlighted: "bg-sc-blue-50 dark:bg-sc-blue-950/20",
  }

  const spacings = {
    compact: "py-12 md:py-16",
    default: "py-16 md:py-24",
    spacious: "py-20 md:py-32",
  }

  return (
    <section className={cn(variants[variant], spacings[spacing], className)}>
      <div className="max-w-sc-container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
