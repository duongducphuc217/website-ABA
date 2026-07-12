"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const BlogGridInner = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Lỗi lấy danh sách blog:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const getSortedBlogs = () => {
    if (!Array.isArray(blogs)) return [];
    let sorted = [...blogs];
    if (sortBy === "newest") {
      sorted.sort((a, b) => String(b.id || "").localeCompare(String(a.id || "")));
    } else if (sortBy === "trending" || sortBy === "popular") {
      sorted.sort((a, b) => {
        const aViews = parseFloat(String(a.views || "0").replace("k", "")) * (String(a.views || "").includes("k") ? 1000 : 1);
        const bViews = parseFloat(String(b.views || "0").replace("k", "")) * (String(b.views || "").includes("k") ? 1000 : 1);
        return bViews - aViews;
      });
    }
    return sorted;
  };

  const sortedBlogs = getSortedBlogs();

  return (
    <div className='blog-page-section py-120'>
      <div className='container'>
        <div className='flex-between gap-16 flex-wrap mb-40'>
          <span className='text-neutral-500'>
            {loading ? "Đang tải bài viết..." : `Hiển thị ${sortedBlogs.length} bài viết`}
          </span>
          <div className='flex-align gap-16'>
            <div className='flex-align gap-8'>
              <span className='text-neutral-500 flex-shrink-0'>Sắp xếp :</span>
              <select 
                value={sortBy} 
                onChange={handleSortChange} 
                className='form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700'
              >
                <option value="newest">Mới nhất</option>
                <option value="trending">Xu hướng</option>
                <option value="popular">Phổ biến nhất</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className='row gy-4'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className='col-lg-4 col-sm-6'>
                <div className='bg-main-25 rounded-16 p-12 h-100 border border-neutral-30' style={{ opacity: 0.6 }}>
                  <div style={{ height: "200px", backgroundColor: "#e2e8f0", borderRadius: "12px" }}></div>
                  <div className='pt-32 pb-24 px-16'>
                    <div style={{ height: "24px", backgroundColor: "#e2e8f0", borderRadius: "4px", width: "80%", marginBottom: "16px" }}></div>
                    <div style={{ height: "16px", backgroundColor: "#e2e8f0", borderRadius: "4px", width: "50%", marginBottom: "12px" }}></div>
                    <div style={{ height: "40px", backgroundColor: "#e2e8f0", borderRadius: "4px", width: "100%" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : sortedBlogs.length === 0 ? (
          <div className="text-center py-48">
            <h4 className="text-neutral-500">Chưa có bài viết nào được xuất bản.</h4>
          </div>
        ) : (
          <div className='row gy-4'>
            {sortedBlogs.map((blog, idx) => {
              const imageSrc = blog.image && (blog.image.startsWith("http") || blog.image.startsWith("/")) ? blog.image : `/${blog.image || "assets/images/thumbs/blog-two-img1.png"}`;
              const dateParts = String(blog.date || "").split(" ");
              const day = dateParts[0] || "21";
              const month = dateParts[1] || "DEC";
              const badgeColors = ["bg-main-two-600", "bg-success-600", "bg-warning-600"];
              const badgeClass = badgeColors[idx % 3];

              return (
                <div key={blog.id} className='col-lg-4 col-sm-6'>
                  <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
                    <div className='rounded-12 overflow-hidden position-relative' style={{ height: "220px" }}>
                      <Link href={`/blog-details?id=${blog.id}`} className='w-100 h-100 d-block'>
                        <img
                          src={imageSrc}
                          alt={blog.title}
                          className='scale-hover-item__img rounded-12 cover-img transition-2 w-100 h-100 object-fit-cover'
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070";
                          }}
                        />
                      </Link>
                      <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium text-center' style={{ minWidth: "80px" }}>
                        <span className='d-block text-white fw-bold text-lg' style={{ lineHeight: "1.2" }}>{day}</span>
                        <span className='text-white text-sm'>{month}</span>
                      </div>
                    </div>
                    <div className='p-24 pt-32 position-relative'>
                      <span className={`px-20 py-8 ${badgeClass} rounded-8 text-white fw-medium mb-20 d-inline-block`}>
                        {blog.category}
                      </span>
                      <h4 className='mb-28'>
                        <Link href={`/blog-details?id=${blog.id}`} className='link text-line-2 text-decoration-none'>
                          {blog.title}
                        </Link>
                      </h4>
                      <div className='flex-align gap-14 flex-wrap my-20'>
                        <div className='flex-align gap-8'>
                          <span className='text-neutral-500 text-2xl d-flex'>
                            <i className='ph ph-user-circle' />
                          </span>
                          <span className='text-neutral-500 text-lg'>Tác giả: {blog.author}</span>
                        </div>
                        <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                        <div className='flex-align gap-8'>
                          <span className='text-neutral-500 text-2xl d-flex'>
                            <i className='ph-bold ph-eye' />
                          </span>
                          <span className='text-neutral-500 text-lg'>{blog.views} lượt xem</span>
                        </div>
                      </div>
                      <p className='text-neutral-500 text-line-2 mb-20'>{blog.description}</p>
                      <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                        <Link
                          href={`/blog-details?id=${blog.id}`}
                          className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold text-decoration-none'
                        >
                          Đọc thêm
                          <i className='ph ph-arrow-right' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGridInner;

