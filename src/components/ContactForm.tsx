"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type Status = "idle" | "sending" | "sent" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [startedAt, setStartedAt] = useState<number>(Date.now())

  useEffect(() => {
    setStartedAt(Date.now())
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const formEl = e.currentTarget
    const form = new FormData(formEl)

    const payload = {
      name: String(form.get("name") ?? "").trim().slice(0, 120),
      email: String(form.get("email") ?? "").trim().slice(0, 160),
      subject: String(form.get("subject") ?? "").trim().slice(0, 160),
      message: String(form.get("message") ?? "").trim().slice(0, 4000),

      // Anti-spam signals
      company: String(form.get("company") ?? "").trim().slice(0, 120), // honeypot (should stay empty)
      startedAt, // user started filling the form at this time
    }

    try {
      if (!payload.email || !payload.subject || !payload.message) {
        throw new Error("Missing required fields")
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Send failed")

      setStatus("sent")
      formEl.reset()
      setStartedAt(Date.now())
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot field (hidden from humans, bots often fill it) */}
      <div style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-4">
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
        />
      </div>

      {/* DSGVO Notice */}
      <div className="policy-note">
        <div className="section-title">Datenschutzhinweis (Kurzfassung)</div>
        <div className="mt-2 small-muted">
          Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO bzw.
          lit. f DSGVO). Weitere Informationen: <a href="/privacy">Datenschutzerklärung</a>.
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Senden…" : "Geschäftsanfrage senden"}
        </Button>

        <div className="text-sm small-muted">
          Alternativ per E-Mail: <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
        </div>
      </div>

      {/* Status messages */}
      <div aria-live="polite">
        {status === "sent" && <div className="text-sm">Danke. Ihre Anfrage wurde erfolgreich übermittelt.</div>}
        {status === "error" && <div className="text-sm">Fehler beim Absenden. Bitte senden Sie per E-Mail.</div>}
      </div>
    </form>
  )
}
