import { Heading } from "./heading";
import { objectWork } from "./workHistory.section";

interface PropsIndividual {
  index: number;
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
  index,
  organisation,
  from,
  to,
  role,
  location,
  labels,
}: PropsIndividual) => {
  const isEven = index % 2 === 0;
  return (
    <li className="group relative grid grid-cols-1 pl-9 md:grid-cols-2 md:gap-12 md:pl-0">
      <span className="absolute left-0 top-7 h-4 w-4 rounded-full border border-sky-300/60 bg-sky-300 shadow-[0_0_0_6px_rgba(56,189,248,0.15)] transition-transform duration-200 group-hover:scale-110 md:left-1/2 md:-ml-2" />

      <div
        className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/80 p-5 shadow-lg shadow-black/20 transition-all duration-200 group-hover:border-sky-300/40 group-hover:shadow-sky-500/10 md:p-6 ${
          isEven ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div className="flex flex-col gap-3 md:items-start md:justify-between">
          <div>
            <div className="text-xl font-semibold text-white">{organisation}</div>
            <div className="mt-1 text-sm text-slate-300 md:text-base">{role}</div>
          </div>
          <div className="inline-flex w-fit rounded-full border border-fuchsia-300/30 bg-fuchsia-500/15 px-3 py-1 text-xs font-medium text-fuchsia-100 md:text-sm">
            {from} - {to}
          </div>
        </div>

        <div className="mt-3 inline-flex rounded-md border border-white/10 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 md:text-sm">
          {location}
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-base">
          {labels.slice(0, 2).map((label, index) => (
            <li key={index} className="flex gap-2">
              <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export const Timeline = ({ work }: Props) => {
  return (
    <div>
      <Heading>Timeline</Heading>
      <ul className="relative mt-8 space-y-5 before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-sky-300/90 before:via-indigo-400/70 before:to-fuchsia-400/60 md:space-y-6 md:before:left-1/2 md:before:-ml-[1.5px]">
        {work?.map((z, i) => (
          <IndividualBlock key={i} {...z} index={i} />
        ))}
      </ul>
    </div>
  );
};
