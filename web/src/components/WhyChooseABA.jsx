"use client";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "@/components/VisibilitySensor";

const WhyChooseABA = () => {
  return (
    <section className='py-120 border-top border-neutral-30'>
      {/* Thêm CSS tùy biến để tối ưu giao diện di động (Mobile) */}
      <style>{`
        .why-stats-container {
          gap: 24px !important;
        }
        .why-stats-card {
          padding: 32px;
          flex-grow: 1;
        }
        .why-count-text {
          -webkit-text-stroke: 2.5px hsl(var(--main));
          color: transparent;
          font-size: 96px;
          font-weight: 800;
          line-height: 1;
          min-width: 240px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .why-label-text {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1.4;
          text-transform: uppercase;
        }
        
        @media (min-width: 992px) {
          .why-stats-container {
            gap: 40px !important;
          }
        }
        
        @media (max-width: 1199px) {
          .why-count-text {
            font-size: 72px;
            min-width: 180px;
          }
        }
        
        @media (max-width: 991px) {
          .why-stats-card {
            padding: 20px 16px;
          }
          .why-count-text {
            font-size: 48px;
            min-width: auto;
          }
          .why-label-text {
            font-size: 11px;
            letter-spacing: 0.5px;
          }
        }

        @media (max-width: 575px) {
          .why-stats-card {
            padding: 16px 12px;
            text-align: center;
          }
          .why-count-text {
            font-size: 36px;
            margin-bottom: 8px;
          }
          .why-label-text {
            font-size: 10px;
            line-height: 1.3;
          }
        }
      `}</style>

      <div className='container'>
        {/* Phần Title căn giữa */}
        <div className='text-center mb-60'>
          <div
            className='fw-semibold text-main-800 text-xl d-flex align-items-center justify-content-center gap-8 mb-16 flex-wrap'
            data-aos='fade-down'
          >
            <span>
              <i className='ph-bold ph-book-open' />
            </span>
            <span>Vì Sao Chọn ABA?</span>
          </div>
          <h2 className='fw-semibold heading-three text-neutral-700 mb-20 wow bounceIn'>
            Kiến tạo trải nghiệm thực tế & đột phá
          </h2>
          <p className='tw-text-base fw-medium text-neutral-500 max-w-646 mx-auto wow bounceInUp' style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Chúng tôi không ngừng kiến tạo các chương trình dã ngoại, sự kiện giáo dục và chuyên đề kỹ năng sống thực chất, an toàn, tràn đầy niềm vui.
          </p>
        </div>

        {/* Phần bên dưới chia 2 cột */}
        <div className='row gy-4 align-items-stretch'>
          {/* Cột Trái - 2 Số liệu thống kê đồng bộ CSS */}
          <div className='col-lg-5 d-flex' data-aos='fade-right'>
            {/* Trên mobile (< 992px) chuyển thành flex-row đứng song song */}
            <div className='why-stats-container d-flex flex-row flex-lg-column justify-content-between w-100'>
              {/* Card 1: 15+ Năm */}
              <div
                className='animation-item why-stats-card border rounded-16 hover-border-main-600 transition-03 bg-img position-relative overflow-hidden d-flex flex-column flex-sm-row align-items-center align-items-sm-center gap-3 gap-sm-32'
                style={{
                  backgroundImage: "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <span className='why-count-text'>
                      {isVisible ? <CountUp end={15} /> : 0}+
                    </span>
                  )}
                </VisibilitySensor>
                <span className='text-neutral-700 why-label-text'>
                  Năm đồng hành cùng nhà trường & phụ huynh
                </span>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0 d-none d-sm-block'
                />
              </div>

              {/* Card 2: 99% Sự hài lòng */}
              <div
                className='animation-item why-stats-card border rounded-16 hover-border-main-600 transition-03 bg-img position-relative overflow-hidden d-flex flex-column flex-sm-row align-items-center align-items-sm-center gap-3 gap-sm-32'
                style={{
                  backgroundImage: "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <span className='why-count-text'>
                      {isVisible ? <CountUp end={99} /> : 0}%
                    </span>
                  )}
                </VisibilitySensor>
                <span className='text-neutral-700 why-label-text'>
                  Học sinh hào hứng & phụ huynh an tâm tuyệt đối
                </span>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0 d-none d-sm-block'
                />
              </div>
            </div>
          </div>

          {/* Cột Phải - Ảnh minh họa & Checklist */}
          <div className='col-lg-7' data-aos='fade-left'>
            <div className='row gy-4 align-items-stretch h-100'>
              {/* Hình ảnh minh họa - Ẩn trên mobile & tablet nhỏ (< 768px) để thu gọn chiều dọc */}
              <div className='col-md-6 d-none d-md-block'>
                <div className='position-relative rounded-16 overflow-hidden border border-neutral-30 hover-border-main-600 transition-03 h-100 shadow-sm'>
                  <img
                    src='assets/images/thumbs/choose-us-img1.png'
                    alt='Trải nghiệm ABA'
                    className='w-100 img-fluid h-100'
                    style={{ objectFit: 'cover', minHeight: '300px' }}
                  />
                </div>
              </div>

              {/* Văn bản & Check-list */}
              <div className='col-md-6 d-flex flex-column justify-content-between py-12'>
                <div>
                  <p className='tw-text-base fw-medium text-neutral-700 mb-16' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Với hơn 15 năm kinh nghiệm, ABA tự hào là đối tác chiến lược đồng hành cùng hàng trăm trường học trong việc thiết kế và tổ chức các chương trình dã ngoại trải nghiệm, sự kiện giáo dục và chuyên đề kỹ năng sống thực chất. Chúng tôi không chỉ tạo ra những chuyến đi, mà kiến tạo những bài học cuộc sống đáng nhớ.
                  </p>
                  <p className='tw-text-sm fw-normal text-neutral-500 mb-32' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Thông qua các hoạt động tương tác thực tế sống động, học sinh được khơi dậy cảm hứng học hỏi tự nhiên, rèn luyện tư duy tự lập, tinh thần đồng đội và bản lĩnh vững vàng trước tương lai.
                  </p>
                </div>

                {/* Check list */}
                <div className='d-flex flex-column gap-3'>
                  <div className='d-flex align-items-start gap-12'>
                    <span 
                      className='text-main-600 border border-main-200 rounded-circle bg-main-25 d-flex align-items-center justify-content-center'
                      style={{ width: '28px', height: '28px', minWidth: '28px', marginTop: '2px' }}
                    >
                      <i className='ph-bold ph-check' style={{ fontSize: '14px' }} />
                    </span>
                    <span className='text-neutral-700 fw-semibold' style={{ fontSize: '15px' }}>Quy trình vận hành khép kín, kiểm soát an toàn tuyệt đối.</span>
                  </div>

                  <div className='d-flex align-items-start gap-12'>
                    <span 
                      className='text-main-600 border border-main-200 rounded-circle bg-main-25 d-flex align-items-center justify-content-center'
                      style={{ width: '28px', height: '28px', minWidth: '28px', marginTop: '2px' }}
                    >
                      <i className='ph-bold ph-check' style={{ fontSize: '14px' }} />
                    </span>
                    <span className='text-neutral-700 fw-semibold' style={{ fontSize: '15px' }}>Nội dung độc quyền, bám sát định hướng của Bộ GD&ĐT.</span>
                  </div>

                  <div className='d-flex align-items-start gap-12'>
                    <span 
                      className='text-main-600 border border-main-200 rounded-circle bg-main-25 d-flex align-items-center justify-content-center'
                      style={{ width: '28px', height: '28px', minWidth: '28px', marginTop: '2px' }}
                    >
                      <i className='ph-bold ph-check' style={{ fontSize: '14px' }} />
                    </span>
                    <span className='text-neutral-700 fw-semibold' style={{ fontSize: '15px' }}>Huấn luyện viên giàu chuyên môn, truyền cảm hứng mạnh mẽ.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseABA;
