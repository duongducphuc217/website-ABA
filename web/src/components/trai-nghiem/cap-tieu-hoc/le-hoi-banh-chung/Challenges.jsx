"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khai Mạc Lễ Hội: Mùa Xuân Chiến Thắng",
      subtitle: "Trống hội rộn ràng & múa lân chào xuân",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Chào đón toàn trường với văn nghệ mở màn rộn rã. Lời phát biểu chúc Tết của đại diện BGH nhà trường và tiết mục trống hội, múa lân truyền thống tưng bừng tạo không khí hào hứng khởi đầu lễ hội."
    },
    {
      title: "Gói Bánh Chưng - Gói Trọn Yêu Thương",
      subtitle: "Nghệ nhân hướng dẫn gói bánh bằng khuôn gỗ",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/hero_bg.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Học sinh xem hướng dẫn gói bánh trên sân khấu chính từ nghệ nhân. Dưới sự hỗ trợ của điều phối viên ABA và thầy cô giáo, các em ngồi quanh chiếu cùng nhau thực hành tự tay gói hoàn thiện chiếc bánh chưng xanh."
    },
    {
      title: "Hội Chợ Tết - Kết Nối Những Yêu Thương",
      subtitle: "Gian hàng chợ quê rực rỡ sắc màu xuân",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/challenge_market.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Các lớp trang trí trại sáng tạo và bày bán các sản phẩm Tết cổ truyền theo chủ đề. Các em sử dụng coupon hoặc tiền mặt mua bán để rèn luyện kỹ năng sử dụng tiền tệ và giao tiếp thương mại cơ bản."
    },
    {
      title: "Hội Thi Xuân Đất Việt & Lễ Hội Ngày Xuân",
      subtitle: "Rung chuông vàng, thư pháp, nhảy bao bố và vui chơi",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung/challenge_contest.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Các cuộc thi liên khối thú vị: Khối 5 thi viết thư pháp, Khối 3-4 thi Rung chuông vàng tìm hiểu lịch sử Tết, Khối 1-2 thi nhảy bao bố. Đồng thời mở khu trò chơi trúng thưởng ném vòng, vượt núi hơi, gắp gấu bông."
    }
  ];

    const kicker = data?.kicker || "TRẠM TRẢI NGHIỆM";
  const heading = data?.heading || "Các Chặng Trải Nghiệm Giáo Dục";
  const subtitle = data?.subtitle || "Các chặng thử thách gắn kết học sinh vô cùng đặc sắc và hấp dẫn.";

    const challengesList = data?.items || defaultChallenges;

const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 14,
      },
    },
  };

  

  return (
    <section className="py-120 bg-slate-50 relative overflow-hidden font-sans" id="cac-trai-nghiem">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-game-controller" />
            </span>
            <span className="text-abaOrange">HOẠT ĐỘNG LỄ HỘI CHÍNH</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            4 Chặng Trải Nghiệm Xuân Vui Vẻ
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Giúp học sinh rèn luyện sự khéo léo qua cách gói bánh và tham gia các hoạt động hội chợ, trò chơi trúng thưởng vui nhộn.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {challengesList.map((ch, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-150 rounded-16 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img 
                  src={ch.image} 
                  alt={ch.title} 
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block text-xs font-extrabold px-3 py-1.5 rounded-full border shadow-sm bg-white/95 backdrop-blur-sm ${ch.badgeColor}`}>
                    Trải Nghiệm 0{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-[20px] flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">
                    {ch.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-850 mb-4 font-heading">
                    {ch.title}
                  </h3>
                  <p className="text-slate-650 text-sm md:text-base leading-relaxed text-wrap-pretty mb-0">
                    {ch.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
