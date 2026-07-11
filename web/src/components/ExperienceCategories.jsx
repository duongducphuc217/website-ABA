import Link from "next/link";

const ExperienceCategories = () => {
  const categories = [
    {
      id: "creative-day",
      title: "Ngày Hội Trải Nghiệm Sáng Tạo",
      subtitle: "STEM - Kỹ Năng - Văn Hóa Dân Gian",
      desc: "Chương trình dã ngoại học sinh mang tới các hoạt động trải nghiệm đa dạng, tích hợp kiến thức thực tiễn học đường.",
      img: "/assets/images/thumbs/exp-creative-day.png",
      iconClass: "ph-bold ph-lightbulb",
      badgeColor: "bg-main-50 text-main-600",
      features: [
        "Trò chơi vận động: Núi hơi khổng lồ, sâu hơi siêu tốc, ngựa hơi, truyền bóng yoga.",
        "Kỹ năng sinh tồn: Hướng dẫn tạo lửa bằng đá lửa, lọc nước củi cát, băng bó cứu thương.",
        "Nghệ thuật dân gian: Trải nghiệm tự in tranh Đông Hồ 4 màu truyền thống.",
        "Trí tuệ STEM: 16 bộ lắp ráp STEM kit thực tế, sân đấu Rung chuông vàng sôi động."
      ],
      priceOpt: "Gói nửa ngày / Cả ngày / Thuê tự vận hành"
    },
    {
      id: "water-festival",
      title: "Lễ Hội Nước Mùa Hè",
      subtitle: "Water Festival & Kỹ Năng An Toàn Nước",
      desc: "Vẫy vùng trong dòng nước mát lạnh, đánh tan nắng nóng mùa hè và khơi dậy năng lượng gắn kết bè bạn.",
      img: "/assets/images/thumbs/exp-water-fest.png",
      iconClass: "ph-bold ph-drop",
      badgeColor: "bg-main-two-50 text-main-two-600",
      features: [
        "Nhà phao liên hoàn: 01 núi hơi trượt nước khổng lồ và 02 bể vầy lớn.",
        "Thể thao dưới nước: Sân bóng đá nước bơm hơi, sàn đấu bowling trượt nước.",
        "Cầu thăng bằng hơi: Thử thách bước qua cầu hơi thăng bằng kịch tính.",
        "Hoạt náo đặc sắc: Hệ thống máy tạo bọt tuyết khổng lồ, Mascot Robot biến hình, MC náo nhiệt."
      ],
      priceOpt: "Đã bao gồm bài giảng phòng chống đuối nước"
    },
    {
      id: "history-roleplay",
      title: "Trải Nghiệm Lịch Sử & Về Nguồn",
      subtitle: "Tái Hiện Lịch Sử - Khơi Dậy Tinh Thần Yêu Nước",
      desc: "Giúp học sinh hóa thân nhân vật lịch sử, rèn luyện kỹ năng làm việc nhóm, giao tiếp và lòng tự hào dân tộc.",
      img: "/assets/images/thumbs/exp-history.png",
      iconClass: "ph-bold ph-flag",
      badgeColor: "bg-danger-50 text-danger-600",
      features: [
        "Đoàn Vệ Quốc Quân: Hóa thân chiến sĩ, vượt chướng ngại vật trấu, ném bom ba càng khổng lồ.",
        "Trận Địa Phòng Không: Bắn tên lửa khí hơi, phối hợp đánh bại bia máy bay xâm lược.",
        "Sa bàn lịch sử: Lắp ráp mô hình chiến trường quân sự bằng bìa cứng kèm bài giảng ý nghĩa.",
        "Hành trình kiến thức: Quizzes giải đố các cột mốc lịch sử hào hùng Việt Nam."
      ],
      priceOpt: "Phù hợp quy mô lớn từ 12 lớp/buổi"
    },
    {
      id: "outing-app",
      title: "Dã Ngoại Công Nghệ 4.0 (Outing App)",
      subtitle: "Số Hóa GPS - Khám Phá Làng Văn Hóa Dân Tộc",
      desc: "Trải nghiệm teambuilding thời đại mới, học sinh tự định vị GPS trên điện thoại để hoàn thành thử thách tại điểm đến.",
      img: "/assets/images/thumbs/exp-outing-app.png",
      iconClass: "ph-bold ph-navigation-arrow",
      badgeColor: "bg-purple-50 text-purple-600",
      features: [
        "Số hóa thử thách: Nhận gợi ý bằng ảnh/video và quét định vị GPS địa bàn qua App Outing.",
        "Làng Cơ Tu & Khmer: Trải nghiệm làm bánh sừng trâu, múa kiếm, điệu múa khỉ độc đáo.",
        "Làng Mường & Thái: Thử tài hái chè, cồng chiêng, múa sạp dân tộc và làm xôi ngũ sắc.",
        "Bản đồ kỹ thuật số: Mỗi học sinh tự vẽ và tô màu bản đồ di sản quốc gia sau chuyến đi."
      ],
      priceOpt: "Thời gian: 1 ngày | Đối tượng: Học sinh THCS / THPT"
    },
    {
      id: "traditional-festival",
      title: "Lễ Hội Truyền Thống (Trung Thu & Tết)",
      subtitle: "Trung Thu Cổ Tích - Lễ Hội Bánh Chưng & Chợ Xuân",
      desc: "Cảm nhận không khí Tết cổ truyền và Tết Đoàn viên của dân tộc, tự tay làm nên những sản phẩm văn hóa.",
      img: "/assets/images/thumbs/exp-traditional-fest.png",
      iconClass: "ph-bold ph-calendar-star",
      badgeColor: "bg-warning-50 text-warning-600",
      features: [
        "Gói Bánh Chưng Tết: Tự tay chuẩn bị lá dong, nếp thơm, đỗ xanh, gói bánh chưng truyền thống.",
        "Hội Chợ Xuân & Trò Chơi Dân Gian: Gian hàng quê mộc mạc, chơi đập niêu, nhảy bao bố, kéo co.",
        "Đêm Hội Trăng Rằm: Làm bánh nướng bánh dẻo trung thu, tự ráp lồng đèn tre sáng tạo.",
        "Giao lưu nghệ thuật: Xiếc ảo thuật kỳ thú, chú hề bong bóng và múa lân sư rồng sôi động."
      ],
      priceOpt: "Trải nghiệm văn hóa Việt Nam sâu sắc"
    },
    {
      id: "school-events",
      title: "Sự Kiện Học Đường & Tri Ân",
      subtitle: "Tiệc Tri Ân - Gala Tốt Nghiệp - Ngày Hội Chào Năm Mới",
      desc: "Những cột mốc quan trọng trên hành trình trưởng thành, lưu lại kỷ niệm tươi đẹp bên thầy cô, bè bạn.",
      img: "/assets/images/thumbs/exp-school-events.png",
      iconClass: "ph-bold ph-graduation-cap",
      badgeColor: "bg-success-50 text-success-600",
      features: [
        "Lễ Tri Ân & Trưởng Thành: Bục sân khấu chuyên nghiệp, bài phát biểu tri ân cảm xúc.",
        "Đêm nhạc bùng nổ: Hệ thống âm thanh ánh sáng hiện đại, DJ/Ca sĩ khách mời náo nhiệt.",
        "Chụp ảnh kỷ yếu: Photo booth thiết kế độc đáo lưu giữ khoảnh khắc tuổi học trò tinh nghịch.",
        "Gala Dinner: Không gian ấm cúng, buffet và trò chơi sân khấu gắn kết toàn khóa."
      ],
      priceOpt: "Thiết kế trọn gói theo yêu cầu của từng trường"
    }
  ];

  return (
    <section className='featured-courses py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-compass' />
            </span>
            <h5 className='text-main-600 mb-0'>Danh mục hoạt động</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Các Chương Trình Trải Nghiệm Nổi Bật Tại ABA
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            ABA thiết kế đa dạng các hoạt động học tập trải nghiệm ngoài trời, bám sát định hướng phát triển năng lực, mang lại niềm vui khám phá thực chất cho từng lứa tuổi học sinh.
          </p>
        </div>

        <div className='row gy-4'>
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className='col-lg-6 col-md-12'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 100}
            >
              <div className='card h-100 border border-neutral-30 rounded-16 p-24 bg-white transition-2 hover-shadow-md d-flex flex-column'>
                <div className='row gy-4 flex-grow-1'>
                  <div className='col-sm-5'>
                    <div className='position-relative h-100 rounded-12 overflow-hidden' style={{ minHeight: "220px" }}>
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className='w-100 h-100 object-fit-cover transition-2'
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                      <span className={`position-absolute top-12 left-12 px-12 py-6 rounded-8 text-xs fw-semibold ${cat.badgeColor} box-shadow-sm`}>
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-7 d-flex flex-column'>
                    <div className='flex-grow-1'>
                      <div className='flex-align gap-12 mb-12'>
                        <span className='w-40 h-40 flex-center bg-main-25 rounded-circle text-main-600 text-xl flex-shrink-0'>
                          <i className={cat.iconClass} />
                        </span>
                        <h4 className='text-neutral-800 text-lg fw-semibold mb-0 line-clamp-1'>
                          {cat.title}
                        </h4>
                      </div>
                      <p className='text-neutral-500 text-sm mb-16 line-clamp-2' style={{ textAlign: "justify" }}>
                        {cat.desc}
                      </p>
                      <ul className='mb-20 ps-0 list-unstyled'>
                        {cat.features.map((feat, fIdx) => (
                          <li key={fIdx} className='flex-align align-items-start gap-8 mb-8 text-neutral-600 text-xs'>
                            <i className='ph-bold ph-check text-success-600 text-sm mt-2 flex-shrink-0' />
                            <span className='line-clamp-2' style={{ textAlign: "justify" }}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='pt-16 border-top border-neutral-20 mt-auto flex-between flex-wrap gap-12'>
                      <span className='text-neutral-500 text-xs italic'>
                        <i className='ph-bold ph-info text-sm me-4' />
                        {cat.priceOpt}
                      </span>
                      <Link
                        href='/contact'
                        className='btn btn-main-two-600 text-xs px-16 py-8 rounded-8 text-white flex-align gap-4 fw-medium hover-bg-main-two-700 transition-1'
                      >
                        Đăng ký
                        <i className='ph-bold ph-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCategories;
