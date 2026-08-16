import Head from "next/head";
import { LazyMotion, MotionConfig, domAnimation, m, useScroll } from "framer-motion";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Footer } from "../component/footer.section";
import { HeaderComponent } from "../component/header.section";
import { Navbar } from "../component/navbar.section";
import { OverviewSection } from "../component/overview.section";
import { PlanetCursor } from "../component/planetCursor";
import { ProjectsSection } from "../component/projects.section";
import { SkillSection } from "../component/skills.section";
import { Timeline } from "../component/timeline.section";
import { WorkHistory } from "../component/workHistory.section";
import { data } from "../data";

const sectionMotion = {
  hidden: { opacity: 0, y: 34, scale: .992 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: .72, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Home() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const { scrollYProgress } = useScroll();
  const handleMessageSentSuccess = () => { setShowSuccessToast(true); window.setTimeout(() => setShowSuccessToast(false), 5000); };

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Head><title>Mohd Maroof | Senior Frontend Developer</title><meta name="description" content="Senior Frontend Developer with 6+ years of experience building scalable web and mobile applications using React, Next.js, and React Native." /></Head>
        <m.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
        <Navbar />
        <PlanetCursor />
        {showSuccessToast && <m.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="fixed right-4 top-20 z-[60] rounded-lg border border-emerald-400/30 bg-emerald-600/90 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 backdrop-blur-sm"><div className="flex items-center gap-2"><FiCheck className="text-emerald-200" />Message sent successfully</div></m.div>}

        <main className="safe-area-main relative z-10 min-h-screen">
          <div className="mx-auto w-full max-w-7xl space-y-5 md:space-y-7">
            <m.section id="about" className="orbital-section hero-section" initial="hidden" animate="visible" variants={sectionMotion}><HeaderComponent data={data} onMessageSentSuccess={handleMessageSentSuccess} /></m.section>
            <m.section id="overview" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={sectionMotion}><OverviewSection /></m.section>
            <m.section id="experience" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} variants={sectionMotion}><WorkHistory work={data.work} /></m.section>
            <m.section id="skills" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={sectionMotion}><SkillSection skills={data.skills} /></m.section>
            <m.section id="timeline" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .16 }} variants={sectionMotion}><Timeline work={data.work} /></m.section>
            <m.section id="projects" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} variants={sectionMotion}><ProjectsSection projects={data.projects as any} /></m.section>
          </div>
        </main>
        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}><Footer /></m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
