"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "13:45 – 14:00",
      title: "Tập Trung Học Sinh & Ổn Định Tổ Chức",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp các lớp mầm non dưới sân trường. Cô giáo hướng dẫn các bé ngồi ghế ổn định theo hàng lớp ngăn nắp."
    },
    {
      time: "14:00 – 14:15",
      title: "Khai Mạc & Ông Già Noel Hoạt Náo",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Hoạt cảnh Giáng sinh: Ông già Noel và Công chúa Tuyết xuất hiện. MC tuyên bố lý do giới thiệu đại biểu. Ông già Noel thử thách bé qua trò chơi hoạt náo, tặng quà bé hăng hái."
    },
    {
      time: "14:15 – 14:30",
      title: "Tiết Mục: Xiếc Hề Châu Âu",
      icon: "ph-bold ph-smiley",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Thưởng thức màn biểu diễn từ nghệ sĩ xiếc hề châu Âu: giữ thăng bằng trên xe đạp một bánh, tung hứng điêu luyện mang tới tiếng cười rộn rã."
    },
    {
      time: "14:30 – 14:45",
      title: "Trò Chơi Sân Khấu: Giai Điệu Giáng Sinh",
      icon: "ph-bold ph-music-notes",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Trò chơi âm nhạc đố vui có thưởng cùng Ông già Noel: đoán nhanh tên các bài hát Noel quen thuộc để nhận những phần quà ngọt ngào."
    },
    {
      time: "14:45 – 15:00",
      title: "Tiết Mục: Xiếc Thú Vui Nhộn",
      icon: "ph-bold ph-paw-print",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Các chú chó, chú khỉ thông minh thể hiện các kỹ thuật xiếc thú vui mắt (nhảy vòng, đi xe đạp thăng bằng)."
    },
    {
      time: "15:00 – 15:15",
      title: "Trò Chơi: Siêu Phản Xạ Sân Khấu",
      icon: "ph-bold ph-lightning",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Thử tài nhanh nhẹn phản xạ của các bạn nhỏ qua chuỗi mini game sân khấu hào hứng cùng Công chúa Tuyết."
    },
    {
      time: "15:15 – 15:30",
      title: "Tiết Mục: Tôn Ngộ Không Biểu Diễn",
      icon: "ph-bold ph-crown",
      badgeColor: "bg-yellow-50 text-yellow-750 border-yellow-100",
      details: "Tôn Ngộ Không đại náo sân trường, mang tới những tiết mục ảo thuật kỳ diệu bùng nổ sân khấu."
    },
    {
      time: "15:30 – 15:45",
      title: "Bốc Thăm & Kết Thúc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Tổ chức bốc thăm trúng thưởng 10 phần quà giáng sinh may mắn. Tuyên bố kết thúc chương trình và gửi lời chúc năm mới bình an từ ABA."
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
            Khung Thời Gian Vũ Khúc Giáng Sinh
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA tổ chức chương trình khép kín kéo dài 1 buổi chiều, mang lại sự ngạc nhiên và tiếng cười sảng khoái cho các con.
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
