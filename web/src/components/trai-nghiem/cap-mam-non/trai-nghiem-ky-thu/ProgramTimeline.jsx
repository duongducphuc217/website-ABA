"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "08:00 – 08:30",
      title: "Tập Trung Học Sinh Mầm Non",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập trung các bé theo đơn vị lớp dưới sân trường. Cô giáo chủ nhiệm và các điều phối viên ABA hướng dẫn bé ổn định vị trí ngồi ghế."
    },
    {
      time: "08:30 – 09:00",
      title: "Khai Mạc & Khởi Động Sân Khấu",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "MC hoạt náo khởi động sân khấu cùng các trò chơi tập thể lớn vui nhộn gắn kết tinh thần đoàn kết đồng đội bước đầu."
    },
    {
      time: "09:00 – 10:30",
      title: "Trải Nghiệm 1: Vận Động Vui Nhộn Ngoài Trời",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Bé luân phiên trải nghiệm các trò chơi vận động: Vượt chướng ngại vật nhà phao liên hoàn hơi, đua xe đạp chòi chân, đua hươu raindee hơi, nhảy bao bố, ném bóng rổ và thu hoạch nông sản."
    },
    {
      time: "10:30 – 14:00",
      title: "Ăn Trưa Bán Trú & Nghỉ Trưa",
      icon: "ph-bold ph-house-line",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Học sinh di chuyển về lớp ăn trưa bán trú bổ sung năng lượng, nghỉ ngơi tĩnh dưỡng chuẩn bị cho ca chiều trải nghiệm nghệ thuật."
    }
  ];

  const afternoonTimeline = [
    {
      time: "14:00 – 14:15",
      title: "Tập Trung Đầu Giờ Chiều",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh thức dậy ổn định tổ chức lớp học, rửa mặt chuẩn bị sẵn sàng tiếp tục các hoạt động khám phá."
    },
    {
      time: "14:15 – 16:00",
      title: "Trải Nghiệm 2: Sáng Tạo Nghệ Thuật & Khoa Học",
      icon: "ph-bold ph-palette",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Xoay vòng trải nghiệm: In tranh Đông Hồ, vẽ tranh bằng ngón tay, in tranh bong bóng xà phòng, làm gà bông, kể chuyện rối bóng. Khám phá khoa học làm kèn từ ống hút và phóng tên lửa ống hút."
    },
    {
      time: "16:00",
      title: "Bế Mạc Ngày Hội Trải Nghiệm Kỳ Thú",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC gửi lời chào tạm biệt các bé, dọn dẹp vệ sinh khuôn viên lớp học sạch sẽ. Các bé chụp ảnh tập thể lưu niệm và bế mạc."
    }
  ];

  const currentTimeline = activeTab === "morning" ? morningTimeline : afternoonTimeline;

  return (
    <section className="py-120 bg-white relative overflow-hidden font-sans" id="lich-trinh">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-calendar-blank" />
            </span>
            <span className="text-abaBlue">LỊCH TRÌNH CHI TIẾT</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            Khung Thời Gian Ngày Hội (Cả Ngày)
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA điều hành chặt chẽ khoa học, kết hợp nghỉ trưa bán trú giúp các bé mầm non luôn tràn đầy sinh lực.
          </p>
        </div>

        {/* Tab Buttons */}
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
              <span>Buổi Sáng: Vui Chơi Thể Chất (8:00 - 10:30)</span>
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
              <span>Buổi Chiều: Nghệ Thuật & Khoa Học (14:00 - 16:00)</span>
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-36 pl-8 md:pl-12 space-y-12">
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
                  <div className="absolute -left-[41px] md:-left-[53px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 group-hover:border-abaBlue group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-abaBlue shadow-sm transition-all duration-350 z-10">
                    <i className={`${item.icon} text-sm md:text-base`} />
                  </div>

                  <div className="hidden md:block absolute -left-48 top-2 text-right w-36">
                    <span className="font-extrabold text-slate-900 text-sm md:text-base tracking-tight">
                      {item.time}
                    </span>
                  </div>

                  <div className="bg-slate-50 border border-slate-150 rounded-16 p-[20px] hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300">
                    <div className="md:hidden mb-3">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.time}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-slate-850 mb-3 font-heading group-hover:text-abaBlue transition-colors">
                      {item.title}
                    </h4>

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
