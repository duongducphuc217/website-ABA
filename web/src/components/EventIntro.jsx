const EventIntro = () => {
  const pillars = [
    {
      iconClass: "ph-bold ph-award",
      title: "Uy tín chuyên nghiệp",
      desc: "ABA cam kết thực hiện sự kiện đúng hẹn, đảm bảo chính xác mọi yêu cầu kỹ thuật và điều phối nhân sự giám sát chặt chẽ trong suốt quá trình vận hành.",
      colorClass: "text-main-600 bg-main-50"
    },
    {
      iconClass: "ph-bold ph-lightbulb",
      title: "Ý tưởng sáng tạo",
      desc: "Đem đến sự khác biệt thông qua những kịch bản thiết kế độc đáo, mới lạ, giàu giá trị nhân văn và sẵn sàng cá nhân hóa theo thông điệp của từng nhà trường.",
      colorClass: "text-main-two-600 bg-main-two-50"
    },
    {
      iconClass: "ph-bold ph-hands-clapping",
      title: "Trách nhiệm đến cùng",
      desc: "Đội ngũ nhân sự tổ chức sự kiện chuyên nghiệp, kỹ lưỡng, chi tiết trong từng khâu chuẩn bị để bảo đảm sự thành công tuyệt đối và an toàn tối đa cho sự kiện.",
      colorClass: "text-danger-600 bg-danger-50"
    },
    {
      iconClass: "ph-bold ph-trend-up",
      title: "Tối ưu chi phí, thời gian",
      desc: "Xây dựng phương án sự kiện tối ưu theo ngân sách nhà trường, quy trình tổ chức nhanh gọn, tiết kiệm thời gian chuẩn bị và đạt hiệu quả truyền thông cao nhất.",
      colorClass: "text-success-600 bg-success-50"
    }
  ];

  return (
    <section className='event-intro py-120 bg-main-25 overflow-hidden position-relative'>
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
            <h5 className='text-main-600 mb-0'>Năng lực tổ chức sự kiện</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Vì Sao Nhà Trường Nên Lựa Chọn Sự Kiện ABA?
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            Với tôn chỉ &ldquo;Đồng hành vì hạnh phúc của hàng triệu gia đình Việt Nam&rdquo;, chúng tôi luôn nỗ lực mang lại những chương trình sự kiện học đường thiết thực, ấn tượng và ý nghĩa nhất.
          </p>
        </div>

        <div className='row gy-4 justify-content-center'>
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className='col-xl-3 col-md-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 150}
            >
              <div className='text-center p-32 bg-white border border-neutral-30 rounded-16 transition-2 hover-shadow-md h-100 d-flex flex-column align-items-center'>
                <span className={`w-72 h-72 flex-center rounded-circle text-3xl mb-24 flex-shrink-0 ${p.colorClass}`}>
                  <i className={p.iconClass} />
                </span>
                <h4 className='text-neutral-800 text-lg fw-semibold mb-12'>{p.title}</h4>
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

export default EventIntro;
