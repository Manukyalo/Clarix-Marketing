import Link from "next/link";

const FOOTER_LINKS = {
  Platform: [
    { label: "Intelligence Engine", href: "/platform#intelligence" },
    { label: "Carrier Connect", href: "/platform#connect" },
    { label: "Analytics", href: "/platform#analytics" },
    { label: "Security", href: "/platform#security" },
  ],
  Company: [
    { label: "About", href: "/company#about" },
    { label: "Careers", href: "/company#careers" },
    { label: "Blog", href: "/resources#blog" },
    { label: "Contact", href: "/company#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6 text-white no-underline">
              <div
                className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "var(--primary)" }}
              >
                CX
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                CLARIX
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-sans">
              Enterprise-grade AI for intelligent logistics, supply chain optimization, and automated carrier networks.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-bold mb-6 tracking-tight">
                {group}
              </h4>
              <ul className="space-y-4 p-0 list-none m-0">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-slate-400 hover:text-white transition-colors font-sans no-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-sans">
          <p className="m-0">© {new Date().getFullYear()} Clarix Intelligence Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors no-underline text-inherit">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors no-underline text-inherit">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
