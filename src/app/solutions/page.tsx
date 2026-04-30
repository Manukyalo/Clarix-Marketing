import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="font-sans text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Enterprise Solutions</span>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">Global Logistics Authority for the Modern Enterprise</h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Clarix delivers institutional-grade logistics intelligence. We transform complex global supply chains into resilient, high-performance assets through Corporate Precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary-container text-on-primary-container font-sans font-bold rounded shadow-sm hover:translate-y-[-1px] transition-all">Explore Industries</button>
              <button className="px-8 py-4 border border-outline-variant text-on-surface font-sans font-bold rounded hover:bg-surface-container-low transition-all">Download Overview</button>
            </div>
          </div>
        </section>

        {/* Solutions Bento Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto bg-white border-y border-slate-100">
          <div className="mb-16">
            <h2 className="font-sans text-4xl font-bold tracking-tight mb-4">Targeted Industry Excellence</h2>
            <p className="font-sans text-lg text-on-surface-variant max-w-xl leading-relaxed">Deep vertical expertise across the pillars of global commerce.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Manufacturing */}
            <div className="md:col-span-8 bg-surface-container-low border border-slate-200 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row h-full">
                <div className="p-10 md:w-1/2 flex flex-col justify-center">
                  <span className="material-symbols-outlined text-primary mb-6 text-4xl">precision_manufacturing</span>
                  <h3 className="font-sans font-bold text-2xl mb-4">Precision Manufacturing</h3>
                  <p className="font-sans text-on-surface-variant mb-6 leading-relaxed">Optimize JIT production cycles with AI-driven inventory replenishment and real-time raw material visibility.</p>
                  <ul className="space-y-3 mb-8 font-sans">
                    <li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Zero-lag Material Tracking</li>
                    <li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Automated Customs Harmonization</li>
                  </ul>
                  <Link href="#" className="inline-flex items-center font-bold text-primary group-hover:gap-2 transition-all font-sans">
                    View Solution <span className="material-symbols-outlined ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
                <div className="md:w-1/2 min-h-[300px] relative overflow-hidden">
                  <Image 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt="Manufacturing" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-LuAncXzQCA10kUuuiHE14o6F0jvc0dtiQZhp4cwa5UouBPFHpcAwb6QwIxD67n1la3yGJJ8XzV7D4VIE-z77Jbcos5AYuRNUS5FV-14S9XtNFczTCsGxcwc4qcyB4AWRexkUwiYAiN76OHAxVl_6uk5QS15tlAdI2KN1ANQ3biz5Qonpro_oc0f6laCPRAJ6peGemjgRvlzoOcFpCwjYrBCh5FBPx_kJH1mZv53Cm4iRXSS9CcRgnNnP6C26g4HpTvOljfXqrbtV"
                  />
                </div>
              </div>
            </div>
            
            {/* Retail */}
            <div className="md:col-span-4 bg-surface-container-low border border-slate-200 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="h-64 relative overflow-hidden">
                <Image 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Retail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDChvEMRSgZ2UlTYTR5NPtaXwBydHVHy2YfXcX90reo9GlQzQc1Ax-O7Y6qAHJTu30HLiAxk2JqaE2HeEgrkL5AFOAlvL-vAxUWCyfHcHtvVoDwUSAjWQ4mqaxv7QwdeVgBn1QixD-DzwjZGe-BayzSRZRCk9_q66gFJ5OeLlP-aEq5d8YlmrcTy2v9fABwkFmy_veqeiuQO9NKL1To6zl1ORyS1FHAvCwAmTxXGLb4yI-Gsaq70itdVvm8rmUScnEwCfZohEbyn8Lz"
                />
              </div>
              <div className="p-8">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">shopping_bag</span>
                <h3 className="font-sans font-bold text-2xl mb-2">Omnichannel Retail</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">Seamless last-mile delivery and inventory synchronization across physical and digital storefronts.</p>
              </div>
            </div>
            
            {/* Global Trade */}
            <div className="md:col-span-5 bg-surface-container-low border border-slate-200 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">public</span>
                  <h3 className="font-sans font-bold text-2xl mb-2">Global Trade Governance</h3>
                  <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">Navigate complex international regulations with automated compliance workflows and institutional-grade risk assessment.</p>
                </div>
                <div className="relative h-40 w-full mt-4 rounded-lg overflow-hidden shadow-inner">
                  <Image 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt="Global Trade" 
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi4so9IfBAiz9IYPDCaHCC9iyMGkXBJ383PyayRgh-JluNoUIOse6NrW861rdW3ka5eAqBM8fXWR2XYI0UFdaPcDuRjjat2ajwP6C6Ercmr642eWi7GjSDgS08DjEmxBxM-i9yZEIcYfndP5DjkTl2nCEHVBCE_L559tGLuR8nt1bkwt2sDHsTxMOTwILxUsdT_n9MpPjwDSQV2tKnhBynefG5eaTOQxw-UdS3ef1Ez5mhr9V6d7-q5VWUeqBWlI-QdYn42PaM7ARt"
                  />
                </div>
              </div>
            </div>
            
            {/* Custom Solutions */}
            <div className="md:col-span-7 bg-on-background text-white rounded-xl p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-[120px]">hub</span>
              </div>
              <h3 className="font-sans font-bold text-2xl mb-4 relative z-10">Bespoke Enterprise Integration</h3>
              <p className="font-sans text-slate-400 max-w-md mb-8 relative z-10 leading-relaxed">Need a specialized architecture? Our engineers work with your leadership to build custom logistical models that scale with your specific organizational DNA.</p>
              <button className="w-fit px-8 py-3 bg-primary-container text-on-primary-container font-sans font-bold rounded relative z-10 hover:opacity-90">Consult our Architects</button>
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl font-bold tracking-tight mb-4">Institutional Impact</h2>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Measurable results delivered for the world's most demanding logistics infrastructures.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 relative">
                <Image 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Executive Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCphl2XKGjGEXAiDnxdKAydZdHWalVB80bJBa1c7ewwywzEcxQDItWSpwHuuUT7ENN8Iq94AQwbH6rre_1kl-vuv6B5rdjOnsxyfL-bnjTaTxUGZbHiAPryNULQpyAhGy5OtKWBM2p9K59OWvLevuR2HJeW3Kqc1SPT82K62Xr1bmG-q_rbD5hsiqalcogQhGqyulBHytS48Lw5gRef6z4CskA4AGhfxRPVNDMzCokPnyuK7rw8rr_czWoamezK75nXQKtWkT2lmYJ_"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-primary-container font-sans font-bold text-xs uppercase tracking-widest mb-2 block">Energy Sector</span>
                  <h4 className="text-white font-sans font-bold text-2xl">22% OpEx Reduction for PetroGen</h4>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant text-sm px-2 leading-relaxed">How Clarix streamlined cross-border equipment logistics for a multi-national energy provider.</p>
            </div>
            
            {/* Case Study 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 relative">
                <Image 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Network Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbX3GkM1qeMxrqiX77BpCjJJf3gMID4DJoNuBMOPuMUR-Ay8oRFX0rTFjNR3dp1ES4dZmkvzJSKjVoTv0xJukyVKTeNS8B2DBgObimuLkNTYOLrYzHedoD7eu7nd85CzsP4ohUQUyKCKiMLBz4-53Lon2rQfwNw7SbtpPFOXzbuZ6bk9J10JvO_NOlN-uHE5lPqBiLP-ukJHUnOTOAhRhOU3gsPKEcL281stort50hPQ2O_s_BpXSXLAcXQhSXMYNeASWEhVpJHECj"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-primary-container font-sans font-bold text-xs uppercase tracking-widest mb-2 block">Consumer Goods</span>
                  <h4 className="text-white font-sans font-bold text-2xl">Global Fleet Optimization</h4>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant text-sm px-2 leading-relaxed">Implementing dynamic routing for a leading FMCG conglomerate across four continents.</p>
            </div>
            
            {/* Case Study 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 relative">
                <Image 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Pharma Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbiOrOm3y3PzUyz-pWbu9IMP_3qbipPX54Gi4W1wIjsvHJHD8DGeErDJIt4Fkk3z0FEQFZPmgLcnEeMAfNbl8SPDlAClOBiPo_A6vfhS7-SyJVVdOl7_EVzfC2GvyMuBO1etlYK0qcSUV5DAZF16OaaO_3wpdbiE0HeueifL19n7SdiVHAIMVogV2S4rcjBaUrTf5uqdcbZJYlLxg2K-b-qnj3qQqvKHijQ5Z3lf11-M7RWJ49hah7MfL_MG7LO3ST17DhlJ87-_8N"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-primary-container font-sans font-bold text-xs uppercase tracking-widest mb-2 block">Pharmaceuticals</span>
                  <h4 className="text-white font-sans font-bold text-2xl">Cold-Chain integrity Secured</h4>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant text-sm px-2 leading-relaxed">Zero-loss transit achievement for temperature-sensitive medical supplies during global disruption.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 mb-20">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <h2 className="font-sans text-5xl font-bold tracking-tight mb-6 relative z-10">Architect Your Logistics Future</h2>
            <p className="font-sans text-slate-400 max-w-2xl mx-auto mb-10 text-lg relative z-10 leading-relaxed">Connect with our enterprise strategy team for a comprehensive audit of your current supply chain architecture.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="px-10 py-4 bg-primary-container text-slate-950 font-sans font-bold rounded hover:scale-[1.02] transition-transform">Schedule Strategic Consultation</button>
              <button className="px-10 py-4 border border-slate-700 text-white font-sans font-bold rounded hover:bg-slate-800 transition-all">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
