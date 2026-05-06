import { Heading } from "./heading";

interface Props {
  heading: string;
  years: string;
  subheading: string;
}
const IdividualBlock = ({ heading, years, subheading }: Props) => {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-slate-800/90 bg-slate-950/60 p-5 text-white md:p-6">
      <div className="relative z-10 flex h-full flex-col">
        <div className="text-5xl font-semibold text-sky-200 md:text-6xl">{years}</div>
        <div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-100 md:text-base">
          {heading}
        </div>
        <div className="mt-1 text-sm leading-6 text-slate-300">{subheading}</div>
      </div>
      <div className="pointer-events-none absolute right-3 top-0 text-[88px] font-semibold text-slate-800/70 md:text-[110px]">
        {years}
      </div>
    </div>
  );
};

export const OverviewSection = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <div className="mt-3 text-sm text-slate-300 md:text-base">
        Snapshot of delivery focus and engineering depth.
      </div>
      <div className="grid grid-cols-1 items-stretch gap-4 pt-6 md:grid-cols-3 md:pt-8">
        <IdividualBlock
          heading="experience"
          years="6+"
          subheading="building production apps"
        />
        <IdividualBlock
          years="10+"
          heading="major products"
          subheading="delivered across web and mobile"
        />
        <IdividualBlock
          years="4+"
          heading="core domains"
          subheading="real-time, analytics, dashboards, performance"
        />
      </div>
    </>
  );
};
