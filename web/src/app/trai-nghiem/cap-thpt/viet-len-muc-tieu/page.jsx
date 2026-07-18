import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thpt/viet-len-muc-tieu/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thpt/viet-len-muc-tieu/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thpt/viet-len-muc-tieu/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thpt/viet-len-muc-tieu/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Viết Lên Mục Tiêu - Chương trình dã ngoại trải nghiệm THPT",
  description:
    "Chương trình dã ngoại giáo dục trải nghiệm Viết Lên Mục Tiêu dành riêng cho học sinh Trung học phổ thông (THPT) của Trung tâm ABA. Giúp các em thiết lập mục tiêu cuộc đời.",
  keywords: [
    "viết lên mục tiêu thpt",
    "giáo dục trải nghiệm thpt",
    "teambuilding thpt",
    "kỹ năng sống thpt",
    "mục tiêu cuộc sống",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "viet-len-muc-tieu-thpt";
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
    const filePath = path.join(process.cwd(), "src/data/pages/viet-len-muc-tieu-thpt.json");
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

const VietLenMucTieuThptPage = async () => {
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

export default VietLenMucTieuThptPage;
