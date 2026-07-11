import Link from "next/link";

const PropRentalABA = () => {
  return (
    <section className='prop-rental py-120 bg-white overflow-hidden position-relative'>
      <div className='container'>
        <div className='row align-items-center gy-5 flex-row-reverse'>
          <div className='col-lg-6'>
            <div className='prop-rental-content ps-lg-4'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-package' />
                </span>
                <h5 className='text-main-600 mb-0'>Dịch vụ cho thuê & Chuyển giao</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Cho Thuê Đạo Cụ Teambuilding & Trang Thiết Bị Sự Kiện Trường Học
              </h2>
              <p className='text-neutral-500 mb-32 wow bounceInUp' style={{ textAlign: "justify" }}>
                Nhằm chia sẻ giá trị và tạo điều kiện cho các trường học tự chủ tổ chức các ngày hội trải nghiệm với chi phí tối ưu, Trung tâm ABA cung cấp dịch vụ cho thuê đạo cụ, đồ chơi teambuilding lớn và các trang thiết bị sự kiện chất lượng cao kèm đội ngũ hỗ trợ kỹ thuật tận tâm.
              </p>

              <div className='row gy-4'>
                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={600}>
                  <div className='flex-align align-items-start gap-12'>
                    <i className='ph-bold ph-speaker-high text-main-600 text-2xl mt-4 flex-shrink-0' />
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Thiết Bị Sự Kiện</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Hệ thống âm thanh ánh sáng ngoài trời, màn hình LED sắc nét, dù tròn lớn che nắng, giàn khung sân khấu kiên cố.
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={800}>
                  <div className='flex-align align-items-start gap-12'>
                    <i className='ph-bold ph-palette text-main-600 text-2xl mt-4 flex-shrink-0' />
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Thiết Kế & Trang Trí</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Sản xuất thiết kế cổng chào sự kiện, thi công backdrop chụp ảnh lưu niệm, chữ hộp phát sáng trang trí.
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={1000}>
                  <div className='flex-align align-items-start gap-12'>
                    <i className='ph-bold ph-soccer-ball text-main-600 text-2xl mt-4 flex-shrink-0' />
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Đạo Cụ Hơi Khổng Lồ</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Núi hơi khổng lồ, sâu hơi nhiều màu, ngựa hơi tinh nghịch, bạt trượt nước, bóng yoga khổng lồ, xô truyền nước.
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={1200}>
                  <div className='flex-align align-items-start gap-12'>
                    <i className='ph-bold ph-user-gear text-main-600 text-2xl mt-4 flex-shrink-0' />
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Kỹ Thuật Viên Hỗ Trợ</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Đội ngũ nhân sự chuyên nghiệp trực tiếp vận chuyển, lắp đặt, tháo dỡ và hướng dẫn trò chơi nhiệt tình.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-40' data-aos='fade-up' data-aos-duration={1400}>
                <Link
                  href='/contact'
                  className='btn btn-main-two-600 px-32 py-16 rounded-12 text-white hover-bg-main-two-700 transition-1 flex-align d-inline-flex gap-8 fw-semibold'
                >
                  Yêu cầu báo giá
                  <i className='ph-bold ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='prop-rental-thumb text-center position-relative' data-aos='zoom-in' data-aos-duration={1000}>
              <img
                src='/assets/images/thumbs/exp-prop-rental.png'
                alt='Cho thuê đạo cụ teambuilding ABA'
                className='w-100 rounded-16 cover-img wow bounceIn'
                style={{ maxWidth: "540px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))" }}
                data-tilt=''
                data-tilt-max={10}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              />
              <div className='position-absolute inset-block-start-0 inset-inline-end-0 mt-24 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='w-40 h-40 flex-center bg-main-600 text-white rounded-circle text-lg'>
                  <i className='ph-bold ph-package' />
                </span>
                <div className='text-start'>
                  <h6 className='text-neutral-800 mb-0 text-sm'>Đạo Cụ Hơi</h6>
                  <span className='text-neutral-500 text-xs'>Luôn sẵn kho lớn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropRentalABA;
