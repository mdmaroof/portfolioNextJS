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
    "rounded-xl border border-slate-800/80 bg-slate-950/55 px-5 py-5 md:px-7 md:py-6";
  const chipClass =
    "inline-flex w-fit rounded-md border border-sky-800/60 bg-sky-900/20 px-2.5 py-1 text-sm leading-5 text-sky-100";

  return (
    <div>
      <Heading>Skills</Heading>
      <div className="mt-6 columns-1 gap-4 md:columns-2 xl:columns-3">
        {visibleGroups.map((group) => (
          <section
            key={group.title}
            className={`${cardClass} mb-4 break-inside-avoid`}
          >
            <div className="mb-4 flex items-center justify-between border-b border-slate-800/70 pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                {group.title}
              </h3>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300">
                {group.values.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
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
            <div className="mb-4 border-b border-slate-800/70 pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                Additional
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
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
