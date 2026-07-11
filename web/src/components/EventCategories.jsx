"use client";

import Link from "next/link";

const EventCategories = () => {
  const events = [
    {
      title: "Lễ Hội Bánh Chưng & Chợ Xuân",
      desc: "Tái hiện không gian chợ Tết truyền thống đậm đà bản sắc Việt. Các em học sinh được tự tay chuẩn bị nguyên liệu, thực hành gói bánh chưng xanh, tham gia các trò chơi dân gian và xin chữ ông đồ cầu may mắn đầu năm.",
      img: "/assets/images/thumbs/exp-traditional-fest.png",
      badge: "Lễ hội văn hóa",
      badgeClass: "bg-main-50 text-main-600"
    },
    {
      title: "Dấu Ấn Tuổi Học Trò (Tri ân & Trưởng thành)",
      desc: "Chương trình Gala tri ân thiêng liêng và xúc động dành cho học sinh cuối cấp. Đây là dịp để các em bày tỏ tình yêu thương, lòng biết ơn sâu sắc tới công lao sinh thành của cha mẹ và sự dạy dỗ chỉ bảo tận tình của thầy cô.",
      img: "/assets/images/thumbs/exp-school-events.png",
      badge: "Sự kiện học đường",
      badgeClass: "bg-danger-50 text-danger-600"
    },
    {
      title: "Ngày Hội Gia Đình (Family Day)",
      desc: "Sân chơi teambuilding gia đình đầy ắp tiếng cười. Chuỗi hoạt động liên hoàn giúp gắn kết tình cảm ruột thịt bền chặt giữa ba mẹ và con cái, xây dựng sự thấu hiểu và tạo dựng những kỷ niệm gia đình vô giá.",
      img: "/assets/images/thumbs/evt-family-day.png",
      badge: "Gia đình gắn kết",
      badgeClass: "bg-main-two-50 text-main-two-600"
    },
    {
      title: "Lễ Hội Trăng Rằm (Đêm hội rước đèn)",
      desc: "Mang không khí Trung Thu đoàn viên, rước đèn phá cỗ rực rỡ đến trường học. Các hoạt động làm đèn ông sao truyền thống, biểu diễn múa lân sư rồng sôi động và giao lưu cùng chú Cuội, chị Hằng vui tươi.",
      img: "/assets/images/thumbs/evt-mid-autumn.png",
      badge: "Lễ hội văn hóa",
      badgeClass: "bg-warning-50 text-warning-600"
    },
    {
      title: "Thắp Lửa Trái Tim (Hội thảo Kỹ năng sống)",
      desc: "Chương trình chuyên đề giáo dục kỹ năng sống, đánh thức cảm xúc tích cực và thắp sáng những giá trị đạo đức tốt đẹp. Giúp học sinh học cách yêu thương bản thân, sẻ chia với cộng đồng và nỗ lực vươn lên trong học tập.",
      img: "/assets/images/thumbs/evt-heart-fire.png",
      badge: "Kỹ năng sống",
      badgeClass: "bg-success-50 text-success-600"
    },
    {
      title: "Vũ Khúc Giáng Sinh & Chào Năm Mới",
      desc: "Bữa tiệc âm nhạc và ánh sáng cuối năm sôi động. Học sinh được hóa thân biểu diễn nghệ thuật, nhận quà từ ông già Noel nhân hậu và tham gia các trò chơi tương tác đón chào một năm mới rạng rỡ niềm vui.",
      img: "/assets/images/thumbs/evt-christmas.png",
      badge: "Sự kiện học đường",
      badgeClass: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className='event-categories py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-calendar-star' />
            </span>
            <h5 className='text-main-600 mb-0'>Danh mục sự kiện của ABA</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Chuỗi Sự Kiện Học Đường Điển Hình
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            ABA tự hào kiến tạo những lễ hội học đường sáng tạo, trọn vẹn niềm tin và đồng hành cùng nhà trường trên hành trình phát triển toàn diện cho học sinh.
          </p>
        </div>

        <div className='row gy-4'>
          {events.map((evt, idx) => (
            <div
              key={idx}
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 100}
            >
              <div className='card-event-item bg-white border border-neutral-30 rounded-16 overflow-hidden transition-2 hover-shadow-md h-100 d-flex flex-column'>
                <div className='position-relative overflow-hidden' style={{ height: "240px" }}>
                  <img
                    src={evt.img}
                    alt={evt.title}
                    className='w-100 h-100 object-fit-cover transition-2 hover-scale-img'
                  />
                  <span className={`position-absolute top-20 left-20 px-16 py-8 rounded-8 text-xs fw-semibold ${evt.badgeClass} box-shadow-sm`}>
                    {evt.badge}
                  </span>
                </div>
                <div className='p-32 flex-grow-1 d-flex flex-column justify-content-between'>
                  <div>
                    <h4 className='text-neutral-800 text-xl fw-semibold mb-16'>{evt.title}</h4>
                    <p className='text-neutral-500 text-sm mb-24' style={{ textAlign: "justify" }}>
                      {evt.desc}
                    </p>
                  </div>
                  <div className='d-flex align-items-center justify-content-between pt-16 border-top border-neutral-20'>
                    <span className='text-xs text-neutral-400'>Tổ chức trọn gói</span>
                    <Link
                      href='/contact'
                      className='text-main-600 hover-text-main-700 fw-semibold text-sm flex-align gap-4'
                    >
                      Nhận báo giá
                      <i className='ph-bold ph-caret-right' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hover-scale-img {
          transition: transform 0.5s ease;
        }
        .card-event-item:hover .hover-scale-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

export default EventCategories;
