import Link from "next/link";

const FeaturesThree = () => {
  return (
    <section className='py-120'>
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
                <span>Đánh Thức Tương Lai Con Trẻ</span>
              </div>
              <h2 className='fw-semibold heading-three text-neutral-700 mb-2 wow bounceIn'>
                Giá Trị Cốt Lõi Tại ABA
              </h2>
            </div>
            <div className='max-w-416-px'>
              <p className='tw-text-base fw-medium text-neutral-700 mb-0 wow bounceInUp'>
                Chúng tôi không ngừng kiến tạo các chương trình dã ngoại, sự kiện giáo dục và chuyên đề kỹ năng sống thực chất, an toàn, tràn đầy niềm vui.
              </p>
            </div>
          </div>
          <div className='row gy-4'>
            {/* Cột 1: TRẢI NGHIỆM THỰC TIỄN */}
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                  style={{ width: '80px', height: '80px', fontSize: '40px' }}
                >
                  <i className='ph-bold ph-compass' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    01 / Thực tiễn
                  </span>
                  <h4 className='mb-16'>TRẢI NGHIỆM THỰC TẾ</h4>
                  <p className='tw-text-sm' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Đề cao triết lý "Học qua trải nghiệm". Các chuyến dã ngoại, hướng nghiệp hay kỹ năng hè của ABA được thiết kế sinh động, thiết thực phát triển phẩm chất và năng lực của học sinh, nói không với việc đi chơi thông thường.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
                />
              </div>
            </div>

            {/* Cột 2: AN TOÀN LÀ SỐ 1 */}
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                  style={{ width: '80px', height: '80px', fontSize: '40px' }}
                >
                  <i className='ph-bold ph-shield-check' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    02 / Chuyên nghiệp
                  </span>
                  <h4 className='mb-16'>AN TOÀN LÀ SỐ 1</h4>
                  <p className='tw-text-sm' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Sự an tâm của nhà trường và phụ huynh là ưu tiên cao nhất. Quy trình vận chuyển, điều phối sự kiện, y tế và giám sát học sinh được vận hành chặt chẽ, chuyên nghiệp bởi đội ngũ giàu kinh nghiệm của ABA.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
                />
              </div>
            </div>

            {/* Cột 3: NIỀM VUI & KHÁM PHÁ */}
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                  style={{ width: '80px', height: '80px', fontSize: '40px' }}
                >
                  <i className='ph-bold ph-smiley' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    03 / Truyền cảm hứng
                  </span>
                  <h4 className='mb-16'>NIỀM VUI & KHÁM PHÁ</h4>
                  <p className='tw-text-sm' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Khơi gợi năng lượng tích cực, niềm hứng thú học tập và gắn kết tình bạn. Các sự kiện lễ hội trường học như Lễ hội nước, trại kỹ năng được tổ chức năng động, vui tươi, giúp các em khám phá tối đa tiềm năng bản thân.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
                />
              </div>
            </div>

            {/* Cột 4: ĐỒNG HÀNH & KẾT NỐI */}
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <div
                  className='mb-40 d-flex align-items-center justify-content-center text-main-600 border border-main-100 rounded-circle bg-main-25 animate__wobble'
                  style={{ width: '80px', height: '80px', fontSize: '40px' }}
                >
                  <i className='ph-bold ph-handshake' />
                </div>
                <div>
                  <span className='fw-semibold text-main-600 mb-12 d-block'>
                    04 / Kết nối
                  </span>
                  <h4 className='mb-16'>ĐỒNG HÀNH & KẾT NỐI</h4>
                  <p className='tw-text-sm' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    ABA đồng hành cùng Nhà trường, Thầy cô và Phụ huynh qua dịch vụ chuyển giao tài nguyên học liệu, cho thuê trang thiết bị, đạo cụ sự kiện. Tạo nên mối gắn kết chặt chẽ nhằm mang đến hạnh phúc cho thế hệ trẻ.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
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
