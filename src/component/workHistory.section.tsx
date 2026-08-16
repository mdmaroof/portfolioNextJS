import { FiArrowUpRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { Heading } from "./heading";

export interface objectWork { organisation: string; role: string; from: string; to: string; location: string; labels: string[]; }
interface Props { work?: objectWork[]; }

const ExperienceCard = ({ item, index }: { item: objectWork; index: number }) => (
  <article className="experience-card group">
    <div className="experience-index">{String(index + 1).padStart(2, "0")}</div>
    <div className="experience-mark">{item.organisation.charAt(0)}</div>
    <div className="min-w-0 flex-1">
      <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-5 md:flex-row md:items-start md:justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/75">{item.organisation}</p><h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">{item.role}</h3></div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-300 md:justify-end"><span className="experience-meta"><FiCalendar /> {item.from} — {item.to}</span><span className="experience-meta"><FiMapPin /> {item.location}</span></div>
      </div>
      <ul className="mt-5 grid gap-3 md:grid-cols-2 md:gap-x-8">
        {item.labels.map((label) => <li key={label} className="flex gap-3 text-sm leading-6 text-slate-300"><FiArrowUpRight className="mt-1 shrink-0 text-violet-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{label}</li>)}
      </ul>
    </div>
  </article>
);

export const WorkHistory = ({ work = [] }: Props) => (
  <div>
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><span className="eyebrow">Selected experience</span><Heading className="mt-3">Work Experience</Heading></div><p className="max-w-sm text-sm leading-6 text-slate-400 md:text-right">Building thoughtful interfaces and reliable product experiences since 2019.</p></div>
    <div className="mt-8 space-y-4 md:mt-10">{work.map((item, index) => <ExperienceCard key={`${item.organisation}-${item.from}`} item={item} index={index} />)}</div>
  </div>
);
