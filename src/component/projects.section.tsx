import React from "react";
import { FiFolder, FiExternalLink, FiCheck } from "react-icons/fi";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  status: string;
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

interface ProjectMeta {
  color: string;
  domain: string;
  badge: string;
}

const PROJECT_META: Record<string, ProjectMeta> = {
  "Trackaday": {
    color: "#0ea5e9",
    domain: "Geospatial & Spatial Analysis",
    badge: "Mapbox GL + Turf.js",
  },
  "Graple.ai": {
    color: "#0c9618",
    domain: "SaaS Experimentation",
    badge: "A/B Testing Engine",
  },
  "SnapAid": {
    color: "#ca7c0e",
    domain: "Emergency Healthcare",
    badge: "Offline-First PWA",
  },
  "Twist N Words": {
    color: "#f25c26",
    domain: "Physics Word Game",
    badge: "Interactive State",
  },
  "Symzo": {
    color: "#0c5696",
    domain: "Product Experience",
    badge: "Responsive Frontend",
  },
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiFolder className="text-[#262ef2] mr-1" />
              Flagship Software &amp; Live Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Real Software. <br />
            <span className="serif-accent blue-accent font-normal">Production Impact.</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            Explore live production web applications, experimentation platforms, and geospatial engines built by Mohd Maroof.
          </p>
        </div>

        {/* High-Craft Clean Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((proj, idx) => {
            const meta = PROJECT_META[proj.name] || {
              color: "#262ef2",
              domain: "Web Application",
              badge: "Live Project",
            };

            return (
              <div
                key={idx}
                className="group p-7 md:p-9 bg-white/85 backdrop-blur-xl border border-white/95 rounded-[28px] shadow-[0_20px_50px_-15px_rgba(32,31,50,0.1),inset_0_1px_0_rgba(255,255,255,0.95)] hover:border-[#262ef2] hover:bg-white hover:shadow-[0_25px_60px_-15px_rgba(38,46,242,0.16)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Status + Domain Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-[#262ef2] uppercase tracking-wider">
                        {proj.status}
                      </span>
                      <span className="text-[11px] font-mono text-[#4d5564] bg-[#f3f3f9] px-2.5 py-0.5 rounded-full border border-[#e3e2e5] font-medium">
                        {meta.domain}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#8c859d]">
                      Project #{(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-[#1f1f32] group-hover:text-[#262ef2] transition-colors flex items-center justify-between">
                    {proj.name}
                    <FiExternalLink className="w-4 h-4 text-[#8c859d] group-hover:text-[#262ef2] transition-colors" />
                  </h3>
                  <p className="text-sm font-semibold text-[#262ef2] mt-1">{proj.tagline}</p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4d5564] leading-relaxed mt-3.5 mb-5">
                    {proj.description}
                  </p>

                  {/* Key Deliverables Structured Rows */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8c859d] block mb-1">
                      Key Deliverables &amp; Features:
                    </span>
                    {proj.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#f8f8fc] border border-[#e9e9f2] text-xs text-[#374151] leading-relaxed group-hover:bg-white group-hover:border-[#e2e2ec] transition-colors"
                      >
                        <span className="w-5 h-5 rounded-lg bg-[#262ef2]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FiCheck className="w-3 h-3 text-[#262ef2]" strokeWidth={2.5} />
                        </span>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Tech Pills & Direct Launch Button */}
                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3.5 border-t border-[#f0f0f6]">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium text-[#201f32] bg-[#f3f3f9] px-2.5 py-1 rounded-md border border-[#e3e2e5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* High-Craft Launch Button */}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark w-full justify-center text-center group-hover:bg-[#262ef2] transition-colors"
                  >
                    <span>Launch Live Project</span>
                    <FiExternalLink className="w-4 h-4 ml-1.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
