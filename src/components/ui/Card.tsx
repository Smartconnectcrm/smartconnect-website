import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "bordered" | "elevated"
  hover?: boolean
}

/**
 * Card Component
 * Provides consistent card styling with variants
 */
export function Card({
  children,
  className,
  variant = "default",
  hover = false,
}: CardProps) {
  const variants = {
    default: "bg-white dark:bg-sc-neutral-900 border border-sc-neutral-200 dark:border-sc-neutral-800",
    bordered: "bg-white dark:bg-sc-neutral-900 border-2 border-sc-neutral-300 dark:border-sc-neutral-700",
    elevated: "bg-white dark:bg-sc-neutral-900 shadow-sc-md border border-sc-neutral-100 dark:border-sc-neutral-800",
  }

  const hoverClass = hover
    ? "transition-all duration-sc-base hover:shadow-sc-lg hover:border-sc-blue-300 dark:hover:border-sc-blue-700"
    : ""

  return (
    <div
      className={cn(
        "rounded-sc-lg p-6",
        variants[variant],
        hoverClass,
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("font-heading text-sc-h4-mobile md:text-sc-h4 text-sc-neutral-900 dark:text-sc-neutral-50", className)}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn("text-sc-body text-sc-neutral-600 dark:text-sc-neutral-400", className)}>
      {children}
    </div>
  )
}
