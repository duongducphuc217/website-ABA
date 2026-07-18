"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Sóng Thần Vui Nhộn & Đội Cứu Hộ",
      subtitle: "Phá băng đầu giờ & Chuyên đề cứu nạn",
      image: "/assets/images/trai-nghiem/cap-thcs/water-safe-and-fun/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi động cuồng nhiệt dưới sự dẫn dắt của MC với trò chơi Sóng thần vui nhộn, Đoàn tàu ra khơi. Trải nghiệm biệt đội cứu hộ nhí: học kỹ năng gọi điện cứu trợ, cách nắm phao cứu sinh đúng tiêu chuẩn, thực hành kỹ thuật hô hấp nhân tạo sơ cứu."
    },
    {
      title: "Dũng Sĩ Can Đảm & Cầu Phao Bồng Bềnh",
      subtitle: "Vượt chướng ngại vật & Thử thách thăng bằng",
      image: "/assets/images/trai-nghiem/cap-thcs/water-safe-and-fun/challenge_safety.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Vượt qua mô hình nhà phao khổng lồ đầy thử thách dưới vòi phun nước rồng cản trở để thu hoạch ngọc rồng. Thực hành thăng bằng cơ thể khi di chuyển qua cầu phao bập bềnh chênh vênh trên mặt nước."
    },
    {
      title: "Sân Bóng Bì Bõm & Con Đường Ướt Sũng",
      subtitle: "Bóng đá phao nước & Chuyền nước tiếp sức",
      image: "/assets/images/trai-nghiem/cap-thcs/water-safe-and-fun/challenge_games.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Trận đấu bóng đá kịch tính trên sân phao ngập nước trơn trượt đầy ắp tiếng cười. Cả lớp cùng phối hợp chuyển nước từ điểm xuất phát về bể chứa bằng các dụng cụ đặc thù theo quy tắc nghiêm ngặt của quản trò."
    },
    {
      title: "Bowling Nước & Trận Chiến Súng Nước",
      subtitle: "Trượt phao húc ki & Đại chiến súng nước",
      image: "/assets/images/trai-nghiem/cap-thcs/water-safe-and-fun/challenge_battle.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh hóa thân thành các quả bóng bowling khổng lồ trượt dài trên thảm nước húc đổ các con ki hơi khổng lồ. Tham gia trận chiến súng nước liên khối vui nhộn bùng nổ năng lượng ngày hè."
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
            Chuỗi Hoạt Động Ngày Hội Nước
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Kết hợp hoàn hảo giữa các bài tập thực hành sơ cứu cứu nạn đuối nước dưới lớp học và chuỗi trò chơi vận động nước sôi động tại sân trường.
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
