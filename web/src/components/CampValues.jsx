"use client";

const CampValues = () => {
  const values = [
    {
      iconClass: "ph-bold ph-hands-praying",
      title: "Gieo niềm tin",
      desc: "Tin vào bản thân – tin vào người khác – tin vào điều tốt đẹp. Từ niềm tin, mọi hành trình mới thật sự bắt đầu.",
      colorClass: "text-main-600 bg-main-50"
    },
    {
      iconClass: "ph-bold ph-heart",
      title: "Ươm tâm sáng",
      desc: "Nuôi dưỡng một trái tim trong lành, biết phân biệt đúng – sai, dũng cảm chọn lựa và làm điều thiện lành mỗi ngày.",
      colorClass: "text-danger-600 bg-danger-50"
    },
    {
      iconClass: "ph-bold ph-sparkles",
      title: "Tỏa yêu thương",
      desc: "Yêu thương không chỉ là cảm xúc, mà còn là hành động. Một lời động viên, một cái ôm, một việc tốt – đều có thể làm ấm cả một ngày.",
      colorClass: "text-main-two-600 bg-main-two-50"
    },
    {
      iconClass: "ph-bold ph-trend-up",
      title: "Vững ý chí",
      desc: "Khó khăn là thử thách – ý chí là sức mạnh. Bền bỉ tiến bước để bản thân trở nên vững vàng hơn sau mỗi lần vượt qua khó khăn.",
      colorClass: "text-warning-600 bg-warning-50"
    },
    {
      iconClass: "ph-bold ph-shooting-star",
      title: "Sáng ước mơ",
      desc: "Dám mơ – dám nghĩ – dám làm. Ước mơ sẽ là ánh sáng dẫn đường, định hình hướng đi, và hành động bền bỉ giúp con chạm đến đích.",
      colorClass: "text-success-600 bg-success-50"
    },
    {
      iconClass: "ph-bold ph-users-four",
      title: "Chung hành động",
      desc: "Không ai có thể tạo ra điều lớn lao một mình. Cùng nhau đồng hành, chúng ta sẽ cùng nhau tạo ra điều tử tế cho cuộc đời thêm ý nghĩa.",
      colorClass: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className='camp-values py-120 bg-main-25 overflow-hidden position-relative'>
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
              <i className='ph-bold ph-gem' />
            </span>
            <h5 className='text-main-600 mb-0'>Hệ thống giá trị cốt lõi</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            6 Giá Trị Vàng Của Trại Hè Sống Ý Nghĩa
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            ABA xây dựng chương trình trại hè xoay quanh 6 trục giá trị nhân văn cốt lõi, rèn luyện nhân cách và củng cố bản lĩnh cho thế hệ trẻ.
          </p>
        </div>

        <div className='row gy-4'>
          {values.map((v, idx) => (
            <div
              key={idx}
              className='col-lg-4 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 100}
            >
              <div className='card-value-item p-32 bg-white border border-neutral-30 rounded-16 transition-2 hover-shadow-md h-100 d-flex flex-column'>
                <div className='flex-align gap-16 mb-16'>
                  <span className={`w-52 h-52 flex-center rounded-circle text-2xl flex-shrink-0 ${v.colorClass}`}>
                    <i className={v.iconClass} />
                  </span>
                  <h4 className='text-neutral-800 text-lg fw-semibold mb-0'>{v.title}</h4>
                </div>
                <p className='text-neutral-500 text-sm line-clamp-4 mb-0' style={{ textAlign: "justify" }}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .card-value-item {
          transition: all 0.3s ease;
        }
        .card-value-item:hover {
          background-color: var(--main-color, #1b75bc) !important;
          border-color: var(--main-color, #1b75bc) !important;
        }
        .card-value-item:hover h4,
        .card-value-item:hover p {
          color: #ffffff !important;
        }
        .card-value-item:hover span {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default CampValues;
