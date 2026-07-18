"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Gói Bánh Chưng - Trọn Vẹn Yêu Thương",
      subtitle: "Huấn luyện gói bánh chưng truyền thống",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-banh-chung/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Học sinh xem hướng dẫn gói bánh trực tiếp trên sân khấu từ nghệ nhân. Dưới sự hỗ trợ của điều phối viên ABA và thầy cô giáo, các em tự tay gói hoàn chỉnh chiếc bánh chưng xanh để mang về luộc chín."
    },
    {
      title: "Hội Chợ Tết - Kết Nối Yêu Thương",
      subtitle: "Gian hàng trang trí & Bày bán sản phẩm Tết",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-banh-chung/challenge_market.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Không khí chợ Tết cổ truyền ngập tràn sân trường với các trại chợ quê. Các lớp trang trí sáng tạo gian trại và bày bán các sản phẩm Tết cổ truyền theo chủ đề tự lên kế hoạch."
    },
    {
      title: "Hội Thi Xuân Đất Việt",
      subtitle: "Tranh tài Sử học & Đấu Sumo hơi",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-banh-chung/challenge_contest.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Cuộc thi tranh tài liên khối: Toàn trường thi tài gói bánh chưng nhanh đẹp, thi Rung chuông vàng tìm hiểu kiến thức Tết cổ truyền lịch sử hoặc thi đấu vật Sumo hơi hài hước."
    },
    {
      title: "Lễ Hội Trò Chơi Ngày Xuân",
      subtitle: "Tổng hợp gian hàng nghệ thuật & Trúng thưởng",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-banh-chung/challenge_festival.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Tham gia các khu trò chơi trúng thưởng thú vị: ném vòng, bắn máy bay, nặn tò he, viết thư pháp ông đồ, in tranh Đông Hồ, gắp gấu bông và các hoạt động vượt chướng ngại vật núi hơi."
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
        
        {/* Section Header matching project standard */}
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-game-controller" />
            </span>
            <span className="text-abaOrange">HOẠT ĐỘNG THỰC TẾ</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            4 Hoạt Động Lễ Hội Ngày Tết
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Trực tiếp tự tay gói bánh chưng xanh truyền thống kết hợp vui chơi hội chợ xuân quê hương náo nhiệt giàu bản sắc.
          </p>
        </div>

        {/* 2x2 Grid */}
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
              {/* Image Banner - Aspect ratio locked, rounded top */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img 
                  src={ch.image} 
                  alt={ch.title} 
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
                
                {/* Visual Accent Corner Label */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block text-xs font-extrabold px-3 py-1.5 rounded-full border shadow-sm bg-white/95 backdrop-blur-sm ${ch.badgeColor}`}>
                    Trải Nghiệm 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Details */}
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
