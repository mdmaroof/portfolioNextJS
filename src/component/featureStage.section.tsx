import React, { useState } from "react";
import { FiLayers, FiCheckCircle, FiCpu, FiTrendingUp, FiSmartphone, FiShield } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";

interface FeatureStageProps {
  name?: string;
}

const ARCHITECTURES = [
  {
    id: "ascend",
    title: "Ascend (Ethos)",
    category: "React Native Mobile App",
    beforeHead: "Slow Field Audits",
    beforeText: "Manual barcode entry, erratic connectivity drops, and clunky sales workflows in the field.",
    afterHead: "Instant Camera QR Engine",
    afterText: "Custom camera scanner, offline local storage cache, and 100% fluid field operations.",
    stats: "Sub-100ms scan speed",
    badge: "Mobile Native",
    screenUI: {
      header: "Sales Operations",
      status: "Online & Synced",
      metrics: [
        { label: "Daily Scans", val: "1,240", change: "+34%" },
        { label: "Field Sync", val: "0.08s", change: "Instant" },
      ],
      action: "Scan QR Code",
    },
  },
  {
    id: "fleet",
    title: "Fleet MVP (VAHN)",
    category: "Real-time Vehicle Tracking",
    beforeHead: "Scattered Vehicle Telemetry",
    beforeText: "Delayed WebSocket alerts, high battery consumption, and complex state synchronization.",
    afterHead: "Lightweight Zustand + Map Engine",
    afterText: "Synchronized live fleet state, Mixpanel analytics pipeline, and rock-solid reliability.",
    stats: "0 to 1 MVP Delivered",
    badge: "Fleet Logistics",
    screenUI: {
      header: "Fleet Command",
      status: "48 Active Units",
      metrics: [
        { label: "Active Drivers", val: "42", change: "98% on-time" },
        { label: "Telemetry Latency", val: "120ms", change: "Low Ping" },
      ],
      action: "View Route Map",
    },
  },
  {
    id: "graple",
    title: "Graple.ai Experimentation",
    category: "Fullstack Analytics Platform",
    beforeHead: "Manual Cohort Testing",
    beforeText: "Engineers having to hardcode variant logic, causing release delays and unverified conversion data.",
    afterHead: "Automated A/B Funnels",
    afterText: "Drag-and-drop campaign builder with real-time conversion metric visualization and instant rollouts.",
    stats: "Live Production SaaS",
    badge: "Web Platform",
    screenUI: {
      header: "Experiment Funnel",
      status: "Variant B Winning",
      metrics: [
        { label: "Conversion Lift", val: "+28.4%", change: "Significant" },
        { label: "Sample Size", val: "45.2K", change: "99% Conf." },
      ],
      action: "Deploy 100% Traffic",
    },
  },
];

export const FeatureStageSection: React.FC<FeatureStageProps> = () => {
  const [activeArch, setActiveArch] = useState(ARCHITECTURES[0]);

  return (
    <section id="architecture" className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiLayers className="text-[#262ef2] mr-1" />
              Architecture Showcase
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Engineering Quality <br />
            <span className="serif-accent blue-accent font-normal">Down to the Micro-Interactions</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            See how Maroof transforms slow, messy bottlenecks into clean, high-performance interfaces and scalable code.
          </p>

          {/* Architecture Switcher Pills */}
          <div className="mt-6 inline-flex p-1 bg-[#e6e6f2] rounded-full border border-[#dcdae8]">
            {ARCHITECTURES.map((arch) => (
              <button
                key={arch.id}
                onClick={() => setActiveArch(arch)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  activeArch.id === arch.id
                    ? "bg-[#201f32] text-white shadow-sm font-semibold"
                    : "text-[#4d5564] hover:text-[#201f32]"
                }`}
              >
                {arch.title}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Stage (Left Float Card - Center Phone - Right Float Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          {/* Left Float Card: Before State */}
          <div className="lg:col-span-4 order-2 lg:order-1 craft-card p-6 md:p-7 border-l-4 border-l-amber-500/80 bg-white">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-600 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              The Bottleneck
            </div>
            <h4 className="text-xl font-bold text-[#1f1f32]">{activeArch.beforeHead}</h4>
            <p className="mt-2 text-sm text-[#4d5564] leading-relaxed">{activeArch.beforeText}</p>
            <div className="mt-4 pt-3 border-t border-[#e3e2e5] text-xs text-[#8c859d]">
              Impact: Engineering overhead & slow user task completion
            </div>
          </div>

          {/* Center Column: iPhone Mockup */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="phone-mockup-wrap">
              <div className="dynamic-island" />
              <div className="phone-screen-area p-5 flex flex-col justify-between bg-gradient-to-b from-[#f8f9fe] via-white to-[#f0f3fa]">
                {/* Screen Header */}
                <div className="pt-7 pb-3 border-b border-[#e3e2e5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#262ef2] uppercase font-bold">
                      {activeArch.badge}
                    </span>
                    <h5 className="text-sm font-bold text-[#201f32]">{activeArch.screenUI.header}</h5>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-[#262ef2] px-2 py-0.5 rounded-full border border-blue-100 font-semibold">
                    {activeArch.screenUI.status}
                  </span>
                </div>

                {/* Simulated UI Cards */}
                <div className="my-auto space-y-3 py-2">
                  <div className="grid grid-cols-2 gap-2">
                    {activeArch.screenUI.metrics.map((m, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-[#e3e2e5] shadow-2xs">
                        <span className="text-[10px] text-[#8c859d] block">{m.label}</span>
                        <strong className="text-base font-extrabold text-[#201f32]">{m.val}</strong>
                        <span className="text-[9px] text-emerald-600 font-semibold block mt-0.5">{m.change}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#262ef2]/5 p-3.5 rounded-xl border border-[#262ef2]/20">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#262ef2]">
                      <FiCpu className="w-4 h-4" />
                      <span>{activeArch.stats}</span>
                    </div>
                    <p className="text-[11px] text-[#4d5564] mt-1">
                      TypeScript strict mode + Zustand atomic selectors ensure maximum runtime speed.
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  type="button"
                  className="w-full py-2.5 bg-[#262ef2] text-white rounded-xl text-xs font-semibold shadow-md shadow-[#262ef2]/20"
                >
                  {activeArch.screenUI.action}
                </button>
              </div>
            </div>
          </div>

          {/* Right Float Card: After / Solution */}
          <div className="lg:col-span-4 order-3 craft-card p-6 md:p-7 border-l-4 border-l-[#262ef2] bg-white">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#262ef2] font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#262ef2]" />
              The Architecture Delivered
            </div>
            <h4 className="text-xl font-bold text-[#1f1f32]">{activeArch.afterHead}</h4>
            <p className="mt-2 text-sm text-[#4d5564] leading-relaxed">{activeArch.afterText}</p>
            <div className="mt-4 pt-3 border-t border-[#e3e2e5] flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <FiCheckCircle className="w-4 h-4" /> Production Ready & Scaled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
