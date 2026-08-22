import React, { useRef, useEffect, useState } from "react";
import { FiBriefcase, FiCheckCircle, FiMapPin } from "react-icons/fi";

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
    summary: "Building Ascend, a React Native mobile application for sales operations. Developed custom high-speed QR camera scanner with offline-first synchronization.",
    tech: ["React Native", "Custom QR Engine", "Offline Sync", "Sales Ops"],
    metric: "Sub-100ms Scan Speed",
    initials: "ET",
    color: "#262ef2",
    location: "Remote",
    highlightTag: "Active Contract",
  },
  {
    company: "VAHN",
    role: "Senior Frontend Developer",
    period: "Dec 2024 — Jan 2026",
    summary: "Built Fleet App MVP from 0 to 1 and delivered the first production release. Optimized state maintainability with TypeScript, Zustand, and Mixpanel analytics.",
    tech: ["TypeScript", "Zustand", "Mixpanel", "Fleet Maps"],
    metric: "0 to 1 MVP Delivered",
    initials: "VA",
    color: "#6e73fa",
    location: "Hyderabad",
    highlightTag: "Production MVP",
  },
  {
    company: "Mercor",
    role: "Senior Frontend Developer",
    period: "Apr 2024 — Nov 2024",
    summary: "Architected reusable component systems for the Lystface platform and engineered high-performance marketing and responsive dashboard interfaces.",
    tech: ["Next.js", "Design Systems", "Tailwind CSS", "Dashboard UI"],
    metric: "Design Architecture",
    initials: "MC",
    color: "#0c9618",
    location: "Remote",
    highlightTag: "UI Systems",
  },
  {
    company: "Buzztales Technologies",
    role: "Founder & Lead Architect",
    period: "Nov 2023 — Nov 2024",
    summary: "Founded and led digital technology startup. Architected scalable web systems, directed agile sprints, and delivered full product lifecycles.",
    tech: ["System Architecture", "React", "Node.js", "MVP Delivery"],
    metric: "Founder & Architect",
    initials: "BT",
    color: "#f25c26",
    location: "India",
    highlightTag: "Startup Leadership",
  },
  {
    company: "56 Secure",
    role: "Frontend Developer",
    period: "Mar 2021 — Oct 2023",
    summary: "Built Admin, Guard, and Police tracking dashboards from scratch. Integrated Google Maps live telemetry with Smart Eye real-time alert dispatching.",
    tech: ["Google Maps API", "Live Telemetry", "Smart Eye Alerts", "Command UI"],
    metric: "Live Radar Dispatch",
    initials: "56",
    color: "#aa26f2",
    location: "Remote",
    highlightTag: "High Scale",
  },
  {
    company: "Noon Academy",
    role: "Frontend Developer",
    period: "Nov 2019 — Feb 2021",
    summary: "Integrated RTC and RTM live audio/video capabilities via PubNub. Engineered breakout rooms with auto-reconnect logic and component Storybook.",
    tech: ["PubNub RTC/RTM", "Storybook", "Breakout Rooms", "Auto-Reconnect"],
    metric: "RTC & Reliability",
    initials: "NA",
    color: "#ca7c0e",
    location: "Bangalore",
    highlightTag: "EdTech Scale",
  },
  {
    company: "Graple.ai",
    role: "Fullstack SaaS Platform",
    period: "Production SaaS",
    summary: "Engineered a data-driven experimentation platform featuring automated A/B test funnels, cohort segmentation engines, and conversion analytics.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    metric: "+28.4% Variant Lift",
    initials: "GR",
    color: "#0c5696",
    location: "Live SaaS",
    highlightTag: "Active Product",
  },
  {
    company: "SnapAid",
    role: "Emergency Healthcare PWA",
    period: "Production Web App",
    summary: "Emergency medical guidance web application providing instant first-aid triage protocols using AI symptom analysis with offline-first capabilities.",
    tech: ["React", "TypeScript", "Offline PWA", "AI Triage"],
    metric: "Zero Latency Triage",
    initials: "SA",
    color: "#e11d48",
    location: "Live PWA",
    highlightTag: "Healthcare PWA",
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
    const speed = 38; // px per second
    const arc = 3600; // virtual radius for curvature

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

  const displayMilestones = [...MILESTONES, ...MILESTONES];

  return (
    <section className="relative overflow-hidden pt-16 pb-28 md:py-24" id="experience">
      {/* Background Decorative Faded Gears */}
      <div className="absolute top-12 left-6 md:left-20 w-56 h-56 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#201f32" strokeWidth="1.2">
          <circle cx="50" cy="50" r="30" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="18" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" />
        </svg>
      </div>
      <div className="absolute top-12 right-6 md:right-20 w-56 h-56 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#201f32" strokeWidth="1.2">
          <circle cx="50" cy="50" r="30" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="18" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiBriefcase className="text-[#262ef2] mr-1" />
              Career Milestones &amp; Production Track
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Engineering Milestones Across <br />
            <span className="serif-accent blue-accent font-normal">Startups &amp; Production Apps</span>
          </h2>
        </div>

        {/* Central Stage: Large Scaled Device + Clean Seamless Orbit (No Box Background) */}
        <div className="relative min-h-[640px] md:min-h-[690px] flex items-center justify-center">
          {/* Central Large iPhone Device (Back Layer) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="w-[320px] sm:w-[360px] md:w-[390px] h-[620px] md:h-[660px] bg-[#111214] rounded-[48px] p-3 shadow-[0_40px_90px_-20px_rgba(32,31,50,0.35)] relative border border-[#2b2a3a]">
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

              {/* Phone Screen Area */}
              <div className="w-full h-full bg-gradient-to-b from-[#ffffff] via-[#fafbff] to-[#eef0f8] rounded-[38px] overflow-hidden flex flex-col items-center justify-start pt-10 px-5 relative">
                {/* Upper Half: Orbit Rings with Badges */}
                <div className="relative w-full h-[260px] flex items-center justify-center mt-2">
                  <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#c9cbf0]/70" />
                  <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-[#e2e3fa]/60" />

                  {/* Company Badges on the orbit */}
                  <span className="absolute top-2 left-6 w-9 h-9 rounded-xl bg-[#262ef2] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md">
                    ET
                  </span>
                  <span className="absolute top-2 right-6 w-9 h-9 rounded-xl bg-[#6e73fa] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md">
                    VA
                  </span>
                  <span className="absolute bottom-6 left-8 w-8 h-8 rounded-xl bg-[#0c9618] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md">
                    MC
                  </span>
                  <span className="absolute bottom-6 right-8 w-8 h-8 rounded-xl bg-[#aa26f2] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md">
                    56
                  </span>

                  {/* Center Text inside the Orbit: Clean seamless typography without any white card background */}
                  <div className="text-center z-10 px-2 select-none">
                    <span className="text-[11px] font-mono font-bold text-[#6e73fa] uppercase tracking-widest block mb-1">
                      Production Verified
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1f1f32] leading-tight">
                      6+ Years <br />
                      <span className="text-[#262ef2]">Engineering Impact</span>
                    </h3>
                    <p className="text-xs text-[#4d5564] font-mono mt-1 font-semibold">
                      100% On-Time Delivery
                    </p>
                  </div>
                </div>

                {/* Lower screen decorative details */}
                <div className="w-full mt-auto mb-4 p-3 bg-white/60 rounded-xl border border-white flex items-center justify-between text-[11px] font-mono text-[#61667b]">
                  <span>Ascend · Fleet · Graple</span>
                  <span className="text-emerald-600 font-bold">● Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frosted Glassmorphism Carousel Cards Layer (Front Layer - Crossing Lower Half) */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="absolute top-[310px] md:top-[330px] left-0 right-0 w-screen -ml-[calc((100vw-100%)/2)] z-20 overflow-visible cursor-grab active:cursor-grabbing select-none"
          >
            <div
              ref={trackRef}
              className="flex items-end gap-6 w-max will-change-transform"
              style={{ paddingLeft: "4vw", paddingRight: "4vw" }}
            >
              {displayMilestones.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[340px] sm:w-[380px] md:w-[410px] h-[255px] md:h-[265px] shrink-0 bg-white/85 backdrop-blur-xl border border-white/95 rounded-[24px] p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(32,31,50,0.16),inset_0_1px_0_rgba(255,255,255,0.95)] hover:border-[#262ef2] hover:bg-white/95 transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Card Header: Company Badge + Period */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-xl text-white text-xs font-bold flex items-center justify-center shadow-xs"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.initials}
                        </span>
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-[#1f1f32] leading-none">
                            {item.company}
                          </h4>
                          <span className="text-[11px] text-[#6e73fa] font-mono mt-0.5 block font-medium">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <span
                        className="text-[10px] md:text-[11px] font-mono font-bold text-white px-3 py-0.5 rounded-full shrink-0 shadow-xs"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.highlightTag}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h5 className="text-xs md:text-sm font-bold text-[#201f32] mb-1.5 line-clamp-1">
                      {item.role}
                    </h5>

                    {/* Summary */}
                    <p className="text-xs text-[#4d5564] leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  {/* Card Bottom: Frosted Tech Chips & Verified Metric */}
                  <div>
                    {/* Frosted Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {item.tech.slice(0, 3).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono text-[#201f32] bg-white/70 backdrop-blur-sm px-2.5 py-0.5 rounded-lg border border-[#e3e2e5]/80 shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Metric Row */}
                    <div className="pt-2 border-t border-[#e3e2e5]/70 flex items-center justify-between text-xs">
                      <span className="font-mono text-[#262ef2] font-semibold flex items-center gap-1.5">
                        <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        {item.metric}
                      </span>
                      <span className="text-[#8c859d] font-mono text-[11px] flex items-center gap-1">
                        <FiMapPin className="w-3 h-3 text-[#6e73fa]" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
