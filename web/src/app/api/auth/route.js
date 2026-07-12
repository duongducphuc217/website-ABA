import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const usersPath = path.join(process.cwd(), "src", "data", "users.json");

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

export async function POST(request) {
  try {
    const { username, passcode } = await request.json();
    const loginUsername = username || "admin";

    const users = await readUsers();
    const user = users.find(
      (u) =>
        u.username.toLowerCase() === loginUsername.toLowerCase() &&
        u.passcode === passcode
    );

    if (user) {
      return NextResponse.json({
        success: true,
        token: "admin_token_website_aba",
        user: {
          username: user.username,
          name: user.name,
          role: user.role,
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "Tên đăng nhập hoặc mật khẩu không chính xác!" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Lỗi xác thực:", error);
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}
