import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy danh sách toàn bộ bài viết từ Supabase
export async function GET(request) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    // Map database column names to match frontend expectations
    const formattedBlogs = (data || []).map(({ comments_count, ...rest }) => ({
      ...rest,
      commentsCount: comments_count || 0
    }));

    return NextResponse.json({ success: true, blogs: formattedBlogs });
  } catch (error) {
    console.error("Lỗi lấy danh sách blog từ Supabase:", error);
    return NextResponse.json({ success: false, error: "Không thể lấy danh sách bài viết!" }, { status: 500 });
  }
}

// POST: Tạo bài viết mới trên Supabase
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
      comments_count: 0,
      description: description || "",
      content
    };

    const { data, error } = await supabase
      .from("blogs")
      .insert(newBlog)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") { // Unique constraint violation (duplicate slug)
        return NextResponse.json({ success: false, error: "Slug (Đường dẫn tĩnh) này đã tồn tại!" }, { status: 400 });
      }
      throw error;
    }

    const responseBlog = {
      ...data,
      commentsCount: data.comments_count || 0
    };

    return NextResponse.json({ success: true, blog: responseBlog });
  } catch (error) {
    console.error("Lỗi tạo blog trên Supabase:", error);
    return NextResponse.json({ success: false, error: "Tạo bài viết thất bại!" }, { status: 500 });
  }
}
