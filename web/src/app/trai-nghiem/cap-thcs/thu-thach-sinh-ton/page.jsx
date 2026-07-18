import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/thu-thach-sinh-ton/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thcs/thu-thach-sinh-ton/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thcs/thu-thach-sinh-ton/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/thu-thach-sinh-ton/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Thử Thách Sinh Tồn - Chương trình giáo dục trải nghiệm kỹ năng sinh tồn THCS",
  description:
    "Chương trình giáo dục trải nghiệm kỹ năng sinh tồn thực tế dành cho học sinh THCS của Trung tâm ABA. Giúp học sinh học cách nhóm lửa, lọc nước, đọc la bàn và vượt chướng ngại vật teambuilding.",
  keywords: [
    "thử thách sinh tồn",
    " survival challenge",
    "kỹ năng sinh tồn thcs",
    "teambuilding sinh tồn",
    "học cách tạo lửa thcs",
    "lọc nước sinh tồn",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "thu-thach-sinh-ton-thcs";
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
    const filePath = path.join(process.cwd(), "src/data/pages/thu-thach-sinh-ton-thcs.json");
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

const SurvivalChallengePage = async () => {
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

export default SurvivalChallengePage;
