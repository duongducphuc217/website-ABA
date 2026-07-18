import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import HeroBanner from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/HeroBanner";
import CoreObjectives from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/CoreObjectives";
import Challenges from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/Challenges";
import ProgramTimeline from "@/components/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/ProgramTimeline";
import ContactFormABA from "@/components/ContactFormABA";
import Animation from "@/helper/Animation";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Lễ Hội Halloween - Ngày hội hóa trang Tiểu học",
  description:
    "Chương trình lễ hội trải nghiệm hóa trang Halloween dành cho học sinh Tiểu học của Trung tâm ABA. Giúp bồi dưỡng sự tự tin trước đám đông qua các tiết mục văn nghệ, trò chơi.",
  keywords: [
    "lễ hội halloween tiểu học",
    "hóa trang halloween",
    "vẽ mặt nạ halloween",
    "twilight hoàng hôn đỏ",
    "kịch câm handmine",
    "trung tâm aba"
  ],
};

async function getPageData() {
  const slug = "le-hoi-halloween-tieu-hoc";
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
    const filePath = path.join(process.cwd(), "src/data/pages/le-hoi-halloween-tieu-hoc.json");
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

const HalloweenTieuHocPage = async () => {
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

export default HalloweenTieuHocPage;
