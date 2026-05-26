"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import SectionGlow from "@/components/ui/SectionGlow";
import { fadeUp } from "@/lib/animations";

const COOPERATION_OPTIONS = [
  "Flight academy / training center",
  "Aviation vocational college",
  "Airline operator",
  "Training / outreach facility",
  "Science museum / aviation exhibit",
  "Other",
] as const;

const REMARKS_MAX = 500;

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  cooperation: string;
  remarks: string;
  preferPhone: boolean;
  preferEmail: boolean;
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  cooperation: "",
  remarks: "",
  preferPhone: false,
  preferEmail: false,
};

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm text-gray-300">
      {children}
      {required && <span className="ml-0.5 text-red-400">*</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-[border-color,box-shadow] duration-200 focus:border-white/25 focus:ring-1 focus:ring-white/10";

export default function ContactPageContent() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Please fill in all required fields: name, phone, and email.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          city: form.city.trim(),
          cooperation: form.cooperation,
          remarks: form.remarks.trim(),
          preferPhone: form.preferPhone,
          preferEmail: form.preferEmail,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error || "Failed to send your message. Please try again later.");
        return;
      }

      setSubmitted(true);
      setForm(INITIAL);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-void pt-24 sm:pt-28">
        <section className="relative overflow-hidden py-20 sm:py-28">
          <SectionGlow />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mx-auto max-w-lg px-4 text-center sm:px-6"
          >
            <div className="linear-card p-10 sm:p-12">
              <h1 className="text-2xl font-semibold text-white sm:text-3xl">Message sent</h1>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Thank you — we received your message and will follow up soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL);
                }}
                className="mt-8 text-sm text-gray-400 underline-offset-2 hover:text-white hover:underline"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-void pt-24 sm:pt-28">
      <section className="relative overflow-hidden pb-20 sm:pb-28 md:pb-32">
        <SectionGlow />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-10 text-center md:mb-12"
          >
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Get in touch
            </h1>
            <p className="mt-4 text-sm text-gray-400 sm:text-base">
              Share your details and we will follow up as soon as possible.
            </p>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            onSubmit={handleSubmit}
            className="linear-card p-6 sm:p-8 md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div>
                <FieldLabel htmlFor="name" required>
                  Name
                </FieldLabel>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </motion.div>
              <motion.div>
                <FieldLabel htmlFor="phone" required>
                  Phone
                </FieldLabel>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Phone number"
                  className={inputClass}
                />
              </motion.div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <motion.div>
                <FieldLabel htmlFor="email" required>
                  Email
                </FieldLabel>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="Email address"
                  className={inputClass}
                />
              </motion.div>
              <motion.div>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <input
                  id="city"
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="City"
                  className={inputClass}
                />
              </motion.div>
            </div>

            <div className="mt-6">
              <FieldLabel htmlFor="cooperation">Organization type</FieldLabel>
              <select
                id="cooperation"
                value={form.cooperation}
                onChange={(e) => update("cooperation", e.target.value)}
                className={`${inputClass} cursor-pointer appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10 [background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")]`}
              >
                <option value="" className="bg-[#111]">
                  Select your organization type
                </option>
                {COOPERATION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#111]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <FieldLabel htmlFor="remarks">Notes (500 characters max)</FieldLabel>
              <textarea
                id="remarks"
                rows={5}
                maxLength={REMARKS_MAX}
                value={form.remarks}
                onChange={(e) => update("remarks", e.target.value)}
                placeholder="Describe your requirements..."
                className={`${inputClass} min-h-[140px] resize-y`}
              />
              <p className="mt-2 text-right font-mono text-xs text-gray-500">
                {form.remarks.length}/{REMARKS_MAX}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-400">
                <input
                  type="checkbox"
                  checked={form.preferPhone}
                  onChange={(e) => update("preferPhone", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/[0.04] accent-white"
                />
                I prefer to be contacted by phone.
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-400">
                <input
                  type="checkbox"
                  checked={form.preferEmail}
                  onChange={(e) => update("preferEmail", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/[0.04] accent-white"
                />
                I prefer to be contacted by email.
              </label>
            </div>

            {error && (
              <p className="mt-6 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={sending}
                className="btn-bracket inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:text-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? "Sending…" : "Submit"}
                <span aria-hidden>→</span>
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
