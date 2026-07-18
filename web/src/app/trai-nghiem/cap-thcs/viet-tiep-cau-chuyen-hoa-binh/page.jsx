import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Viết Tiếp Câu Chuyện Hòa Bình - Chương trình giáo dục trải nghiệm lịch sử THCS",
  description:
    "Chương trình giáo dục địa phương trải nghiệm lịch sử Việt Nam dành cho học sinh THCS của Trung tâm ABA. Giúp bồi dưỡng tinh thần yêu nước, tự hào dân tộc và lòng biết ơn thế hệ đi trước.",
  keywords: [
    "viết tiếp câu chuyện hòa bình",
    "giáo dục địa phương thcs",
    "trải nghiệm lịch sử",
    "trung tâm aba",
    "đắp chiến lũy",
    "trung đoàn thủ đô",
    "bắn tên lửa nước"
  ],
};

async function getPageData() {
  const slug = "viet-tiep-cau-chuyen-hoa-binh-thcs";
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
    const filePath = path.join(process.cwd(), "src/data/pages/viet-tiep-cau-chuyen-hoa-binh-thcs.json");
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

const PeaceStoryPage = async () => {
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

export default PeaceStoryPage;
