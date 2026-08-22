import React, { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { FiSend, FiCheck, FiCpu, FiLayers, FiCode, FiSmartphone, FiDatabase, FiAward, FiExternalLink, FiTrash2, FiActivity, FiZap } from "react-icons/fi";
import { SiReact } from "react-icons/si";

interface Message {
  id: string;
  sender: "agent" | "user";
  text: string;
  badge?: string;
  tokens?: number;
  chips?: string[];
  link?: {
    label: string;
    url: string;
  };
}

interface SkillFolder {
  name: string;
  count: string;
  icon: React.ReactNode;
  color: string;
}

const SKILL_FOLDERS: SkillFolder[] = [
  { name: "React & Next.js Core", count: "6+ Yrs", icon: <SiReact className="w-4 h-4" />, color: "#262ef2" },
  { name: "React Native Mobile", count: "4 Apps", icon: <FiSmartphone className="w-4 h-4" />, color: "#6e73fa" },
  { name: "Real-time Telemetry & RTC", count: "3 Projects", icon: <FiActivity className="w-4 h-4" />, color: "#0c9618" },
  { name: "TypeScript & State Engines", count: "Enterprise", icon: <FiCode className="w-4 h-4" />, color: "#ca7c0e" },
  { name: "Design Systems & WebGL", count: "60 FPS", icon: <FiLayers className="w-4 h-4" />, color: "#aa26f2" },
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: "init-1",
    sender: "agent",
    badge: "ETHOS ASCEND (ACTIVE CONTRACT)",
    tokens: 97,
    text: `At Ethos Watches (Feb 2026 — Present), Maroof is developing 'Ascend', a React Native mobile application for enterprise sales operations.
• Engineered a custom optical QR camera scanner achieving sub-100ms scan speeds.
• Architected offline-first SQLite/AsyncStorage sync pipelines for field personnel.
• Streamlined field inventory lookup and client consultation UX flows.`,
    chips: ["Sub-100ms QR Scanner", "React Native Vision", "Offline Cache", "Active Contract"],
    link: {
      label: "Ethos Watches Official Site",
      url: "https://www.ethoswatches.com/",
    },
  },
];

const KNOWLEDGE_RESPONSES: Record<string, { badge: string; text: string; chips: string[]; link?: { label: string; url: string } }> = {
  stack: {
    badge: "CORE TECHNICAL STACK",
    text: `Maroof specializes in modern frontend engineering across web and mobile:
• Core Frameworks: React, Next.js (SSR / SSG / App Router), React Native.
• Language & Typing: TypeScript (strict mode), JavaScript ES2024.
• State & Telemetry: Zustand, Redux Toolkit, WebSockets, PubNub RTC, Mapbox GL.
• Performance: 60 FPS frame budgets, Lighthouse 98+ scores, sub-100ms cold starts.`,
    chips: ["React", "Next.js", "TypeScript", "React Native", "Zustand", "WebSockets"],
  },
  ethos: {
    badge: "ETHOS ASCEND (ACTIVE CONTRACT)",
    text: `Active Senior Frontend contract architecting 'Ascend' mobile for Ethos Watches:
• Developed custom high-speed QR camera optical scanner (<100ms decode).
• Built full offline synchronization pipeline using AsyncStorage and optimistic state updates.
• Engineered custom design system components adhering to high-end luxury brand standards.`,
    chips: ["React Native", "Camera Vision", "Offline Sync", "Custom QR"],
    link: {
      label: "Ethos Watches Official",
      url: "https://www.ethoswatches.com/",
    },
  },
  vahn: {
    badge: "VAHN FLEET (0 TO 1 MVP)",
    text: `Delivered VAHN's Fleet Logistics platform from initial concept to active production:
• Architected real-time fleet telematics dashboard tracking 48+ active vehicles with Google Maps API.
• Structured atomic state management with Zustand, eliminating 70% of unnecessary re-renders.
• Integrated Mixpanel telemetry pipelines for mission-critical driver and dispatcher events.`,
    chips: ["TypeScript", "Zustand", "Mixpanel", "Google Maps Telemetry"],
    link: {
      label: "VAHN Official Site",
      url: "https://vahn.in/",
    },
  },
  trackaday: {
    badge: "TRACKADAY (GEOSPATIAL SAAS)",
    text: `Production geospatial route tracking application:
• Built with Mapbox GL vector tile rendering and Turf.js spatial distance calculations.
• Real-time route recording, elevation contour mapping, and GPX/KML export engines.
• Sub-second map re-renders with optimized GeoJSON clustering.`,
    chips: ["Mapbox GL", "Turf.js", "Geospatial", "React"],
    link: {
      label: "Launch Trackaday",
      url: "https://www.trackaday.buzz/",
    },
  },
  hire: {
    badge: "AVAILABILITY & CONTRACTS",
    text: `Mohd Maroof is currently available for:
• Senior Frontend Developer Contracts (Remote Worldwide).
• 0-to-1 Mobile & Web MVP Architecture.
• High-Performance React / Next.js / React Native consulting.
• Reach out directly: maroofmohdmalik@gmail.com`,
    chips: ["Remote Global", "Senior Contract", "Available Now", "Fast Sprints"],
    link: {
      label: "Send Email Inquiry",
      url: "mailto:maroofmohdmalik@gmail.com",
    },
  },
};

export const AgentSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [activeBadge, setActiveBadge] = useState("");
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for placeholder
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholderQueries = [
    "Ask about Ethos and his custom QR scanner...",
    "What is Maroof's core tech stack?",
    "Tell me about VAHN and the Fleet App MVP...",
    "Tell me about Trackaday and Mapbox GL...",
    "Is Maroof available for senior contracts?",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = placeholderQueries[placeholderIndex];

    if (!isDeleting) {
      if (typedPlaceholder.length < currentFullText.length) {
        timer = setTimeout(() => {
          setTypedPlaceholder(currentFullText.slice(0, typedPlaceholder.length + 1));
        }, 35);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (typedPlaceholder.length > 0) {
        timer = setTimeout(() => {
          setTypedPlaceholder(typedPlaceholder.slice(0, -1));
        }, 18);
      } else {
        setIsDeleting(false);
        setPlaceholderIndex((prev) => (prev + 1) % placeholderQueries.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedPlaceholder, isDeleting, placeholderIndex]);

  // Auto-scroll on new messages or streaming
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, streamingText]);

  // Realistic character-by-character token streaming
  const executeQuery = (queryText: string) => {
    if (!queryText.trim() || isStreaming) return;

    const lower = queryText.toLowerCase().trim();

    // Check for clear command
    if (lower === "/clear" || lower === "clear") {
      setMessages([]);
      setInputVal("");
      return;
    }

    // Determine matched response
    let responseData = KNOWLEDGE_RESPONSES.stack;
    if (lower.includes("ethos") || lower.includes("qr") || lower.includes("ascend")) {
      responseData = KNOWLEDGE_RESPONSES.ethos;
    } else if (lower.includes("vahn") || lower.includes("fleet") || lower.includes("logistics")) {
      responseData = KNOWLEDGE_RESPONSES.vahn;
    } else if (lower.includes("track") || lower.includes("map") || lower.includes("geo")) {
      responseData = KNOWLEDGE_RESPONSES.trackaday;
    } else if (lower.includes("hire") || lower.includes("available") || lower.includes("contact") || lower.includes("rate") || lower.includes("contract")) {
      responseData = KNOWLEDGE_RESPONSES.hire;
    }

    // Add user query
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: queryText,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsStreaming(true);
    setActiveBadge(responseData.badge);
    setStreamingText("");

    // Simulate realistic character-by-character token stream
    const fullText = responseData.text;
    let currIdx = 0;

    const interval = setInterval(() => {
      currIdx += Math.floor(Math.random() * 4) + 2;
      if (currIdx >= fullText.length) {
        clearInterval(interval);
        setStreamingText("");
        setIsStreaming(false);

        const agentMsg: Message = {
          id: `agent-${Date.now()}`,
          sender: "agent",
          badge: responseData.badge,
          tokens: Math.floor(fullText.length / 4) + 12,
          text: fullText,
          chips: responseData.chips,
          link: responseData.link,
        };
        setMessages((prev) => [...prev, agentMsg]);
      } else {
        setStreamingText(fullText.slice(0, currIdx));
      }
    }, 16);
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

          {/* Right Column: High-Craft AI Knowledge Terminal (7 Cols) */}
          <m.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)]"
          >
            <div>
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#e8e8f2]">
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* macOS Traffic Lights */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1f1f32] truncate">
                    maroof-agent@v2.8 ~/knowledge
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Ready</span>
                  </span>
                  <button
                    onClick={() => executeQuery("/clear")}
                    className="w-7 h-7 rounded-lg bg-[#f4f4fa] hover:bg-[#ebebf5] text-[#8c859d] hover:text-[#1f1f32] transition-colors flex items-center justify-center border border-[#e3e2e8]"
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
                className="space-y-3.5 max-h-[340px] overflow-y-auto pr-1 no-scrollbar mb-4"
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
                      <div className="max-w-[98%] w-full p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-white border border-[#e5e5f0] text-[#1f1f32] space-y-3 shadow-2xs">
                        {/* Message Top Bar: Badge + Token count */}
                        {msg.badge && (
                          <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#f0f0f8]">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#262ef2] bg-[#262ef2]/10 px-2.5 py-0.5 rounded-full border border-[#262ef2]/20">
                              {msg.badge}
                            </span>
                            {msg.tokens && (
                              <span className="text-[10px] font-mono text-[#8c859d] flex items-center gap-1">
                                <span>⚡ {msg.tokens} tokens</span>
                                <span>· 18ms</span>
                              </span>
                            )}
                          </div>
                        )}

                        {/* Structured Output Content */}
                        <div className="text-xs sm:text-[13px] leading-relaxed text-[#2d3142] font-sans space-y-2">
                          {msg.text.split("\n").map((line, lIdx) => {
                            if (line.startsWith("•")) {
                              return (
                                <div key={lIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#374151]">
                                  <span className="w-4 h-4 rounded-md bg-[#262ef2]/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <FiCheck className="w-2.5 h-2.5 text-[#262ef2]" strokeWidth={2.5} />
                                  </span>
                                  <span>{line.replace("•", "").trim()}</span>
                                </div>
                              );
                            }
                            return (
                              <p key={lIdx} className="font-normal text-[#4d5564]">
                                {line}
                              </p>
                            );
                          })}
                        </div>

                        {/* Highlight Chips */}
                        {msg.chips && msg.chips.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {msg.chips.map((chip, cIdx) => (
                              <span
                                key={cIdx}
                                className="text-[10px] font-mono font-medium text-[#201f32] bg-[#f4f4fa] px-2.5 py-0.5 rounded-md border border-[#e2e2ec] shadow-2xs"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Action Link Button */}
                        {msg.link && (
                          <div className="pt-2 border-t border-[#f0f0f8]">
                            <a
                              href={msg.link.url}
                              target={msg.link.url.startsWith("http") ? "_blank" : undefined}
                              rel={msg.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#262ef2] hover:bg-[#1d24cf] text-white text-xs font-bold transition-all shadow-xs"
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
                  <div className="max-w-[98%] w-full p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-white border border-[#e5e5f0] text-[#1f1f32] space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#f0f0f8]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#262ef2] bg-[#262ef2]/10 px-2.5 py-0.5 rounded-full border border-[#262ef2]/20">
                        {activeBadge || "Streaming Answer"}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Generating
                      </span>
                    </div>

                    <div className="text-xs sm:text-[13px] leading-relaxed whitespace-pre-line text-[#2d3142] font-sans">
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
                <div className="flex items-center bg-[#f8f8fc] border border-[#e1e1ec] rounded-2xl px-3.5 py-2.5 shadow-2xs focus-within:bg-white focus-within:border-[#262ef2] focus-within:ring-2 focus-within:ring-[#262ef2]/15 transition-all">
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
                    className="w-8 h-8 rounded-xl bg-[#262ef2] text-white flex items-center justify-center hover:bg-[#1d24cf] disabled:opacity-40 disabled:pointer-events-none transition-all ml-2 shrink-0 shadow-xs hover:scale-105 active:scale-95"
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
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl bg-white hover:bg-[#f8f8fc] text-[#374151] hover:text-[#262ef2] border border-[#dedee8] hover:border-[#262ef2] transition-all font-mono font-medium shadow-2xs hover:shadow-xs group"
                  >
                    <FiZap className="w-3 h-3 text-[#262ef2] group-hover:scale-110 transition-transform" />
                    <span>/stack</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Tell me about Ethos and his custom QR scanner")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl bg-white hover:bg-[#f8f8fc] text-[#374151] hover:text-[#262ef2] border border-[#dedee8] hover:border-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiSmartphone className="w-3 h-3 text-[#6e73fa] group-hover:scale-110 transition-transform" />
                    <span>/ethos-qr</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Tell me about VAHN and the Fleet App MVP")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl bg-white hover:bg-[#f8f8fc] text-[#374151] hover:text-[#262ef2] border border-[#dedee8] hover:border-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiActivity className="w-3 h-3 text-[#6e73fa] group-hover:scale-110 transition-transform" />
                    <span>/vahn-fleet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Tell me about Trackaday and Mapbox GL")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl bg-white hover:bg-[#f8f8fc] text-[#374151] hover:text-[#262ef2] border border-[#dedee8] hover:border-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
                  >
                    <FiLayers className="w-3 h-3 text-[#0ea5e9] group-hover:scale-110 transition-transform" />
                    <span>/trackaday</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => executeQuery("Is Maroof available for senior contracts?")}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl bg-white hover:bg-[#f8f8fc] text-[#374151] hover:text-[#262ef2] border border-[#dedee8] hover:border-[#262ef2] transition-all font-mono font-medium shadow-2xs group"
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
