"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "08:00 – 08:30",
      title: "Tập Trung Học Sinh & Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp các lớp mầm non tại sân trường, sắp xếp hàng ngũ ngồi ghế gọn gàng ổn định vị trí lớp."
    },
    {
      time: "08:30 – 09:00",
      title: "Khởi Động MC Vui Nhộn & Lưu Ý An Toàn",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Khởi động cùng MC hoạt náo qua các game tập thể kết nối vui vẻ. MC phổ biến các nội quy an toàn nước quan trọng trước khi mở hội."
    },
    {
      time: "09:00 – 10:30",
      title: "Trải Nghiệm Thế Giới Nước Vui Nhộn",
      icon: "ph-bold ph-drop",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Xoay vòng trải nghiệm: Cầu trượt nước hơi vui nhộn, Tay súng nước thiện xạ bắn bia quái vật, Câu cá sắc màu, Ma trận bong bóng xà phòng xốp, Đua thuyền rùa hơi, Bể nước sôi động, Bowling nước và thi vận chuyển nước đổ đầy xô."
    },
    {
      time: "10:30",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Tuyên bố bế mạc chương trình. MC gửi lời chào tạm biệt các bé, dọn dẹp vệ sinh khuôn viên sân trường sạch sẽ và bàn giao bé về lớp."
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
            Khung Thời Gian Lễ Hội Nước
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Thời lượng 1 buổi sáng trọn vẹn từ 8h00 đến 10h30, đảm bảo nhịp độ năng động mát lạnh và tuyệt đối an toàn cho bé.
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
