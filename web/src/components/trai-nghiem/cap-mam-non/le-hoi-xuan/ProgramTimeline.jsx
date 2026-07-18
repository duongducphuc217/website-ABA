"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "08:00 – 08:15",
      title: "Tập Trung Học Sinh Mầm Non",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Chào đón bé và phụ huynh tại cổng trường, chụp ảnh check-in sân khấu Tết. Các lớp ngồi ghế xếp hàng ổn định dưới sân trường."
    },
    {
      time: "08:15 – 09:00",
      title: "Khai Mạc Lễ Hội Xuân",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Biểu diễn văn nghệ mở màn. Tiết mục múa lân sư rồng khai mạc rộn rã. MC tuyên bố lý do giới thiệu đại biểu, BGH phát biểu chúc Tết. Xem biểu diễn xiếc hề ảo thuật."
    },
    {
      time: "09:10 – 11:00",
      title: "Trải Nghiệm Văn Hóa Dân Gian",
      icon: "ph-bold ph-palette",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Bé chia thành các nhóm nhỏ xoay vòng trải nghiệm: Nhóm 1 nặn tò he; Nhóm 2 in tranh Đông Hồ; Nhóm 3 chơi trò chơi dân gian hoặc làm bánh giầy xôi in tranh."
    },
    {
      time: "11:00",
      title: "Ăn Trưa Bán Trú & Nghỉ Trưa",
      icon: "ph-bold ph-house-line",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Bé thu dọn dụng cụ cùng cô giáo, di chuyển về lớp nghỉ ngơi, dùng bữa trưa bán trú hồi phục thể lực chuẩn bị cho hội chợ ca chiều."
    }
  ];

  const afternoonTimeline = [
    {
      time: "14:00",
      title: "Tập Trung Ca Chiều",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Các lớp mầm non tập hợp ổn định vị trí, chuẩn bị sẵn sàng mở hội chợ xuân."
    },
    {
      time: "14:00 – 16:00",
      title: "Hội Chợ Xuân – Kết Nối Những Yêu Thương",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Mở cửa các gian hàng tết quê do cô giáo bày bán (mua sắm đồ ăn, đồ chơi). Vui chơi các gian trò chơi dân gian & trúng thưởng (ném vòng, bịt mắt đánh trống, nhảy lò cò, nhảy bao bố, nỏ thần liên châu, gieo lộc quay số, bắt ngựa ném vòng, ném bóng rổ, lâu đài hơi)."
    },
    {
      time: "16:00",
      title: "Kết Thúc Chương Trình Lễ Hội Xuân",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC gửi lời kính chúc thầy cô, phụ huynh và toàn thể học sinh một năm mới an khang thịnh vượng, vạn sự như ý. Bế mạc chương trình."
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
            Khung Thời Gian Lễ Hội Xuân
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA điều hành chuyên nghiệp từ 8h00 đến 16h00, đảm bảo tiến độ an toàn, vui tươi cho các bé mầm non.
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
              <span>Buổi Sáng: Khai Mạc & Văn Hóa (8:00 - 11:00)</span>
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
              <span>Buổi Chiều: Hội Chợ & Trò Chơi (14:00 - 16:00)</span>
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
