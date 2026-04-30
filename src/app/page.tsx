import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-container/10 text-primary-container rounded-full mb-6">
                <span className="material-symbols-outlined text-sm font-normal">verified</span>
                <span className="font-sans text-xs uppercase font-bold tracking-widest">Enterprise Intelligence {new Date().getFullYear()}</span>
              </div>
              <h1 className="font-sans text-5xl md:text-6xl font-bold text-on-surface mb-6 leading-tight tracking-tighter">
                The Intelligence Layer for <span className="text-primary-container">Global Logistics</span>
              </h1>
              <p className="font-sans text-lg text-outline-variant mb-10 max-w-xl leading-relaxed">
                Unifying complex supply chain data into a single, immutable source of truth. Clarix powers the world's most resilient logistics networks with AI-driven precision and real-time auditing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-azure px-8 py-4 text-base rounded hover:shadow-lg transition-all">
                  Book a Strategy Call
                </button>
                <button className="btn-ghost px-8 py-4 text-base rounded transition-all">
                  Explore Platform
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/20 shadow-2xl relative">
                <Image 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover mix-blend-overlay opacity-80" 
                  alt="Global supply chain network visualization" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEmMIZGjxGErGaz2r8WM1IVuQZQyaJ-CESBRlXstHa4F12I914MggFIl4Kk3oJQM7R1EG23LF8v0pxrgU2SHJgCHP5vr2QuV1E_k3mu1PeMdn-qW5AfmRpOcq0Vzq1bRnI6ia5Eyo0xEhVuL1DxBYCWxhgctEiz6-Jb5aHcvhQP1GkzEulrmeD-IWIqIP-chyTvmG1f7IcG2kw1jr0WYZoB6SE3vhDi6LXBJO6mzZs9-LbtyrPwXxFg_OtC3z5jK5SH4JszPJ1whxH"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary">query_stats</span>
                  <span className="font-sans font-semibold text-sm">Efficiency Gain</span>
                </div>
                <div className="text-3xl font-bold text-on-surface">+34%</div>
                <p className="text-xs text-outline-variant mt-1 font-sans">Average operational improvement across global hubs within the first 6 months.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold tracking-tight text-on-surface mb-4">Built for the Next Era of Logistics</h2>
              <p className="font-sans text-outline-variant max-w-2xl mx-auto text-lg">Enterprise-grade architecture designed to solve the most complex challenges in global trade through specialized intelligence modules.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI Document Intelligence */}
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-xl hover:border-primary-container/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform block">description</span>
                <h3 className="font-sans font-bold text-lg mb-3">AI Document Intelligence</h3>
                <p className="text-outline-variant font-sans text-sm leading-relaxed">Automated ingestion and verification of complex maritime and trade documentation with 99.9% OCR accuracy.</p>
              </div>
              {/* Real-time Batch Auditing */}
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-xl hover:border-primary-container/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-secondary-container mb-6 group-hover:scale-110 transition-transform block">hearing</span>
                <h3 className="font-sans font-bold text-lg mb-3">Real-time Batch Auditing</h3>
                <p className="text-outline-variant font-sans text-sm leading-relaxed">Instantly audit thousands of transactions across multiple jurisdictions to ensure financial and regulatory compliance.</p>
              </div>
              {/* Enterprise Resilience */}
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-xl hover:border-primary-container/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-tertiary-container mb-6 group-hover:scale-110 transition-transform block">security_update_good</span>
                <h3 className="font-sans font-bold text-lg mb-3">Enterprise Resilience</h3>
                <p className="text-outline-variant font-sans text-sm leading-relaxed">Advanced risk modeling to predict disruptions before they occur, allowing for proactive routing adjustments.</p>
              </div>
              {/* Unified Command Center */}
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-xl hover:border-primary-container/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform block">dashboard_customize</span>
                <h3 className="font-sans font-bold text-lg mb-3">Unified Command Center</h3>
                <p className="text-outline-variant font-sans text-sm leading-relaxed">A single glass pane view for global operations, integrating IoT telemetry and ERP data in real-time.</p>
              </div>
              {/* Predictive Logistics */}
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-xl hover:border-primary-container/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-secondary-container mb-6 group-hover:scale-110 transition-transform block">precision_manufacturing</span>
                <h3 className="font-sans font-bold text-lg mb-3">Predictive Logistics</h3>
                <p className="text-outline-variant font-sans text-sm leading-relaxed">Machine learning algorithms that optimize route efficiency and fuel consumption across sea and land freight.</p>
              </div>
              {/* Immutable Ledger */}
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-xl hover:border-primary-container/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-tertiary-container mb-6 group-hover:scale-110 transition-transform block">database</span>
                <h3 className="font-sans font-bold text-lg mb-3">Immutable Ledger</h3>
                <p className="text-outline-variant font-sans text-sm leading-relaxed">Cryptographically secure audit trails for every container, ensuring absolute transparency and accountability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="font-sans text-4xl font-bold tracking-tight text-on-surface mb-4">Solving the Invisible Problems of Global Trade</h2>
                <p className="font-sans text-outline-variant text-lg">We look beneath the surface to address the core inefficiencies that stall global commerce.</p>
              </div>
              <button className="hidden md:block px-6 py-3 border-b-2 border-primary-container text-primary-container font-sans font-bold text-sm hover:bg-primary-container/5 transition-all cursor-pointer bg-transparent">
                View All Industries
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group cursor-pointer">
                <div className="h-64 overflow-hidden rounded-lg mb-6 shadow-sm border border-slate-200 relative">
                  <Image 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Port operations" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCny-FSUIel_Ql1pKZIzH7MJNCq-KQV_U9e7qbBW3FCuBXYClspZliqj_tY6aYGgRWVP6YK14-w9p5Q2u-2Ajpac1EyPd5O7o_6-ZYBJSMsv4DG_0dGSRM5v6-j0YzQp7uB5ZhfsO6DSICj3EUIMKB1KmP4I6t1Cswofp3jo8XZjVe9oQc_j_5jd9AZuGqkGvmav7g9k78RKLCfCjwO0jmFuxwKh59TQ03tDMJAasCiikhjH7zHEOBRQLJn-12sTbsGFhLY6BWYKRMW"
                  />
                </div>
                <h4 className="font-sans font-bold text-xl mb-3">Port Operations</h4>
                <p className="text-outline-variant font-sans text-sm mb-4 leading-relaxed">Optimizing terminal throughput with AI-sequencing and predictive vessel berthing to eliminate port congestion.</p>
                <Link className="inline-flex items-center text-primary-container font-sans font-bold text-sm hover:gap-2 transition-all no-underline" href="/solutions">
                  Case Study <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <div className="h-64 overflow-hidden rounded-lg mb-6 shadow-sm border border-slate-200 relative">
                  <Image 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="High-tech logistics warehouse" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxzxrGZMCv_o1KYXVz5jsZkfvm9k4EmS0hhbPKlrCZTNlrfwy6iQ-JA9FWUWqBfVz0C4QBXK1Zfkg3yOKkzODM5glUYigcCjvoJac3-yj9Czyf39YFuFBQzL9T58mf8xZAaTvOD9JRAAW0jd7AlKtc7MXdYATFWgzZ2rHdbUUZ7IL6ApZDmfJF2U8ruK1eUgZzL5PPUWOGC84h1wjlytOwVzzRzLedZr0GyUFLW6RZ01XybdHqEgcMESABgqvluz8YnEBdw6AerEnb"
                  />
                </div>
                <h4 className="font-sans font-bold text-xl mb-3">Bulk &amp; Batch</h4>
                <p className="text-outline-variant font-sans text-sm mb-4 leading-relaxed">Managing high-volume commodities with specialized auditing tools that track quality and compliance at scale.</p>
                <Link className="inline-flex items-center text-primary-container font-sans font-bold text-sm hover:gap-2 transition-all no-underline" href="/solutions">
                  Learn More <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <div className="h-64 overflow-hidden rounded-lg mb-6 shadow-sm border border-slate-200 relative">
                  <Image 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Global compliance dashboard" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3TGEusoCGoWh6sjBc56Ckw25vi-MdplvpW1m22OJSwwhJArqLJ-78dNccGQzgW6x7_VNBG6u3naj03RFKWb2cBYBRnuVkZH6sEqqFKYHe5req66mh72Ivss5R-Z7yNX1CIiGRHrwYCdslkh-k19v01jOiHTIyfgXHJOvjkqZnaEgfyPS8iDzu58YAaVLwGJC04lIGlq1XFsrqig5DHsi_ZeaStrZELnprhTPfIVnpw6e2vq_GaI7j268Q-sRSFMBxPPdnnaNY_yzm"
                  />
                </div>
                <h4 className="font-sans font-bold text-xl mb-3">Global Compliance</h4>
                <p className="text-outline-variant font-sans text-sm mb-4 leading-relaxed">Automated customs filings and regulatory monitoring across 180+ countries to ensure zero-delay border crossings.</p>
                <Link className="inline-flex items-center text-primary-container font-sans font-bold text-sm hover:gap-2 transition-all no-underline" href="/solutions">
                  Regulatory Guide <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Spotlight: Clarix OS */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-on-surface rounded-2xl p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
              </div>
              <div className="z-10 flex-1">
                <div className="text-primary-container font-sans font-bold text-xs tracking-widest uppercase mb-4">Next Generation Platform</div>
                <h2 className="font-sans font-bold text-5xl text-white mb-6 tracking-tight">Clarix OS</h2>
                <p className="font-sans text-lg text-slate-400 mb-10 leading-relaxed">
                  The definitive operating system for global trade. Seamlessly deploying infrastructure across 40+ global hubs, Clarix OS connects port authorities, carriers, and shippers on one secure network.
                </p>
                <ul className="space-y-4 mb-10 list-none p-0 m-0">
                  <li className="flex items-center gap-3 text-slate-200 font-sans">
                    <span className="material-symbols-outlined text-primary-container text-xl block">check_circle</span>
                    40+ Integrated Global Trade Hubs
                  </li>
                  <li className="flex items-center gap-3 text-slate-200 font-sans">
                    <span className="material-symbols-outlined text-primary-container text-xl block">check_circle</span>
                    Sub-second Data Latency
                  </li>
                  <li className="flex items-center gap-3 text-slate-200 font-sans">
                    <span className="material-symbols-outlined text-primary-container text-xl block">check_circle</span>
                    Military-Grade Encryption Standards
                  </li>
                </ul>
                <button className="px-8 py-4 bg-primary-container text-slate-900 font-sans font-bold rounded hover:brightness-110 transition-all border-none cursor-pointer">
                  Request Access
                </button>
              </div>
              <div className="flex-1 z-10 w-full lg:w-auto">
                <div className="bg-slate-900 rounded-xl p-4 shadow-2xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="ml-4 bg-slate-800 px-3 py-1 rounded text-[10px] text-slate-400 font-mono tracking-tighter">https://os.clarix.io/dashboard</div>
                  </div>
                  <div className="relative aspect-video w-full rounded overflow-hidden">
                    <Image 
                      fill
                      className="object-cover opacity-90 border border-slate-700 shadow-inner" 
                      alt="Clarix OS Dashboard Mockup" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_GJZW7kvXu3S_6KASsn_JyiENLtcEGM-ng7qq78ommzmXwq7ejKZBfoivIVKzE2Pp0bHYa64kJ0v8x5M6-vdFyW1Lsf01GrZKEAznN-eRDd04_TtX1uHcdAJXmZZ7eWXVlvjedBwcZCLXcErIpc_yptY-W_RwJ6gN-48DTjM_2dqwpNszEf-TPqeytLByDbW-dmshiUTupF_DtPVfgabuy4zQkgeje2D68RWZO2AxIRHq4JS1uDA2vedNyZYmS_RGNq8g2VF-LsDy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Gen Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-sans text-4xl font-bold tracking-tight text-on-surface mb-4">Secure Your Competitive Edge</h2>
              <p className="font-sans text-outline-variant text-lg">Partner with the global leader in logistics intelligence. Speak with a solutions architect today.</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-bold text-xs text-outline mb-2 uppercase tracking-wider">Full Name</label>
                    <input className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-primary-container focus:ring-0 transition-all py-3 px-4 font-sans text-on-surface outline-none" placeholder="Enter your name" type="text" required />
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-xs text-outline mb-2 uppercase tracking-wider">Work Email</label>
                    <input className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-primary-container focus:ring-0 transition-all py-3 px-4 font-sans text-on-surface outline-none" placeholder="email@company.com" type="email" required />
                  </div>
                </div>
                <div>
                  <label className="block font-sans font-bold text-xs text-outline mb-2 uppercase tracking-wider">Company</label>
                  <input className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-primary-container focus:ring-0 transition-all py-3 px-4 font-sans text-on-surface outline-none" placeholder="Your organization" type="text" required />
                </div>
                <div>
                  <label className="block font-sans font-bold text-xs text-outline mb-2 uppercase tracking-wider">Primary Challenges</label>
                  <textarea className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 focus:border-primary-container focus:ring-0 transition-all py-3 px-4 font-sans text-on-surface outline-none resize-y min-h-[100px]" placeholder="Tell us about your current logistics bottlenecks" rows={4} required></textarea>
                </div>
                <div className="text-center pt-4">
                  <button className="w-full md:w-auto px-12 py-4 bg-primary-container text-slate-900 font-sans font-bold rounded hover:shadow-lg transition-all border-none cursor-pointer" type="button">
                    Submit Request
                  </button>
                  <p className="text-[11px] text-outline-variant mt-4 font-sans">By submitting, you agree to our processing of personal data in accordance with our Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
