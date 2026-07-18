"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khởi Động MC Vui Nhộn & Lưu Ý An Toàn",
      subtitle: "Bật nhạc sôi động & trò chơi hoạt náo ngoài trời",
      image: "/assets/images/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi động ngày hội với các trò chơi tập thể lớn vui nhộn. Chú hề MC ABA tận tâm nhắc nhở các quy tắc an toàn nước quan trọng trước khi các bé mầm non tham gia vào lễ hội nước."
    },
    {
      title: "Cầu Trượt Nước Hơi & Ma Trận Bong Bóng",
      subtitle: "Chinh phục cầu trượt nước khổng lồ & tắm bong bóng xà phòng",
      image: "/assets/images/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/challenge_bubbles.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Bé thỏa sức chinh phục cầu trượt hơi nước mát lạnh trượt dài cực đã. Đắm mình trong 'Ma trận bong bóng xà phòng' xốp xinh xắn ngập tràn nụ cười sảng khoái."
    },
    {
      title: "Tay Súng Nước Thiện Xạ & Câu Cá Vui Vẻ",
      subtitle: "Bắn súng phun nước tiêu diệt bia quái vật & góc câu cá",
      image: "/assets/images/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/challenge_shooting.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Rèn luyện sự khéo léo kết hợp tay mắt: Bé ngắm bắn phun súng nước hạ gục các bia quái vật ngộ nghĩnh. Tham gia chặng câu cá sắc màu đầy kiên trì lý thú."
    },
    {
      title: "Đua Thuyền Rùa & Bowling Nước Kịch Tính",
      subtitle: "Đua thuyền phao hơi, bowling nước & vận chuyển nước",
      image: "/assets/images/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon/challenge_boat.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Bé cùng đồng đội tham gia thi đấu đua thuyền rùa phao hơi tốc độ trên cạn. Chơi bowling nước ném đổ chai đổ nước và chặng thi vận chuyển nước khéo léo đổ đầy xô."
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
            <span className="text-abaOrange">TRẠM TRẢI NGHIỆM NƯỚC</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Thế Giới Nước Vui Nhộn Cho Bé
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Học sinh mầm non di chuyển theo lớp dưới sự chỉ dẫn của giáo viên chủ nhiệm và hướng dẫn viên ABA tận tâm.
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
