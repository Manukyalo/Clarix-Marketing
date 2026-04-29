"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] glow-mesh opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold tracking-widest uppercase text-[#00b8ff] mb-6">
            Enterprise-Grade Logistics
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
            The Intelligence Layer for <br />
            <span className="text-primary-gradient italic">Global Logistics</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed font-inter">
            Clarix redefines port operations with AI-driven extraction, real-time batch auditing, and enterprise-grade security. Built for scale, designed for accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="btn-primary">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary">
              View Capabilities
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-[#00b8ff]/20 blur-[100px] rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative glass rounded-3xl p-2 md:p-4 shadow-2xl overflow-hidden border border-white/10">
            <Image 
              src="/images/hero-render.png" 
              alt="Clarix Dashboard Preview" 
              width={1200} 
              height={800} 
              className="rounded-2xl w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
