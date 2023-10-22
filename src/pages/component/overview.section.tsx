import { Heading } from "./heading";

interface Props {
  heading: String;
  years: String;
}
const IdividualBlock = ({ heading, years }: Props) => {
  return (
    <div className="w-full relative overflow-hidden h-[200px] rounded bg-white text-black">
      <div className="w-[70%] left-[15%] h-[200px] flex gap-5 items-center relative z-10">
        <div className="text-[100px]">{years}</div>
        <div className="text-[25px] font-light uppercase">{heading}</div>
      </div>
      <div className="absolute top-0 right-[-40px] text-gray-300 text-[180px] h-[200px] items-center flex">
        {years}
      </div>
    </div>
  );
};

export const OverviewSection = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <div className="flex gap-10 pt-10 pb-20">
        <IdividualBlock heading="years of professional experience" years="6" />
        <IdividualBlock years="2" heading="languages" />
      </div>
    </>
  );
};
