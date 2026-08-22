import React, { useState, useEffect } from "react";
import { FiSend, FiPaperclip, FiCheck, FiFolder, FiCpu, FiLayers, FiCode, FiSmartphone, FiDatabase, FiAward } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";

interface AgentSectionProps {
  name?: string;
}

interface PromptAnswer {
  query: string;
  response: string;
  badge: string;
  highlightChips: string[];
}

const PRESET_KNOWLEDGE: Record<string, PromptAnswer> = {
  stack: {
    query: "What is Maroof's core tech stack?",
    response:
      "Mohd Maroof specializes in React, Next.js, and React Native with deep TypeScript mastery. He builds scalable frontend architectures using Zustand, Redux, and MobX, and integrates real-time systems via PubNub and WebSockets.",
    badge: "Core Stack",
    highlightChips: ["React / Next.js", "React Native", "TypeScript", "Zustand & Redux", "Tailwind CSS"],
  },
  mobile: {
    query: "Tell me about his mobile app experience",
    response:
      "Maroof has extensive React Native expertise. At Ethos, he built 'Ascend'—a high-performance sales operations mobile app featuring custom high-speed QR scanning and offline workflows. At VAHN, he engineered and launched the Fleet App MVP from 0 to 1.",
    badge: "Mobile Engineering",
    highlightChips: ["Ascend (Ethos)", "Fleet MVP (VAHN)", "Custom QR Engine", "Offline-First Sync"],
  },
  founder: {
    query: "What is his startup & leadership background?",
    response:
      "Maroof founded Buzztales Technologies Pvt. Ltd., architecting digital platforms from scratch and directing full product lifecycles. His startup grit translates into fast MVP iteration, business alignment, and zero-overhead execution.",
    badge: "Entrepreneurial",
    highlightChips: ["Founder @ Buzztales", "6+ Years Experience", "MVP to Scale", "Product-Led Eng"],
  },
  availability: {
    query: "Is Maroof available for contract or full-time roles?",
    response:
      "Yes! Maroof is actively open to high-impact Senior Frontend Engineer contracts, full-time remote opportunities, and technical advisory for startups looking to ship production-ready web and mobile products.",
    badge: "Availability",
    highlightChips: ["Contract / Retainer", "Full-Time Remote", "Instant Onboarding", "maroofmohdmalik@gmail.com"],
  },
  realtime: {
    query: "Experience with real-time systems and dashboards?",
    response:
      "At 56 Secure, Maroof built Admin, Guard, and Police command dashboards with live Google Maps tracking and Smart Eye alerts. At Noon Academy, he engineered RTC/RTM breakout rooms with auto-reconnection logic using PubNub.",
    badge: "Real-time & Dashboards",
    highlightChips: ["Live Map Tracking", "PubNub RTC/RTM", "Police/Guard Dashboards", "Auto-Reconnect"],
  },
};

const SKILL_FOLDERS = [
  { name: "Frontend Core", count: "React, Next.js, TS", color: "#262ef2", icon: <SiReact /> },
  { name: "Mobile Apps", count: "React Native, Expo", color: "#6e73fa", icon: <FiSmartphone /> },
  { name: "State & Realtime", count: "Zustand, PubNub, RTC", color: "#0c9618", icon: <FiCpu /> },
  { name: "Dashboards & Maps", count: "Google Maps, Analytics", color: "#ca7c0e", icon: <FiLayers /> },
  { name: "Design Systems", count: "Storybook, Reusable UI", color: "#aa26f2", icon: <FiCode /> },
  { name: "Backend & APIs", count: "Node.js, MongoDB, REST", color: "#0c5696", icon: <FiDatabase /> },
];

export const AgentSection: React.FC<AgentSectionProps> = () => {
  const [selectedKey, setSelectedKey] = useState<string>("stack");
  const [typedPlaceholder, setTypedPlaceholder] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [inputVal, setInputVal] = useState<string>("");
  const [activeAnswer, setActiveAnswer] = useState<PromptAnswer>(PRESET_KNOWLEDGE["stack"]);

  const prompts = [
    "What is Maroof's core tech stack?",
    "Tell me about his React Native mobile experience…",
    "Tell me about his startup Buzztales…",
    "Is he available for contract or full-time?",
  ];

  // Typewriter effect in prompt placeholder
  useEffect(() => {
    let currentIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: any = null;

    const tick = () => {
      const fullText = prompts[currentIdx];
      if (!deleting) {
        charIdx++;
        setTypedPlaceholder(fullText.slice(0, charIdx));
        if (charIdx === fullText.length) {
          deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 45);
      } else {
        charIdx--;
        setTypedPlaceholder(fullText.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          currentIdx = (currentIdx + 1) % prompts.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 25);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectChip = (key: string) => {
    setSelectedKey(key);
    setActiveAnswer(PRESET_KNOWLEDGE[key]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const lower = inputVal.toLowerCase();
    if (lower.includes("mobile") || lower.includes("native") || lower.includes("app") || lower.includes("ios")) {
      handleSelectChip("mobile");
    } else if (lower.includes("founder") || lower.includes("startup") || lower.includes("buzztales")) {
      handleSelectChip("founder");
    } else if (lower.includes("contact") || lower.includes("hire") || lower.includes("available") || lower.includes("email")) {
      handleSelectChip("availability");
    } else if (lower.includes("realtime") || lower.includes("dashboard") || lower.includes("map") || lower.includes("rtc")) {
      handleSelectChip("realtime");
    } else {
      handleSelectChip("stack");
    }
    setInputVal("");
  };

  return (
    <section id="agent" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiAward className="text-[#262ef2] mr-1" />
              Interactive Agent
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Ask Maroof&apos;s Agent <br />
            <span className="serif-accent blue-accent font-normal">Know the specifics instantly</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            Interact with the custom AI knowledge card to query Maroof&apos;s 6+ years of technical experience, projects, and architecture mastery.
          </p>
        </div>

        {/* Bento Grid Layout (Deslopify 2-column Bento) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Every Layer Covered (5 Cols) */}
          <div className="lg:col-span-5 craft-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#262ef2]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6e73fa]">Technical Spectrum</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1f1f32]">Every Layer, Covered</h3>
              <p className="mt-1 text-sm text-[#4d5564] leading-relaxed">
                From mobile native code to sub-millisecond real-time dashboards and robust design systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 my-6">
              {SKILL_FOLDERS.map((folder, idx) => (
                <div key={idx} className="bento-folder group">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                      style={{ backgroundColor: `${folder.color}15`, color: folder.color }}
                    >
                      {folder.icon}
                    </div>
                    <span className="text-sm font-medium text-[#201f32]">{folder.name}</span>
                  </div>
                  <span className="text-xs font-mono text-[#61667b] bg-[#f3f3f9] px-2.5 py-1 rounded-md border border-[#e3e2e5]">
                    {folder.count}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e3e2e5] flex items-center justify-between text-xs text-[#61667b]">
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-500" /> 6+ Years In Production
              </span>
              <span className="font-mono text-[#262ef2] font-semibold">100% Ship Rate</span>
            </div>
          </div>

          {/* Right Column: Interactive Claude-style Agent Card (7 Cols) */}
          <div className="lg:col-span-7 craft-card p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#ffffff] to-[#f8f8fc]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#262ef2] to-[#6e73fa] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#262ef2]/20">
                    MM
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f32]">Maroof Assistant</h3>
                    <p className="text-xs text-[#6e73fa] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Knowledge Engine
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#4d5564] bg-[#eef0f8] px-2.5 py-1 rounded-full border border-[#dcdae8]">
                  v2.6 Agent
                </span>
              </div>

              {/* Dynamic Answer Bubble */}
              <div className="bg-[#f3f3f9] border border-[#e3e2e5] rounded-2xl p-5 mb-5 transition-all">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-[#262ef2] uppercase tracking-wider bg-[#262ef2]/10 px-2.5 py-0.5 rounded-full">
                    {activeAnswer.badge}
                  </span>
                  <span className="text-xs text-[#8c859d] font-mono">Response</span>
                </div>
                <p className="text-sm md:text-base text-[#201f32] leading-relaxed font-normal">
                  {activeAnswer.response}
                </p>

                {/* Response Highlight Chips */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#e3e2e5]/70">
                  {activeAnswer.highlightChips.map((chip, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-[#4d5564] bg-[#ffffff] px-2.5 py-1 rounded-md border border-[#e3e2e5] shadow-2xs"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Prompt Box Form */}
            <div>
              <form onSubmit={handleCustomSubmit} className="relative mb-3">
                <div className="flex items-center bg-[#ffffff] border border-[#d2d1e0] rounded-xl px-3.5 py-2.5 shadow-sm focus-within:border-[#262ef2] focus-within:ring-2 focus-within:ring-[#262ef2]/15 transition-all">
                  <span className="text-xs text-[#6e73fa] font-mono mr-2 bg-[#6e73fa]/10 px-2 py-0.5 rounded">
                    Query
                  </span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={typedPlaceholder || "Ask anything about Maroof..."}
                    className="w-full text-sm text-[#201f32] bg-transparent outline-none placeholder-[#9b98af]"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-lg bg-[#262ef2] text-white flex items-center justify-center hover:bg-[#1f25c7] transition-colors ml-2 shrink-0"
                    aria-label="Send Query"
                  >
                    <FiSend className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Quick Prompt Chips */}
              <div className="space-y-1.5">
                <span className="text-xs text-[#8c859d] font-medium block">Suggested queries:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSelectChip("stack")}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedKey === "stack"
                        ? "bg-[#262ef2] text-white border-[#262ef2] shadow-xs"
                        : "bg-[#ffffff] text-[#4d5564] border-[#d8d8e5] hover:border-[#262ef2]"
                    }`}
                  >
                    ⚡ Core Tech Stack
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectChip("mobile")}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedKey === "mobile"
                        ? "bg-[#262ef2] text-white border-[#262ef2] shadow-xs"
                        : "bg-[#ffffff] text-[#4d5564] border-[#d8d8e5] hover:border-[#262ef2]"
                    }`}
                  >
                    📱 React Native & Mobile
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectChip("founder")}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedKey === "founder"
                        ? "bg-[#262ef2] text-white border-[#262ef2] shadow-xs"
                        : "bg-[#ffffff] text-[#4d5564] border-[#d8d8e5] hover:border-[#262ef2]"
                    }`}
                  >
                    🚀 Founder Background
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectChip("realtime")}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedKey === "realtime"
                        ? "bg-[#262ef2] text-white border-[#262ef2] shadow-xs"
                        : "bg-[#ffffff] text-[#4d5564] border-[#d8d8e5] hover:border-[#262ef2]"
                    }`}
                  >
                    🗺️ Real-time Dashboards
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectChip("availability")}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedKey === "availability"
                        ? "bg-[#262ef2] text-white border-[#262ef2] shadow-xs"
                        : "bg-[#ffffff] text-[#4d5564] border-[#d8d8e5] hover:border-[#262ef2]"
                    }`}
                  >
                    🤝 Hire / Work With Maroof
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
