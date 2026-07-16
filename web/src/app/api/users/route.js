import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy danh sách toàn bộ người dùng từ Supabase (ẩn mật khẩu)
export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const { data: users, error } = await supabase
      .from("users")
      .select("username, name, role");

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("Lỗi đọc dữ liệu người dùng từ Supabase:", error);
    return NextResponse.json({ success: false, error: "Lỗi đọc dữ liệu người dùng!" }, { status: 500 });
  }
}

// POST: Tạo tài khoản mới trên Supabase
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { username, passcode, name, role } = body;

    if (!username || !passcode || !name || !role) {
      return NextResponse.json(
        { success: false, error: "Vui lòng nhập đầy đủ Tên đăng nhập, Mật khẩu, Họ tên và Vai trò!" },
        { status: 400 }
      );
    }

    const cleanUsername = username.trim().toLowerCase();

    const newUser = {
      username: cleanUsername,
      passcode: passcode.trim(),
      name: name.trim(),
      role: role,
    };

    const { error } = await supabase
      .from("users")
      .insert(newUser);

    if (error) {
      if (error.code === "23505") { // Unique constraint violation (duplicate username)
        return NextResponse.json(
          { success: false, error: "Tên đăng nhập này đã tồn tại trên hệ thống!" },
          { status: 400 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true, message: "Tạo người dùng mới thành công!" });
  } catch (error) {
    console.error("Lỗi tạo người dùng trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}

// DELETE: Xóa người dùng qua query parameter (?username=xyz)
export async function DELETE(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const usernameToDelete = searchParams.get("username")?.trim().toLowerCase();

    if (!usernameToDelete) {
      return NextResponse.json({ success: false, error: "Thiếu tên đăng nhập cần xóa!" }, { status: 400 });
    }

    // Không cho phép tự xóa tài khoản 'admin' chính gốc
    if (usernameToDelete === "admin") {
      return NextResponse.json({ success: false, error: "Không thể xóa tài khoản Quản trị viên mặc định!" }, { status: 400 });
    }

    const { error, count } = await supabase
      .from("users")
      .delete({ count: "planned" })
      .eq("username", usernameToDelete);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, message: "Xóa tài khoản thành công!" });
  } catch (error) {
    console.error("Lỗi xóa người dùng trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}
