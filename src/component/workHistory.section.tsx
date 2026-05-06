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
    <article className="mb-4 w-full rounded-xl border border-slate-800/80 bg-slate-950/55 px-4 py-4 text-sm text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 md:mb-5 md:px-7 md:py-6 md:text-base">
      <div className="mb-3 flex flex-col gap-3 border-b border-slate-800/70 pb-3 md:mb-4 md:pb-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-base font-semibold leading-snug md:text-xl">{organisation}</h3>
          <div className="mt-1 text-sm leading-snug text-slate-300 md:text-base">{role}</div>
        </div>
        <span className="self-start rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-[11px] leading-tight text-slate-200 md:text-sm">
          {from} - {to}
        </span>
      </div>
      <div className="mb-3 md:mb-4">
        <span className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300 md:text-sm">
          {location}
        </span>
      </div>

      <ul className="mt-1 ml-0 space-y-2 text-slate-300 leading-7 md:mt-2 md:space-y-2.5 md:leading-8">
        {labels.map((x, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span className="leading-7 md:leading-8">{x}</span>
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
