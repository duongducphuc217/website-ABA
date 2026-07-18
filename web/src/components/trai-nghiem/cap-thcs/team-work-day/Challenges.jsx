"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khởi Động Toàn Trường",
      subtitle: "Gắn kết đầu giờ cùng MC náo nhiệt",
      image: "/assets/images/trai-nghiem/cap-thcs/team-work-day/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "MC hoạt náo tạo nguồn năng lượng hứng khởi đầu giờ. Game khởi động toàn trường: Sức mạnh đồng đội - các lớp chuyền quả bóng yoga của mình được nhiều vòng nhất để giành chiến thắng."
    },
    {
      title: "Trải Nghiệm 1: Sức Mạnh Hợp Lực",
      subtitle: "Chuỗi thử thách vận động liên hoàn sân trường",
      image: "/assets/images/trai-nghiem/cap-thcs/team-work-day/challenge_synergy.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Chuyên gia ABA chia sẻ về kỹ năng làm việc nhóm. Thi đấu: Thử thách 1: Con đường gian nan (phao sâu hơi), Thử thách 2: Chung một mục tiêu (rùa/thỏ hơi), Thử thách 3: Ngọn tháp đồng đội (vượt núi hơi xếp tháp)."
    },
    {
      title: "Trải Nghiệm 2: Hợp Tác, Sẻ Chia",
      subtitle: "Chuyên đề kỹ năng làm việc nhóm trong lớp học",
      image: "/assets/images/trai-nghiem/cap-thcs/team-work-day/challenge_share.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Hoạt động 55 phút trong phòng học. Học sinh hiểu: Tổng quát về kỹ năng làm việc nhóm (10p); Phương pháp thông tin trong làm việc nhóm (20p); Tôn trọng và lắng nghe đồng đội (20p)."
    },
    {
      title: "Trải Nghiệm 3: Đồng Đội Ăn Ý",
      subtitle: "Thi đua chiến thuật tại sân hoặc nhà thi đấu đa năng",
      image: "/assets/images/trai-nghiem/cap-thcs/team-work-day/challenge_unity.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Mỗi lớp chia 4 tổ vượt qua: Thử thách 1: Kế hoạch tuyệt hảo (vai trò đội trưởng), Thử thách 2: Con đường đồng đội (chuyền bóng qua bạt nhiều lỗ), Thử thách 3: Mọi người vì 1 người (thả bóng trúng tâm)."
    }
  ];

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

  

  const kicker = data?.kicker || "TRẠM TRẢI NGHIỆM";
  const heading = data?.heading || "Các Chặng Trải Nghiệm Giáo Dục";
  const subtitle = data?.subtitle || "Các chặng thử thách gắn kết học sinh vô cùng đặc sắc và hấp dẫn.";

  const challengesList = data?.items || defaultChallenges;

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
            4 Hoạt Động Trải Nghiệm Key
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Các hoạt động vận động liên hoàn kết hợp chia sẻ trong lớp được thiết kế bài bản nhằm gắn kết tình đồng đội và phát triển kỹ năng làm việc nhóm cho học sinh.
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
