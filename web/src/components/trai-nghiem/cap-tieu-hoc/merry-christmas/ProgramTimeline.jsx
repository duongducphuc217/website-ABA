"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "13:30 – 13:45",
      title: "Tập Trung & Ổn Định Tổ Chức",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp toàn trường dưới sân. Học sinh ngồi ghế theo hàng lớp ngay ngắn như vị trí giờ chào cờ và sinh hoạt tập thể."
    },
    {
      time: "13:45 – 14:00",
      title: "Khai Mạc & Hoạt Cảnh Giáng Sinh",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Hoạt cảnh vui nhộn chào mừng của Ông già Noel và Công chúa Tuyết. MC tuyên bố lý do giới thiệu đại biểu, chúc mừng Noel."
    },
    {
      time: "14:00 – 14:15",
      title: "Tiết Mục Xiếc: Tôn Ngộ Không",
      icon: "ph-bold ph-sparkles",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Sự xuất hiện bất ngờ của Tôn Ngộ Không biểu diễn xiếc khỉ đi xe đạp nhỏ, giữ thăng bằng và nhào lộn điêu luyện sân khấu."
    },
    {
      time: "14:15 – 14:30",
      title: "Biểu Diễn Bartender Duy Khánh",
      icon: "ph-bold ph-fire-simple",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Màn biểu diễn xiếc múa lửa nghệ thuật tung hứng mãn nhãn của nghệ sĩ xiếc bartender chuyên nghiệp từ ABA."
    },
    {
      time: "14:30 – 14:50",
      title: "Trò Chơi Đố Vui Có Thưởng",
      icon: "ph-bold ph-chats-teardrop",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Ông già Noel và Công chúa Tuyết đặt câu hỏi thách thức phản xạ nhanh của các con học sinh, trao các túi quà xinh xắn."
    },
    {
      time: "14:50 – 16:05",
      title: "Hoạt Động Vui Chơi & Trải Nghiệm Gian Hàng",
      icon: "ph-bold ph-ghost",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Học sinh tự do tham gia vui chơi chụp hình giáng sinh lưu niệm và các chặng trải nghiệm nhỏ xung quanh trường học."
    },
    {
      time: "16:05 – 16:15",
      title: "Bốc Thăm May Mắn Nhận Quà",
      icon: "ph-bold ph-gift",
      badgeColor: "bg-yellow-50 text-yellow-750 border-yellow-100",
      details: "BTC tổ chức quay số may mắn bốc thăm trúng thưởng tìm ra những chủ nhân may mắn nhận các giải thưởng lớn từ Ông già Noel."
    },
    {
      time: "16:15",
      title: "Tuyên Bố Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Ông già Noel và Công chúa Tuyết phát biểu chúc các bé học sinh, thầy cô và gia đình một mùa Giáng sinh và năm mới bình an, hạnh phúc."
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
            Khung Thời Gian Ngày Hội (90 Phút)
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA tổ chức chuỗi hoạt động liên tục hấp dẫn giúp duy trì không khí náo nhiệt và cuốn hút học sinh từ đầu đến cuối buổi.
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
