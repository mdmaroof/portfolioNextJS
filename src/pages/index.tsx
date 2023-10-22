import { Open_Sans } from "next/font/google";
import { HeaderComponent } from "./component/header.section";
import { OverviewSection } from "./component/overview.section";
import { data } from "./data";
import { WorkHistory } from "./component/workHistory.section";
import { SkillSection } from "./component/skills.section";

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

      <div className="pb-20">
        <ul className="timeline">
          {/* individual item */}
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <span className="flag text-black">Maroof</span>
                <span className="time-wrapper">
                  <div className="time !bg-red-600">Feb 2015</div>
                </span>
              </div>
              <div className="desc text-black">
                Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate
                exercitation deserunt proident.
              </div>
            </div>
          </li>

          {/* item 2 */}
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="hexa"></span>
                <span className="flag text-black">Maroof</span>
                <span className="time-wrapper">
                  <span className="time !bg-red-600">Feb 2015</span>
                </span>
              </div>
              <div className="desc text-black">
                Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate
                exercitation deserunt proident.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
