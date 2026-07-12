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

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const blogs = await readBlogs();
    const blog = blogs.find((b) => b.id === id || b.slug === id);

    if (!blog) {
      return NextResponse.json({ success: false, error: "Không tìm thấy bài viết!" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const id = params.id;
    const body = await request.json();
    const { title, slug, category, author, image, description, content } = body;

    const blogs = await readBlogs();
    const blogIndex = blogs.findIndex((b) => b.id === id);

    if (blogIndex === -1) {
      return NextResponse.json({ success: false, error: "Không tìm thấy bài viết!" }, { status: 404 });
    }

    if (!title || !category || !content) {
      return NextResponse.json({ success: false, error: "Vui lòng điền đầy đủ các trường bắt buộc!" }, { status: 400 });
    }

    const currentBlog = blogs[blogIndex];
    
    // Auto-generate slug if not provided or changed
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

    blogs[blogIndex] = {
      ...currentBlog,
      title,
      slug: finalSlug,
      category,
      author: author || currentBlog.author,
      image: image || currentBlog.image,
      description: description || currentBlog.description,
      content
    };

    await writeBlogs(blogs);

    return NextResponse.json({ success: true, blog: blogs[blogIndex] });
  } catch (error) {
    console.error("Lỗi cập nhật blog:", error);
    return NextResponse.json({ success: false, error: "Cập nhật bài viết thất bại!" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const id = params.id;
    const blogs = await readBlogs();
    const filteredBlogs = blogs.filter((b) => b.id !== id);

    if (blogs.length === filteredBlogs.length) {
      return NextResponse.json({ success: false, error: "Không tìm thấy bài viết!" }, { status: 404 });
    }

    await writeBlogs(filteredBlogs);
    return NextResponse.json({ success: true, message: "Xóa bài viết thành công!" });
  } catch (error) {
    console.error("Lỗi xóa blog:", error);
    return NextResponse.json({ success: false, error: "Xóa bài viết thất bại!" }, { status: 500 });
  }
}
