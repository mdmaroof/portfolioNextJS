import { Heading } from "./heading";

interface Props {
  heading: string;
  years: string;
}
const IdividualBlock = ({ heading, years }: Props) => {
  return (
    <div className="relative my-4 h-[125px] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 text-white md:my-auto md:h-[180px]">
      <div className="w-[90%] left-[5%] md:w-[70%] md:left-[15%] h-[125px] md:h-[200px] flex gap-5 items-center relative z-10">
        <div className="text-[64px] font-semibold md:text-[90px]">{years}</div>
        <div className="text-lg font-light uppercase md:text-2xl">
          {heading}
        </div>
      </div>
      <div className="absolute right-[-20px] top-0 flex h-[125px] items-center text-[100px] text-slate-600 md:right-[-30px] md:h-[180px] md:text-[150px]">
        {years}
      </div>
    </div>
  );
};

export const OverviewSection = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <div className="flex flex-col pt-8 md:flex-row md:gap-8 md:pt-10">
        <IdividualBlock heading="years of professional experience" years="6+" />
        <IdividualBlock years="4+" heading="core domains delivered" />
      </div>
    </>
  );
};
