"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "07:15 – 07:30",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập trung học sinh tại vị trí tập kết theo lớp sân trường. Ổn định tổ chức, xếp hàng ngồi ghế chuẩn bị khai mạc chương trình."
    },
    {
      time: "07:30 – 08:00",
      title: "Khai Mạc & Lính Cứu Hỏa Vui Tính",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "MC dẫn dắt khai mạc. Học sinh toàn trường khởi động cùng MC Lính cứu hỏa vui nhộn của ABA, chơi game lớn chuyền bóng yoga."
    },
    {
      time: "08:00 – 08:30",
      title: "Chuyên Đề: Kỹ Năng Thoát Hiểm Cơ Bản",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Cảnh sát PCCC chuyên nghiệp hướng dẫn các kỹ năng thoát hiểm cơ bản: quan sát lối thoát nạn, cách mở cửa phòng đang cháy, di chuyển tránh khói độc, cách hỗ trợ cứu người bị nạn."
    },
    {
      time: "08:30 – 08:35",
      title: "Phân Nhóm Di Chuyển",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "MC phổ biến luật chơi xoay vòng trạm thực tế và chia các lớp thành các nhóm di chuyển về các khu vực trải nghiệm."
    },
    {
      time: "08:40 – 09:10",
      title: "Trạm 1: Thoát Hiểm Phòng Tối Có Khói",
      icon: "ph-bold ph-mask-happy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Thực hành kỹ thuật che mũi miệng chống ngạt, cúi khom người rờ tường men theo lối thoát nạn trong phòng giả định nhiều vật cản ngập khói."
    },
    {
      time: "09:15 – 09:45",
      title: "Trạm 2: Thoát Hiểm Khỏi Tầng Cao",
      icon: "ph-bold ph-ladder",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
      details: "Từng học sinh học cách đeo đai cứu hộ đúng kỹ thuật và thực hành đu dây hạ chậm từ tầng 2 xuống tầng 1 an toàn dưới sự kiểm soát của HLV."
    },
    {
      time: "09:50 – 10:20",
      title: "Trạm 3: Tiêu Lệnh Chữa Cháy",
      icon: "ph-bold ph-fire-extinguisher",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Học sinh thi đấu teambuilding: vượt chướng ngại vật tiếp cận đám cháy, báo động, sử dụng bình cứu hỏa dập lửa khay xăng và gọi 114."
    },
    {
      time: "10:25 – 10:55",
      title: "Trạm 4: Sơ Cấp Cứu Vết Thương & Bế Mạc",
      icon: "ph-bold ph-first-aid-kit",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Thực hành sơ cấp cứu: HLV hướng dẫn mẫu. Học sinh chia cặp thực hành 2 kỹ thuật băng bó cơ bản: băng bàn tay và băng cánh tay."
    },
    {
      time: "11:00",
      title: "Kết Thúc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC tổng kết, công bố điểm thi đua các trạm của các lớp, trao giải thưởng lưu niệm và bế mạc ngày hội."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:30 – 13:45",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh tập trung ổn định theo lớp tại sân trường, sẵn sàng tinh thần cho ca huấn luyện chiều."
    },
    {
      time: "13:45 – 14:15",
      title: "Khai Mạc & Lính Cứu Hỏa Vui Tính",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "MC lính cứu hỏa ABA tổ chức các trò chơi hoạt náo và warm-up bóng yoga kết nối toàn trường."
    },
    {
      time: "14:15 – 14:45",
      title: "Chuyên Đề: Kỹ Năng Thoát Hiểm Cơ Bản",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Diễn tập mẫu và hướng dẫn các thao tác mở cửa, đi khom, thoát hiểm hành lang có khói độc."
    },
    {
      time: "14:45 – 14:50",
      title: "Phân Nhóm Di Chuyển",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Các lớp di chuyển vào các trạm huấn luyện thực tế xoay vòng."
    },
    {
      time: "14:55 – 15:25",
      title: "Trạm 1: Thoát Hiểm Phòng Tối Có Khói",
      icon: "ph-bold ph-mask-happy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Cúi khom người men theo tường thoát nạn trong phòng tối có khói giả định."
    },
    {
      time: "15:30 – 16:00",
      title: "Trạm 2: Thoát Hiểm Khỏi Tầng Cao",
      icon: "ph-bold ph-ladder",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
      details: "Thực hành thắt đai cứu nạn và đu dây hạ chậm từ tầng cao xuống đất an toàn dưới sự hỗ trợ của điều phối viên."
    },
    {
      time: "16:05 – 16:35",
      title: "Trạm 3: Tiêu Lệnh Chữa Cháy",
      icon: "ph-bold ph-fire-extinguisher",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Thi đấu dập lửa bằng bình chữa cháy xách tay và vượt chướng ngại vật PCCC."
    },
    {
      time: "16:40 – 17:10",
      title: "Trạm 4: Sơ Cấp Cứu Vết Thương & Bế Mạc",
      icon: "ph-bold ph-first-aid-kit",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Học sinh thực hành băng bó bàn tay, cánh tay theo cặp. Tổng kết trao thưởng ngày hội."
    },
    {
      time: "17:15",
      title: "Kết Thúc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC dọn dẹp sân bãi, bàn giao học sinh cho giáo viên chủ nhiệm hướng dẫn các con ra về."
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
              <span>Buổi Chiều: Ca 2 (13:30 - 17:15)</span>
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
