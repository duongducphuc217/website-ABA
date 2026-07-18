"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Vệ Quốc Quân Tuyên Ngôn Độc Lập",
      subtitle: "Khởi động hào hùng & Chặng đua sâu phao hơi",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khai mạc ngày hội với MC mặc trang phục vệ quốc quân hướng dẫn khởi động. Học sinh phối hợp đồng đội cưỡi sâu phao hơi vượt chướng ngại vật thu thập mảnh ghép hoàn thiện bức tranh lịch sử dân tộc."
    },
    {
      title: "Trải Nghiệm Tại Lớp & Đấu Trường Trí Tuệ",
      subtitle: "Phân chia khối 1,2 và khối 3,4,5 học sử",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/challenge_folding.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Khối 1,2 trải nghiệm tại lớp: tìm hiểu hình ảnh anh bộ đội, thực hành gấp chiếc mũ ca lô giấy. Khối 3,4,5 tham gia Đấu trường trí tuệ 'Bản lĩnh Việt Nam' thảo luận trả lời nhanh các câu hỏi lịch sử Hà Nội."
    },
    {
      title: "Sống Mãi Với Thủ Đô",
      subtitle: "Tái hiện trận địa phòng thủ Trung đoàn Thủ đô",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/challenge_defend.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Học sinh các lớp cùng nhau chung tay đắp lũy cát giả định phòng tuyến của các chiến sĩ bảo vệ Hà Nội mùa đông năm 1946 - 1947. Các lớp tự hào chụp hình check-in cùng trận địa do mình dựng nên."
    },
    {
      title: "Điện Biên Phủ Trên Không & Tiến Về Sài Gòn",
      subtitle: "Bắn tên lửa mô phỏng & Đẩy xe tăng hơi",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh/challenge_victory.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh thực hành bắn tên lửa nước phao tiêu diệt máy bay địch, tìm hiểu lực đẩy phản lực. Chặng đua xe tăng bơm hơi khổng lồ đưa quân tiến thẳng húc đổ cổng chào Dinh Độc Lập giành chiến thắng hoàn toàn."
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
            Chặng Đường Lịch Sử Tiểu Học
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Giáo án được thiết kế chuyên biệt, đan xen khéo léo giữa các trò chơi vận động tập thể và các bài học kỹ năng thủ công nhẹ nhàng.
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
