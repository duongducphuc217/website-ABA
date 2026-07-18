"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "07:00 – 07:30",
      title: "Đón Học Sinh & Khởi Động Nhạc",
      icon: "ph-bold ph-music-notes",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Bật nhạc rộn ràng truyền cảm hứng, chào đón các bạn học sinh đến với sân trường, ổn định tổ chức và sắp xếp vị trí tập hợp theo từng lớp."
    },
    {
      time: "07:30 – 07:45",
      title: "Khai Mạc & Sức Mạnh Của Team Work",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Chuyên gia đào tạo của ABA xuất hiện và dẫn dắt các thử thách ngắn rút ra bài học trực quan ban đầu. Giúp học sinh toàn trường hiểu rõ về vai trò quan trọng của kỹ năng làm việc nhóm."
    },
    {
      time: "07:45 – 08:15",
      title: "Trải Nghiệm 1: Sức MẠNH HỢP LỰC (Phần 1)",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Các lớp thi đấu đối kháng trực tiếp trong các thử thách tập thể quy mô lớn: Thử thách chuyền bóng Yoga (phương pháp tối ưu hiệu suất) và Thử thách lối mòn (quy tụ sức mạnh tập thể)."
    },
    {
      time: "08:15 – 09:00",
      title: "Trải Nghiệm 1: Tinh Thần Hợp Lực (Phần 2)",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Khởi động tập thể cùng MC qua game 'Thuyền trưởng đến' và bước vào team thi đấu liên hoàn: Con đường gian nan (phao sâu hơi), Chung một mục tiêu (rùa thỏ hơi), Ngọn tháp đồng đội. Đúc kết bài học về sự phối hợp nhịp nhàng theo hiệu lệnh."
    },
    {
      time: "09:00 – 09:10",
      title: "Di Chuyển Đổi Vị Trí",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
      details: "Học sinh các khối di chuyển đổi vị trí trải nghiệm theo hướng dẫn của MC và điều phối viên để chuẩn bị vào phòng học lớp mình."
    },
    {
      time: "09:10 – 09:55",
      title: "Trải Nghiệm 2: Hợp Tác & Sẻ Chia",
      icon: "ph-bold ph-notebook",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Học tập trong lớp học (quy mô 40 - 50 hs, chia nhóm 6-8 hs). Khám phá lý thuyết làm việc nhóm (10 phút), thực hành phương pháp thông tin truyền thông điệp (20 phút) và thực hành tôn trọng, lắng nghe đồng đội giải quyết mâu thuẫn (20 phút)."
    },
    {
      time: "09:55 – 10:05",
      title: "Di Chuyển Đổi Vị Trí",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
      details: "Học sinh di chuyển tập trung ra khu vực sân cỏ hoặc nhà thi đấu đa năng để bước vào chặng cuối cùng."
    },
    {
      time: "10:05 – 10:50",
      title: "Trải Nghiệm 3: Đồng Đội Ăn Ý",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Mỗi lớp chia thành 4 tổ vượt qua các thử thách chiến thuật đỉnh cao: Kế hoạch tuyệt hảo (vai trò của người đội trưởng), Con đường đồng đội (chuyền bóng qua bạt lỗ), Mọi người vì 1 người (thả bóng vào tâm vòng tròn)."
    },
    {
      time: "10:50",
      title: "Bế Mạc & Tổng Kết Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC thông báo kết quả chung cuộc, trao các chứng nhận tập thể xuất sắc và chia sẻ thông điệp bế mạc ngày hội ý nghĩa."
    }
  ];

  const afternoonTimeline = [
    {
      time: "13:30 – 14:00",
      title: "Đón Học Sinh & Khởi Động Nhạc",
      icon: "ph-bold ph-music-notes",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Bật nhạc truyền cảm hứng nhiệt huyết, đón học sinh khối chiều tập trung ổn định vị trí lớp học dưới sân trường."
    },
    {
      time: "14:00 – 14:15",
      title: "Khai Mạc & Sức Mạnh Của Team Work",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Chuyên gia ABA chia sẻ về sự quan trọng của làm việc nhóm và đưa ra thử thách trực quan giải quyết tình huống nhanh cho học sinh."
    },
    {
      time: "14:15 – 14:45",
      title: "Trải Nghiệm 1: Sức MẠNH HỢP LỰC (Phần 1)",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Các lớp tranh tài trong thử thách tập thể lớn chuyền bóng Yoga và vượt qua con đường lối mòn gắn kết."
    },
    {
      time: "14:45 – 15:30",
      title: "Trải Nghiệm 1: Tinh Thần Hợp Lực (Phần 2)",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Team thi đấu liên hoàn: vượt qua Con đường gian nan bằng sâu hơi, đập búa hơi trúng mục tiêu và phối hợp leo núi hơi xếp tháp đồng đội."
    },
    {
      time: "15:30 – 15:40",
      title: "Di Chuyển Đổi Vị Trí",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
      details: "Học sinh di chuyển vào các phòng học được phân công để chuẩn bị cho phần học kỹ năng chuyên đề sâu."
    },
    {
      time: "15:40 – 16:25",
      title: "Trải Nghiệm 2: Hợp Tác & Sẻ Chia",
      icon: "ph-bold ph-notebook",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Phân tích bài học kỹ năng giao tiếp và lắng nghe. Các nhóm thực hành bài tập trò chơi thông tin và thảo luận cách tôn trọng ý kiến khác biệt để giải quyết xung đột nhóm."
    },
    {
      time: "16:25 – 16:35",
      title: "Di Chuyển Đổi Vị Trí",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
      details: "Học sinh di chuyển ra sân chơi ngoài trời hoặc nhà đa năng thực hành vòng cuối."
    },
    {
      time: "16:35 – 17:20",
      title: "Trải Nghiệm 3: Đồng Đội Ăn Ý",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Các tổ triển khai chiến thuật trong game Kế hoạch tuyệt hảo, khéo léo bưng bạt chuyền bóng và hoàn thành mục tiêu đưa bóng vào tâm vòng tròn."
    },
    {
      time: "17:20",
      title: "Bế Mạc & Tổng Kết Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Công bố điểm số thi đua toàn đoàn, trao giải thưởng lưu niệm và chụp ảnh kỷ niệm kết thúc ngày hội đầy năng lượng."
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
              <span>Buổi Sáng: Ca 1 (7:00 - 10:50)</span>
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
              <span>Buổi Chiều: Ca 2 (13:30 - 17:20)</span>
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
