import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Image from "next/image";

export default function CompanyPage() {
  return (
    <div className="bg-background text-on-background font-sans antialiased min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section: Our Mission */}
        <section className="relative py-32 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-6 text-on-primary-container bg-primary-container/10 border border-primary-container/20 font-sans text-sm font-medium uppercase tracking-widest rounded">East African Logistics Tech</span>
              <h1 className="font-sans text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">Digital Intelligence for Clearing &amp; Forwarding Agents across East Africa.</h1>
              <p className="font-sans text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">Clarix is a specialized startup providing the modern software backbone for clearing and forwarding agents in Mombasa, Nairobi, and across East Africa. We're streamlining cross-border trade through digital innovation.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-container text-white px-8 py-4 rounded font-bold shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-transform">Read Our Story</button>
                <button className="border border-outline-variant px-8 py-4 rounded font-bold hover:bg-slate-50 transition-colors text-slate-700">Contact Press</button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative">
                <Image 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                  alt="A low-angle architectural photograph of a sleek, modern glass skyscraper reaching toward a clear blue sky." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVpEeqU-d7gKUXextT87gHDbWprTyTzx7GlnVnvnTg0ebRWGhbh8uvSc4ZDgxqfXi1VbfZJ-qkbc8ALYBwQc07XctvF6EoS-LIFWpWdxXtWzfj_EaBJy29PuMKs6RrGaOhxtkIrRg7rjmmgkg_Kdlmtk_4SZskFYwtLQ0l6XXcQ93IUROGr4RG52Pim7_HRf06p8tG-WvjVM35gAMosSmLPbkMcrcqqhHlvHhlZxhXP7iO3fHgIMJPbIRLu13tmRpzbPB1V7n7_QEZ"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="text-4xl font-black text-primary-container mb-1">99.9%</div>
                <div className="text-sm font-sans text-slate-500 uppercase tracking-widest font-medium">Network Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story: Bento Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-sans text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Regional Mission</h2>
              <div className="w-20 h-1 bg-primary-container"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-white p-12 rounded-xl border border-outline-variant flex flex-col justify-between hover:border-primary-container transition-colors">
                <div>
                  <h3 className="font-sans text-2xl font-bold mb-6 text-slate-900">Born in Nairobi</h3>
                  <p className="font-sans text-base text-on-surface-variant max-w-2xl leading-relaxed">Starting in Nairobi, Clarix was built to solve the specific complexities of East African trade routes. From the Port of Mombasa to the borders of the EAC, our software eliminates the manual bottlenecks that slow down clearing and forwarding agents. We are digitizing the gateway to the continent.</p>
                </div>
                <div className="mt-12 flex items-center gap-8">
                  <div>
                    <span className="block text-3xl font-bold text-slate-900">5+</span>
                    <span className="text-xs text-slate-500 uppercase font-sans tracking-widest font-medium">Regional Hubs</span>
                  </div>
                  <div className="w-px h-12 bg-slate-200"></div>
                  <div>
                    <span className="block text-3xl font-bold text-slate-900">250+</span>
                    <span className="text-xs text-slate-500 uppercase font-sans tracking-widest font-medium">Local Partners</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-primary-container p-12 rounded-xl text-white flex flex-col justify-center shadow-lg shadow-primary-container/20 hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-5xl mb-6">workspace_premium</span>
                <h3 className="font-sans text-2xl font-bold mb-4 leading-tight">East Africa's Digital Gateway</h3>
                <p className="opacity-90 font-sans leading-relaxed">Proudly supporting the digital transformation of logistics agents from Mombasa to Kampala.</p>
              </div>
              <div className="md:col-span-4 bg-white p-8 rounded-xl border border-outline-variant hover:border-primary-container transition-colors flex flex-col justify-center">
                <h4 className="font-sans font-bold text-slate-900 mb-2 text-xl">Sustainable Future</h4>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">Committed to reducing maritime carbon footprints through intelligent routing and load optimization.</p>
              </div>
              <div className="md:col-span-8 overflow-hidden rounded-xl h-48 md:h-auto relative group">
                <Image 
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="A wide panoramic shot of a high-tech logistics hub during golden hour." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZUmo-lhHB9qL0MnuUM_4U_V_TsKhd1hqgIOeIzQSpZOaYQuYQnOltASUYRrv8ed2EualuLFmrubwfx_yQfE9oCyRiBYnTind3qLZrpOgozaOYT9RZclv_nrt5t-_XWffMj-InU4Y9grXp-h8G-BSRgfet5Cpi5KGu_0qcYKX9CMuxGJghn4B-Yzf1aosPvxdq30g57n5He__D-ptj_NrDBvw_aLCAcIUTGihb8k0H9UcTcYNeCaEHUSic3F0HO5jZ_kaZQPszFWo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact: Map Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="font-sans text-4xl font-bold text-slate-900 mb-6 tracking-tight">East African Intelligence Network</h2>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Our platform connects the Mombasa-Nairobi-Naivasha corridor with the wider East African Community, providing real-time visibility for every shipment.</p>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="aspect-[21/9] bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
              <Image 
                fill
                sizes="100vw"
                className="object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700" 
                alt="A sophisticated digital world map displayed on a large high-resolution screen in a darkened control room." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxiKNdmfgmvNmciIVRTSkNOr27XA9d-89ooJ93TtrtS-QRvTGjfd4TNom6z0ywa7Ai0TcQeLgcCTCUXws489Uk0QNo1UXhFfiKWxCxWBEQc2jod-5-vqFNgTgCkA1friKVWES7XSX77zgf-FyfoUvKPGVhQvvXzz68D9zZc9YoGQBUyUS1kdNwDaOCYPfn9IT9ibr-QZMVZv6GoaiYcm5d1i3cP1Hna_pxrqccN07rRjTs_tZcUCHdGrk3dcgzw6eRl4S2iVlqmLmt"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-8 py-4 rounded-lg shadow-2xl border border-white">
                  <span className="text-slate-900 font-bold tracking-tight font-sans">Active Nodes: 12,482</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers: Recruitment CTA */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Build the Future of African Trade</h2>
              <p className="font-sans text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">We're looking for thinkers and builders based in Nairobi and Mombasa to help us redefine how goods move across the region. At Clarix, you're building the infrastructure of a digital East Africa.</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">domain</span>
                  <div>
                    <h5 className="font-sans font-bold text-lg text-white">Global Presence</h5>
                    <p className="text-sm text-slate-400 font-sans mt-1">Remote-first options with hubs in London, Singapore, and NYC.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl">rocket_launch</span>
                  <div>
                    <h5 className="font-sans font-bold text-lg text-white">Accelerated Growth</h5>
                    <p className="text-sm text-slate-400 font-sans mt-1">Comprehensive professional development and stock options.</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-primary-container text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">Explore Careers</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-slate-800 rounded-xl overflow-hidden relative group">
                  <Image 
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="A candid, high-end office shot of a diverse team of professionals collaborating" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7NHHAEjWGTrGhbN5EVO7HFZGqgZX6w4lSDOtHyixUK0yLIONXuhQ84uKoQNoZT36AHoM_7Clyp4fzAVvd5Sr7gsJZ3gQijMnXkx-2Hby9ACA-FwMNqdOTHyx37FfAZC5l2z_WygVtWqE9HflnhBIFSFmPQBqZuCNok6RfxCpc5XrcIWp2EEbjjp-e8Hqp8sNVh6_iYL7m6WKn1UzU_7cwHQXeYGJ3OKFCuiHEDVmRfGo4UPimVd8zaGJzyrQqZIO1CgjpTZFvZZwZ"
                  />
                </div>
                <div className="h-48 bg-slate-800 rounded-xl overflow-hidden relative group">
                  <Image 
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="An expansive, minimalist corporate office lobby" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXP0G5__Cc72p4k76YhkX6AatkmrtHbty-wJRlRLGGYzoHN64nIlaPLDYQ_9Hjs0qUfZ4CRYtr3uvtFe9lABctdw9KSvFHjxzNRqancsVWdrgo7gGjflXyt9YFnBfQXKJr94UQAD70W04pg9qKo2kwy1BlVn33mE6bV0d1zBH2tmaiyb7iSYVNpXYd616uhzA7-_AU9BUTMUUtDkhkR5owTlo-835HO2vuY4nF-ezmZqXplFEOwC4CL_whENC54ZHhJg7a-7aZCoxy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 bg-slate-800 rounded-xl overflow-hidden relative group">
                  <Image 
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="A close-up shot of a high-resolution data visualization screen" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcf-OI-5zkiC5_7GB-vNYjvZVRbcAzx6oKP0_8740Zdj4P9i_e9fWm-nwhkTHep_DY9NLLiqAD9YTbRk9oj3LqAz6yd-_yW3seChytdhcQUi6FdJDLsOGa_qxgKqxjNCxACkK0IbWiIKUAkXQY0E92p4k-lX3Yd8LJlnJtiCSiIApnpYWwUz9zzgtZlqt_9uQFRDjSTy17iFrazMIEUPmXT9bvWx9dGGBK02P_X8mV_sJeJ2_6eFExcZXvAo5F8PlYc5BbRiP887th"
                  />
                </div>
                <div className="h-64 bg-slate-800 rounded-xl overflow-hidden relative group">
                  <Image 
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="A focused professional team meeting in a clean, minimalist boardroom." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ4h_R7epT-QS7UuWIZkhjEYns3642dqXV55Rn8d_R52ADGjELYmx7s6neCNpHAOARIHPjAxdXafduC4s50H_ZTmOowa39T37Khtph9zItPWrU609nYfSs-_OlsE25BXiBHWHAEU2o8O9oG0s_YsNlXzJFaNaHYY0hMiUcCjZCCJFUZ82_8Id297dAScHsbT8A3LREa9s5CSyZvaxJdA2sk_Kc1JLKKpyHHZtyh_MP-drIFRMmjb6I2r9PpzG8EkR0-0QJaiGXD_lR"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
