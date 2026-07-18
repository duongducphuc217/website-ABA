"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "07:45 – 08:00",
      title: "Tập Trung Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh tập trung chỉn chu tại sân trường. GVCN hướng dẫn các con ổn định chỗ ngồi theo 2 hàng ghế trước sân khấu chính."
    },
    {
      time: "08:00 – 08:15",
      title: "Khai Mạc & Khởi Động Vệ Quốc Quân",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Tuyên bố lý do, giới thiệu đại biểu. Khởi động ngắn vui nhộn cùng MC mặc trang phục vệ quốc quân nâng cao chí khí tập thể."
    },
    {
      time: "08:15 – 08:20",
      title: "Bản Hùng Ca Bất Hủ",
      icon: "ph-bold ph-book-open",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Đoàn nghe tóm tắt lịch sử Quân đội Nhân dân Việt Nam hào hùng trong hành trình phá xiềng xích giành độc lập."
    },
    {
      time: "08:20 – 09:00",
      title: "Thử Thách: Tuyên Ngôn Độc Lập",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Các bạn học sinh cùng nhau cưỡi phao sâu hơi vượt rào cản mang về mảnh ghép tranh các mốc lịch sử lớn của đất nước."
    },
    {
      time: "09:05 – 09:30",
      title: "Phân Khối Hoạt Động Kỹ Năng",
      icon: "ph-bold ph-arrows-out",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Khối 1, 2 trải nghiệm tại lớp học: tìm hiểu hình ảnh anh bộ đội và học cách gấp mũ ca lô giấy. Khối 3, 4, 5 đấu trí tại Đấu trường trí tuệ Bản lĩnh Việt Nam trả lời sử học địa phương Hà Nội."
    },
    {
      time: "09:35 – 10:00",
      title: "Thử Thách: Sống Mãi Thủ Đô",
      icon: "ph-bold ph-shield-star",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Tái hiện cuộc chiến bảo vệ Hà Nội 1946 - 1947 của Trung đoàn Thủ đô anh dũng. Các lớp phối hợp đắp chiến lũy chụp hình check-in."
    },
    {
      time: "10:05 – 10:30",
      title: "Thử Thách: Điện Biên Phủ Trên Không",
      icon: "ph-bold ph-paper-plane-launch",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "Khám phá chiến thắng vẻ vang đập tan pháo đài bay B-52. Học sinh trải nghiệm phóng tên lửa nước tiêu diệt bia mô phỏng máy bay."
    },
    {
      time: "10:35 – 11:00",
      title: "Thử Thách: Tiến Về Sài Gòn & Bế Mạc",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Chặng đua đẩy xe tăng hơi tiến quân húc đổ cổng chào Dinh Độc Lập giải phóng Sài Gòn. MC tổng kết trao giải, bế mạc chương trình."
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
