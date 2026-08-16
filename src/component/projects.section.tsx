import React from 'react';
import { Heading } from './heading';
import { FiActivity, FiArrowUpRight, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { FaGamepad } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface ProjectItem {
  name: string;
  icon: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  gradient: string;
  gradientBorder: string;
  status: 'Live' | 'In Development' | 'Completed';
  link: string | null;
}

interface Props {
  projects?: ProjectItem[];
}

export const ProjectsSection = ({ projects = [] }: Props) => {
  const projectIcons: Record<string, IconType> = {
    'Graple.ai': FiActivity,
    SnapAid: FiHeart,
    'Twist N Words': FaGamepad,
  };

  return (
    <section>
      <Heading>Projects</Heading>
      <p className="mt-3 text-sm text-slate-300 md:text-base mb-8">
        Personal builds focused on experimentation and real-world utility.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const ProjectIcon = projectIcons[project.name] ?? FiActivity;
          return (
          <article
            key={project.name}
            className="project-card flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/45"
          >
            <div className={`h-2 w-full bg-gradient-to-r rounded-t-xl ${project.gradient}`} />
            
            <div className="flex flex-col flex-grow p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-cyan-300">
                  <ProjectIcon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-slate-100">{project.name}</h3>
              </div>
              
              <p className="italic text-slate-300 mb-4">{project.tagline}</p>
              
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'status-live' :
                  project.status === 'In Development' ? 'status-development' :
                  'status-completed'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="glass-chip rounded-md px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 mt-auto">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-slate-300">
                    <FiCheckCircle className="mr-2 mt-0.5 shrink-0 text-emerald-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r ${project.gradient} shine-effect`}
                  >
                    View Project <FiArrowUpRight />
                  </a>
                ) : (
                  <div className="text-center w-full px-4 py-2.5 text-sm font-medium text-slate-400 bg-slate-800/50 rounded-lg cursor-not-allowed">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          </article>
        )})}
      </div>
    </section>
  );
};
