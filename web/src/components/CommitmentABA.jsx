const CommitmentABA = () => {
  return (
    <section className='certificate-two py-120 position-relative z-1 mash-bg-main mash-bg-main-two mash-reverse'>
      <div className='section-heading text-center'>
        <h2 className='mb-24 wow bounceIn'>
          Cam kết Vàng từ Trung tâm ABA
        </h2>
        <p className='wow bounceInUp' style={{ maxWidth: "600px", margin: "0 auto" }}>
          Chúng tôi không ngừng nâng cao chất lượng và quy trình để mang đến những giá trị giáo dục thực tế và an toàn nhất cho học sinh.
        </p>
      </div>
      <div className='position-relative'>
        <div className='container'>
          <div className='row align-items-center gy-4'>
            <div className='col-lg-6 pe-lg-5'>
              <div
                className='certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-shield-check' />
                  </span>
                  <h5 className='mb-0'>An toàn là ưu tiên số 1</h5>
                </div>
                <p className='text-neutral-700 text-line-2' style={{ textAlign: "justify" }}>
                  Quy trình vận hành khép kín, đội ngũ cứu hộ y tế túc trực cùng phương án thời tiết dự phòng kỹ lưỡng cho mọi tình huống.
                </p>
              </div>
              <div
                className='certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28'
                data-aos='fade-up'
                data-aos-duration={400}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-book-bookmark' />
                  </span>
                  <h5 className='mb-0'>Giáo án thực chất & Độc quyền</h5>
                </div>
                <p className='text-neutral-700 text-line-2' style={{ textAlign: "justify" }}>
                  Nội dung chương trình bám sát mục tiêu phát triển phẩm chất và năng lực của chương trình Giáo dục phổ thông mới 2018.
                </p>
              </div>
              <div
                className='certificate-two-item animation-item border-bottom border-neutral-50 border-dashed border-0 mb-28 pb-28'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-sparkles' />
                  </span>
                  <h5 className='mb-0'>Đồng hành vượt trội cùng nhà trường</h5>
                </div>
                <p className='text-neutral-700 text-line-2' style={{ textAlign: "justify" }}>
                  Hỗ trợ đạo cụ sự kiện, giáo trình và nguồn lực để nhà trường tự tin tổ chức các chương trình ý nghĩa cho học sinh.
                </p>
              </div>
              <div
                className='certificate-two-item animation-item'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='flex-align gap-20 mb-12'>
                  <span className='w-52 h-52 flex-center d-inline-flex bg-main-25 rounded-circle text-main-600 text-2xl'>
                    <i className='animate__wobble ph-bold ph-smiley' />
                  </span>
                  <h5 className='mb-0'>Trải nghiệm trọn vẹn niềm vui</h5>
                </div>
                <p className='text-neutral-700 text-line-2' style={{ textAlign: "justify" }}>
                  Khơi dậy tinh thần tự lập, sự hào hứng và tư duy đồng đội của mỗi học sinh qua các hoạt động tương tác sôi động.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='certificate-two__thumb'>
                <img
                  src='/assets/images/thumbs/certificate-two-img.png'
                  alt='Cam kết ABA'
                  data-tilt=''
                  data-tilt-max={10}
                  data-tilt-speed={500}
                  data-tilt-perspective={5000}
                  data-tilt-full-page-listening=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentABA;
