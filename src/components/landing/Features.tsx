"use client";
import { motion } from "framer-motion";
import {
  FileSearch,
  BarChart3,
  ShieldCheck,
  MonitorDot,
  Route,
  Lock,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FEATURES: Feature[] = [
  {
    icon: FileSearch,
    title: "AI Document Intelligence",
    description:
      "Automated ingestion and verification of complex maritime and trade documentation with 99.9% OCR accuracy.",
    color: "#00658e",
  },
  {
    icon: BarChart3,
    title: "Real-time Batch Auditing",
    description:
      "Instantly audit thousands of transactions across multiple jurisdictions to ensure financial and regulatory compliance.",
    color: "#5400c3",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Resilience",
    description:
      "Advanced risk modeling to predict disruptions before they occur, allowing for proactive routing adjustments.",
    color: "#006b5a",
  },
  {
    icon: MonitorDot,
    title: "Unified Command Center",
    description:
      "A single glass-pane view for global operations, integrating IoT telemetry and ERP data in real-time.",
    color: "#00658e",
  },
  {
    icon: Route,
    title: "Predictive Logistics",
    description:
      "Machine learning algorithms that optimize route efficiency and fuel consumption across sea and land freight.",
    color: "#5400c3",
  },
  {
    icon: Lock,
    title: "Immutable Ledger",
    description:
      "Cryptographically secure audit trails for every container, ensuring absolute transparency and accountability.",
    color: "#006b5a",
  },
];

const CONTAINER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="section-gap"
      style={{ background: "var(--surface-low)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="azure-line mb-4" />
          <p className="label-caps text-[var(--primary)] mb-3">Intelligence Modules</p>
          <h2 className="headline-lg text-[var(--foreground)] mb-4">
            Enterprise-grade architecture for global trade
          </h2>
          <p
            className="text-[var(--foreground-muted)] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Designed to solve the most complex challenges in global trade through
            specialised intelligence modules that integrate seamlessly with your
            existing infrastructure.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map(({ icon: Icon, title, description, color }) => (
            <motion.div key={title} variants={ITEM_VARIANTS} className="card p-7 group">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${color}12` }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color }}
                  strokeWidth={1.75}
                />
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
    </section>
  );
}
