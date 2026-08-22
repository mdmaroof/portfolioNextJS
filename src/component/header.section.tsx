import React, { useState, useEffect } from "react";
import { FiArrowRight, FiCpu, FiMail, FiCheck, FiCopy, FiSparkles } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface HeaderComponentProps {
  data: any;
  onMessageSentSuccess?: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ data }) => {
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "maroofmohdmalik@gmail.com";

  const headlines = [
    "with Sub-Second Speed.",
    "with 0-to-1 Execution.",
    "for High-Scale Web & Mobile.",
    "with Precision UI Systems.",
  ];

  // Smooth Typewriter
  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer: any = null;

    const tick = () => {
      const fullWord = headlines[wordIdx];
      if (!isDeleting) {
        charIdx++;
        setTypedText(fullWord.slice(0, charIdx));
        if (charIdx === fullWord.length) {
          isDeleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 50);
      } else {
        charIdx--;
        setTypedText(fullWord.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % headlines.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 25);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-14 overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Eyebrow & Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-block mb-4">
            <span className="tag">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1" />
              Senior Frontend Developer · 6+ Yrs Exp
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="relative my-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1f1f32] leading-[1.08]">
              Crafting High-Speed Products <br />
              <span className="serif-accent blue-accent font-normal inline-block mt-1">
                {typedText}
                <span className="inline-block w-1.5 h-8 sm:h-12 bg-[#262ef2] ml-1.5 align-middle animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Hero Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#4d5564] max-w-2xl mx-auto font-normal leading-relaxed">
            Senior Frontend Engineer specializing in <strong className="text-[#201f32]">React, Next.js, and React Native</strong>. 
            Proven track record of turning complex architectures into blazing-fast, delightful user experiences.
          </p>

          {/* CTA Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#experience" className="btn-dark px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
              <span>View Experience</span>
              <span className="btn-arrow">
                <FiArrowRight className="btn-arrow-icon" />
                <FiArrowRight className="btn-arrow-icon-second" />
              </span>
            </a>

            <a href="#agent" className="btn-outline px-6 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-all">
              <span>Ask AI Agent</span>
              <FiCpu className="w-4 h-4 text-[#262ef2]" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#e2e2ec] hover:border-[#262ef2] text-[#201f32] font-mono text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-sm"
            >
              {copied ? (
                <>
                  <FiCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="w-4 h-4 text-[#262ef2]" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          {/* Core Tech Stack Badges Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8c859d] mr-1 hidden sm:inline-block">
              Core Stack:
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiReact className="text-[#00d8ff] w-3.5 h-3.5" /> React &amp; React Native
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiNextdotjs className="text-[#000] w-3.5 h-3.5" /> Next.js (SSR / SSG)
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiTypescript className="text-[#3178c6] w-3.5 h-3.5" /> TypeScript Mastery
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiTailwindcss className="text-[#38bdf8] w-3.5 h-3.5" /> Tailwind &amp; UI Craft
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
