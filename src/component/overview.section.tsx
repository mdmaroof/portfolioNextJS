import { Heading } from "./heading";

interface Props {
  heading: string;
  years: string;
  subheading: string;
}
const IdividualBlock = ({ heading, years, subheading }: Props) => {
  return (
    <div className="h-full rounded-xl border border-slate-800/80 bg-slate-950/55 p-5 text-white md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 md:text-sm">
          {heading}
        </div>
        <div className="text-3xl font-semibold text-sky-200 md:text-4xl">{years}</div>
      </div>
      <div className="mt-3 text-sm leading-6 text-slate-300">{subheading}</div>
    </div>
  );
};

export const OverviewSection = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <div className="mt-3 text-sm text-slate-300 md:text-base">
        Key highlights from projects, delivery, and technical ownership.
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
