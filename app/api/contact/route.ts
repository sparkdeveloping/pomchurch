import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const topic = String(body.topic ?? "General question").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !emailPattern.test(email) || !message || message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL ?? "rev.dillon@pomchurch.life";

    if (!apiKey || !from) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured" },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `POM website: ${topic} — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Topic: ${topic}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend delivery failed", response.status, await response.text());
      return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request" }, { status: 400 });
  }
}
