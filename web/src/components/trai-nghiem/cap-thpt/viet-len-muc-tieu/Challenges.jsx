"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const kicker = data?.kicker || "TRẠM TRẢI NGHIỆM";
  const heading = data?.heading || "Các Chặng Trải Nghiệm Giáo Dục";
  const subtitle = data?.subtitle || "Kết hợp hài hòa giữa hội thảo chuyên gia truyền cảm hứng và các hoạt động teambuilding vận động thể chất bùng nổ.";

  const defaultChallenges = [
    {
      title: "Khởi Động Toàn Trường Cùng MC Vui Nhộn",
      subtitle: "Tại sân trường - Khởi động teambuilding tưng bừng",
      image: "/assets/images/trai-nghiem/cap-thpt/viet-len-muc-tieu/challenge_ball.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "MC hoạt náo của ABA tạo không khí sôi động, phấn khởi. Tất cả các lớp tham gia chặng đua Sức mạnh đồng đội: chuyền quả bóng yoga khổng lồ qua đầu lớp mình nhanh nhất để giành chiến thắng."
    },
    {
      title: "Trải Nghiệm: Sức Mạnh Của Mục Tiêu",
      subtitle: "Hội thảo chia sẻ cùng Chuyên gia ABA",
      image: "/assets/images/trai-nghiem/cap-thpt/viet-len-muc-tieu/goals_hero_bg.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Chuyên gia chia sẻ sâu sắc về vai trò của ước mơ trong cuộc sống học sinh THPT. Tương tác qua trò chơi 'Bịt mắt ném bóng' rút ra bài học kinh nghiệm, thắp sáng động lực hành động."
    },
    {
      title: "Trải Nghiệm 1: Viết Lên Mục Tiêu Cuộc Đời",
      subtitle: "Phân tích điểm mạnh & Phương pháp khoa học SMART",
      image: "/assets/images/trai-nghiem/cap-thpt/viet-len-muc-tieu/challenge_worm.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Học sinh khám phá bản thân qua các chủ đề: Bạn chính là những gì bạn nghĩ; Câu chuyện tờ giấy trắng và điểm đen; Viết ra 30 điểm mạnh cá nhân; Khám phá 9 loại hình trí thông minh và học cách lập mục tiêu công thức 'Từ X -> Y + Khi nào'."
    },
    {
      title: "Trải Nghiệm 2: Vượt Qua Thử Thách",
      subtitle: "Con đường thành công & Hướng tới mục tiêu",
      image: "/assets/images/trai-nghiem/cap-thpt/viet-len-muc-tieu/challenge_pipes.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Thử thách 1 'Con đường thành công': Đội chơi dùng vật dụng giới hạn xây dựng con đường đưa cả đội về đích. Thử thách 2 'Hướng tới mục tiêu': Vận chuyển ống hơi và ném bóng yoga trúng các ô điểm số mục tiêu."
    },
    {
      title: "Trải Nghiệm 3: Teambuilding Chinh Phục Mục Tiêu",
      subtitle: "Đồng đội ăn ý & Vượt núi hơi khổng lồ",
      image: "/assets/images/trai-nghiem/cap-thpt/viet-len-muc-tieu/challenge_climbing.png",
      badgeColor: "bg-pink-50 text-pink-650 border-pink-200",
      description: "Thử thách 1 'Đồng đội ăn ý': Tâng bóng yoga bằng nệm tâng không chạm tay lọt vào lưới của đồng đội. Thử thách 2 'Chinh phục mục tiêu': Từng thành viên vượt chướng ngại vật liên hoàn và leo lên núi hơi giành lấy vật tích điểm về cho lớp."
    }
  ];

  const items = data?.items || defaultChallenges;

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
            <span className="text-abaOrange">{kicker}</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            {heading}
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {subtitle}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((ch, idx) => (
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
                  <span className={`inline-block text-xs font-extrabold px-3 py-1.5 rounded-full border shadow-sm bg-white/95 backdrop-blur-sm ${ch.badgeColor || "bg-blue-50 text-abaBlue border-blue-200"}`}>
                    Trải Nghiệm 0{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-[20px] flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">
                    {ch.subtitle}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-850 mb-4 font-heading">
                    {ch.title}
                  </h3>
                  <p className="text-slate-650 text-sm leading-relaxed text-wrap-pretty mb-0">
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
