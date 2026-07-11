import Link from "next/link";

const CampActivities = () => {
  const activities = [
    {
      title: "Chinh phục đỉnh thiêng Yên Tử",
      desc: "Học sinh thực hành trekking leo núi Ba Vàng, Ba Vua hoặc chinh phục đỉnh thiêng Hoa Yên. Hoạt động rèn luyện thể lực bền bỉ, ý chí vượt khó và bứt phá mọi giới hạn cá nhân chốn non ngàn.",
      img: "/assets/images/thumbs/camp-trekking-yentu.png",
      badge: "Kỷ luật & Thể lực",
      badgeClass: "bg-main-50 text-main-600",
      details: ["Trekking đường núi thực tế", "Khám phá di sản tâm linh", "Tự điều phối sức khỏe bản thân"]
    },
    {
      title: "Lễ hội Hoa Đăng & Gala Tỏa Yêu Thương",
      desc: "Trải nghiệm cảm xúc lắng đọng trong đêm hội hoa đăng lung linh và Gala văn nghệ ấm cúng. Nơi các bạn nhỏ viết thư gửi cha mẹ, học cách nói lời yêu thương chân thành và biết ơn sâu sắc.",
      img: "/assets/images/thumbs/camp-lanterns.png",
      badge: "Giáo dục cảm xúc",
      badgeClass: "bg-danger-50 text-danger-600",
      details: ["Lễ thả hoa đăng ước nguyện", "Viết thư tay gửi bố mẹ", "Massage cổ gáy tri ân bạn đồng hành"]
    },
    {
      title: "Teambuilding & Đấu trường trí tuệ",
      desc: "Trò chơi vận động phao hơi khổng lồ kết hợp đấu trường trí tuệ kịch tính theo tôn chỉ 'Kỷ luật là sức mạnh'. Đòi hỏi các thành viên học cách lắng nghe, phối hợp ăn ý và cùng nhau vượt thử thách.",
      img: "/assets/images/thumbs/camp-training.png",
      badge: "Kỹ năng đồng đội",
      badgeClass: "bg-main-two-50 text-main-two-600",
      details: ["Đạo cụ phao hơi lớn kịch tính", "Vua bếp tranh tài tự lập nấu nướng", "Mật thư giải mã đồng đội GPS"]
    },
    {
      title: "Nông dân tập sự & Hội làng",
      desc: "Các em được hòa mình trải nghiệm nông nghiệp thực tế: trồng cây gieo hạt, lội suối thả ga, tham gia trò chơi dân gian rộn ràng tiếng cười tại hội đình làng chốn miền quê thân thuộc.",
      img: "/assets/images/thumbs/camp-campfire.png",
      badge: "Trải nghiệm thực tế",
      badgeClass: "bg-success-50 text-success-600",
      details: ["Trồng rau, nuôi cá, nấu ăn", "Học thêu thùa và nặn tò he", "Trò chơi dân gian vui nhộn"]
    }
  ];

  return (
    <section className='camp-activities py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='section-heading text-center mb-60'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-sketch-logo' />
            </span>
            <h5 className='text-main-600 mb-0'>Hoạt động tiêu biểu</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Trải Nghiệm Độc Quyền Tại Trại Hè Sống Ý Nghĩa
          </h2>
          <p className='text-neutral-500 max-w-700 mx-auto'>
            Chương trình được thiết kế đan xen chặt chẽ giữa rèn luyện thể lực kỷ luật, trải nghiệm kỹ năng tự lập và đánh thức các xúc cảm gia đình ấm áp.
          </p>
        </div>

        <div className='row gy-4'>
          {activities.map((act, idx) => (
            <div
              key={idx}
              className='col-lg-6'
              data-aos='fade-up'
              data-aos-duration={600 + idx * 150}
            >
              <div className='card-act-item p-24 bg-white border border-neutral-30 rounded-16 h-100 d-flex flex-column flex-sm-row gap-24 transition-2 hover-shadow-md'>
                <div className='position-relative rounded-12 overflow-hidden flex-shrink-0' style={{ width: "200px", height: "200px" }}>
                  <img
                    src={act.img}
                    alt={act.title}
                    className='w-100 h-100 object-fit-cover'
                  />
                  <span className={`position-absolute top-12 left-12 px-12 py-6 rounded-6 text-2xs fw-semibold ${act.badgeClass} box-shadow-xs`}>
                    {act.badge}
                  </span>
                </div>
                <div className='d-flex flex-column justify-content-between flex-grow-1'>
                  <div>
                    <h4 className='text-neutral-800 text-lg fw-semibold mb-8'>{act.title}</h4>
                    <p className='text-neutral-500 text-xs line-clamp-3 mb-16' style={{ textAlign: "justify" }}>
                      {act.desc}
                    </p>
                  </div>
                  <ul className='ps-0 list-unstyled mb-0'>
                    {act.details.map((det, dIdx) => (
                      <li key={dIdx} className='flex-align gap-8 text-neutral-700 text-xs mb-8'>
                        <span className={`w-16 h-16 rounded-circle flex-center text-3xs ${act.badgeClass}`}>
                          <i className='ph-bold ph-check' />
                        </span>
                        {det}
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

export default CampActivities;
