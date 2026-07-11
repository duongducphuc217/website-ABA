const KnsChecklist = () => {
  const checklist = [
    {
      title: "Trang trí khánh tiết",
      desc: "Nhà trường chuẩn bị màn hình LED hoặc in khung Backdrop sân khấu. Thiết kế phông nền sân khấu (maquette) đẹp mắt sẽ do đội ngũ ABA cung cấp trước chương trình.",
      icon: "ph-bold ph-presentation"
    },
    {
      title: "Hệ thống âm thanh",
      desc: "Bố trí hệ thống âm thanh ngoài trời công suất lớn, micro không dây chất lượng đảm bảo toàn bộ học sinh và đại biểu nghe rõ âm nhạc, lời MC dẫn dắt.",
      icon: "ph-bold ph-speaker-hifi"
    },
    {
      title: "Sắp xếp ghế ngồi học sinh",
      desc: "Chuẩn bị và phân bổ ghế ngồi đầy đủ, ngăn nắp cho toàn bộ học sinh các khối lớp tập trung tại khu vực sân trường trước giờ tổ chức 15 phút.",
      icon: "ph-bold ph-chair"
    },
    {
      title: "Bàn ghế đại biểu & Ban giám hiệu",
      desc: "Bố trí bàn ghế đại biểu phía trên, trang bị khăn trải bàn sạch đẹp, nước uống đóng chai, hoa để bàn (nếu có) và ghế ngồi cho toàn bộ giáo viên nhà trường.",
      icon: "ph-bold ph-users"
    },
    {
      title: "Quà tặng khích lệ học sinh",
      desc: "Chuẩn bị khoảng 20 phần quà nhỏ (như bút, vở, nhãn vở...) để Ban tổ chức ABA trao tặng, khích lệ các em học sinh hăng hái tương tác trả lời câu hỏi.",
      icon: "ph-bold ph-gift"
    }
  ];

  return (
    <section className='kns-checklist py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-checks' />
            </span>
            <h5 className='text-main-600 mb-0'>Phối hợp tổ chức</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Công Tác Chuẩn Bị Của Nhà Trường
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            Để chương trình sinh hoạt chuyên đề dưới cờ diễn ra thành công và trọn vẹn cảm xúc nhất, nhà trường vui lòng chuẩn bị các hạng mục cơ sở vật chất sau:
          </p>
        </div>

        <div className='row gy-4 justify-content-center'>
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className='col-xl-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 100}
            >
              <div className='p-32 bg-main-25 border border-neutral-30 rounded-16 h-100 d-flex gap-20 align-items-start transition-2 hover-shadow-md'>
                <span className='w-48 h-48 rounded-12 bg-main-600 text-white flex-center text-2xl flex-shrink-0'>
                  <i className={item.icon} />
                </span>
                <div>
                  <h4 className='text-neutral-800 text-base fw-semibold mb-12'>{item.title}</h4>
                  <p className='text-neutral-500 text-xs mb-0' style={{ textAlign: "justify", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnsChecklist;
