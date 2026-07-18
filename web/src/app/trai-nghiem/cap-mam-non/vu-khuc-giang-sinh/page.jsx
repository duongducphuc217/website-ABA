import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Vũ Khúc Giáng Sinh - Lễ hội Noel diệu kỳ Mầm non",
  description:
    "Chương trình dã ngoại Noel Vũ Khúc Giáng Sinh dành riêng cho trẻ mầm non của Trung tâm ABA. Bé được giao lưu ông già Noel, xem xiếc hề, xiếc thú và Tôn Ngộ Không.",
  keywords: [
    "vũ khúc giáng sinh mầm non",
    "giao lưu ông già noel mầm non",
    "xiếc thú mầm non",
    "xiếc khỉ mầm non",
    "xiếc chó mầm non",
    "tôn ngộ không ảo thuật mầm non",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "vu-khuc-giang-sinh-mam-non";
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
    const filePath = path.join(process.cwd(), "src/data/pages/vu-khuc-giang-sinh-mam-non.json");
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

const ChristmasDayMamNonPage = async () => {
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

export default ChristmasDayMamNonPage;
