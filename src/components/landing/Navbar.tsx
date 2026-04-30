"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans tracking-tight ${
          scrolled ? "bg-surface/95 backdrop-blur-md border-b border-outline-variant py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container-xl flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
          {/* Wordmark */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-2.5 text-[var(--foreground)] no-underline"
            aria-label="Clarix home"
          >
            <div
              className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm"
              style={{ backgroundColor: "var(--primary)" }}
            >
              CX
            </div>
            <span className="text-xl font-bold tracking-tighter text-on-surface">
              CLARIX
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm text-on-surface-variant font-medium hover:bg-surface-container-low transition-all duration-200 cursor-pointer border-none bg-transparent rounded">
              Login
            </button>
            <button className="btn-azure px-6 py-2 rounded-lg">
              Request Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-on-surface border-none bg-transparent cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-8 px-6 bg-surface/95 backdrop-blur-md border-b border-outline-variant"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={handleNavClick}
                  className="text-base font-semibold text-left text-on-surface no-underline p-0"
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button className="px-4 py-2 text-sm text-on-surface-variant font-medium hover:bg-surface-container-low transition-all duration-200 cursor-pointer border border-outline-variant bg-transparent rounded">
                  Login
                </button>
                <button className="btn-azure w-full justify-center">
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
