import { Open_Sans } from "next/font/google";
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
  return (
    <>
      <main
        className={`${openSans.className} safe-area-main relative z-10 min-h-screen`}
      >
        <div className="mx-auto w-full max-w-6xl space-y-10 md:space-y-14">
          <section
            id="about"
            className="glass-card reveal-up rounded-2xl p-6 md:p-10"
          >
            <HeaderComponent data={data} />
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
