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
    <div className="mb-6 w-full rounded-xl border border-white/10 bg-slate-800/80 px-5 py-6 text-sm text-slate-100 md:px-8 md:py-8 md:text-base">
      <div className="mb-2 flex items-center gap-2">
        <MdWork size={22} className="text-sky-300" />
        <span className="text-lg font-semibold md:text-xl">{organisation}</span>
      </div>
      <div className="leading-7 text-slate-200 md:leading-8">
        <div className="font-medium text-slate-100">{role}</div>
        <div className="mt-1 inline-flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-slate-900/70 px-2 py-0.5 text-xs text-slate-300 md:text-sm">
            {location}
          </span>
          <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2 py-0.5 text-xs text-sky-200 md:text-sm">
            {from} - {to}
          </span>
        </div>
      </div>

      <ul className="mt-3 ml-5 list-disc leading-7 text-slate-300 md:ml-6 md:leading-8">
        {labels.map((x, i) => (
          <li key={i}>{x}</li>
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
