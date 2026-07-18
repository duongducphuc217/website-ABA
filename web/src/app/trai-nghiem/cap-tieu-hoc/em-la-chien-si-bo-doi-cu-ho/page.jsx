import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Em Là Chiến Sĩ Bộ Đội Cụ Hồ - Trải nghiệm quân ngũ Tiểu học",
  description:
    "Chương trình dã ngoại giáo dục quốc phòng Em Là Chiến Sĩ Bộ Đội Cụ Hồ dành cho học sinh Tiểu học của Trung tâm ABA. Giúp các em rèn nếp sống kỷ luật quân đội.",
  keywords: [
    "em là chiến sĩ bộ đội cụ hồ",
    "kỷ luật quân ngũ tiểu học",
    "ngụy trang đặc công",
    "cứu thương quân y",
    "công binh dò mìn",
    "gấp chăn màn nội vụ",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "em-la-chien-si-bo-doi-cu-ho-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/em-la-chien-si-bo-doi-cu-ho-tieu-hoc.json");
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

const SoldierDayPage = async () => {
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

export default SoldierDayPage;
