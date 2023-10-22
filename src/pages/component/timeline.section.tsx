import { objectWork } from "./workHistory.section";

interface PropsIndividual {
  indexValue: number;
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
  indexValue,
  organisation,
  from,
  to,
  role,
  location,
}: PropsIndividual) => {
  const even = indexValue % 2 === 0;
  return (
    <li>
      <div className={even ? "direction-r" : "direction-l"}>
        <div className="flag-wrapper">
          <span className="hexa"></span>
          <div className="flag text-black">{organisation}</div>
          <span className="time-wrapper">
            <div className="time !bg-red-600">
              {from} - {to}
            </div>
          </span>
        </div>
        <div className="desc text-black">
          <div> {role}</div>
          <div>{location}</div>
        </div>
      </div>
    </li>
  );
};
export const Timeline = ({ work }: Props) => {
  return (
    <div className="pb-20">
      <ul className="timeline">
        {work?.map((z, i) => (
          <IndividualBlock key={i} {...z} indexValue={i + 1} />
        ))}
      </ul>
    </div>
  );
};
