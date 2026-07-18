import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/merry-christmas/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/merry-christmas/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/merry-christmas/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/merry-christmas/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Merry Christmas - Ngày hội Giáng sinh ấm áp Tiểu học",
  description:
    "Chương trình lễ hội trải nghiệm Giáng sinh Merry Christmas dành cho học sinh Tiểu học của Trung tâm ABA. Giúp gắn kết tình thương yêu và đem lại niềm vui học tập mới thông qua xiếc khỉ, ảo thuật lửa.",
  keywords: [
    "merry christmas tiểu học",
    "giáng sinh ấm áp",
    "ông già noel",
    "công chúa tuyết",
    "xiếc khỉ tôn ngộ không",
    "xiếc lửa bartender",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "merry-christmas-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/merry-christmas-tieu-hoc.json");
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

const ChristmasTieuHocPage = async () => {
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

export default ChristmasTieuHocPage;
