import { Heading } from "./heading";
import { BsDot } from "react-icons/bs";

interface Props {
  skills: String[];
}

export const SkillSection = ({ skills }: Props) => {
  return (
    <div className="pb-1">
      <Heading>Skills</Heading>
      <div className="mt-10 mb-20 px-10 py-10 bg-white text-black grid grid-cols-3 gap-4">
        {skills.map((z, i) => (
          <div key={i} className="flex gap-2 items-center">
            <BsDot />
            {z}
          </div>
        ))}
      </div>
    </div>
  );
};
