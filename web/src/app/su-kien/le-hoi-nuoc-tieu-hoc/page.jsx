"use client";
import React from "react";
import HeaderThree from "../../../components/HeaderThree";
import FooterFour from "../../../components/FooterFour";
import Breadcrumb from "../../../components/Breadcrumb";
import ContactFormABA from "../../../components/ContactFormABA";
import TestimonialsABA from "../../../components/TestimonialsABA";

export default function LeHoiNuocTieuHoc() {
  // Hoạt động Ngày hội nước (Tháng 7)
  const waterActivities = [
    {
      title: "Cầu trượt nước",
      image: "/assets/images/le-hoi-nuoc/cau-truot-nuoc.png",
      desc: "Trải nghiệm trượt nước mát lạnh đầy phấn khích trên phao trượt khổng lồ.",
    },
    {
      title: "Sân bóng nước",
      image: "/assets/images/le-hoi-nuoc/san-bong-nuoc.png",
      desc: "Trận bóng đá nước sôi động, kết nối đồng đội trên sân phao hơi an toàn.",
    },
    {
      title: "Bowling nước",
      image: "/assets/images/le-hoi-nuoc/bowling-nuoc.png",
      desc: "Trò chơi thử thách sự khéo léo, thăng bằng và kỹ năng ném bóng nước trúng đích.",
    },
    {
      title: "Máy tạo bọt",
      image: "/assets/images/le-hoi-nuoc/may-tao-bot.png",
      desc: "Không gian lễ hội ngập trạng bọt tuyết trắng xóa, mang lại tiếng cười mát mẻ ngày hè.",
    },
  ];

  // Hoạt động Hành trang vào lớp 1 (Tháng 8)
  const grade1Activities = [
    {
      title: "Mascot robot ấn tượng",
      image: "/assets/images/le-hoi-nuoc/mascot-robot.png",
      desc: "Chào đón hoành tráng từ các nhân vật robot khổng lồ, phá tan sự bỡ ngỡ đầu cấp.",
    },
    {
      title: "Chú hề lắm chiêu",
      image: "/assets/images/le-hoi-nuoc/chu-he.png",
      desc: "Các màn ảo thuật vui nhộn và tạo hình bong bóng nghệ thuật tặng các em nhỏ.",
    },
    {
      title: "Trò chơi hào hứng",
      image: "/assets/images/le-hoi-nuoc/tro-choi-hao-hung.png",
      desc: "Hệ thống trò chơi vận động tập thể xây dựng tinh thần tương tác và hòa nhập nhanh chóng.",
    },
    {
      title: "MC hoạt náo hài hước",
      image: "/assets/images/le-hoi-nuoc/mc-hoat-nao.png",
      desc: "Dẫn dắt dí dỏm, lôi cuốn, tạo sự gắn kết bền chặt giữa học sinh, thầy cô và bạn bè mới.",
    },
  ];

  // Các giải pháp trọn gói
  const packageSolutions = [
    {
      title: "Thiết bị sự kiện hiện đại",
      image: "/assets/images/le-hoi-nuoc/thiet-bi-am-thanh.png",
      desc: "Hệ thống âm thanh công suất lớn, ánh sáng rực rỡ và sân khấu sự kiện thiết kế chuyên nghiệp.",
    },
    {
      title: "Đạo cụ Teambuilding đa dạng",
      image: "/assets/images/le-hoi-nuoc/dao-cu-teambuilding.png",
      desc: "Cung cấp đầy đủ đồ chơi phao hơi, bowling hơi khổng lồ, súng nước và các đạo cụ dã ngoại.",
    },
    {
      title: "Nhân sự vận hành chuyên nghiệp",
      image: "/assets/images/le-hoi-nuoc/nhan-su-van-hanh.png",
      desc: "Đội ngũ kỹ thuật viên, huấn luyện viên hoạt náo và cứu hộ chuyên nghiệp, đảm bảo an toàn tuyệt đối.",
    },
    {
      title: "Photo, Video & Livestream",
      image: "/assets/images/le-hoi-nuoc/photo-video.png",
      desc: "Lưu giữ những khoảnh khắc hạnh phúc, rạng rỡ của học sinh để gửi tặng phụ huynh và nhà trường.",
    },
  ];

  return (
    <>
      <style>{`
        .lh-hero-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #091e36 0%, #040d18 100%);
          color: #ffffff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .lh-hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(242, 110, 58, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(12, 101, 196, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }
        .lh-hero-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        .lh-hero-title span {
          color: #f26e3a;
        }
        .lh-hero-subtitle {
          font-size: 18px;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 32px auto;
          line-height: 1.6;
        }
        .lh-hero-badge {
          background-color: rgba(242, 110, 58, 0.1);
          border: 1px solid rgba(242, 110, 58, 0.3);
          color: #f26e3a;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          display: inline-block;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .lh-btn-orange {
          background-color: #f26e3a;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          display: inline-block;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(242, 110, 58, 0.3);
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .lh-btn-orange:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(242, 110, 58, 0.4);
          color: #ffffff;
        }
        .lh-section {
          padding: 120px 0;
        }
        .lh-section-title-box {
          text-align: center;
          margin-bottom: 60px;
        }
        .lh-section-tag {
          color: #0c65c4;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 12px;
          display: block;
        }
        .lh-section-title {
          font-size: 32px;
          font-weight: 700;
          color: #091e36;
          margin-bottom: 16px;
        }
        .lh-section-desc {
          color: #64748b;
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .lh-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 20px;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .lh-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(9, 30, 54, 0.06);
          border-color: #0c65c4;
        }
        .lh-card-image-box {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #f8fafc;
          margin-bottom: 4px;
        }
        .lh-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }
        .lh-card:hover .lh-card-img {
          transform: scale(1.05);
        }
        .lh-card-title {
          font-size: 19px;
          font-weight: 700;
          color: #091e36;
          margin: 4px 0 0 0;
        }
        .lh-card-desc {
          color: #64748b;
          font-size: 14.5px;
          line-height: 1.5;
          margin: 0;
        }
        
        .lh-bg-light-blue {
          background-color: #f0f8ff;
        }
        .lh-bg-light-orange {
          background-color: #fff8f3;
        }
        .lh-bg-dark-navy {
          background-color: #091e36;
          color: #ffffff;
        }
        .lh-bg-dark-navy .lh-section-title {
          color: #ffffff;
        }
        .lh-bg-dark-navy .lh-section-desc {
          color: #94a3b8;
        }
        .lh-bg-dark-navy .lh-card {
          background-color: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        .lh-bg-dark-navy .lh-card-title {
          color: #ffffff;
        }
        .lh-bg-dark-navy .lh-card-desc {
          color: #cbd5e1;
        }
        .lh-bg-dark-navy .lh-card:hover {
          border-color: #f26e3a;
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .lh-bullet-list {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .lh-bullet-item {
          background-color: #ffffff;
          border: 1px solid #fed7aa;
          color: #ea580c;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 6px rgba(234, 88, 12, 0.03);
        }
        .lh-stats-banner {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 32px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(9, 30, 54, 0.04);
          margin-top: -60px;
          position: relative;
          z-index: 10;
        }
        .lh-stat-item {
          text-align: center;
        }
        .lh-stat-num {
          font-size: 36px;
          font-weight: 800;
          color: #0c65c4;
          margin-bottom: 8px;
        }
        .lh-stat-label {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .lh-hero-title {
            font-size: 28px;
          }
          .lh-hero-subtitle {
            font-size: 15px;
          }
          .lh-section {
            padding: 80px 0;
          }
          .lh-section-title {
            font-size: 24px;
          }
          .lh-bullet-list {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          .lh-bullet-item {
            width: 100%;
            justify-content: center;
          }
          .lh-stats-banner {
            flex-direction: column;
            margin-top: -30px;
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Header Navigation */}
      <HeaderThree />

      {/* Breadcrumb Navigation */}
      <Breadcrumb title="Lễ Hội Nước - Tiểu Học" />

      {/* Hero Header Section */}
      <section className="lh-hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className="lh-hero-badge">Chào Năm Học Mới</span>
              <h1 className="lh-hero-title">
                ĐỒNG HÀNH CÙNG NHÀ TRƯỜNG – <span>MÙA HÈ RỰC RỠ</span>
              </h1>
              <p className="lh-hero-subtitle">
                Trải nghiệm đỉnh cao của các hoạt động dã ngoại giáo dục tích hợp kỹ năng sống trong tháng 7 và tháng 8. Giải pháp sự kiện giáo dục học đường toàn diện và trọn gói.
              </p>
              <button
                onClick={() => {
                  const contactSec = document.getElementById("contact-section");
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="lh-btn-orange"
              >
                📞 Liên hệ tư vấn ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary Banner */}
      <div className="container">
        <div className="lh-stats-banner">
          <div className="lh-stat-item">
            <div className="lh-stat-num">15+ Năm</div>
            <div className="lh-stat-label">Đồng hành cùng các nhà trường</div>
          </div>
          <div className="lh-stat-item" style={{ borderLeft: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0", padding: "0 40px" }}>
            <div className="lh-stat-num">99%</div>
            <div className="lh-stat-label">Sự hài lòng từ giáo viên & học sinh</div>
          </div>
          <div className="lh-stat-item">
            <div className="lh-stat-num">100%</div>
            <div className="lh-stat-label">Đảm bảo thiết bị & nhân sự cứu hộ</div>
          </div>
        </div>
      </div>

      {/* Section 1: Lễ hội nước (Tháng 7) */}
      <section className="lh-section lh-bg-light-blue">
        <div className="container">
          <div className="lh-section-title-box" data-aos="fade-up">
            <span className="lh-section-tag">Tháng 7 Hoạt Động</span>
            <h2 className="lh-section-title">RỰC RỠ THÁNG 7 – NGÀY HỘI NƯỚC</h2>
            <p className="lh-section-desc">
              Mang ngay không khí mát mẻ, sảng khoái và cực kỳ hào hứng của ngày hội nước về chính ngôi trường của bạn với phao trượt khổng lồ và bọt tuyết mùa hè.
            </p>
          </div>

          <div className="row g-4">
            {waterActivities.map((act, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="lh-card">
                  <div className="lh-card-image-box">
                    <img src={act.image} alt={act.title} className="lh-card-img" />
                  </div>
                  <h3 className="lh-card-title">{act.title}</h3>
                  <p className="lh-card-desc">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Up! Vút bay vào lớp 1 (Tháng 8) */}
      <section className="lh-section lh-bg-light-orange">
        <div className="container">
          <div className="lh-section-title-box" data-aos="fade-up">
            <span className="lh-section-tag" style={{ color: "#ea580c" }}>Tháng 8 Khởi Động</span>
            <h2 className="lh-section-title">UP! VÚT BAY VÀO LỚP 1</h2>
            <p className="lh-section-desc">
              Chương trình chuẩn bị tâm lý và kỹ năng đầu khóa học, giúp các bé chuyển cấp từ Mầm non lên Tiểu học một cách tràn đầy tự tin và hứng khởi.
            </p>
          </div>

          {/* Bullet points hành trang */}
          <div className="lh-bullet-list" data-aos="fade-up">
            <div className="lh-bullet-item">🚀 Phá tan mọi bỡ ngỡ</div>
            <div className="lh-bullet-item">🤝 Hòa nhập nhanh chóng</div>
            <div className="lh-bullet-item">❤️ Kết nối thầy cô và bạn bè</div>
          </div>

          <div className="row g-4">
            {grade1Activities.map((act, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="lh-card" style={{ borderColor: "#fed7aa" }}>
                  <div className="lh-card-image-box">
                    <img src={act.image} alt={act.title} className="lh-card-img" />
                  </div>
                  <h3 className="lh-card-title">{act.title}</h3>
                  <p className="lh-card-desc">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Giải pháp trọn gói (Dark Navy) */}
      <section className="lh-section lh-bg-dark-navy">
        <div className="container">
          <div className="lh-section-title-box" data-aos="fade-up">
            <span className="lh-section-tag" style={{ color: "#f26e3a" }}>Cho Thuê Trang Thiết Bị</span>
            <h2 className="lh-section-title">DỊCH VỤ TRỌN GÓI – GIẢI PHÁP TOÀN DIỆN CHO TRƯỜNG HỌC</h2>
            <p className="lh-section-desc">
              Chúng tôi sở hữu kho đạo cụ khổng lồ và đội ngũ vận hành từ A-Z. Nhà trường chỉ cần lên lịch, toàn bộ khâu chuẩn bị, đảm bảo an toàn và tổ chức hãy để ABA lo!
            </p>
          </div>

          <div className="row g-4">
            {packageSolutions.map((sol, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="lh-card">
                  <div className="lh-card-image-box">
                    <img src={sol.image} alt={sol.title} className="lh-card-img" />
                  </div>
                  <h3 className="lh-card-title">{sol.title}</h3>
                  <p className="lh-card-desc">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsABA />

      {/* Contact Form Section */}
      <div id="contact-section">
        <ContactFormABA />
      </div>

      {/* Footer Navigation */}
      <FooterFour />
    </>
  );
}
