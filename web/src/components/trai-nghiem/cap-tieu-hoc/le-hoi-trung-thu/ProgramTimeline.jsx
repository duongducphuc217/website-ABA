"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "Ổn Định Tổ Chức",
      title: "Văn Nghệ Chào Mừng",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Tập hợp học sinh theo lớp tại sân trường. GVCN hướng dẫn lấy ghế ngồi ổn định. Khởi động văn nghệ chào mừng từ học sinh nhà trường."
    },
    {
      time: "Hoạt Cảnh Cuội AI",
      title: "Hoạt cảnh: AI là chú Cuội",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Chú Cuội và chị Hằng xuất hiện với tình huống kịch hài hước: Chú Cuội mải chơi tạo ra chú Cuội AI đi cùng chị Hằng xuống trần gian."
    },
    {
      time: "Khai Mạc Lễ Hội",
      title: "Lời Chúc Mừng & Múa Lân Sư Rồng",
      icon: "ph-bold ph-sparkles",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      details: "Đại diện BGH phát biểu chúc Tết Trung Thu cán bộ, giáo viên và học sinh. Biểu diễn múa lân sư rồng khai mạc rộn rã."
    },
    {
      time: "Trung Thu Diệu Kỳ",
      title: "Giải mã bí ẩn & Xiếc ảo thuật",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Học sinh thử tài giải đố vui cùng chú Cuội chị Hằng để rinh quà đặc biệt. Xem chiêm ngưỡng xiếc ảo thuật vui nhộn mãn nhãn."
    },
    {
      time: "Trải Nghiệm Hội Chợ",
      title: "Mở Cửa Hội Chợ & Các Khu Trò Chơi",
      icon: "ph-bold ph-storefront",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Các lớp tham gia hội chợ Trung thu, chơi game trúng thưởng (bịt mắt đánh trống, vòng quay may mắn, tay ném số 1). Tham gia lâu đài hơi và các gian trải nghiệm dân gian tò he tô tượng."
    },
    {
      time: "Hội Thi Khéo Tay",
      title: "Thi Làm Đèn Ông Sao & Làm Bánh Dẻo",
      icon: "ph-bold ph-paint-brush-household",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Đại diện các lớp thi đấu làm bánh dẻo trung thu và trang trí lồng đèn giấy, đèn ông sao tre đẹp nhất. BGK tổ chức chấm giải."
    },
    {
      time: "Bế Mạc Chương Trình",
      title: "Lời Chúc Sum Vầy Đoàn Viên",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Chú Cuội tuyên bố bế mạc chương trình, gửi lời chúc sức khỏe, may mắn, tết đoàn viên hạnh phúc tới thầy cô và học sinh."
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
            Khung Thời Gian Đêm Hội (1 Buổi)
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA tổ chức chương trình khép kín, kết hợp nghệ thuật sân khấu và các hoạt động hội chợ trải nghiệm lý thú.
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
