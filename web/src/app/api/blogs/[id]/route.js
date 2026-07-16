import { NextResponse } from "next/server";
import { supabase } from "@/helper/supabase";

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  return authHeader === "Bearer admin_token_website_aba";
}

// GET: Lấy thông tin bài viết theo ID hoặc Slug từ Supabase
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .or(`id.eq.${id},slug.eq.${id}`)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return NextResponse.json({ success: false, error: "Không tìm thấy bài viết!" }, { status: 404 });
    }

    const blog = {
      ...data,
      commentsCount: data.comments_count || 0
    };

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("Lỗi lấy thông tin blog:", error);
    return NextResponse.json({ success: false, error: "Lỗi hệ thống!" }, { status: 500 });
  }
}

// PUT: Cập nhật bài viết theo ID
export async function PUT(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { title, slug, category, author, image, description, content } = body;

    if (!title || !category || !content) {
      return NextResponse.json({ success: false, error: "Vui lòng điền đầy đủ các trường bắt buộc!" }, { status: 400 });
    }

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

    const { data: currentBlog, error: fetchError } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (fetchError || !currentBlog) {
      return NextResponse.json({ success: false, error: "Không tìm thấy bài viết!" }, { status: 404 });
    }

    const updatedBlog = {
      title,
      slug: finalSlug,
      category,
      author: author || currentBlog.author,
      image: image || currentBlog.image,
      description: description || currentBlog.description,
      content
    };

    const { data, error } = await supabase
      .from("blogs")
      .update(updatedBlog)
      .eq("id", id)
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
    console.error("Lỗi cập nhật blog:", error);
    return NextResponse.json({ success: false, error: "Cập nhật bài viết thất bại!" }, { status: 500 });
  }
}

// DELETE: Xóa bài viết theo ID
export async function DELETE(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: "Không có quyền truy cập!" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, message: "Xóa bài viết thành công!" });
  } catch (error) {
    console.error("Lỗi xóa blog:", error);
    return NextResponse.json({ success: false, error: "Xóa bài viết thất bại!" }, { status: 500 });
  }
}
