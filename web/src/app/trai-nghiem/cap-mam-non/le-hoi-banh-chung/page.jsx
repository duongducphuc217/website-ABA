import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-mam-non/le-hoi-banh-chung/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-mam-non/le-hoi-banh-chung/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-mam-non/le-hoi-banh-chung/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-mam-non/le-hoi-banh-chung/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Bánh Chưng - Trải nghiệm Tết cổ truyền Mầm non",
  description:
    "Chương trình dã ngoại Lễ Hội Bánh Chưng Xuân yêu thương dành riêng cho học sinh Mầm non của Trung tâm ABA. Giúp các bé tập làm bánh chưng gỗ và đi chợ quê.",
  keywords: [
    "lễ hội bánh chưng mầm non",
    "gói bánh chưng mầm non",
    "chợ quê mầm non",
    "trải nghiệm tết mầm non",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-banh-chung-mam-non";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-banh-chung-mam-non.json");
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

const BanhChungMamNonPage = async () => {
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

export default BanhChungMamNonPage;
