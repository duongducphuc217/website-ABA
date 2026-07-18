"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Hóa Trang Check-in & Gian Hàng Trò Chơi",
      subtitle: "Hội chợ hóa trang và thử thách trúng thưởng",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/challenge_booths.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Học sinh hóa trang lộng lẫy check-in tại các bối cảnh ma quái, rùng rợn. Tham gia chuỗi 5 gian hàng trò chơi trúng thưởng sôi động: Tiêu diệt bí ngô (phi tiêu), Vẽ mặt nạ Halloween, Động xà không đáy, Angry bird và Thần sấm."
    },
    {
      title: "Khai Mạc Sân Khấu Hóa Ma Cà Rồng",
      subtitle: "Kịch ma mị rùng rợn cùng MC ABA",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/challenge_ghosts.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Sân khấu bừng sáng với âm nhạc ma mị đầy lôi cuốn. MC xuất hiện ấn tượng trong trang phục Ma Cà Rồng huyền bí, kể câu chuyện Halloween ý nghĩa và tổ chức trò chơi tương tác sân khấu thu hút toàn trường."
    },
    {
      title: "Thi Văn Nghệ: Twilight Hoàng Hôn Đỏ",
      subtitle: "Trình diễn các tiết mục văn nghệ hóa trang đặc sắc",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/challenge_dance.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Cuộc so tài nghệ thuật rực rỡ giữa 10 lớp học. Các lớp tự tin trình diễn các tiết mục văn nghệ được dàn dựng công phu theo các tiêu chí thú vị: Dị (kinh dị), Rộn (vui nhộn), Ảo ma Canada (sáng tạo) và Đông thành viên."
    },
    {
      title: "Đuổi Hình Bắt Chữ & Tiệc Buffet Tối",
      subtitle: "Đố vui trí tuệ giành quà & Bữa tối sum vầy",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/le-hoi-halloween/challenge_buffet.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Thử tài nhanh trí cùng game đố vui Đuổi hình bắt chữ chủ đề Halloween giành phần quà hấp dẫn từ BTC. Thưởng thức tiết mục kịch câm handmine độc đáo từ học sinh lớp 4,5 và bùng nổ năng lượng với tiệc buffet tối vui vẻ."
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
            Chặng Đường Lễ Hội Hóa Trang
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Ngày hội kết hợp hài hòa giữa các cụm trò chơi trúng thưởng ngoài trời và đêm nhạc hội hóa trang bùng nổ cảm xúc trên sân khấu.
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
