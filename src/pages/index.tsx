import Head from "next/head";
import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Navbar } from "../component/navbar.section";
import { HeaderComponent } from "../component/header.section";
import { OverviewSection } from "../component/overview.section";
import { data } from "../data";
import { WorkHistory } from "../component/workHistory.section";
import { SkillSection } from "../component/skills.section";
import { Timeline } from "../component/timeline.section";
import { ProjectsSection } from "../component/projects.section";
import { Footer } from "../component/footer.section";

export default function Home() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleMessageSentSuccess = () => {
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 5000);
  };

  // Scroll-triggered reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(
      ".reveal-up, .reveal-left"
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Mohd Maroof | Senior Frontend Developer</title>
        <meta
          name="description"
          content="Senior Frontend Developer with 6+ years of experience building scalable web and mobile applications using React, Next.js, and React Native."
        />
      </Head>

      <Navbar />

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed right-4 top-20 z-[60] rounded-lg border border-emerald-400/30 bg-emerald-600/90 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <FiCheck className="text-emerald-200" />
            Message sent successfully
          </div>
        </div>
      )}

      <main
        className="safe-area-main relative z-10 min-h-screen pt-16"
      >
        <div className="mx-auto w-full max-w-7xl space-y-5 md:space-y-7">
          <section
            id="about"
            className="orbital-section hero-section reveal-up"
          >
            <HeaderComponent
              data={data}
              onMessageSentSuccess={handleMessageSentSuccess}
            />
          </section>

          <section
            id="overview"
            className="orbital-section reveal-up"
          >
            <OverviewSection />
          </section>

          <section
            id="experience"
            className="orbital-section reveal-up"
          >
            <WorkHistory work={data.work} />
          </section>

          <section
            id="skills"
            className="orbital-section reveal-up"
          >
            <SkillSection skills={data.skills} />
          </section>

          <section
            id="timeline"
            className="orbital-section reveal-up"
          >
            <Timeline work={data.work} />
          </section>

          <section
            id="projects"
            className="orbital-section reveal-up"
          >
            <ProjectsSection projects={data.projects as any} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
