import React, { useState } from "react";
import { m } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "maroofmohdmalik@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Studio Frosted Glassmorphism Card */}
        <m.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] sm:rounded-[44px] bg-white/85 backdrop-blur-2xl border border-white/95 p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_-20px_rgba(38,46,242,0.1),0_0_0_1px_rgba(255,255,255,0.9)] overflow-hidden"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -right-24 w-[450px] h-[300px] bg-[#262ef2]/8 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[250px] bg-[#6e73fa]/10 blur-[100px] pointer-events-none" />

          {/* Decorative Corner Watermark */}
          <div className="absolute -bottom-10 -right-10 text-[180px] font-extrabold text-[#262ef2]/[0.03] select-none pointer-events-none font-mono">
            MM
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Top Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3f3f9] border border-[#e3e2e8] text-xs font-mono text-[#201f32] font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Senior Contracts &amp; Key Roles</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1f1f32] leading-[1.12]">
              Let's build something <br />
              <span className="serif-accent blue-accent font-normal italic">remarkable together.</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#4d5564] leading-relaxed max-w-2xl">
              Looking for a Senior Frontend Developer who architects sub-second web platforms, delivers 0-to-1 mobile experiences, and executes with founder-level speed?
            </p>

            {/* Action Buttons & Instant Copy Row */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="btn-dark px-7 py-3.5 rounded-2xl text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                <span>Start a conversation</span>
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Click to Copy Email Pill */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-[#e2e2ec] hover:border-[#262ef2] text-[#201f32] font-mono text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-sm"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4 text-[#262ef2]" />
                    <span>{email}</span>
                  </>
                )}
              </button>

              {/* LinkedIn Pill */}
              <a
                href="https://linkedin.com/in/mohd-maroof-535619118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white border border-[#e2e2ec] hover:border-[#262ef2] text-[#4d5564] hover:text-[#262ef2] text-xs sm:text-sm font-medium transition-all shadow-xs"
              >
                <FiLinkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Pill */}
              <a
                href="https://github.com/mdmaroof"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white border border-[#e2e2ec] hover:border-[#262ef2] text-[#4d5564] hover:text-[#262ef2] text-xs sm:text-sm font-medium transition-all shadow-xs"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </m.div>

        {/* Bottom Minimal Studio Bar */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c859d]">
          {/* Left Avatar & Author */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#262ef2] to-[#6e73fa] flex items-center justify-center text-white font-extrabold text-[10px] shadow-sm">
              MM
            </div>
            <span className="font-semibold text-[#1f1f32]">
              Mohd Maroof <span className="font-normal text-[#8c859d]">· Senior Frontend Developer</span>
            </span>
          </div>

          {/* Right Copyright */}
          <div>
            <span>© {new Date().getFullYear()} · Designed &amp; Built by Mohd Maroof</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
