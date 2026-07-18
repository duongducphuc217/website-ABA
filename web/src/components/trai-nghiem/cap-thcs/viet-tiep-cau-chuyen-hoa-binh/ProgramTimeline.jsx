"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "07:45 – 08:00",
      title: "Tập Trung Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh tập trung ổn định tại vị trí chỉ định theo lớp trước sân khấu chính, ổn định tổ chức chuẩn bị khai mạc chương trình."
    },
    {
      time: "08:00 – 08:15",
      title: "Khai Mạc & Khởi Động Vệ Quốc Quân",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Tuyên bố lý do, khai mạc. MC trong trang phục vệ quốc quân hướng dẫn khởi động tập thể vui nhộn nâng cao tinh thần sẵn sàng vượt thử thách."
    },
    {
      time: "08:15 – 08:20",
      title: "Bản Hùng Ca Bất Hủ",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Chuyên gia ABA giới thiệu tóm tắt lịch sử Quân đội Nhân dân Việt Nam anh hùng, khơi gợi cảm xúc tự hào dân tộc."
    },
    {
      time: "08:20 – 09:00",
      title: "Thử Thách: Tuyên Ngôn Độc Lập",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Các lớp thi đấu cưỡi phao sâu hơi vượt rào thu thập mảnh ghép hoàn thiện bức tranh về các sự kiện lịch sử trọng đại."
    },
    {
      time: "09:05 – 09:30",
      title: "Đấu Trường Trí Tuệ: Bản Lĩnh Việt Nam",
      icon: "ph-bold ph-brain",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Thi trắc nghiệm lịch sử Hà Nội qua hai cuộc kháng chiến chống Pháp, Mỹ. Lớp thảo luận và giơ bảng đáp án tranh điểm số tích lũy."
    },
    {
      time: "09:35 – 10:00",
      title: "Thử Thách: Sống Mãi Với Thủ Đô",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Tái hiện cuộc chiến bảo vệ Hà Nội 1946 - 1947 của Trung đoàn Thủ đô. Học sinh phối hợp đắp chiến lũy cát phòng thủ và chụp hình check-in."
    },
    {
      time: "10:05 – 10:30",
      title: "Thử Thách: Điện Biên Phủ Trên Không",
      icon: "ph-bold ph-paper-plane-launch",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Khám phá chiến thắng vẻ vang đập tan B-52 Mỹ. Học sinh thực hành chế tạo và bắn tên lửa phao/nước tiêu diệt mục tiêu mô phỏng máy bay."
    },
    {
      time: "10:35 – 11:00",
      title: "Thử Thách: Tiến Về Sài Gòn & Bế Mạc",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Chặng đua xe tăng bơm hơi khổng lồ đưa quân về giải phóng Sài Gòn, cắm cờ chiến thắng. MC tổng kết ngày hội, trao giải thưởng và bế mạc."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:30 – 13:45",
      title: "Tập Trung Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Ổn định đội hình khối chiều trước sân khấu chính, kiểm tra sĩ số và giới thiệu ngày hội lịch sử."
    },
    {
      time: "13:45 – 14:00",
      title: "Khai Mạc & Khởi Động Vệ Quốc Quân",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Khai mạc, khởi động tập thể hào hùng cùng MC Vệ quốc quân ABA."
    },
    {
      time: "14:00 – 14:05",
      title: "Bản Hùng Ca Bất Hủ",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "ABA đúc kết truyền thống chiến đấu anh dũng của thế hệ cha anh."
    },
    {
      time: "14:05 – 14:45",
      title: "Thử Thách: Tuyên Ngôn Độc Lập",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Trải nghiệm vượt chướng ngại vật bằng sâu phao hơi mang về các mảnh ghép lịch sử."
    },
    {
      time: "14:50 – 15:15",
      title: "Đấu Trường Trí Tuệ: Bản Lĩnh Việt Nam",
      icon: "ph-bold ph-brain",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Đấu trí sử học chống Pháp và chống Mỹ cứu nước qua game trả lời nhanh giành điểm."
    },
    {
      time: "15:20 – 15:45",
      title: "Thử Thách: Sống Mãi Với Thủ Đô",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Phối hợp đắp chiến lũy cát bảo vệ Hà Nội 1946 - 1947 và cắm cờ phòng tuyến."
    },
    {
      time: "15:50 – 16:15",
      title: "Thử Thách: Điện Biên Phủ Trên Không",
      icon: "ph-bold ph-paper-plane-launch",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Trải nghiệm tự chế và phóng tên lửa nước tiêu diệt B-52, tìm hiểu phản lực."
    },
    {
      time: "16:20 – 16:45",
      title: "Thử Thách: Tiến Về Sài Gòn & Bế Mạc",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Thi đưa xe tăng hơi khổng lồ húc đổ cổng chào về đích giải phóng Sài Gòn. ABA tổng kết trao thưởng và bế mạc ca chiều."
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
              <span>Buổi Sáng: Ca 1 (7:45 - 11:00)</span>
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
              <span>Buổi Chiều: Ca 2 (13:30 - 16:45)</span>
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
