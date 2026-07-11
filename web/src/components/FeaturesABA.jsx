import Link from "next/link";

const FeaturesABA = () => {
  return (
    <section className='features-two half-bg py-120 position-relative overflow-hidden'>
      <img
        src='/assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='/assets/images/shapes/shape4.png'
        alt=''
        className='shape six animation-walking'
      />
      <div className='container'>
        <div className='section-heading style-flex'>
          <div className='section-heading__inner'>
            <h2 className='mb-24 wow bounceInLeft'>
              Phát triển kỹ năng vượt trội, khơi dậy bản lĩnh thế hệ trẻ
            </h2>
          </div>
          <div className='section-heading__content wow bounceInRight'>
            <p className='text-line-2' style={{ textAlign: "justify" }}>
              Khám phá năng lực bản thân, nuôi dưỡng đam mê và tự lập trong hành động. Mỗi trải nghiệm cùng ABA là một bước đệm giúp con vững vàng bước vào tương lai.
            </p>
            <Link
              href='/course'
              className='item-hover__text flex-align d-inline-flex gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1 fw-semibold'
            >
              Xem chi tiết
              <i className='ph ph-arrow-right' />
            </Link>
          </div>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-4 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <img
                  src='/assets/images/icons/features-two-icon1.png'
                  className='animate__bounce'
                  alt=''
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Đào tạo kỹ năng sống
              </h4>
              <p className='transition-1 item-hover__text text-line-2'>
                Bộ chương trình "Hành trình Con trưởng thành", các chuyên đề kỹ năng và khóa học kỹ năng hè toàn diện.
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <img
                  src='/assets/images/icons/features-two-icon2.png'
                  className='animate__bounce'
                  alt=''
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Trải nghiệm & Hướng nghiệp
              </h4>
              <p className='transition-1 item-hover__text text-line-2'>
                Tổ chức các chuyến đi trải nghiệm thực tế định hướng nghề nghiệp trong và ngoài nhà trường cho học sinh.
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600'>
              <span className='mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle'>
                <img
                  src='/assets/images/icons/features-two-icon3.png'
                  className='animate__bounce'
                  alt=''
                />
              </span>
              <h4 className='mb-16 transition-1 item-hover__text'>
                Sự kiện & Lễ hội giáo dục
              </h4>
              <p className='transition-1 item-hover__text text-line-2'>
                Các lễ hội nước hoành tráng, ngày hội chào năm học mới bùng nổ năng lượng và mang đậm giá trị nhân văn.
              </p>
              <span className='item-hover__bg w-48 h-1 bg-neutral-500 mt-32' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesABA;
