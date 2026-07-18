import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Thoát Hiểm Khỏi Đám Cháy - Huấn luyện kỹ năng sinh tồn PCCC học sinh THCS",
  description:
    "Huấn luyện kỹ năng phòng cháy chữa cháy (PCCC), sơ cứu thương và thoát hiểm khỏi đám cháy dành cho học sinh THCS của Trung tâm ABA theo thông tư 06/2022/TT-BGDĐT.",
  keywords: [
    "thoát hiểm khỏi đám cháy",
    "kỹ năng pccc thcs",
    "đu dây hạ chậm",
    "đi khom trong khói",
    "sơ cứu vết thương",
    "trung tâm aba",
    "thông tư 06 pccc"
  ],
};

async function getPageData() {
  const slug = "thoat-hiem-khoi-dam-chay-thcs";
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
    const filePath = path.join(process.cwd(), "src/data/pages/thoat-hiem-khoi-dam-chay-thcs.json");
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

const FireEscapePage = async () => {
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

export default FireEscapePage;
