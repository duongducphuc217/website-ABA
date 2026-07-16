import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const filePath = path.join(process.cwd(), "src", "data", "qrcodes.json");

async function readQRCodes() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeQRCodes(qrcodes) {
  await fs.writeFile(filePath, JSON.stringify(qrcodes, null, 2), "utf-8");
}

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy danh sách mã QR
export async function GET(request) {
  try {
    const qrcodes = await readQRCodes();
    return NextResponse.json({ success: true, qrcodes });
  } catch (error) {
    console.error("Lỗi đọc file qrcodes.json:", error);
    return NextResponse.json({ success: false, error: "Không thể lấy danh sách QR Code!" }, { status: 500 });
  }
}

// POST: Tạo mới hoặc cập nhật mã QR
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

    const qrcodes = await readQRCodes();
    const formattedDate = new Date().toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    if (id) {
      // Cập nhật QR code đã tồn tại
      const index = qrcodes.findIndex((item) => item.id === id);
      if (index === -1) {
        return NextResponse.json({ success: false, error: "Không tìm thấy mã QR cần cập nhật!" }, { status: 404 });
      }

      qrcodes[index] = {
        ...qrcodes[index],
        name: name.trim(),
        value: value.trim(),
        description: description ? description.trim() : "",
        updatedAt: formattedDate,
      };

      await writeQRCodes(qrcodes);
      return NextResponse.json({ success: true, qrcode: qrcodes[index] });
    } else {
      // Tạo mới QR code
      const newQRCode = {
        id: String(Date.now()),
        name: name.trim(),
        value: value.trim(),
        description: description ? description.trim() : "",
        createdAt: formattedDate,
      };

      qrcodes.unshift(newQRCode); // Thêm lên đầu danh sách
      await writeQRCodes(qrcodes);

      return NextResponse.json({ success: true, qrcode: newQRCode });
    }
  } catch (error) {
    console.error("Lỗi tạo/cập nhật QR Code:", error);
    return NextResponse.json({ success: false, error: "Lưu QR Code thất bại!" }, { status: 500 });
  }
}

// DELETE: Xóa mã QR qua query parameter (?id=xyz)
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

    const qrcodes = await readQRCodes();
    const updatedQRCodes = qrcodes.filter((item) => item.id !== idToDelete);

    if (qrcodes.length === updatedQRCodes.length) {
      return NextResponse.json({ success: false, error: "Không tìm thấy mã QR cần xóa!" }, { status: 404 });
    }

    await writeQRCodes(updatedQRCodes);
    return NextResponse.json({ success: true, message: "Xóa QR Code thành công!" });
  } catch (error) {
    console.error("Lỗi xóa QR Code:", error);
    return NextResponse.json({ success: false, error: "Xóa QR Code thất bại!" }, { status: 500 });
  }
}
