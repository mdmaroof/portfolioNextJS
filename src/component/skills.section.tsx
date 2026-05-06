import { useMemo } from "react";
import { Heading } from "./heading";

interface Props {
  skills: string[];
}

export const SkillSection = ({ skills }: Props) => {
  const groups: Record<string, string[]> = {
    Frontend: ["React", "Next.js", "React Native", "JavaScript", "TypeScript"],
    State: ["Zustand", "Redux", "MobX"],
    "Backend & Data": ["Node.js", "MongoDB"],
    Tools: ["Mixpanel", "Storybook", "PubNub", "Google Maps API"],
    Core: [
      "Performance Optimization",
      "Real-time Systems",
      "Dashboard Development",
      "Reusable Component Architecture",
    ],
  };

  const groupedValues = Object.values(groups).flat();
  const matched = useMemo(
    () =>
      Object.entries(groups).map(([title, values]) => ({
        title,
        values: values.filter((item) => skills.includes(item)),
      })),
    [skills]
  );
  const extras = useMemo(
    () => skills.filter((skill) => !groupedValues.includes(skill)),
    [skills]
  );

  const visibleGroups = matched.filter((group) => group.values.length > 0);
  const cardClass =
    "rounded-2xl border border-slate-800/90 bg-slate-950/75 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.35)] backdrop-blur-lg md:p-7";
  const chipClass =
    "w-full rounded-xl border border-slate-700/70 bg-slate-900/90 px-4 py-2.5 text-sm leading-5 text-slate-200";

  return (
    <div>
      <Heading>Skills</Heading>
      <div className="mt-6 columns-1 gap-4 md:columns-2 xl:columns-3">
        {visibleGroups.map((group) => (
          <section
            key={group.title}
            className={`${cardClass} mb-4 break-inside-avoid`}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                {group.title}
              </h3>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300">
                {group.values.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {group.values.map((item) => (
                <span key={item} className={chipClass}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}

        {extras.length > 0 && (
          <section
            className={`${cardClass} mb-4 break-inside-avoid`}
          >
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Additional
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {extras.map((extra) => (
                <span key={extra} className={chipClass}>
                  {extra}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
