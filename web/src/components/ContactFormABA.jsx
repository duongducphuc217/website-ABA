"use client";

const ContactFormABA = () => {
  return (
    <section className='join-community'>
      <div className='container container--lg'>
        <div className='bg-main-25 rounded-20 py-120 px-8'>
          <div className='container'>
            <div className='row gy-4 align-items-center'>
              <div className='col-lg-6'>
                <div className='join-community__content'>
                  <div className='mb-40'>
                    <h2 className='mb-24 wow bounceIn'>
                      Đăng ký tư vấn chương trình
                    </h2>
                    <p className='text-neutral-500 text-line-2 wow bounceInUp' style={{ textAlign: "justify" }}>
                      Hãy để lại thông tin của quý trường hoặc cá nhân để đội ngũ chuyên viên ABA liên hệ tư vấn giải pháp giáo dục, dã ngoại và sự kiện phù hợp nhất.
                    </p>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div
                      className='mb-24 position-relative'
                      data-aos='fade-up-left'
                      data-aos-duration={400}
                    >
                      <input
                        type='text'
                        className='bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100'
                        placeholder='Nhập họ tên...'
                      />
                      <span className='bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y'>
                        <i className='ph-bold ph-user-circle' />
                      </span>
                    </div>
                    <div
                      className='mb-24 position-relative'
                      data-aos='fade-up-left'
                      data-aos-duration={600}
                    >
                      <input
                        type='email'
                        className='bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100'
                        placeholder='Nhập địa chỉ email...'
                      />
                      <span className='bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y'>
                        <i className='ph-bold ph-envelope-open' />
                      </span>
                    </div>
                    <div
                      className='mb-24 position-relative'
                      data-aos='fade-up-left'
                      data-aos-duration={800}
                    >
                      <select className='bg-white text-black border border-transparent focus-border-main-600 h-48 rounded-pill px-16 ps-60 outline-0 w-100 text-neutral-500'>
                        <option value="">Bạn muốn đăng ký tư vấn cho?</option>
                        <option value="1">Ban Giám Hiệu / Nhà Trường</option>
                        <option value="2">Quý Phụ Huynh Học Sinh</option>
                        <option value="3">Đại diện Công ty / Doanh nghiệp</option>
                      </select>
                      <span className='bg-white text-neutral-200 text-2xl flex-center w-48 h-48 rounded-circle border border-main-25 border-4 position-absolute inset-inline-start-0 top-50 translate-middle-y'>
                        <i className='ph-bold ph-users' />
                      </span>
                    </div>
                    <div
                      className='mt-40 position-relative'
                      data-aos='fade-up-left'
                      data-aos-duration={1000}
                    >
                      <button
                        type='submit'
                        className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                      >
                        Gửi yêu cầu ngay
                        <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='join-community__thumb text-end position-relative'>
                  <img
                    src='/assets/images/thumbs/join-community-img.png'
                    alt='Đăng ký tư vấn ABA'
                    className='wow bounceIn'
                    data-tilt=''
                    data-tilt-max={12}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-full-page-listening=''
                  />
                  <div className='offer-message style-two px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                    <span className='banner-box__icon flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle'>
                      <i className='ph-bold ph-calendar-check' />
                    </span>
                    <div className='text-start'>
                      <h6 className='mb-4'>15+ Năm</h6>
                      <span className=''>Kinh nghiệm thực chiến</span>
                    </div>
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

export default ContactFormABA;
