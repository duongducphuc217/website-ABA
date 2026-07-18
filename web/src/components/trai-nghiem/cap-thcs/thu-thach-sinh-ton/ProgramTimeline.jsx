"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProgramTimeline = () => {
  const [activeTab, setActiveTab] = useState("morning"); // "morning" or "afternoon"

  const morningTimeline = [
    {
      time: "Trước Ngày Hội",
      title: "Công Tác Chuẩn Bị & Phổ Biến",
      icon: "ph-bold ph-chats-teardrop",
      badgeColor: "bg-slate-50 text-slate-650 border-slate-100",
      details: "Các bạn lớp trưởng sẽ họp bàn với Ban tổ chức (BTC) ABA để lắng nghe thông tin triển khai. ABA gửi đến các lớp tài liệu giới thiệu chương trình và một số kỹ năng sinh tồn cơ bản để các bạn học sinh chủ động nghiên cứu trước."
    },
    {
      time: "07:30 – 07:40",
      title: "Tập Trung Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh toàn trường tập hợp và ổn định hàng ngũ lớp học dưới sân trường theo hướng dẫn của giáo viên và điều phối viên ABA."
    },
    {
      time: "07:40 – 08:15",
      title: "Khởi Động Đồng Đội",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "MC hoạt náo tổ chức chuỗi game phá băng vui nhộn: trò chơi 'Đoàn kết là sức mạnh' và game 'Truyền nước' tiếp sức. Cuối giờ khởi động, MC phổ biến quy tắc chơi và chia nhóm luân phiên tham gia 3 cụm hoạt động tiếp theo."
    },
    {
      time: "08:20 – 09:05",
      title: "Trải Nghiệm 1: Kiến Thức Sinh Tồn",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Xoay vòng trạm 1: Học sinh học kiến thức thường thức về cuộc sống (nhận diện các loại rau củ dại ăn được), học kỹ năng định hướng bằng la bàn cơ học, tự chế tạo la bàn từ kim nhiễm từ và đọc hướng dựa theo vị trí mặt trời/mặt trăng."
    },
    {
      time: "09:10 – 09:55",
      title: "Trải Nghiệm 2: Thử Thách Sinh Tồn",
      icon: "ph-bold ph-fire",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Xoay vòng trạm 2: Học sinh thực hành tạo lửa bằng các dụng cụ thô sơ dã ngoại (que xoay gỗ, đá lửa) và tự chế biến, nướng chín đồ ăn. Thực hành lắp đặt ống lọc nước thô dã chiến từ chai nhựa, sỏi, cát và than củi."
    },
    {
      time: "10:00 – 10:45",
      title: "Trải Nghiệm 3: Đội Cứu Hộ Tài Ba",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Xoay vòng trạm 3: Chuỗi teambuilding vận động liên hoàn cứu trợ: Tổ chức sơ cứu và vận chuyển người bị nạn, vận chuyển lương thực tiếp tế vượt chướng ngại vật và leo qua mô hình nhà phao khổng lồ về đích."
    },
    {
      time: "Sau Ngày Hội",
      title: "Bài Thu Hoạch Tổng Kết",
      icon: "ph-bold ph-pencil-line",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Học sinh thực hiện làm bài thu hoạch cá nhân/tập thể trên lớp để hệ thống hóa, củng cố và ghi nhớ sâu toàn bộ kiến thức kỹ năng sinh tồn đã được trải nghiệm thực tế."
    }
  ];

  const afternoonTimeline = [
    {
      time: "Trước Ngày Hội",
      title: "Công Tác Chuẩn Bị & Phổ Biến",
      icon: "ph-bold ph-chats-teardrop",
      badgeColor: "bg-slate-50 text-slate-650 border-slate-100",
      details: "Các bạn lớp trưởng sẽ họp bàn với Ban tổ chức (BTC) ABA để lắng nghe thông tin triển khai. ABA gửi đến các lớp tài liệu giới thiệu chương trình và một số kỹ năng sinh tồn cơ bản để các bạn học sinh chủ động nghiên cứu trước."
    },
    {
      time: "13:30 – 13:40",
      title: "Tập Trung Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh khối chiều tập trung ổn định vị trí, chuẩn bị trang phục thể thao dã ngoại sẵn sàng bắt đầu chương trình."
    },
    {
      time: "13:40 – 14:15",
      title: "Khởi Động Đồng Đội",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "MC hoạt náo tổ chức game warm-up gắn kết: game truyền nước, khởi động và phổ biến luật chơi xoay vòng 3 trạm trải nghiệm chuyên sâu."
    },
    {
      time: "14:20 – 15:05",
      title: "Trải Nghiệm 1: Kiến Thức Sinh Tồn",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Xoay vòng trạm 1: Học sinh nhận diện thực phẩm tự nhiên, học kỹ năng xác định phương hướng bằng la bàn cơ học, mặt trời/mặt trăng và chế tạo la bàn tự chế nhiễm từ."
    },
    {
      time: "15:10 – 15:55",
      title: "Trải Nghiệm 2: Thử Thách Sinh Tồn",
      icon: "ph-bold ph-fire",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Xoay vòng trạm 2: Thực hành tạo lửa (đá lửa, que xoay) nướng thức ăn và thực hành chế tạo bộ lọc nước lọc sạch cặn bẩn từ chai nhựa."
    },
    {
      time: "16:00 – 16:45",
      title: "Trải Nghiệm 3: Đội Cứu Hộ Tài Ba",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Xoay vòng trạm 3: Teambuilding giải cứu đồng đội bị thương, tiếp tế lương thực dã chiến và vượt qua nhà hơi liên hoàn quy mô lớn."
    },
    {
      time: "Sau Ngày Hội",
      title: "Bài Thu Hoạch Tổng Kết",
      icon: "ph-bold ph-pencil-line",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Học sinh thực hiện bài thu hoạch tổng hợp để đúc rút các kiến thức thực hành kỹ năng đã trải nghiệm trong ngày hội."
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
              <span>Buổi Sáng: Ca 1 (7:30 - 10:45)</span>
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
