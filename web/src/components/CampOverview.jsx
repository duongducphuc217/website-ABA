import Link from "next/link";

const CampOverview = () => {
  const infoCards = [
    {
      icon: "ph-bold ph-calendar",
      title: "Thời gian huấn luyện",
      value: "6 ngày 5 đêm (6N5Đ)",
      desc: "Trải nghiệm rèn luyện toàn diện, thắt chặt kỷ luật và thực hành tự lập sâu sắc."
    },
    {
      icon: "ph-bold ph-map-pin",
      title: "Địa điểm tổ chức",
      value: "Yên Tử, Uông Bí, Quảng Ninh",
      desc: "Hòa mình vào thiên nhiên Yên Tử hùng vĩ, núi rừng thiêng liêng chốn non cao."
    },
    {
      icon: "ph-bold ph-user-circle-plus",
      title: "Độ tuổi tham gia",
      value: "Từ 7 đến 15 tuổi",
      desc: "Phù hợp cho các bạn học sinh tiểu học và trung học cơ sở trên toàn quốc."
    },
    {
      icon: "ph-bold ph-hourglass-high",
      title: "Các khóa đào tạo 2025",
      value: "Khóa 1: 1/6 – 6/6 | Khóa 2: 8/6 – 13/6",
      desc: "Khóa 3: 22/6 – 27/6 | Khóa 4: 29/6 – 4/7."
    }
  ];

  return (
    <section className='camp-overview py-120 bg-white overflow-hidden'>
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6'>
            <div className='camp-overview-thumb text-center position-relative' data-aos='zoom-in' data-aos-duration={1000}>
              <img
                src='/assets/images/thumbs/camp-trekking-yentu.png'
                alt='Trại Hè Sống Ý Nghĩa Yên Tử'
                className='w-100 rounded-16 cover-img wow bounceIn'
                style={{ maxWidth: "540px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))" }}
              />
              <div className='position-absolute inset-block-end-0 inset-inline-start-0 mb-24 ms-24 px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='w-40 h-40 flex-center bg-main-600 text-white rounded-circle text-lg'>
                  <i className='ph-bold ph-sketch-logo' />
                </span>
                <div className='text-start'>
                  <h6 className='text-neutral-800 mb-0 text-sm'>Sống Ý Nghĩa</h6>
                  <span className='text-neutral-500 text-xs'>Yên Tử 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='camp-overview-content ps-lg-4'>
              <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-compass' />
                </span>
                <h5 className='text-main-600 mb-0'>Tổng quan hành trình</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Hành Trình Sống Ý Nghĩa – Yên Tử: Chân - Thiện - Mỹ
              </h2>
              <p className='text-neutral-500 mb-32 wow bounceInUp' style={{ textAlign: "justify" }}>
                Hành trình mang tới một mùa hè bùng nổ với những trải nghiệm mới mẻ, giúp các bạn nhỏ tự lập hơn, bản lĩnh hơn và giàu tình cảm. Hòa mình vào thiên nhiên Yên Tử hùng vĩ, các bạn học sinh sẽ cùng nhau khám phá giới hạn bản thân, gắn kết đồng đội và học cách yêu thương, chia sẻ để tự tin bước ra thế giới với trái tim mạnh mẽ.
              </p>

              <div className='row gy-4'>
                {infoCards.map((card, idx) => (
                  <div key={idx} className='col-sm-6' data-aos='fade-up' data-aos-duration={600 + idx * 150}>
                    <div className='flex-align align-items-start gap-12'>
                      <i className={`${card.icon} text-main-600 text-2xl mt-4 flex-shrink-0`} />
                      <div>
                        <h6 className='text-neutral-800 text-base fw-semibold mb-4'>{card.title}</h6>
                        <span className='text-main-two-600 text-sm fw-medium d-block mb-4'>{card.value}</span>
                        <span className='text-neutral-500 text-xs d-block' style={{ textAlign: "justify" }}>
                          {card.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-40' data-aos='fade-up' data-aos-duration={1200}>
                <Link
                  href='/contact'
                  className='btn btn-main-600 px-32 py-16 rounded-12 text-white hover-bg-main-700 transition-1 flex-align d-inline-flex gap-8 fw-semibold'
                >
                  Đăng ký nhận ưu đãi hè
                  <i className='ph-bold ph-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampOverview;
