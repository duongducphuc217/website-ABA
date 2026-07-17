"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BlogDetailsInner = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogsAndDetail = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        if (data.success && Array.isArray(data.blogs) && data.blogs.length > 0) {
          setBlogs(data.blogs);

          // Find matching blog, fallback to first blog if no id or not found
          const currentId = id || data.blogs[0].id;
          const foundBlog = data.blogs.find((b) => b.id === currentId || b.slug === currentId);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            setBlog(data.blogs[0]);
          }
        }
      } catch (error) {
        console.error("Lỗi lấy chi tiết bài viết:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogsAndDetail();
  }, [id]);

  // Get up to 5 related blogs (excluding the current one)
  const relatedBlogs = Array.isArray(blogs) ? blogs.filter((b) => b.id !== (blog?.id || "")).slice(0, 5) : [];
  const imageSrc = blog?.image && (blog.image.startsWith("http") || blog.image.startsWith("/")) ? blog.image : `/${blog?.image || "assets/images/thumbs/blog-two-img1.png"}`;

  const dateParts = String(blog?.date || "").split(" ");
  const day = dateParts[0] || "21";
  const month = dateParts[1] || "DEC";

  return (
    <>
      {loading ? (
        <div className='blog-page-section py-120'>
          <div className='container text-center'>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
            <p className="text-neutral-500 mt-3">Đang tải nội dung bài viết...</p>
          </div>
        </div>
      ) : !blog ? (
        <div className='blog-page-section py-120'>
          <div className='container text-center'>
            <h3 className="text-danger">Không tìm thấy bài viết!</h3>
            <Link href="/blog" className="btn btn-main rounded-pill mt-4">Quay lại danh sách blog</Link>
          </div>
        </div>
      ) : (
        <div className='blog-page-section py-120'>
          <div className='container'>
            <div className='row gy-4'>
              <div className='col-lg-8'>
                <div className='blog-details-card'>
                  <h1 className='blog-details-title-inside mb-24'>
                    {blog.title}
                  </h1>
                  <div className='blog-details-img-wrapper position-relative'>
                    <img
                      src={imageSrc}
                      alt={blog.title}
                      className='cover-img transition-2 w-100 h-100 object-fit-cover'
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070";
                      }}
                    />
                    <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-three-600 text-white fw-medium text-center' style={{ minWidth: "80px" }}>
                      <span className='d-block text-white fw-bold text-lg' style={{ lineHeight: "1.2" }}>{day}</span>
                      <span className='text-white text-sm'>{month}</span>
                    </div>
                  </div>
                  <div className='blog-details-content-area position-relative'>


                    {/* Dynamically render blog content */}
                    <div
                      className='blog-content-rich text-neutral-600 mt-20'
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </div>
                </div>

                {/* Comment Section hidden as requested */}
              </div>

              {/* Sidebar */}
              <div className='col-lg-4'>
                <div className='sidebar-card'>
                  <h4 className='mb-16'>Tìm kiếm</h4>
                  <span className='d-block border border-neutral-30 my-24 border-dashed' />
                  <form action='#' className='position-relative' onSubmit={(e) => e.preventDefault()}>
                    <input
                      type='text'
                      className='common-input rounded-pill py-18 pe-64 sidebar-search-input'
                      placeholder='Tìm bài viết...'
                    />
                    <button
                      type='button'
                      className='flex-center w-44 h-44 rounded-circle bg-main-600 hover-bg-main-700 text-white text-2xl position-absolute inset-inline-end-0 top-50 translate-middle-y me-8'
                    >
                      <i className='ph ph-magnifying-glass' />
                    </button>
                  </form>
                </div>

                <div className='sidebar-card mt-24'>
                  <h4 className='mb-16'>Bài viết khác</h4>
                  <span className='d-block border border-neutral-30 my-24 border-dashed' />
                  {relatedBlogs.length === 0 ? (
                    <p className="text-neutral-500">Không có bài viết nào khác.</p>
                  ) : (
                    relatedBlogs.map((rBlog) => {
                      const rImgSrc = rBlog.image.startsWith("http") || rBlog.image.startsWith("/") ? rBlog.image : `/${rBlog.image}`;
                      return (
                        <React.Fragment key={rBlog.id}>
                          <div className='flex-align gap-16 related-blog-item'>
                            <Link href={`/blog-details?id=${rBlog.id}`} className='flex-shrink-0'>
                              <img
                                src={rImgSrc}
                                alt={rBlog.title}
                                className='w-80 h-80 rounded-8 object-fit-cover'
                                style={{ height: "80px", width: "80px" }}
                                onError={(e) => {
                                  e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070";
                                }}
                              />
                            </Link>
                            <div className='flex-grow-1'>
                              <h6 className='text-xl mb-10'>
                                <Link
                                  href={`/blog-details?id=${rBlog.id}`}
                                  className='hover-text-main-600 text-line-2 text-decoration-none text-neutral-800'
                                >
                                  {rBlog.title}
                                </Link>
                              </h6>
                              <span className='text-neutral-500'>{rBlog.date}</span>
                            </div>
                          </div>
                          <span className='d-block border border-neutral-30 my-24 border-dashed' />
                        </React.Fragment>
                      );
                    })
                  )}
                  <Link
                    href='/blog'
                    className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline text-decoration-none'
                  >
                    Xem tất cả
                    <i className='ph-bold ph-arrow-right' style={{ marginLeft: "6px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetailsInner;

