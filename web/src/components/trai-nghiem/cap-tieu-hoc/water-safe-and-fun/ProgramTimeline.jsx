"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "07:45 – 08:00",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp học sinh Tiểu học dưới sân trường theo đơn vị lớp. GVCN hướng dẫn các con lấy ghế ngồi ổn định tại vị trí giờ chào cờ."
    },
    {
      time: "08:00 – 08:30",
      title: "Sóng Thần Vui Nhộn & Khai Mạc",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "MC hoạt náo tổ chức khởi động ngày hội nước: chơi trò sóng thần vui nhộn, trò đoàn tàu ra khơi giúp khuấy động năng lượng học sinh."
    },
    {
      time: "08:30 – 08:40",
      title: "Di Chuyển Phân Chia Trạm",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "ABA chia học sinh thành các đội nhỏ tương ứng với các trạm, điều phối viên hướng dẫn các con di chuyển về vị trí trạm trò chơi."
    },
    {
      time: "08:40 – 10:40",
      title: "Xoay Vòng Trải Nghiệm 8 Trạm Nước",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Học sinh tham gia chuỗi hoạt động xoay vòng: Trạm 1: Biệt đội cứu hộ nhí (hô hấp nhân tạo/kêu cứu); Trạm 2: Cầu phao bồng bềnh; Trạm 3: Ngư dân dũng cảm; Trạm 4: Ma trận nước; Trạm 5: Dũng sĩ can đảm; Trạm 6: Đua thuyền tự chế; Trạm 7: Trận đấu súng nước; Trạm 8: Cần thủ tài năng."
    },
    {
      time: "10:40",
      title: "Bế Mạc & Vệ Sinh Thay Đồ",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC thông báo kết thúc chương trình. Học sinh di chuyển đi vệ sinh cá nhân, thay quần áo khô sạch để chuẩn bị ăn trưa và nghỉ ngơi."
    }
  ];

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
            Khung Thời Gian Ngày Hội (1 Buổi)
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA phối hợp thiết lập khung giờ linh hoạt, kết hợp học và chơi đan xem khoa học giúp học sinh Tiểu học luôn dồi dào năng lượng.
          </p>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-36 pl-8 md:pl-12 space-y-12">
          <div className="absolute top-2 bottom-2 left-0 w-px bg-gradient-to-b from-abaBlue via-abaOrange to-transparent" />

          {timelineData.map((item, idx) => (
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
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline;
