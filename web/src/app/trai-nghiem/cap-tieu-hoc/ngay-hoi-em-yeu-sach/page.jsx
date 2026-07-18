import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Ngày Hội Em Yêu Sách - Trải nghiệm văn hóa đọc Tiểu học",
  description:
    "Chương trình Ngày Hội Em Yêu Sách dành cho học sinh Tiểu học của Trung tâm ABA. Bồi dưỡng tình yêu sách, phát triển văn hóa đọc thông qua các trạm trải nghiệm vẽ bìa sách, đố vui.",
  keywords: [
    "ngày hội em yêu sách",
    "đọc sách thông minh",
    "đọc sách tiểu học",
    "đường tăng thỉnh kinh phao hơi",
    "sáng tác bìa sách",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "ngay-hoi-em-yeu-sach-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/ngay-hoi-em-yeu-sach-tieu-hoc.json");
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

const BookDayPage = async () => {
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

export default BookDayPage;
