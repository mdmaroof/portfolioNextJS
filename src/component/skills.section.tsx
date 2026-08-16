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
      <m.div className="section-heading-row" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .58, ease: [0.16, 1, 0.3, 1] }}><div><span className="eyebrow">Technology constellation</span><Heading className="mt-3">Tools I build with</Heading></div><p>Focused expertise, arranged around the work—not a wall of logos.</p></m.div>
      <div className="skills-orbit mt-10">
        <m.div className="skills-ring skills-ring-one" animate={{ opacity: [.35, .72, .35] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} />
        <m.div className="skills-ring skills-ring-two" animate={{ opacity: [.3, .62, .3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: .8 }} />
        <m.div className="skills-ring skills-ring-three" animate={{ opacity: [.4, .8, .4] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} />
        <m.span className="skills-satellite skills-satellite-one" aria-hidden="true" animate={{ scale: [1, 1.55, 1], opacity: [.55, 1, .55] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
        <m.span className="skills-satellite skills-satellite-two" aria-hidden="true" animate={{ scale: [1, 1.45, 1], opacity: [.5, 1, .5] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: .7 }} />
        <m.span className="skills-satellite skills-satellite-three" aria-hidden="true" animate={{ scale: [1, 1.5, 1], opacity: [.5, 1, .5] }} transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }} />
        <div className="skills-grid">
          {visible.map((group, index) => {
            const Icon = group.icon;
            return (
              <m.article
                key={group.category}
                className={`skill-planet skill-planet-${index + 1}`}
                initial={{ opacity: 0, scale: .96, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.008 }}
                viewport={{ once: true, amount: .3 }}
                transition={{ duration: .48, delay: index * .055 }}
              >
                <div className="skill-planet-head"><span><Icon /></span><div><p>0{index + 1}</p><h3>{group.category}</h3></div></div>
                <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </m.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
