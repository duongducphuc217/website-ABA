import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/team-work-day/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thcs/team-work-day/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thcs/team-work-day/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/team-work-day/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Ngày Hội Team Work Day - Chương trình giáo dục trải nghiệm kỹ năng nhóm THCS",
  description:
    "Chương trình giáo dục trải nghiệm phát triển kỹ năng làm việc nhóm dành cho học sinh THCS của Trung tâm ABA. Giúp các em gắn kết đồng đội, nâng cao trách nhiệm và phát triển năng lực chung.",
  keywords: [
    "team work day",
    "ngày hội team work day",
    "giáo dục trải nghiệm thcs",
    "kỹ năng làm việc nhóm thcs",
    "teambuilding học sinh trung học",
    "trung tâm aba",
    "kỹ năng sống thcs"
  ],
};

async function getPageData() {
  const slug = "team-work-day-thcs";
  try {
    const { data, error } = await supabase
      .from("pages")
      .select("sections")
      .eq("slug", slug)
      .single();

    if (!error && data && data.sections) {
      return data.sections;
    }
  } catch (err) {
    console.warn("Supabase fetch failed on server side, reading local file:", err.message);
  }

  // Fallback to local JSON file
  try {
    const filePath = path.join(process.cwd(), "src/data/pages/team-work-day-thcs.json");
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      const parsed = JSON.parse(fileData);
      return parsed.sections;
    }
  } catch (err) {
    console.error("Lỗi đọc file local trên server:", err);
  }
  return null;
}

const TeamWorkDayPage = async () => {
  const pageData = await getPageData();

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800">
      <Animation />
      <HeaderThree />
      <HeroBanner data={pageData?.hero} />
      <CoreObjectives data={pageData?.objectives} />
      <Challenges data={pageData?.challenges} />
      <ProgramTimeline data={pageData?.timeline} />
      <div id="tu-van" className="bg-white">
        <ContactFormABA />
      </div>
      <FooterFour />
    </div>
  );
};

export default TeamWorkDayPage;
