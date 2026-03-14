"use client";

import { sendEmail } from "../actions/sendEmail";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type FormState = {
  error: string | null;
};

const initialState: FormState = {
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2 bg-black text-white rounded hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form action={formAction} className="space-y-4">
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

        <SubmitButton />
        {state.error && <p className="text-sm text-red-600">{state.error}</p>}
      </form>
    </div>
  );
}
