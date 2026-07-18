import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Trung Thu - Trung thu gắn kết, Tết đoàn viên Tiểu học",
  description:
    "Chương trình đại nhạc hội lễ hội trung thu dã ngoại dành cho học sinh Tiểu học của Trung tâm ABA. Hoạt cảnh chú Cuội AI độc đáo, xiếc ảo thuật, làm bánh làm đèn ông sao.",
  keywords: [
    "lễ hội trung thu tiểu học",
    "hoạt cảnh cuội ai",
    "múa lân sư rồng trung thu",
    "làm bánh dẻo",
    "làm đèn ông sao",
    "nặn tò he",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-trung-thu-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-trung-thu-tieu-hoc.json");
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

const TrungThuTieuHocPage = async () => {
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

export default TrungThuTieuHocPage;
