import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  await resend.emails.send({
    from: "you@yourdomain.com",
    to: "contact@yourcompany.com",
    subject: `New message from ${body.email}`,
    html: `<p>${body.message}</p>`,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
