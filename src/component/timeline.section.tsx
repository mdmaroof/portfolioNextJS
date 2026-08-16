import { m } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { Heading } from "./heading";
import { objectWork } from "./workHistory.section";

interface Props { work?: objectWork[]; }

export const Timeline = ({ work = [] }: Props) => (
  <div className="career-orbit">
    <m.div className="section-heading-row" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .58, ease: [0.16, 1, 0.3, 1] }}>
      <div><span className="eyebrow">Career trajectory</span><Heading className="mt-3">The journey so far</Heading></div>
      <p>Every role added a new layer—from realtime experiences to product ownership.</p>
    </m.div>

    <div className="timeline-stage mt-7 hidden lg:block">
      <m.div className="timeline-arc timeline-arc-one" animate={{ opacity: [.42, .82, .42] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <m.div className="timeline-arc timeline-arc-two" animate={{ opacity: [.35, .7, .35] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .7 }} />
      <m.div className="timeline-arc timeline-arc-three" animate={{ opacity: [.28, .58, .28] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }} />
      <m.p className="timeline-statement" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .65, delay: .14 }}>A continuous path from frontend craft to product ownership.</m.p>
      <div className="timeline-track">
        {work.map((item, index) => (
          <m.article key={`${item.organisation}-${item.from}`} className="timeline-stop" initial={{ opacity: 0, y: 12, scale: .9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -6, scale: 1.035 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .45, delay: index * .07, ease: [0.16, 1, 0.3, 1] }}>
            <div className="timeline-node">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-stop-copy"><strong>{item.organisation}</strong><span>{item.from.split(" ").slice(-1)}</span></div>
          </m.article>
        ))}
      </div>
    </div>

    <div className="mt-5 space-y-3 lg:hidden">
      {work.map((item, index) => (
        <m.article key={`${item.organisation}-${item.from}`} className="timeline-mobile-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .4, delay: index * .04 }}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{item.role}</h3><p>{item.organisation} · {item.from} — {item.to}</p></div>
        </m.article>
      ))}
    </div>
    <m.div className="timeline-meta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .55, delay: .2 }}><span><FiMapPin /> India & remote</span><span><FiArrowUpRight /> Frontend to product leadership</span></m.div>
  </div>
);
