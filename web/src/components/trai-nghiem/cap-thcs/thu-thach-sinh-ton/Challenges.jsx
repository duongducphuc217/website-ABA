"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khởi Động Đồng Đội",
      subtitle: "Phá băng khoảng cách cùng MC cuồng nhiệt",
      image: "/assets/images/trai-nghiem/cap-thcs/thu-thach-sinh-ton/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Thử sức tinh thần đồng đội đầu giờ: Khởi động vui nhộn, các trò chơi gắn kết đồng lòng. Truyền nước tiếp sức rèn luyện tinh thần 'Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau' trước khi chia nhóm tham gia xoay vòng hoạt động."
    },
    {
      title: "Trải Nghiệm 1: Kiến Thức Sinh Tồn",
      subtitle: "Chuyên đề nhận diện thiên nhiên và định hướng",
      image: "/assets/images/trai-nghiem/cap-thcs/thu-thach-sinh-ton/challenge_knowledge.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Học sinh tìm hiểu kiến thức và kỹ năng sinh tồn cơ bản: Kiến thức thường thức về cuộc sống (nhận diện các loại rau củ dại ăn được). Thực hành xác định phương hướng bằng cách sử dụng la bàn cơ học, chế tạo la bàn tự chế từ kim nhiễm từ và đọc phương hướng bằng mặt trời, mặt trăng."
    },
    {
      title: "Trải Nghiệm 2: Thử Thách Sinh Tồn",
      subtitle: "Chuyên đề tự lực chế tạo và xử lý tài nguyên",
      image: "/assets/images/trai-nghiem/cap-thcs/thu-thach-sinh-ton/challenge_survival.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Đối mặt trực tiếp với các bài toán sinh tồn cốt lõi: Học cách tạo lửa bằng các dụng cụ dã ngoại chuyên dụng (đá lửa, thanh gỗ xoay) và tự tay nướng chín thực phẩm. Tự thiết kế và chế tạo các ống lọc nước thô sơ nhiều tầng từ cát, sỏi, và than hoạt tính."
    },
    {
      title: "Trải Nghiệm 3: Đội Cứu Hộ Tài Ba",
      subtitle: "Chặng đua teambuilding liên hoàn cứu trợ",
      image: "/assets/images/trai-nghiem/cap-thcs/thu-thach-sinh-ton/challenge_rescue.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Học sinh kết hợp sức mạnh thể chất và tư duy tổ chức trong trò chơi teambuilding mô phỏng cứu hộ: Tổ chức giải cứu đồng đội bị nạn, phối hợp vận chuyển lương thực tiếp tế qua các chướng ngại vật và vượt qua khu vực nhà phao liên hoàn khổng lồ."
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
        
        {/* Section Header matching project standard */}
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-game-controller" />
            </span>
            <span className="text-abaOrange">HOẠT ĐỘNG THỰC TẾ</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            4 Chặng Trải Nghiệm Sinh Tồn
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Quy trình thử thách xoay vòng khoa học giúp mọi học sinh đều được trực tiếp thực hành đầy đủ các bài học kiến thức, kỹ năng cá nhân và teambuilding vận động.
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
          {challengesList.map((ch, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-150 rounded-16 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Banner - Aspect ratio locked, rounded top */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img 
                  src={ch.image} 
                  alt={ch.title} 
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
                
                {/* Visual Accent Corner Label */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block text-xs font-extrabold px-3 py-1.5 rounded-full border shadow-sm bg-white/95 backdrop-blur-sm ${ch.badgeColor}`}>
                    Trải Nghiệm 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Details */}
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
