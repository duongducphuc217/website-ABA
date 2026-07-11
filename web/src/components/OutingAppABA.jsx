import Link from "next/link";

const OutingAppABA = () => {
  return (
    <section className='outing-app py-120 bg-main-25 overflow-hidden position-relative'>
      <img
        src='/assets/images/shapes/shape1.png'
        alt=''
        className='shape one animation-rotation d-md-block d-none opacity-25'
      />
      <img
        src='/assets/images/shapes/shape5.png'
        alt=''
        className='shape six animation-walking d-md-block d-none opacity-25'
      />
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6'>
            <div className='outing-app-content pe-lg-4'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-phone-call' />
                </span>
                <h5 className='text-main-600 mb-0'>Teambuilding Công Nghệ 4.0</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Bứt Phá Giới Hạn Trải Nghiệm Cùng Ứng Dụng Outing App
              </h2>
              <p className='text-neutral-500 mb-32 wow bounceInUp' style={{ textAlign: "justify" }}>
                Trung tâm ABA tiên phong ứng dụng công nghệ định vị GPS vào các chương trình teambuilding dã ngoại. Thay vì các chặng game thủ công truyền thống, các em học sinh sẽ tự cầm bản đồ số hóa trên smartphone, định vị GPS để tìm đến các điểm trạm văn hóa và tự giải mã các thử thách học tập độc đáo.
              </p>

              <div className='row gy-4'>
                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={600}>
                  <div className='flex-align align-items-start gap-16'>
                    <span className='w-48 h-48 flex-center bg-white text-main-600 text-xl rounded-circle box-shadow-sm flex-shrink-0'>
                      <i className='ph-bold ph-map-pin' />
                    </span>
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Định Vị GPS Thông Minh</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Bản đồ số hóa dẫn dắt các đội tự tìm đường đến chính xác các làng dân tộc tại Sơn Tây.
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={800}>
                  <div className='flex-align align-items-start gap-16'>
                    <span className='w-48 h-48 flex-center bg-white text-main-600 text-xl rounded-circle box-shadow-sm flex-shrink-0'>
                      <i className='ph-bold ph-chats' />
                    </span>
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Nhiệm Vụ Số Hóa Đa Dạng</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Nhận thử thách, nộp đáp án, tải hình ảnh và video thực hiện trực tiếp qua ứng dụng di động.
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={1000}>
                  <div className='flex-align align-items-start gap-16'>
                    <span className='w-48 h-48 flex-center bg-white text-main-600 text-xl rounded-circle box-shadow-sm flex-shrink-0'>
                      <i className='ph-bold ph-users-three' />
                    </span>
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Phát Huy Năng Lực Đội Nhóm</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Mỗi học sinh đều giữ vai trò chủ động, kích thích tư duy tự quản và khả năng phối hợp đồng đội.
                      </span>
                    </div>
                  </div>
                </div>

                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={1200}>
                  <div className='flex-align align-items-start gap-16'>
                    <span className='w-48 h-48 flex-center bg-white text-main-600 text-xl rounded-circle box-shadow-sm flex-shrink-0'>
                      <i className='ph-bold ph-chart-bar' />
                    </span>
                    <div>
                      <h6 className='text-neutral-800 text-base fw-semibold mb-4'>Bảng Điểm Real-time</h6>
                      <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                        Bảng xếp hạng cập nhật điểm số tức thời giữa các đội tạo không khí thi đấu sôi nổi, đầy kịch tính.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-40' data-aos='fade-up' data-aos-duration={1400}>
                <Link
                  href='/contact'
                  className='btn btn-main-600 px-32 py-16 rounded-12 text-white hover-bg-main-700 transition-1 flex-align d-inline-flex gap-8 fw-semibold'
                >
                  Tìm hiểu thêm
                  <i className='ph-bold ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='outing-app-thumb text-center position-relative' data-aos='zoom-in' data-aos-duration={1000}>
              <img
                src='/assets/images/thumbs/exp-outing-app-mockup.png'
                alt='Outing App Teambuilding ABA'
                className='w-100 rounded-16 cover-img wow bounceIn'
                style={{ maxWidth: "540px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.1))" }}
                data-tilt=''
                data-tilt-max={10}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              />
              <div className='position-absolute inset-block-end-0 inset-inline-start-0 ms-24 mb-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='w-40 h-40 flex-center bg-purple-400 text-white rounded-circle text-lg'>
                  <i className='ph-bold ph-phone' />
                </span>
                <div className='text-start'>
                  <h6 className='text-neutral-800 mb-0 text-sm'>Outing App</h6>
                  <span className='text-neutral-500 text-xs'>Số hóa GPS 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutingAppABA;
