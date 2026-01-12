import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Tender-grade buttons:
 * - uses global CSS vars from globals.css (enterprise palette)
 * - pill radius by default (premium)
 * - restrained shadows + controlled focus ring
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-black tracking-tight",
    "transition-[transform,box-shadow,background-color,border-color,color] duration-150",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "outline-none",
    // focus ring uses your CSS var
    "focus-visible:shadow-[0_0_0_6px_var(--ring)]",
  ].join(" "),
  {
    variants: {
      variant: {
        /**
         * Primary = premium brand gradient (matches your .btn-primary)
         */
        default: [
          "rounded-full",
          "border border-[rgba(0,0,0,0.18)]",
          "bg-[linear-gradient(180deg,var(--brand-2),var(--brand))]",
          "text-white",
          "shadow-[var(--shadow-sm)]",
          "hover:brightness-[0.98] hover:-translate-y-[1px]",
          "active:translate-y-0",
        ].join(" "),

        /**
         * Secondary = clean panel button (matches your .btn-secondary)
         */
        secondary: [
          "rounded-full",
          "border border-[color:var(--border)]",
          "bg-[color:var(--panel)]",
          "text-[color:var(--text)]",
          "shadow-[var(--shadow-xs)]",
          "hover:border-[color:var(--border-strong)] hover:-translate-y-[1px]",
          "active:translate-y-0",
        ].join(" "),

        /**
         * Outline = tender-grade neutral outline
         */
        outline: [
          "rounded-full",
          "border border-[color:var(--border)]",
          "bg-transparent",
          "text-[color:var(--text)]",
          "hover:bg-[rgba(11,18,32,0.03)] dark:hover:bg-[rgba(255,255,255,0.04)]",
        ].join(" "),

        /**
         * Ghost = minimal (no border), only hover surface
         */
        ghost: [
          "rounded-full",
          "border border-transparent",
          "bg-transparent",
          "text-[color:var(--text)]",
          "hover:bg-[rgba(11,18,32,0.04)] dark:hover:bg-[rgba(255,255,255,0.06)]",
        ].join(" "),

        /**
         * Link variant for inline actions
         */
        link: [
          "rounded-none",
          "p-0",
          "h-auto",
          "bg-transparent",
          "text-[color:var(--brand)]",
          "font-black",
          "underline underline-offset-[3px] decoration-[rgba(11,42,85,0.35)]",
          "hover:decoration-[rgba(11,42,85,0.7)]",
          "focus-visible:shadow-none",
        ].join(" "),

        /**
         * Destructive kept, but enterprise toned down
         */
        destructive: [
          "rounded-full",
          "border border-[rgba(185,28,28,0.35)]",
          "bg-[rgba(185,28,28,0.92)]",
          "text-white",
          "shadow-[var(--shadow-xs)]",
          "hover:bg-[rgba(185,28,28,1)] hover:-translate-y-[1px]",
          "active:translate-y-0",
        ].join(" "),
      },

      size: {
        default: "h-10 px-5 text-[13px]",
        sm: "h-9 px-4 text-[12px]",
        lg: "h-11 px-6 text-[14px]",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-9 w-9 p-0",
        "icon-lg": "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
