import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HardHat, LogIn } from "lucide-react";
import config from "../config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = config.footer.quickLinks.slice(0, 4);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f172a]/90 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-orange-500 rounded-sm flex items-center justify-center group-hover:bg-orange-400 transition-colors">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-lg tracking-tight">
                  {config.company.shortName}
                </span>
                <span className="block text-orange-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Construction
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 text-sm font-medium tracking-wide transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors border border-white/20 hover:border-white/40 px-4 py-2 rounded-sm">
                <LogIn className="w-4 h-4" />
                Site Progress
              </button>
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-5 py-2 rounded-sm transition-colors tracking-wide"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-orange-400 text-base font-medium py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-5 py-3 rounded-sm text-center transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
