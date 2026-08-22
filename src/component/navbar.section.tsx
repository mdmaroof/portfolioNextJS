import React, { useState, useEffect } from "react";
import { FiArrowRight, FiMenu, FiX, FiSend, FiAward } from "react-icons/fi";

export const Navbar: React.FC = () => {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsCondensed(true);
      } else {
        setIsCondensed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Experience", href: "#experience" },
    { label: "AI Agent", href: "#agent" },
    { label: "Architecture", href: "#architecture" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <>
      <nav className={`site-nav ${isCondensed ? "condensed" : ""}`} id="site-nav">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#262ef2] to-[#6e73fa] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-[#262ef2]/30 group-hover:scale-105 transition-transform">
            MM
          </div>
          <span className="text-sm md:text-base font-bold text-white tracking-tight">
            Mohd Maroof
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#2b2a40]/60 p-1 rounded-full border border-white/10">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-[#b9bcd0] hover:text-white hover:bg-white/10 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white text-[#201f32] rounded-full text-xs font-semibold hover:bg-[#eceef8] transition-all shadow-sm"
          >
            <span>Get in Touch</span>
            <FiArrowRight className="w-3 h-3 text-[#262ef2]" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 p-4 bg-[#201f32] border border-[#3b3a55] rounded-2xl shadow-2xl md:hidden text-white flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#b9bcd0] hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 mt-1">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#262ef2] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <FiSend className="w-3.5 h-3.5" />
              Contact Mohd Maroof
            </a>
          </div>
        </div>
      )}
    </>
  );
};
