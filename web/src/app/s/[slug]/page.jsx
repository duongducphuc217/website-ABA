import { redirect, notFound } from "next/navigation";
import { supabase } from "@/helper/supabase";

export default async function ShortLinkRedirectPage({ params }) {
  // Await params since dynamic route params are asynchronous in Next.js
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }

  const cleanSlug = slug.trim().toLowerCase();

  // Truy vấn tìm link trong Supabase
  const { data: link, error } = await supabase
    .from("links")
    .select("*")
    .eq("slug", cleanSlug)
    .maybeSingle();

  if (error || !link) {
    console.error("Không tìm thấy slug hoặc lỗi truy vấn Supabase:", error);
    notFound();
  }

  // Tăng số lượt click (chạy song song và không làm chậm quá trình chuyển hướng của người dùng)
  supabase
    .from("links")
    .update({ clicks: (link.clicks || 0) + 1 })
    .eq("id", link.id)
    .then(({ error: updateError }) => {
      if (updateError) {
        console.error("Lỗi cập nhật số lượt click:", updateError);
      }
    });

  // Chuyển hướng 302 về original_url
  redirect(link.original_url);
}
