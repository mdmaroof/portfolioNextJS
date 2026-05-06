import { Open_Sans } from "next/font/google";
import { useState } from "react";
import { HeaderComponent } from "../component/header.section";
import { OverviewSection } from "../component/overview.section";
import { data } from "../data";
import { WorkHistory } from "../component/workHistory.section";
import { SkillSection } from "../component/skills.section";
import { Timeline } from "../component/timeline.section";
import { ProjectsSection } from "../component/projects.section";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleMessageSentSuccess = () => {
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 5000);
  };

  return (
    <>
      {showSuccessToast && (
        <div className="fixed right-4 top-4 z-[60] rounded-md border border-emerald-400/40 bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-900/30">
          Message sent successfully
        </div>
      )}
      <main
        className={`${openSans.className} safe-area-main relative z-10 min-h-screen`}
      >
        <div className="mx-auto w-full max-w-6xl space-y-10 md:space-y-14">
          <section
            id="about"
            className="glass-card reveal-up rounded-2xl p-6 md:p-10"
          >
            <HeaderComponent
              data={data}
              onMessageSentSuccess={handleMessageSentSuccess}
            />
          </section>

          <section
            id="overview"
            className="glass-card reveal-up rounded-2xl p-6 md:p-10"
          >
            <OverviewSection />
          </section>

          <section
            id="experience"
            className="glass-card reveal-up rounded-2xl p-6 md:p-10"
          >
            <WorkHistory work={data.work} />
          </section>

          <section
            id="skills"
            className="glass-card reveal-up rounded-2xl p-6 md:p-10"
          >
            <SkillSection skills={data.skills} />
          </section>

          <section
            id="timeline"
            className="glass-card reveal-up rounded-2xl p-6 md:p-10"
          >
            <Timeline work={data.work} />
          </section>

          <section className="glass-card reveal-up rounded-2xl p-6 md:p-10">
            <ProjectsSection projects={data.projects} />
          </section>
        </div>
      </main>
    </>
  );
}
