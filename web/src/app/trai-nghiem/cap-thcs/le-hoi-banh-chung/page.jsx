import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-thcs/le-hoi-banh-chung/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-thcs/le-hoi-banh-chung/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-thcs/le-hoi-banh-chung/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-thcs/le-hoi-banh-chung/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Bánh Chưng - Trải nghiệm văn hóa Tết cổ truyền học sinh THCS",
  description:
    "Chương trình lễ hội bánh chưng trải nghiệm văn hóa Tết Việt dành cho học sinh THCS của Trung tâm ABA. Giúp học sinh học cách tự tay gói bánh chưng bằng khuôn gỗ, viết thư pháp, tò he.",
  keywords: [
    "lễ hội bánh chưng",
    "gói bánh chưng thcs",
    "trải nghiệm tết cổ truyền",
    "chợ quê ngày tết",
    "sumo hơi",
    "rung chuông vàng tết",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-banh-chung-thcs";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-banh-chung-thcs.json");
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

const ChungCakeFestivalPage = async () => {
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

export default ChungCakeFestivalPage;
