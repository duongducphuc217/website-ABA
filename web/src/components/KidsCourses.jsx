"use client";
import React from "react";
import Link from "next/link";

const KidsCourses = () => {
  return (
    <section className='explore-course py-120 bg-main-25 position-relative z-1'>
      {/* Thêm CSS tùy biến cho Bento Grid */}
      <style>{`
        .bento-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid #eef0f6;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .bento-card:hover {
          border-color: hsl(var(--main));
          box-shadow: 0 16px 40px rgba(92, 52, 194, 0.12);
          transform: translateY(-6px);
        }
        .bento-img-wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .bento-card:hover .bento-img {
          transform: scale(1.07);
        }
        .bento-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(15, 10, 36, 0.7) 0%, rgba(15, 10, 36, 0.2) 40%, rgba(15, 10, 36, 0) 80%);
          transition: all 0.3s ease;
        }
        .bento-card:hover .bento-overlay {
          background: linear-gradient(to top, rgba(15, 10, 36, 0.8) 0%, rgba(15, 10, 36, 0.3) 50%, rgba(15, 10, 36, 0.05) 90%);
        }

        .bento-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 32px;
          color: #fff;
          z-index: 2;
        }
        .bento-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        .bento-card:hover .bento-badge {
          background: hsl(var(--main));
          border-color: hsl(var(--main));
          box-shadow: 0 4px 12px rgba(92, 52, 194, 0.3);
        }
        .bento-title {
          color: #ffffff;
          font-weight: 800;
          font-size: 24px;
          margin-bottom: 0;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        .bento-card:hover .bento-title {
          color: #ffffff;
        }
        .bento-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .bento-card:hover .bento-desc {
          max-height: 100px;
          opacity: 1;
          margin-top: 12px;
        }
        .bento-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          margin-top: 16px;
          opacity: 0.7;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .bento-card:hover .bento-btn {
          opacity: 1;
          color: hsl(var(--main-three));
        }
        
        /* Cấu hình chiều cao Bento Grid */
        .bento-card-vertical {
          height: 624px;
        }
        .bento-card-horizontal {
          height: 300px;
        }
        .bento-card-square {
          height: 300px;
        }
        
        @media (max-width: 991px) {
          .bento-card-vertical {
            height: 480px;
          }
          .bento-card-horizontal {
            height: 280px;
          }
          .bento-card-square {
            height: 280px;
          }
        }
      `}</style>

      <div className='container'>
        {/* Tiêu đề phần "Chúng tôi có gì" */}
        <div className='max-w-611 text-center mx-auto mb-60'>
          <div
            className='text-main-600 fw-semibold text-xl d-flex align-items-center gap-8 mb-16 justify-content-center flex-wrap'
            data-aos='fade-down'
          >
            <span>
              <i className='ph-bold ph-squares-four' />
            </span>
            <span>Chúng Tôi Có Gì?</span>
          </div>
          <h2 className='mb-24 wow bounceIn'>Hệ Sinh Thái Dịch Vụ Tại ABA</h2>
          <p className='max-w-557-px text-md text-neutral-700 fw-normal wow bounceInUp mx-auto'>
            ABA mang đến các giải pháp giáo dục thực chất và toàn diện thông qua dã ngoại kỹ năng, sự kiện trường học và giáo trình kỹ năng sống độc quyền.
          </p>
        </div>

        {/* Bento Grid 4 Khối */}
        <div className='row gy-4'>
          {/* Cột trái (Chiếm 1/3) - Khối dọc: Trải nghiệm tại trường */}
          <div className='col-lg-4 col-md-6' data-aos='fade-right'>
            <Link href='#' className='bento-card bento-card-vertical d-block'>
              <div className='bento-img-wrap'>
                <img
                  src='assets/images/thumbs/kids-courses-img1.png'
                  alt='Trải nghiệm tại trường'
                  className='bento-img'
                />
                <div className='bento-overlay' />
                <div className='bento-content'>
                  <span className='bento-badge'>
                    <i className='ph-bold ph-graduation-cap' /> Mầm non & Phổ thông
                  </span>
                  <h3 className='bento-title'>Trải nghiệm tại trường</h3>
                  <p className='bento-desc'>
                    Các chương trình ngoại khóa, học tập thực tế và sự kiện khoa học sáng tạo được tổ chức bài bản, an toàn ngay trong khuôn viên trường học.
                  </p>
                  <span className='bento-btn'>
                    Tìm hiểu thêm <i className='ph-bold ph-arrow-right' />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Cột phải (Chiếm 2/3) - Gồm 2 hàng */}
          <div className='col-lg-8' data-aos='fade-left'>
            <div className='row gy-4'>
              {/* Hàng 1 (Ngang rộng) - Dã ngoại - Teambuilding */}
              <div className='col-12'>
                <Link href='#' className='bento-card bento-card-horizontal d-block'>
                  <div className='bento-img-wrap'>
                    <img
                      src='assets/images/thumbs/kids-courses-img2.png'
                      alt='Dã ngoại - Teambuilding'
                      className='bento-img'
                    />
                    <div className='bento-overlay' />
                    <div className='bento-content'>
                      <span className='bento-badge'>
                        <i className='ph-bold ph-compass' /> Hoạt động ngoài trời
                      </span>
                      <h3 className='bento-title'>Dã ngoại - Teambuilding</h3>
                      <p className='bento-desc'>
                        Hành trình dã ngoại sinh thái kết hợp huấn luyện kỹ năng sinh tồn, trại hè kỹ năng và các trò chơi gắn kết tinh thần đồng đội mạnh mẽ.
                      </p>
                      <span className='bento-btn'>
                        Tìm hiểu thêm <i className='ph-bold ph-arrow-right' />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Hàng 2 (2 Khối nhỏ bằng nhau) */}
              {/* Khối Sự kiện & Thiết bị */}
              <div className='col-md-6'>
                <Link href='#' className='bento-card bento-card-square d-block'>
                  <div className='bento-img-wrap'>
                    <img
                      src='assets/images/thumbs/kids-courses-img3.png'
                      alt='Sự kiện & Thiết bị'
                      className='bento-img'
                    />
                    <div className='bento-overlay' />
                    <div className='bento-content'>
                      <span className='bento-badge'>
                        <i className='ph-bold ph-sparkles' /> Đạo cụ độc quyền
                      </span>
                      <h3 className='bento-title'>Sự kiện & Thiết bị</h3>
                      <p className='bento-desc'>
                        Tổ chức lễ hội trường học (Lễ hội nước, Trung thu,...) với hệ thống trang thiết bị đạo cụ khổng lồ, chuyên nghiệp và độc quyền của ABA.
                      </p>
                      <span className='bento-btn'>
                        Tìm hiểu thêm <i className='ph-bold ph-arrow-right' />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Khối Chuyên đề KNS */}
              <div className='col-md-6'>
                <Link href='#' className='bento-card bento-card-square d-block'>
                  <div className='bento-img-wrap'>
                    <img
                      src='assets/images/thumbs/kids-courses-img4.png'
                      alt='Chuyên đề KNS'
                      className='bento-img'
                    />
                    <div className='bento-overlay' />
                    <div className='bento-content'>
                      <span className='bento-badge'>
                        <i className='ph-bold ph-book-open' /> Huấn luyện chuyên sâu
                      </span>
                      <h3 className='bento-title'>Chuyên đề KNS</h3>
                      <p className='bento-desc'>
                        Các khóa đào tạo chuyên sâu về kỹ năng tự lập, phòng vệ, quản lý cảm xúc giúp học sinh hình thành bản lĩnh vững vàng trong cuộc sống.
                      </p>
                      <span className='bento-btn'>
                        Tìm hiểu thêm <i className='ph-bold ph-arrow-right' />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsCourses;
