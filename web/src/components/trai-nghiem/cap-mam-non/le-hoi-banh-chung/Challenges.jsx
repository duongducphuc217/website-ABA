"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khai Mạc Lễ Hội Bánh Chưng",
      subtitle: "Múa lân chào xuân & Khởi động cùng MC",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-banh-chung/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Tiết mục văn nghệ mở màn từ các bạn nhỏ nhà trường. Trống hội lân sư rồng khai hội rực rỡ và phát biểu chúc Tết ấm cúng từ BGH."
    },
    {
      title: "Trải Nghiệm Gói Bánh Chưng Nghĩa Tình",
      subtitle: "Bé đong gạo, đỗ, thịt gói bánh chung cùng đội nhóm",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-banh-chung/hero_bg.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Nghệ nhân hướng dẫn tỉ mỉ các bước làm bánh dã ngoại. Các bé mầm non ngồi chiếu tre cùng bạn học thực hành đong gạo đong đỗ và cùng thầy cô, phụ huynh gói hoàn chỉnh chiếc bánh chưng mang về."
    },
    {
      title: "Phiên Chợ Quê Gắn Kết",
      subtitle: "Khám phá quầy hàng tết & học kỹ năng tài chính cơ bản",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-banh-chung/challenge_market.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Bé khám phá các gian hàng chợ quê tết cổ truyền rực rỡ sắc màu do các cô giáo bày bán. Thực hành mua sắm lịch sự giúp bé nhận biết mệnh giá và kỹ năng giao dịch sơ khởi."
    },
    {
      title: "Lễ Hội Mùa Xuân & Trò Chơi Trúng Thưởng",
      subtitle: "Ném vòng, bắn pháo, ném bao và lâu đài hơi vui nhộn",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-banh-chung/challenge_festival.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Mở khu trò chơi hấp dẫn: Nỏ Thần Liên Châu bắn pháo hơi, Gieo lộc đầu xuân quay số, Vòng tròn đồng bào ném vòng, Tiêu diệt quái vật ném bao, nhà hơi ném bóng rổ và chinh phục lâu đài hơi."
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
            Các Chặng Trải Nghiệm Xuân Vui Vẻ
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Thiết kế riêng cho các bé mầm non dưới sự điều hành tận tâm của hướng dẫn viên và cô giáo.
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
