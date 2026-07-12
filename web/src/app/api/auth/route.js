import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { passcode } = await request.json();
    const correctPasscode = process.env.ADMIN_PASSCODE || "DucNam@87";

    if (passcode === correctPasscode) {
      return NextResponse.json({ success: true, token: "admin_token_website_aba" });
    }

    return NextResponse.json({ success: false, error: "Mật khẩu không chính xác!" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}
