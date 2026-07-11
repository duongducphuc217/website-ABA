const FieldTripIntro = () => {
  const pillars = [
    {
      iconClass: "ph-bold ph-shield-check",
      title: "Chuyên Nghiệp – Uy Tín",
      desc: "Với 15 năm kinh nghiệm tổ chức thành công hơn 700 chương trình Teambuilding lớn nhỏ, ABA tự hào là đơn vị tổ chức dã ngoại, sự kiện uy tín hàng đầu cho học sinh.",
      colorClass: "text-main-600 bg-main-50"
    },
    {
      iconClass: "ph-bold ph-currency-circle-dollar",
      title: "Chi Phí Hợp Lý – Cạnh Tranh",
      desc: "ABA cam kết mang lại chất lượng chương trình vượt trội với chi phí tối ưu nhất cho nhà trường và phụ huynh. 'Chi phí tối thiểu - Hiệu quả tối đa' là cam kết số 1 của chúng tôi.",
      colorClass: "text-main-two-600 bg-main-two-50"
    },
    {
      iconClass: "ph-bold ph-clock",
      title: "Thời Gian Nhanh – Chính Xác",
      desc: "Phản hồi thông tin, tư vấn và gửi báo giá chi tiết chỉ trong 30 phút sau khi tiếp nhận yêu cầu. Tổ chức triển khai chính xác, đúng kế hoạch cam kết đến từng giây.",
      colorClass: "text-success-600 bg-success-50"
    }
  ];

  return (
    <section className='field-trip-intro py-120 bg-main-25 overflow-hidden position-relative'>
      <img
        src='/assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation d-md-block d-none opacity-25'
      />
      <img
        src='/assets/images/shapes/shape4.png'
        alt=''
        className='shape six animation-walking d-md-block d-none opacity-25'
      />
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-star' />
            </span>
            <h5 className='text-main-600 mb-0'>Cam kết vàng từ ABA</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Tận Hưởng Kỳ Nghỉ Trải Nghiệm Trọn Vẹn Cùng ABA
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            Cùng bạn bè và thầy cô trải nghiệm những hành trình dã ngoại đầy ý nghĩa, bổ ích và ngập tràn niềm vui khám phá thế giới xung quanh.
          </p>
        </div>

        <div className='row gy-4 justify-content-center'>
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 200}
            >
              <div className='text-center p-40 bg-white border border-neutral-30 rounded-16 transition-2 hover-shadow-md h-100 d-flex flex-column align-items-center'>
                <span className={`w-80 h-80 flex-center rounded-circle text-4xl mb-32 flex-shrink-0 ${p.colorClass}`}>
                  <i className={p.iconClass} />
                </span>
                <h4 className='text-neutral-800 text-xl fw-semibold mb-16'>{p.title}</h4>
                <p className='text-neutral-500 text-sm line-clamp-4 mb-0' style={{ textAlign: "justify" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldTripIntro;
