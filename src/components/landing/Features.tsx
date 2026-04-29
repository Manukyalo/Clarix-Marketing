"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Database, BarChart3, Cpu, Globe } from "lucide-react";

const features = [
  {
    title: "AI Document Intelligence",
    description: "Neural-powered extraction engines that transform unstructured port documentation into structured, actionable data in milliseconds.",
    icon: Zap,
    color: "#00b8ff"
  },
  {
    title: "Real-time Batch Auditing",
    description: "Automated verification across the entire supply chain. Detect discrepancies and ensure compliance before they impact your bottom line.",
    icon: BarChart3,
    color: "#00d1b2"
  },
  {
    title: "Enterprise Resilience",
    description: "Military-grade encryption and regional data sovereignty. Built to exceed the security standards of global logistics leaders.",
    icon: Shield,
    color: "#7000ff"
  },
  {
    title: "Unified Command Center",
    description: "A single pane of glass for multi-port operations. Orchestrate logistics, labor, and assets with unprecedented precision.",
    icon: Globe,
    color: "#00b8ff"
  },
  {
    title: "Predictive Logistics",
    description: "Anticipate bottlenecks with ML-driven forecasting. Turn historical data into a strategic advantage for future operations.",
    icon: Cpu,
    color: "#00d1b2"
  },
  {
    title: "Immutable Ledger",
    description: "Comprehensive audit trails for every transaction. Maintain a permanent, tamper-proof record of your logistics ecosystem.",
    icon: Database,
    color: "#7000ff"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Built for the <span className="text-primary-gradient italic">Next Era</span> of Logistics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Clarix combines cutting-edge AI with robust enterprise architecture to solve the most complex challenges in global trade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 transition-opacity group-hover:opacity-20" 
                style={{ backgroundColor: feature.color }}
              />
              
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed font-inter text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
