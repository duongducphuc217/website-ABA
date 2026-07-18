import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Viết Tiếp Câu Chuyện Hòa Bình - Trải nghiệm lịch sử Tiểu học",
  description:
    "Chương trình giáo dục trải nghiệm Viết Tiếp Câu Chuyện Hòa Bình dành cho học sinh Tiểu học của Trung tâm ABA. Giúp các em bồi đắp lòng yêu nước thông qua các hoạt động lịch sử hấp dẫn.",
  keywords: [
    "viết tiếp câu chuyện hòa bình tiểu học",
    "gấp mũ ca lô",
    "đấu trường trí tuệ bản lĩnh",
    "sống mãi với thủ đô",
    "tiến về sài gòn phao hơi",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "viet-tiep-cau-chuyen-hoa-binh-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/viet-tiep-cau-chuyen-hoa-binh-tieu-hoc.json");
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

const PeaceDayTieuHocPage = async () => {
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

export default PeaceDayTieuHocPage;
