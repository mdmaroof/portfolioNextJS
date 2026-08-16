import { useEffect, useRef, useState } from "react";
import { Heading } from "./heading";
import { FiBriefcase, FiLayers, FiTarget } from "react-icons/fi";
import type { IconType } from "react-icons";

interface Stat {
  label: string;
  endValue: number;
  suffix: string;
  icon: IconType;
  accentClass: string;
  hoverBorderClass: string;
  subheading: string;
}

const stats: Stat[] = [
  {
    label: "Experience",
    endValue: 6,
    suffix: "+",
    icon: FiBriefcase,
    accentClass: "text-cyan-300",
    hoverBorderClass: "hover:border-cyan-400/30",
    subheading: "years building production apps",
  },
  {
    label: "Major Products",
    endValue: 10,
    suffix: "+",
    icon: FiLayers,
    accentClass: "text-violet-300",
    hoverBorderClass: "hover:border-violet-400/30",
    subheading: "delivered across web and mobile",
  },
  {
    label: "Core Domains",
    endValue: 4,
    suffix: "+",
    icon: FiTarget,
    accentClass: "text-fuchsia-300",
    hoverBorderClass: "hover:border-fuchsia-400/30",
    subheading: "real-time, analytics, dashboards, performance",
  },
];

const StatCard = ({ stat, inView }: { stat: Stat; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeOutExpo =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * stat.endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(stat.endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, stat.endValue]);

  return (
    <div
      className={`h-full rounded-2xl border border-white/[0.07] bg-slate-950/45 p-5 md:p-6 glow-hover transition-colors duration-300 ${stat.hoverBorderClass}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] ${stat.accentClass}`}>
            <Icon className="h-5 w-5" />
          </span>
          <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 md:text-sm">
            {stat.label}
          </div>
        </div>
        <div className={`text-4xl font-bold ${stat.accentClass}`}>
          {count}
          {stat.suffix}
        </div>
      </div>
      <div className="mt-3 text-sm leading-6 text-slate-300">
        {stat.subheading}
      </div>
    </div>
  );
};

export const OverviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <Heading>Overview</Heading>
      <div className="mt-3 text-sm text-slate-300 md:text-base">
        Key highlights from projects, delivery, and technical ownership.
      </div>
      <div className="grid grid-cols-1 items-stretch gap-4 pt-6 md:grid-cols-3 md:pt-8">
        {stats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} inView={inView} />
        ))}
      </div>
    </div>
  );
};
