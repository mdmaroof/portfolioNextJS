import React, { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { FiSend, FiCheck, FiCpu, FiLayers, FiCode, FiSmartphone, FiDatabase, FiAward, FiExternalLink, FiTrash2, FiActivity, FiZap } from "react-icons/fi";
import { SiReact } from "react-icons/si";

interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  badge?: string;
  chips?: string[];
  link?: { label: string; url: string };
  tokens?: number;
  time?: string;
}

const SKILL_FOLDERS = [
  { name: "Frontend Core", count: "React, Next.js, TS", color: "#262ef2", icon: <SiReact /> },
  { name: "Mobile Apps", count: "React Native, Camera Vision", color: "#6e73fa", icon: <FiSmartphone /> },
  { name: "Geospatial & Maps", count: "Mapbox GL, Turf.js", color: "#0ea5e9", icon: <FiLayers /> },
  { name: "State & Realtime", count: "Zustand, WebSockets, RTC", color: "#0c9618", icon: <FiCpu /> },
  { name: "Design Systems", count: "Storybook, Reusable UI", color: "#aa26f2", icon: <FiCode /> },
  { name: "Backend & APIs", count: "Node.js, MongoDB, REST", color: "#0c5696", icon: <FiDatabase /> },
];

const COMPREHENSIVE_KB = [
  {
    keywords: ["stack", "tech", "skill", "language", "framework", "library", "react", "next"],
    badge: "Core Stack & Architecture",
    response:
      "Mohd Maroof is a Senior Frontend Engineer with 6+ years of production experience specializing in:\n• Frontend: React 18/19, Next.js (App Router, Server Components, SSR/SSG)\n• Mobile: React Native, Expo, Native Camera Modules, Custom Optical Scanners\n• Languages: TypeScript (Strict Mode), JavaScript (ESNext)\n• State: Zustand (Atomic State), Redux Toolkit, Context Architecture\n• Styling: Tailwind CSS, CSS Modules, Radix UI, Framer Motion\n• Real-Time: WebSockets, PubNub RTC/RTM, Live Google Maps & Mapbox GL.",
    chips: ["React & Next.js", "React Native", "TypeScript", "Zustand", "Tailwind CSS"],
    link: { label: "View Detailed Work History", url: "#experience" },
  },
  {
    keywords: ["ethos", "qr", "camera", "ascend", "scanner", "optical", "retail"],
    badge: "Ethos Ascend (Active Contract)",
    response:
      "At Ethos Watches (Feb 2026 — Present), Maroof is developing 'Ascend', a React Native mobile application for enterprise sales operations.\n• Engineered a custom optical QR camera scanner achieving sub-100ms scan speeds.\n• Architected offline-first SQLite/AsyncStorage sync pipelines for field personnel.\n• Streamlined field inventory lookup and client consultation UX flows.",
    chips: ["Sub-100ms QR Scanner", "React Native Vision", "Offline Cache", "Active Contract"],
    link: { label: "Ethos Watches Official", url: "https://www.ethoswatches.com/" },
  },
  {
    keywords: ["vahn", "fleet", "logistics", "telemetry", "mvp", "0 to 1", "zustand"],
    badge: "VAHN Fleet MVP (0 to 1)",
    response:
      "At VAHN (Dec 2024 — Jan 2026), Maroof architected the Fleet App MVP from 0 to 1.\n• Delivered the first production release with live Google Maps vehicle telemetry (48+ active units).\n• Re-architected application state using lightweight Zustand stores to eliminate redundant renders.\n• Implemented Mixpanel user analytics pipelines to guide operational feature investments.",
    chips: ["0 to 1 MVP", "Zustand State Engine", "48+ Units Synced", "Mixpanel Telemetry"],
    link: { label: "VAHN Official Site", url: "https://vahn.in/" },
  },
  {
    keywords: ["trackaday", "map", "mapbox", "turf", "geo", "gis", "polygon", "spatial"],
    badge: "Trackaday (Geospatial Side Project)",
    response:
      "Trackaday (trackaday.buzz) is Maroof's flagship geospatial route tracking application.\n• Mapbox GL Vector Tiles: Sub-second vector map rendering and route visualizer.\n• Turf.js Spatial Calculations: Calculates polygon buffers, route geometries, elevation, and proximity.\n• Real-Time GPS Telemetry: Interactive route playback with historical pace and elevation graphs.",
    chips: ["Mapbox GL", "Turf.js", "Spatial Buffers", "Live Route GPS"],
    link: { label: "Visit Trackaday.buzz Live", url: "https://www.trackaday.buzz/" },
  },
  {
    keywords: ["56", "secure", "police", "guard", "alarm", "smart eye", "radar", "dashboard"],
    badge: "56 Secure Command Dashboards",
    response:
      "At 56 Secure (Mar 2021 — Oct 2023), Maroof engineered security command systems from scratch.\n• Multi-Tenant Dashboards: Built responsive Admin, Guard, and Police tracking dashboards.\n• Live Telemetry Radar: Google Maps API integration with real-time guard GPS positions.\n• WebSocket Dispatch: Sub-second alert dispatching triggered by Smart Eye AI intrusion feeds.",
    chips: ["Multi-Tenant Dashboards", "Google Maps Radar", "Smart Eye AI Feeds", "WebSockets"],
    link: { label: "56 Secure Official", url: "https://56secure.com/" },
  },
  {
    keywords: ["noon", "academy", "webrtc", "rtc", "rtm", "pubnub", "education", "edtech"],
    badge: "Noon Academy (Live RTC Scale)",
    response:
      "At Noon Academy (May 2020 — Feb 2021), Maroof scaled the live classroom platform.\n• WebRTC / PubNub Rooms: Engineered audio/video breakout rooms for 100,000+ concurrent students.\n• Network Resilience: Implemented automatic exponential-backoff reconnection logic for weak networks.\n• Component Library: Authored Storybook-driven reusable components across the web client.",
    chips: ["PubNub RTC/RTM", "Breakout Rooms", "Auto-Reconnect", "Storybook UI"],
    link: { label: "Noon Academy Site", url: "https://www.noonacademy.com/" },
  },
  {
    keywords: ["buzztales", "founder", "startup", "leadership", "architect", "business"],
    badge: "Buzztales Technologies (Founder)",
    response:
      "Maroof founded Buzztales Technologies Pvt. Ltd. (Nov 2023 — Nov 2024), leading engineering and product strategy.\n• Scalable Architecture: Architected full-stack React and Node.js solutions for startup clients.\n• Sprint Execution: Directed cross-functional engineering sprints with rapid 0-to-1 iterations.\n• Founder Mindset: Combines deep technical frontend craft with commercial product velocity.",
    chips: ["Startup Founder", "Lead Architect", "Full Product Lifecycle", "6+ Yrs Exp"],
  },
  {
    keywords: ["hire", "available", "contract", "full-time", "remote", "contact", "email", "timezone", "rate", "notice"],
    badge: "Availability & Engagement",
    response:
      "Maroof is available for:\n• Senior Frontend Contracts & Architecture Advisory\n• Full-Time Senior Remote Roles (Staff / Senior Frontend Engineer)\n• 0-to-1 MVP Sprints for funded startups\n• Location: India (Works comfortably with US, EU, and Global timezones)\n• Direct Email: maroofmohdmalik@gmail.com",
    chips: ["Open for Contracts", "Full-Time Remote", "Global Timezones", "Immediate Start"],
    link: { label: "Send Email Directly", url: "mailto:maroofmohdmalik@gmail.com" },
  },
  {
    keywords: ["graple", "snapaid", "twist", "symzo", "projects", "side project"],
    badge: "Independent Shipped Software",
    response:
      "Maroof has shipped 5 independent production applications:\n1. Trackaday (trackaday.buzz) — Mapbox GL & Turf.js spatial analysis.\n2. Graple.ai (graple-theta.vercel.app) — SaaS A/B testing & retention engine.\n3. SnapAid (snapaid.live) — 100% offline emergency medical triage PWA.\n4. Twist N Words (twistnwords.vercel.app) — 60 FPS touch physics word game.\n5. Symzo (symzo.in) — Sub-second product design system architecture.",
    chips: ["Trackaday", "Graple.ai", "SnapAid", "Twist N Words", "Symzo"],
    link: { label: "Explore Side Projects", url: "#projects" },
  },
];

export const AgentSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "agent",
      text: "Maroof Knowledge Engine v2.8 online. Query anything regarding Mohd Maroof's 6+ years of technical architecture, shipped systems, or contract availability.",
      badge: "System Ready",
      chips: ["Core Stack", "Ethos QR Vision", "VAHN Fleet MVP", "Trackaday Geospatial", "Hire Maroof"],
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [activeBadge, setActiveBadge] = useState("");
  const [activeChips, setActiveChips] = useState<string[]>([]);
  const [activeLink, setActiveLink] = useState<{ label: string; url: string } | undefined>(undefined);
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const prompts = [
    "What is Maroof's core tech stack?",
    "How does his custom QR scanner in Ethos work?",
    "Tell me about Trackaday and Mapbox GL…",
    "Is Maroof available for senior contracts?",
  ];

  // Typewriter placeholder
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
          timer = setTimeout(tick, 2400);
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

  // Auto-scroll chat
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming, streamingText]);

  // Execute real Token Streaming response
  const executeQuery = (query: string) => {
    if (!query.trim() || isStreaming) return;

    const trimmed = query.trim();
    if (trimmed === "/clear") {
      setMessages([
        {
          id: `init-${Date.now()}`,
          sender: "agent",
          text: "Terminal cleared. Ready for new query.",
          badge: "Ready",
          chips: ["Core Stack", "Ethos QR Vision", "Trackaday", "Hire Maroof"],
          time: "Just now",
        },
      ]);
      setInputVal("");
      return;
    }

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: trimmed,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsStreaming(true);
    setStreamingText("");

    // Find semantic match in KB
    const lower = trimmed.toLowerCase();
    let match = COMPREHENSIVE_KB.find((item) => item.keywords.some((kw) => lower.includes(kw)));

    if (!match) {
      match = {
        keywords: [],
        badge: "Senior Engineer Profile",
        response: `Mohd Maroof has 6+ years of senior frontend engineering experience across React, Next.js, React Native, and strict TypeScript. He has shipped high-impact architectures for Ethos Watches (sub-100ms QR vision), VAHN Fleet (0 to 1 MVP), 56 Secure (live radar dashboards), and Noon Academy (RTC scaling).`,
        chips: ["6+ Years Exp", "React / Next.js", "React Native", "TypeScript", "Available for Hire"],
        link: { label: "Email Mohd Maroof Directly", url: "mailto:maroofmohdmalik@gmail.com" },
      };
    }

    setActiveBadge(match.badge);
    setActiveChips(match.chips);
    setActiveLink(match.link);

    const fullResponse = match.response;
    let charPos = 0;
    const streamSpeed = 12;

    const interval = setInterval(() => {
      charPos += 3;
      if (charPos >= fullResponse.length) {
        clearInterval(interval);
        setStreamingText("");
        setIsStreaming(false);

        const agentMsg: Message = {
          id: `a-${Date.now()}`,
          sender: "agent",
          text: fullResponse,
          badge: match.badge,
          chips: match.chips,
          link: match.link,
          tokens: Math.floor(fullResponse.length / 3.8),
          time: "Just now",
        };
        setMessages((prev) => [...prev, agentMsg]);
      } else {
        setStreamingText(fullResponse.slice(0, charPos));
      }
    }, streamSpeed);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeQuery(inputVal);
  };

  return (
    <section id="agent" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="tag">
              <FiAward className="text-[#262ef2] mr-1" />
              Interactive Technical Knowledge Engine
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Ask Maroof&apos;s Agent <br />
            <span className="serif-accent blue-accent font-normal">Query 6+ Years of Production Systems</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            Interact directly with Maroof&apos;s streaming knowledge engine to inspect technical decisions, mobile architectures, and contract availability.
          </p>
        </m.div>

        {/* 2-Column Bento Layout with Authentic Frosted Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Technical Spectrum Cards (5 Cols) */}
          <m.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)]"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#262ef2]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6e73fa]">Technical Spectrum</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1f1f32]">Every Layer, Covered</h3>
              <p className="mt-1 text-sm text-[#4d5564] leading-relaxed">
                From mobile native camera vision to sub-millisecond real-time dashboards and robust design systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 my-6">
              {SKILL_FOLDERS.map((folder, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 border border-[#e8e8f2] shadow-2xs hover:border-[#262ef2] hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-2xs"
                      style={{ backgroundColor: `${folder.color}15`, color: folder.color }}
                    >
                      {folder.icon}
                    </div>
                    <span className="text-sm font-semibold text-[#1f1f32]">{folder.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#61667b] bg-[#f4f4fa] px-2.5 py-1 rounded-lg border border-[#e3e2e8]">
                    {folder.count}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e8e8f2] flex items-center justify-between text-xs text-[#61667b]">
              <span className="flex items-center gap-1.5 font-medium">
                <FiCheck className="text-emerald-500" /> 6+ Years In Production
              </span>
              <span className="font-mono text-[#262ef2] font-bold">100% Ship Rate</span>
            </div>
          </m.div>

          {/* Right Column: Frosted Glass Knowledge Terminal (7 Cols) */}
          <m.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)]"
          >
            <div>
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e8e8f2]">
                <div className="flex items-center gap-3">
                  {/* macOS Traffic Lights */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1f1f32]">
                    maroof-agent@v2.8: ~/knowledge
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Streaming Ready
                  </span>
                  <button
                    onClick={() => executeQuery("/clear")}
                    className="text-[#8c859d] hover:text-[#1f1f32] transition-colors p-1"
                    title="Clear Terminal"
                    aria-label="Clear chat"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chat Stream History Container */}
              <div
                ref={chatScrollRef}
                className="space-y-4 max-h-[340px] overflow-y-auto pr-1.5 no-scrollbar mb-4 font-mono"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    {msg.sender === "user" ? (
                      <div className="max-w-[85%] p-3.5 rounded-2xl rounded-tr-xs bg-[#201f32] text-white text-xs font-mono shadow-sm">
                        <span className="text-[#8b90ff] text-[10px] font-bold block mb-0.5">query &gt;</span>
                        {msg.text}
                      </div>
                    ) : (
                      <div className="max-w-[98%] p-4 rounded-2xl rounded-tl-xs bg-white/90 border border-[#e4e4f2] text-[#1f1f32] space-y-2.5 shadow-2xs">
                        {msg.badge && (
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#262ef2] bg-[#262ef2]/10 px-2 py-0.5 rounded-md border border-[#262ef2]/20">
                              {msg.badge}
                            </span>
                            {msg.tokens && (
                              <span className="text-[9px] font-mono text-[#8c859d]">
                                ⚡ {msg.tokens} tokens · 18ms
                              </span>
                            )}
                          </div>
                        )}

                        <div className="text-xs leading-relaxed whitespace-pre-line text-[#2d3142] font-sans">
                          {msg.text}
                        </div>

                        {/* Highlight Chips */}
                        {msg.chips && msg.chips.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {msg.chips.map((chip, cIdx) => (
                              <span
                                key={cIdx}
                                className="text-[10px] font-mono text-[#4d5564] bg-[#f8f8fc] px-2 py-0.5 rounded border border-[#dcdae8] shadow-2xs"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Action Link Button if available */}
                        {msg.link && (
                          <div className="pt-1">
                            <a
                              href={msg.link.url}
                              target={msg.link.url.startsWith("http") ? "_blank" : undefined}
                              rel={msg.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#262ef2] hover:underline"
                            >
                              <span>{msg.link.label}</span>
                              <FiExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Real-time Streaming Output Indicator */}
                {isStreaming && (
                  <div className="max-w-[98%] p-4 rounded-2xl rounded-tl-xs bg-white/90 border border-[#e4e4f2] text-[#1f1f32] space-y-2.5 font-mono shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#262ef2] bg-[#262ef2]/10 px-2 py-0.5 rounded-md border border-[#262ef2]/20">
                        {activeBadge || "Streaming Answer"}
                      </span>
                      <span className="text-[9px] font-mono text-emerald-600 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Generating
                      </span>
                    </div>

                    <div className="text-xs leading-relaxed whitespace-pre-line text-[#2d3142] font-sans">
                      {streamingText}
                      <span className="inline-block w-1.5 h-3.5 bg-[#262ef2] ml-1 align-middle animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Form & Suggested Query Pills */}
            <div className="pt-2">
              <form onSubmit={handleSubmit} className="relative mb-3 font-mono">
                <div className="flex items-center bg-white border border-[#d2d2e2] rounded-2xl px-3.5 py-2.5 shadow-2xs focus-within:border-[#262ef2] focus-within:ring-2 focus-within:ring-[#262ef2]/15 transition-all">
                  <span className="text-xs text-[#262ef2] mr-2 font-bold font-mono">
                    $
                  </span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={typedPlaceholder || "Type any question or command (/clear)..."}
                    className="w-full text-xs sm:text-sm text-[#1f1f32] bg-transparent outline-none placeholder-[#8c859d] font-mono"
                  />
                  <button
                    type="submit"
                    disabled={!inputVal.trim() || isStreaming}
                    className="w-8 h-8 rounded-xl bg-[#262ef2] text-white flex items-center justify-center hover:bg-[#1d24cf] disabled:opacity-40 disabled:pointer-events-none transition-all ml-2 shrink-0 shadow-xs"
                    aria-label="Execute Query"
                  >
                    <FiSend className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Clickable Quick-Prompt Pills */}
              <div className="space-y-1.5 font-mono">
                <span className="text-[10px] uppercase tracking-wider text-[#8c859d] font-bold block">
                  Quick Query Commands:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => executeQuery("What is Maroof's core tech stack?")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-xl bg-white text-[#4d5564] border border-[#d8d8e5] hover:border-[#262ef2] hover:text-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiZap className="w-3 h-3 text-[#262ef2] group-hover:scale-110 transition-transform" />
                    <span>/stack</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Tell me about Ethos and his custom QR scanner")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-xl bg-white text-[#4d5564] border border-[#d8d8e5] hover:border-[#262ef2] hover:text-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiSmartphone className="w-3 h-3 text-[#6e73fa] group-hover:scale-110 transition-transform" />
                    <span>/ethos-qr</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Tell me about VAHN and the Fleet App MVP")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-xl bg-white text-[#4d5564] border border-[#d8d8e5] hover:border-[#262ef2] hover:text-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiActivity className="w-3 h-3 text-[#6e73fa] group-hover:scale-110 transition-transform" />
                    <span>/vahn-fleet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Tell me about Trackaday and Mapbox GL")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-xl bg-white text-[#4d5564] border border-[#d8d8e5] hover:border-[#262ef2] hover:text-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiLayers className="w-3 h-3 text-[#0ea5e9] group-hover:scale-110 transition-transform" />
                    <span>/trackaday</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Is Maroof available for senior contracts?")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-xl bg-white text-[#4d5564] border border-[#d8d8e5] hover:border-[#262ef2] hover:text-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiAward className="w-3 h-3 text-[#262ef2] group-hover:scale-110 transition-transform" />
                    <span>/hire</span>
                  </button>
                </div>
              </div>
            </div>

          </m.div>
        </div>
      </div>
    </section>
  );
};
