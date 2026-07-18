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
        "Bồi đắp tình yêu quê hương, đất nước, niềm tự hào về truyền thống Tết cổ truyền.",
        "Yêu thương, quan tâm và chăm sóc người thân trong gia đình thông qua món quà tự làm.",
        "Rèn luyện sự kiên trì khéo léo trong các công việc thủ công."
      ],
      description: "Thúc đẩy lòng biết ơn cội nguồn dân tộc, sự trân trọng những nét đẹp văn hóa ngày Tết sum vầy."
    },
    {
      title: "Năng Lực Chung",
      icon: "ph-bold ph-users-three",
      colorClass: "text-abaBlue bg-blue-50 border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
      accentBorder: "hover:border-abaBlue/50",
      points: [
        "Chủ động thực hiện tốt các đầu việc tự lập theo hướng dẫn của điều phối viên.",
        "Tuân thủ các quy tắc chung của tập thể khi tham gia trò chơi.",
        "Ý thức xếp hàng, nhường nhịn và chờ tới lượt khi tham gia hoạt động hội chợ."
      ],
      description: "Tăng cường năng lực tự quản bản thân, ý thức tổ chức kỷ luật và khả năng hợp tác nhóm chặt chẽ."
    },
    {
      title: "Năng Lực Đặc Thù",
      icon: "ph-bold ph-barbell",
      colorClass: "text-abaOrange bg-orange-50 border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-600",
      accentBorder: "hover:border-abaOrange/50",
      points: [
        "Kỹ năng ẩm thực: Thực hành gói bánh chưng truyền thống bằng lá dong và khuôn gỗ.",
        "Khám phá kiến thức lịch sử, nguồn gốc và ý nghĩa sự tích bánh chưng bánh giày.",
        "Phát triển thể chất, sức dẻo dai thông qua hoạt động kéo co, đấu vật Sumo hơi."
      ],
      description: "Rèn luyện kỹ năng mỹ thuật viết thư pháp ngày Tết, nặn tò he dân gian và kỹ năng thuyết trình bán hàng hội chợ."
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
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header matching project standard */}
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-target" />
            </span>
            <span className="text-abaBlue">MỤC TIÊU & YÊU CẦU ĐẠT ĐƯỢC</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Phát Triển Năng Lực Học Sinh
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Bồi đắp giá trị sống tốt đẹp, phát triển kỹ năng khéo tay gói bánh chưng và thể lực vận động dẻo dai cho học sinh.
          </p>
        </div>

        {/* 3 Columns Grid */}
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
              {/* Colored Card Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-abaBlue to-abaOrange" />

              {/* Icon / Counter */}
              <div className="mb-6 flex items-center justify-between">
                <div className={`w-14 h-14 rounded-16 flex items-center justify-center text-white shadow-sm ${obj.iconBg}`}>
                  <i className={`${obj.icon} text-2xl`} />
                </div>
                <span className="text-4xl font-extrabold text-slate-100 select-none">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-850 mb-3 font-heading group-hover:text-abaBlue transition-colors">
                {obj.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {obj.description}
              </p>

              {/* Separator */}
              <div className="w-full h-px bg-slate-100 mb-6" />

              {/* Points */}
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
