"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khai Mạc Lễ Hội: Tinh Hoa Văn Hóa Dân Tộc",
      subtitle: "Văn nghệ mừng xuân, trống hội lân sư rồng sôi động",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-xuan/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Mở đầu bùng nổ cùng MC ABA, trống hội múa lân sư rồng chào đón rộn rã. Thưởng thức tiết mục xiếc nghệ thuật, xiếc ảo thuật tung hứng điêu luyện, lôi cuốn mang không khí xuân rộn ràng về sân trường."
    },
    {
      title: "Trò Chơi Trải Nghiệm Mô Phỏng Lịch Sử",
      subtitle: "Chiến thắng sông Như Nguyệt & Đông Bộ Đầu",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-xuan/challenge_history.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Tái hiện lịch sử hào hùng qua chặng game: Đại thắng sông Như Nguyệt, Chiến thắng Đông Bộ Đầu, Giải phóng Thăng Long, Hà Nội 12 ngày đêm khói lửa, Chiến dịch Tết Mậu Thân và chặng bay Phi công anh hùng."
    },
    {
      title: "Trò Chơi Vận Động Vui Nhộn Ngoài Trời",
      subtitle: "Vượt núi hơi khổng lồ, sâu hơi, kéo co bao bố",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-xuan/challenge_sports.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Thỏa sức giải phóng thể lực tại khu vận động liên hoàn phao hơi: Chinh phục núi hơi khổng lồ, đua ngựa phao hơi kéo co tập thể kịch tính, đua sâu hơi nhanh nhẹn và các cụm trò chơi nhảy bao bố, nhảy dây."
    },
    {
      title: "Hội Chợ Xuân Đất Việt & Trò Chơi Trúng Thưởng",
      subtitle: "Sử dụng coupon mua sắm chợ quê và trúng quà lớn",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-xuan/challenge_booths.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh sử dụng coupon do trường phát để mua sắm sản phẩm Tết, nặn tò he, viết thư pháp, in tranh Đông Hồ, chơi máy gắp gấu bông. Vui chơi các gian trúng thưởng: Tay vợt siêu hạng, phi tiêu, răng may mắn."
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
            Chặng Đường Lễ Hội Xuân Đất Việt
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA tổ chức quy mô chuyên nghiệp suốt 1 ngày, tích hợp khoa học giữa văn hóa Tết dân gian và vận động hiện đại.
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
