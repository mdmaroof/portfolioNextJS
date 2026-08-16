import { useMemo } from "react";
import { Heading } from "./heading";
import { FiBox, FiCode, FiDatabase, FiGrid, FiSliders } from "react-icons/fi";

interface Props {
  skills: string[];
}

const skillGroups = [
  {
    category: "Frontend",
    icon: FiCode,
    skills: ["React", "Next.js", "React Native", "JavaScript", "TypeScript"],
  },
  {
    category: "State",
    icon: FiSliders,
    skills: ["Zustand", "Redux", "MobX"],
  },
  {
    category: "Backend & Data",
    icon: FiDatabase,
    skills: ["Node.js", "MongoDB"],
  },
  {
    category: "Tools",
    icon: FiGrid,
    skills: ["Mixpanel", "Storybook", "PubNub", "Google Maps API"],
  },
  {
    category: "Core",
    icon: FiBox,
    skills: [
      "Performance Optimization",
      "Real-time Systems",
      "Dashboard Development",
      "Reusable Component Architecture",
    ],
  },
];

export const SkillSection = ({ skills }: Props) => {
  const groupedValues = useMemo(
    () => skillGroups.flatMap((g) => g.skills),
    []
  );

  const visibleGroups = useMemo(
    () =>
      skillGroups
        .map((group) => ({
          ...group,
          skills: group.skills.filter((s) => skills.includes(s)),
        }))
        .filter((g) => g.skills.length > 0),
    [skills]
  );

  const extras = useMemo(
    () => skills.filter((skill) => !groupedValues.includes(skill)),
    [skills, groupedValues]
  );

  return (
    <div>
      <Heading>Skills</Heading>
      <div className="columns-1 gap-4 md:mt-6 md:gap-5 md:columns-2 xl:columns-3 mt-4">
        {visibleGroups.map((group) => (
          <div
            key={group.category}
            className="skill-card break-inside-avoid rounded-2xl border border-white/[0.07] bg-slate-950/45 p-5 md:p-6 mb-4"
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-800/70 pb-3 md:pb-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-400/10 text-violet-300">
                  <group.icon className="h-4 w-4" />
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 md:text-sm">
                  {group.category}
                </h3>
              </div>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300 md:px-2.5 md:text-xs">
                {group.skills.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-sky-800/40 bg-sky-950/30 rounded-lg px-3 py-1.5 hover:bg-sky-900/40 transition-colors text-slate-300 text-xs md:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {extras.length > 0 && (
          <div className="skill-card break-inside-avoid rounded-2xl border border-white/[0.07] bg-slate-950/45 p-5 md:p-6 mb-4">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800/70 pb-3 md:pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 md:text-sm">
                Additional
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {extras.map((extra) => (
                <span
                  key={extra}
                  className="border border-sky-800/40 bg-sky-950/30 rounded-lg px-3 py-1.5 hover:bg-sky-900/40 transition-colors text-slate-300 text-xs md:text-sm font-medium"
                >
                  {extra}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
