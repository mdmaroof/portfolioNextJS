import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiBriefcase, FiLayers, FiRadio, FiTarget } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Heading } from "./heading";
import { m } from "framer-motion";

const stats: { label: string; value: number; suffix: string; detail: string; icon: IconType; className: string }[] = [
  { label: "Experience", value: 6, suffix: "+", detail: "Years shipping production software", icon: FiBriefcase, className: "metric-coral" },
  { label: "Products", value: 10, suffix: "+", detail: "Web and mobile releases delivered", icon: FiLayers, className: "metric-blue" },
  { label: "Core domains", value: 4, suffix: "+", detail: "Realtime, analytics, maps and performance", icon: FiTarget, className: "metric-violet" },
];

const planetPaths = [
  { x: [0, 18, 0, -18, 0], y: [-5, 0, 5, 0, -5], duration: 8.5 },
  { x: [8, 0, -16, 0, 8], y: [0, 8, 0, -8, 0], duration: 10 },
  { x: [-8, 0, 17, 0, -8], y: [4, -5, 0, 7, 4], duration: 9.2 },
];

const Count = ({ value, active }: { value: number; active: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const started = performance.now();
    const tick = (now: number) => { const progress = Math.min((now - started) / 1100, 1); setCount(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);
  return <>{count}</>;
};

export const OverviewSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } }, { threshold: .25 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overview-layout">
      <m.div className="overview-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .62, ease: [0.16, 1, 0.3, 1] }}>
        <span className="eyebrow">Impact in orbit</span>
        <Heading className="mt-3">Ideas to interfaces,<br />at product scale.</Heading>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#a6a0bd] md:text-base">I move between product thinking, interface architecture, and frontend execution—keeping users at the centre of every decision.</p>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f3efff]"><FiRadio className="text-[#64e7ff]" /> Built for clarity, speed and scale <FiArrowUpRight className="text-[#ff8e7a]" /></div>
      </m.div>
      <div className="metric-system">
        <m.div className="metric-track" whileInView={{ opacity: [.48, .9, .48] }} viewport={{ amount: .2 }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <m.div className="metric-track metric-track-secondary" whileInView={{ opacity: [.22, .52, .22] }} viewport={{ amount: .2 }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: .8 }} />
        <div className="metric-center-anchor">
          <m.div className="metric-center" whileInView={{ scale: [1, 1.045, 1], y: [0, -4, 0] }} viewport={{ amount: .25 }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
            <span className="metric-center-orbit" />
            <span>Product</span><strong>Impact</strong>
          </m.div>
        </div>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const path = planetPaths[index];
          return (
            <m.article
              key={stat.label}
              className={`metric-planet ${stat.className}`}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1, x: path.x, y: path.y }}
              whileHover={{ scale: 1.035 }}
              viewport={{ amount: .3 }}
              transition={{
                opacity: { duration: .5, delay: index * .1 },
                scale: { duration: .5, delay: index * .1, ease: [0.16, 1, 0.3, 1] },
                x: { duration: path.duration, repeat: Infinity, ease: "easeInOut", delay: index * .35 },
                y: { duration: path.duration, repeat: Infinity, ease: "easeInOut", delay: index * .35 },
              }}
            >
              <div className="metric-icon"><Icon /></div>
              <strong><Count value={stat.value} active={active} />{stat.suffix}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </m.article>
          );
        })}
      </div>
    </div>
  );
};
