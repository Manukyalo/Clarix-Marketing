"use client";
import { motion } from "framer-motion";
import { BrainCircuit, GitBranch, LineChart, Lightbulb } from "lucide-react";

const AI_MODULES = [
  {
    icon: BrainCircuit,
    title: "Predictive Logistics Architecture",
    description:
      "Our neural networks analyse historical lane performance, seasonal weather patterns, and geopolitical shifts to predict transit delays 14 days before they occur.",
    badge: "14-day foresight",
  },
  {
    icon: LineChart,
    title: "Data Integrity at Scale",
    description:
      "Uncompromising data cleansing. Our engine filters noise and verifies 100% of telemetry data through redundant cryptographic hashing with multi-source cross-reference and error-correcting protocols.",
    badge: "100% data verified",
  },
  {
    icon: GitBranch,
    title: "Real-time Auditing",
    description:
      "Every event is logged and audited in milliseconds. Automated financial reconciliation ensures that invoices match physical reality without human intervention.",
    badge: "< 1ms audit latency",
  },
  {
    icon: Lightbulb,
    title: "Disruption Mitigation",
    description:
      "Identify \"black swan\" events before they impact your P&L. Scenario modelling allows you to stress-test your supply chain against global shocks instantly.",
    badge: "98.4% model accuracy",
  },
];

const PIPELINE_STEPS = [
  {
    label: "Ingestion & Synthesis",
    description:
      "Clarix connects to thousands of API endpoints across ports, carriers, and IoT devices to create a unified data lake.",
  },
  {
    label: "Recursive Modelling",
    description:
      "Our models run 24/7, continuously retraining on the latest market fluctuations to refine accuracy levels to 98.4%.",
  },
  {
    label: "Autonomous Optimisation",
    description:
      "The engine suggests rerouting strategies and inventory rebalancing that minimise carbon footprint and maximise speed.",
  },
];

export default function Intelligence() {
  return (
    <section
      id="intelligence"
      className="section-gap-lg"
      style={{ background: "var(--background)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="azure-line mb-4" />
          <p className="label-caps text-[var(--primary)] mb-3">Intelligence Engine</p>
          <h2 className="headline-lg text-[var(--foreground)] mb-4">
            We don't just track cargo —{" "}
            <span className="text-azure-gradient">we predict the future of global trade</span>
          </h2>
          <p
            className="text-[var(--foreground-muted)] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            The Clarix Intelligence engine orchestrates millions of data points into
            actionable foresight. Autonomous machine learning models built for
            institutional reliability and operational continuity.
          </p>
        </motion.div>

        {/* AI Modules */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {AI_MODULES.map(({ icon: Icon, title, description, badge }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-8 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(0,184,255,0.1)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "var(--primary-container)" }}
                    strokeWidth={1.75}
                  />
                </div>
                <span
                  className="chip text-xs mt-0.5 flex-shrink-0"
                >
                  {badge}
                </span>
              </div>
              <div>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-10 md:p-14"
        >
          <p className="label-caps text-[var(--primary)] mb-8">
            How the Intelligence Pipeline Works
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {PIPELINE_STEPS.map(({ label, description }, i) => (
              <div key={label} className="relative">
                {i < PIPELINE_STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-3 right-0 w-1/2 h-px"
                    style={{ backgroundColor: "var(--outline-variant)" }}
                    aria-hidden
                  />
                )}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-container)" }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="text-sm font-semibold text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {label}
                  </h3>
                </div>
                <p
                  className="text-sm text-[var(--foreground-muted)] leading-relaxed pl-8"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
