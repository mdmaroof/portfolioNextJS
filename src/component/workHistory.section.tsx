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
    <div className="glass-subcard mb-6 w-full rounded-xl border-l-4 border-l-sky-300/70 px-5 py-6 text-sm text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 md:px-8 md:py-8 md:text-base">
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-2">
          <MdWork size={22} className="text-sky-300" />
          <span className="text-lg font-semibold md:text-xl">{organisation}</span>
        </div>
        <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-200 md:text-sm">
          {from} - {to}
        </span>
      </div>
      <div className="leading-7 text-slate-200 md:leading-8">
        <div className="font-medium text-slate-100">{role}</div>
        <span className="glass-chip mt-1 inline-flex rounded-full px-2 py-0.5 text-xs text-slate-300 md:text-sm">
          {location}
        </span>
      </div>

      <ul className="mt-4 ml-0 space-y-2 leading-7 text-slate-300 md:leading-8">
        {labels.map((x, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-sky-300" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
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
