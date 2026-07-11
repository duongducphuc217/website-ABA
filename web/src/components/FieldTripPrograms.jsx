import Link from "next/link";

const FieldTripPrograms = () => {
  const programs = [
    {
      id: "hanoi-em-yeu",
      title: "Hà Nội Em Yêu",
      desc: "Hành trình dã ngoại trong ngày đưa học sinh rời xa bảng đen phấn trắng để tìm hiểu và ôn lại những nét đẹp văn hóa truyền thống của Thủ đô Nghìn năm văn hiến. Dưới sự dẫn dắt của điều phối viên ABA, các em sẽ tự lập khám phá các di sản, tham gia thử thách mật thư GPS, rèn luyện kỹ năng sinh tồn đô thị và giao lưu quảng bá nét đẹp Hà Nội với du khách quốc tế.",
      img: "/assets/images/thumbs/ft-hanoi-em-yeu.png",
      badge: "Dã ngoại 1 ngày",
      badgeClass: "bg-main-50 text-main-600",
      highlights: [
        "Di chuyển bằng xe du lịch chất lượng cao, có điều phối viên ABA quản lý suốt tuyến.",
        "Trải nghiệm thực tế tại các di tích Văn Miếu, Hoàng Thành Thăng Long hoặc bảo tàng.",
        "Thực hành kỹ năng sinh tồn, tự chủ tài chính và giao tiếp xã hội qua thử thách GPS."
      ]
    },
    {
      id: "da-ngoai-lop",
      title: "Dã Ngoại Theo Lớp",
      desc: "Hành trình dã ngoại gắn kết quy mô lớp học tại các resort sinh thái ngoại thành tươi xanh. Dù đi trong ngày hay trải nghiệm qua đêm (2 ngày 1 đêm), học sinh sẽ được cháy hết mình trong 'bữa tiệc dã ngoại' thực thụ với các game teambuilding độc quyền, tự lập dựng lều trại, chuẩn bị tiệc BBQ và tham gia đêm lửa trại gắn kết tình bạn, giải tỏa căng thẳng sau những kỳ thi.",
      img: "/assets/images/thumbs/ft-lop.png",
      badge: "Linh hoạt 1-2 ngày",
      badgeClass: "bg-main-two-50 text-main-two-600",
      highlights: [
        "Teambuilding gắn kết tinh thần tập thể lớp học giữa không gian tự nhiên rộng lớn.",
        "Thực hành kỹ năng tự lập: setup lều trại dã ngoại, chuẩn bị thực phẩm BBQ.",
        "Đêm lửa trại kết nối, giao lưu văn nghệ và chia sẻ tâm sự thắt chặt tình cảm."
      ]
    },
    {
      id: "da-ngoai-truong",
      title: "Dã Ngoại Theo Trường",
      desc: "Chương trình viễn du quy mô lớn dành cho toàn trường tại các địa danh nổi tiếng (như Yên Tử, Đền Hùng, Ba Vì...). Chương trình được thiết kế đan xen giữa hành trình trekking vượt khó rèn luyện ý chí, chuỗi hoạt động Teambuilding phao hơi khổng lồ và đêm nhạc Gala Tri Ân đầy xúc cảm. Đây là dấu ấn khắc ghi lòng biết ơn sâu sắc tới cha mẹ, thầy cô trước khi các em bước sang chân trời mới.",
      img: "/assets/images/thumbs/ft-truong.png",
      badge: "Quy mô toàn trường",
      badgeClass: "bg-danger-50 text-danger-600",
      highlights: [
        "Tổ chức chuyên nghiệp với đạo cụ teambuilding phao hơi khổng lồ quy mô hàng trăm học sinh.",
        "Hành trình leo núi/trekking vượt khó giúp học sinh bứt phá giới hạn và tôi luyện tính kỷ luật.",
        "Đêm Gala Tri Ân & Trưởng Thành ngập tràn nến và hoa, thắp sáng lòng biết ơn cha mẹ và thầy cô."
      ]
    }
  ];

  return (
    <section className='field-trip-programs py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-tree' />
            </span>
            <h5 className='text-main-600 mb-0'>Các gói dã ngoại nổi bật</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Nhóm Chương Trình Dã Ngoại Trải Nghiệm Của ABA
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            ABA xây dựng lịch trình chuyên biệt ngoài nhà trường (từ 1 đến 2 ngày) bám sát mục tiêu giáo dục phẩm chất và kết nối tập thể cho học sinh các cấp.
          </p>
        </div>

        <div className='row gy-5'>
          {programs.map((prog, idx) => (
            <div key={prog.id} className='col-12' data-aos='fade-up' data-aos-duration={600 + idx * 200}>
              <div className={`row gy-4 align-items-center ${idx % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                <div className='col-lg-6'>
                  <div className='position-relative rounded-16 overflow-hidden box-shadow-md' style={{ minHeight: "360px" }}>
                    <img
                      src={prog.img}
                      alt={prog.title}
                      className='w-100 h-100 object-fit-cover transition-2'
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                    <span className={`position-absolute top-20 left-20 px-16 py-8 rounded-8 text-sm fw-semibold ${prog.badgeClass} box-shadow-sm`}>
                      {prog.badge}
                    </span>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='program-info-content px-lg-4'>
                    <h3 className='text-neutral-800 text-3xl fw-semibold mb-20'>{prog.title}</h3>
                    <p className='text-neutral-500 text-base mb-24' style={{ textAlign: "justify" }}>
                      {prog.desc}
                    </p>
                    <ul className='mb-32 ps-0 list-unstyled'>
                      {prog.highlights.map((item, hIdx) => (
                        <li key={hIdx} className='flex-align align-items-start gap-12 mb-12 text-neutral-700 text-sm'>
                          <span className={`w-24 h-24 rounded-circle flex-center text-xs mt-2 flex-shrink-0 ${prog.badgeClass}`}>
                            <i className='ph-bold ph-check' />
                          </span>
                          <span style={{ textAlign: "justify" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href='/contact'
                      className='btn btn-main-600 px-32 py-16 rounded-12 text-white hover-bg-main-700 transition-1 flex-align d-inline-flex gap-8 fw-semibold'
                    >
                      Nhận lịch trình chi tiết
                      <i className='ph-bold ph-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
              {idx < programs.length - 1 && (
                <div className='py-40 d-lg-block d-none'>
                  <hr className='border-neutral-20' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldTripPrograms;
