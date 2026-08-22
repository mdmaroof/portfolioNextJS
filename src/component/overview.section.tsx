import React from "react";
import { FiAward, FiSmartphone, FiCpu, FiUsers, FiTrendingUp, FiActivity, FiCheck, FiZap, FiLayers, FiRadio } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-14 md:py-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        {/* High-Craft 4-Card Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: 6+ Years (Production Longevity) */}
          <div className="craft-card p-6 md:p-7 flex flex-col justify-between group hover:border-[#262ef2] bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#262ef2]/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#262ef2]/10 border border-[#262ef2]/20 flex items-center justify-center text-[#262ef2]">
                  <FiAward className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#262ef2] bg-[#262ef2]/10 px-2.5 py-1 rounded-full">
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
              <div className="mt-5 p-3 rounded-xl bg-[#f3f3f9] border border-[#e3e2e5] space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#61667b]">
                  <span>2019</span>
                  <span className="text-[#262ef2] font-bold">2026 (Active)</span>
                </div>
                <div className="w-full h-1.5 bg-[#e3e2e5] rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-[#6e73fa] to-[#262ef2] rounded-full" />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <FiCheck className="w-3.5 h-3.5" /> 100% Ship Rate
              </span>
              <span>Mohd Maroof</span>
            </div>
          </div>

          {/* Card 2: 10+ Apps (Cross-Platform Versatility) */}
          <div className="craft-card p-6 md:p-7 flex flex-col justify-between group hover:border-[#6e73fa] bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6e73fa]/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#6e73fa]/10 border border-[#6e73fa]/20 flex items-center justify-center text-[#6e73fa]">
                  <FiSmartphone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#6e73fa] bg-[#6e73fa]/10 px-2.5 py-1 rounded-full">
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
              <div className="mt-5 p-3 rounded-xl bg-[#f3f3f9] border border-[#e3e2e5] flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#e3e2e5] text-[#201f32] font-semibold">
                  iOS &amp; Android
                </span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#e3e2e5] text-[#201f32] font-semibold">
                  Next.js SSR
                </span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#e3e2e5] text-[#201f32] font-semibold">
                  PWAs
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
              <span className="text-[#6e73fa] font-semibold">Native &amp; Web</span>
              <span>Mohd Maroof</span>
            </div>
          </div>

          {/* Card 3: <100ms (Real-time Telemetry & Latency) */}
          <div className="craft-card p-6 md:p-7 flex flex-col justify-between group hover:border-[#0c9618] bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0c9618]/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#0c9618]/10 border border-[#0c9618]/20 flex items-center justify-center text-[#0c9618]">
                  <FiCpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#0c9618] bg-[#0c9618]/10 px-2.5 py-1 rounded-full">
                  Performance
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <strong className="text-4xl md:text-5xl font-extrabold text-[#1f1f32] tracking-tight font-sans">
                  &lt;100
                </strong>
                <span className="text-xl font-bold text-[#0c9618]">ms</span>
              </div>
              <h3 className="text-sm font-bold text-[#1f1f32] mt-1">Real-time Telemetry</h3>
              <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">
                Deep experience with WebSockets, PubNub RTC/RTM, and Google Maps live fleet tracking.
              </p>

              {/* Mini Visual: Animated live pulse latency graph */}
              <div className="mt-5 p-3 rounded-xl bg-[#f3f3f9] border border-[#e3e2e5] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0c9618] animate-ping" />
                  <span className="text-[10px] font-mono font-semibold text-[#0c9618]">Live Sync</span>
                </div>
                <span className="text-[10px] font-mono text-[#61667b]">WebSockets / RTC</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
              <span className="text-[#0c9618] font-semibold">Sub-100ms Ping</span>
              <span>Mohd Maroof</span>
            </div>
          </div>

          {/* Card 4: 0 to 1 (Founder & Startup Execution) */}
          <div className="craft-card p-6 md:p-7 flex flex-col justify-between group hover:border-[#ca7c0e] bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ca7c0e]/5 rounded-bl-[60px] pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#ca7c0e]/10 border border-[#ca7c0e]/20 flex items-center justify-center text-[#ca7c0e]">
                  <FiUsers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#ca7c0e] bg-[#ca7c0e]/10 px-2.5 py-1 rounded-full">
                  Leadership
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <strong className="text-4xl md:text-5xl font-extrabold text-[#1f1f32] tracking-tight font-sans">
                  0 to 1
                </strong>
                <span className="text-xl font-bold text-[#ca7c0e]">MVPs</span>
              </div>
              <h3 className="text-sm font-bold text-[#1f1f32] mt-1">Founder &amp; Lead Mindset</h3>
              <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">
                Founded Buzztales Technologies; comfortable leading agile teams, managing scope, and shipping fast.
              </p>

              {/* Mini Visual: Founder tag */}
              <div className="mt-5 p-3 rounded-xl bg-[#f3f3f9] border border-[#e3e2e5] flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold text-[#ca7c0e]">Founder @ Buzztales</span>
                <span className="text-[10px] font-mono text-[#61667b]">Fast MVP Sprints</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] font-mono text-[#8c859d]">
              <span className="text-[#ca7c0e] font-semibold">Zero-Overhead</span>
              <span>Mohd Maroof</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
