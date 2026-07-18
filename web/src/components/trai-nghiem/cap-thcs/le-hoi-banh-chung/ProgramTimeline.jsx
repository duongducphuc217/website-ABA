"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "07:15 – 07:30",
      title: "Chào Đón Học Sinh & Tập Trung",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Đón học sinh, phụ huynh và giáo viên vào sân trường. Chụp hình lưu niệm tại khu vực check-in sân khấu ngày Tết. Tập trung ổn định vị trí theo lớp."
    },
    {
      time: "07:30 – 08:00",
      title: "Khai Mạc Lễ Hội: Mùa Xuân Chiến Thắng",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Văn nghệ mở màn. MC tuyên bố lý do giới thiệu đại biểu, đại diện BGH nhà trường phát biểu chúc Tết. Thưởng thức biểu diễn trống hội lân sư rồng náo nhiệt."
    },
    {
      time: "08:00 – 09:15",
      title: "Gói Bánh Chưng - Gói Trọn Yêu Thương",
      icon: "ph-bold ph-package",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Nghệ nhân hướng dẫn gói bánh trên sân khấu chính. ABA bố trí nhân sự về các lớp cùng GVCN hướng dẫn các em học sinh tự tay gói hoàn thiện chiếc bánh chưng xanh."
    },
    {
      time: "09:15 – 11:00",
      title: "Hội Chợ Tết & Lễ Hội Trò Chơi Ngày Xuân",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Mở cửa các gian hàng chợ quê bày bán sản phẩm Tết của các lớp. Đồng thời tổ chức Hội thi Xuân Đất Việt (Sumo, Rung chuông vàng) và các khu trò chơi trúng thưởng viết thư pháp, gắp gấu."
    },
    {
      time: "11:00",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC gửi lời chúc Tết an khang, thịnh vượng, vạn sự như ý tới thầy cô và học sinh. Trao giải thưởng thi đua và bế mạc chương trình."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:00 – 13:30",
      title: "Chào Đón Học Sinh & Tập Trung",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp đội hình các lớp ca chiều ổn định vị trí, check-in lưu dấu ấn xuân."
    },
    {
      time: "13:30 – 14:00",
      title: "Khai Mạc Lễ Hội Bánh Chưng",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Khai mạc ca chiều cùng trống hội rộn ràng, lời phát biểu mừng xuân của đại diện nhà trường."
    },
    {
      time: "14:00 – 15:15",
      title: "Gói Bánh Chưng - Gói Trọn Yêu Thương",
      icon: "ph-bold ph-package",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Học sinh tự tay chuẩn bị nguyên liệu lạt tre, lá dong nếp, nhân đỗ thịt gói hoàn thiện chiếc bánh chưng xuân."
    },
    {
      time: "15:15 – 17:00",
      title: "Hội Chợ Tết & Lễ Hội Trò Chơi Ngày Xuân",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Tham gia hội chợ Tết trao gửi yêu thương, trải nghiệm viết thư pháp ông đồ, in tranh Đông Hồ và đấu Sumo hơi."
    },
    {
      time: "17:00",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "ABA trao thưởng lớp gói bánh chưng đẹp nhất, dọn dẹp vệ sinh khuôn viên trường học và bế mạc ca chiều."
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
              <span>Buổi Sáng: Ca 1 (7:15 - 11:00)</span>
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
              <span>Buổi Chiều: Ca 2 (13:00 - 17:00)</span>
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
