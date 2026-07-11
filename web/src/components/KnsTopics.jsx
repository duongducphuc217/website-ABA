const KnsTopics = () => {
  const topics = [
    {
      idx: "01",
      title: "Em làm chủ bản thân",
      lessons: [
        "Hiểu rõ bản thân là ai, thế mạnh và điều cần rèn luyện.",
        "Biết tự điều chỉnh hành vi, không bị cảm xúc chi phối.",
        "Tự giác làm việc và hoàn thành nhiệm vụ cá nhân mỗi ngày."
      ],
      icon: "ph-bold ph-user-focus",
      colorClass: "text-main-600 bg-main-50"
    },
    {
      idx: "02",
      title: "Em biết yêu thương và chia sẻ",
      lessons: [
        "Hiểu yêu thương là sự quan tâm, giúp đỡ và nói lời tốt đẹp.",
        "Biết chia sẻ niềm vui, động viên bạn bè khi gặp khó khăn.",
        "Thể hiện tình cảm với cha mẹ, thầy cô bằng hành động cụ thể."
      ],
      icon: "ph-bold ph-heart-straight",
      colorClass: "text-danger-600 bg-danger-50"
    },
    {
      idx: "03",
      title: "Em sống có trách nhiệm",
      lessons: [
        "Biết giữ lời hứa và hoàn thành công việc được giao đến cùng.",
        "Dũng cảm nhận lỗi, nói lời xin lỗi và chủ động sửa sai.",
        "Tự chịu trách nhiệm với hành vi, đồ dùng cá nhân và của chung."
      ],
      icon: "ph-bold ph-shield-checkered",
      colorClass: "text-main-two-600 bg-main-two-50"
    },
    {
      idx: "04",
      title: "Em sống có mục tiêu",
      lessons: [
        "Biết ước mơ và đặt mục tiêu nhỏ cho bản thân trong học tập.",
        "Biết lập kế hoạch đơn giản để từng bước thực hiện mục tiêu.",
        "Rèn luyện tính kiên trì, bền bỉ và không bỏ cuộc giữa chừng."
      ],
      icon: "ph-bold ph-target",
      colorClass: "text-warning-600 bg-warning-50"
    },
    {
      idx: "05",
      title: "Em sống tử tế",
      lessons: [
        "Hiểu sống tử tế là trung thực, nhân hậu và quan tâm mọi người.",
        "Biết nói lời hay, làm việc tốt và cư xử lịch sự đúng mực.",
        "Lan tỏa những hành động đẹp và lòng tử tế đến cộng đồng."
      ],
      icon: "ph-bold ph-sparkles",
      colorClass: "text-success-600 bg-success-50"
    },
    {
      idx: "06",
      title: "Em làm chủ cảm xúc của mình",
      lessons: [
        "Nhận biết các loại cảm xúc: vui, buồn, giận, sợ, lo lắng.",
        "Kiềm chế cảm xúc tiêu cực: tạm dừng – hít thở – suy nghĩ.",
        "Biết cách chia sẻ, giải tỏa cảm xúc lành mạnh với thầy cô, bạn bè."
      ],
      icon: "ph-bold ph-smiley-wink",
      colorClass: "text-purple-600 bg-purple-50"
    },
    {
      idx: "07",
      title: "Em sống an toàn",
      lessons: [
        "Nhận biết các tình huống nguy hiểm (người lạ, điện, giao thông).",
        "Quy tắc 3 KHÔNG: Không đi theo – Không nhận quà – Không chia sẻ thông tin.",
        "Sử dụng internet an toàn, chủ động báo người lớn khi gặp nguy cơ."
      ],
      icon: "ph-bold ph-shield-alert",
      colorClass: "text-danger-600 bg-danger-50"
    },
    {
      idx: "08",
      title: "Em lắng nghe và tôn trọng người khác",
      lessons: [
        "Biết lắng nghe bằng tai - tim - mắt, tuyệt đối không ngắt lời bạn.",
        "Tôn trọng ý kiến khác biệt và sự đa dạng của mọi người xung quanh.",
        "Sử dụng lời nói tử tế, duy trì thái độ hòa nhã trong giao tiếp."
      ],
      icon: "ph-bold ph-ear",
      colorClass: "text-main-600 bg-main-50"
    },
    {
      idx: "09",
      title: "Em hợp tác và làm việc nhóm hiệu quả",
      lessons: [
        "Hiểu ý nghĩa hợp tác – cùng nhau tiến bộ theo tinh thần cùng thắng.",
        "Biết phân chia công việc công bằng, tôn trọng vai trò của từng bạn.",
        "Cùng nhau giải quyết nhiệm vụ và sẻ chia kết quả đạt được."
      ],
      icon: "ph-bold ph-users-three",
      colorClass: "text-main-two-600 bg-main-two-50"
    },
    {
      idx: "10",
      title: "Em lớn lên cùng tổ quốc",
      lessons: [
        "Tự hào về đất nước, con người và văn hóa lịch sử Việt Nam.",
        "Ý thức bảo vệ môi trường, giữ gìn tiếng Việt, quốc kỳ và quốc ca.",
        "Nỗ lực học tập tốt, rèn luyện tốt để xây dựng Tổ quốc tương lai."
      ],
      icon: "ph-bold ph-flag",
      colorClass: "text-success-600 bg-success-50"
    }
  ];

  return (
    <section className='kns-topics py-120 bg-main-25 overflow-hidden position-relative'>
      <img
        src='/assets/images/shapes/shape3.png'
        alt=''
        className='shape one animation-walking d-md-block d-none opacity-25'
      />
      <img
        src='/assets/images/shapes/shape6.png'
        alt=''
        className='shape six animation-rotation d-md-block d-none opacity-25'
      />
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-list-numbers' />
            </span>
            <h5 className='text-main-600 mb-0'>10 chuyên đề chào cờ dưới sân trường</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Hành Trình Con Trưởng Thành (Cấp Tiểu Học)
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            Chuỗi chuyên đề kỹ năng sống thực tiễn giúp học sinh phát triển phẩm chất và năng lực toàn diện theo định hướng đổi mới giáo dục của Bộ GD&ĐT.
          </p>
        </div>

        <div className='row gy-4 justify-content-center'>
          {topics.map((t, idx) => (
            <div
              key={idx}
              className='col-xl-6 col-lg-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 100}
            >
              <div className='p-32 bg-white border border-neutral-30 rounded-16 transition-2 hover-shadow-md h-100 d-flex flex-column flex-sm-row gap-24 align-items-start'>
                <div className='d-flex flex-column align-items-center flex-shrink-0'>
                  <span className={`w-64 h-64 flex-center rounded-circle text-3xl mb-12 ${t.colorClass}`}>
                    <i className={t.icon} />
                  </span>
                  <span className='text-xs fw-semibold text-neutral-400'>Chuyên đề {t.idx}</span>
                </div>
                <div className='flex-grow-1'>
                  <h4 className='text-neutral-800 text-lg fw-semibold mb-16'>{t.title}</h4>
                  <ul className='ps-0 list-unstyled mb-0'>
                    {t.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className='flex-align align-items-start gap-8 text-neutral-600 text-sm mb-8' style={{ textAlign: "justify" }}>
                        <span className='text-main-600 mt-4 flex-shrink-0'>
                          <i className='ph-bold ph-check-square' />
                        </span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnsTopics;
