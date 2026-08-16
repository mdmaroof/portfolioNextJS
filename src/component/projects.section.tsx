import { FaGamepad } from "react-icons/fa";
import { FiActivity, FiArrowUpRight, FiCheck, FiHeart, FiHexagon } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Heading } from "./heading";

export interface ProjectItem { name: string; tagline: string; description: string; tech: string[]; features: string[]; status: "Live" | "In Development" | "Completed"; link: string | null; }
interface Props { projects?: ProjectItem[]; }
const icons: Record<string, IconType> = { "Graple.ai": FiActivity, SnapAid: FiHeart, "Twist N Words": FaGamepad, Symzo: FiHexagon };

export const ProjectsSection = ({ projects = [] }: Props) => (
  <section>
    <div className="section-heading-row"><div><span className="eyebrow">Selected launches</span><Heading className="mt-3">Projects in motion</Heading></div><p>Independent products where engineering, experimentation and utility intersect.</p></div>
    <div className="project-orbit-grid mt-10">
      {projects.map((project, index) => { const Icon = icons[project.name] || FiHexagon; return (
        <article key={project.name} className={`project-orbit-card project-tone-${(index % 4) + 1}`}>
          <div className="project-orbit-art" aria-hidden="true"><div className="project-ring project-ring-one" /><div className="project-ring project-ring-two" /><span className="project-core"><Icon /></span><span className="project-number">0{index + 1}</span></div>
          <div className="project-content">
            <div className="flex items-center justify-between gap-3"><span className="project-status"><i />{project.status}</span>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}><FiArrowUpRight /></a>}</div>
            <h3>{project.name}</h3><p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p>
            <div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <ul>{project.features.slice(0, 3).map((feature) => <li key={feature}><FiCheck />{feature}</li>)}</ul>
            {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">Explore live project <FiArrowUpRight /></a> : <span className="project-cta project-cta-muted">Private preview</span>}
          </div>
        </article>
      ); })}
    </div>
  </section>
);
