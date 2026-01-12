import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        [
          // layout
          "h-10 w-full min-w-0 px-3",
          "rounded-2xl",
          // surface
          "bg-[color:var(--panel)]",
          "border border-[color:var(--border)]",
          "shadow-[var(--shadow-xs)]",
          // type
          "text-[color:var(--text)] text-sm",
          "placeholder:text-[color:var(--text-muted)]",
          // behavior
          "outline-none transition-[border-color,box-shadow,transform] duration-150",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          // focus
          "focus:border-[color:var(--border-strong)] focus:shadow-[0_0_0_6px_var(--ring)]",
          // selection
          "selection:bg-[color:var(--brand)] selection:text-white",
          // file inputs
          "file:mr-3 file:rounded-full file:border file:border-[color:var(--border)] file:bg-[color:var(--panel-2)] file:px-3 file:py-1 file:text-xs file:font-black file:text-[color:var(--text)]",
        ].join(" "),
        className
      )}
      {...props}
    />
  )
}

export { Input }
