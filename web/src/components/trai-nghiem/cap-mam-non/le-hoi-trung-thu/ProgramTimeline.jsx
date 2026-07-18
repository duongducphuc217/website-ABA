"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "10 Phút Đầu",
      title: "Ổn Định & Văn Nghệ Chào Mừng",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp các lớp mầm non tại sân trường, sắp xếp ghế ngồi ổn định. Thưởng thức tiết mục văn nghệ mở màn tự tin của các bé."
    },
    {
      time: "5 Phút Tiếp",
      title: "Hoạt Cảnh Trăng Báo Động",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Chú Cuội trốn đi chơi bị kẻ xấu lừa gọi điện bắt cóc, chị Hằng xuất hiện vạch mặt kẻ gian giúp Cuội thoát nạn an toàn, giáo dục tinh thần cảnh giác cho các con."
    },
    {
      time: "20 Phút",
      title: "Khai Mạc & Múa Lân Trống Hội",
      icon: "ph-bold ph-sparkles",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "MC chú Cuội chị Hằng chào mừng, BGH phát biểu chúc Tết. Đoàn lân sư rồng tung mình múa lân khai hội rộn rã rước đèn."
    },
    {
      time: "15 Phút",
      title: "Ai Thông Minh Hơn Chú Cuội",
      icon: "ph-bold ph-question",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Bé tham gia trò chơi tương tác giải đáp câu đố dân gian vui nhộn trên sân khấu cùng chú Cuội chị Hằng để nhận quà Trung Thu."
    },
    {
      time: "15 Phút",
      title: "Đêm Hội Kỳ Ảo - Biểu Diễn Xiếc",
      icon: "ph-bold ph-smiley",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Thưởng thức màn biểu diễn xiếc vui mắt từ các nghệ sĩ chuyên nghiệp (xiếc tung hứng bong bóng, giữ thăng bằng)."
    },
    {
      time: "15 Phút",
      title: "Trung Thu Muôn Màu & Ảo Thuật",
      icon: "ph-bold ph-wand",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Bé tham gia hoạt động tập thể vui vẻ cùng chú Cuội. Thưởng thức tiết mục ảo thuật kỳ diệu bùng nổ sân khấu từ ảo thuật gia."
    },
    {
      time: "5 Phút Cuối",
      title: "Bốc Thăm & Kết Thúc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Tổ chức bốc thăm trúng thưởng 10 phần quà. Chú Cuội chị Hằng khép lại hành trình bằng lời chúc Trung thu đầm ấm và gửi bánh kẹo phát quà phá cỗ."
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
            Khung Thời Gian Lễ Hội Trung Thu
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Tổng thời lượng 90 – 120 phút với tiến độ nhanh, vui nhộn và tập trung cao phù hợp thể lực học sinh Mầm non.
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
