"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Lính Cứu Hỏa Vui Tính",
      subtitle: "Phá băng đầu giờ & Gắn kết toàn trường",
      image: "/assets/images/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Học sinh cùng MC lính cứu hỏa ABA tham gia game warm-up siêu nhộn. Chơi game lớn 'Sức mạnh đồng đội' chuyền bóng yoga tiếp sức, tạo không khí hừng hực hào hứng trước khi bước vào các bài học sinh tồn."
    },
    {
      title: "Kỹ Năng Thoát Hiểm Cơ Bản & Khói Phòng Tối",
      subtitle: "Huấn luyện lý thuyết kết hợp đi khom rờ tường",
      image: "/assets/images/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/challenge_basics.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Chuyên gia PCCC hướng dẫn cách tìm lối thoát, mở cửa khi cháy, che mũi miệng tránh ngạt khói. Học sinh trực tiếp thực hành chiến thuật đi khom rờ tường thoát hiểm qua phòng tối ngập tràn khói nhân tạo an toàn."
    },
    {
      title: "Thoát Hiểm Tầng Cao & Tiêu Lệnh Chữa Cháy",
      subtitle: "Thực hành đu dây hạ chậm & Chữa cháy 114",
      image: "/assets/images/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/challenge_escape.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Huấn luyện cách sử dụng dây hạ chậm để tự thoát nạn từ tầng 2 xuống mặt đất an toàn dưới sự giám sát chặt chẽ của các huấn luyện viên chuyên nghiệp. Thi đấu teambuilding chữa cháy dập lửa, vượt chướng ngại vật."
    },
    {
      title: "Sơ Cấp Cứu Vết Thương & Tổng Kết",
      subtitle: "Thực hành băng bó y tế cơ bản",
      image: "/assets/images/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay/challenge_firstaid.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh học cách xử lý sơ cứu vết thương do bỏng, va đập hoặc ngạt. Chia cặp thực hành 2 kỹ thuật băng bó cơ bản quan trọng: băng bó bàn tay và băng bó cánh tay."
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
            4 Trạm Huấn Luyện Thực Hành
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Toàn bộ học sinh được trực tiếp huấn luyện lý thuyết kết hợp với thực hành tình huống giả định khói lửa chân thực dưới sự hướng dẫn của lính cứu hỏa chuyên nghiệp.
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
