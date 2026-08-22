import React, { useRef, useState, useEffect } from "react";
import { m, useScroll, AnimatePresence } from "framer-motion";
import { FiFolder, FiExternalLink, FiCheck, FiCompass, FiTrendingUp, FiShield, FiLayers, FiCode, FiWifi, FiBattery } from "react-icons/fi";
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
      "Interactive geospatial route and activity tracker leveraging Mapbox GL for vector map rendering and Turf.js for spatial calculations and route geometry.",
    features: [
      "Mapbox GL vector tile rendering",
      "Turf.js distance & buffer geometry",
      "Real-time GPS route playback",
    ],
    tech: ["Mapbox GL", "Turf.js", "Geospatial", "React"],
    link: "https://www.trackaday.buzz/",
    linkLabel: "Visit Live App",
    liveBadge: "SIDE PROJECT",
  },
  {
    id: "02",
    name: "Graple.ai",
    tagline: "Boost conversion with automated experimentation",
    category: "SaaS & Analytics",
    tag: "Side Project",
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
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    link: "https://graple-theta.vercel.app/",
    linkLabel: "Launch App",
    liveBadge: "LIVE SAAS",
  },
  {
    id: "03",
    name: "SnapAid",
    tagline: "Instant emergency guidance when seconds count",
    category: "AI & Healthcare PWA",
    tag: "Side Project",
    metric: "Zero Latency",
    metricLabel: "Offline IndexedDB Medical Triage",
    color: "#ca7c0e",
    icon: FiShield,
    description:
      "Progressive Web App providing immediate step-by-step first-aid protocols during medical emergencies with 100% offline-first IndexedDB storage.",
    features: [
      "100% offline IndexedDB cache",
      "AI symptom diagnostic parser",
      "Step-by-step CPR & first-aid flow",
    ],
    tech: ["React", "Offline PWA", "AI Triage", "Tailwind"],
    link: "https://snapaid.live/",
    linkLabel: "Launch App",
    liveBadge: "OFFLINE PWA",
  },
  {
    id: "04",
    name: "Twist N Words",
    tagline: "Challenge vocabulary with touch word puzzles",
    category: "Physics & Game Engine",
    tag: "Side Project",
    metric: "60 FPS Touch",
    metricLabel: "Physics Gesture State Engine",
    color: "#f25c26",
    icon: FiLayers,
    description:
      "Physics-based word rearrangement puzzle game with 60 FPS touch drag gestures, local score persistence, and dynamic difficulty algorithms.",
    features: [
      "60 FPS touch gesture drag physics",
      "Interactive word rearrangement",
      "Local streak & score tracking",
    ],
    tech: ["React", "Physics Gestures", "State Engine"],
    link: "https://twistnwords.vercel.app/",
    linkLabel: "Play Game",
    liveBadge: "LIVE GAME",
  },
  {
    id: "05",
    name: "Symzo",
    tagline: "Clean, responsive product engineering",
    category: "Design Systems & UI",
    tag: "Side Project",
    metric: "Sub-Second UX",
    metricLabel: "Component Token Architecture",
    color: "#0c5696",
    icon: FiCode,
    description:
      "Modern product engineering and design system architecture delivering sub-second interaction speeds and pixel-perfect responsiveness.",
    features: [
      "Reusable design system tokens",
      "High-fidelity responsive layouts",
      "Optimized Next.js page speed",
    ],
    tech: ["Next.js", "Tailwind CSS", "Design Systems"],
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
      style={{ height: `${PHONE_PROJECTS.length * 85}vh` }}
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden py-6 sm:py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-block mb-1.5">
              <span className="tag">
                <FiFolder className="text-[#262ef2] mr-1.5" />
                Featured Side Projects · Scroll to Explore
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1f1f32]">
              Side Projects &amp; <span className="serif-accent blue-accent font-normal">Independent Software</span>
            </h2>
          </div>

          {/* Centered Project Selector Pill Tabs */}
          <div className="mb-4 sm:mb-5 inline-flex p-1 bg-white/80 backdrop-blur-md rounded-full border border-white/90 shadow-sm max-w-full overflow-x-auto gap-1">
            {PHONE_PROJECTS.map((proj, idx) => {
              const isActive = activeIndex === idx;
              const Icon = proj.icon;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "bg-[#201f32] text-white shadow-xs font-bold"
                      : "text-[#4d5564] hover:text-[#201f32] hover:bg-white/60"
                  }`}
                >
                  <Icon className="w-3 h-3" style={{ color: isActive ? proj.color : undefined }} />
                  <span>{proj.name}</span>
                </button>
              );
            })}
          </div>

          {/* Authentic iPhone 15 Pro Titanium Chassis (Slim 19.5:9 Aspect Ratio) */}
          <div className="flex justify-center items-center">
            <div className="w-[275px] sm:w-[295px] md:w-[305px] h-[570px] sm:h-[610px] md:h-[630px] rounded-[52px] bg-[#1a1a24] p-3 shadow-[0_25px_80px_-15px_rgba(20,20,35,0.4),0_0_0_1px_rgba(255,255,255,0.18),inset_0_1px_2px_rgba(255,255,255,0.3)] relative flex flex-col justify-between select-none">
              
              {/* Inner Retina OLED Screen */}
              <div className="w-full h-full bg-[#f8f8fc] rounded-[42px] overflow-hidden relative flex flex-col justify-between border border-[#e5e5ee] p-3.5 sm:p-4">
                
                {/* iOS 17 Status Bar with Perfectly Centered Dynamic Island */}
                <div className="flex items-center justify-between text-[9px] font-mono text-[#4d5564] pt-0.5 px-1.5 z-30 select-none">
                  <span className="font-bold text-[#1f1f32]">9:41</span>

                  {/* Real Apple Dynamic Island Notch */}
                  <div className="w-20 sm:w-22 h-4 sm:h-4.5 bg-black rounded-full flex items-center justify-between px-2 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c24] border border-white/20" />
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[#1f1f32]">
                    <FiWifi className="w-3 h-3" />
                    <FiBattery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Screen Dynamic Animated Content */}
                <div className="my-auto pt-2 pb-1 overflow-y-auto no-scrollbar">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={currentProject.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="space-y-2"
                    >
                      {/* Top Status Badge & Tag */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          {currentProject.liveBadge}
                        </span>
                        <span
                          className="text-[8px] font-mono font-bold text-white px-2 py-0.5 rounded-full shadow-2xs"
                          style={{ backgroundColor: currentProject.color }}
                        >
                          {currentProject.tag}
                        </span>
                      </div>

                      {/* Project Name, Icon & Tagline */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-xs"
                            style={{ backgroundColor: currentProject.color }}
                          >
                            <CurrentIcon className="w-3 h-3 text-white" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#1f1f32] leading-tight">
                            {currentProject.name}
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-[#262ef2] mt-0.5 leading-tight">
                          {currentProject.tagline}
                        </p>
                      </div>

                      {/* Highlight Metric Box */}
                      <div className="p-2 rounded-xl bg-white border border-[#e3e2e8] shadow-2xs flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-mono font-bold text-[#1f1f32] block leading-tight">
                            {currentProject.metric}
                          </span>
                          <span className="text-[9px] text-[#61667b] font-mono">
                            {currentProject.metricLabel}
                          </span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      </div>

                      {/* Summary Description */}
                      <p className="text-[10px] sm:text-[11px] text-[#4d5564] leading-relaxed">
                        {currentProject.description}
                      </p>

                      {/* Key Deliverables Structured List */}
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-[#8c859d] block">
                          Key Deliverables:
                        </span>
                        {currentProject.features.slice(0, 3).map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-1 p-1 rounded-md bg-white border border-[#ececf6] text-[9px] sm:text-[10px] text-[#374151] leading-tight"
                          >
                            <FiCheck className="w-2.5 h-2.5 text-[#262ef2] shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {currentProject.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[8px] font-mono font-medium text-[#201f32] bg-[#f3f3f9] px-1.5 py-0.5 rounded border border-[#e3e2e5]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </m.div>
                  </AnimatePresence>
                </div>

                {/* Phone Bottom: Direct Launcher Action Button & Home Indicator */}
                <div className="pt-1.5 z-30">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark w-full justify-center text-center text-xs py-2 rounded-xl shadow-md hover:bg-[#262ef2] transition-all flex items-center gap-1.5 font-bold"
                  >
                    <span>{currentProject.linkLabel}</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>

                  {/* iOS Home Indicator Bar */}
                  <div className="w-24 h-1 bg-[#1f1f32]/40 rounded-full mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Progress Counter */}
          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono text-[#8c859d]">
              Project {activeIndex + 1} of {PHONE_PROJECTS.length} · Scroll down to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
