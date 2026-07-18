"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Hoạt Cảnh Trăng Báo Động Hài Hước",
      subtitle: "Chú Cuội bị lừa bắt cóc & chị Hằng giải cứu",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-trung-thu/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Hoạt cảnh mở màn vui nhộn mang thông điệp cảnh giác: Chú Cuội bị kẻ gian gọi điện lừa bắt cóc sang Campuchia, chị Hằng xuất hiện kịp thời vạch mặt kẻ xấu giải cứu Cuội an toàn."
    },
    {
      title: "Khai Mạc Đêm Hội & Lân Trống Hội",
      subtitle: "Trống hội tưng bừng & Chúc mừng tết Trung Thu",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-trung-thu/challenge_market.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Đoàn lân sư rồng biểu diễn múa khai hội tưng bừng. Đại diện Ban giám hiệu phát biểu ngắn gọn khai mạc chương trình, lan tỏa năng lượng tích cực tới các bạn nhỏ."
    },
    {
      title: "Giải Mã Bí Ẩn: Ai Thông Minh Hơn Chú Cuội",
      subtitle: "Bé giải đố cùng Cuội Hằng & Trò chơi phản xạ",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-trung-thu/hero_bg.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Bé tham gia trò chơi tương tác giải đáp câu đố dân gian thú vị trên sân khấu cùng chú Cuội chị Hằng để rinh những món quà bất ngờ. Rèn luyện phản xạ nhanh qua game sân khấu náo nhiệt."
    },
    {
      title: "Đêm Hội Kỳ Ảo & Tiết Mục Xiếc Ảo Thuật",
      subtitle: "Xiếc hề tung hứng bong bóng & Ảo thuật gia bí ẩn",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-trung-thu/challenge_contest.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Hòa mình vào tiết mục xiếc nghệ thuật bùng nổ sân khấu từ các nghệ sĩ xiếc chuyên nghiệp và tiết mục ảo thuật kỳ diệu. Bốc thăm trúng thưởng 10 phần quà may mắn gửi tặng bé."
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
            <span className="text-abaOrange">TRẠI TRẢI NGHIỆM</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Các Chặng Trải Nghiệm Trung Thu Cổ Tích
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Kết hợp kịch bản hài hước giáo dục cảnh giác với các tiết mục biểu diễn xiếc hề chuyên nghiệp lôi cuốn.
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
              className="bg-white border border-slate-150 rounded-16 overflow-hidden shadow-sm hover:shadow-md transition-all duration-350 flex flex-col"
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
