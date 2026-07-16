import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy danh sách link rút gọn từ Supabase
export async function GET(request) {
  try {
    const { data: links, error } = await supabase
      .from("links")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      throw error;
    }

    // Map database columns to camelCase for frontend compatibility
    const formattedLinks = (links || []).map(({ original_url, created_at, updated_at, ...rest }) => ({
      ...rest,
      originalUrl: original_url,
      createdAt: created_at,
      updatedAt: updated_at
    }));

    return NextResponse.json({ success: true, links: formattedLinks });
  } catch (error) {
    console.error("Lỗi lấy danh sách link rút gọn từ Supabase:", error);
    return NextResponse.json({ success: false, error: "Không thể lấy danh sách link rút gọn!" }, { status: 500 });
  }
}

// POST: Tạo mới hoặc cập nhật link rút gọn trên Supabase
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, slug, originalUrl, description } = body;

    if (!slug || !originalUrl) {
      return NextResponse.json({ success: false, error: "Vui lòng nhập Mã rút gọn (slug) và Đường dẫn gốc!" }, { status: 400 });
    }

    const cleanSlug = slug.trim().toLowerCase();
    const cleanUrl = originalUrl.trim();

    // Validate slug format
    const slugRegex = /^[a-z0-9-_]+$/;
    if (!slugRegex.test(cleanSlug)) {
      return NextResponse.json({ success: false, error: "Mã rút gọn chỉ được phép chứa chữ cái không dấu, số, dấu gạch ngang (-) và gạch dưới (_)." }, { status: 400 });
    }

    // Validate URL format
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      return NextResponse.json({ success: false, error: "Đường dẫn gốc phải bắt đầu bằng http:// hoặc https://" }, { status: 400 });
    }

    const formattedDate = new Date().toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    if (id) {
      // Cập nhật link đã có
      const { data, error } = await supabase
        .from("links")
        .update({
          slug: cleanSlug,
          original_url: cleanUrl,
          description: description ? description.trim() : "",
          updated_at: formattedDate,
        })
        .eq("id", id)
        .select()
        .single();

      if (error) {
        if (error.code === "23505") { // Unique key constraint
          return NextResponse.json({ success: false, error: "Mã rút gọn này đã tồn tại trên hệ thống!" }, { status: 400 });
        }
        throw error;
      }

      const responseLink = {
        ...data,
        originalUrl: data.original_url,
        createdAt: data.created_at,
        updatedAt: data.updated_at
      };

      return NextResponse.json({ success: true, link: responseLink });
    } else {
      // Tạo mới link
      const newLink = {
        id: String(Date.now()),
        slug: cleanSlug,
        original_url: cleanUrl,
        description: description ? description.trim() : "",
        clicks: 0,
        created_at: formattedDate,
      };

      const { data, error } = await supabase
        .from("links")
        .insert(newLink)
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          return NextResponse.json({ success: false, error: "Mã rút gọn này đã tồn tại trên hệ thống!" }, { status: 400 });
        }
        throw error;
      }

      const responseLink = {
        ...data,
        originalUrl: data.original_url,
        createdAt: data.created_at,
        updatedAt: data.updated_at
      };

      return NextResponse.json({ success: true, link: responseLink });
    }
  } catch (error) {
    console.error("Lỗi tạo/cập nhật link rút gọn trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Lưu link rút gọn thất bại!" }, { status: 500 });
  }
}

// DELETE: Xóa link rút gọn qua query parameter (?id=xyz) từ Supabase
export async function DELETE(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const idToDelete = searchParams.get("id")?.trim();

    if (!idToDelete) {
      return NextResponse.json({ success: false, error: "Thiếu ID của link cần xóa!" }, { status: 400 });
    }

    const { error } = await supabase
      .from("links")
      .delete()
      .eq("id", idToDelete);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, message: "Xóa link rút gọn thành công!" });
  } catch (error) {
    console.error("Lỗi xóa link rút gọn trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Xóa link rút gọn thất bại!" }, { status: 500 });
  }
}
