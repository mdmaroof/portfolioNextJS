import { m } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { Heading } from "./heading";
import { objectWork } from "./workHistory.section";

interface Props { work?: objectWork[]; }

export const Timeline = ({ work = [] }: Props) => (
  <div className="career-orbit">
    <div className="section-heading-row">
      <div><span className="eyebrow">Career trajectory</span><Heading className="mt-3">The journey so far</Heading></div>
      <p>Every role added a new layer—from realtime experiences to product ownership.</p>
    </div>

    <div className="timeline-stage mt-7 hidden lg:block">
      <div className="timeline-arc timeline-arc-one" />
      <div className="timeline-arc timeline-arc-two" />
      <div className="timeline-arc timeline-arc-three" />
      <p className="timeline-statement">A continuous path from frontend craft to product ownership.</p>
      <div className="timeline-track">
        {work.map((item, index) => (
          <m.article key={`${item.organisation}-${item.from}`} className="timeline-stop" initial={false} whileHover={{ y: -4 }} transition={{ duration: .22 }}>
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
    <div className="timeline-meta"><span><FiMapPin /> India & remote</span><span><FiArrowUpRight /> Frontend to product leadership</span></div>
  </div>
);
