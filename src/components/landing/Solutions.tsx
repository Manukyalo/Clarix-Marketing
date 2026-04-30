"use client";
import { motion } from "framer-motion";
import { Anchor, Package, Globe, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    id: "port-operations",
    icon: Anchor,
    category: "Port Operations",
    headline: "Eliminate port congestion before it starts",
    description:
      "Optimising terminal throughput with AI-sequencing and predictive vessel berthing. Clarix models arrival windows, berth availability, and crane utilisation to keep every port operating at theoretical maximum.",
    metrics: [
      { value: "38%", label: "Reduction in dwell time" },
      { value: "99.2%", label: "Berth prediction accuracy" },
    ],
    cta: "View Case Study",
    color: "#00658e",
  },
  {
    id: "bulk-batch",
    icon: Package,
    category: "Bulk & Batch",
    headline: "Commodity management at institutional scale",
    description:
      "Managing high-volume commodities with specialised auditing tools that track quality and compliance at scale across grain, ore, oil, and dry bulk shipments.",
    metrics: [
      { value: "100%", label: "Cargo traceability" },
      { value: "6× faster", label: "Audit completion" },
    ],
    cta: "Learn More",
    color: "#5400c3",
  },
  {
    id: "global-compliance",
    icon: Globe,
    category: "Global Compliance",
    headline: "Zero-delay border crossings at scale",
    description:
      "Automated customs filings and regulatory monitoring across 180+ countries. Our engine interprets tariff schedules, sanction lists, and certificate-of-origin requirements in real-time.",
    metrics: [
      { value: "180+", label: "Countries automated" },
      { value: "0", label: "Compliance incidents" },
    ],
    cta: "Regulatory Guide",
    color: "#006b5a",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="section-gap-lg"
      style={{ background: "var(--background)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="azure-line mb-4" />
          <p className="label-caps text-[var(--primary)] mb-3">Solutions</p>
          <h2 className="headline-lg text-[var(--foreground)] mb-4">
            Solving the invisible problems of global trade
          </h2>
          <p
            className="text-[var(--foreground-muted)] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We look beneath the surface to address the core inefficiencies that
            stall global commerce — turning operational blind spots into
            competitive advantages.
          </p>
        </div>

        {/* Solutions stack */}
        <div className="flex flex-col gap-6">
          {SOLUTIONS.map(({ id, icon: Icon, category, headline, description, metrics, cta, color }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card p-8 md:p-10 grid md:grid-cols-[2fr_1fr] gap-8 items-center group"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} strokeWidth={1.75} />
                  </div>
                  <span
                    className="label-caps"
                    style={{ color }}
                  >
                    {category}
                  </span>
                </div>
                <h3
                  className="headline-md text-[var(--foreground)] mb-3"
                >
                  {headline}
                </h3>
                <p
                  className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-5 max-w-lg"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
                <button
                  className="inline-flex items-center gap-1.5 text-sm font-semibold bg-transparent border-none cursor-pointer p-0 transition-colors duration-150"
                  style={{
                    color,
                    fontFamily: "var(--font-inter)",
                  }}
                  aria-label={`${cta} for ${category}`}
                >
                  {cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Right — metrics */}
              <div className="flex flex-col gap-4">
                {metrics.map(({ value, label }) => (
                  <div
                    key={label}
                    className="card-flat p-5 rounded-md"
                  >
                    <p
                      className="text-3xl font-bold text-[var(--foreground)] mb-1"
                      style={{ fontFamily: "var(--font-manrope)", color }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
