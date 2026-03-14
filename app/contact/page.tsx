"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "../actions/sendEmail";

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
      className="accent-button rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <section className="grid w-full gap-6 lg:grid-cols-[0.9fr_minmax(0,1.1fr)]">
      <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="section-title mb-4">Let&apos;s build something useful.</h1>
        <p className="body-muted max-w-xl text-base leading-8">
          If you need a backend-heavy product, an internal tool, or a more
          reliable foundation for an existing app, send a note with the context.
        </p>
        <div className="mt-8 space-y-4 text-sm text-white/65">
          <div className="rounded-[1.4rem] border border-white/10 bg-white/4 px-4 py-4">
            Backend systems, APIs, workflow apps
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-white/4 px-4 py-4">
            Denver, Colorado
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-white/4 px-4 py-4">
            Open to freelance and full-time opportunities
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <form action={formAction} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-white/70">
              <span className="mb-2 block">Name</span>
              <input
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[rgba(215,168,110,0.45)]"
              />
            </label>

            <label className="block text-sm text-white/70">
              <span className="mb-2 block">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[rgba(215,168,110,0.45)]"
              />
            </label>
          </div>

          <label className="block text-sm text-white/70">
            <span className="mb-2 block">Project details</span>
            <textarea
              name="message"
              placeholder="Tell me about the product, timeline, or problem you want to solve."
              rows={7}
              required
              className="w-full rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[rgba(215,168,110,0.45)]"
            />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <p className="text-sm text-white/40">
              I usually reply with next steps and availability.
            </p>
            <SubmitButton />
          </div>

          {state.error && <p className="text-sm text-red-300">{state.error}</p>}
        </form>
      </div>
    </section>
  );
}
