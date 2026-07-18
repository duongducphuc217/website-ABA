"use client";

import { motion } from "framer-motion";

const CoreValues = () => {
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

  const valuesData = [
    {
      title: "Phẩm Chất",
      icon: "ph-bold ph-star",
      colorClass: "text-amber-500 bg-amber-50 border-amber-200",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      accentBorder: "hover:border-amber-400/50",
      points: [
        "Suy nghĩ tích cực trong mọi hoàn cảnh",
        "Tự tin vào bản thân và kiên định với ước mơ",
        "Yêu quý, trân trọng bản thân và gia đình"
      ],
      description: "Xây dựng nền tảng thái độ sống tốt, tự chủ và giàu lòng nhân ái để vững vàng bước vào môi trường THCS đầy mới mẻ."
    },
    {
      title: "Năng Lực Chung",
      icon: "ph-bold ph-handshake",
      colorClass: "text-abaBlue bg-blue-50 border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
      accentBorder: "hover:border-abaBlue/50",
      points: [
        "Giao tiếp hiệu quả và cởi mở",
        "Hợp tác chặt chẽ khi thực hiện nhiệm vụ",
        "Nhận diện chính xác điểm mạnh và điểm yếu"
      ],
      description: "Rèn luyện các kỹ năng xã hội thiết yếu giúp học sinh dễ dàng hòa nhập và làm chủ các thử thách học đường tập thể."
    },
    {
      title: "Năng Lực Đặc Thù",
      icon: "ph-bold ph-target",
      colorClass: "text-abaOrange bg-orange-50 border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-600",
      accentBorder: "hover:border-abaOrange/50",
      points: [
        "Kỹ năng làm việc nhóm xuất sắc",
        "Rèn luyện thể lực và kỹ năng vận động",
        "Hình thành thói quen thiết lập mục tiêu"
      ],
      description: "Thực hành thói quen ghi chú mục tiêu, lập kế hoạch hành động và kiên trì rèn luyện sức khỏe, kỷ luật bản thân."
    }
  ];

  return (
    <section className="py-120 bg-slate-50 relative overflow-hidden font-sans" id="gia-tri">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header matching project standard */}
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-book-open" />
            </span>
            <span>MỤC TIÊU & Ý NGHĨA</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Giá Trị Thực Tiễn Của Chương Trình
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Thực hiện khung giáo dục trải nghiệm giúp phát triển toàn diện nhân cách, thể lực và năng lực chuyên biệt cho học sinh sẵn sàng bước vào năm học mới.
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
          {valuesData.map((val, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group flex flex-col bg-white border border-slate-150 rounded-16 p-[20px] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden ${val.accentBorder}`}
            >
              {/* Colored Card Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-abaBlue to-abaOrange" />

              {/* Icon / Counter */}
              <div className="mb-6 flex items-center justify-between">
                <div className={`w-14 h-14 rounded-16 flex items-center justify-center text-white shadow-sm ${val.iconBg}`}>
                  <i className={`${val.icon} text-2xl`} />
                </div>
                <span className="text-4xl font-extrabold text-slate-100 select-none">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-850 mb-3 font-heading group-hover:text-abaBlue transition-colors">
                {val.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {val.description}
              </p>

              {/* Separator */}
              <div className="w-full h-px bg-slate-100 mb-6" />

              {/* Points */}
              <ul className="space-y-4 mt-auto p-0 list-none">
                {val.points.map((pt, pIdx) => (
                  <li key={pIdx} className="list-none p-0 m-0">
                    <div className="d-flex align-items-start gap-[12px]">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${val.colorClass}`}>
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

export default CoreValues;
