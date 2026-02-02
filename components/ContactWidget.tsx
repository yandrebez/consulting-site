"use client"

import { useState } from "react"

export default function ContactWidget() {
  const [open, setOpen] = useState(false)
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
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full shadow-lg hover:bg-gray-800 transition z-50"
        aria-label="Contact us"
      >
        💬
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Contact us</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            {status === "sent" && (
              <p className="text-green-600 text-sm text-center">
                Message sent 👍
              </p>
            )}
          </form>
        </div>
      )}
    </>
  )
}
