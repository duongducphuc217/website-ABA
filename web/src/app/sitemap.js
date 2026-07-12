import fs from "fs";
import path from "path";

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

  // Đọc danh sách blog động từ tệp blogs.json để đẩy vào sitemap
  try {
    const blogsPath = path.join(process.cwd(), "src/data/blogs.json");
    if (fs.existsSync(blogsPath)) {
      const blogsJson = fs.readFileSync(blogsPath, "utf8");
      const blogs = JSON.parse(blogsJson);

      if (Array.isArray(blogs)) {
        const blogRoutes = blogs.map((blog) => ({
          url: `${baseUrl}/blog-details?id=${blog.id}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.6,
        }));
        
        return [...staticRoutes, ...blogRoutes];
      }
    }
  } catch (error) {
    console.error("Lỗi đọc danh sách blog tạo sitemap:", error);
  }

  return staticRoutes;
}
