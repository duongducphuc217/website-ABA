"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "07:30 – 07:45",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp học sinh toàn trường dưới sân, lấy ghế nhựa ngồi theo đơn vị lớp tương tự như sơ đồ chào cờ đầu tuần."
    },
    {
      time: "07:45 – 07:55",
      title: "Văn Nghệ Chào Mừng",
      icon: "ph-bold ph-music-notes",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Tiết mục văn nghệ hát múa đặc sắc do đội văn nghệ học sinh nhà trường tập luyện biểu diễn chào mừng Tết Trung Thu."
    },
    {
      time: "07:55 – 08:00",
      title: "Kịch Hoạt Cảnh: Ai Là Chú Cuội?",
      icon: "ph-bold ph-mask-happy",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Hoạt cảnh vui nhộn kết hợp yếu tố công nghệ khi chú Cuội tạo ra Chú Cuội AI mải chơi để xuống trần gian cùng Chị Hằng, tạo không khí hóm hỉnh."
    },
    {
      time: "08:00 – 08:20",
      title: "Khai Mạc & Biểu Diễn Lân Sư Rồng",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "MC tuyên bố khai mạc, đại diện BGH phát biểu chúc mừng Trung Thu. Biểu diễn múa Lân Sư Rồng chuyên nghiệp bùng nổ không khí."
    },
    {
      time: "08:20 – 08:50",
      title: "Trung Thu Diệu Kỳ: Giải Đố & Ảo Thuật",
      icon: "ph-bold ph-magic-wand",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Học sinh tham gia trò chơi giải mã câu đố cùng Cuội - Hằng nhận quà. Chiêm ngưỡng màn trình diễn xiếc ảo thuật hấp dẫn."
    },
    {
      time: "08:50 – 11:30",
      title: "Hội Chợ Trung Thu & Các Cuộc Thi Trải Nghiệm",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Học sinh tham gia hội chợ trò chơi trúng thưởng, lâu đài hơi khổng lồ, in tranh Đông Hồ, nặn tò he, tô tượng. Khối 8,9 thi làm Đèn Ông Sao khổng lồ; Khối 6,7 thi làm Bánh Dẻo."
    },
    {
      time: "11:30",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Chú Cuội tuyên bố kết thúc ngày hội, gửi lời chúc Tết Đoàn viên tới thầy cô, phụ huynh và toàn thể học sinh. Trao giải thưởng và bế mạc."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:30 – 13:45",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp đội hình các lớp ca chiều dưới sân trường ổn định vị trí chuẩn bị bắt đầu ngày hội."
    },
    {
      time: "13:45 – 13:55",
      title: "Văn Nghệ Chào Mừng",
      icon: "ph-bold ph-music-notes",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Màn trình diễn văn nghệ vui tươi khai mạc ca chiều."
    },
    {
      time: "13:55 – 14:00",
      title: "Kịch Hoạt Cảnh: Ai Là Chú Cuội?",
      icon: "ph-bold ph-mask-happy",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Hài kịch Chú Cuội và Chú Cuội AI đầy ắp tiếng cười giáo dục trách nhiệm."
    },
    {
      time: "14:00 – 14:20",
      title: "Khai Mạc & Múa Lân Khai Hội",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Chúc Tết Trung thu ca chiều từ đại diện BGH và thưởng thức múa lân sư rồng sôi động náo nhiệt."
    },
    {
      time: "14:20 – 14:50",
      title: "Trung Thu Diệu Kỳ: Giải Đố & Ảo Thuật",
      icon: "ph-bold ph-magic-wand",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Đố vui trúng thưởng cùng Cuội - Hằng và ảo thuật hấp dẫn làm mãn nhãn học sinh."
    },
    {
      time: "14:50 – 17:30",
      title: "Hội Chợ Trung Thu & Các Cuộc Thi Trải Nghiệm",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Trải nghiệm gian hàng hội chợ trò chơi trúng thưởng, in tranh Đông Hồ, tò he. Khối 8,9 làm đèn ông sao; Khối 6,7 làm bánh dẻo."
    },
    {
      time: "17:30",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Trao giải thưởng cho các lớp xuất sắc, tổng kết dọn dẹp và kết thúc chương trình ca chiều."
    }
  ];

  const currentTimeline = activeTab === "morning" ? morningTimeline : afternoonTimeline;

  return (
    <section className="py-120 bg-white relative overflow-hidden font-sans" id="lich-trinh">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Section Header matching project standard */}
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-calendar-blank" />
            </span>
            <span className="text-abaBlue">LỊCH TRÌNH CHI TIẾT</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Khung Thời Gian Trải Nghiệm
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Chương trình được thiết kế linh hoạt thành hai buổi sáng/chiều phù hợp với lịch sinh hoạt và đặc thù tâm sinh lý của từng khối lớp.
          </p>
        </div>

        {/* Tab Buttons with sliding indicator */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 relative shadow-inner">
            <button
              onClick={() => setActiveTab("morning")}
              className={`relative z-10 px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-colors border-0 outline-none cursor-pointer ${
                activeTab === "morning" ? "text-abaBlue" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {activeTab === "morning" && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span>Buổi Sáng: Ca 1 (7:30 - 11:30)</span>
            </button>
            <button
              onClick={() => setActiveTab("afternoon")}
              className={`relative z-10 px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-colors border-0 outline-none cursor-pointer ${
                activeTab === "afternoon" ? "text-abaBlue" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {activeTab === "afternoon" && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span>Buổi Chiều: Ca 2 (13:30 - 17:30)</span>
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-36 pl-8 md:pl-12 space-y-12">
          {/* Vertical progress line decoration */}
          <div className="absolute top-2 bottom-2 left-0 w-px bg-gradient-to-b from-abaBlue via-abaOrange to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {currentTimeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: idx * 0.04 }}
                  className="relative group mb-12 last:mb-0"
                >
                  {/* Timeline bullet icon */}
                  <div className="absolute -left-[41px] md:-left-[53px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 group-hover:border-abaBlue group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-abaBlue shadow-sm transition-all duration-350 z-10">
                    <i className={`${item.icon} text-sm md:text-base`} />
                  </div>

                  {/* Desktop absolute time label */}
                  <div className="hidden md:block absolute -left-48 top-2 text-right w-36">
                    <span className="font-extrabold text-slate-900 text-sm md:text-base tracking-tight">
                      {item.time}
                    </span>
                  </div>

                  {/* Main content card */}
                  <div className="bg-slate-50 border border-slate-150 rounded-16 p-[20px] hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    {/* Time Badge (Mobile only) */}
                    <div className="md:hidden mb-3">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg md:text-xl font-bold text-slate-850 mb-3 font-heading group-hover:text-abaBlue transition-colors">
                      {item.title}
                    </h4>

                    {/* Details */}
                    <p className="text-slate-650 text-sm md:text-base leading-relaxed text-wrap-pretty mb-0">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProgramTimeline;
