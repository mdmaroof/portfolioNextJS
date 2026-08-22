import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMenu, FiX, FiSend } from "react-icons/fi";

export const Navbar: React.FC = () => {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isHiddenInProjects, setIsHiddenInProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const navLinks = [
    { id: "overview", label: "Overview", href: "#overview" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "agent", label: "AI Agent", href: "#agent" },
    { id: "projects", label: "Projects", href: "#projects" },
  ];

  // Scroll condensing, section spy, and auto-hide in projects showcase
  useEffect(() => {
    const handleScroll = () => {
      // 1. Condense width on scroll
      if (window.scrollY > 50) {
        setIsCondensed(true);
      } else {
        setIsCondensed(false);
      }

      // 2. Smoothly hide navbar when entering the Projects iPhone scroll showcase
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const rect = projectsEl.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 100) {
          setIsHiddenInProjects(true);
        } else {
          setIsHiddenInProjects(false);
        }
      }

      // 3. Detect active section based on scroll position
      const scrollPosition = window.scrollY + 220;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <m.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: isHiddenInProjects ? -100 : 0,
            opacity: isHiddenInProjects ? 0 : 1,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between gap-4 px-4 py-2.5 rounded-full bg-[#141522]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_-15px_rgba(20,21,34,0.6),0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 ${
            isHiddenInProjects ? "pointer-events-none" : "pointer-events-auto"
          } ${
            isCondensed
              ? "w-full max-w-[760px] py-2 px-3.5 shadow-[0_25px_60px_-15px_rgba(20,21,34,0.8)]"
              : "w-full max-w-[880px]"
          }`}
        >
          {/* Brand Logo & Live Status */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#262ef2] to-[#8b90ff] flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-[#262ef2]/40 group-hover:scale-105 transition-transform">
                MM
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#141522]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight group-hover:text-[#8b90ff] transition-colors">
                Mohd Maroof
              </span>
              <span className="text-[10px] font-mono text-[#8c859d] leading-none hidden sm:block">
                Senior Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Animated Sliding Pill */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/10 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors z-10 ${
                    isActive ? "text-white font-bold" : "text-[#a3a6c2] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <m.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-[#262ef2] shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-white hover:bg-[#f0f0fa] text-[#141522] rounded-full text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Get in Touch</span>
              <FiArrowRight className="w-3 h-3 text-[#262ef2] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </m.nav>
      </header>

      {/* Mobile Animated Glass Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-5 bg-[#141522]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl md:hidden text-white flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-1">
              <span className="text-xs font-mono font-bold text-[#8b90ff] uppercase tracking-wider">
                NAVIGATION
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#262ef2] text-white font-bold"
                    : "text-[#a3a6c2] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-[#262ef2] hover:bg-[#1d24cf] text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#262ef2]/30"
              >
                <FiSend className="w-3.5 h-3.5" />
                <span>Contact Mohd Maroof</span>
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
