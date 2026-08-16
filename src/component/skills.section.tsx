import { useMemo } from "react";
import { FiBox, FiCode, FiDatabase, FiGrid, FiSliders } from "react-icons/fi";
import { Heading } from "./heading";
import { m } from "framer-motion";

interface Props { skills: string[]; }
const groups = [
  { category: "Frontend", icon: FiCode, skills: ["React", "Next.js", "React Native", "JavaScript", "TypeScript"] },
  { category: "State", icon: FiSliders, skills: ["Zustand", "Redux", "MobX"] },
  { category: "Backend & data", icon: FiDatabase, skills: ["Node.js", "MongoDB"] },
  { category: "Product tools", icon: FiGrid, skills: ["Mixpanel", "Storybook", "PubNub", "Google Maps API"] },
  { category: "Core strengths", icon: FiBox, skills: ["Performance Optimization", "Real-time Systems", "Dashboard Development", "Reusable Component Architecture"] },
];

export const SkillSection = ({ skills }: Props) => {
  const visible = useMemo(() => groups.map((group) => ({ ...group, skills: group.skills.filter((skill) => skills.includes(skill)) })).filter((group) => group.skills.length), [skills]);
  return (
    <div>
      <div className="section-heading-row"><div><span className="eyebrow">Technology constellation</span><Heading className="mt-3">Tools I build with</Heading></div><p>Focused expertise, arranged around the work—not a wall of logos.</p></div>
      <div className="skills-orbit mt-10">
        <div className="skills-ring skills-ring-one" /><div className="skills-ring skills-ring-two" />
        <div className="skills-grid">
          {visible.map((group, index) => { const Icon = group.icon; return <m.article key={group.category} className={`skill-planet skill-planet-${index + 1}`} initial={{ opacity: 0, scale: .96, y: 14 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .48, delay: index * .055 }}><div className="skill-planet-head"><span><Icon /></span><div><p>0{index + 1}</p><h3>{group.category}</h3></div></div><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></m.article>; })}
        </div>
      </div>
    </div>
  );
};
