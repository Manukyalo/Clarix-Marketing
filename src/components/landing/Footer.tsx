import { MessageSquare, Globe, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center font-bold text-xs">C</div>
            <span className="text-sm font-bold tracking-tighter opacity-80 uppercase">Clarix Logistics</span>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-all text-white/40 hover:text-[#00b8ff]">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-all text-white/40 hover:text-[#00b8ff]">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-all text-white/40 hover:text-[#00b8ff]">
              <Link className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
            © 2024 Clarix Intelligence Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
