import React, { useState } from "react";
import { FiFolder, FiExternalLink, FiCheck, FiCode, FiLayers, FiPlay } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb } from "react-icons/si";

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

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS & Analytics" },
    { id: "emergency", label: "Health & PWA" },
    { id: "interactive", label: "Interactive & Games" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "saas") return p.name.includes("Graple") || p.name.includes("Symzo");
    if (filter === "emergency") return p.name.includes("SnapAid");
    if (filter === "interactive") return p.name.includes("Twist");
    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="tag">
              <FiFolder className="text-[#262ef2] mr-1" />
              Featured Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1f1f32]">
            Real Software. <br />
            <span className="serif-accent blue-accent font-normal">Real User Impact.</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#4d5564] max-w-xl mx-auto">
            Explore live production web apps, MVPs, and open software engineered by Mohd Maroof.
          </p>

          {/* Sliding Pill Filter */}
          <div className="mt-6 inline-flex p-1 bg-[#e6e6f2] rounded-full border border-[#dcdae8]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  filter === cat.id
                    ? "bg-[#201f32] text-white shadow-sm font-semibold"
                    : "text-[#4d5564] hover:text-[#201f32]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="craft-card p-6 md:p-8 flex flex-col justify-between group hover:border-[#262ef2]/60"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#262ef2]" />
                    <span className="text-xs font-mono font-bold text-[#262ef2] uppercase tracking-wider">
                      {proj.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#8c859d]">
                    Project #{(idx + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1f1f32] group-hover:text-[#262ef2] transition-colors">
                  {proj.name}
                </h3>
                <p className="text-sm font-medium text-[#6e73fa] mt-1">{proj.tagline}</p>
                <p className="mt-3 text-sm text-[#4d5564] leading-relaxed">{proj.description}</p>

                {/* Features List */}
                <div className="mt-5 space-y-1.5 pt-4 border-t border-[#e3e2e5]">
                  <span className="text-xs font-mono text-[#8c859d] uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {proj.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#201f32]">
                      <FiCheck className="w-3.5 h-3.5 text-[#262ef2] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Chips + Live Link Button */}
              <div className="mt-6 pt-4 border-t border-[#e3e2e5]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono text-[#4d5564] bg-[#f3f3f9] px-2.5 py-1 rounded-md border border-[#e3e2e5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#201f32] hover:bg-[#141322] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>Launch Live Project</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
