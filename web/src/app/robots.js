export default function robots() {
  const baseUrl = "https://aba.edu.vn";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/sign-in",
          "/sign-up",
          "/cart",
          "/checkout",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
