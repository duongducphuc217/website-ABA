import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/viet-len-muc-tieu/HeroBanner";
import CoreValues from "@/components/trai-nghiem/cap-thcs/viet-len-muc-tieu/CoreValues";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/viet-len-muc-tieu/ProgramTimeline";
import TeamBuildingGallery from "@/components/trai-nghiem/cap-thcs/viet-len-muc-tieu/TeamBuildingGallery";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Viết Lên Mục Tiêu Năm Học Mới - Chương trình giáo dục trải nghiệm THCS",
  description:
    "Chương trình giáo dục trải nghiệm đặc biệt dành cho học sinh THCS của Trung tâm ABA. Giúp các em bứt phá giới hạn, rèn luyện kỹ năng và tự tin thiết lập mục tiêu học tập, cuộc sống ngay đầu năm học.",
  keywords: [
    "viết lên mục tiêu",
    "viết lên mục tiêu năm học mới",
    "giáo dục trải nghiệm",
    "teambuilding học sinh thcs",
    "kỹ năng sống thcs",
    "trung tâm aba",
    "hoạt động ngoại khóa thcs"
  ],
};

async function getPageData() {
  const slug = "viet-len-muc-tieu-thcs";
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
    const filePath = path.join(process.cwd(), "src/data/pages/viet-len-muc-tieu-thcs.json");
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

const page = async () => {
  const pageData = await getPageData();

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800">
      <Animation />
      <HeaderThree />
      <HeroBanner data={pageData?.hero} />
      <CoreValues data={pageData?.objectives} />
      <TeamBuildingGallery data={pageData?.gallery || pageData?.challenges} />
      <ProgramTimeline data={pageData?.timeline} />
      <div id="tu-van" className="bg-white">
        <ContactFormABA />
      </div>
      <FooterFour />
    </div>
  );
};

export default page;
