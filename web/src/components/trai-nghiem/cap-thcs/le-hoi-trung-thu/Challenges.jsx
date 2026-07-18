"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Hoạt Cảnh Cuội AI & Lân Sư Rồng",
      subtitle: "Nghệ thuật sân khấu Trung Thu hiện đại",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-trung-thu/challenge_arts.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Hoạt cảnh vui nhộn về Chú Cuội tạo ra Cuội AI để trốn đi chơi cùng Chị Hằng, mang lại tiếng cười sảng khoái và bài học giáo dục công nghệ sâu sắc. Múa lân sư rồng khai mạc rộn rã trống hội."
    },
    {
      title: "Hội Chợ & Trò Chơi Trúng Thưởng",
      subtitle: "Gian hàng trải nghiệm vận động dân gian",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-trung-thu/challenge_games.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Khám phá các trò chơi nhận quà lý thú tại các gian hàng: phản xạ đỉnh cao, vòng quay may mắn, tinh thần thép, chân sút siêu hạng, bắn thỏ ngọc, búa tạ nghìn cân, phi tiêu bong bóng."
    },
    {
      title: "Lâu Đài Hơi & Gian Hàng Dân Gian",
      subtitle: "Tô tượng, nặn tò he & in tranh Đông Hồ",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-trung-thu/challenge_crafts.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Vui chơi thả ga tại lâu đài hơi khổng lồ và tham gia hoạt động dân gian nghệ thuật: tự tay tô tượng thạch cao, học nặn tò he truyền thống từ bột màu và trải nghiệm kỹ thuật in tranh Đông Hồ."
    },
    {
      title: "Cuộc Thi Đèn Ông Sao & Làm Bánh Dẻo",
      subtitle: "Thi thâu tóm giải thưởng liên khối lớp",
      image: "/assets/images/trai-nghiem/cap-thcs/le-hoi-trung-thu/challenge_cooking.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh khối 8, 9 tranh tài tự thiết kế và trang trí đèn ông sao khổng lồ từ khung tre. Học sinh khối 6, 7 thi nhào bột bánh dẻo truyền thống, ép khuôn tạo cặp bánh dẻo sắc nét."
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
            4 Trải Nghiệm Lễ Hội Đặc Sắc
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Kết hợp khéo léo giữa chương trình biểu diễn nghệ thuật hoành tráng trên sân khấu chính và chuỗi hoạt động hội chợ trải nghiệm thủ công dưới sân trường.
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
