"use client"

import { useEffect, useId, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "sending" | "sent" | "error"

function getErrorMessage(err: unknown) {
  if (err instanceof Error) return err.message
  if (typeof err === "string") return err
  return "Fehler beim Absenden. Bitte per E-Mail senden."
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [startedAt, setStartedAt] = useState<number>(() => Date.now())
  const [errorMsg, setErrorMsg] = useState<string>("")
  const startedRef = useRef(false)

  const uid = useId()
  const errorId = `contact-error-${uid}`
  const successId = `contact-success-${uid}`

  function ensureStarted() {
    if (!startedRef.current) {
      startedRef.current = true
      setStartedAt(Date.now())
    }
  }

  useEffect(() => {
    // baseline in case of paste-only interactions
    setStartedAt(Date.now())
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending") return

    setStatus("sending")
    setErrorMsg("")

    const formEl = e.currentTarget
    const form = new FormData(formEl)

    const payload = {
      name: String(form.get("name") ?? "").trim().slice(0, 120),
      email: String(form.get("email") ?? "").trim().slice(0, 160),
      subject: String(form.get("subject") ?? "").trim().slice(0, 160),
      message: String(form.get("message") ?? "").trim().slice(0, 4000),

      // anti-spam signals
      company: String(form.get("company") ?? "").trim().slice(0, 120), // honeypot (must stay empty)
      startedAt,
    }

    try {
      if (!payload.email || !payload.subject || !payload.message) {
        throw new Error("Bitte Pflichtfelder ausfüllen.")
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        let msg = "Fehler beim Absenden. Bitte per E-Mail senden."
        try {
          const data: unknown = await res.json()
          if (typeof data === "object" && data !== null && "error" in data) {
            const maybeErr = (data as { error?: unknown }).error
            if (maybeErr) msg = String(maybeErr)
          }
        } catch {
          // ignore
        }
        throw new Error(msg)
      }

      setStatus("sent")
      formEl.reset()

      startedRef.current = false
      setStartedAt(Date.now())
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(getErrorMessage(err))
    }
  }

  const isError = status === "error"
  const isSending = status === "sending"

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
      noValidate
      onFocus={ensureStarted}
      onInput={ensureStarted}
      aria-busy={isSending}
      aria-describedby={isError ? errorId : undefined}
    >
      {/* Honeypot field (hidden from humans) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Form block */}
      <section className="card-soft p-5">
        <div className="section-title">Geschäftsanfrage</div>
        <p className="small-muted mt-2">
          Bitte geben Sie die wesentlichen Eckdaten an (Ziel, Zeitraum, Standort/Remote, Restriktionen). Pflichtfelder sind
          markiert.
        </p>

        <div className="mt-5 grid gap-5">
          {/* Name + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input id="name" name="name" placeholder="Vorname Nachname" maxLength={120} autoComplete="name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@unternehmen.de"
                maxLength={160}
                autoComplete="email"
                aria-invalid={isError ? true : undefined}
                aria-describedby={isError ? errorId : undefined}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Betreff *</Label>
            <Input
              id="subject"
              name="subject"
              required
              maxLength={160}
              placeholder="z. B. Projektanfrage / Ausschreibung / Rahmenvertrag"
              aria-invalid={isError ? true : undefined}
              aria-describedby={isError ? errorId : undefined}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Nachricht *</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={7}
              maxLength={4000}
              placeholder="Bitte beschreiben Sie kurz den Bedarf, Zeitraum, Standort/Remote sowie relevante Anforderungen."
              aria-invalid={isError ? true : undefined}
              aria-describedby={isError ? errorId : undefined}
            />
          </div>

          {/* Status messages */}
          <div aria-live="polite">
            {status === "sent" && (
              <div
                id={successId}
                role="status"
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-2)] p-4 text-sm"
              >
                <div className="font-black text-[color:var(--text)]">Übermittelt</div>
                <div className="small-muted mt-1">Danke. Ihre Anfrage wurde erfolgreich übermittelt.</div>
              </div>
            )}

            {status === "error" && (
              <div
                id={errorId}
                role="alert"
                className="rounded-2xl border border-[rgba(185,28,28,0.25)] bg-[rgba(185,28,28,0.06)] p-4 text-sm"
              >
                <div className="font-black text-[rgba(185,28,28,0.95)]">Fehler</div>
                <div className="mt-1 text-[color:var(--text)]">{errorMsg || "Fehler beim Absenden. Bitte per E-Mail."}</div>
              </div>
            )}
          </div>

          {/* Submit row */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Button type="submit" disabled={isSending}>
              {isSending ? "Senden…" : "Geschäftsanfrage senden"}
            </Button>

            <div className="small-muted text-sm">
              Alternativ per E-Mail:{" "}
              <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* DSGVO Notice */}
      <section className="policy-note">
        <div className="section-title">Datenschutzhinweis (Kurzfassung)</div>
        <div className="mt-2 small-muted">
          Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b
          DSGVO bzw. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </div>
      </section>
    </form>
  )
}
