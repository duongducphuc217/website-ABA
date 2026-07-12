import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

async function readBlogs() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeBlogs(blogs) {
  await fs.writeFile(filePath, JSON.stringify(blogs, null, 2), "utf-8");
}

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

export async function GET(request) {
  try {
    const blogs = await readBlogs();
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Không thể lấy danh sách bài viết!" }, { status: 500 });
  }
}

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, category, author, image, description, content } = body;

    if (!title || !category || !content) {
      return NextResponse.json({ success: false, error: "Vui lòng điền các trường bắt buộc (Tiêu đề, Danh mục, Nội dung)!" }, { status: 400 });
    }

    const blogs = await readBlogs();
    const newId = String(Date.now());
    
    // Auto-generate slug if not provided
    const finalSlug = slug || title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    const formattedDate = new Date().toLocaleDateString("en-US", { day: "numeric", month: "short" });

    const newBlog = {
      id: newId,
      title,
      slug: finalSlug,
      category,
      author: author || "Admin",
      date: formattedDate,
      image: image || "assets/images/thumbs/blog-two-img1.png",
      views: "0",
      commentsCount: 0,
      description: description || "",
      content
    };

    blogs.unshift(newBlog);
    await writeBlogs(blogs);

    return NextResponse.json({ success: true, blog: newBlog });
  } catch (error) {
    console.error("Lỗi tạo blog:", error);
    return NextResponse.json({ success: false, error: "Tạo bài viết thất bại!" }, { status: 500 });
  }
}
