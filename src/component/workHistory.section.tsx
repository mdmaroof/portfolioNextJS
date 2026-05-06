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
  organisation,
  role,
  from,
  to,
  location,
  labels,
}: objectWork) => {
  return (
    <article className="mb-5 w-full rounded-xl border border-slate-800/80 bg-slate-950/55 px-5 py-5 text-sm text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 md:px-7 md:py-6 md:text-base">
      <div className="mb-4 flex flex-col gap-3 border-b border-slate-800/70 pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MdWork size={20} className="text-sky-300" />
            <span className="text-lg font-semibold md:text-xl">{organisation}</span>
          </div>
          <div className="mt-1 text-sm text-slate-300 md:text-base">{role}</div>
        </div>
        <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200 md:text-sm">
          {from} - {to}
        </span>
      </div>
      <div className="mb-4">
        <span className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 md:text-sm">
          {location}
        </span>
      </div>

      <ul className="mt-2 ml-0 space-y-2.5 leading-7 text-slate-300 md:leading-8">
        {labels.map((x, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const WorkHistory = ({ work }: Props) => {
  return (
    <>
      <Heading>Work Experience</Heading>
      <div className="py-5 md:py-8">
        {work?.map((z, i) => (
          <IndividualBlock key={i} {...z} />
        ))}
      </div>
    </>
  );
};
