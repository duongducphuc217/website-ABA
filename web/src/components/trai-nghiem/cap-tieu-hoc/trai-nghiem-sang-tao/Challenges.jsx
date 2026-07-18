"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "MC Vui Nhộn Khởi Động Sân Trường",
      subtitle: "Bật nhạc sôi động & các cụm game teambuilding nhanh",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi động ngày hội với các hoạt động tập thể náo nhiệt: chơi chuyền bóng yoga đồng đội, thử thách 'Con đường đoàn kết' (Khối 3-5) hoặc nhảy dân vũ tập thể vui vẻ (Khối 1-3)."
    },
    {
      title: "Team Building Kết Nối Đồng Đội",
      subtitle: "Tại sân trường - Đua sâu hơi siêu tốc & Đua ngựa",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/challenge_teambuilding.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Các lớp cùng nhau phối hợp vận động nhịp nhàng vượt chướng ngại vật: chặng đua sâu hơi siêu tốc, đua ngựa hơi 'Kỵ sĩ tài ba' và cuộc đua rùa và thỏ hơi đầy hài hước kịch tính."
    },
    {
      title: "Nghệ Thuật Thủ Công Truyền Thống",
      subtitle: "Tri thức văn hóa - In tranh Đông Hồ & Chuồn chuồn tre",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/challenge_art.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Các em tham gia Rung Chuông Vàng tìm hiểu lịch sử Đông Hồ. Tự tay thực hành kỹ thuật in tranh Đông Hồ nhiều màu, trang trí chuồn chuồn tre thủ công và cùng xây tháp gỗ đoàn kết khổng lồ."
    },
    {
      title: "Khoa Học Cuộc Sống & Lửa Nước Sinh Tồn",
      subtitle: "Thực nghiệm khoa học lực đẩy & bộ lọc nước mini",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao/challenge_science.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Khám phá nguyên lý phản lực: đua ô tô tái chế tự chế chạy bằng động cơ phản lực cánh quạt, phóng tên lửa nước hơi. Học cách tạo lửa nướng thịt và thực hành thiết kế bình lọc nước mini sinh tồn."
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
            <span className="text-abaOrange">HOẠT ĐỘNG TRẢI NGHIỆM</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            3 Nhóm Trải Nghiệm Sáng Tạo
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Học sinh được chia thành các đội nhỏ xoay vòng qua các trạm nghệ thuật, thực nghiệm khoa học và teambuilding vận động.
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
