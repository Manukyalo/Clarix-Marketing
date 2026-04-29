"use client";
import { motion } from "framer-motion";
import { Ship, Package, LineChart, ShieldCheck } from "lucide-react";

const solutions = [
  {
    id: "port-ops",
    title: "Port Operations",
    subtitle: "Throughput Optimization",
    description: "Streamline vessel discharge and gate operations with real-time automated data capture and labor allocation models.",
    icon: Ship,
  },
  {
    id: "bulk-logistics",
    title: "Bulk & Batch",
    subtitle: "Precision Inventory",
    description: "Manage complex bulk commodities with automated reconciliation and batch-level traceability across your entire network.",
    icon: Package,
  },
  {
    id: "compliance",
    title: "Global Compliance",
    subtitle: "Risk Mitigation",
    description: "Automate regulatory reporting and auditing with immutable records that stand up to the strictest global standards.",
    icon: ShieldCheck,
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#00b8ff] font-bold tracking-widest text-xs uppercase mb-4 block">Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
              Solving the <br />
              <span className="text-white/40 italic">Invisible Problems</span> <br />
              of Global Trade
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed">
              Logistics is the backbone of the global economy. Clarix provides the digital infrastructure to make it smarter, faster, and more secure.
            </p>
            
            <div className="space-y-4">
              {solutions.map((item) => (
                <div key={item.id} className="p-6 glass-card border-none hover:bg-white/5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00b8ff]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#00b8ff]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-2 font-bold">{item.subtitle}</p>
                      <p className="text-sm text-white/60 leading-relaxed font-inter">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#00b8ff]/20 blur-[120px] rounded-full opacity-10 animate-pulse" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-1 overflow-hidden shadow-2xl relative"
            >
               <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800 to-black p-8 flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-[#00b8ff] mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#00b8ff] animate-ping" />
                      Live Network Status
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Clarix OS</h3>
                    <p className="text-white/60 text-sm font-inter">Deploying infrastructure across 40+ global hubs.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
