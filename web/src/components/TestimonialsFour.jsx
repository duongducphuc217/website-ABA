"use client";
import React, { useRef } from "react";
import Slider from "react-slick";

const TestimonialsFour = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className='instructor py-120 position-relative z-1'>
      <div className='max-w-632-px text-center mx-auto mb-60'>
        <div
          className='text-20 fw-semibold text-main-600 d-flex gap-8 mb-16 justify-content-center'
          data-aos='fade-down'
        >
          <span>
            <i className='ph-bold ph-book-open' />
          </span>
          <span>Khách Hàng Nói Về ABA</span>
        </div>
        <h2 className='text-neutral-700 mb-24 wow bounceIn'>
          Cảm Nhận Từ Trái Tim
        </h2>
        <p className='text-16 fw-normal wow bounceInUp' style={{ lineHeight: '1.6' }}>
          Những chia sẻ chân thực từ quý thầy cô giáo, phụ huynh học sinh và các nhà quản lý giáo dục sau các chuyến dã ngoại trải nghiệm & chuyên đề kỹ năng ý nghĩa cùng Trung tâm ABA.
        </p>
      </div>
      <Slider className='testimonial-five-slider' ref={sliderRef} {...settings}>
        
        {/* Nhận xét 1 */}
        <div data-aos='zoom-in' data-aos-duration={400} className="px-8">
          <div className='instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04' style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <ul className='d-flex align-items-center gap-8 mb-16'>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
              </ul>
              <p className='mb-32 text-neutral-600' style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'justify', fontStyle: 'italic' }}>
                "Cảm ơn các thầy cô ABA đã cho các con những bài học trải nghiệm đầu đời thật ý nghĩa. Đọc thư con viết mà cảm động quá, chưa bao giờ con nói ra những điều thầm kín ấy cho mẹ biết, giờ thì mẹ cảm nhận được rồi. Cảm ơn tất cả những thầy cô đã vất vả cùng các con. Mong rằng những năm sau lại có dịp được gửi gắm con cho các thầy cô."
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-auto'>
              <div className='d-flex align-items-center gap-20'>
                <img
                  src='assets/images/thumbs/testimonial-five-img1.png'
                  alt='Chị Thúy Hằng'
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h6 className='mb-0 mb-8' style={{ fontSize: '16px', fontWeight: '600' }}>Chị Thuý Hằng</h6>
                  <span className='text-sm text-neutral-500' style={{ fontSize: '13px' }}>Giáo viên Trường THCS Ngô Sĩ Liên</span>
                </div>
              </div>
              <img src='assets/images/icons/testimonial-five.png' alt='icon' />
            </div>
          </div>
        </div>

        {/* Nhận xét 2 */}
        <div data-aos='zoom-in' data-aos-duration={800} className="px-8">
          <div className='instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04' style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <ul className='d-flex align-items-center gap-8 mb-16'>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
              </ul>
              <p className='mb-32 text-neutral-600' style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'justify', fontStyle: 'italic' }}>
                "Hành trình 7 NGÀY SỐNG Ý NGHĨA do Trung tâm ABA tổ chức tại Thục Anh Garden đã khép lại. Đón cậu ấy trở về mình cũng như bao phụ huynh khác, lòng rộn niềm vui, không dám nghĩ những ngày sống và tham gia các hoạt động ở môi trường hoàn toàn mới mẻ cậu ấy lại dễ dàng hòa nhập và sớm “nồng nàn” như thế. Cảm ơn ABA đã hướng cho các con nhìn thấy vẻ đẹp cuộc sống."
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-auto'>
              <div className='d-flex align-items-center gap-20'>
                <img
                  src='assets/images/thumbs/testimonial-five-img2.png'
                  alt='Chị Phương Nguyễn'
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h6 className='mb-0 mb-8' style={{ fontSize: '16px', fontWeight: '600' }}>Chị Phương Nguyễn</h6>
                  <span className='text-sm text-neutral-500' style={{ fontSize: '13px' }}>Phụ huynh học sinh</span>
                </div>
              </div>
              <img src='assets/images/icons/testimonial-five.png' alt='icon' />
            </div>
          </div>
        </div>

        {/* Nhận xét 3 */}
        <div data-aos='zoom-in' data-aos-duration={1200} className="px-8">
          <div className='instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04' style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <ul className='d-flex align-items-center gap-8 mb-16'>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
              </ul>
              <p className='mb-32 text-neutral-600' style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'justify', fontStyle: 'italic' }}>
                "Trung tâm ABA là đối tác uy tín nhiều năm qua của nhà trường. Các chương trình dã ngoại trải nghiệm hướng nghiệp và Lễ hội chào năm học mới luôn được tổ chức cực kỳ chuyên nghiệp, an toàn tuyệt đối và mang tính giáo dục thực tiễn cao, giúp học sinh phát triển năng lực toàn diện."
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-auto'>
              <div className='d-flex align-items-center gap-20'>
                <img
                  src='assets/images/thumbs/testimonial-five-img3.png'
                  alt='Thầy Nguyễn Minh Hải'
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h6 className='mb-0 mb-8' style={{ fontSize: '16px', fontWeight: '600' }}>Thầy Nguyễn Minh Hải</h6>
                  <span className='text-sm text-neutral-500' style={{ fontSize: '13px' }}>Hiệu trưởng Trường Tiểu học</span>
                </div>
              </div>
              <img src='assets/images/icons/testimonial-five.png' alt='icon' />
            </div>
          </div>
        </div>

        {/* Nhận xét 4 */}
        <div data-aos='zoom-in' data-aos-duration={400} className="px-8">
          <div className='instructor-item max-w-636-px scale-hover-item bg-white rounded-16 p-12 border border-neutral-30 hover-border-main-600 border px-32 py-32 hover-bg-main-05 transition-04' style={{ minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <ul className='d-flex align-items-center gap-8 mb-16'>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
                <li className='text-20 text-warning-400'><i className='ph-fill ph-star' /></li>
              </ul>
              <p className='mb-32 text-neutral-600' style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'justify', fontStyle: 'italic' }}>
                "Hoạt động chuyên đề Kỹ năng sống của ABA mang lại thay đổi rõ rệt cho các con lớp tôi. Các con tự lập hơn, biết yêu thương, chia sẻ và chủ động tương tác với bố mẹ nhiều hơn. Đội ngũ huấn luyện viên vô cùng nhiệt tình, nắm vững tâm lý học sinh và tràn đầy năng lượng."
              </p>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-auto'>
              <div className='d-flex align-items-center gap-20'>
                <img
                  src='assets/images/thumbs/testimonial-five-img1.png'
                  alt='Chị Mai Anh'
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h6 className='mb-0 mb-8' style={{ fontSize: '16px', fontWeight: '600' }}>Chị Mai Anh</h6>
                  <span className='text-sm text-neutral-500' style={{ fontSize: '13px' }}>Trưởng ban Phụ huynh lớp</span>
                </div>
              </div>
              <img src='assets/images/icons/testimonial-five.png' alt='icon' />
            </div>
          </div>
        </div>

      </Slider>
      <div className='flex-align gap-16 mt-40 justify-content-center'>
        <button
          type='button'
          id='testimonial-five-prev'
          onClick={() => sliderRef.current.slickPrev()}
          className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          data-aos='fade-right'
        >
          <i className='ph ph-caret-left' />
        </button>
        <button
          type='button'
          id='testimonial-five-next'
          onClick={() => sliderRef.current.slickNext()}
          className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
          data-aos='fade-left'
        >
          <i className='ph ph-caret-right' />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsFour;
