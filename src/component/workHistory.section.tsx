import React from "react";
import { m } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheck, FiExternalLink, FiAward } from "react-icons/fi";

interface WorkItem {
  organisation: string;
  role: string;
  from: string;
  to: string;
  location: string;
  labels: string[];
}

interface WorkHistoryProps {
  work: WorkItem[];
}

interface WorkMeta {
  color: string;
  initials: string;
  focus: string;
  tech: string[];
  highlight: string;
  url?: string;
}

const WORK_METADATA: Record<string, WorkMeta> = {
  "Ethos": {
    color: "#262ef2",
    initials: "ET",
    focus: "Mobile & Sales Ops",
    tech: ["React Native", "Camera Vision", "Offline Sync", "TypeScript"],
    highlight: "Active Contract",
    url: "https://www.ethoswatches.com/",
  },
  "VAHN": {
    color: "#6e73fa",
    initials: "VA",
    focus: "Fleet Logistics & Maps",
    tech: ["TypeScript", "Zustand", "Mixpanel", "Fleet Maps"],
    highlight: "0 to 1 MVP Delivered",
    url: "https://vahn.in/",
  },
  "Buzztales Technologies Pvt. Ltd.": {
    color: "#f25c26",
    initials: "BT",
    focus: "Startup Leadership",
    tech: ["System Architecture", "React", "Node.js", "Full Lifecycle"],
    highlight: "Founder & Lead Architect",
  },
  "56 Secure": {
    color: "#aa26f2",
    initials: "56",
    focus: "Live Radar & Security",
    tech: ["Google Maps API", "WebSockets", "Smart Eye Alerts", "Command UI"],
    highlight: "Multi-Tenant Dispatch",
    url: "https://56secure.com/",
  },
  "Noon Academy": {
    color: "#ca7c0e",
    initials: "NA",
    focus: "EdTech RTC & Reliability",
    tech: ["PubNub RTC/RTM", "Storybook", "Breakout Rooms", "Auto-Reconnect"],
    highlight: "RTC Audio/Video Scale",
    url: "https://www.noonacademy.com/",
  },
};

export const WorkHistory: React.FC<WorkHistoryProps> = ({ work }) => {
  const currentRole = work[0];
  const previousRoles = work.slice(1);

  const currentMeta = currentRole
    ? WORK_METADATA[currentRole.organisation] || {
        color: "#262ef2",
        initials: "ET",
        focus: "Mobile Engineering",
        tech: ["React Native", "TypeScript"],
        highlight: "Production Verified",
      }
    : null;

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="tag">
              <FiBriefcase className="text-[#262ef2] mr-1" />
              Verified Career History
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Detailed Roles &amp; <br />
            <span className="serif-accent blue-accent font-normal">Production Contributions</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            Deep-dive breakdown of direct responsibilities, technical architectures, and delivered business impact.
          </p>
        </m.div>

        {/* Featured Landmark Card: Current Active Contract (Full Width) */}
        {currentRole && currentMeta && (
          <m.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 group rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 md:p-8 hover:border-[#262ef2] shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_25px_70px_-15px_rgba(38,46,242,0.14)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle Brand Color Accent Corner */}
            <div
              className="absolute top-0 right-0 w-36 h-36 rounded-bl-[90px] opacity-10 pointer-events-none transition-transform group-hover:scale-110"
              style={{ backgroundColor: currentMeta.color }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Organization, Role, Location, Live Badge */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-12 h-12 rounded-2xl text-white text-base font-bold flex items-center justify-center shadow-sm shrink-0"
                      style={{ backgroundColor: currentMeta.color }}
                    >
                      {currentMeta.initials}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        {currentMeta.url ? (
                          <a
                            href={currentMeta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-extrabold text-[#1f1f32] hover:text-[#262ef2] transition-colors group/link"
                          >
                            <span>{currentRole.organisation}</span>
                            <FiExternalLink className="w-4 h-4 opacity-40 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#1f1f32]">
                            {currentRole.organisation}
                          </h3>
                        )}
                      </div>
                      <span className="text-xs text-[#6e73fa] font-mono flex items-center gap-1 font-medium mt-0.5">
                        <FiMapPin className="w-3 h-3 text-[#262ef2]" /> {currentRole.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#1f1f32]">
                      {currentRole.role}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Active Contract
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-[#262ef2] bg-[#262ef2]/5 px-3 py-1 rounded-full border border-[#262ef2]/10 inline-flex items-center gap-1.5">
                    <FiCalendar className="w-3 h-3" />
                    {currentRole.from} — {currentRole.to}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  {currentMeta.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-medium text-[#201f32] bg-[#f3f3f9] px-2.5 py-0.5 rounded-md border border-[#e3e2e5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Structured Deliverables */}
              <div className="lg:col-span-7 space-y-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8c859d] block mb-1">
                  Key Technical Architecture &amp; Deliverables:
                </span>
                {currentRole.labels.map((lbl, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#f8f8fc] border border-[#e9e9f2] text-xs sm:text-sm text-[#374151] leading-relaxed group-hover:bg-white group-hover:border-[#e2e2ec] transition-colors shadow-2xs"
                  >
                    <span className="w-5 h-5 rounded-lg bg-[#262ef2]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="w-3 h-3 text-[#262ef2]" strokeWidth={2.5} />
                    </span>
                    <span className="font-medium">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        )}

        {/* Balanced 2x2 Experience Grid for Prior 4 Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {previousRoles.map((item, idx) => {
            const meta = WORK_METADATA[item.organisation] || {
              color: "#262ef2",
              initials: item.organisation.slice(0, 2).toUpperCase(),
              focus: "Engineering",
              tech: ["React", "TypeScript", "Next.js"],
              highlight: "Production Verified",
            };

            return (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 md:p-8 flex flex-col justify-between hover:border-[#262ef2] shadow-[0_20px_60px_-15px_rgba(38,46,242,0.08),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_25px_70px_-15px_rgba(38,46,242,0.14)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Brand Color Accent Corner */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-bl-[70px] opacity-10 pointer-events-none transition-transform group-hover:scale-110"
                  style={{ backgroundColor: meta.color }}
                />

                <div>
                  {/* Top Bar: Company Badge + Timeframe Pill */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-2xl text-white text-sm font-bold flex items-center justify-center shadow-xs shrink-0"
                        style={{ backgroundColor: meta.color }}
                      >
                        {meta.initials}
                      </span>
                      <div>
                        {meta.url ? (
                          <a
                            href={meta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-[#1f1f32] hover:text-[#262ef2] transition-colors group/link leading-tight"
                          >
                            <span>{item.organisation}</span>
                            <FiExternalLink className="w-3.5 h-3.5 opacity-40 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <h3 className="text-base sm:text-lg font-bold text-[#1f1f32] leading-tight">
                            {item.organisation}
                          </h3>
                        )}
                        <span className="text-xs text-[#6e73fa] font-mono flex items-center gap-1 font-medium mt-1">
                          <FiMapPin className="w-3 h-3 text-[#262ef2]" /> {item.location}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-[#61667b] bg-[#f3f3f9] px-2.5 py-1 rounded-full border border-[#e3e2e5] whitespace-nowrap">
                      {item.from} — {item.to}
                    </span>
                  </div>

                  {/* Role Title & Focus Tag */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-[#1f1f32]">{item.role}</h4>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${meta.color}15`, color: meta.color }}
                      >
                        {meta.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Contributions */}
                  <div className="space-y-2 mb-5">
                    {item.labels.map((lbl, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 text-xs text-[#4d5564] leading-relaxed">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ backgroundColor: meta.color }}
                        />
                        <span>{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Pills */}
                <div className="pt-3 border-t border-[#f0f0f6] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium text-[#201f32] bg-[#f3f3f9] px-2 py-0.5 rounded border border-[#e3e2e5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono font-semibold text-[#8c859d]">
                    {meta.focus}
                  </span>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
