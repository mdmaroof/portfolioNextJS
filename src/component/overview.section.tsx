import React from "react";
import { FiTrendingUp, FiCpu, FiShield, FiCode, FiAward, FiSmartphone, FiUsers } from "react-icons/fi";

export const OverviewSection: React.FC = () => {
  const metrics = [
    {
      label: "Production Experience",
      value: "6+ Years",
      desc: "Architecting React, Next.js, and React Native codebases from early MVP to enterprise scale.",
      icon: <FiAward className="text-[#262ef2]" />,
      badge: "Longevity",
    },
    {
      label: "Mobile & Web Shipments",
      value: "10+ Apps",
      desc: "Delivered field mobile apps, SaaS experimentation engines, and emergency healthcare tools.",
      icon: <FiSmartphone className="text-[#6e73fa]" />,
      badge: "Versatility",
    },
    {
      label: "Real-time Telemetry",
      value: "<100ms",
      desc: "Deep experience with WebSockets, PubNub RTC/RTM, and Google Maps live fleet tracking.",
      icon: <FiCpu className="text-[#0c9618]" />,
      badge: "Performance",
    },
    {
      label: "Founder & Lead Experience",
      value: "0 to 1",
      desc: "Founded Buzztales Technologies; comfortable leading agile teams, managing scope, and shipping fast.",
      icon: <FiUsers className="text-[#ca7c0e]" />,
      badge: "Leadership",
    },
  ];

  return (
    <section id="overview" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="craft-card p-6 bg-white flex flex-col justify-between hover:border-[#262ef2]/60"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f3f9] border border-[#e3e2e5] flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#61667b] bg-[#f3f3f9] px-2.5 py-0.5 rounded-full border border-[#e3e2e5]">
                    {item.badge}
                  </span>
                </div>
                <strong className="text-3xl font-extrabold text-[#1f1f32] block tracking-tight">
                  {item.value}
                </strong>
                <h4 className="text-sm font-semibold text-[#201f32] mt-1">{item.label}</h4>
                <p className="text-xs text-[#4d5564] mt-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f0f0f6] text-[10px] font-mono text-[#8c859d]">
                Verified Metric · Mohd Maroof
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
