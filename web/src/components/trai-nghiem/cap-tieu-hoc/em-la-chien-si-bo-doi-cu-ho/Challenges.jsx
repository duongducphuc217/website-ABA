"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Nghi Thức Khai Mạc & Khởi Động Quân Ngũ",
      subtitle: "Đọc 10 lời thề danh dự QĐNDVN",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/challenge_launch.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Học sinh tập hợp xếp hàng chào cờ nghiêm trang. Lắng nghe MC tuyên bố lý do và đọc to 10 lời thề danh dự của Quân đội Nhân dân Việt Nam. Khởi động tập thể đội quân đoàn kết vui nhộn."
    },
    {
      title: "Trải Nghiệm: Đặc Công, Quân Y & Công Binh",
      subtitle: "Ngụy trang đặc công, vận chuyển cứu thương & dò mìn",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/challenge_military.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Học sinh học kỹ thuật ngụy trang đặc công lẩn trốn địch. Thực hành vận chuyển đồng đội bằng cáng cứu thương quân y, băng bó vết thương. Trong vai chiến sĩ công binh sử dụng máy dò mìn rà phá trận địa."
    },
    {
      title: "Thử Thách: Phòng Không, Lựu Đạn & Dũng Cảm",
      subtitle: "Bắn tên lửa hơi, ném lựu đạn & vượt chướng ngại vật",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/challenge_skills.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Thực hành phóng tên lửa nước tiêu diệt bia máy bay địch. Tập ném lựu đạn mô phỏng trúng đích. Huấn luyện chiến sĩ dũng cảm vượt rào lưới ngụy trang bò lê và leo núi hơi khổng lồ vượt vật cản."
    },
    {
      title: "Gấp Chăn Màn Nội Vụ & Ngụy Trang Thiện Xạ",
      subtitle: "Rèn luyện nếp sống gọn gàng quân đội & bắn súng hơi laser",
      image: "/assets/images/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho/challenge_defend.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Các chiến sĩ nhí học tập nội vụ gấp chăn màn vuông vức chuẩn quân đội Việt Nam để rèn nếp sống ngăn nắp. Tham gia chặng ngụy trang phương tiện chiến đấu bằng lưới và thử tài bắn súng hơi laser thiện xạ."
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
            9 Thử Thách Chiến Sĩ Nhí
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Học sinh được luân phiên xoay vòng qua 9 trạm game quân ngũ hấp dẫn dưới sự hướng dẫn của sĩ quan điều phối ABA.
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
