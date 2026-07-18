import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";
import fs from "fs";
import path from "path";

const MENU_FILE_PATH = path.join(process.cwd(), "src/data/menu.json");

function readLocalMenu() {
  try {
    if (fs.existsSync(MENU_FILE_PATH)) {
      const fileData = fs.readFileSync(MENU_FILE_PATH, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error("Lỗi đọc menu file local:", error);
  }
  return [];
}

function writeLocalMenu(data) {
  try {
    fs.writeFileSync(MENU_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Lỗi ghi menu file local:", error);
    return false;
  }
}

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy menu hệ thống
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("settings")
      .select("value")
      .eq("key", "navigation_menu")
      .single();

    if (!error && data && data.value) {
      return NextResponse.json({ success: true, fromDb: true, menu: data.value });
    }
  } catch (err) {
    console.warn("Supabase fetch failed, falling back to local files:", err.message);
  }

  // Fallback
  const menu = readLocalMenu();
  return NextResponse.json({ success: true, fromDb: false, menu });
}

// POST: Lưu cấu trúc menu mới
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { menu } = body;

    if (!Array.isArray(menu)) {
      return NextResponse.json({ success: false, error: "Định dạng menu không hợp lệ!" }, { status: 400 });
    }

    // Ghi vào file local trước
    writeLocalMenu(menu);

    // Lưu vào Supabase settings
    try {
      const { error } = await supabase
        .from("settings")
        .upsert({ key: "navigation_menu", value: menu }, { onConflict: "key" });

      if (error) {
        console.warn("Lưu menu lên Supabase thất bại, đã lưu local file:", error);
        return NextResponse.json({ success: true, fromDb: false, warning: "Lưu lên Supabase thất bại, dữ liệu được ghi vào tệp cục bộ!" });
      }
    } catch (dbErr) {
      console.warn("Supabase database error:", dbErr);
      return NextResponse.json({ success: true, fromDb: false, warning: "Ghi nhận database lỗi, đã lưu vào tệp cục bộ!" });
    }

    return NextResponse.json({ success: true, fromDb: true });
  } catch (error) {
    console.error("Lỗi cập nhật menu:", error);
    return NextResponse.json({ success: false, error: "Đã xảy ra lỗi hệ thống!" }, { status: 500 });
  }
}
