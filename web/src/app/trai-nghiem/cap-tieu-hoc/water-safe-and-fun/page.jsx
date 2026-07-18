import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Water Safe And Fun - Giáo dục an toàn nước Tiểu học",
  description:
    "Chương trình giáo dục kỹ năng phòng chống đuối nước Water Safe And Fun dành riêng cho học sinh Tiểu học của Trung tâm ABA. Giúp rèn luyện kỹ năng tự bảo vệ mình dưới nước.",
  keywords: [
    "water safe and fun tiểu học",
    "biệt đội cứu hộ nhí",
    "cầu phao bồng bềnh",
    "đua thuyền tự chế",
    "đại chiến súng nước",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "water-safe-and-fun-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/water-safe-and-fun-tieu-hoc.json");
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

const WaterSafeFunPage = async () => {
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

export default WaterSafeFunPage;
