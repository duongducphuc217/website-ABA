"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "07:45 – 08:00",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp các lớp học sinh trung học cơ sở tại sân trường. Các lớp nhanh chóng lấy ghế ngồi ổn định vị trí tương ứng như giờ chào cờ đầu tuần."
    },
    {
      time: "08:00 – 08:30",
      title: "Sóng Thần Vui Nhộn",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "MC dẫn dắt khai mạc ngày hội nước sôi động. Học sinh toàn trường cùng hòa mình vào game khởi động tập thể: Sóng thần vui nhộn, Đoàn tàu ra khơi phá băng khoảng cách."
    },
    {
      time: "08:30 – 08:40",
      title: "Di Chuyển Trạm Trải Nghiệm",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Các lớp di chuyển theo điều phối của GVCN và điều phối viên ABA đến khu vực các trạm trò chơi nước đã chuẩn bị sẵn."
    },
    {
      time: "08:40 – 10:40",
      title: "Xoay Vòng Các Trạm Trải Nghiệm Nước",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Lần lượt tham gia 9 trạm game nước: Trạm cứu hộ nhí (sơ cứu hô hấp), Dũng sĩ can đảm (nhà phao, vòi rồng), Cầu phao bồng bềnh, Sân bóng bì bõm, Con đường ướt sũng, Người vận chuyển nước, Bowling nước, Giải cứu ngọc rồng, Trận chiến súng nước."
    },
    {
      time: "10:40",
      title: "Bế Mạc & Vệ Sinh Thay Đồ",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC thông báo kết thúc chương trình. Học sinh di chuyển đi vệ sinh cá nhân, thay quần áo khô sạch để chuẩn bị ăn trưa và nghỉ ngơi."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:30 – 13:45",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp đội hình khối chiều dưới sân trường học, điểm danh sĩ số và hướng dẫn an toàn nước cơ bản."
    },
    {
      time: "13:45 – 14:15",
      title: "Sóng Thần Vui Nhộn",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Khai mạc ca chiều. Thực hiện các trò chơi khởi động nước quy mô toàn trường sôi nổi kích hoạt năng lượng."
    },
    {
      time: "14:15 – 14:25",
      title: "Di Chuyển Trạm Trải Nghiệm",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Các lớp di chuyển vào các phân trạm, nhận đạo cụ phao hơi, súng nước dã chiến."
    },
    {
      time: "14:25 – 16:25",
      title: "Xoay Vòng Các Trạm Trải Nghiệm Nước",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Học sinh tham gia chuỗi hoạt động 9 trạm game nước thú vị: Cứu hộ nhí, Nhà phao vượt chướng ngại vật, Cầu phao bập bềnh, Đá bóng phao nước trơn trượt, bowling thảm trượt nước, đấu súng nước."
    },
    {
      time: "16:25",
      title: "Bế Mạc & Vệ Sinh Thay Đồ",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "ABA tổng kết khen thưởng tập thể lớp xuất sắc. MC thông báo bế mạc, hướng dẫn học sinh dọn dẹp vệ sinh cá nhân thay đồ chuẩn bị ra về."
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
              <span>Buổi Sáng: Ca 1 (7:45 - 10:40)</span>
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
              <span>Buổi Chiều: Ca 2 (13:30 - 16:25)</span>
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
