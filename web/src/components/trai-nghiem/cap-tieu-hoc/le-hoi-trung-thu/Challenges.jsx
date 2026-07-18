"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Hoạt Cảnh Hài Hước: AI Là Chú Cuội",
      subtitle: "Chú Cuội mải chơi và chú Cuội AI độc đáo",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Hoạt cảnh sân khấu hóa dí dỏm: Chú Cuội tạo ra Cuội AI để thay mình đi cùng chị Hằng xuống trần gian. Chị Hằng phát hiện ra và giúp chú Cuội hiểu về trách nhiệm của bản thân, cùng nhau tổ chức trung thu."
    },
    {
      title: "Khai Mạc Lễ Hội & Múa Lân Sư Rồng",
      subtitle: "Trống hội rộn ràng & Xiếc nghệ thuật hấp dẫn",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/challenge_market.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Đoàn lân sư rồng biểu diễn khai mạc náo nhiệt. MC Cuội Hằng tổ chức giải mã câu đố nhận thưởng lớn từ Trung thu diệu kỳ và thưởng thức các tiết mục xiếc nghệ thuật ảo thuật vui mắt."
    },
    {
      title: "Hội Chợ Trung Thu & Trò Chơi Trúng Thưởng",
      subtitle: "Trải nghiệm gian hàng dân gian & trò chơi trúng thưởng",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/hero_bg.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Học sinh tham gia hội chợ mua bán và vui chơi 9 gian hàng trúng thưởng: Phản xạ đỉnh cao, Tay ném số 1, Phi tiêu bóng bóng, Bịt mắt đánh trống, Vòng quay may mắn. Trải nghiệm nặn tò he, tô tượng, lâu đài hơi."
    },
    {
      title: "Hội Thi Làm Bánh Dẻo & Làm Đèn Ông Sao",
      subtitle: "Thi thố tài năng khéo tay giữa các khối lớp",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu/challenge_contest.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Khối lớp cử thành viên tranh tài làm bánh dẻo ngon nhất và lắp ghép trang trí đèn ông sao đẹp nhất từ khung tre chuẩn bị sẵn. BGK tổ chức chấm điểm, trưng bày sản phẩm lung linh cuối đêm hội."
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
            4 Hoạt Động Trung Thu Lung Linh
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Kết hợp khéo léo văn hóa truyền thống nặn tò he bánh dẻo với các chặng trò chơi vận động tập thể sôi nổi ngập tràn tiếng cười.
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
