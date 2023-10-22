import { Open_Sans } from "next/font/google";
import { HeaderComponent } from "../component/header.section";
import { OverviewSection } from "../component/overview.section";
import { data } from "../data";
import { WorkHistory } from "../component/workHistory.section";
import { SkillSection } from "../component/skills.section";
import { Timeline } from "../component/timeline.section";
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
      </Head>
      <main className={`px-4 md:px-40 ${openSans.className}`}>
        <HeaderComponent data={data} />
        <OverviewSection />
        <WorkHistory work={data.work} />
        <SkillSection skills={data.skills} />
        <Timeline work={data.work} />
      </main>
    </>
  );
}
