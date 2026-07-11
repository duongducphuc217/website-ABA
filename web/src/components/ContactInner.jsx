"use client";

const ContactInner = () => {
  return (
    <>
      <section className='contact py-120'>
        <div className='container'>
          <div className='section-heading text-center'>
            <div className='flex-align d-inline-flex gap-8 mb-16'>
              <span className='text-main-600 text-2xl d-flex'>
                <i className='ph-bold ph-book' />
              </span>
              <h5 className='text-main-600 mb-0'>Thông tin liên hệ</h5>
            </div>
            <h2 className='mb-24'>Chúng tôi luôn sẵn sàng hỗ trợ bạn</h2>
            <p className='text-neutral-500 max-w-700 mx-auto'>
              ABA cam kết mang đến những chương trình giáo dục trải nghiệm, dã ngoại thực tế, sự kiện học đường và trại hè kỹ năng sống sáng tạo, chất lượng và an toàn hàng đầu tại Việt Nam.
            </p>
          </div>
          <div className='row gy-4'>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-map-pin-line' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Địa chỉ văn phòng</h4>
                  <p className='text-neutral-800 fw-medium mb-4'>Trụ sở chính:</p>
                  <p className='text-neutral-500 mb-12'>Số 40 ngõ 1 Phạm Tuấn Tài, Phường Nghĩa Đô, Hà Nội</p>

                  <a
                    href='https://maps.google.com/?q=40+ngõ+1+Phạm+Tuấn+Tài,+Cầu+Giấy,+Hà+Nội'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'
                  >
                    Xem bản đồ
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-envelope-open' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Địa chỉ Email</h4>
                  <p className='text-neutral-500 mb-4'>info@aba.edu.vn</p>
                  <p className='text-neutral-500 mb-24'>namduong@aba.edu.vn</p>
                  <a
                    href='mailto:info@aba.edu.vn'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'
                  >
                    Gửi email ngay
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-phone-call' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Đường dây nóng</h4>
                  <p className='text-neutral-500 mb-4'>Điện thoại: 0912 08 6996</p>
                  <p className='text-neutral-500 mb-24'>Hotline hỗ trợ 24/7</p>
                  <a
                    href='tel:0963443918'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'
                  >
                    Gọi điện tư vấn ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-form-section py-240 bg-main-25 position-relative z-1'>
        <img
          src='assets/images/bg/wave-bg.png'
          alt=''
          className='position-absolute top-0 start-0 w-100 h-100 z-n1 d-lg-block d-none'
        />
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-xl-7 col-lg-6 pe-lg-5'>
              <div className='mb-40 md-xl-5'>
                <div className='flex-align d-inline-flex gap-8 mb-16'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-book' />
                  </span>
                  <h5 className='text-main-600 mb-0'>Gửi liên hệ</h5>
                </div>
                <h2 className='mb-24'>
                  Bạn có câu hỏi? Đừng ngần ngại liên hệ với ABA
                </h2>
                <p className='text-neutral-500 text-line-3 max-w-636' style={{ textAlign: "justify" }}>
                  Chúng tôi luôn nhiệt tình lắng nghe và sẵn sàng đồng hành cùng nhà trường, phụ huynh để mang đến những chương trình giáo dục bổ ích, giúp học sinh khám phá bản thân và phát triển kỹ năng toàn diện.
                </p>
              </div>
              <div className='flex-align gap-40 flex-wrap'>

                <div className=''>
                  <ul className='flex-align gap-4 mb-10'>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                  <span className='text-neutral-700 fw-medium'>
                    {" "}
                    Hơn 10.000+ học viên tin tưởng đồng hành
                  </span>
                </div>
              </div>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <div className='p-24 bg-white rounded-12 box-shadow-md'>
                <div className='border border-neutral-30 rounded-8 bg-main-25 p-24'>
                  <form action='#' id='commentForm' onSubmit={(e) => e.preventDefault()}>
                    <h4 className='mb-0'>Nhận tư vấn chương trình</h4>
                    <span className='d-block border border-neutral-30 my-24 border-dashed' />
                    <div className='mb-24'>
                      <label
                        htmlFor='name'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Họ và tên
                      </label>
                      <input
                        type='text'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='name'
                        placeholder='Nhập họ và tên...'
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='email'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Địa chỉ Email
                      </label>
                      <input
                        type='email'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='email'
                        placeholder='Nhập địa chỉ email...'
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='phone'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Số điện thoại
                      </label>
                      <input
                        type='tel'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='phone'
                        placeholder='Nhập số điện thoại...'
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='desc'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Nội dung yêu cầu / Góp ý
                      </label>
                      <textarea
                        id='desc'
                        className='common-input rounded-24 border-transparent focus-border-main-600 h-110'
                        placeholder='Nhập nội dung yêu cầu chi tiết...'
                        defaultValue={""}
                      />
                    </div>
                    <div className='mb-0'>
                      <button
                        type='submit'
                        className='btn btn-main rounded-pill flex-center gap-8 mt-40'
                      >
                        Gửi thông tin liên hệ
                        <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
