import Link from "next/link";

const FeaturesThree = () => {
  return (
    <section className='py-120'>
      {/* CSS tùy biến cho mobile */}
      <style>{`
        .why-feature-card {
          padding: 32px;
        }
        .why-feature-icon {
          width: 80px;
          height: 80px;
          font-size: 40px;
        }
        .why-feature-card h4 {
          font-size: 18px;
          font-weight: 700;
        }
        @media (max-width: 575px) {
          .why-feature-card {
            padding: 16px;
          }
          .why-feature-icon {
            width: 48px;
            height: 48px;
            font-size: 24px;
            margin-bottom: 16px !important;
          }
          .why-feature-card h4 {
            font-size: 13px;
            margin-bottom: 0px !important;
          }
          .why-feature-card span.text-main-600 {
            font-size: 11px;
            margin-bottom: 6px !important;
          }
        }
      `}</style>

      <div className='container'>
        <div>
          <div className='d-flex justify-content-between mb-60 align-items-start flex-wrap gap-20'>
            <div>
              <div
                className='fw-semibold text-main-800 text-xl d-flex align-items-start gap-8 mb-16 flex-wrap'
                data-aos='fade-down'
              >
                <span>
                  <i className='ph-bold ph-book-open' />
                </span>
                <span>Khởi Dậy Tiềm Năng Con Trẻ</span>
              </div>
              <h2 className='fw-semibold heading-three text-neutral-700 mb-2 wow bounceIn'>
                Triết Lý Giáo Dục Tại ABA
              </h2>
            </div>
            <div className='max-w-416-px'>
              <p className='tw-text-base fw-medium text-neutral-700 mb-0 wow bounceInUp'>
                Mọi chương trình trải nghiệm của ABA đều được xây dựng trên nền tảng giáo dục hiện đại, lấy sự thấu hiểu tâm lý và thực hành kỹ năng thực tế làm trọng tâm.
              </p>
            </div>
          </div>
          
          <div className='row gy-4 gx-3 gx-sm-4'>
            {/* Cột 1: MỤC TIÊU */}
            <div
              className='col-lg-3 col-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div
                className='animation-item why-feature-card border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='why-feature-icon mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                >
                  <i className='ph-bold ph-target' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    01 / Khát vọng
                  </span>
                  <h4 className='mb-16'>MỤC TIÊU</h4>
                  <p className='tw-text-sm d-none d-sm-block' style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: 0 }}>
                    Khơi dậy, phát huy tối ưu tiềm năng và phát triển năng lực toàn diện cho học sinh. Rèn luyện tinh thần chủ động, tích cực và thích ứng linh hoạt trong mọi hoàn cảnh để tự tin làm chủ cuộc sống và tương lai.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0 d-none d-sm-block'
                />
              </div>
            </div>

            {/* Cột 2: PHƯƠNG PHÁP */}
            <div
              className='col-lg-3 col-6'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              <div
                className='animation-item why-feature-card border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='why-feature-icon mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                >
                  <i className='ph-bold ph-strategy' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    02 / Hành động
                  </span>
                  <h4 className='mb-16'>PHƯƠNG PHÁP</h4>
                  <p className='tw-text-sm d-none d-sm-block' style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: 0 }}>
                    Tiên phong ứng dụng phương pháp giáo dục tiên tiến 4.0. Đề cao sự tương tác và trải nghiệm thực tế với phương châm lấy việc chiếm lĩnh tri thức và thực hành kỹ năng làm trung tâm của hoạt động huấn luyện.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0 d-none d-sm-block'
                />
              </div>
            </div>

            {/* Cột 3: HUẤN LUYỆN VIÊN */}
            <div
              className='col-lg-3 col-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div
                className='animation-item why-feature-card border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='why-feature-icon mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                >
                  <i className='ph-bold ph-graduation-cap' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    03 / Con người
                  </span>
                  <h4 className='mb-16'>HUẤN LUYỆN VIÊN</h4>
                  <p className='tw-text-sm d-none d-sm-block' style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: 0 }}>
                    Đội ngũ giảng viên, huấn luyện viên là những chuyên gia giáo dục có đầy đủ phẩm chất, năng lực và kinh nghiệm thực tiễn. Luôn nắm vững tâm lý học lứa tuổi, giàu lòng yêu trẻ và đam mê hoạt động kỹ năng sống.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0 d-none d-sm-block'
                />
              </div>
            </div>

            {/* Cột 4: ĐỘT PHÁ */}
            <div
              className='col-lg-3 col-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              <div
                className='animation-item why-feature-card border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='why-feature-icon mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                >
                  <i className='ph-bold ph-lightbulb' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    04 / Tầm nhìn
                  </span>
                  <h4 className='mb-16'>ĐỘT PHÁ</h4>
                  <p className='tw-text-sm d-none d-sm-block' style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: 0 }}>
                    Không ngừng sáng tạo không gian và hình thức huấn luyện mới, tối ưu hóa tính hiệu quả bền vững của giáo dục trải nghiệm. Thắt chặt liên kết tương tác đa chiều giữa Trung tâm – Học sinh – Gia đình – Nhà trường.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0 d-none d-sm-block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesThree;
