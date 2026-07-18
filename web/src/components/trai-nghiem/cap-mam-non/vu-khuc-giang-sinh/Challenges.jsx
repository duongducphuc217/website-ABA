"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Ông Già Noel & Công Chúa Tuyết Xuất Hiện",
      subtitle: "Hoạt cảnh Giáng Sinh vui nhộn & Thử thách bất ngờ",
      image: "/assets/images/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khai mạc tưng bừng: Ông già Noel và Công chúa Tuyết xuất hiện vui vẻ trên sân khấu, gửi lời chào mừng các bạn nhỏ và tổ chức game sân khấu khởi động, trao quà khuyến khích các bé hăng hái."
    },
    {
      title: "Xiếc Hề Châu Âu Vui Nhộn Mãn Nhãn",
      subtitle: "Anh hề châu Âu với các pha tung hứng thăng bằng",
      image: "/assets/images/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/challenge_clown.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Chào đón anh hề xiếc đến từ châu Âu xa xôi mang tới những pha biểu diễn tung hứng bóng, giữ thăng bằng trên xe đạp một bánh vô cùng đặc sắc đầy ắp tiếng cười giòn giã."
    },
    {
      title: "Đại Hội Xiếc Thú & Tôn Ngộ Không Biểu Diễn",
      subtitle: "Xiếc chó/khỉ tài năng & ảo thuật Tôn Ngộ Không",
      image: "/assets/images/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/challenge_monkey.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Những người bạn nhỏ cực kỳ đáng yêu (chú chó thông minh nhảy qua vòng, chú khỉ đi xe đạp) biểu diễn xiếc thú vui nhộn. Tôn Ngộ Không đại náo sân trường thể hiện các tiết mục ảo thuật kỳ ảo."
    },
    {
      title: "Đoán Tên Bài Hát & Bốc Thăm Trúng Quà Lớn",
      subtitle: "Trò chơi đố vui giai điệu & 10 phần quà giáng sinh may mắn",
      image: "/assets/images/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh/challenge_santa.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Tham gia chặng đoán tên bài hát Noel nhận quà từ Ông già Noel. Kết thúc bằng hoạt động bốc thăm trúng thưởng 10 phần quà may mắn đặc biệt cho bé và lời chúc Noel bình an."
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
            Chặng Đường Vũ Khúc Giáng Sinh
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA mang không gian Giáng sinh thần tiên rực rỡ và ấm áp nhất về ngay sân trường mầm non của các con.
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
