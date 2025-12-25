"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // Optional: implement /api/contact later to send email (SMTP/provider).
      // For now, we simply confirm submission without storing.
      await new Promise((r) => setTimeout(r, 400))
      console.log("Contact payload (client only, not stored):", payload)
      setStatus("sent")
      e.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name (optional)</Label>
          <Input id="name" name="name" placeholder="Vorname Nachname" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input id="email" name="email" type="email" required placeholder="name@unternehmen.de" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Betreff *</Label>
        <Input id="subject" name="subject" required placeholder="z. B. Projektanfrage / Ausschreibung / Rahmenvertrag" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Nachricht *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Bitte beschreiben Sie kurz den Bedarf, Zeitraum, Standort/Remote, sowie relevante Anforderungen."
        />
      </div>

      <div className="border p-3 text-sm" style={{ borderColor: "#E5E5E5", background: "#FFFFFF" }}>
        <div className="font-bold">Datenschutzhinweis (Kurzfassung)</div>
        <div className="mt-1 small-muted">
          Wir verwenden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Keine Weitergabe an Dritte ohne
          Rechtsgrundlage, keine Analyse-/Tracking-Dienste. Weitere Informationen:{" "}
          <a href="/privacy">Datenschutzerklärung</a>.
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "sending"} className="rounded-none">
          {status === "sending" ? "Senden…" : "Geschäftsanfrage senden"}
        </Button>
        <div className="text-sm small-muted">
          Alternativ per E-Mail: <a href="mailto:admin@smartclientcrm.com">admin@smartclientcrm.com</a>
        </div>
      </div>

      {status === "sent" && (
        <div className="text-sm" style={{ color: "#333333" }}>
          Danke. Ihre Anfrage wurde erfasst (ohne Speicherung auf der Website). Wir melden uns zurück.
        </div>
      )}
      {status === "error" && (
        <div className="text-sm" style={{ color: "#333333" }}>
          Fehler beim Absenden. Bitte senden Sie Ihre Anfrage direkt per E-Mail.
        </div>
      )}
    </form>
  )
}
