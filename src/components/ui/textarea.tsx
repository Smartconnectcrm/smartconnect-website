import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        [
          // layout
          "w-full min-h-[120px] px-3 py-2",
          "rounded-2xl resize-vertical",
          // surface
          "bg-[color:var(--panel)]",
          "border border-[color:var(--border)]",
          "shadow-[var(--shadow-xs)]",
          // type
          "text-[color:var(--text)] text-sm leading-relaxed",
          "placeholder:text-[color:var(--text-muted)]",
          // behavior
          "outline-none transition-[border-color,box-shadow,transform] duration-150",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          // focus
          "focus:border-[color:var(--border-strong)] focus:shadow-[0_0_0_6px_var(--ring)]",
          // selection
          "selection:bg-[color:var(--brand)] selection:text-white",
        ].join(" "),
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
