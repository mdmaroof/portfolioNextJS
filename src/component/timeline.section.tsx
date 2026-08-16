import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { Heading } from "./heading";
import { objectWork } from "./workHistory.section";

interface Props { work?: objectWork[]; }

export const Timeline = ({ work = [] }: Props) => (
  <div className="career-orbit">
    <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div><span className="eyebrow">Career trajectory</span><Heading className="mt-3">The journey so far</Heading></div>
      <p className="max-w-xs text-sm leading-6 text-slate-400 md:text-right">A continuous path from frontend craft to product ownership.</p>
    </div>
    <div className="relative z-10 mt-10 hidden grid-cols-6 gap-3 md:grid">
      {work.map((item, index) => (
        <article key={`${item.organisation}-${item.from}`} className="timeline-orbit-item">
          <div className="timeline-node"><span>{String(work.length - index).padStart(2, "0")}</span></div>
          <p className="mt-5 text-xs font-medium tracking-[0.12em] text-cyan-200/80">{item.from.split(" ").slice(-1)}</p>
          <h3 className="mt-2 text-sm font-semibold leading-5 text-white">{item.role}</h3>
          <p className="mt-1.5 text-xs leading-5 text-slate-400">{item.organisation}</p>
        </article>
      ))}
    </div>
    <div className="relative z-10 mt-8 space-y-3 md:hidden">
      {work.map((item, index) => (
        <article key={`${item.organisation}-${item.from}`} className="rounded-2xl border border-white/[0.08] bg-slate-950/35 p-4">
          <div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-400/15 text-xs font-semibold text-violet-200">{String(work.length - index).padStart(2, "0")}</span><div><h3 className="font-semibold text-white">{item.role}</h3><p className="mt-1 text-sm text-slate-400">{item.organisation} · {item.from} — {item.to}</p></div></div>
        </article>
      ))}
    </div>
    <div className="relative z-10 mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6 text-xs text-slate-400"><span className="inline-flex items-center gap-1.5"><FiMapPin className="text-cyan-300" /> India & remote</span><span className="inline-flex items-center gap-1.5"><FiArrowUpRight className="text-violet-300" /> Frontend to product leadership</span></div>
  </div>
);
