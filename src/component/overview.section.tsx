import React, { useRef } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiAward, FiSmartphone, FiCpu, FiUsers, FiTrendingUp, FiActivity, FiCheck, FiZap, FiLayers, FiRadio } from "react-icons/fi";

export const OverviewSection: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="overview"
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-14 md:py-20 relative overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#262ef2]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiZap className="text-[#262ef2] mr-1" />
              Core Benchmarks
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Engineering Velocity &amp; <br />
            <span className="serif-accent blue-accent font-normal">Proven Production Results</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            Metrics that demonstrate architectural discipline, execution speed, and end-to-end product delivery.
          </p>
        </div>

        {/* 3D Parallax Glass Grid Container */}
        <div className="[perspective:1200px]">
          <m.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch select-none"
          >
            {/* Card 1: 6+ Years (Production Longevity) */}
            <div className="rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 md:p-7 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)] hover:border-[#262ef2] hover:scale-[1.02] transition-all duration-300 transform-gpu relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#262ef2]/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#262ef2]/10 border border-[#262ef2]/20 flex items-center justify-center text-[#262ef2] shadow-2xs">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#262ef2] bg-[#262ef2]/10 px-2.5 py-1 rounded-full border border-[#262ef2]/20">
                    Longevity
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <strong className="text-4xl md:text-5xl font-extrabold text-[#1f1f32] tracking-tight font-sans">
                    6+
                  </strong>
                  <span className="text-xl font-bold text-[#262ef2]">Years</span>
                </div>
                <h3 className="text-sm font-bold text-[#1f1f32] mt-1">Production Experience</h3>
                <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">
                  Architecting React, Next.js, and React Native codebases from early MVP to enterprise scale.
                </p>

                {/* Mini Visual: Timeline Track */}
                <div className="mt-5 p-3 rounded-2xl bg-[#f4f4fa] border border-[#e3e2e8] space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#61667b]">
                    <span>2019</span>
                    <span className="text-[#262ef2] font-bold">2026 (Active)</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#e3e2e5] rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-[#6e73fa] to-[#262ef2] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#ececf4] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <FiCheck className="w-3.5 h-3.5" /> 100% Ship Rate
                </span>
                <span>Mohd Maroof</span>
              </div>
            </div>

            {/* Card 2: 10+ Apps (Cross-Platform Versatility) */}
            <div className="rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 md:p-7 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)] hover:border-[#6e73fa] hover:scale-[1.02] transition-all duration-300 transform-gpu relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6e73fa]/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#6e73fa]/10 border border-[#6e73fa]/20 flex items-center justify-center text-[#6e73fa] shadow-2xs">
                    <FiSmartphone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#6e73fa] bg-[#6e73fa]/10 px-2.5 py-1 rounded-full border border-[#6e73fa]/20">
                    Versatility
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <strong className="text-4xl md:text-5xl font-extrabold text-[#1f1f32] tracking-tight font-sans">
                    10+
                  </strong>
                  <span className="text-xl font-bold text-[#6e73fa]">Apps</span>
                </div>
                <h3 className="text-sm font-bold text-[#1f1f32] mt-1">Mobile &amp; Web Shipments</h3>
                <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">
                  Delivered field mobile apps, SaaS experimentation engines, and emergency healthcare tools.
                </p>

                {/* Mini Visual: Multi-platform tags */}
                <div className="mt-5 p-3 rounded-2xl bg-[#f4f4fa] border border-[#e3e2e8] flex flex-wrap gap-1.5 shadow-2xs">
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-md border border-[#e3e2e5] text-[#201f32] font-semibold">
                    iOS &amp; Android
                  </span>
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-md border border-[#e3e2e5] text-[#201f32] font-semibold">
                    Next.js SSR
                  </span>
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-md border border-[#e3e2e5] text-[#201f32] font-semibold">
                    PWAs
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#ececf4] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
                <span className="text-[#6e73fa] font-semibold">Native &amp; Web</span>
                <span>Mohd Maroof</span>
              </div>
            </div>

            {/* Card 3: <100ms (Real-time Telemetry & Latency) */}
            <div className="rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 md:p-7 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)] hover:border-emerald-500 hover:scale-[1.02] transition-all duration-300 transform-gpu relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs">
                    <FiCpu className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Performance
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <strong className="text-4xl md:text-5xl font-extrabold text-[#1f1f32] tracking-tight font-sans">
                    &lt;100
                  </strong>
                  <span className="text-xl font-bold text-emerald-600">ms</span>
                </div>
                <h3 className="text-sm font-bold text-[#1f1f32] mt-1">Real-time Telemetry</h3>
                <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">
                  Deep experience with WebSockets, PubNub RTC/RTM, and Google Maps live fleet tracking.
                </p>

                {/* Mini Visual: Animated live pulse latency graph */}
                <div className="mt-5 p-3 rounded-2xl bg-[#f4f4fa] border border-[#e3e2e8] flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono font-semibold text-emerald-700">Live Sync</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#61667b]">WebSockets / RTC</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#ececf4] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
                <span className="text-emerald-600 font-semibold">Sub-100ms Ping</span>
                <span>Mohd Maroof</span>
              </div>
            </div>

            {/* Card 4: 0 to 1 (Founder & Startup Execution) */}
            <div className="rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 md:p-7 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)] hover:border-amber-500 hover:scale-[1.02] transition-all duration-300 transform-gpu relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-2xs">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Leadership
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <strong className="text-4xl md:text-5xl font-extrabold text-[#1f1f32] tracking-tight font-sans">
                    0 to 1
                  </strong>
                  <span className="text-xl font-bold text-amber-600">MVPs</span>
                </div>
                <h3 className="text-sm font-bold text-[#1f1f32] mt-1">Founder &amp; Lead Mindset</h3>
                <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">
                  Founded Buzztales Technologies; comfortable leading agile teams, managing scope, and shipping fast.
                </p>

                {/* Mini Visual: Founder tag */}
                <div className="mt-5 p-3 rounded-2xl bg-[#f4f4fa] border border-[#e3e2e8] flex items-center justify-between shadow-2xs">
                  <span className="text-[10px] font-mono font-semibold text-amber-700">Founder @ Buzztales</span>
                  <span className="text-[10px] font-mono text-[#61667b]">Fast MVP Sprints</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#ececf4] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
                <span className="text-amber-700 font-semibold">Zero-Overhead</span>
                <span>Mohd Maroof</span>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};
