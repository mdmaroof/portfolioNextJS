import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiCheck, FiSend, FiCode, FiSmartphone, FiCpu, FiCompass, FiExternalLink } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface HeaderComponentProps {
  data: any;
  onMessageSentSuccess?: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ data, onMessageSentSuccess }) => {
  const [typedText, setTypedText] = useState("");
  const tickerRef = useRef<HTMLDivElement>(null);

  const headlines = [
    "Building High-Scale Web Apps",
    "Crafting Fluid Mobile Experiences",
    "Architecting Real-time Dashboards",
    "Delivering Production-Ready MVPs",
  ];

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
          timer = setTimeout(tick, 2000);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        charIdx--;
        setTypedText(fullWord.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % headlines.length;
          timer = setTimeout(tick, 450);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  // Flagship project preview items for the hero ticker
  const heroTickerItems = [
    {
      title: "Ethos Ascend",
      type: "React Native Mobile App",
      metric: "Sub-100ms QR Scanner",
      status: "In Production",
      color: "#262ef2",
    },
    {
      title: "VAHN Fleet MVP",
      type: "Fleet Logistics & Maps",
      metric: "0 to 1 Release",
      status: "Production MVP",
      color: "#6e73fa",
    },
    {
      title: "Graple.ai",
      type: "SaaS Experimentation",
      metric: "Real-time A/B Testing",
      status: "Live Web App",
      color: "#0c9618",
    },
    {
      title: "SnapAid",
      type: "Emergency Guidance",
      metric: "Offline-First PWA",
      status: "Live Web App",
      color: "#ca7c0e",
    },
    {
      title: "56 Secure Command",
      type: "Guard & Police Dashboard",
      metric: "Live Map Tracking",
      status: "High Scale",
      color: "#aa26f2",
    },
    {
      title: "Twist N Words",
      type: "Interactive Word Game",
      metric: "Mobile-Touch Optimized",
      status: "Live Game",
      color: "#f25c26",
    },
  ];

  const duplicatedTicker = [...heroTickerItems, ...heroTickerItems, ...heroTickerItems];

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
              Make Your Product <br />
              <span className="serif-accent blue-accent font-normal inline-block mt-1">
                {typedText}
                <span className="inline-block w-1.5 h-8 sm:h-12 bg-[#262ef2] ml-1.5 align-middle animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Hero Subtitle */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#4d5564] max-w-2xl mx-auto font-normal leading-relaxed">
            Senior Frontend Engineer specializing in <strong className="text-[#201f32]">React, Next.js, and React Native</strong>. 
            Proven track record of turning complex architectures into blazing-fast, delightful user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a href="#experience" className="btn-dark">
              <span>View Experience</span>
              <span className="btn-arrow">
                <FiArrowRight className="btn-arrow-icon" />
                <FiArrowRight className="btn-arrow-icon-second" />
              </span>
            </a>

            <a href="#agent" className="btn-outline">
              <span>Ask AI Agent</span>
              <FiCpu className="w-4 h-4 text-[#262ef2]" />
            </a>

            <a
              href="mailto:maroofmohdmalik@gmail.com"
              className="px-5 py-3 rounded-lg text-sm font-medium text-[#4d5564] hover:text-[#201f32] hover:bg-white/60 border border-transparent hover:border-[#e3e2e5] transition-all"
            >
              maroofmohdmalik@gmail.com
            </a>
          </div>

          {/* Tech Badges Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiReact className="text-[#00d8ff]" /> React & React Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiNextdotjs className="text-[#000]" /> Next.js (SSR / SSG)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiTypescript className="text-[#3178c6]" /> TypeScript Mastery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiTailwindcss className="text-[#38bdf8]" /> Tailwind & UI Craft
            </span>
          </div>
        </div>

        {/* Hero Continuous Project Ticker */}
        <div className="mt-14 pt-6 border-t border-[#e3e2e5]/60 relative">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6e73fa] font-semibold">
              ✦ Featured Shipments & MVPs
            </span>
            <span className="text-xs font-mono text-[#8c859d]">Swipe or drag</span>
          </div>

          <div
            ref={tickerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar py-2 cursor-grab active:cursor-grabbing select-none"
          >
            {duplicatedTicker.map((proj, idx) => (
              <div
                key={idx}
                className="w-[260px] md:w-[290px] shrink-0 p-4 bg-white border border-[#e3e2e5] rounded-2xl shadow-xs hover:border-[#262ef2] hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: proj.color }}
                  />
                  <span className="text-[10px] font-mono font-semibold text-[#61667b] bg-[#f3f3f9] px-2 py-0.5 rounded">
                    {proj.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#1f1f32]">{proj.title}</h4>
                <p className="text-xs text-[#4d5564] mt-0.5">{proj.type}</p>
                <div className="mt-3 pt-2 border-t border-[#f0f0f6] flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#262ef2] font-semibold">{proj.metric}</span>
                  <FiExternalLink className="text-[#8c859d] w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
