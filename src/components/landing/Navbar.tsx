"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glass border-b border-white/10" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00b8ff] rounded-lg flex items-center justify-center font-bold text-black">C</div>
          <span className="text-xl font-bold tracking-tight">CLARIX</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Platform</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#company" className="hover:text-white transition-colors">Company</a>
        </div>

        <button className="flex items-center gap-2 px-6 py-2.5 glass rounded-full text-sm font-semibold hover:bg-white/10 transition-all">
          Get in Touch <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
