"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Sóng Thần Vui Nhộn & Cứu Hộ Nhí",
      subtitle: "Khởi động MC & Học kỹ năng an toàn nước",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi động cuồng nhiệt cùng MC qua các game Sóng thần vui nhộn, Đoàn tàu ra khơi. Trải nghiệm biệt đội cứu hộ nhí: học sinh lớp 1,2,3 thực hành gọi cứu hộ, cách nắm phao cứu sinh; lớp 4,5 thực hành hô hấp nhân tạo cho nạn nhân."
    },
    {
      title: "Cầu Phao Bồng Bềnh & Ngư Dân Dũng Cảm",
      subtitle: "Thử thách thăng bằng & Vượt rào giải cứu cá cua",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/challenge_cpr.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Học sinh vượt qua cầu phao đung đưa liên tục trên mặt nước để rèn luyện thăng bằng. Tham gia chặng đua 'Ngư dân dũng cảm' vượt qua chướng ngại vật để giải cứu những chú cua, chú cá mắc kẹt trong môi trường nước ô nhiễm."
    },
    {
      title: "Ma Trận Nước & Dũng Sĩ Can Đảm",
      subtitle: "Đạp xe ma trận & Vượt nhà phao khổng lồ",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/challenge_boat.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Phối hợp đạp xe đạp vượt qua ma trận nước phun mát lạnh đầy kịch tính. Trải nghiệm dũng sĩ can đảm leo qua nhà phao khổng lồ vượt chướng ngại vật, né tránh vòi rồng phun nước ác liệt để mang ngọc rồng về đích."
    },
    {
      title: "Đua Thuyền Tự Chế & Trận Đấu Súng Nước",
      subtitle: "Thiết kế thuyền buồm & Đại chiến súng nước",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/water-safe-and-fun/challenge_battle.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh tự tay lắp ghép, chế tạo mô hình thuyền buồm từ các vật liệu đơn giản và thả đua để học nguyên lý di chuyển vật lý của gió. Bùng nổ năng lượng ngày hè với trận chiến súng nước, câu cá trúng thưởng."
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
            <span className="text-abaOrange">HOẠT ĐỘNG THỰC TẾ</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Chặng Trải Nghiệm Ngày Hội Nước
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Toàn bộ học sinh được phân chia luân phiên xoay vòng khoa học qua các trạm game nước sôi động, đảm bảo an toàn tuyệt đối.
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
