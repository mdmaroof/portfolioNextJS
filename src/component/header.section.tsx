import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiCheck, FiSend, FiCode, FiSmartphone, FiCpu, FiCompass, FiExternalLink, FiActivity, FiLayers, FiShield, FiTrendingUp } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface HeaderComponentProps {
  data: any;
  onMessageSentSuccess?: () => void;
}

interface ProjectPreviewCard {
  title: string;
  category: string;
  tag: string;
  metric: string;
  color: string;
  visualType: "mobile" | "map" | "chart" | "health" | "game" | "saas";
  link: string;
  summary: string;
}

const SHIPMENTS: ProjectPreviewCard[] = [
  {
    title: "Ethos Ascend",
    category: "React Native Mobile App",
    tag: "Production",
    metric: "Sub-100ms QR Scanner",
    color: "#262ef2",
    visualType: "mobile",
    link: "https://github.com/mdmaroof",
    summary: "High-speed field sales operations & offline sync",
  },
  {
    title: "VAHN Fleet MVP",
    category: "Fleet Logistics & Maps",
    tag: "0 to 1 MVP",
    metric: "48+ Live Units Synced",
    color: "#6e73fa",
    visualType: "map",
    link: "https://github.com/mdmaroof",
    summary: "Real-time vehicle telemetry & state management",
  },
  {
    title: "Graple.ai",
    category: "SaaS Experimentation",
    tag: "Live SaaS",
    metric: "+28.4% Conversion Lift",
    color: "#0c9618",
    visualType: "chart",
    link: "https://graple-theta.vercel.app/",
    summary: "Automated A/B funnels & cohort analytics",
  },
  {
    title: "SnapAid",
    category: "Emergency Guidance",
    tag: "Offline PWA",
    metric: "Instant Triage Engine",
    color: "#ca7c0e",
    visualType: "health",
    link: "https://snapaid.live/",
    summary: "Step-by-step emergency medical protocols",
  },
  {
    title: "56 Secure Command",
    category: "Guard & Police Telemetry",
    tag: "High Scale",
    metric: "Live Radar Dispatch",
    color: "#aa26f2",
    visualType: "map",
    link: "https://github.com/mdmaroof",
    summary: "Multi-tenant command & live Google Maps tracking",
  },
  {
    title: "Twist N Words",
    category: "Interactive Word Puzzle",
    tag: "Live Game",
    metric: "60 FPS Touch Controls",
    color: "#f25c26",
    visualType: "game",
    link: "https://twistnwords.vercel.app/",
    summary: "Physics drag-and-drop word shuffle game",
  },
  {
    title: "Symzo",
    category: "Focused Product Experience",
    tag: "Live Product",
    metric: "Fast Responsive UI",
    color: "#0c5696",
    visualType: "saas",
    link: "https://www.symzo.in/",
    summary: "Clean product-led interface & modern frontend",
  },
];

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ data, onMessageSentSuccess }) => {
  const [typedText, setTypedText] = useState("");
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [posX, setPosX] = useState(0);
  const [hoverMult, setHoverMult] = useState(1);

  const headlines = [
    "Building High-Scale Web Apps",
    "Crafting Fluid Mobile Experiences",
    "Architecting Real-time Dashboards",
    "Delivering Production-Ready MVPs",
  ];

  // Typewriter
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

  // Continuous auto-glide ticker animation (Deslopify style)
  useEffect(() => {
    let animId: number;
    let currentX = posX;
    let lastTime = performance.now();
    const speed = 55; // px per second

    const frame = (now: number) => {
      const dt = Math.min(64, now - lastTime) / 1000;
      lastTime = now;

      if (!isDragging && trackRef.current) {
        currentX -= speed * hoverMult * dt;
        const totalW = trackRef.current.scrollWidth / 2;
        if (totalW > 0) {
          while (currentX <= -totalW) currentX += totalW;
          while (currentX > 0) currentX -= totalW;
        }
        trackRef.current.style.transform = `translateX(${currentX}px)`;
      }

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, hoverMult, posX]);

  // Pointer drag controls
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (trackRef.current) {
      const transform = window.getComputedStyle(trackRef.current).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        setPosX(matrix.m41);
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = e.clientX - startX;
    const newX = posX + delta;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  };

  const handlePointerUp = () => {
    if (isDragging && trackRef.current) {
      const transform = window.getComputedStyle(trackRef.current).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        setPosX(matrix.m41);
      }
    }
    setIsDragging(false);
  };

  // Duplicated list for seamless infinite loop
  const displayItems = [...SHIPMENTS, ...SHIPMENTS];

  // Helper render preview visual for each card
  const renderCardVisual = (card: ProjectPreviewCard) => {
    switch (card.visualType) {
      case "mobile":
        return (
          <div className="h-24 bg-gradient-to-br from-[#1b1c2b] to-[#12131e] rounded-xl p-2.5 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] font-mono text-[#6e73fa] uppercase tracking-wider block">QR Engine Active</span>
              <p className="text-xs font-bold">120 FPS Scan HUD</p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Camera Synced
              </div>
            </div>
            <div className="w-12 h-12 rounded-lg border border-dashed border-[#262ef2] flex items-center justify-center bg-[#262ef2]/10">
              <FiSmartphone className="w-6 h-6 text-[#6e73fa]" />
            </div>
          </div>
        );
      case "map":
        return (
          <div className="h-24 bg-gradient-to-br from-[#101426] to-[#0b0e1b] rounded-xl p-2.5 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider block">Live Map Telemetry</span>
              <p className="text-xs font-bold">48 Units Connected</p>
              <span className="text-[10px] text-[#8c859d] font-mono">Ping: 84ms · WebSockets</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
              <FiActivity className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        );
      case "chart":
        return (
          <div className="h-24 bg-gradient-to-br from-[#0c1f15] to-[#07130d] rounded-xl p-2.5 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider block">A/B Testing Funnel</span>
              <p className="text-xs font-bold">Variant B +28.4% Lift</p>
              <span className="text-[10px] text-emerald-300/80 font-mono">Sample: 45.2K Users</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center">
              <FiTrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        );
      case "health":
        return (
          <div className="h-24 bg-gradient-to-br from-[#24170d] to-[#140c06] rounded-xl p-2.5 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-wider block">Emergency Medical PWA</span>
              <p className="text-xs font-bold">Offline Protocol V2</p>
              <span className="text-[10px] text-amber-300/80 font-mono">Zero Latency Triage</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center">
              <FiShield className="w-6 h-6 text-amber-400" />
            </div>
          </div>
        );
      default:
        return (
          <div className="h-24 bg-gradient-to-br from-[#1a1928] to-[#12111c] rounded-xl p-2.5 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <span className="text-[9px] font-mono text-[#aa26f2] uppercase tracking-wider block">Production Web SaaS</span>
              <p className="text-xs font-bold">Sub-Second Interactions</p>
              <span className="text-[10px] text-[#b9bcd0] font-mono">React 18 + TS Engine</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
              <FiLayers className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-12 overflow-hidden relative">
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
              <SiReact className="text-[#00d8ff]" /> React &amp; React Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiNextdotjs className="text-[#000]" /> Next.js (SSR / SSG)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiTypescript className="text-[#3178c6]" /> TypeScript Mastery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#e3e2e5] text-[#201f32] shadow-2xs">
              <SiTailwindcss className="text-[#38bdf8]" /> Tailwind &amp; UI Craft
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Gliding Flagship Carousel Stage */}
      <div className="mt-16 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#262ef2]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#262ef2] font-bold">
              ✦ Featured Shipments &amp; Production MVPs
            </span>
          </div>
          <span className="text-xs font-mono text-[#8c859d]">Drag or hover to inspect</span>
        </div>

        {/* Carousel Track Container with Smooth Masked Edges */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setHoverMult(0.4)}
          onMouseLeave={() => setHoverMult(1)}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none py-3"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-5 w-max will-change-transform px-6"
          >
            {displayItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[300px] sm:w-[330px] shrink-0 bg-white border border-[#e5e5ee] rounded-2xl p-4 shadow-[0_12px_30px_-15px_rgba(32,31,50,0.12)] hover:border-[#262ef2] hover:shadow-[0_20px_40px_-15px_rgba(38,46,242,0.18)] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-mono font-bold text-white px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[#6e73fa] font-semibold flex items-center gap-1">
                      {item.metric}
                    </span>
                  </div>

                  {/* Visual Simulation HUD */}
                  <div className="mb-3.5">
                    {renderCardVisual(item)}
                  </div>

                  {/* Title & Info */}
                  <h4 className="text-base font-bold text-[#1f1f32] flex items-center justify-between">
                    {item.title}
                    <FiExternalLink className="w-3.5 h-3.5 text-[#8c859d] group-hover:text-[#262ef2]" />
                  </h4>
                  <p className="text-xs font-semibold text-[#6e73fa] mt-0.5">{item.category}</p>
                  <p className="text-xs text-[#4d5564] mt-1.5 leading-relaxed">{item.summary}</p>
                </div>

                {/* Card Bottom Link */}
                <div className="mt-4 pt-2.5 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] font-mono text-[#262ef2] font-semibold">
                  <span>Launch Application</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
