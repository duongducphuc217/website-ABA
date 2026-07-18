"use client";

import { motion } from "framer-motion";

const CoreObjectives = ({ data }) => {
  const defaultObjectivesData = [
    {
      title: "Phẩm Chất",
      icon: "ph-bold ph-star",
      colorClass: "text-amber-500 bg-amber-50 border-amber-200",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      accentBorder: "hover:border-amber-400/50",
      points: [
        "Bồi đắp tình yêu quê hương, đất nước từ thuở ấu thơ.",
        "Tôn trọng và yêu quý các biểu trưng thiêng liêng đất nước.",
        "Yêu thương, quan tâm và học cách chăm sóc người thân."
      ],
      description: "Bồi dưỡng nhân cách tốt đẹp, tình yêu gia đình ấm áp và ý thức gìn giữ các giá trị văn hóa ngày tết truyền thống."
    },
    {
      title: "Năng Lực Chung",
      icon: "ph-bold ph-users-three",
      colorClass: "text-abaBlue bg-blue-50 border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
      accentBorder: "hover:border-abaBlue/50",
      points: [
        "Tự làm được các hoạt động thủ công theo sự hướng dẫn.",
        "Tuân thủ luật chơi chung, biết xếp hàng chờ tới lượt.",
        "Kỹ năng hợp tác nhóm nhỏ, giao tiếp tự tin hòa đồng."
      ],
      description: "Hình thành thói quen kỷ luật tập thể cơ bản, khả năng tự lực làm việc đơn giản và kỹ năng xã hội cho trẻ."
    },
    {
      title: "Năng Lực Đặc Thù",
      icon: "ph-bold ph-barbell",
      colorClass: "text-abaOrange bg-orange-50 border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-600",
      accentBorder: "hover:border-abaOrange/50",
      points: [
        "Tìm hiểu các đặc trưng cơ bản của lễ hội Tết cổ truyền Việt.",
        "Trải nghiệm nặn tò he nghệ thuật, in tranh dân gian Đông Hồ.",
        "Tham gia các trò chơi vận động ngày xuân để giành chiến thắng."
      ],
      description: "Nâng cao năng khiếu cảm thụ thẩm mỹ dân gian Việt Nam và rèn luyện thể chất dẻo dai khỏe mạnh qua các trò chơi."
    }
  ];

    const kicker = data?.kicker || "MỤC TIÊU & Ý NGHĨA";
  const heading = data?.heading || "Kết Quả Đạt Được Của Học Sinh";
  const subtitle = data?.subtitle || "Thực hiện các mục tiêu giáo dục năng lực và phẩm chất cho học sinh theo khung chương trình giáo dục trải nghiệm năm 2018.";

    const objectivesData = (data?.items || defaultObjectivesData).map((item, idx) => {
    const match = defaultObjectivesData[idx] || {};
    return {
      title: item.title || match.title,
      icon: item.icon || match.icon || "ph-bold ph-star",
      description: item.description || match.description,
      points: item.points || match.points || [],
      colorClass: match.colorClass || "text-abaBlue bg-blue-50 border-blue-200",
      iconBg: match.iconBg || "bg-gradient-to-br from-blue-400 to-indigo-600",
      accentBorder: match.accentBorder || "hover:border-abaBlue/50"
    };
  });

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
    <section className="py-120 bg-slate-50 relative overflow-hidden font-sans" id="muc-tieu">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-target" />
            </span>
            <span className="text-abaBlue">GIÁ TRỊ CỦA CHƯƠNG TRÌNH</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Phát Triển Năng Lực Học Sinh
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Giúp học sinh mầm non rèn luyện đôi bàn tay khéo léo qua tranh Đông Hồ, nặn tò he và các trò chơi vận động dẻo dai.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {objectivesData.map((obj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group flex flex-col bg-white border border-slate-150 rounded-16 p-[20px] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden ${obj.accentBorder}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-abaBlue to-abaOrange" />

              <div className="mb-6 flex items-center justify-between">
                <div className={`w-14 h-14 rounded-16 flex items-center justify-center text-white shadow-sm ${obj.iconBg}`}>
                  <i className={`${obj.icon} text-2xl`} />
                </div>
                <span className="text-4xl font-extrabold text-slate-100 select-none">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-850 mb-3 font-heading group-hover:text-abaBlue transition-colors">
                {obj.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {obj.description}
              </p>

              <div className="w-full h-px bg-slate-100 mb-6" />

              <ul className="space-y-4 mt-auto p-0 list-none">
                {obj.points.map((pt, pIdx) => (
                  <li key={pIdx} className="list-none p-0 m-0">
                    <div className="d-flex align-items-start gap-[12px]">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${obj.colorClass}`}>
                        <i className="ph-bold ph-check text-[10px]" />
                      </span>
                      <span className="text-slate-700 text-sm font-medium leading-tight">
                        {pt}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreObjectives;
