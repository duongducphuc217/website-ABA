"use client";

import { motion } from "framer-motion";

const TeamBuildingGallery = () => {
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

  const challenges = [
    {
      title: "Thử thách 1: Đồng Tâm Hiệp Lực",
      subtitle: "Chuyền bóng Yoga khổng lồ",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-len-muc-tieu/challenge_ball.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Mỗi lớp được cung cấp 1 quả bóng yoga cỡ lớn. Cả tập thể cần phối hợp ăn ý để chuyền bóng thật nhanh từ đầu hàng đến cuối hàng bằng tay mà không để bóng rơi xuống đất. Lớp chuyền được nhiều lượt nhất trong thời gian quy định sẽ là lớp chiến thắng."
    },
    {
      title: "Thử thách 2: Dòng Chảy Kết Nối",
      subtitle: "Ghép máng chuyền tài nguyên",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-len-muc-tieu/challenge_pipes.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Mỗi đội được trang bị 1 bộ máng chuyền. Cả lớp cần tập trung cao độ, lắp ghép các máng nhựa thành một con đường liền mạch để vận chuyển tài nguyên liên tục từ vạch xuất phát về điểm tập kết cuối hàng mà không làm đứt quãng dòng chảy."
    },
    {
      title: "Thử thách 3: Định Vị Mục Tiêu",
      subtitle: "Cưỡi sâu khổng lồ & Đập búa hơi",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-len-muc-tieu/challenge_worm.png",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
      description: "Nhóm 6 thành viên cùng cưỡi trên chú sâu phao hơi dài 3m, phối hợp bước đi đồng điệu để di chuyển nhanh mang theo bóng. Khi đến vạch giới hạn, người cưỡi sâu ném bóng về phía đồng đội cầm búa hơi tại vạch đích để đập trúng bóng trước khi chạm đất."
    },
    {
      title: "Thử thách 4: Chinh Phục Đỉnh Cao",
      subtitle: "Vượt núi hơi & Xếp tháp đồng đội",
      image: "/assets/images/trai-nghiem/cap-thcs/viet-len-muc-tieu/challenge_climbing.png",
      badgeColor: "bg-emerald-50 text-emerald-650 border-emerald-200",
      description: "Các thành viên lần lượt leo qua chướng ngại vật núi hơi khổng lồ đầy thách thức để mang về những mảnh ghép. Cả đội sau đó sẽ hợp sức, nâng đỡ và xếp các mảnh ghép nối tiếp nhau chồng cao nhất có thể từ mặt đất tới đỉnh tháp."
    }
  ];

  return (
    <section className="py-120 bg-slate-50 relative overflow-hidden font-sans" id="thu-thach">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header matching project standard */}
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-book-open" />
            </span>
            <span>HOẠT ĐỘNG THỰC TẾ</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            4 Thử Thách Team Building Key
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Các hoạt động vận động liên hoàn được thiết kế bài bản nhằm gắn kết tình đồng đội, đo lòng kiên trì và kích hoạt tư duy lập mục tiêu, chinh phục mục tiêu của học sinh.
          </p>
        </div>

        {/* 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {challenges.map((ch, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-150 rounded-16 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Banner - Aspect ratio locked, rounded top, no hover transforms on image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img 
                  src={ch.image} 
                  alt={ch.subtitle} 
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
                
                {/* Visual Accent Corner Label */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block text-xs font-extrabold px-3 py-1.5 rounded-full border shadow-sm bg-white/95 backdrop-blur-sm ${ch.badgeColor}`}>
                    Thử Thách 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-[20px] flex-1 flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">
                  {ch.subtitle}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-850 mb-4 font-heading">
                  {ch.title}
                </h3>
                
                <p className="text-slate-650 text-sm md:text-base leading-relaxed text-wrap-pretty">
                  {ch.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TeamBuildingGallery;
