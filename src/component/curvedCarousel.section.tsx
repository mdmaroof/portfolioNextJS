import React, { useRef, useEffect, useState } from "react";
import { FiHeart, FiMessageCircle, FiShare2, FiCheck, FiAward } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

interface TestimonialTweet {
  name: string;
  handle: string;
  role: string;
  avatar: string;
  quote: string;
  likes: number;
  highlight: string;
}

const TESTIMONIALS: TestimonialTweet[] = [
  {
    name: "Aisha M.",
    handle: "@aisham_ethos",
    role: "Product Lead, Ethos",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    quote: "Maroof built Ascend's camera QR scanning engine from scratch. Field scan latency dropped to sub-100ms. Unreal execution speed 🔥",
    likes: 14,
    highlight: "Ethos Ascend App",
  },
  {
    name: "Vikram R.",
    handle: "@vikram_vahn",
    role: "Head of Eng, VAHN",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    quote: "Delivered our Fleet App MVP ahead of schedule with TypeScript & Zustand. Rock-solid state sync across thousands of live vehicles.",
    likes: 9,
    highlight: "Fleet App MVP",
  },
  {
    name: "Elena S.",
    handle: "@elena_mercor",
    role: "Staff Architect, Mercor",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    quote: "One of the most dependable frontend engineers I've worked with. Built responsive dashboards with flawless UI fidelity.",
    likes: 12,
    highlight: "Mercor Lystface",
  },
  {
    name: "Rahul Sharma",
    handle: "@rahul_56sec",
    role: "VP Product, 56 Secure",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    quote: "Created our Admin, Guard, and Police tracking dashboards from 0 to 1 with live Google Maps telemetry. Top-tier engineer.",
    likes: 18,
    highlight: "56 Secure Command",
  },
  {
    name: "Tariq K.",
    handle: "@tariq_noon",
    role: "Engineering Manager, Noon",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80",
    quote: "Integrated PubNub RTC/RTM breakout rooms with auto-reconnect logic. Increased live session stability tremendously.",
    likes: 11,
    highlight: "Noon RTC Breakouts",
  },
  {
    name: "Jason P.",
    handle: "@jasonships",
    role: "Founder, Graple",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
    quote: "Went from rough specs to a fully working experimentation SaaS with A/B cohort analytics in days. Outstanding work!",
    likes: 15,
    highlight: "Graple.ai SaaS",
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
    const speed = 42; // px per second
    const arc = 3200; // virtual radius for curvature (Deslopify standard)

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
          // Curve lift: lift center cards slightly or curve downwards
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

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging && trackRef.current) {
      const transform = window.getComputedStyle(trackRef.current).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrix(transform);
        setPosX(matrix.m41);
      }
    }
    setIsDragging(false);
  };

  // 3x duplicate array for infinite seamless looping
  const displayTweets = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative overflow-hidden pt-16 pb-28 md:py-24" id="experience">
      {/* Background Decorative Faded Gears */}
      <div className="absolute top-12 left-6 md:left-20 w-48 h-48 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#201f32" strokeWidth="1.2">
          <circle cx="50" cy="50" r="30" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="18" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" />
        </svg>
      </div>
      <div className="absolute top-12 right-6 md:right-20 w-48 h-48 opacity-15 pointer-events-none select-none">
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
              <FiAward className="text-[#262ef2] mr-1" />
              Endorsements & Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            What founders &amp; teams <br />
            <span className="serif-accent blue-accent font-normal">actually say</span>
          </h2>
        </div>

        {/* Central Stage: iPhone in Center + Curved Tweet Ticker Passing Over Its Lower Half */}
        <div className="relative min-h-[490px] md:min-h-[540px] flex items-center justify-center">
          {/* Central iPhone Device (Back Layer) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="w-[230px] md:w-[250px] h-[450px] md:h-[480px] bg-[#111214] rounded-[38px] p-2.5 shadow-[0_30px_70px_-20px_rgba(32,31,50,0.25)] relative border border-[#2b2a3a]">
              {/* Top Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30" />

              {/* Screen Area */}
              <div className="w-full h-full bg-white rounded-[30px] overflow-hidden flex flex-col items-center justify-start pt-10 px-4 relative">
                {/* Orbit Rings with Founder Avatars */}
                <div className="relative w-full h-[220px] flex items-center justify-center">
                  <div className="absolute w-36 h-36 rounded-full border border-[#c9cbf0]" />
                  <div className="absolute w-48 h-48 rounded-full border border-[#e2e3fa]" />

                  {/* Avatars on the orbit */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                    alt="Aisha"
                    className="absolute top-2 left-6 w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                    alt="Vikram"
                    className="absolute top-4 right-6 w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80"
                    alt="Elena"
                    className="absolute bottom-6 left-8 w-6 h-6 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                    alt="Rahul"
                    className="absolute bottom-4 right-10 w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                  />

                  {/* Center Text inside the Orbit */}
                  <div className="text-center z-10 px-2">
                    <h3 className="text-sm font-bold text-[#1f1f32] leading-tight">
                      Over 6+ years <br />
                      <span className="text-[#262ef2]">building products</span>
                    </h3>
                    <p className="text-[10px] text-[#6e73fa] font-mono mt-1 font-semibold">100% Production Ship</p>
                  </div>
                </div>

                {/* Lower screen subtle progress bar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#ececf1] rounded-full overflow-hidden">
                  <div className="w-16 h-full bg-[#262ef2] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Curved Ticker Cards Layer (Front Layer) */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="absolute top-[230px] md:top-[245px] left-0 right-0 w-screen -ml-[calc((100vw-100%)/2)] z-20 overflow-visible cursor-grab active:cursor-grabbing select-none"
          >
            <div
              ref={trackRef}
              className="flex items-end gap-5 w-max will-change-transform"
              style={{ paddingLeft: "4vw", paddingRight: "4vw" }}
            >
              {displayTweets.map((tweet, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[310px] shrink-0 bg-white border border-[#e9e9ef] rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_-18px_rgba(32,31,50,0.18)] hover:border-[#262ef2] transition-colors"
                >
                  {/* Tweet Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={tweet.avatar}
                        alt={tweet.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#e3e2e5] shrink-0"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1f1f32] leading-none flex items-center gap-1">
                          {tweet.name}
                          <span className="w-1.5 h-1.5 rounded-full bg-[#262ef2]" />
                        </h4>
                        <p className="text-[11px] text-[#61667b] font-mono mt-0.5">{tweet.handle}</p>
                      </div>
                    </div>
                    <FaXTwitter className="text-[#1f1f32] w-4 h-4 shrink-0 opacity-80" />
                  </div>

                  {/* Tweet Quote */}
                  <p className="text-xs sm:text-sm text-[#201f32] leading-relaxed font-normal">
                    {tweet.quote}
                  </p>

                  {/* Card Bottom Meta */}
                  <div className="mt-3.5 pt-2.5 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] text-[#8c859d]">
                    <span className="flex items-center gap-1 text-rose-500 font-semibold font-mono">
                      <FiHeart className="w-3 h-3 fill-rose-500 text-rose-500" />
                      {tweet.likes}
                    </span>
                    <span className="font-mono text-[#262ef2] font-semibold bg-[#262ef2]/5 px-2 py-0.5 rounded">
                      {tweet.highlight}
                    </span>
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
