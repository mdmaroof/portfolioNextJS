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
        <div className="metric-center"><span>Product</span><strong>Impact</strong></div>
        {stats.map((stat, index) => { const Icon = stat.icon; return <m.article key={stat.label} className={`metric-planet ${stat.className}`} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1, y: [0, -5, 0] }} whileHover={{ y: -8, scale: 1.025 }} viewport={{ amount: .35 }} transition={{ opacity: { duration: .5, delay: index * .1 }, scale: { duration: .5, delay: index * .1, ease: [0.16, 1, 0.3, 1] }, y: { duration: 4.5 + index, repeat: Infinity, ease: "easeInOut", delay: index * .45 } }}><div className="metric-icon"><Icon /></div><strong><Count value={stat.value} active={active} />{stat.suffix}</strong><span>{stat.label}</span><p>{stat.detail}</p></m.article>; })}
      </div>
    </div>
  );
};
