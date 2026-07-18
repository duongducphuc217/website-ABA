"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khởi Động Năng Lực Cùng MC",
      subtitle: "Tại sân khấu chính - Khởi động cùng MC vui nhộn",
      image: "/assets/images/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi động ngày hội dã ngoại tưng bừng. Mỗi tập thể lớp kết hợp thành 1 đội hình đoàn kết, cùng chơi các game hoạt náo tập thể vui nhộn cùng chú hề MC."
    },
    {
      title: "Chặng Vận Động Vui Nhộn Ngoài Trời",
      subtitle: "Thu hoạch nông sản, đua xe chòi chân & nhà phao hơi",
      image: "/assets/images/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/challenge_teambuilding.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Các bé tham gia chuỗi vận động thể chất dẻo dai: Vượt chướng ngại vật nhà phao liên hoàn hơi, đua xe đạp chòi chân thăng bằng kịch tính, đua hươu raindee hơi, nhảy bao bố sắc màu, ném bóng rổ và thu hoạch nông sản dã ngoại."
    },
    {
      title: "Sáng Tạo Nghệ Thuật Độc Đáo",
      subtitle: "Vẽ tranh bằng ngón tay, in tranh Đông Hồ & làm gà bông",
      image: "/assets/images/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/challenge_art.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Khơi mở khiếu hội họa màu sắc của trẻ: vẽ tranh sáng tạo bằng ngón tay nhỏ nhắn, in tranh Đông Hồ truyền thống, in tranh bóng bong bóng xà phòng xốp, kể chuyện rối bóng thần tiên và tự làm gà con bằng bông xinh xắn."
    },
    {
      title: "Khám Phá Khoa Học Ống Hút Kỳ Diệu",
      subtitle: "Thực nghiệm kèn ống hút & phóng tên lửa ống hút",
      image: "/assets/images/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu/challenge_science.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Kích thích trí tò mò logic khoa học của bé qua các bài thực nghiệm trực quan sinh động: Bé tự tay làm chiếc kèn phát ra âm thanh từ ống hút giấy, chế tạo mô hình tên lửa hơi phóng cao từ ống hút."
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
            <span className="text-abaOrange">TRẠM TRẢI NGHIỆM</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            4 Trạm Khám Phá Kỳ Thú Cho Bé
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Các lớp mầm non luân phiên xoay vòng trải nghiệm trọn vẹn cả 7 hoạt động dưới sự hướng dẫn tỉ mỉ của cô giáo chủ nhiệm.
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
