"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Bản Hùng Ca Bất Hủ",
      subtitle: "Khai mạc ngày hội & Khởi động vệ quốc",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi động ngắn cùng MC trong trang phục Vệ quốc quân tái hiện không khí kháng chiến. Học sinh nghe giới thiệu về chặng đường vẻ vang của Quân đội Nhân dân Việt Nam đấu tranh giành tự do."
    },
    {
      title: "Thử Thách: Tuyên Ngôn Độc Lập",
      subtitle: "Vận động thu thập mảnh ghép tranh lịch sử",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/challenge_knowledge.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Các thành viên phối hợp cưỡi sâu phao hơi dài vượt chướng ngại vật để mang về các mảnh ghép lịch sử quan trọng: Bác Hồ đọc Tuyên ngôn độc lập, Chiến thắng Điện Biên Phủ, Giải phóng Sài Gòn."
    },
    {
      title: "Đấu Trường Trí Tuệ & Sống Mãi Thủ Đô",
      subtitle: "Tái hiện trận địa & Hỏi đáp lịch sử Hà Nội",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/challenge_defend.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Tìm hiểu lịch sử Hà Nội hào hùng qua hai cuộc kháng chiến chống Pháp và chống Mỹ qua game giơ bảng đáp án thông minh. Tự tay đắp lũy cát tái hiện phòng tuyến Trung đoàn Thủ đô 1946-1947."
    },
    {
      title: "Điện Biên Phủ Trên Không & Tiến Về Sài Gòn",
      subtitle: "Bắn tên lửa phao & Phối hợp đẩy xe tăng hơi",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh/challenge_victory.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Trải nghiệm phóng tên lửa nước tiêu diệt máy bay Mỹ, tìm hiểu nguyên lý phản lực. Chặng cuối cùng đồng lòng phối hợp đẩy xe tăng bơm hơi khổng lồ tiến thẳng về đích giải phóng Sài Gòn."
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
            4 Thử Thách Trải Nghiệm Lịch Sử
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Dựng lại những dấu mốc hào hùng của dân tộc Việt Nam thông qua các trò chơi vận động đồng đội kết hợp tư duy lịch sử sống động.
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
