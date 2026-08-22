import React, { useState, useRef } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiCpu, FiMail, FiCheck, FiCopy, FiZap, FiActivity, FiRadio, FiTrendingUp } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface HeaderComponentProps {
  data: any;
  onMessageSentSuccess?: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const email = "maroofmohdmalik@gmail.com";
  const stageRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pt-24 md:pt-32 pb-16 overflow-hidden relative"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-[#262ef2]/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[250px] bg-[#6e73fa]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Refined Editorial Headline & Action Hub */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#e3e2e8] text-xs font-mono text-[#201f32] font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Senior Frontend Engineer · 6+ Yrs Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1f1f32] leading-[1.12]">
              Turning Complex Code <br />
              <span className="serif-accent blue-accent font-normal italic">
                Into Fluid Software.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#4d5564] leading-relaxed max-w-xl font-normal">
              Hi, I&apos;m <strong className="text-[#1f1f32] font-bold">Mohd Maroof</strong>. I architect sub-second web platforms, 0-to-1 mobile applications, and high-precision design systems with React, Next.js, and TypeScript.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a href="#experience" className="btn-dark px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                <span>View Experience</span>
                <span className="btn-arrow">
                  <FiArrowRight className="btn-arrow-icon" />
                  <FiArrowRight className="btn-arrow-icon-second" />
                </span>
              </a>

              <a href="#agent" className="btn-outline px-5 py-3.5 rounded-xl shadow-2xs hover:shadow-xs transition-all flex items-center gap-2">
                <span>Ask AI Agent</span>
                <FiCpu className="w-4 h-4 text-[#262ef2]" />
              </a>

              {/* Click to Copy Email Pill */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-[#e2e2ec] hover:border-[#262ef2] text-[#201f32] font-mono text-xs font-semibold transition-all shadow-2xs hover:shadow-xs"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4 text-[#262ef2]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Core Tech Stack Row */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8c859d] mr-1 hidden sm:inline-block">
                Core Stack:
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
                <SiReact className="text-[#00d8ff] w-3.5 h-3.5" /> React &amp; Native
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
                <SiNextdotjs className="text-[#000] w-3.5 h-3.5" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
                <SiTypescript className="text-[#3178c6] w-3.5 h-3.5" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
                <SiTailwindcss className="text-[#38bdf8] w-3.5 h-3.5" /> Tailwind
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Glass Showcase Stage */}
          <div className="lg:col-span-5 flex justify-center [perspective:1200px]">
            <m.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="w-full max-w-[420px] relative space-y-3.5 select-none"
            >
              {/* Card 1: 3D Glass Hero Landmark (Ethos QR Scanner) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_20px_50px_-12px_rgba(38,46,242,0.12),0_0_0_1px_rgba(255,255,255,0.8)] hover:border-[#262ef2] transition-all duration-300 transform-gpu hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#262ef2] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      ET
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1f1f32]">Ethos Ascend Mobile</h4>
                      <span className="text-[10px] text-[#6e73fa] font-mono">React Native Camera Vision</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    84ms Scan
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#f8f8fc] border border-[#e9e9f2] text-[11px] text-[#4d5564] flex items-center justify-between">
                  <span className="font-medium">Sub-100ms Optical QR Scanner</span>
                  <span className="font-mono text-[10px] text-[#262ef2] font-bold">Offline-First</span>
                </div>
              </div>

              {/* 2-Column Split Micro Glass Cards */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Card 2: 60 FPS Frame Budget */}
                <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_16px_40px_-10px_rgba(32,31,50,0.08)] hover:border-[#262ef2] transition-all duration-300 transform-gpu hover:scale-[1.02] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">
                      <FiZap className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Steady
                    </span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-extrabold text-[#1f1f32] block">60.0 FPS</span>
                    <span className="text-[10px] text-[#8c859d] font-mono">16.6ms Frame Budget</span>
                  </div>
                </div>

                {/* Card 3: 100 Lighthouse Perf */}
                <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_16px_40px_-10px_rgba(32,31,50,0.08)] hover:border-[#262ef2] transition-all duration-300 transform-gpu hover:scale-[1.02] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-[#262ef2]/10 text-[#262ef2] flex items-center justify-center text-xs font-bold">
                      <FiTrendingUp className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[9px] font-mono text-[#262ef2] font-bold bg-[#262ef2]/5 px-1.5 py-0.5 rounded border border-[#262ef2]/15">
                      100/100
                    </span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-extrabold text-[#1f1f32] block">100%</span>
                    <span className="text-[10px] text-[#8c859d] font-mono">Lighthouse Vitals</span>
                  </div>
                </div>
              </div>

              {/* Card 4: 0 to 1 Fleet MVP Live Telemetry */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_16px_40px_-10px_rgba(32,31,50,0.08)] hover:border-[#262ef2] transition-all duration-300 transform-gpu hover:scale-[1.02] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-[#6e73fa] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    VA
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-[#1f1f32]">VAHN Fleet MVP Telemetry</h5>
                    <span className="text-[10px] text-[#8c859d] font-mono">0 to 1 MVP · Zustand State Sync</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#6e73fa] bg-[#6e73fa]/10 px-2.5 py-1 rounded-lg border border-[#6e73fa]/20">
                  48 Units
                </span>
              </div>
            </m.div>
          </div>

        </div>
      </div>
    </div>
  );
};
