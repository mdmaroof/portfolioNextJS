import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiExternalLink, FiActivity, FiLayers, FiShield, FiTrendingUp, FiCpu, FiSmartphone } from "react-icons/fi";
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
  visualType: "trackaday" | "ethos" | "vahn" | "graple" | "snapaid" | "56secure" | "twist" | "symzo";
  link: string;
  summary: string;
  tech: string[];
}

const SHIPMENTS: ProjectPreviewCard[] = [
  {
    title: "Trackaday",
    category: "Geospatial Activity & Routes",
    tag: "Side Project",
    metric: "Mapbox GL + Turf.js",
    color: "#0ea5e9",
    visualType: "trackaday",
    link: "https://www.trackaday.buzz/",
    summary: "Interactive geospatial activity tracker with Mapbox GL vector tiles, Turf.js spatial buffers, and live GPS telemetry.",
    tech: ["Mapbox GL", "Turf.js", "Geospatial", "React"],
  },
  {
    title: "Ethos Ascend",
    category: "React Native Mobile App",
    tag: "Active Contract",
    metric: "Sub-100ms Scan Speed",
    color: "#262ef2",
    visualType: "ethos",
    link: "https://github.com/mdmaroof",
    summary: "Sales operations mobile app with custom offline-first camera QR scanning engine.",
    tech: ["React Native", "Camera Vision", "Offline Sync"],
  },
  {
    title: "VAHN Fleet MVP",
    category: "Fleet Logistics & Live Maps",
    tag: "0 to 1 MVP",
    metric: "48+ Live Units Synced",
    color: "#6e73fa",
    visualType: "vahn",
    link: "https://github.com/mdmaroof",
    summary: "Real-time vehicle telemetry pipeline with atomic state management and telemetry maps.",
    tech: ["TypeScript", "Zustand", "Mixpanel"],
  },
  {
    title: "Graple.ai",
    category: "SaaS Experimentation Engine",
    tag: "Live SaaS",
    metric: "+28.4% Conversion Lift",
    color: "#0c9618",
    visualType: "graple",
    link: "https://graple-theta.vercel.app/",
    summary: "Automated A/B funnels, cohort segmentation engine, and real-time retention analytics.",
    tech: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "SnapAid",
    category: "AI Emergency Healthcare",
    tag: "Offline PWA",
    metric: "Zero Latency Triage",
    color: "#ca7c0e",
    visualType: "snapaid",
    link: "https://snapaid.live/",
    summary: "Progressive Web App providing instant step-by-step emergency first-aid protocols.",
    tech: ["React", "Offline PWA", "AI Triage"],
  },
  {
    title: "56 Secure Command",
    category: "Guard & Police Radar Telemetry",
    tag: "High Scale",
    metric: "Live Radar Dispatch",
    color: "#aa26f2",
    visualType: "56secure",
    link: "https://github.com/mdmaroof",
    summary: "Multi-tenant command dashboards with live Google Maps telemetry and alert dispatching.",
    tech: ["Google Maps API", "WebSockets", "Smart Eye"],
  },
  {
    title: "Twist N Words",
    category: "Interactive Word Puzzle Game",
    tag: "Live Game",
    metric: "60 FPS Touch Drag",
    color: "#f25c26",
    visualType: "twist",
    link: "https://twistnwords.vercel.app/",
    summary: "Physics-based word rearrangement puzzle with smooth gesture interactions.",
    tech: ["React", "Physics Gestures", "State Engine"],
  },
  {
    title: "Symzo",
    category: "Focused Product Experience",
    tag: "Live Product",
    metric: "Sub-Second UX",
    color: "#0c5696",
    visualType: "symzo",
    link: "https://www.symzo.in/",
    summary: "Modern frontend architecture delivering high-fidelity responsive product experiences.",
    tech: ["Next.js", "Tailwind CSS", "Design Systems"],
  },
];

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ data }) => {
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

  // Continuous auto-glide ticker animation
  useEffect(() => {
    let animId: number;
    let currentX = posX;
    let lastTime = performance.now();
    const speed = 50; // px per second

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

  const displayItems = [...SHIPMENTS, ...SHIPMENTS];

  // Render Rich Visual HUD UI for each card
  const renderCardVisual = (card: ProjectPreviewCard) => {
    switch (card.visualType) {
      case "trackaday":
        return (
          <div className="h-28 bg-[#09151c] rounded-xl p-3 border border-[#163040] group-hover:border-[#0ea5e9]/60 group-hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Mapbox GL + Turf.js
                </span>
              </div>
              <p className="text-xs font-bold text-white">Geospatial Activity Tracker</p>
              <p className="text-[10px] text-[#78a9c4] font-mono">Turf Spatial Buffer &amp; Routes</p>
            </div>
            {/* Mapbox Route Vector HUD */}
            <div className="w-14 h-14 rounded-lg bg-sky-950/60 border border-sky-500/30 p-2 flex flex-col justify-between relative overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:5px_5px]" />
              <div className="w-full h-0.5 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full mt-2 rotate-[-15deg] shadow-[0_0_6px_#38bdf8]" />
              <div className="flex justify-between items-center text-[8px] font-mono text-sky-300 z-10">
                <span>GPS</span>
                <span className="text-emerald-400">● LIVE</span>
              </div>
            </div>
          </div>
        );

      case "ethos":
        return (
          <div className="h-28 bg-[#11121d] rounded-xl p-3 border border-[#25273d] group-hover:border-[#262ef2]/60 group-hover:shadow-[0_0_20px_-5px_rgba(38,46,242,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  QR Vision Active
                </span>
              </div>
              <p className="text-xs font-bold text-white">Sub-100ms Optical HUD</p>
              <p className="text-[10px] text-[#8e93ba] font-mono">Synced: Offline Cache Ready</p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-[#262ef2]/10 border border-[#262ef2]/40 flex items-center justify-center relative">
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#6e73fa]" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#6e73fa]" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#6e73fa]" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#6e73fa]" />
              <FiSmartphone className="w-5 h-5 text-[#6e73fa]" />
            </div>
          </div>
        );

      case "vahn":
        return (
          <div className="h-28 bg-[#0e111d] rounded-xl p-3 border border-[#20263f] group-hover:border-[#6e73fa]/60 group-hover:shadow-[0_0_20px_-5px_rgba(110,115,250,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Live Telemetry Stream
                </span>
              </div>
              <p className="text-xs font-bold text-white">48+ Fleet Units Connected</p>
              <p className="text-[10px] text-[#7d87b3] font-mono">Ping: 72ms · WebSockets</p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center relative">
              <div className="absolute w-8 h-8 rounded-full border border-cyan-500/20 animate-ping" />
              <FiActivity className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
        );

      case "graple":
        return (
          <div className="h-28 bg-[#0a1610] rounded-xl p-3 border border-[#1b3827] group-hover:border-[#0c9618]/60 group-hover:shadow-[0_0_20px_-5px_rgba(12,150,24,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  A/B Experimentation
                </span>
              </div>
              <p className="text-xs font-bold text-white">Variant B: +28.4% Lift</p>
              <p className="text-[10px] text-[#72a884] font-mono">Cohort Sample: 45,200</p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-emerald-950/50 border border-emerald-500/30 p-2 flex items-end justify-between">
              <div className="w-2.5 h-4 bg-emerald-700/60 rounded-xs" />
              <div className="w-2.5 h-7 bg-emerald-600/80 rounded-xs" />
              <div className="w-2.5 h-10 bg-emerald-400 rounded-xs shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            </div>
          </div>
        );

      case "snapaid":
        return (
          <div className="h-28 bg-[#1f130a] rounded-xl p-3 border border-[#3d2715] group-hover:border-[#ca7c0e]/60 group-hover:shadow-[0_0_20px_-5px_rgba(202,124,14,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Emergency Medical PWA
                </span>
              </div>
              <p className="text-xs font-bold text-white">Offline Protocol V2</p>
              <p className="text-[10px] text-[#c79d79] font-mono">Zero Latency Local Storage</p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center">
              <FiShield className="w-6 h-6 text-amber-400" />
            </div>
          </div>
        );

      case "56secure":
        return (
          <div className="h-28 bg-[#180e22] rounded-xl p-3 border border-[#3b1d52] group-hover:border-[#aa26f2]/60 group-hover:shadow-[0_0_20px_-5px_rgba(170,38,242,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                <span className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                  Guard &amp; Police Dispatch
                </span>
              </div>
              <p className="text-xs font-bold text-white">Smart Eye Alert Radar</p>
              <p className="text-[10px] text-[#bc8edc] font-mono">Google Maps Telemetry</p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-purple-950/50 border border-purple-500/30 flex items-center justify-center">
              <FiCpu className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        );

      case "twist":
        return (
          <div className="h-28 bg-[#20100a] rounded-xl p-3 border border-[#422013] group-hover:border-[#f25c26]/60 group-hover:shadow-[0_0_20px_-5px_rgba(242,92,38,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span className="text-[9px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                  Physics Puzzle Engine
                </span>
              </div>
              <p className="text-xs font-bold text-white">60 FPS Gesture Drag</p>
              <p className="text-[10px] text-[#dca08e] font-mono">Interactive Word Shuffle</p>
            </div>
            <div className="flex gap-1">
              <span className="w-5 h-6 rounded bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">R</span>
              <span className="w-5 h-6 rounded bg-orange-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">E</span>
              <span className="w-5 h-6 rounded bg-orange-700 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">A</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-28 bg-[#0b141f] rounded-xl p-3 border border-[#172d45] group-hover:border-[#0c5696]/60 group-hover:shadow-[0_0_20px_-5px_rgba(12,86,150,0.3)] transition-all duration-300 flex items-center justify-between text-white relative overflow-hidden">
            <div className="space-y-1 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-[9px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                  Product Architecture
                </span>
              </div>
              <p className="text-xs font-bold text-white">Sub-Second Interactions</p>
              <p className="text-[10px] text-[#86a8c7] font-mono">Next.js + Tailwind UI</p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-sky-950/50 border border-sky-500/30 flex items-center justify-center">
              <FiLayers className="w-6 h-6 text-sky-400" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-20 md:pt-28 pb-12 overflow-hidden relative">
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
          onMouseEnter={() => setHoverMult(0.35)}
          onMouseLeave={() => setHoverMult(1)}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none py-3"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 w-max will-change-transform px-6"
          >
            {displayItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[320px] sm:w-[340px] md:w-[355px] h-[335px] shrink-0 bg-white border border-[#e5e5ee] rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_-15px_rgba(32,31,50,0.1)] hover:border-[#262ef2] hover:ring-1 hover:ring-[#262ef2]/30 hover:shadow-[0_16px_40px_-12px_rgba(38,46,242,0.16)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Clean Tag + Metric Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-mono font-bold text-white px-2.5 py-0.5 rounded-full shadow-2xs"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[#262ef2] font-semibold bg-[#262ef2]/5 px-2.5 py-0.5 rounded-md border border-[#262ef2]/10">
                      {item.metric}
                    </span>
                  </div>

                  {/* Custom Graphical HUD Simulation (Glows softly on hover) */}
                  <div className="mb-3.5">
                    {renderCardVisual(item)}
                  </div>

                  {/* Title & Info */}
                  <h4 className="text-sm sm:text-base font-bold text-[#1f1f32] flex items-center justify-between">
                    {item.title}
                    <FiExternalLink className="w-3.5 h-3.5 text-[#8c859d] group-hover:text-[#262ef2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h4>
                  <p className="text-xs font-semibold text-[#6e73fa] mt-0.5">{item.category}</p>
                  <p className="text-xs text-[#4d5564] mt-1 leading-relaxed line-clamp-2">{item.summary}</p>
                </div>

                {/* Card Bottom: Tech Pills + Interactive Pill Launch Button */}
                <div className="pt-2.5 border-t border-[#f0f0f6] flex items-center justify-between text-xs">
                  <div className="flex gap-1">
                    {item.tech.slice(0, 2).map((t, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-mono text-[#61667b] bg-[#f3f3f9] px-1.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#262ef2] bg-[#262ef2]/5 group-hover:bg-[#262ef2] group-hover:text-white px-2.5 py-1 rounded-md border border-[#262ef2]/10 group-hover:border-[#262ef2] transition-all flex items-center gap-1 shadow-2xs">
                    Launch ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
