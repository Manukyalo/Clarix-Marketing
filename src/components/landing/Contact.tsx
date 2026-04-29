"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Inquiry received. We will contact you shortly.");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="company" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] p-8 md:p-16 border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[#00b8ff]/5 -z-10 blur-[100px]" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Secure Your <br />
                <span className="text-primary-gradient italic">Competitive Edge</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-md font-inter">
                Clarix is currently available to select enterprise partners. Contact us to schedule a private demonstration and technical audit.
              </p>
              
              <div className="space-y-6">
                {[
                  "Accelerated Onboarding",
                  "Dedicated Technical Support",
                  "Custom API Integrations",
                  "Regional Data Compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00b8ff]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-[#00b8ff]" />
                    </div>
                    <span className="text-white/80 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-[#00d1b2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#00d1b2]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                  <p className="text-white/60">Our partnership team will review your request and get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                      <input 
                        required
                        name="name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00b8ff] transition-colors text-white" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Work Email</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00b8ff] transition-colors text-white" 
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Company</label>
                    <input 
                      required
                      name="company"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00b8ff] transition-colors text-white" 
                      placeholder="Enterprise Logistics Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">How can we help?</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00b8ff] transition-colors text-white resize-none" 
                      placeholder="Describe your current logistics challenges..."
                    />
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Initiate Connection 
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-white/30 uppercase tracking-widest font-bold">
                    Encrypted submission via Clarix Secure-Gate
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
