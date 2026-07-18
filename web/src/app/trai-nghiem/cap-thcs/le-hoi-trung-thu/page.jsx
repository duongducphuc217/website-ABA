import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/le-hoi-trung-thu/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thcs/le-hoi-trung-thu/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thcs/le-hoi-trung-thu/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/le-hoi-trung-thu/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Trung Thu - Ngày hội trải nghiệm trung thu gắn kết THCS",
  description:
    "Chương trình lễ hội trải nghiệm Tết Trung Thu dành cho học sinh THCS của Trung tâm ABA. Giúp bồi đắp tình đoàn kết, chia sẻ, khơi dậy tinh thần yêu nét đẹp văn hóa truyền thống dân tộc.",
  keywords: [
    "lễ hội trung thu",
    "trải nghiệm trung thu thcs",
    "chú cuội ai",
    "làm đèn ông sao",
    "làm bánh dẻo",
    "nặn tò he",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-trung-thu-thcs";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-trung-thu-thcs.json");
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

const MidAutumnFestivalPage = async () => {
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

export default MidAutumnFestivalPage;
