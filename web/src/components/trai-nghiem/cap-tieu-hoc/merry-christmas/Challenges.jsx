"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Ông Già Noel & Công Chúa Tuyết Xuất Hiện",
      subtitle: "Khai mạc hoạt cảnh giáng sinh kịch tính",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/merry-christmas/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Khởi đầu chương trình đầy bất ngờ với hoạt cảnh giáng sinh hoành tráng. Ông già Noel vui tính và Công chúa Tuyết nhân hậu xuất hiện từ xa chào mừng, giao lưu và phát động không khí giáng sinh an lành."
    },
    {
      title: "Ảo Thuật Xiếc Tôn Ngộ Không Đặc Sắc",
      subtitle: "Biểu diễn xiếc khỉ dí dỏm vui nhộn",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/merry-christmas/challenge_monkey.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Đón xem màn xuất hiện vô cùng độc đáo của Tôn Ngộ Không đi kèm chú khỉ tinh nghịch biểu diễn đi xe đạp tí hon, giữ thăng bằng và nhào lộn điêu luyện trên sân khấu khiến các bé thích thú reo hò."
    },
    {
      title: "Bartender Xiếc Lửa Duy Khánh",
      subtitle: "Màn trình diễn tung hứng ngọn lửa mãn nhãn",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/merry-christmas/challenge_show.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Thưởng thức màn biểu diễn nghệ thuật tung hứng chai và biểu diễn xiếc lửa đầy hồi hộp của nghệ sĩ bartender Duy Khánh. Những ngọn lửa rực sáng trong sự bảo đảm an toàn tuyệt đối sẽ mang lại trải nghiệm đáng nhớ."
    },
    {
      title: "Đố Vui Có Thưởng & Bốc Thăm Santa",
      subtitle: "Giao lưu tương tác nhận quà giáng sinh hấp dẫn",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/merry-christmas/challenge_santa.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Gia nhập cuộc chơi đố vui sân khấu hóa phản xạ nhanh cùng Ông già Noel để rinh về các túi quà giáng sinh dễ thương. Hồi hộp chờ đón phần bốc thăm may mắn trúng thưởng cực kỳ kịch tính và trao quà cuối chương trình."
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
            <span className="text-abaOrange">HOẠT ĐỘNG SÂN KHẤU CHÍNH</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            4 Tiết Mục Giáng Sinh Rực Rỡ
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Chương trình được thiết kế dưới dạng đại nhạc hội vui chơi tương tác trực quan trên sân khấu lớn trường học.
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
