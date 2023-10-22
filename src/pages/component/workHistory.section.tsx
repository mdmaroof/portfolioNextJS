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
    <div className="bg-white text-sm md:text-md rounded w-full px-5 md:px-10 py-10 font-normal mb-10">
      <div className="flex gap-2 items-center mb-2">
        <MdWork size={26} />
        <span className="text-lg font-semibold">{organisation}</span>
      </div>
      <div className="leading-7 md:leading-8">
        <div>{role}</div>
        <div>{location}</div>
        <div className="text-gray-400">
          From {from} To {to}
        </div>
      </div>

      <ul className="list-disc ml-4 font-light md:font-normal md:ml-10 leading-8 md:leading-10 mt-2">
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
      <div className="py-5 md:py-10 text-black">
        {work?.map((z, i) => (
          <IndividualBlock key={i} {...z} />
        ))}
      </div>
    </>
  );
};
