"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Database, Zap } from "lucide-react";

const SECURITY_FEATURES = [
  {
    icon: Shield,
    title: "Zero-Trust Environment",
    description:
      "Every request is authenticated, authorised, and continuously validated. We employ identity-based micro-segmentation to ensure lateral movement is impossible.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "Military-grade encryption for data at rest and in transit. Your proprietary logistics data remains entirely opaque to unauthorised entities.",
  },
  {
    icon: Database,
    title: "Automated Audit",
    description:
      "Immutable ledger logging for every system interaction, ensuring total compliance with global regulatory standards like GDPR and SOC2.",
  },
  {
    icon: Zap,
    title: "Quantum-Resistant HSM",
    description:
      "Next-generation hardware security modules that safeguard cryptographic keys against emerging quantum computing threats.",
  },
];

const INTELLIGENCE_PIPELINE = [
  {
    step: "01",
    label: "Signal Ingestion",
    description:
      "Real-time telemetry from 1.2M nodes including ports, vessels, and weather satellites.",
  },
  {
    step: "02",
    label: "Neural Processing",
    description:
      "Proprietary AI models analyse congestion patterns and predict delays before they occur.",
  },
  {
    step: "03",
    label: "Active Routing",
    description:
      "Autonomous adjustment of shipping lanes and fulfilment priorities in real-time.",
  },
];

const OS_CAPABILITIES = [
  "40+ Integrated Global Trade Hubs",
  "Sub-second Data Latency",
  "Military-Grade Encryption Standards",
  "Self-Healing Infrastructure",
];

// Lock icon needed but not in scope above, import inline
function Lock({ className, style, strokeWidth }: { className?: string; style?: React.CSSProperties; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      style={style}
      strokeWidth={strokeWidth ?? 1.75}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function Platform() {
  return (
    <section
      id="platform"
      className="section-gap-lg"
      style={{ background: "var(--surface-low)" }}
    >
      <div className="container-xl">
        {/* ── Uptime Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid md:grid-cols-[1fr_auto] gap-8 items-center card p-10 md:p-14 overflow-hidden relative"
        >
          <div
            className="absolute inset-0 -z-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(0,184,255,0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <span className="azure-line mb-4" />
            <p className="label-caps text-[var(--primary)] mb-3">Clarix OS</p>
            <h2 className="headline-lg text-[var(--foreground)] mb-4">
              The operating system for global trade
            </h2>
            <p
              className="text-[var(--foreground-muted)] leading-relaxed mb-6 max-w-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Clarix OS is purpose-built infrastructure designed to unify fragmented
              logistics data into a singular, high-performance execution environment —
              reliable, secure, and infinitely scalable.
            </p>
            <ul className="flex flex-col gap-3">
              {OS_CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-center gap-2.5">
                  <CheckCircle2
                    className="w-4.5 h-4.5 flex-shrink-0"
                    style={{ color: "var(--primary-container)" }}
                    strokeWidth={2}
                  />
                  <span
                    className="text-sm text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative text-right md:text-right">
            <p
              className="font-bold text-[var(--primary-container)] leading-none"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "clamp(3.5rem, 8vw, 5rem)",
              }}
            >
              99.999%
            </p>
            <p
              className="text-sm text-[var(--foreground-muted)] mt-1 max-w-[200px] ml-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Enterprise-grade reliability across 42 global regions.
            </p>
          </div>
        </motion.div>

        {/* ── Security Features ── */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="azure-line mb-4" />
            <p className="label-caps text-[var(--primary)] mb-3">Security</p>
            <h2 className="headline-lg text-[var(--foreground)] mb-4">
              Security is the foundation, not a feature
            </h2>
            <p
              className="text-[var(--foreground-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our multi-layered defence strategy protects data integrity at every hop,
              from edge telemetry to core processing.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-2 gap-5"
          >
            {SECURITY_FEATURES.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="card p-7"
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0,101,142,0.08)" }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: "var(--primary)" }} strokeWidth={1.75} />
                </div>
                <h3
                  className="text-base font-semibold text-[var(--foreground)] mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-[var(--foreground-muted)] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Intelligence Pipeline ── */}
        <div>
          <div className="max-w-2xl mb-10">
            <span className="azure-line mb-4" />
            <p className="label-caps text-[var(--primary)] mb-3">Intelligence Layer</p>
            <h2 className="headline-lg text-[var(--foreground)]">
              Beyond routing — into foresight
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {INTELLIGENCE_PIPELINE.map(({ step, label, description }) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-flat p-7 relative overflow-hidden group"
              >
                <p
                  className="absolute top-5 right-6 font-bold opacity-[0.06] text-5xl select-none"
                  style={{ fontFamily: "var(--font-manrope)", color: "var(--primary)" }}
                  aria-hidden
                >
                  {step}
                </p>
                <p
                  className="label-caps text-[var(--primary-container)] mb-3"
                >
                  Step {step}
                </p>
                <h3
                  className="text-base font-semibold text-[var(--foreground)] mb-2"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {label}
                </h3>
                <p
                  className="text-sm text-[var(--foreground-muted)] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
