import React, { useRef, useEffect, useState } from "react";
import { m } from "framer-motion";
import { FiBriefcase, FiCheckCircle, FiMapPin, FiWifi } from "react-icons/fi";
import { IoIosBatteryFull } from "react-icons/io";
import { BsReception4 } from "react-icons/bs";

interface CareerMilestone {
  company: string;
  role: string;
  period: string;
  summary: string;
  tech: string[];
  metric: string;
  initials: string;
  color: string;
  location: string;
  highlightTag: string;
}

const MILESTONES: CareerMilestone[] = [
  {
    company: "Ethos",
    role: "Senior Frontend Developer (Contract)",
    period: "Feb 2026 — Present",
    summary: "Building Ascend, a React Native mobile application for sales operations. Developed custom high-speed QR camera scanner with offline sync.",
    tech: ["React Native", "Custom QR", "Offline Sync"],
    metric: "Sub-100ms Scan",
    initials: "ET",
    color: "#262ef2",
    location: "Remote",
    highlightTag: "Active Contract",
  },
  {
    company: "VAHN",
    role: "Senior Frontend Developer",
    period: "Dec 2024 — Jan 2026",
    summary: "Built Fleet App MVP from 0 to 1. Optimized state maintainability and telemetry with TypeScript, Zustand, and Mixpanel analytics.",
    tech: ["TypeScript", "Zustand", "Mixpanel"],
    metric: "0 to 1 MVP",
    initials: "VA",
    color: "#6e73fa",
    location: "Hyderabad",
    highlightTag: "Production MVP",
  },
  {
    company: "Buzztales Technologies",
    role: "Founder & Lead Architect",
    period: "Nov 2023 — Nov 2024",
    summary: "Founded and led digital technology startup. Architected scalable web architectures, led sprints, and managed full product delivery.",
    tech: ["System Architecture", "React", "Node.js"],
    metric: "Founder & Lead",
    initials: "BT",
    color: "#f25c26",
    location: "India",
    highlightTag: "Leadership",
  },
  {
    company: "56 Secure",
    role: "Frontend Developer",
    period: "Mar 2021 — Oct 2023",
    summary: "Built Admin, Guard, and Police tracking dashboards from scratch with live Google Maps telemetry and Smart Eye alert dispatching.",
    tech: ["Google Maps API", "Telemetry", "Smart Eye"],
    metric: "Live Radar",
    initials: "56",
    color: "#aa26f2",
    location: "Remote",
    highlightTag: "High Scale",
  },
  {
    company: "Noon Academy",
    role: "Frontend Developer",
    period: "Nov 2019 — Feb 2021",
    summary: "Integrated RTC/RTM live capabilities via PubNub. Engineered breakout rooms with auto-reconnect logic and component Storybook.",
    tech: ["PubNub RTC", "Storybook", "Auto-Reconnect"],
    metric: "RTC & Reliability",
    initials: "NA",
    color: "#ca7c0e",
    location: "Bangalore",
    highlightTag: "EdTech",
  },
  {
    company: "Graple.ai",
    role: "Fullstack SaaS Platform",
    period: "Production SaaS",
    summary: "Engineered a data-driven experimentation platform with automated A/B test funnels, cohort segmentation, and retention graphs.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    metric: "+28.4% Lift",
    initials: "GR",
    color: "#0c5696",
    location: "Live SaaS",
    highlightTag: "Active SaaS",
  },
  {
    company: "SnapAid",
    role: "Emergency Healthcare PWA",
    period: "Production Web App",
    summary: "Emergency medical guidance web application providing instant first-aid triage protocols using AI with offline-first capabilities.",
    tech: ["React", "TypeScript", "Offline PWA"],
    metric: "Instant Triage",
    initials: "SA",
    color: "#e11d48",
    location: "Live PWA",
    highlightTag: "PWA",
  },
];

export const CurvedCarouselSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [posX, setPosX] = useState(0);

  // Auto-scroll loop + Arc calculation
  useEffect(() => {
    let animId: number;
    let currentX = posX;
    let lastTime = performance.now();
    const speed = 40;
    const arc = 3000;

    const frame = (now: number) => {
      const dt = Math.min(64, now - lastTime) / 1000;
      lastTime = now;

      if (!isDragging && trackRef.current) {
        currentX -= speed * dt;
        const totalW = trackRef.current.scrollWidth / 2;
        if (totalW > 0) {
          while (currentX <= -totalW) currentX += totalW;
          while (currentX > 0) currentX -= totalW;
        }
        trackRef.current.style.transform = `translateX(${currentX}px)`;
      }

      // Apply arc curve to each card
      if (trackRef.current) {
        const mid = window.innerWidth / 2;
        const cards = trackRef.current.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const rect = card.getBoundingClientRect();
          const dx = rect.left + rect.width / 2 - mid;
          const lift = -(dx * dx) / (2 * arc);
          const rot = -(dx / arc);
          card.style.transform = `translateY(${lift.toFixed(2)}px) rotate(${rot.toFixed(4)}rad)`;
        }
      }

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, posX]);

  // Pointer drag controls
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (trackRef.current) {
      const transform = window.getComputedStyle(trackRef.current).transform;
      if (transform && transform !== "none") {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
          const values = matrix[1].split(", ");
          setPosX(parseFloat(values[4]));
        }
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - startX;
    setPosX((prev) => prev + dx);
    setStartX(e.clientX);
    trackRef.current.style.transform = `translateX(${posX}px)`;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const displayMilestones = [...MILESTONES, ...MILESTONES];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-20" id="milestones">
      {/* Background Animated Solar Sun / Gear Watermark (Left) */}
      <m.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-8 left-6 md:left-20 w-44 h-44 opacity-15 pointer-events-none select-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="#201f32" strokeWidth="1.2">
          <circle cx="50" cy="50" r="30" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="18" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" />
        </svg>
      </m.div>

      {/* Background Animated Solar Sun / Gear Watermark (Right) */}
      <m.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-8 right-6 md:right-20 w-44 h-44 opacity-15 pointer-events-none select-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="#201f32" strokeWidth="1.2">
          <circle cx="50" cy="50" r="30" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="18" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" />
        </svg>
      </m.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <div className="inline-block mb-2.5">
            <span className="tag">
              <FiBriefcase className="text-[#262ef2] mr-1" />
              Career Milestones &amp; Production Track
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1f1f32]">
            Engineering Milestones Across <br />
            <span className="serif-accent blue-accent font-normal">Startups &amp; Production Apps</span>
          </h2>
        </div>

        {/* Central Stage: Elegant Tall Mobile Phone & Scaled Milestone Cards */}
        <div className="relative min-h-[540px] md:min-h-[580px] flex items-center justify-center">
          
          {/* Central Scaled iPhone Mockup */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="relative">
              {/* iPhone Outer Chassis */}
              <div className="w-[245px] sm:w-[265px] md:w-[280px] h-[525px] md:h-[560px] bg-[#121316] rounded-[42px] md:rounded-[46px] p-[8px] shadow-[0_35px_80px_-15px_rgba(20,20,35,0.35),0_0_0_1.5px_#333242,inset_0_0_0_1.5px_#09090c] relative">
                
                {/* Phone Inner Display Bezel */}
                <div className="w-full h-full bg-gradient-to-b from-[#ffffff] via-[#fafbff] to-[#eef0f8] rounded-[34px] md:rounded-[38px] overflow-hidden flex flex-col justify-start relative border border-[#d2d2df]/60 shadow-inner">
                  
                  {/* Top iOS Status Bar Container */}
                  <div className="relative w-full pt-3 px-5 flex items-center justify-between z-30 select-none text-[11px] font-semibold text-[#1f1f32]">
                    <span className="w-10 text-left font-sans">9:41</span>

                    {/* Mathematically Dead-Centered Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[72px] h-[19px] bg-black rounded-full flex items-center justify-end px-2 gap-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#141522] border-[0.5px] border-[#313248] flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#0a0b12]" />
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#062416]" />
                    </div>

                    {/* Status Icons */}
                    <div className="w-12 flex items-center justify-end gap-1 text-xs text-[#1f1f32]">
                      <BsReception4 className="w-3 h-3" />
                      <FiWifi className="w-3 h-3" />
                      <IoIosBatteryFull className="w-4 h-4 text-[#1f1f32]" />
                    </div>
                  </div>

                  {/* Top Visible Orbit Area: Animated Rotating Orbit */}
                  <div className="relative w-full h-[200px] flex items-center justify-center mt-4 sm:mt-5">
                    <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[#c9cbf0]/70" />
                    <div className="absolute w-48 h-48 sm:w-52 sm:h-52 rounded-full border border-[#e2e3fa]/60" />

                    {/* Orbiting Rotating Container with Company Badges */}
                    <m.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <span className="absolute top-1 left-5 w-6 h-6 rounded-lg bg-[#262ef2] text-white text-[9px] font-bold flex items-center justify-center border border-white shadow-xs">
                        ET
                      </span>
                      <span className="absolute top-1 right-5 w-6 h-6 rounded-lg bg-[#6e73fa] text-white text-[9px] font-bold flex items-center justify-center border border-white shadow-xs">
                        VA
                      </span>
                      <span className="absolute bottom-3 left-6 w-6 h-6 rounded-lg bg-[#f25c26] text-white text-[9px] font-bold flex items-center justify-center border border-white shadow-xs">
                        BT
                      </span>
                      <span className="absolute bottom-3 right-6 w-6 h-6 rounded-lg bg-[#aa26f2] text-white text-[9px] font-bold flex items-center justify-center border border-white shadow-xs">
                        56
                      </span>
                    </m.div>

                    {/* Center Text inside the Orbit */}
                    <div className="text-center z-10 px-2 select-none">
                      <span className="text-[9px] font-mono font-bold text-[#6e73fa] uppercase tracking-widest block mb-0.5">
                        Production Verified
                      </span>
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#1f1f32] leading-tight">
                        6+ Years <br />
                        <span className="text-[#262ef2]">Engineering Impact</span>
                      </h3>
                      <p className="text-[9px] text-[#4d5564] font-mono mt-0.5 font-semibold">
                        100% On-Time Delivery
                      </p>
                    </div>
                  </div>

                  {/* Lower screen: iOS Bottom Home Bar */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-24 h-0.5 bg-[#1f1f32]/25 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scaled Frosted Glassmorphism Carousel Cards Layer */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="absolute top-[255px] md:top-[275px] left-0 right-0 w-screen -ml-[calc((100vw-100%)/2)] z-20 overflow-visible cursor-grab active:cursor-grabbing select-none"
          >
            <div
              ref={trackRef}
              className="flex items-end gap-4 sm:gap-5 w-max will-change-transform"
              style={{ paddingLeft: "4vw", paddingRight: "4vw" }}
            >
              {displayMilestones.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[270px] sm:w-[295px] md:w-[320px] h-[200px] md:h-[210px] shrink-0"
                >
                  {/* Individual Rainfall Card (Rains down rapidly one-by-one on section enter) */}
                  <m.div
                    initial={{
                      opacity: 0,
                      y: -300,
                      rotate: idx % 2 === 0 ? -3 : 3,
                      scale: 0.94,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      type: "spring",
                      stiffness: 340,
                      damping: 22,
                      mass: 0.7,
                      delay: (idx % MILESTONES.length) * 0.05,
                    }}
                    className="w-full h-full bg-white/85 backdrop-blur-xl border border-white/95 rounded-[18px] md:rounded-[20px] p-3.5 md:p-4 shadow-[0_15px_35px_-12px_rgba(32,31,50,0.14),inset_0_1px_0_rgba(255,255,255,0.95)] hover:border-[#262ef2] hover:bg-white/95 transition-all duration-200 flex flex-col justify-between"
                  >
                    {/* Card Header: Company Badge + Period */}
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-6 h-6 rounded-md text-white text-[10px] font-bold flex items-center justify-center shadow-2xs"
                            style={{ backgroundColor: item.color }}
                          >
                            {item.initials}
                          </span>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-[#1f1f32] leading-none">
                              {item.company}
                            </h4>
                            <span className="text-[9px] text-[#6e73fa] font-mono mt-0.5 block font-medium">
                              {item.period}
                            </span>
                          </div>
                        </div>

                        <span
                          className="text-[9px] font-mono font-bold text-white px-2 py-0.5 rounded-full shrink-0 shadow-2xs"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.highlightTag}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h5 className="text-[11px] sm:text-xs font-bold text-[#201f32] mb-1 line-clamp-1">
                        {item.role}
                      </h5>

                      {/* Summary */}
                      <p className="text-[10px] sm:text-[11px] text-[#4d5564] leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>
                    </div>

                    {/* Card Bottom: Frosted Tech Chips & Verified Metric */}
                    <div>
                      {/* Frosted Tech Chips */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tech.slice(0, 3).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono text-[#201f32] bg-white/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-[#e3e2e5]/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Metric Row */}
                      <div className="pt-1.5 border-t border-[#e3e2e5]/70 flex items-center justify-between text-[10px]">
                        <span className="font-mono text-[#262ef2] font-semibold flex items-center gap-1">
                          <FiCheckCircle className="w-3 h-3 text-emerald-500" />
                          {item.metric}
                        </span>
                        <span className="text-[#8c859d] font-mono text-[9px] flex items-center gap-0.5">
                          <FiMapPin className="w-2.5 h-2.5 text-[#6e73fa]" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </m.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
