import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

function getLocalPagePath(slug) {
  // Clean slug to prevent path traversal
  const safeSlug = slug.replace(/[^a-zA-Z0-9-]/g, "");
  return path.join(process.cwd(), `src/data/pages/${safeSlug}.json`);
}

function readLocalPage(slug) {
  try {
    const filePath = getLocalPagePath(slug);
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error(`Lỗi đọc trang ${slug} cục bộ:`, error);
  }
  return null;
}

function writeLocalPage(slug, data) {
  try {
    const filePath = getLocalPagePath(slug);
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`Lỗi ghi trang ${slug} cục bộ:`, error);
    return false;
  }
}

function generateDefaultPage(slug) {
  const titleWords = slug
    .split("-")
    .map(word => {
      if (word === "thpt") return "THPT";
      if (word === "thcs") return "THCS";
      if (word === "mam" || word === "non") return word === "mam" ? "Mầm" : "Non";
      if (word === "tieu" || word === "hoc") return word === "tieu" ? "Tiểu" : "Học";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return {
    title: titleWords,
    meta_title: `${titleWords} - Chương trình dã ngoại trải nghiệm ABA`,
    meta_description: `Chương trình dã ngoại trải nghiệm giáo dục kỹ năng sống ${titleWords} cho học sinh, tổ chức bởi Trung tâm ABA.`,
    meta_keywords: [slug, "dã ngoại trải nghiệm", "trung tâm aba"],
    sections: {
      hero: {
        kicker: "Chương Trình Giáo Dục Trải Nghiệm",
        heading: titleWords.toUpperCase(),
        subtitle: `Học sinh tham gia dã ngoại hoạt động trải nghiệm thực hành giáo dục kỹ năng sống và phẩm chất bổ ích.`,
        duration: "1 buổi",
        target: slug.includes("mam-non") ? "Học sinh Mầm non" : slug.includes("tieu-hoc") ? "Học sinh Tiểu học" : slug.includes("thcs") ? "Học sinh THCS" : "Học sinh THPT",
        location: "Tại trường",
        bgImage: "/assets/images/placeholder.png"
      },
      objectives: {
        kicker: "MỤC TIÊU & Ý NGHĨA",
        heading: "Kết Quả Đạt Được Của Học Sinh",
        subtitle: "Thực hiện các mục tiêu giáo dục năng lực và phẩm chất theo khung chương trình dã ngoại trải nghiệm giáo dục 2018.",
        items: [
          {
            title: "Phẩm Chất",
            description: "Bồi dưỡng tinh thần tích cực, tự lập và lòng tự tin cho học sinh.",
            points: ["Học sinh suy nghĩ lạc quan và yêu bản thân", "Gia tăng tình cảm yêu quý thầy cô, gia đình"]
          },
          {
            title: "Năng Lực Chung",
            description: "Rèn luyện các kỹ năng giao tiếp và làm việc nhóm dã ngoại.",
            points: ["Kỹ năng truyền tải thông điệp", "Hợp tác ăn ý với bạn bè đồng đội"]
          },
          {
            title: "Năng Lực Đặc Thù",
            description: "Thúc đẩy các kỹ năng vận động thể chất và hướng nghiệp xã hội.",
            points: ["Kỹ năng tự vệ an toàn dã ngoại", "Vượt chướng ngại vật khéo léo"]
          }
        ]
      },
      challenges: {
        kicker: "TRẠM TRẢI NGHIỆM",
        heading: "Các Chặng Trải Nghiệm Giáo Dục",
        subtitle: "Các hoạt động thực hành kỹ năng sống và teambuilding vận động sôi nổi.",
        items: [
          {
            title: "Trải nghiệm 1: Khởi động hoạt náo",
            subtitle: "Khởi động cùng MC vui vẻ",
            image: "/assets/images/placeholder.png",
            badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
            description: "MC tổ chức hoạt náo tập thể bùng nổ, rèn luyện sự nhanh nhẹn và khả năng tương tác hòa nhập tập thể."
          },
          {
            title: "Trải nghiệm 2: Teambuilding đồng đội",
            subtitle: "Hợp lực chinh phục mục tiêu",
            image: "/assets/images/placeholder.png",
            badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
            description: "Học sinh phối hợp chặt chẽ, hỗ trợ lẫn nhau vượt qua các thử thách liên hoàn để giành chiến thắng."
          }
        ]
      }
    }
  };
}

// GET: Lấy nội dung trang theo slug
export async function GET(request, { params }) {
  const { slug } = await params;

  try {
    const { data, error } = await supabase
      .from("pages")
      .select("*")
      .eq("slug", slug)
      .single();

    if (!error && data) {
      return NextResponse.json({ success: true, fromDb: true, page: data });
    }
  } catch (err) {
    console.warn(`Supabase fetch failed for page ${slug}, falling back to local files:`, err.message);
  }

  // Fallback
  let localPage = readLocalPage(slug);
  if (!localPage) {
    localPage = generateDefaultPage(slug);
    writeLocalPage(slug, localPage);
  }

  return NextResponse.json({ 
    success: true, 
    fromDb: false, 
    page: {
      slug,
      title: localPage.title,
      meta_title: localPage.meta_title,
      meta_description: localPage.meta_description,
      meta_keywords: localPage.meta_keywords,
      sections: localPage.sections
    }
  });
}

// POST: Cập nhật nội dung trang
export async function POST(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  const { slug } = await params;

  try {
    const body = await request.json();
    const { title, meta_title, meta_description, meta_keywords, sections } = body;

    const pageData = {
      title,
      meta_title,
      meta_description,
      meta_keywords,
      sections
    };

    // Ghi vào file local trước
    writeLocalPage(slug, pageData);

    // Lưu lên Supabase
    try {
      const dbRecord = {
        slug,
        title,
        meta_title,
        meta_description,
        meta_keywords,
        sections,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from("pages")
        .upsert(dbRecord, { onConflict: "slug" });

      if (error) {
        console.warn("Lưu trang lên Supabase thất bại, đã lưu local file:", error);
        return NextResponse.json({ 
          success: true, 
          fromDb: false, 
          warning: "Lưu lên Supabase thất bại, dữ liệu đã được lưu cục bộ!" 
        });
      }
    } catch (dbErr) {
      console.warn("Supabase database error:", dbErr);
      return NextResponse.json({ 
        success: true, 
        fromDb: false, 
        warning: "Ghi nhận database lỗi, dữ liệu đã được lưu cục bộ!" 
      });
    }

    return NextResponse.json({ success: true, fromDb: true });
  } catch (error) {
    console.error(`Lỗi cập nhật trang ${slug}:`, error);
    return NextResponse.json({ success: false, error: "Đã xảy ra lỗi hệ thống!" }, { status: 500 });
  }
}
