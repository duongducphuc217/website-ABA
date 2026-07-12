import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const usersPath = path.join(process.cwd(), "src", "data", "users.json");

// Helper function to read users
async function readUsers() {
  try {
    const data = await fs.readFile(usersPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [
      {
        username: "admin",
        passcode: process.env.ADMIN_PASSCODE || "DucNam@87",
        role: "admin",
        name: "Đức Nam",
      },
    ];
  }
}

// Helper function to write users
async function writeUsers(users) {
  await fs.writeFile(usersPath, JSON.stringify(users, null, 2), "utf-8");
}

// Helper to check authentication
function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy danh sách toàn bộ người dùng (ẩn mật khẩu)
export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const users = await readUsers();
    // Ẩn mật khẩu khi gửi về Client để bảo mật
    const safeUsers = users.map(({ passcode, ...rest }) => rest);
    return NextResponse.json({ success: true, users: safeUsers });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Lỗi đọc dữ liệu người dùng!" }, { status: 500 });
  }
}

// POST: Tạo tài khoản mới
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
    const users = await readUsers();

    // Kiểm tra tên đăng nhập đã tồn tại chưa
    if (users.some((u) => u.username.toLowerCase() === cleanUsername)) {
      return NextResponse.json(
        { success: false, error: "Tên đăng nhập này đã tồn tại trên hệ thống!" },
        { status: 400 }
      );
    }

    // Thêm user mới
    const newUser = {
      username: cleanUsername,
      passcode: passcode.trim(),
      name: name.trim(),
      role: role,
    };

    users.push(newUser);
    await writeUsers(users);

    return NextResponse.json({ success: true, message: "Tạo người dùng mới thành công!" });
  } catch (error) {
    console.error("Lỗi tạo người dùng:", error);
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

    const users = await readUsers();
    const updatedUsers = users.filter((u) => u.username.toLowerCase() !== usernameToDelete);

    if (users.length === updatedUsers.length) {
      return NextResponse.json({ success: false, error: "Không tìm thấy tài khoản cần xóa!" }, { status: 404 });
    }

    await writeUsers(updatedUsers);
    return NextResponse.json({ success: true, message: "Xóa tài khoản thành công!" });
  } catch (error) {
    console.error("Lỗi xóa người dùng:", error);
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}
