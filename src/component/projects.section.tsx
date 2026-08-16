import { FaGamepad } from "react-icons/fa";
import { FiActivity, FiArrowUpRight, FiCheck, FiHeart, FiHexagon } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Heading } from "./heading";
import { m } from "framer-motion";

export interface ProjectItem { name: string; tagline: string; description: string; tech: string[]; features: string[]; status: "Live" | "In Development" | "Completed"; link: string | null; }
interface Props { projects?: ProjectItem[]; }
const icons: Record<string, IconType> = { "Graple.ai": FiActivity, SnapAid: FiHeart, "Twist N Words": FaGamepad, Symzo: FiHexagon };

export const ProjectsSection = ({ projects = [] }: Props) => (
  <section>
    <m.div className="section-heading-row" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .58, ease: [0.16, 1, 0.3, 1] }}><div><span className="eyebrow">Selected launches</span><Heading className="mt-3">Projects in motion</Heading></div><p>Independent products where engineering, experimentation and utility intersect.</p></m.div>
    <div className="project-orbit-grid mt-10">
      {projects.map((project, index) => { const Icon = icons[project.name] || FiHexagon; return (
        <m.article key={project.name} className={`project-orbit-card project-tone-${(index % 4) + 1}`} initial={{ opacity: 0, y: 28, rotateX: 3 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} whileHover={{ y: -6 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .58, delay: (index % 2) * .08, ease: [0.16, 1, 0.3, 1] }}>
          <div className="project-orbit-art" aria-hidden="true"><m.div className="project-ring project-ring-one" animate={{ opacity: [.45, .82, .45] }} transition={{ duration: 4.6 + index * .35, repeat: Infinity, ease: "easeInOut" }} /><m.div className="project-ring project-ring-two" animate={{ opacity: [.25, .58, .25] }} transition={{ duration: 6 + index * .4, repeat: Infinity, ease: "easeInOut", delay: .8 }} /><span className="project-core-anchor"><m.span className="project-core" animate={{ y: [0, -6, 0], rotate: [-7, 3, -7] }} transition={{ duration: 4.2 + index * .3, repeat: Infinity, ease: "easeInOut" }}><Icon /></m.span></span><span className="project-number">0{index + 1}</span></div>
          <div className="project-content">
            <div className="flex items-center justify-between gap-3"><span className="project-status"><i />{project.status}</span>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}><FiArrowUpRight /></a>}</div>
            <h3>{project.name}</h3><p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p>
            <div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <ul>{project.features.slice(0, 3).map((feature) => <li key={feature}><FiCheck />{feature}</li>)}</ul>
            {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">Explore live project <FiArrowUpRight /></a> : <span className="project-cta project-cta-muted">Private preview</span>}
          </div>
        </m.article>
      ); })}
    </div>
  </section>
);
