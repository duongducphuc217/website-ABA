import Link from "next/link";

const CampPhilosophy = () => {
  return (
    <section className='camp-philosophy py-120 bg-main-25 overflow-hidden position-relative'>
      <div className='container'>
        <div className='row align-items-center gy-5 flex-row-reverse'>
          <div className='col-lg-6'>
            <div className='camp-philosophy-thumb text-center position-relative' data-aos='zoom-in' data-aos-duration={1000}>
              <img
                src='/assets/images/thumbs/camp-philosophy.png'
                alt='Giáo dục bằng tình yêu thương ABA'
                className='w-100 rounded-16 cover-img wow bounceIn'
                style={{ maxWidth: "540px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))" }}
              />
              <div className='position-absolute inset-block-start-0 inset-inline-end-0 mt-24 me-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='w-40 h-40 flex-center bg-danger-600 text-white rounded-circle text-lg'>
                  <i className='ph-bold ph-heart' />
                </span>
                <div className='text-start'>
                  <h6 className='text-neutral-800 mb-0 text-sm'>Tình Yêu Thương</h6>
                  <span className='text-neutral-500 text-xs'>Kim chỉ nam giáo dục</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='camp-philosophy-content pe-lg-4'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-heart-break' />
                </span>
                <h5 className='text-main-600 mb-0'>Triết lý giáo dục nhân văn</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                ABA Lựa Chọn Giáo Dục Bằng Tình Yêu Thương
              </h2>
              <p className='text-neutral-500 mb-20 wow bounceInUp' style={{ textAlign: "justify" }}>
                Tình yêu thương không chỉ là cảm xúc mà còn là hành động, là cách tiếp cận tích cực và không phán xét. Người thầy tại ABA luôn dành thời gian lắng nghe để thấu hiểu từng học viên, từ đó khích lệ các em củng cố sự tự tin và phát hiện năng lực tiềm ẩn của bản thân.
              </p>
              <p className='text-neutral-500 mb-32 wow bounceInUp' style={{ textAlign: "justify" }}>
                Bằng phương pháp này, chúng tôi kiến tạo một môi trường học tập tích cực, giúp các bạn nhỏ phát triển toàn diện cả về học thuật lẫn tinh thần và kỹ năng xã hội, trở thành những cá nhân tự lập, tự trọng và thích ứng tốt trước thế giới nhiều đổi thay.
              </p>

              <div className='row gy-3'>
                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={600}>
                  <div className='flex-align gap-12'>
                    <i className='ph-bold ph-chats-circle text-main-600 text-2xl flex-shrink-0' />
                    <span className='text-neutral-700 text-sm fw-medium'>Lắng nghe & Thấu cảm sâu sắc</span>
                  </div>
                </div>
                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={800}>
                  <div className='flex-align gap-12'>
                    <i className='ph-bold ph-shield-check text-main-600 text-2xl flex-shrink-0' />
                    <span className='text-neutral-700 text-sm fw-medium'>Môi trường học tập không phán xét</span>
                  </div>
                </div>
                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={1000}>
                  <div className='flex-align gap-12'>
                    <i className='ph-bold ph-users-three text-main-600 text-2xl flex-shrink-0' />
                    <span className='text-neutral-700 text-sm fw-medium'>Phát triển năng lực xã hội & Tinh thần</span>
                  </div>
                </div>
                <div className='col-sm-6' data-aos='fade-up' data-aos-duration={1200}>
                  <div className='flex-align gap-12'>
                    <i className='ph-bold ph-sun text-main-600 text-2xl flex-shrink-0' />
                    <span className='text-neutral-700 text-sm fw-medium'>Đồng hành kiến tạo cá nhân tự trọng</span>
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

export default CampPhilosophy;
