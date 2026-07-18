import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Ngày Hội Trải Nghiệm Kỳ Thú - Mầm non năng động sáng tạo",
  description:
    "Chương trình Ngày Hội Trải Nghiệm Kỳ Thú dã ngoại học đường cho bé Mầm non của Trung tâm ABA. Giúp các em phát triển thể chất và sáng tạo nghệ thuật.",
  keywords: [
    "trải nghiệm kỳ thú mầm non",
    "xe chòi chân mầm non",
    "nhà phao hơi mầm non",
    "vẽ tranh ngón tay",
    "kèn ống hút",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "trai-nghiem-ky-thu-mam-non";
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
    const filePath = path.join(process.cwd(), "src/data/pages/trai-nghiem-ky-thu-mam-non.json");
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

const ExperienceDayMamNonPage = async () => {
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

export default ExperienceDayMamNonPage;
