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
      details: "Học sinh tập trung tại vị trí tập kết theo lớp dưới sân trường. Mỗi lớp ngồi theo 2 hàng ghế trước sân khấu chính để ổn định tổ chức và chuẩn bị khai mạc."
    },
    {
      time: "08:00 – 08:30",
      title: "Sức Mạnh Của Mục Tiêu",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Tuyên bố lý do, giới thiệu văn hóa chương trình. Đại diện Ban Giám Hiệu phát biểu khai mạc. Chuyên gia đào tạo ABA thực hiện các thử thách ngắn trực quan để giúp học sinh tự nhận diện tầm quan trọng của việc lập mục tiêu."
    },
    {
      time: "08:30 – 08:35",
      title: "Cuộc Thi Thu Ghế",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Các lớp thi đua thu dọn ghế cá nhân và xếp gọn về cuối sân nhanh nhất để giải phóng không gian, sẵn sàng cho chuỗi trò chơi vận động teambuilding liên hoàn."
    },
    {
      time: "08:35 – 08:50",
      title: "Thách Thức Giới Hạn Trong Bạn",
      icon: "ph-bold ph-smiley-wink",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
      details: "Các trò chơi khởi động tập thể vui nhộn do MC dẫn dắt nhằm đo độ nhiệt huyết của các lớp học sinh: thử thách 'Đồng đội ăn ý' và 'Cơ trưởng vui nhộn'."
    },
    {
      time: "08:50 – 10:00",
      title: "Team Building - Bứt Phá Giới Hạn",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Học sinh toàn khối bước vào cuộc thi teambuilding liên hoàn chinh phục 4 thử thách lớn đầy kịch tính: Đồng tâm hiệp lực, Dòng chảy kết nối, Định vị mục tiêu, Chinh phục đỉnh cao."
    },
    {
      time: "10:00 – 10:15",
      title: "Phát Động Viết Lên Mục Tiêu",
      icon: "ph-bold ph-megaphone",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "MC công bố kết quả thi đua và trao giải thưởng teambuilding. Phát động phong trào, học sinh các lớp nhận phiếu viết mục tiêu năm học mới và di chuyển trở về phòng học lớp mình."
    },
    {
      time: "10:15 – 10:45",
      title: "Thực Hành Thiết Lập Mục Tiêu",
      icon: "ph-bold ph-notebook",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Học sinh thực hành viết mục tiêu tại lớp và nộp lại cho Giáo Viên Chủ Nhiệm (GVCN). Học sinh xem video hướng dẫn về Luật hấp dẫn, công thức thiết lập mục tiêu thông minh (Từ X đến Y + khi nào) và nhận phiếu mục tiêu năm học 2025 - 2026."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:30 – 13:45",
      title: "Tập Trung & Khởi Động Buổi Chiều",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh khối 8-9 tập hợp tại sân trường theo vị trí lớp, ổn định đội hình trước sân khấu chính."
    },
    {
      time: "13:45 – 14:15",
      title: "Sức Mạnh Của Mục Tiêu (Khối 8-9)",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Tuyên bố lý do và chia sẻ văn hóa. Chuyên gia ABA huấn luyện định hướng động lực học tập, xây dựng tâm thế chủ động, sẵn sàng vượt qua các cột mốc thi cử quan trọng cuối cấp."
    },
    {
      time: "14:15 – 14:20",
      title: "Cuộc Thi Thu Ghế Nhanh",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Thi đua dọn dẹp và thu xếp ghế ngồi nhanh, giải phóng không gian sân trường phục vụ hoạt động trải nghiệm."
    },
    {
      time: "14:20 – 14:35",
      title: "Thách Thức Giới Hạn Cùng MC",
      icon: "ph-bold ph-smiley-wink",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
      details: "Các trò chơi khởi động tập thể nâng cao sự gắn kết, khởi động năng lượng chiều nhiệt huyết, đồng lòng cùng MC."
    },
    {
      time: "14:35 – 15:50",
      title: "Team Building Chinh Phục Mục Tiêu",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Học sinh bước vào các thử thách teambuilding vận động cường độ cao nhằm thử thách giới hạn chịu đựng, kỹ năng lãnh đạo và tinh thần làm việc nhóm."
    },
    {
      time: "15:50 – 16:00",
      title: "Phát Động Viết Mục Tiêu Cuối Cấp",
      icon: "ph-bold ph-megaphone",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Tổng kết, công bố kết quả thi đua teambuilding khối chiều. Đại diện học sinh nhận phiếu mục tiêu và di chuyển về lớp học."
    },
    {
      time: "16:00 – 16:30",
      title: "Thực Hành Thiết Lập & Cam Kết Mục Tiêu",
      icon: "ph-bold ph-notebook",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Thực hành thiết lập mục tiêu năm học mới tại lớp học dưới sự hướng dẫn của GVCN và video hướng dẫn của ABA. Học sinh tự tay điền các mục tiêu điểm số, rèn luyện thể chất và nộp lại phiếu cam kết."
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
              <i className="ph-bold ph-book-open" />
            </span>
            <span>LỊCH TRÌNH CHI TIẾT</span>
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
              <span>Buổi Sáng: Khối 6 - 7</span>
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
              <span>Buổi Chiều: Khối 8 - 9</span>
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
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed text-wrap-pretty">
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
