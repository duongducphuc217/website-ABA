"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "07:50 – 08:00",
      title: "Tập Trung Học Sinh",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Bật nhạc sôi động đón học sinh dưới sân trường. Các lớp tập hợp hàng ngũ ổn định theo chỉ dẫn của điều phối viên ABA."
    },
    {
      time: "08:00 – 08:35",
      title: "Khai Mạc & Khởi Động Sôi Nổi",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Tổ chức trò chơi tập thể lớn: chuyền bóng yoga đồng đội, thử thách 'Con đường đoàn kết' (Khối 3-5) hoặc nhảy dân vũ tập thể (Khối 1-3)."
    },
    {
      time: "08:40 – 09:20",
      title: "Nhóm Trải Nghiệm 1: Team Building",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Các lớp thi đấu chặng đua phao hơi đồng đội: Đua sâu hơi siêu tốc, Đua ngựa hơi 'Kỵ sĩ tài ba', Đua rùa và thỏ hơi kịch tính."
    },
    {
      time: "09:30 – 10:10",
      title: "Nhóm Trải Nghiệm 2: Nghệ Thuật Thủ Công",
      icon: "ph-bold ph-paint-brush",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Tham gia Rung Chuông Vàng tìm hiểu văn hóa. Tự tay thực hành in tranh dân gian Đông Hồ nhiều màu, trang trí chuồn chuồn tre."
    },
    {
      time: "10:20 – 11:00",
      title: "Nhóm Trải Nghiệm 3: Khoa Học & Sinh Tồn",
      icon: "ph-bold ph-atom",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Trải nghiệm Đua ô tô động cơ phản lực cánh quạt, phóng tên lửa hơi. Học kỹ năng tạo lửa nướng thịt và tự chế tạo bình lọc nước mini."
    },
    {
      time: "11:00",
      title: "MC Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC gửi lời chào tạm biệt và cảm ơn nhà trường. Học sinh dọn dẹp vệ sinh khu vực, chụp ảnh tập thể kỷ niệm và bế mạc chương trình."
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
