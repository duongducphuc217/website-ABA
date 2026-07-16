import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";

export async function POST(request) {
  try {
    const { username, passcode } = await request.json();
    const loginUsername = (username || "admin").trim().toLowerCase();

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", loginUsername)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (user && user.passcode === passcode) {
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
