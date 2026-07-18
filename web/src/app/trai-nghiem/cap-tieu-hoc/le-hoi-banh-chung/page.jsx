import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Bánh Chưng - Trải nghiệm Tết cổ truyền Tiểu học",
  description:
    "Chương trình dã ngoại Lễ Hội Bánh Chưng Xuân yêu thương dành riêng cho học sinh Tiểu học của Trung tâm ABA. Giúp các em tự tay gói bánh chưng gỗ, thi trạng nguyên thư pháp.",
  keywords: [
    "lễ hội bánh chưng tiểu học",
    "gói bánh chưng gỗ",
    "rung chuông vàng xuân",
    "thư pháp xuân",
    "hội chợ tết tiểu học",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-banh-chung-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-banh-chung-tieu-hoc.json");
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

const BanhChungTieuHocPage = async () => {
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

export default BanhChungTieuHocPage;
