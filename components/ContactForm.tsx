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
    <section id="contact" className="py-24 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow"
      >
        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded 
                       bg-white text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            placeholder="How can we help?"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded 
                       bg-white text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded
                     hover:bg-gray-800 transition
                     disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 text-center font-medium">
            Thanks — we’ll be in touch.
          </p>
        )}
      </form>
    </section>
  )
}
