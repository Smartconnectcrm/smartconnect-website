"use client"

import React, { createContext, useContext, useMemo, useEffect, useRef, type ReactNode } from "react"

type NonceContextValue = { nonce?: string }

const NonceContext = createContext<NonceContextValue>({})

function normalizeNonce(n?: string) {
  const s = (n ?? "").trim()
  return s.length ? s : undefined
}

export function NonceProvider({ nonce, children }: { nonce?: string; children: ReactNode }) {
  const safeNonce = normalizeNonce(nonce)
  const value = useMemo<NonceContextValue>(() => ({ nonce: safeNonce }), [safeNonce])
  return <NonceContext.Provider value={value}>{children}</NonceContext.Provider>
}

/** Hook for components that need the CSP nonce */
export function useNonce(): string | undefined {
  return useContext(NonceContext).nonce
}

/**
 * Inline <script> with nonce attached (ONLY when you intentionally need inline scripts).
 * - Avoids nonce="" and avoids rendering nonce attr at all when missing.
 */
export function NonceScript(
  props: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> & {
    nonce?: string
  }
) {
  const ctxNonce = useNonce()
  const n = normalizeNonce(props.nonce) ?? ctxNonce
  const { nonce: _ignored, ...rest } = props
  return <script {...rest} {...(n ? { nonce: n } : {})} />
}

/**
 * Inline <style> with nonce attached (ONLY when you intentionally need inline styles).
 * - Avoids nonce="" and avoids rendering nonce attr at all when missing.
 */
export function NonceStyle(
  props: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement> & {
    nonce?: string
  }
) {
  const ctxNonce = useNonce()
  const n = normalizeNonce(props.nonce) ?? ctxNonce
  const { nonce: _ignored, ...rest } = props
  return <style {...rest} {...(n ? { nonce: n } : {})} />
}

/**
 * Optional helper: attach nonce to *inline* <script>/<style> tags missing nonce.
 * Default OFF. If enabled, runs once (even under React StrictMode).
 */
export function NonceAutoAttach({ enabled = false }: { enabled?: boolean }) {
  const nonce = useNonce()
  const ran = useRef(false)

  useEffect(() => {
    if (!enabled) return
    if (ran.current) return
    const n = normalizeNonce(nonce)
    if (!n) return

    ran.current = true

    try {
      document.querySelectorAll<HTMLScriptElement>("script:not([nonce])").forEach((el) => {
        if (!el.src) el.setAttribute("nonce", n)
      })

      document.querySelectorAll<HTMLStyleElement>("style:not([nonce])").forEach((el) => {
        el.setAttribute("nonce", n)
      })
    } catch {
      // ignore
    }
  }, [enabled, nonce])

  return null
}
