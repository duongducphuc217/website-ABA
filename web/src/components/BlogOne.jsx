"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const BlogOne = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        if (data.success && Array.isArray(data.blogs) && data.blogs.length > 0) {
          const sorted = [...data.blogs].sort((a, b) => String(b.id || "").localeCompare(String(a.id || "")));
          setLatestBlogs(sorted.slice(0, 3));
        }
      } catch (error) {
        console.error("Lỗi lấy bài viết mới nhất ở trang chủ:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestBlogs();
  }, []);

  return (
    <section className='blog py-120 mash-bg-main mash-bg-main-two position-relative'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24 wow bounceIn'>Bài viết Mới nhất</h2>
          <p className='wow bounceInUp'>
            Cập nhật các hoạt động trải nghiệm, dã ngoại, kỹ năng sống và sự kiện mới nhất từ ABA Academy.
          </p>
        </div>
        
        {loading ? (
          <div className='row gy-4'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='col-lg-4 col-sm-6'>
                <div className='blog-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30' style={{ opacity: 0.6 }}>
                  <div style={{ height: "200px", backgroundColor: "#e2e8f0", borderRadius: "12px" }}></div>
                  <div className='p-24 pt-32'>
                    <div style={{ height: "20px", backgroundColor: "#e2e8f0", borderRadius: "4px", width: "40%", marginBottom: "16px" }}></div>
                    <div style={{ height: "24px", backgroundColor: "#e2e8f0", borderRadius: "4px", width: "85%", marginBottom: "12px" }}></div>
                    <div style={{ height: "40px", backgroundColor: "#e2e8f0", borderRadius: "4px", width: "100%" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : latestBlogs.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-neutral-500">Chưa có bài viết nào.</p>
          </div>
        ) : (
          <div className='row gy-4'>
            {latestBlogs.map((blog, idx) => {
              const imageSrc = blog.image.startsWith("http") || blog.image.startsWith("/") ? blog.image : `/${blog.image}`;
              const badgeColors = ["bg-main-two-600", "bg-success-600", "bg-warning-600"];
              const badgeClass = badgeColors[idx % 3];

              return (
                <div
                  key={blog.id}
                  className='col-lg-4 col-sm-6'
                  data-aos='fade-up'
                  data-aos-duration={(idx + 1) * 200}
                >
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
                    </div>
                    <div className='p-24 pt-32'>
                      <div>
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
                            <span className='text-neutral-500 text-lg'>{blog.author}</span>
                          </div>
                          <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                          <div className='flex-align gap-8'>
                            <span className='text-neutral-500 text-2xl d-flex'>
                              <i className='ph ph-calendar-dot' />
                            </span>
                            <span className='text-neutral-500 text-lg'>
                              {blog.date}
                            </span>
                          </div>
                        </div>
                        <p className='text-neutral-500 text-line-2'>
                          {blog.description}
                        </p>
                      </div>
                      <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                        <Link
                          href={`/blog-details?id=${blog.id}`}
                          className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold text-decoration-none'
                          tabIndex={0}
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
    </section>
  );
};

export default BlogOne;

