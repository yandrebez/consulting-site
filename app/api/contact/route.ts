import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json()

    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: ["yandrebez007@gmail.com"],
      subject: "New Contact Form Submission",
      replyTo: email,
      text: message || "No message provided",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
