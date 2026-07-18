import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Ngày Hội Trải Nghiệm Sáng Tạo - Học qua chơi Tiểu học",
  description:
    "Chương trình dã ngoại giáo dục đặc biệt Ngày Hội Trải Nghiệm Sáng Tạo dành cho học sinh lớp 1-5 của Trung tâm ABA. Giúp các em phát triển tư duy khoa học và thực hành in tranh dân gian.",
  keywords: [
    "ngày hội trải nghiệm sáng tạo",
    "teambuilding sâu hơi",
    "in tranh đông hồ",
    "chuồn chuồn tre",
    "thực nghiệm khoa học",
    "chế tạo bộ lọc nước",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "trai-nghiem-sang-tao-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/trai-nghiem-sang-tao-tieu-hoc.json");
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

const CreativeDayPage = async () => {
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

export default CreativeDayPage;
