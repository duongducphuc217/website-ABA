import Link from "next/link";

const KnsIntro = () => {
  return (
    <section className='kns-intro py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6'>
            <div className='kns-intro-thumb text-center position-relative' data-aos='zoom-in' data-aos-duration={1000}>
              <img
                src='/assets/images/thumbs/kns-assembly-stage.png'
                alt='Sinh hoạt chuyên đề dưới cờ ABA'
                className='w-100 rounded-16 cover-img wow bounceIn'
                style={{ maxWidth: "540px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))" }}
              />
              <div className='position-absolute inset-block-end-0 inset-inline-start-0 mb-24 ms-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='w-40 h-40 flex-center bg-main-600 text-white rounded-circle text-lg'>
                  <i className='ph-bold ph-certificate' />
                </span>
                <div className='text-start'>
                  <h6 className='text-neutral-800 mb-0 text-sm'>Được Sở GD&ĐT Hà Nội</h6>
                  <span className='text-neutral-500 text-xs'>Cấp phép chính thức</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='kns-intro-content ps-lg-4'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-microphone-stage' />
                </span>
                <h5 className='text-main-600 mb-0'>Hành trình con trưởng thành</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Chương Trình Sinh Hoạt Chuyên Đề Dưới Cờ
              </h2>
              <p className='text-neutral-500 mb-20 wow bounceInUp' style={{ textAlign: "justify" }}>
                Hiện nay, theo định hướng đổi mới giáo dục của Bộ Giáo dục và Đào tạo, giờ chào cờ đầu tuần và các chuyên đề sân trường không chỉ còn là hoạt động sinh hoạt tập thể đơn thuần, mà đã trở thành **một hình thức giáo dục trải nghiệm bắt buộc**, giúp học sinh rèn luyện kỹ năng sống, hình thành phẩm chất và phát triển năng lực toàn diện.
              </p>
              <p className='text-neutral-500 mb-24 wow bounceInUp' style={{ textAlign: "justify" }}>
                Trung tâm Đào tạo, Tư vấn và Phát triển ABA là **đơn vị duy nhất được Sở Giáo dục và Đào tạo Hà Nội cấp phép chính thức** tổ chức hoạt động giáo dục kỹ năng thông qua trải nghiệm. Với hơn 15 năm kinh nghiệm, chúng tôi dàn dựng các chuyên đề dưới dạng sân khấu hóa sinh động, giúp học sinh trải nghiệm thực tế - học qua hành động - và trưởng thành sâu sắc.
              </p>

              <div className='flex-align gap-24 flex-wrap mt-32'>
                <Link
                  href='/contact'
                  className='btn btn-main-600 px-32 py-16 rounded-12 text-white hover-bg-main-700 transition-1 flex-align d-inline-flex gap-8 fw-semibold'
                >
                  Đăng ký chuyên đề cho trường
                  <i className='ph-bold ph-arrow-right' />
                </Link>
                <div className='d-flex align-items-center gap-12'>
                  <span className='w-48 h-48 rounded-circle bg-warning-50 text-warning-600 flex-center text-xl flex-shrink-0'>
                    <i className='ph-bold ph-crown' />
                  </span>
                  <div>
                    <h6 className='text-neutral-800 text-sm fw-semibold mb-0'>15+ Năm Kinh Nghiệm</h6>
                    <span className='text-neutral-400 text-xs'>Đồng hành cùng hàng trăm trường học</span>
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

export default KnsIntro;
