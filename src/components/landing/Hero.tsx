"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const STATS = [
  { value: "40+", label: "Global Trade Hubs" },
  { value: "99.9%", label: "OCR Accuracy" },
  { value: "180+", label: "Countries Covered" },
  { value: "<10ms", label: "Response Latency" },
];

const TRUST_LOGOS = [
  "MAERSK", "DP WORLD", "MSC", "CMA CGM", "HAPAG-LLOYD",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24"
      style={{ background: "var(--background)" }}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, #00b8ff 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle at 30% 80%, #7000ff 0%, transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--foreground)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-xl">
        <div className="max-w-4xl">
          {/* Label chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="chip mb-6 inline-flex">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--primary-container)" }}
              />
              Global Logistics Intelligence Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="headline-xl text-[var(--foreground)] mb-6"
          >
            Unifying Global{" "}
            <span className="text-azure-gradient">Supply Chain Data</span>
            {" "}Into a Single Source of Truth.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg text-[var(--foreground-muted)] mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Clarix powers the world's most resilient logistics networks with AI-driven
            precision, real-time batch auditing, and enterprise-grade security.
            Built for scale, designed for accuracy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary"
              id="hero-cta-primary"
            >
              Speak with a Solutions Architect <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#platform")}
              className="btn-ghost"
              id="hero-cta-secondary"
            >
              Explore the Platform <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <p
                  className="text-2xl font-bold mb-1 text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {value}
                </p>
                <p
                  className="text-xs text-[var(--foreground-muted)]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Trusted by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <p
              className="label-caps text-[var(--outline)] mb-4"
            >
              Trusted by global leaders
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {TRUST_LOGOS.map((name) => (
                <span
                  key={name}
                  className="text-sm font-bold tracking-wide text-[var(--outline)] opacity-60"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
