import { Open_Sans } from "next/font/google";
import { HeaderComponent } from "./component/header.section";
import { OverviewSection } from "./component/overview.section";
import { data } from "./data";
import { WorkHistory } from "./component/workHistory.section";
import { SkillSection } from "./component/skills.section";
import { Timeline } from "./component/timeline.section";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`px-40 ${openSans.className}`}>
      <HeaderComponent data={data} />
      <OverviewSection />
      <WorkHistory work={data.work} />
      <SkillSection skills={data.skills} />
      <Timeline work={data.work} />
    </main>
  );
}
