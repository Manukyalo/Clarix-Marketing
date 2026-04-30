import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Image from "next/image";

export default function Platform() {
  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <span className="font-sans text-sm font-medium text-primary tracking-widest uppercase mb-6 block">The Infrastructure of Trade</span>
              <h1 className="font-sans text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">The Core Architecture of Global Operations.</h1>
              <p className="font-sans text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                Clarix OS is a purpose-built infrastructure designed to unify fragmented logistics data into a singular, high-performance execution environment. Reliable, secure, and infinitely scalable.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-container text-on-primary-container px-8 py-4 font-sans font-bold rounded shadow-sm hover:shadow-md transition-shadow">Explore Documentation</button>
                <button className="border border-outline-variant px-8 py-4 font-sans font-bold rounded hover:bg-surface-container-low transition-colors">View Security Whitepaper</button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30 relative">
                <Image 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Platform Core" 
                  className="object-cover grayscale brightness-110 contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4TWfFhmW4-lS89vS-OyiT3u4a7SZC5tmIoFu09h4FQtW0MKKDircYt4sNCA0UCXbLfUqSMy9ZYHanGW3jkEfgRRmEgg1FjOOt8kfuXoiew92ibIALUCMKY_bC5rZ8ox0LeCHOCVqqlpPPEEV4yy4uN2QQS6jxk2T45c1Db-4HoIGTlQ0pnsYDMIKAEp2S1IPCkE6k3l1zZeThZKjAuGgrJw-ypqQDgUVWHp0e-LQuZmfdUZvlK4r5zdQNjdt4AEWSnGpMmFR6EhfR"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-slate-100 max-w-xs rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary-container">verified_user</span>
                  <span className="font-sans text-sm font-bold uppercase">Uptime Guaranteed</span>
                </div>
                <p className="text-3xl font-black text-slate-900">99.999%</p>
                <p className="text-xs text-slate-500 mt-1 font-sans">Enterprise-grade reliability across 42 global regions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture Section (Bento Grid) */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-sans text-4xl font-bold tracking-tight mb-4">Hardened Security Architecture.</h2>
              <p className="font-sans text-lg text-on-surface-variant max-w-2xl leading-relaxed">Security isn't a feature; it's the foundation. Our multi-layered defense strategy protects data integrity at every hop.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-10 border border-outline-variant flex flex-col justify-between group hover:border-primary-container transition-colors rounded-xl">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary-container mb-6">lock</span>
                  <h3 className="font-sans font-bold text-2xl mb-4">Zero-Trust Environment</h3>
                  <p className="text-on-surface-variant max-w-md font-sans leading-relaxed">Every request is authenticated, authorized, and continuously validated. We employ identity-based micro-segmentation to ensure lateral movement is impossible.</p>
                </div>
                <div className="mt-12 flex items-center gap-4 text-sm font-bold text-primary group-hover:translate-x-2 transition-transform font-sans">
                  LEARN MORE <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
              
              <div className="bg-white p-10 border border-outline-variant hover:border-primary-container transition-colors rounded-xl">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-6">shield</span>
                <h3 className="font-sans font-bold text-2xl mb-4">AES-256 Encryption</h3>
                <p className="text-on-surface-variant font-sans leading-relaxed">Military-grade encryption for data at rest and in transit. Your proprietary logistics data remains entirely opaque to unauthorized entities.</p>
              </div>
              
              <div className="bg-white p-10 border border-outline-variant hover:border-primary-container transition-colors rounded-xl">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-6">terminal</span>
                <h3 className="font-sans font-bold text-2xl mb-4">Automated Audit</h3>
                <p className="text-on-surface-variant font-sans leading-relaxed">Immutable ledger logging for every system interaction, ensuring total compliance with global regulatory standards like GDPR and SOC2.</p>
              </div>
              
              <div className="md:col-span-2 bg-slate-900 p-10 text-white relative overflow-hidden rounded-xl">
                <div className="relative z-10">
                  <h3 className="font-sans font-bold text-2xl mb-4 text-white">Quantum-Resistant HSM</h3>
                  <p className="text-slate-400 max-w-lg mb-8 font-sans leading-relaxed">Deploying next-generation hardware security modules to safeguard the keys of tomorrow. Our architecture is built to withstand emerging cryptographic threats.</p>
                  <div className="flex gap-4">
                    <span className="px-3 py-1 bg-white/10 text-xs font-bold tracking-widest rounded-full uppercase font-sans">ISO 27001</span>
                    <span className="px-3 py-1 bg-white/10 text-xs font-bold tracking-widest rounded-full uppercase font-sans">HIPAA Compliant</span>
                  </div>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] opacity-20 rotate-12">
                  <span className="material-symbols-outlined text-[240px]">security</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Layer (Diagrammatic/Asymmetric) */}
        <section className="py-24 intelligence-layer-grid relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-xl">
                <span className="font-sans text-sm font-medium text-primary tracking-widest uppercase mb-4 block">The Core Logic</span>
                <h2 className="font-sans text-4xl font-bold tracking-tight">The Intelligence Layer.</h2>
              </div>
              <p className="text-on-surface-variant max-w-sm border-l-2 border-primary-container pl-6 font-sans leading-relaxed">
                Beyond simple routing, our intelligence layer synthesizes global signals into actionable operational commands.
              </p>
            </div>
            
            <div className="relative py-12">
              {/* Orchestration Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                <div className="bg-white border border-outline-variant p-8 relative z-20 rounded-xl">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-on-primary-container">sensors</span>
                  </div>
                  <h4 className="font-sans font-bold text-xl mb-3">Signal Ingestion</h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Real-time telemetry from 1.2M nodes including ports, vessels, and weather satellites.</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center relative">
                  <div className="w-full h-[1px] bg-outline-variant absolute"></div>
                  <span className="material-symbols-outlined text-outline bg-surface px-2 relative z-10">chevron_right</span>
                </div>
                
                <div className="bg-white border border-outline-variant p-8 relative z-20 shadow-xl rounded-xl">
                  <div className="w-12 h-12 bg-secondary flex items-center rounded-lg justify-center mb-6">
                    <span className="material-symbols-outlined text-white">psychology</span>
                  </div>
                  <h4 className="font-sans font-bold text-xl mb-3">Neural Processing</h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Proprietary AI models analyze congestion patterns and predict delays before they occur.</p>
                </div>
                
                <div className="bg-white border border-outline-variant p-8 relative z-20 rounded-xl">
                  <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-on-tertiary-container">rocket_launch</span>
                  </div>
                  <h4 className="font-sans font-bold text-xl mb-3">Active Routing</h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Autonomous adjustment of shipping lanes and fulfillment priorities in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Distribution Map Section */}
        <section className="py-24 border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-sans text-4xl font-bold tracking-tight mb-8">Edge-to-Edge Continuity.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-primary pt-1"><span className="material-symbols-outlined">public</span></div>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-2">Global Low-Latency Node Network</h4>
                      <p className="font-sans text-on-surface-variant text-sm leading-relaxed">Deployment across every major trade hub ensures sub-10ms response times for critical logistics decisions.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-primary pt-1"><span className="material-symbols-outlined">lan</span></div>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-2">Seamless Integration Engine</h4>
                      <p className="font-sans text-on-surface-variant text-sm leading-relaxed">Universal API connectors bridge the gap between legacy ERP systems and modern IoT hardware ecosystems.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-primary pt-1"><span className="material-symbols-outlined">sync</span></div>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-2">Infinite Redundancy</h4>
                      <p className="font-sans text-on-surface-variant text-sm leading-relaxed">Self-healing architecture that automatically reroutes data traffic if a regional node experiences failure.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-slate-50 border border-outline-variant p-1 rounded-xl aspect-[16/9] overflow-hidden grayscale relative">
                  <Image 
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    alt="Global Node Distribution" 
                    className="object-cover rounded-lg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkd2aPS91WPxKwiEyX0mW-_wdxsQ-kemkd-0QkuMT5Fptm9XGo5yJmYygrh96B2JthB1skprjERic2INN8leUlvkHWuOjSK6gTCkW_pgjEYYX76mzMzKfLOptJsHjJlLhzPbCp_T1Vaie3_QlcO_wTjOLlkq-Vi5JCMf8o3AFx_LszhmMuyAtE7Zj8TskW88A91wFFXyyy9tdr2PeG_kY8ztI1PH9JUpq3oc4J0K8oofuWV-R09akjOne-1QLbetUUQURv9dh1u71T"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-primary rounded-2xl px-12 py-20 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-sans text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Build the Future of Logistics.</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-10 font-sans text-lg leading-relaxed">Get started with Clarix OS today and transform your infrastructure into a competitive advantage.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-10 py-4 font-sans font-bold rounded hover:bg-slate-50 transition-colors">Contact Sales Engineering</button>
                  <button className="border-2 border-white text-white px-10 py-4 font-sans font-bold rounded hover:bg-white/10 transition-colors">Developer Portal</button>
                </div>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <span className="material-symbols-outlined text-[300px] text-white">architecture</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
