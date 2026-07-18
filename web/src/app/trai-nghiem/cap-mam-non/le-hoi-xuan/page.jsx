import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-mam-non/le-hoi-xuan/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-mam-non/le-hoi-xuan/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-mam-non/le-hoi-xuan/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-mam-non/le-hoi-xuan/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Xuân Mầm Non - Tinh hoa văn hóa Tết Việt",
  description:
    "Chương trình dã ngoại Lễ Hội Xuân Mầm Non Đất Việt dành riêng cho trẻ mầm non của Trung tâm ABA. Bé được nặn tò he, in tranh Đông Hồ và vui hội chợ tết.",
  keywords: [
    "lễ hội xuân mầm non",
    "mầm non đất việt",
    "nặn tò he mầm non",
    "in tranh đông hồ mầm non",
    "chợ tết mầm non",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-xuan-mam-non";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-xuan-mam-non.json");
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

const SpringDayMamNonPage = async () => {
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

export default SpringDayMamNonPage;
