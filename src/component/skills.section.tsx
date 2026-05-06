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
    "rounded-xl border border-slate-800/80 bg-slate-950/55 px-3 py-3.5 sm:px-4 sm:py-4 md:px-7 md:py-6";
  const chipClass =
    "inline-flex w-fit max-w-full rounded-md border border-sky-800/60 bg-sky-900/20 px-2 py-1 text-xs leading-5 text-sky-100 md:px-2.5 md:text-sm";

  return (
    <div>
      <Heading>Skills</Heading>
      <div className="mt-4 columns-1 gap-3 md:mt-6 md:gap-4 md:columns-2 xl:columns-3">
        {visibleGroups.map((group) => (
          <section
            key={group.title}
            className={`${cardClass} mb-4 break-inside-avoid`}
          >
            <div className="mb-3 flex items-center justify-between border-b border-slate-800/70 pb-3 md:mb-4 md:pb-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200 md:text-xs md:tracking-[0.16em]">
                {group.title}
              </h3>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300 md:px-2.5 md:text-xs">
                {group.values.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
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
            <div className="mb-3 border-b border-slate-800/70 pb-3 md:mb-4 md:pb-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200 md:text-xs md:tracking-[0.16em]">
                Additional
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
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
