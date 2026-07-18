"use client";

import { motion } from "framer-motion";

const CoreObjectives = ({ data }) => {
  const defaultObjectivesData = [
    {
      title: "Kỹ Năng (40%)",
      icon: "ph-bold ph-star",
      colorClass: "text-amber-500 bg-amber-50 border-amber-200",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      accentBorder: "hover:border-amber-400/50",
      points: [
        "Kỹ năng giao tiếp và hợp tác nhóm, lắng nghe tích cực và giải quyết vấn đề.",
        "Kỹ năng đọc nhanh và ghi nhớ thông tin cốt lõi của truyện ngắn.",
        "Kỹ năng mỹ thuật: thiết kế vẽ bìa sách, sáng tác thơ ca, viết cảm nhận."
      ],
      description: "Thúc đẩy các kỹ năng mềm quan trọng thông qua chuỗi trò chơi vận động tương tác mô phỏng."
    },
    {
      title: "Kiến Thức (30%)",
      icon: "ph-bold ph-book-open",
      colorClass: "text-abaBlue bg-blue-50 border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
      accentBorder: "hover:border-abaBlue/50",
      points: [
        "Hiểu sâu sắc lợi ích thiết thực của việc đọc sách hàng ngày đối với học sinh.",
        "Biết phương pháp đọc sách khoa học để ghi nhớ thông tin nhanh chóng.",
        "Mở rộng hiểu biết về các tựa sách hay, ý nghĩa dành riêng cho tuổi thơ."
      ],
      description: "Hệ thống hóa phương pháp học tập chủ động và kích hoạt văn hóa tự học suốt đời cho học sinh."
    },
    {
      title: "Thư Giãn (30%)",
      icon: "ph-bold ph-smiley",
      colorClass: "text-abaOrange bg-orange-50 border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-600",
      accentBorder: "hover:border-abaOrange/50",
      points: [
        "Hòa mình vào vở kịch sân khấu hóa 'Cóc kiện trời' vui tươi dí dỏm.",
        "Vui chơi cùng các trò chơi trải nghiệm mới lạ, đạo cụ phao hơi khổng lồ.",
        "Hoạt động Teambuilding vận động sôi động gắn kết tập thể lớp."
      ],
      description: "Tạo dựng những khoảnh khắc hạnh phúc, rạng rỡ và giải tỏa căng thẳng sau giờ học cho học sinh."
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
            <span className="text-abaBlue">GIÁ TRỊ NHẬN ĐƯỢC</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Phát Triển Tư Duy & Thể Chất
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Ngày hội giúp học sinh Tiểu học rèn luyện tư duy đọc sách thông minh và tăng cường sự linh hoạt qua các hoạt động tương tác thực địa.
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
