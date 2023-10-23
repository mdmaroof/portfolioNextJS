import { Heading } from "./heading";

interface Props {
  heading: String;
  years: String;
}
const IdividualBlock = ({ heading, years }: Props) => {
  return (
    <div className="w-full relative overflow-hidden h-[125px] md:h-[200px] my-5 md:my-auto rounded bg-white text-black">
      <div className="w-[90%] left-[5%] md:w-[70%] md:left-[15%] h-[125px] md:h-[200px] flex gap-5 items-center relative z-10">
        <div className="text-[75px] md:text-[100px]">{years}</div>
        <div className="text-[20px] md:text-[25px] font-light uppercase">
          {heading}
        </div>
      </div>
      <div className="absolute top-0 right-[-20px] md:right-[-40px] text-gray-300 text-[100px] md:text-[180px] h-[125px] md:h-[200px] items-center flex">
        {years}
      </div>
    </div>
  );
};

export const OverviewSection = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <div className="flex flex-col md:flex-row md:gap-10 pt-10 pb-20">
        <IdividualBlock heading="years of professional experience" years="5" />
        <IdividualBlock years="2" heading="languages" />
      </div>
    </>
  );
};
