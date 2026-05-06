import { Heading } from "./heading";

interface ProjectItem {
  name: string;
  description: string;
}

interface Props {
  projects?: ProjectItem[];
}

export const ProjectsSection = ({ projects }: Props) => {
  return (
    <div>
      <Heading>Side Projects</Heading>
      <div className="mt-3 text-sm text-slate-300 md:text-base">
        Personal builds focused on experimentation and real-world utility.
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects?.map((project) => (
          <article
            key={project.name}
            className="h-full rounded-xl border border-slate-800/90 bg-slate-950/65 p-5 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
