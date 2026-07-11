import React from "react";

const PopularTwo = () => {
  return (
    <section className='d-lg-flex overflow-hidden PopularTwo'>
      <div className='lg-w-50-percent wow bounceIn' data-wow-duration='3s'>
        <img
          src='assets/images/thumbs/faq-five-img1.png'
          alt='Học sinh ABA dã ngoại trải nghiệm'
          className='h-100 w-100'
          style={{ objectFit: "cover", minHeight: "600px" }}
        />
      </div>

      <div className='lg-w-50-percent px-20 px-lg-0'>
        <div className='py-120 max-w-526-px lg-ms-134px'>
          <div className='faq-content'>
            <div className='mb-40'>
              <div className='flex-align d-inline-flex flex-wrap gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-question' />
                </span>
                <h5 className='text-main-600 mb-0'>
                  Giải Đáp Thắc Mắc (FAQs)
                </h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Những Câu Hỏi Thường Gặp
              </h2>
              <p className='text-neutral-500 wow bounceInUp' style={{ fontSize: '16px', lineHeight: '1.6' }}>
                ABA luôn sẵn sàng lắng nghe và giải đáp mọi băn khoăn của Ban giám hiệu nhà trường, Thầy Cô giáo và Quý Phụ Huynh về các hoạt động trải nghiệm dã ngoại & giáo dục kỹ năng.
              </p>
            </div>
            <div className='accordion common-accordion' id='accordionExample'>
              
              {/* Câu hỏi 1 */}
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={400}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    ABA tổ chức những chương trình trải nghiệm nào cho học sinh?
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                      ABA chuyên thiết kế và tổ chức trọn gói các chương trình: dã ngoại trải nghiệm hướng nghiệp (trong & ngoài nhà trường), sự kiện giáo dục quy mô lớn (Lễ hội nước, Trung thu, Hội khóa), các chuyên đề kỹ năng sống (Hành trình Con trưởng thành) và chuyển giao tài nguyên đạo cụ, giáo trình giảng dạy kỹ năng sống cho các nhà trường đối tác.
                    </p>
                  </div>
                </div>
              </div>

              {/* Câu hỏi 2 */}
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={600}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    ABA cam kết thế nào về độ an toàn cho học sinh khi đi dã ngoại?
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                      "An toàn là số 1" là nguyên tắc tuyệt đối tại ABA. Mọi chuyến đi đều tuân thủ quy trình vận hành khép kín chặt chẽ: phương tiện đưa đón đời mới chất lượng cao, đội ngũ nhân viên y tế túc trực 24/7, thực đơn ăn uống đảm bảo vệ sinh ATTP, và huấn luyện viên/điều phối viên theo sát quản lý các em với tỷ lệ nhân sự cao nhất ngành.
                    </p>
                  </div>
                </div>
              </div>

              {/* Câu hỏi 3 */}
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={800}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Đội ngũ huấn luyện viên và giảng viên của ABA có trình độ ra sao?
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                      Đội ngũ huấn luyện viên và giảng viên tại ABA đều là các chuyên gia giáo dục kỹ năng sống, giảng viên sư phạm giàu kinh nghiệm, thấu hiểu tâm lý học lứa tuổi học sinh, yêu trẻ và tràn đầy lòng đam mê, nhiệt huyết. Đội ngũ được đào tạo và kiểm tra nghiệp vụ định kỳ nghiêm ngặt nhằm mang lại trải nghiệm huấn luyện truyền cảm hứng nhất cho các em.
                    </p>
                  </div>
                </div>
              </div>

              {/* Câu hỏi 4 */}
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={1000}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    Chi phí một chuyến trải nghiệm dã ngoại tại ABA gồm những gì?
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                      Chi phí dã ngoại của ABA là chi phí trọn gói và minh bạch, cam kết không phát sinh. Chi phí bao gồm: Xe du lịch đưa đón, vé vào cổng khu du lịch/trải nghiệm, các bữa ăn chính theo tiêu chuẩn dinh dưỡng, bảo hiểm du lịch bắt buộc, đội ngũ huấn luyện viên điều phối, âm thanh đạo cụ trò chơi và quà tặng/phần thưởng kỹ năng cho học sinh.
                    </p>
                  </div>
                </div>
              </div>

              {/* Câu hỏi 5 */}
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={1200}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    Làm thế nào để nhà trường chuyển giao chương trình kỹ năng sống của ABA?
                  </button>
                </h2>
                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc' style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                      Quý nhà trường/thầy cô có thể liên hệ trực tiếp qua số Hotline 0912 08 6996 hoặc để lại thông tin tư vấn. ABA sẽ khảo sát thực tế, tư vấn xây dựng khung chương trình bám sát định hướng đầu ra GDPT 2018 của Bộ GD&ĐT, đồng thời hỗ trợ tập huấn giảng dạy trực tiếp cho thầy cô tại nhà trường để đảm bảo chuyển giao hiệu quả nhất.
                    </p>
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

export default PopularTwo;
