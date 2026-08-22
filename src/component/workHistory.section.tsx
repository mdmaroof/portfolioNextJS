import React from "react";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from "react-icons/fi";

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

export const WorkHistory: React.FC<WorkHistoryProps> = ({ work }) => {
  return (
    <section id="work-history" className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiBriefcase className="text-[#262ef2] mr-1" />
              Career Journey
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1f1f32]">
            Detailed Roles &amp; <span className="serif-accent blue-accent font-normal">Contributions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {work.map((item, idx) => (
            <div
              key={idx}
              className="craft-card p-6 bg-white flex flex-col justify-between hover:border-[#262ef2]/60"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#262ef2] bg-[#262ef2]/10 px-2.5 py-0.5 rounded-full">
                    {item.organisation}
                  </span>
                  <span className="text-xs font-mono text-[#61667b] flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" /> {item.from} — {item.to}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1f1f32] mt-1">{item.role}</h3>
                <p className="text-xs text-[#6e73fa] flex items-center gap-1 mt-0.5 mb-3 font-mono">
                  <FiMapPin className="w-3 h-3" /> {item.location}
                </p>

                <ul className="space-y-1.5 text-xs text-[#4d5564] leading-relaxed">
                  {item.labels.map((lbl, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-1.5">
                      <FiCheckCircle className="w-3.5 h-3.5 text-[#262ef2] shrink-0 mt-0.5" />
                      <span>{lbl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f0f0f6] flex items-center justify-between text-[11px] text-[#8c859d] font-mono">
                <span>0{idx + 1} / 0{work.length}</span>
                <span className="text-emerald-600 font-semibold">Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
