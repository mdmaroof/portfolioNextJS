import { Open_Sans } from "next/font/google";
import { HeaderComponent } from "../component/header.section";
import { OverviewSection } from "../component/overview.section";
import { data } from "../data";
import { WorkHistory } from "../component/workHistory.section";
import { SkillSection } from "../component/skills.section";
import { Timeline } from "../component/timeline.section";
import { ProjectsSection } from "../component/projects.section";
import Head from "next/head";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohd Maroof</title>
        <meta
          name="description"
          content="Mohd Maroof - Senior Frontend Developer portfolio and resume"
        />
      </Head>
      <main
        className={`${openSans.className} relative z-10 min-h-screen px-4 py-8 md:px-8 md:py-12`}
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
