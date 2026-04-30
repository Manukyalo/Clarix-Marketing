"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const VALUE_PROPS = [
  "Dedicated Solutions Architect assigned",
  "Custom API & ERP integration support",
  "Regional data sovereignty options",
  "Accelerated 30-day onboarding programme",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

const DEFAULT_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(DEFAULT_STATE);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      toast.success("Inquiry received — our team will contact you within 24 hours.");
    } catch {
      toast.error("Submission failed. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-gap-lg"
      style={{ background: "var(--surface-low)" }}
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          {/* Left — value copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="azure-line mb-4" />
            <p className="label-caps text-[var(--primary)] mb-3">Enterprise Partnership</p>
            <h2 className="headline-lg text-[var(--foreground)] mb-4">
              Partner with the global leader in logistics intelligence
            </h2>
            <p
              className="text-[var(--foreground-muted)] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Speak with a solutions architect today. We work exclusively with
              enterprise partners to ensure every deployment delivers measurable
              operational improvement within the first 90 days.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {VALUE_PROPS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-4.5 h-4.5 flex-shrink-0"
                    style={{ color: "var(--primary-container)" }}
                    strokeWidth={2}
                  />
                  <span
                    className="text-sm text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="card-flat p-5 rounded"
              style={{ borderLeft: "3px solid var(--primary-container)" }}
            >
              <p
                className="text-sm font-semibold text-[var(--foreground)] mb-1"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Institutional Inquiries
              </p>
              <p
                className="text-sm text-[var(--foreground-muted)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                intelligence@clarix.global
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(0,194,165,0.12)" }}
                >
                  <CheckCircle2
                    className="w-7 h-7"
                    style={{ color: "var(--tertiary-container)" }}
                  />
                </div>
                <h3
                  className="headline-md text-[var(--foreground)] mb-2"
                >
                  Inquiry Received
                </h3>
                <p
                  className="text-sm text-[var(--foreground-muted)] max-w-xs mx-auto"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Our solutions team will review your request and respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="label-caps text-[var(--foreground-muted)]"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      required
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Smith"
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="label-caps text-[var(--foreground-muted)]"
                    >
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@enterprise.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-company"
                      className="label-caps text-[var(--foreground-muted)]"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      required
                      name="company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Global Shipping Ltd."
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-role"
                      className="label-caps text-[var(--foreground-muted)]"
                    >
                      Role
                    </label>
                    <select
                      id="contact-role"
                      name="role"
                      value={form.role}
                      onChange={update("role")}
                      className="input-field"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Select role…</option>
                      <option>VP / Director of Operations</option>
                      <option>Chief Logistics Officer</option>
                      <option>CTO / CIO</option>
                      <option>Supply Chain Manager</option>
                      <option>Port Authority</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="label-caps text-[var(--foreground-muted)]"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Describe your current logistics challenges and what you're looking to achieve…"
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  id="contact-submit"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Submit Inquiry <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p
                  className="text-center text-xs text-[var(--foreground-muted)] opacity-70"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  By submitting, you agree to our processing of personal data in
                  accordance with our Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
