import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ success: false, error: "Không tìm thấy tệp tải lên!" }, { status: 400 });
    }

    // Kiểm tra cấu hình biến môi trường
    if (
      !process.env.CLOUDFLARE_R2_ENDPOINT ||
      !process.env.CLOUDFLARE_R2_ACCESS_KEY_ID ||
      !process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY ||
      !process.env.CLOUDFLARE_R2_BUCKET_NAME ||
      !process.env.CLOUDFLARE_R2_PUBLIC_URL
    ) {
      console.error("Thiếu cấu hình biến môi trường Cloudflare R2");
      return NextResponse.json(
        { success: false, error: "Chưa cấu hình đầy đủ biến môi trường Cloudflare R2!" },
        { status: 500 }
      );
    }

    // Khởi tạo S3 Client cho Cloudflare R2 một cách động dựa trên env mới nhất
    const r2Client = new S3Client({
      region: "auto",
      endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
      },
      forcePathStyle: true, // Khuyên dùng cho Cloudflare R2
    });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".png";
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}${ext}`;

    // Upload lên Cloudflare R2
    const uploadParams = {
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
      Key: filename,
      Body: buffer,
      ContentType: file.type || "image/png",
    };

    await r2Client.send(new PutObjectCommand(uploadParams));

    // Trả về URL truy cập công khai của ảnh
    const publicUrl = `${process.env.CLOUDFLARE_R2_PUBLIC_URL.replace(/\/$/, "")}/${filename}`;

    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    console.error("Lỗi upload file lên Cloudflare R2:", error);
    return NextResponse.json({ success: false, error: "Tải ảnh lên thất bại!" }, { status: 500 });
  }
}

