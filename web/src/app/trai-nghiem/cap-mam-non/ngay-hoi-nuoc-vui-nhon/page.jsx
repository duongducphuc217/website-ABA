import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Ngày Hội Nước Vui Nhộn - Lễ hội nước sảng khoái Mầm non",
  description:
    "Chương trình dã ngoại Lễ Hội Nước Ngày Hội Nước Vui Nhộn dành riêng cho trẻ Mầm non của Trung tâm ABA. Bé được thỏa sức vui chơi cầu trượt nước hơi, súng nước.",
  keywords: [
    "ngày hội nước vui nhộn mầm non",
    "lễ hội nước mầm non",
    "cầu trượt nước mầm non",
    "tay súng nước mầm non",
    "đua thuyền rùa hơi mầm non",
    "ma trận bong bóng xà phòng mầm non",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "ngay-hoi-nuoc-vui-nhon-mam-non";
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
    const filePath = path.join(process.cwd(), "src/data/pages/ngay-hoi-nuoc-vui-nhon-mam-non.json");
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

const SplashDayMamNonPage = async () => {
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

export default SplashDayMamNonPage;
