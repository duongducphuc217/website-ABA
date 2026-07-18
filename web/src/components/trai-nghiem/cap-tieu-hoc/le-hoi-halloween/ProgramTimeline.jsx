"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "Trước Lễ Hội",
      title: "Hạng Mục Thiết Lập & Chuẩn Bị",
      icon: "ph-bold ph-chats-teardrop",
      badgeColor: "bg-slate-50 text-slate-650 border-slate-100",
      details: "Mỗi lớp chuẩn bị 1 tiết mục văn nghệ hóa trang. Nhà trường cử 1 nhóm học sinh lớp 4,5 tập luyện kịch câm handmine. Thiết kế trang trí khu check-in kinh dị và sân khấu phù thủy, xác ướp."
    },
    {
      time: "16:30 – 17:30",
      title: "Kiểm Tra Hạng Mục Kỹ Thuật",
      icon: "ph-bold ph-wrench",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Kỹ thuật viên ABA và nhà trường rà soát toàn bộ âm thanh công suất lớn, ánh sáng sân khấu, đạo cụ hóa trang và các gian hàng trò chơi."
    },
    {
      time: "17:30 – 17:50",
      title: "Mở Cửa Gian Hàng Trò Chơi Trúng Thưởng",
      icon: "ph-bold ph-ghost",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "MC thông báo mở cửa 5 gian hàng. Học sinh tự do hóa trang di chuyển tham gia: Tiêu diệt bí ngô, Vẽ mặt nạ Halloween, Động xà không đáy, Angry bird, Thần sấm."
    },
    {
      time: "17:50 – 18:10",
      title: "Khai Mạc Đêm Nhạc Hội Halloween",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "MC hóa thân thành Ma Cà Rồng mở màn đêm hội, dẫn dắt câu chuyện rùng rợn và phổ biến cách thức bình chọn nhân vật hóa trang yêu thích."
    },
    {
      time: "18:10 – 19:10",
      title: "Thi Văn Nghệ: Twilight Hoàng Hôn Đỏ",
      icon: "ph-bold ph-music-notes-plus",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      details: "Trình diễn 10 tiết mục văn nghệ dự thi cực kỳ sáng tạo từ các lớp theo các tiêu chí: Dị, Rộn, Ảo ma Canada và Đông thành viên."
    },
    {
      time: "19:10 – 19:30",
      title: "Đuổi Hình Bắt Chữ & Handmine Bế Mạc",
      icon: "ph-bold ph-brain",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Trò chơi đố vui đuổi hình bắt chữ Halloween giành quà. Thưởng thức vở kịch câm handmine đặc sắc của học sinh lớp 4,5 và trao giải thưởng văn nghệ."
    },
    {
      time: "19:00 - Cuối Buổi",
      title: "Tiệc Buffet Tối Halloween",
      icon: "ph-bold ph-cookie",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "MC tuyên bố kết thúc ngày hội, gửi lời chúc vui vẻ tới học sinh và thầy cô. Học sinh cùng tham gia tiệc buffet tối ngập tràn món ăn ngộ nghĩnh."
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
            Khung Thời Gian Lễ Hội Halloween
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Lễ hội diễn ra vào chiều tối mang đến hiệu ứng ánh sáng ma mị, kích thích sự tò mò và cảm xúc hào hứng cho các bé.
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
