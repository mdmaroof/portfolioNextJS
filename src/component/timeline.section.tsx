import { Heading } from "./heading";
import { objectWork } from "./workHistory.section";

interface PropsIndividual {
  organisation: string;
  from: string;
  to: string;
}

interface Props {
  work?: objectWork[];
}

const IndividualBlock = ({
  organisation,
  from,
  to,
}: PropsIndividual) => {
  return (
    <li className="group relative pl-10 md:pl-12">
      <span className="absolute left-[3px] top-[22px] h-3.5 w-3.5 rounded-full border border-indigo-200/60 bg-indigo-300 shadow-[0_0_0_5px_rgba(165,180,252,0.22)] transition-transform duration-200 group-hover:scale-110" />
      <div className="glass-chip rounded-xl px-4 py-3 md:px-5">
        <div className="text-xs uppercase tracking-[0.12em] text-indigo-200/80">
          {from} - {to}
        </div>
        <div className="mt-1 text-base font-semibold tracking-wide text-slate-100 md:text-lg">
          {organisation}
        </div>
      </div>
    </li>
  );
};

export const Timeline = ({ work }: Props) => {
  return (
    <div>
      <Heading>Timeline</Heading>
      <p className="mt-2 text-sm text-slate-300 md:text-base">
        Quick journey view of roles over time.
      </p>
      <ul className="relative mt-6 space-y-3 before:absolute before:bottom-0 before:left-[9px] before:top-0 before:w-[2px] before:rounded-full before:bg-gradient-to-b before:from-indigo-300/80 before:to-fuchsia-300/60">
        {work?.map((z, i) => (
          <IndividualBlock key={i} {...z} />
        ))}
      </ul>
    </div>
  );
};
