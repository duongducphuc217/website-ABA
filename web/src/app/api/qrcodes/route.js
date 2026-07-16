import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy danh sách mã QR từ Supabase
export async function GET(request) {
  try {
    const { data: qrcodes, error } = await supabase
      .from("qrcodes")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, qrcodes });
  } catch (error) {
    console.error("Lỗi lấy danh sách QR Code từ Supabase:", error);
    return NextResponse.json({ success: false, error: "Không thể lấy danh sách QR Code!" }, { status: 500 });
  }
}

// POST: Tạo mới hoặc cập nhật mã QR trên Supabase
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, name, value, description } = body;

    if (!name || !value) {
      return NextResponse.json({ success: false, error: "Vui lòng nhập Tên gợi nhớ và Nội dung QR Code!" }, { status: 400 });
    }

    const formattedDate = new Date().toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    if (id) {
      // Cập nhật QR code
      const { data, error } = await supabase
        .from("qrcodes")
        .update({
          name: name.trim(),
          value: value.trim(),
          description: description ? description.trim() : "",
          updated_at: formattedDate,
        })
        .eq("id", id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return NextResponse.json({ success: true, qrcode: data });
    } else {
      // Tạo mới QR code
      const newQRCode = {
        id: String(Date.now()),
        name: name.trim(),
        value: value.trim(),
        description: description ? description.trim() : "",
        created_at: formattedDate,
      };

      const { data, error } = await supabase
        .from("qrcodes")
        .insert(newQRCode)
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Map snake_case created_at to camelCase createdAt for compatibility
      const responseQR = {
        ...data,
        createdAt: data.created_at,
        updatedAt: data.updated_at
      };

      return NextResponse.json({ success: true, qrcode: responseQR });
    }
  } catch (error) {
    console.error("Lỗi tạo/cập nhật QR Code trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Lưu QR Code thất bại!" }, { status: 500 });
  }
}

// DELETE: Xóa mã QR qua query parameter (?id=xyz) từ Supabase
export async function DELETE(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const idToDelete = searchParams.get("id")?.trim();

    if (!idToDelete) {
      return NextResponse.json({ success: false, error: "Thiếu ID của mã QR cần xóa!" }, { status: 400 });
    }

    const { error } = await supabase
      .from("qrcodes")
      .delete()
      .eq("id", idToDelete);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, message: "Xóa QR Code thành công!" });
  } catch (error) {
    console.error("Lỗi xóa QR Code trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Xóa QR Code thất bại!" }, { status: 500 });
  }
}
