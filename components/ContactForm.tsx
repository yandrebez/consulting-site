"use client"

import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = {
      email: form.email.value,
      message: form.message.value,
    }

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    setStatus("sent")
    form.reset()
  }

  return (
    <section className="py-24 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-xl mx-auto space-y-6"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="How can we help?"
          rows={5}
          className="w-full p-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 text-center">
            Thanks — we’ll be in touch.
          </p>
        )}
      </form>
    </section>
  )
}
