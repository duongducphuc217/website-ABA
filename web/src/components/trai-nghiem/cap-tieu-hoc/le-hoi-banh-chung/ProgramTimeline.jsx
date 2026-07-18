"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "07:45 – 08:00",
      title: "Chào Đón Học Sinh & Tập Trung",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh, phụ huynh và giáo viên vào sân trường. Chụp hình lưu niệm tại khu vực check-in và tập trung ổn định vị trí lớp."
    },
    {
      time: "08:00 – 08:30",
      title: "Khai Mạc Lễ Hội: Mùa Xuân Chiến Thắng",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Biểu diễn văn nghệ mở màn. MC tuyên bố lý do giới thiệu đại biểu, đại diện BGH nhà trường phát biểu khai mạc và chúc Tết. Thưởng thức biểu diễn trống hội lân sư rồng sôi động."
    },
    {
      time: "08:30 – 09:30",
      title: "Gói Bánh Chưng - Gói Trọn Yêu Thương",
      icon: "ph-bold ph-package",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Nghệ nhân hướng dẫn cách chuẩn bị nguyên liệu lạt tre, lá dong, nhân đỗ thịt gói bánh. ABA cùng GVCN hướng dẫn các em học sinh ngồi chiếu thực hành tự tay gói hoàn chỉnh chiếc bánh mang về."
    },
    {
      time: "09:30 – 11:00",
      title: "Hội Chợ Tết, Hội Thi & Lễ Hội Ngày Xuân",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Mở cửa hội chợ quê và các gian hàng trò chơi trúng thưởng (Pickleball, phi tiêu, núi hơi). Diễn ra hội thi Xuân Đất Việt: Khối 5 thi viết thư pháp, Khối 3-4 thi Rung chuông vàng, Khối 1-2 thi nhảy bao bố."
    },
    {
      time: "11:00",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC gửi lời chúc Tết an khang thịnh vượng tới thầy cô và học sinh. Trao các giải thưởng thi đua, chụp ảnh lưu niệm tập thể và bế mạc ngày hội."
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
            Khung Thời Gian Lễ Hội Bánh Chưng (Tiểu học)
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA điều phối khoa học đan xen giữa hoạt động tập trung gói bánh truyền thống ngoài trời và khu vui chơi trúng thưởng náo nhiệt.
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
