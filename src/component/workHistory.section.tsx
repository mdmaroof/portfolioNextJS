import { FiArrowUpRight, FiCalendar, FiCode, FiGrid, FiMapPin, FiRadio, FiShield, FiSmartphone, FiStar, FiTruck } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Heading } from "./heading";

export interface objectWork { organisation: string; role: string; from: string; to: string; location: string; labels: string[]; }
interface Props { work?: objectWork[]; }

const companyIcons: Record<string, IconType> = {
  Ethos: FiSmartphone,
  VAHN: FiTruck,
  Mercor: FiGrid,
  "Buzztales Technologies Pvt. Ltd.": FiStar,
  "56 Secure": FiShield,
  "Noon Academy": FiRadio,
};

const ExperienceCard = ({ item, index, isLast }: { item: objectWork; index: number; isLast: boolean }) => {
  const CompanyIcon = companyIcons[item.organisation] || FiCode;
  return (
  <article className={`experience-card group ${index === 0 || isLast ? "experience-card-wide" : ""} ${index === 0 ? "experience-card-featured" : ""}`}>
    <div className="experience-card-top">
      <div className="company-orbit" aria-hidden="true">
        <span className="company-orbit-ring" />
        <strong><CompanyIcon /></strong>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
          {index === 0 && <span className="current-role"><i /> Current role</span>}
        </div>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#64e7ff]">{item.organisation}</p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">{item.role}</h3>
      </div>
    </div>

    <div className="experience-meta-row">
      <span><FiCalendar /> {item.from} — {item.to}</span>
      <span><FiMapPin /> {item.location}</span>
    </div>

    <ul className="experience-points">
      {item.labels.map((label) => (
        <li key={label}>
          <FiArrowUpRight />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </article>
  );
};

export const WorkHistory = ({ work = [] }: Props) => (
  <div>
    <div className="section-heading-row">
      <div><span className="eyebrow">Selected experience</span><Heading className="mt-3">Work Experience</Heading></div>
      <p>Building thoughtful interfaces and reliable product experiences since 2019.</p>
    </div>
    <div className="experience-grid mt-8 md:mt-10">
      {work.map((item, index) => <ExperienceCard key={`${item.organisation}-${item.from}`} item={item} index={index} isLast={index === work.length - 1} />)}
    </div>
  </div>
);
