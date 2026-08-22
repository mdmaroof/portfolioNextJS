import React, { useRef, useState, useEffect } from "react";
import { m, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiFolder, FiExternalLink, FiCheck, FiCompass, FiSmartphone, FiActivity, FiTrendingUp, FiShield, FiRadio, FiLayers, FiCode, FiWifi, FiBattery, FiArrowRight } from "react-icons/fi";
import { IconType } from "react-icons";

interface PhoneProject {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tag: string;
  metric: string;
  metricLabel: string;
  color: string;
  icon: IconType;
  description: string;
  features: string[];
  tech: string[];
  link: string;
  linkLabel: string;
  liveBadge: string;
}

const PHONE_PROJECTS: PhoneProject[] = [
  {
    id: "01",
    name: "Trackaday",
    tagline: "Geospatial route tracking & spatial analysis",
    category: "Geospatial & Maps",
    tag: "Side Project",
    metric: "Mapbox GL + Turf.js",
    metricLabel: "Spatial Buffers & Vector Telemetry",
    color: "#0ea5e9",
    icon: FiCompass,
    description:
      "Interactive geospatial route and activity tracker leveraging Mapbox GL for vector map rendering and Turf.js for spatial calculations, polygon buffers, and route geometry.",
    features: [
      "Interactive Mapbox GL vector tile rendering",
      "Turf.js spatial calculations & distance geometry",
      "Real-time route playback & telemetry",
      "Geofencing & buffer polygon analysis",
    ],
    tech: ["Mapbox GL", "Turf.js", "Geospatial", "React", "TypeScript"],
    link: "https://www.trackaday.buzz/",
    linkLabel: "Visit Live App",
    liveBadge: "LIVE APP",
  },
  {
    id: "02",
    name: "Ethos Ascend",
    tagline: "High-speed sales operations & optical scanning",
    category: "Mobile Engineering",
    tag: "Active Contract",
    metric: "Sub-100ms Scan",
    metricLabel: "Custom Optical QR Camera Vision",
    color: "#262ef2",
    icon: FiSmartphone,
    description:
      "Enterprise sales operations mobile application built for field store personnel with custom high-speed QR barcode camera scanning and offline-first cache sync.",
    features: [
      "Sub-100ms optical QR scanner engine",
      "Offline-first synchronization pipeline",
      "Field store inventory & client UX flows",
      "TypeScript strict mode architecture",
    ],
    tech: ["React Native", "Camera Vision", "Offline Sync", "TypeScript"],
    link: "https://www.ethoswatches.com/",
    linkLabel: "Company Site",
    liveBadge: "ACTIVE APP",
  },
  {
    id: "03",
    name: "VAHN Fleet MVP",
    tagline: "Real-time vehicle telemetry & state management",
    category: "Fleet Logistics & Maps",
    tag: "0 to 1 MVP",
    metric: "48+ Units Synced",
    metricLabel: "Atomic Zustand Telemetry Pipeline",
    color: "#6e73fa",
    icon: FiActivity,
    description:
      "Architected and delivered the production Fleet App MVP from 0 to 1. Synchronized live vehicle telemetry, dynamic maps, and Mixpanel analytics for operational decisions.",
    features: [
      "Built & shipped 0 to 1 production MVP",
      "Lightweight Zustand state maintainability",
      "Mixpanel user behavior tracking",
      "Live vehicle map telemetry pipeline",
    ],
    tech: ["TypeScript", "Zustand", "Mixpanel", "Google Maps"],
    link: "https://vahn.in/",
    linkLabel: "Company Site",
    liveBadge: "PRODUCTION MVP",
  },
  {
    id: "04",
    name: "Graple.ai",
    tagline: "Boost conversion with automated experimentation",
    category: "SaaS & Analytics",
    tag: "Live SaaS",
    metric: "+28.4% Lift",
    metricLabel: "A/B Experimentation & Funnels",
    color: "#0c9618",
    icon: FiTrendingUp,
    description:
      "Full-stack experimentation platform helping product teams design, launch, and analyze A/B tests and engagement funnels with real-time statistical significance.",
    features: [
      "Real-time A/B testing dashboard",
      "User cohort segmentation engine",
      "Retention funnel visualizer",
      "Campaign builder with drag-and-drop",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    link: "https://graple-theta.vercel.app/",
    linkLabel: "Launch App",
    liveBadge: "LIVE SAAS",
  },
  {
    id: "05",
    name: "SnapAid",
    tagline: "Instant emergency guidance when seconds count",
    category: "AI & Healthcare PWA",
    tag: "Offline PWA",
    metric: "Zero Latency",
    metricLabel: "Offline IndexedDB Medical Triage",
    color: "#ca7c0e",
    icon: FiShield,
    description:
      "Progressive Web App providing immediate step-by-step first-aid protocols during medical emergencies. Designed with offline-first storage and rapid AI symptom analysis.",
    features: [
      "100% offline-ready IndexedDB cache",
      "AI symptom diagnostic parser",
      "Step-by-step CPR & first-aid flow",
      "Emergency contact one-touch dial",
    ],
    tech: ["React", "Offline PWA", "AI Triage", "Tailwind CSS"],
    link: "https://snapaid.live/",
    linkLabel: "Launch App",
    liveBadge: "OFFLINE PWA",
  },
  {
    id: "06",
    name: "56 Secure Command",
    category: "Security & Radar Telemetry",
    tag: "High Scale",
    tagline: "Multi-tenant radar tracking & alert dispatching",
    metric: "Live Radar",
    metricLabel: "Police & Guard Command Feeds",
    color: "#aa26f2",
    icon: FiRadio,
    description:
      "Engineered Admin, Guard, and Police command dashboards from scratch featuring live Google Maps tracking, WebSocket alarm telemetry, and Smart Eye alerts.",
    features: [
      "Multi-tenant command & dispatch UI",
      "Live Google Maps radar telemetry",
      "Smart Eye AI alert notifications",
      "Sub-second WebSocket alarm stream",
    ],
    tech: ["Google Maps API", "WebSockets", "Smart Eye", "React"],
    link: "https://56secure.com/",
    linkLabel: "Company Site",
    liveBadge: "HIGH SCALE",
  },
  {
    id: "07",
    name: "Twist N Words",
    tagline: "Challenge vocabulary with touch word puzzles",
    category: "Physics & Game Engine",
    tag: "Live Game",
    metric: "60 FPS Touch",
    metricLabel: "Physics Gesture State Engine",
    color: "#f25c26",
    icon: FiLayers,
    description:
      "Physics-based word rearrangement puzzle game with 60 FPS touch drag gestures, local score persistence, and dynamic difficulty algorithms.",
    features: [
      "60 FPS touch gesture drag physics",
      "Interactive word rearrangement engine",
      "Combo streak & score tracking",
      "Offline local game state save",
    ],
    tech: ["React", "Physics Gestures", "State Engine", "Tailwind"],
    link: "https://twistnwords.vercel.app/",
    linkLabel: "Play Game",
    liveBadge: "LIVE GAME",
  },
  {
    id: "08",
    name: "Symzo",
    tagline: "Clean, responsive product engineering",
    category: "Design Systems & UI",
    tag: "Live Product",
    metric: "Sub-Second UX",
    metricLabel: "Component Token Architecture",
    color: "#0c5696",
    icon: FiCode,
    description:
      "Modern product engineering and design system architecture delivering sub-second interaction speeds and pixel-perfect responsiveness.",
    features: [
      "Reusable design system tokens",
      "High-fidelity responsive layouts",
      "Optimized Next.js page performance",
      "Component-driven modular UI",
    ],
    tech: ["Next.js", "Tailwind CSS", "Design Systems", "TypeScript"],
    link: "https://www.symzo.in/",
    linkLabel: "Launch Project",
    liveBadge: "LIVE PRODUCT",
  },
];

export const PhoneScrollShowcaseSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Hook scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const count = PHONE_PROJECTS.length;
      const index = Math.min(count - 1, Math.floor(latest * count));
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  const currentProject = PHONE_PROJECTS[activeIndex] || PHONE_PROJECTS[0];
  const CurrentIcon = currentProject.icon;

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative bg-transparent"
      style={{ height: `${PHONE_PROJECTS.length * 90}vh` }}
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
          {/* Section Eyebrow */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block mb-2">
              <span className="tag">
                <FiFolder className="text-[#262ef2] mr-1.5" />
                Interactive Phone Showcase · Scroll to Explore
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1f1f32]">
              Real Software. <br />
              <span className="serif-accent blue-accent font-normal">Production Impact Inside the Device.</span>
            </h2>
          </div>

          {/* 2-Column Showcase: Left Interactive Project Selector & Right Phone Device */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Interactive Project Stepper & Key Overview */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-center space-y-2.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8c859d] mb-1">
                Select or Scroll Projects ({activeIndex + 1}/{PHONE_PROJECTS.length})
              </span>

              <div className="space-y-2">
                {PHONE_PROJECTS.map((proj, idx) => {
                  const isActive = activeIndex === idx;
                  const Icon = proj.icon;

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? "bg-white border-[#262ef2] shadow-[0_12px_30px_-10px_rgba(38,46,242,0.2)] scale-[1.02]"
                          : "bg-white/50 border-white/80 hover:bg-white hover:border-[#e2e2ec]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                            isActive ? "text-white shadow-xs" : "text-[#4d5564] bg-[#f3f3f9]"
                          }`}
                          style={{ backgroundColor: isActive ? proj.color : undefined }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4
                            className={`text-sm font-bold transition-colors ${
                              isActive ? "text-[#1f1f32]" : "text-[#4d5564] group-hover:text-[#1f1f32]"
                            }`}
                          >
                            {proj.name}
                          </h4>
                          <span className="text-[10px] text-[#8c859d] font-mono block">
                            {proj.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full transition-all ${
                            isActive ? "text-white" : "text-[#8c859d] bg-[#f3f3f9]"
                          }`}
                          style={{ backgroundColor: isActive ? proj.color : undefined }}
                        >
                          {proj.tag}
                        </span>
                        {isActive && <FiArrowRight className="w-3.5 h-3.5 text-[#262ef2] animate-pulse" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sleek Phone Display */}
            <div className="lg:col-span-7 flex justify-center items-center">
              {/* iPhone Titanium Shell */}
              <div className="w-[310px] sm:w-[360px] md:w-[390px] h-[580px] sm:h-[640px] rounded-[48px] bg-[#12131a] p-3 sm:p-3.5 shadow-[0_30px_90px_-20px_rgba(32,31,50,0.35),0_0_0_1px_rgba(255,255,255,0.15)] relative flex flex-col justify-between select-none">
                {/* Phone Outer Bezel Highlight */}
                <div className="absolute inset-0 rounded-[48px] border border-white/20 pointer-events-none" />

                {/* Inner Screen Display */}
                <div className="w-full h-full bg-[#f8f8fc] rounded-[38px] overflow-hidden relative flex flex-col justify-between border border-[#e5e5ee] p-4 sm:p-5">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-5.5 bg-black rounded-full z-40 flex items-center justify-between px-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1c1c24] border border-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* iOS Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#4d5564] pt-1 px-2 z-30">
                    <span className="font-bold">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <FiWifi className="w-3 h-3" />
                      <FiBattery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Screen Animated Content */}
                  <div className="my-auto pt-4 pb-2 overflow-y-auto no-scrollbar">
                    <AnimatePresence mode="wait">
                      <m.div
                        key={currentProject.id}
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -14, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="space-y-3"
                      >
                        {/* Top Live Pill & Category */}
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            {currentProject.liveBadge}
                          </span>
                          <span
                            className="text-[9px] font-mono font-bold text-white px-2 py-0.5 rounded-full shadow-2xs"
                            style={{ backgroundColor: currentProject.color }}
                          >
                            {currentProject.tag}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                              style={{ backgroundColor: currentProject.color }}
                            >
                              <CurrentIcon className="w-3.5 h-3.5 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1f1f32] leading-tight">
                              {currentProject.name}
                            </h3>
                          </div>
                          <p className="text-xs font-semibold text-[#262ef2] mt-1 leading-snug">
                            {currentProject.tagline}
                          </p>
                        </div>

                        {/* Highlight Metric Box */}
                        <div className="p-2.5 rounded-xl bg-white border border-[#e3e2e8] shadow-2xs flex items-center justify-between">
                          <div>
                            <span className="text-xs font-mono font-bold text-[#1f1f32] block">
                              {currentProject.metric}
                            </span>
                            <span className="text-[10px] text-[#61667b] font-mono">
                              {currentProject.metricLabel}
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {/* Summary Description */}
                        <p className="text-[11px] sm:text-xs text-[#4d5564] leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* Key Deliverables Structured List */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#8c859d] block">
                            Key Deliverables:
                          </span>
                          {currentProject.features.slice(0, 3).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-start gap-1.5 p-1.5 rounded-lg bg-white border border-[#ececf6] text-[10px] sm:text-[11px] text-[#374151] leading-tight"
                            >
                              <FiCheck className="w-3 h-3 text-[#262ef2] shrink-0 mt-0.5" strokeWidth={2.5} />
                              <span className="font-medium">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {currentProject.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] font-mono font-medium text-[#201f32] bg-[#f3f3f9] px-2 py-0.5 rounded border border-[#e3e2e5]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </m.div>
                    </AnimatePresence>
                  </div>

                  {/* Phone Bottom: Direct Launcher Action Button & Home Indicator */}
                  <div className="pt-2 z-30">
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dark w-full justify-center text-center text-xs py-2.5 rounded-xl shadow-md group-hover:bg-[#262ef2] transition-all flex items-center gap-1.5 font-bold"
                    >
                      <span>{currentProject.linkLabel}</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* iOS Home Indicator Bar */}
                    <div className="w-28 h-1 bg-[#1f1f32]/30 rounded-full mx-auto mt-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
