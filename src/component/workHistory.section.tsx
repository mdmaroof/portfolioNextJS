import { Heading } from "./heading";
import { MdWork } from "react-icons/md";

export interface objectWork {
  organisation: string;
  role: string;
  from: string;
  to: string;
  location: string;
  labels: string[];
}

interface Props {
  work?: objectWork[];
}

const IndividualBlock = ({
  item,
  index,
}: {
  item: objectWork;
  index: number;
}) => {
  return (
    <div className="flex flex-row gap-4 md:gap-6 relative w-full">
      {/* Timeline Connector Column */}
      <div className="hidden md:flex flex-col items-center w-[40px] shrink-0 pt-6">
        <div
          className={`w-3.5 h-3.5 rounded-full z-10 ${
            index === 0 ? "timeline-dot-active" : "timeline-dot"
          }`}
        />
      </div>

      {/* Work Card */}
      <div className="flex-1 work-card rounded-xl border border-slate-800/80 bg-slate-950/55 px-4 py-4 text-sm text-slate-100 md:px-7 md:py-6 md:text-base">
        <div className="mb-3 flex flex-col gap-3 border-b border-slate-800/70 pb-3 md:mb-4 md:pb-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            {/* Organization Avatar */}
            <div className="flex items-center justify-center bg-gradient-to-br from-sky-600 to-violet-600 w-9 h-9 md:w-10 md:h-10 rounded-full text-white font-bold text-sm md:text-base shrink-0 shadow-lg">
              {item.organisation.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-base font-semibold leading-snug md:text-xl">
                {item.organisation}
              </h3>
              <div className="mt-1 text-sm leading-snug text-slate-300 md:text-base">
                {item.role}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-[11px] leading-tight text-slate-200 md:text-sm">
              <MdWork className="text-sky-400 text-xs" />
              {item.from} - {item.to}
            </span>
            <span className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300 md:text-sm">
              {item.location}
            </span>
          </div>
        </div>

        <ul className="mt-1 ml-0 space-y-2 text-slate-300 leading-7 md:mt-2 md:space-y-2.5 md:leading-8">
          {item.labels.map((x, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400/60 shrink-0" />
              <span className="leading-7 md:leading-8">{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const WorkHistory = ({ work }: Props) => {
  return (
    <>
      <Heading>Work Experience</Heading>
      <div className="relative mt-6 md:mt-8">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[19px] top-6 bottom-6 w-0.5 hidden md:block bg-gradient-to-b from-sky-500/40 via-violet-500/30 to-sky-500/10" />

        <div className="flex flex-col gap-5 md:gap-6">
          {work?.map((z, i) => (
            <IndividualBlock key={i} item={z} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};
