import { supabase } from "@/helper/supabase";

export default async function sitemap() {
  const baseUrl = "https://aba.edu.vn";

  // Danh sách các trang tĩnh chính
  const staticRoutes = [
    "",
    "/gioi-thieu",
    "/trai-nghiem",
    "/da-ngoai",
    "/su-kien",
    "/chuyen-de",
    "/trai-he",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Đọc danh sách blog động từ Supabase để đẩy vào sitemap
  try {
    const { data: blogs, error } = await supabase
      .from("blogs")
      .select("id");

    if (!error && Array.isArray(blogs)) {
      const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blog-details?id=${blog.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.6,
      }));
      
      return [...staticRoutes, ...blogRoutes];
    }
  } catch (error) {
    console.error("Lỗi đọc danh sách blog tạo sitemap từ Supabase:", error);
  }

  return staticRoutes;
}
