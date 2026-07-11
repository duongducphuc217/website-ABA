"use client";

const WhyChooseFieldTrip = () => {
  const reasons = [
    {
      iconClass: "ph-bold ph-book-open",
      title: "Giá trị thực tiễn",
      desc: "Mỗi hành trình bước ra ngoài nhà trường đều tích hợp các bài học thực tế về kỹ năng sinh tồn, kỹ năng tự lập và làm việc nhóm, giúp học sinh rèn luyện bản lĩnh trong môi trường tập thể.",
      colorClass: "text-main-600 bg-main-50"
    },
    {
      iconClass: "ph-bold ph-shield-check",
      title: "An toàn là số 1",
      desc: "Quản lý và giám sát học sinh chặt chẽ 24/24 từ khâu di chuyển bằng xe chất lượng cao, ăn uống an toàn vệ sinh cho đến việc lưu trú qua đêm (đối với tour 2 ngày 1 đêm) tại các đối tác uy tín.",
      colorClass: "text-danger-600 bg-danger-50"
    },
    {
      iconClass: "ph-bold ph-smiley-wink",
      title: "Trải nghiệm gắn kết",
      desc: "Chương trình Teambuilding bùng nổ kết hợp đêm Lửa trại/Gala đong đầy cảm xúc, giúp thắt chặt tình bạn, kết nối tình thầy trò và tạo nên những kỷ niệm đẹp không thể nào quên.",
      colorClass: "text-main-two-600 bg-main-two-50"
    },
    {
      iconClass: "ph-bold ph-map-pin-line",
      title: "Điểm đến tuyển chọn",
      desc: "Các điểm dã ngoại, khu sinh thái, di tích lịch sử và resort được ABA khảo sát, chọn lọc kỹ lưỡng, đảm bảo không gian rộng rãi, trong lành, giàu giá trị giáo dục và trải nghiệm.",
      colorClass: "text-warning-600 bg-warning-50"
    },
    {
      iconClass: "ph-bold ph-users-three",
      title: "Nhân sự chuyên trách & Tận tâm",
      desc: "MC, hướng dẫn viên và điều phối viên kỹ năng sống của ABA được đào tạo chuyên sâu về quản trị tour học sinh, thấu hiểu tâm lý trẻ nhỏ và luôn sẵn sàng hỗ trợ các em 24/7.",
      colorClass: "text-success-600 bg-success-50"
    },
    {
      iconClass: "ph-bold ph-handshake",
      title: "Chi phí trọn gói & Tối ưu",
      desc: "ABA xây dựng lịch trình trọn gói tối ưu chi phí (bao gồm xe cộ, ăn uống, phòng nghỉ, vé tham quan, bảo hiểm du lịch), cam kết không phát sinh bất kỳ phụ phí ngoài hợp đồng.",
      colorClass: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className='why-choose-field-trip py-120 bg-main-25 overflow-hidden position-relative'>
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
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-question' />
            </span>
            <h5 className='text-main-600 mb-0'>Ưu thế nổi bật của ABA</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Sự Khác Biệt Làm Nên Thương Hiệu Dã Ngoại ABA
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            ABA không ngừng sáng tạo, kết nối yêu thương, đồng hành trách nhiệm, phụng sự niềm tin và mang lại những giá trị hạnh phúc đích thực cho học sinh trong mỗi hành trình.
          </p>
        </div>

        <div className='row gy-4'>
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className='col-lg-4 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 100}
            >
              <div className='card-reason p-32 bg-white border border-neutral-30 rounded-16 transition-2 hover-shadow-md h-100 d-flex flex-column'>
                <div className='flex-align gap-16 mb-16'>
                  <span className={`w-52 h-52 flex-center rounded-circle text-2xl flex-shrink-0 ${r.colorClass}`}>
                    <i className={r.iconClass} />
                  </span>
                  <h4 className='text-neutral-800 text-lg fw-semibold mb-0'>{r.title}</h4>
                </div>
                <p className='text-neutral-500 text-sm line-clamp-4 mb-0' style={{ textAlign: "justify" }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .card-reason {
          transition: all 0.3s ease;
        }
        .card-reason:hover {
          background-color: var(--main-color, #1b75bc) !important;
          border-color: var(--main-color, #1b75bc) !important;
        }
        .card-reason:hover h4,
        .card-reason:hover p {
          color: #ffffff !important;
        }
        .card-reason:hover span {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseFieldTrip;
