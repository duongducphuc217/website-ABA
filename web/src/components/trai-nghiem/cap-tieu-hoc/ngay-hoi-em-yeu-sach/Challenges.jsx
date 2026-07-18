"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Trạm 1: Đường Tăng Đi Thỉnh Kinh",
      subtitle: "Tại sân trường - Vận động Teambuilding phao hơi",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Học sinh phối hợp đồng đội vượt qua chặng nhà phao hơi khổng lồ để mang về các rương sách ý nghĩa. Trò chơi vận động rèn tinh thần đoàn kết, giúp các em cảm nhận sâu sắc giá trị quý giá của từng cuốn sách."
    },
    {
      title: "Trạm 2 & 3: Đọc Sách Thông Minh & Độc Giả Thông Thái",
      subtitle: "Tại lớp học và Nhà thể chất - Học thuật & Vui chơi",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/challenge_basics.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Thực hành phương pháp đọc sách khoa học để trích xuất và ghi nhớ thông tin nhanh chóng. Tranh tài đố vui hỏi đáp tại nhà thể chất giúp học sinh tích lũy, trao đổi kiến thức từ những cuốn sách thiếu nhi kinh điển."
    },
    {
      title: "Trạm 4: Sáng Tác Bìa Sách",
      subtitle: "Tại lớp học - Vẽ mỹ thuật & Sáng tác nghệ thuật",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/challenge_crafts.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Phát huy tối đa trí tưởng tượng bay bổng: học sinh tự tay tô màu, vẽ trang trí bìa của những cuốn sách, truyện tranh mình đã được học hoặc sáng tạo bìa cho các tác phẩm tự sáng tác. Được mang sản phẩm về làm kỷ niệm."
    },
    {
      title: "Trạm 5: Góc Đọc Sách & Trưng Bày Poster",
      subtitle: "Thời gian tự do trải nghiệm văn hóa đọc",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach/challenge_reading.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh cùng ngồi đọc cuốn sách yêu thích mang theo trong không gian tự do thoải mái. Kết thúc ngày hội bằng buổi triển lãm trưng bày các poster tuyên truyền đọc sách và báo tường độc đáo do các lớp tự thiết kế."
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
            5 Trạm Vui Học Sách Thú Vị
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Học sinh được luân phiên tham gia các trạm đọc sách, đố vui, thiết kế bìa sách và vận động thể chất sôi nổi giúp duy trì hứng thú tối đa.
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
