import React, { useRef } from "react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiCompass, FiSmartphone, FiActivity, FiTrendingUp, FiShield, FiRadio, FiLayers, FiCheck } from "react-icons/fi";
import { IconType } from "react-icons";

interface ShipmentItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  metric: string;
  metricLabel: string;
  color: string;
  icon: IconType;
  summary: string;
  highlights: string[];
  tech: string[];
  link: string;
  linkLabel: string;
}

const SHIPMENTS: ShipmentItem[] = [
  {
    id: "01",
    title: "Trackaday",
    category: "Geospatial Activity Tracker",
    tag: "Side Project",
    metric: "Mapbox + Turf.js",
    metricLabel: "Geospatial Buffer & Route Telemetry",
    color: "#0ea5e9",
    icon: FiCompass,
    summary: "Interactive route tracker with Mapbox GL vector tile rendering, dynamic spatial buffers, and live GPS telemetry.",
    highlights: ["Mapbox GL Vector Tile Engine", "Turf.js Spatial Distance Buffers", "Live Route GPS Playback"],
    tech: ["Mapbox GL", "Turf.js", "Geospatial", "React"],
    link: "https://www.trackaday.buzz/",
    linkLabel: "Visit Live App",
  },
  {
    id: "02",
    title: "Ethos Ascend",
    category: "React Native Mobile App",
    tag: "Active Contract",
    metric: "Sub-100ms",
    metricLabel: "Camera QR Vision Scan Engine",
    color: "#262ef2",
    icon: FiSmartphone,
    summary: "Sales operations mobile app featuring custom optical QR camera vision with offline-first synchronization.",
    highlights: ["Sub-100ms Optical QR Scanner", "Offline-First Sync Pipeline", "Field Usability Design System"],
    tech: ["React Native", "Camera Vision", "Offline Sync", "TypeScript"],
    link: "https://www.ethoswatches.com/",
    linkLabel: "Company Site",
  },
  {
    id: "03",
    title: "VAHN Fleet MVP",
    category: "Fleet Logistics & Maps",
    tag: "0 to 1 MVP",
    metric: "48+ Units",
    metricLabel: "Real-Time Telemetry & State Sync",
    color: "#6e73fa",
    icon: FiActivity,
    summary: "Built production MVP from scratch with live vehicle telemetry, atomic Zustand state, and Mixpanel analytics.",
    highlights: ["0 to 1 Production MVP Release", "Lightweight Zustand State Engine", "Mixpanel Analytics Pipeline"],
    tech: ["TypeScript", "Zustand", "Mixpanel", "Google Maps"],
    link: "https://vahn.in/",
    linkLabel: "Company Site",
  },
  {
    id: "04",
    title: "Graple.ai",
    category: "SaaS Experimentation Engine",
    tag: "Live SaaS",
    metric: "+28.4%",
    metricLabel: "Conversion Lift & Cohort Funnels",
    color: "#0c9618",
    icon: FiTrendingUp,
    summary: "Automated A/B testing platform with real-time retention graphs and drag-and-drop campaign builder.",
    highlights: ["Automated A/B Funnels & Lift", "Cohort User Segmentation Engine", "Real-Time Analytics Dashboard"],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    link: "https://graple-theta.vercel.app/",
    linkLabel: "Launch App",
  },
  {
    id: "05",
    title: "SnapAid",
    category: "AI Emergency Healthcare",
    tag: "Offline PWA",
    metric: "Zero Latency",
    metricLabel: "AI Emergency Triage & Protocols",
    color: "#ca7c0e",
    icon: FiShield,
    summary: "Progressive Web App delivering instant step-by-step emergency medical guidance with offline caching.",
    highlights: ["100% Offline IndexedDB Cache", "AI Symptom Diagnostic Parser", "Emergency First-Aid Flow"],
    tech: ["React", "Offline PWA", "AI Triage", "Tailwind"],
    link: "https://snapaid.live/",
    linkLabel: "Launch App",
  },
  {
    id: "06",
    title: "56 Secure Command",
    category: "Security & Radar Telemetry",
    tag: "High Scale",
    metric: "Live Radar",
    metricLabel: "Police & Guard Alert Dispatching",
    color: "#aa26f2",
    icon: FiRadio,
    summary: "Multi-tenant command dashboards with live Google Maps telemetry and Smart Eye threat dispatching.",
    highlights: ["Multi-Tenant Command Dispatch", "Google Maps Fleet Radar", "WebSocket Live Alarm Feeds"],
    tech: ["Google Maps API", "WebSockets", "Smart Eye", "React"],
    link: "https://56secure.com/",
    linkLabel: "Company Site",
  },
  {
    id: "07",
    title: "Twist N Words",
    category: "Physics Puzzle Game",
    tag: "Live Game",
    metric: "60 FPS",
    metricLabel: "Gesture Drag & State Machine",
    color: "#f25c26",
    icon: FiLayers,
    summary: "Interactive word rearrangement game featuring smooth touch physics and local storage streak tracking.",
    highlights: ["60 FPS Touch Drag Engine", "Dynamic Letter Rearrangement", "Local Streak & High Score"],
    tech: ["React", "Physics Gestures", "State Engine"],
    link: "https://twistnwords.vercel.app/",
    linkLabel: "Play Game",
  },
];

export const ScrollShipmentsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["10%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[260vh] bg-transparent">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-10 sm:py-14">
        {/* Top Header & Interactive Scrub Progress Bar */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full z-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div>
              <div className="inline-block mb-2">
                <span className="tag">
                  <span className="w-2 h-2 rounded-full bg-[#262ef2] mr-1.5" />
                  Scroll Showcase · Key Deliverables
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1f1f32]">
                Featured Shipments &amp; <span className="serif-accent blue-accent font-normal">Production MVPs</span>
              </h2>
            </div>

            {/* Scroll Instruction */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#8c859d]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Scroll down to navigate shipments</span>
            </div>
          </div>

          {/* Interactive Scroll Progress Scrubber Bar */}
          <div className="w-full h-1.5 bg-[#e3e2e8] rounded-full overflow-hidden relative">
            <m.div
              style={{ width: progressBarWidth }}
              className="h-full bg-gradient-to-r from-[#262ef2] via-[#6e73fa] to-[#0ea5e9] rounded-full"
            />
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="w-full relative my-auto overflow-visible px-4 sm:px-8">
          <m.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 w-max will-change-transform"
          >
            {SHIPMENTS.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={idx}
                  className="w-[290px] xs:w-[320px] sm:w-[360px] md:w-[420px] h-[370px] sm:h-[390px] shrink-0 bg-white/90 backdrop-blur-xl border border-white/95 rounded-[28px] p-5 sm:p-7 shadow-[0_20px_50px_-15px_rgba(32,31,50,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] hover:border-[#262ef2] hover:shadow-[0_25px_60px_-15px_rgba(38,46,242,0.18)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Brand Color Sheen Corner */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px] opacity-10 pointer-events-none transition-transform group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  />

                  <div>
                    {/* Top Bar */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-2xs border border-white shrink-0"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-[#1f1f32] group-hover:text-[#262ef2] transition-colors leading-tight">
                              {item.title}
                            </h3>
                          </div>
                          <span className="text-xs text-[#6e73fa] font-mono mt-0.5 block font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <span
                        className="text-[10px] font-mono font-bold text-white px-2.5 py-0.5 rounded-full shrink-0 shadow-2xs"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Highlight Metric Box */}
                    <div className="p-3 rounded-xl bg-[#f8f8fc] border border-[#ececf6] my-3 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-[#1f1f32] font-mono block">
                          {item.metric}
                        </span>
                        <span className="text-[11px] text-[#61667b] font-mono">
                          {item.metricLabel}
                        </span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#4d5564] leading-relaxed mb-3">
                      {item.summary}
                    </p>

                    {/* Structured Highlights */}
                    <div className="space-y-1.5 hidden sm:block">
                      {item.highlights.slice(0, 2).map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-[11px] text-[#374151] font-medium"
                        >
                          <FiCheck className="w-3 h-3 text-[#262ef2] shrink-0" strokeWidth={2.5} />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-3 border-t border-[#f0f0f6] flex items-center justify-between text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.slice(0, 3).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono font-medium text-[#201f32] bg-[#f3f3f9] px-2 py-0.5 rounded border border-[#e3e2e5]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-white bg-[#201f32] hover:bg-[#262ef2] px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-2xs shrink-0 whitespace-nowrap"
                    >
                      <span>{item.linkLabel}</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </m.div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full z-20 flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
          <span>01 Trackaday ➔ 07 Twist N Words</span>
          <span>Pinned Scroll Experience</span>
        </div>
      </div>
    </section>
  );
};
