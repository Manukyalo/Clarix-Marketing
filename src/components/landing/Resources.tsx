"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Code2, PlayCircle } from "lucide-react";

const RESOURCES = [
  {
    type: "Whitepaper",
    title: "The Immutable Port: AI in Maritime Logistics",
    description: "A comprehensive technical breakdown of how neural networks are reshaping terminal operations and reducing dwell times.",
    icon: FileText,
    action: "Download PDF",
    color: "var(--primary)",
  },
  {
    type: "API Reference",
    title: "Clarix OS Developer Documentation",
    description: "Explore our RESTful endpoints, webhook architecture, and SDKs for integrating Clarix into existing ERP systems.",
    icon: Code2,
    action: "View Docs",
    color: "var(--tertiary-container)",
  },
  {
    type: "Case Study",
    title: "DP World: 38% Throughput Increase",
    description: "How one of the world's largest terminal operators deployed Clarix to predict and eliminate supply chain bottlenecks.",
    icon: PlayCircle,
    action: "Watch Video",
    color: "var(--secondary-container)",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="section-gap"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="azure-line mb-4" />
            <p className="label-caps text-[var(--primary)] mb-3">Knowledge Base</p>
            <h2 className="headline-lg text-[var(--foreground)]">
              Resources & Documentation
            </h2>
          </div>
          <button className="btn-ghost hidden md:inline-flex shrink-0">
            View All Resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {RESOURCES.map(({ type, title, description, icon: Icon, action, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card flex flex-col h-full group"
            >
              <div
                className="h-48 w-full border-b flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "var(--surface-container-low)",
                  borderColor: "var(--outline-variant)",
                }}
              >
                <Icon
                  className="w-16 h-16 opacity-10 transition-transform duration-500 group-hover:scale-110"
                  style={{ color }}
                  strokeWidth={1}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="label-caps text-[var(--outline)] mb-3">{type}</span>
                <h3
                  className="text-lg font-bold text-[var(--foreground)] mb-3"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-[var(--foreground-muted)] mb-8 flex-grow"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold border-none bg-transparent cursor-pointer p-0 group/btn mt-auto"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-inter)" }}
                >
                  {action}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="btn-ghost w-full justify-center">
            View All Resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
