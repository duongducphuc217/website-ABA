"use client";

import { motion } from "framer-motion";

const Challenges = ({ data }) => {
  const defaultChallenges = [
    {
      title: "Khai Mạc Lễ Hội & Xiếc Hài Nghệ Thuật",
      subtitle: "Múa lân khai mạc & Biểu diễn xiếc chuyên nghiệp",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-xuan/challenge_opening.png",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-200",
      description: "Tiết mục văn nghệ mở màn tự tin. Trống hội rộn ràng, múa lân sư rồng sôi động. MC chúc Tết mừng xuân và biểu diễn xiếc nghệ thuật, ảo thuật hấp dẫn lôi cuốn các bé."
    },
    {
      title: "Trải Nghiệm Văn Hóa Dân Gian Độc Đáo",
      subtitle: "Bé tự tay nặn tò he, in tranh Đông Hồ & làm xôi",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-xuan/challenge_history.png",
      badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
      description: "Bé chia nhóm xoay vòng trải nghiệm thực tế cùng nghệ nhân dân gian: tự tay nặn những chú tò he đất sét nhiều hình thù, in những bức tranh Đông Hồ đầy màu sắc và thực hành làm xôi Đông Hồ xôm tụ."
    },
    {
      title: "Hội Chợ Xuân: Kết Nối Những Yêu Thương",
      subtitle: "Tại sân trường - Mở cửa các gian hàng tết quê",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-xuan/challenge_sports.png",
      badgeColor: "bg-emerald-50 text-abaGreen border-emerald-200",
      description: "Bé dạo bước quanh các quầy hàng trang trí rực rỡ do các cô giáo bày bán. Khám phá ẩm thực ngày xuân và tham gia các trò chơi dân gian ném vòng, nhảy lò cò, bịt mắt đánh trống."
    },
    {
      title: "Trò Chơi Trúng Thưởng Vận Động Hơi",
      subtitle: "Nỏ thần liên châu, ném bao, nhà hơi & lâu đài hơi",
      image: "/assets/images/trai-nghiem/cap-mam-non/le-hoi-xuan/challenge_booths.png",
      badgeColor: "bg-purple-50 text-purple-650 border-purple-200",
      description: "Thỏa sức vận động thể chất dẻo dai tại các cụm game trúng thưởng: Bắn pháo nỏ thần liên châu, gieo lộc quay số, bắt ngựa ném vòng, tiêu diệt quái vật ném bao, ném bóng rổ và chinh phục lâu đài hơi."
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
            <span className="text-abaOrange">TRẠM TRẢI NGHIỆM CHÍNH</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Các Chặng Vui Tết Cổ Truyền
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Thiết lập khoa học đan xen giữa các trạm tĩnh cảm thụ văn hóa dân gian và trạm động giải phóng thể lực nhà hơi liên hoàn.
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
