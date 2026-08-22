import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 relative bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Sleek Dark CTA Card with Concentric Radial Rings */}
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#11101d] border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden shadow-[0_30px_90px_-20px_rgba(17,16,29,0.5)]">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[250px] bg-[#6e73fa]/15 blur-[100px] pointer-events-none" />

          {/* Right Side Concentric Architectural Wireframe Circles */}
          <div className="absolute -right-20 -top-20 w-[480px] h-[480px] rounded-full border border-white/5 pointer-events-none hidden md:block">
            <div className="absolute inset-10 rounded-full border border-white/5" />
            <div className="absolute inset-20 rounded-full border border-white/5" />
            <div className="absolute inset-32 rounded-full border border-white/5" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left Content: Tagline, Headline & Start a Conversation CTA */}
            <div className="max-w-2xl space-y-6">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#9d9cb5] font-semibold block">
                OPEN TO THE RIGHT OPPORTUNITY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.15]">
                Have an ambitious product <br />
                that needs momentum?
              </h2>

              <div className="pt-2">
                <a
                  href="mailto:maroofmohdmalik@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#f87171] via-[#fb7185] to-[#c084fc] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(244,114,182,0.35)] hover:shadow-[0_14px_40px_rgba(244,114,182,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Start a conversation</span>
                  <FiArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Content: Email Callout */}
            <div className="flex flex-col items-start lg:items-center lg:text-center space-y-2 lg:pr-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f87171] mb-1 shadow-inner">
                <FiMail className="w-5 h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#8c859d] font-semibold">
                EMAIL ME AT
              </span>
              <a
                href="mailto:maroofmohdmalik@gmail.com"
                className="text-sm sm:text-base font-semibold text-white hover:text-[#fb7185] transition-colors"
              >
                maroofmohdmalik@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Minimal Studio Bar */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c859d]">
          {/* Left Avatar & Author */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#f87171] to-[#c084fc] flex items-center justify-center text-white font-extrabold text-[10px] shadow-sm">
              MM
            </div>
            <span className="font-medium text-[#201f32]">
              Mohd Maroof <span className="text-[#8c859d]">· Senior Frontend Developer</span>
            </span>
          </div>

          {/* Center Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mdmaroof"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl bg-white border border-[#e3e2e8] text-[#4d5564] hover:text-[#1f1f32] hover:border-[#201f32] flex items-center justify-center transition-all shadow-2xs"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mohd-maroof-535619118"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl bg-white border border-[#e3e2e8] text-[#4d5564] hover:text-[#1f1f32] hover:border-[#201f32] flex items-center justify-center transition-all shadow-2xs"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:maroofmohdmalik@gmail.com"
              className="w-8 h-8 rounded-xl bg-white border border-[#e3e2e8] text-[#4d5564] hover:text-[#1f1f32] hover:border-[#201f32] flex items-center justify-center transition-all shadow-2xs"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Copyright */}
          <div>
            <span>© {new Date().getFullYear()} · Built by Mohd Maroof</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
