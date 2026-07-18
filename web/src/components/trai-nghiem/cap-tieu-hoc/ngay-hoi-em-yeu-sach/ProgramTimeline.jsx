"use client";

import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const timelineData = [
    {
      time: "Trước Ngày Hội",
      title: "Công Tác Chuẩn Bị Giáo Khoa",
      icon: "ph-bold ph-chats-teardrop",
      badgeColor: "bg-slate-50 text-slate-650 border-slate-100",
      details: "GVCN họp phổ biến nội dung với BTC ABA. Mỗi lớp chuẩn bị 1 poster khẩu hiệu đọc sách (khối 5 chuẩn bị 1 báo tường chủ đề đọc sách). Học sinh tự chọn và chuẩn bị mang theo ít nhất 1 cuốn sách yêu thích. Mỗi khối trang trí 1 Góc Trưng Bày Sách."
    },
    {
      time: "07:50 – 08:00",
      title: "Tập Trung Ổn Định Đội Hình",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "GVCN đưa học sinh ra vị trí tập kết chỉ định của lớp dưới sân trường. Ổn định chỗ ngồi, xếp hàng ngay ngắn trước sân khấu."
    },
    {
      time: "08:00 – 08:45",
      title: "Khai Mạc & Khởi Động Sân Khấu Hóa",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Khai mạc ngày hội. Biểu diễn văn nghệ bài hát 'Trang sách em yêu', 'Em yêu đọc sách'. Thưởng thức vở kịch ngắn vui nhộn 'Cóc kiện trời', chơi game Hiểu ý đồng đội và phát động Tháng Đọc Sách."
    },
    {
      time: "08:45 – 10:30",
      title: "Xoay Vòng Các Trạm Trải Nghiệm",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Các lớp luân phiên xoay vòng qua 5 trạm thực tế (30 phút/trạm): Trạm 1: Đường Tăng đi thỉnh Kinh (vận động phao hơi); Trạm 2: Đọc sách thông minh (lớp học); Trạm 3: Độc giả thông thái (nhà thể chất); Trạm 4: Sáng tác bìa sách; Trạm 5: Đọc sách tự do tại lớp."
    },
    {
      time: "10:30 – 11:00",
      title: "Tổng Kết Ngày Hội & Check-in",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Triển lãm trưng bày các poster đọc sách của từng lớp. Học sinh chụp ảnh lưu niệm check-in tại các trạm. GVCN phát Bảng theo dõi đọc sách trong tháng cho học sinh."
    },
    {
      time: "Sau Ngày Hội",
      title: "Viết Cảm Nhận & Theo Dõi Hàng Ngày",
      icon: "ph-bold ph-pencil-line",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Học sinh thực hiện bài thu hoạch ngắn viết cảm nhận của mình khi tham dự ngày hội. Duy trì thói quen đọc sách hàng ngày và ghi chép bảng theo dõi phát cuối chương trình."
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
            Khung Thời Gian Ngày Hội (180 Phút)
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            ABA phối hợp thiết lập khung giờ linh hoạt, kết hợp học và chơi đan xen khoa học giúp học sinh Tiểu học luôn dồi dào năng lượng.
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
