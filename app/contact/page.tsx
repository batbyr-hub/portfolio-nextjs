"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      e.currentTarget.reset();
    } else {
      setStatus("Something went wrong ❌");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full border rounded px-4 py-2"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border rounded px-4 py-2"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full border rounded px-4 py-2"
        />

        <button
          disabled={loading}
          className="px-6 py-2 bg-black text-white rounded hover:opacity-90"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
}
