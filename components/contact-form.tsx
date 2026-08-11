"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="grid gap-x-5 gap-y-6 md:grid-cols-2">
      <label className="field"><span>Name *</span><input name="name" required autoComplete="name" /></label>
      <label className="field"><span>Email *</span><input name="email" type="email" required autoComplete="email" /></label>
      <label className="field"><span>Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
      <label className="field"><span>I&apos;m reaching out about</span><select name="topic" defaultValue="Plan a visit"><option>Plan a visit</option><option>Prayer</option><option>Bible study</option><option>Ministries</option><option>General question</option></select></label>
      <label className="field md:col-span-2"><span>How can we help? *</span><textarea name="message" required rows={6} /></label>
      <div className="md:col-span-2 flex flex-wrap items-center gap-5">
        <button disabled={status === "sending"} className="button button-accent" type="submit">{status === "sending" ? "Sending…" : "Send message ↗"}</button>
        <p aria-live="polite" className="text-sm text-black/55">
          {status === "success" && "Thanks — your message was received."}
          {status === "error" && "Something went wrong. Please email or call the church directly."}
        </p>
      </div>
    </form>
  );
}
