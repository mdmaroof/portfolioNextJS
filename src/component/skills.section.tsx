import { Heading } from "./heading";
import { BsDot } from "react-icons/bs";

interface Props {
  skills: string[];
}

export const SkillSection = ({ skills }: Props) => {
  return (
    <div>
      <Heading>Skills</Heading>
      <div className="mt-8 grid grid-cols-1 gap-3 rounded-xl border border-white/10 bg-slate-800/80 px-5 py-6 text-slate-100 md:grid-cols-2 md:gap-4 md:px-8 md:py-8 lg:grid-cols-3">
        {skills.map((z, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-white/5 bg-slate-900/60 px-3 py-2">
            <BsDot className="text-sky-300" />
            {z}
          </div>
        ))}
      </div>
    </div>
  );
};
