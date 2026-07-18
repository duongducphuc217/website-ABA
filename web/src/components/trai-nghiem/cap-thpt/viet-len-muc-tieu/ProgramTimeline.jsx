"use client";

import { motion } from "framer-motion";

const ProgramTimeline = ({ data }) => {
  const kicker = data?.kicker || "LỊCH TRÌNH CHI TIẾT";
  const heading = data?.heading || "Khung Thời Gian Vận Hành Chương Trình";
  const subtitle = data?.subtitle || "Thời lượng 1 buổi sáng trọn vẹn từ 7h15 đến 11h00, đảm bảo nhịp độ học hỏi lý thú và vận động sảng khoái tối đa.";

  const defaultTimeline = [
    {
      time: "07:15 – 07:30",
      title: "Tập Trung Ổn Định",
      icon: "ph-bold ph-users-three",
      badgeColor: "bg-blue-50 text-blue-650 border-blue-100",
      details: "Học sinh tập trung tại vị trí tập kết sân trường theo đơn vị lớp, mỗi lớp ngồi theo 2 hàng ghế trước sân khấu lớn."
    },
    {
      time: "07:30 – 08:05",
      title: "Khai Mạc & Sức Mạnh Của Mục Tiêu",
      icon: "ph-bold ph-microphone-stage",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      details: "Khởi động náo nhiệt toàn trường cùng MC ABA. Tuyên bố lý do, giới thiệu đại biểu và khai mạc chương trình. Chuyên gia ABA xuất hiện chia sẻ các bài học ý nghĩa, giúp các em nhận biết tầm quan trọng của việc xây dựng mục tiêu trong học tập và cuộc sống."
    },
    {
      time: "08:05 – 08:30",
      title: "Thách Thức Tinh Thần Đoàn Kết",
      icon: "ph-bold ph-trophy",
      badgeColor: "bg-orange-50 text-abaOrange border-orange-100",
      details: "Thi đấu giao lưu toàn trường các trò chơi teambuilding gắn kết: Bóng chuyền đồng đội, Con đường đoàn kết."
    },
    {
      time: "08:30 – 08:35",
      title: "Phân Nhóm Trải Nghiệm",
      icon: "ph-bold ph-arrows-split",
      badgeColor: "bg-slate-100 text-slate-650 border-slate-200",
      details: "MC phân chia học sinh toàn trường thành 3 nhóm lớn. Phổ biến quy trình di chuyển luân phiên qua 3 trạm thử thách chính."
    },
    {
      time: "08:40 – 09:10",
      title: "Vòng Xoay Trải Nghiệm - Lượt 1",
      icon: "ph-bold ph-number-one",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Nhóm 1: Học viết mục tiêu SMART tại phòng học truyền cảm hứng. Nhóm 2: Teambuilding Chinh phục mục tiêu (đồng đội ăn ý & núi hơi). Nhóm 3: Teambuilding Vượt qua thử thách (con đường thành công & hướng tới mục tiêu)."
    },
    {
      time: "09:20 – 10:00",
      title: "Vòng Xoay Trải Nghiệm - Lượt 2",
      icon: "ph-bold ph-number-two",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Nhóm 1: Teambuilding Vượt qua thử thách. Nhóm 2: Học viết mục tiêu SMART. Nhóm 3: Teambuilding Chinh phục mục tiêu."
    },
    {
      time: "10:10 – 10:50",
      title: "Vòng Xoay Trải Nghiệm - Lượt 3",
      icon: "ph-bold ph-number-three",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      details: "Nhóm 1: Teambuilding Chinh phục mục tiêu. Nhóm 2: Teambuilding Vượt qua thử thách. Nhóm 3: Học viết mục tiêu SMART."
    },
    {
      time: "11:00",
      title: "Bế Mạc Chương Trình",
      icon: "ph-bold ph-flag-banner",
      badgeColor: "bg-red-50 text-red-650 border-red-100",
      details: "Tập trung học sinh tại sân khấu chính. MC tuyên bố bế mạc chương trình, gửi thông điệp động lực năm học mới và chào tạm biệt toàn trường."
    }
  ];

  const items = data?.items || defaultTimeline;

  return (
    <section className="py-120 bg-white relative overflow-hidden font-sans" id="lich-trinh">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-60 max-w-646 mx-auto">
          <div className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl">
            <span>
              <i className="ph-bold ph-calendar-blank" />
            </span>
            <span className="text-abaBlue">{kicker}</span>
          </div>
          <h2 className="fw-semibold heading-three text-slate-850 mb-20 font-heading">
            {heading}
          </h2>
          <p className="tw-text-base fw-medium text-slate-500 mb-0 mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {subtitle}
          </p>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-36 pl-8 md:pl-12 space-y-12">
          <div className="absolute top-2 bottom-2 left-0 w-px bg-gradient-to-b from-abaBlue via-abaOrange to-transparent" />

          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.04 }}
              className="relative group mb-12 last:mb-0"
            >
              <div className="absolute -left-[41px] md:-left-[53px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 group-hover:border-abaBlue group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-abaBlue shadow-sm transition-all duration-350 z-10">
                <i className={`${item.icon || "ph-bold ph-calendar-blank"} text-sm md:text-base`} />
              </div>

              <div className="hidden md:block absolute -left-48 top-2 text-right w-36">
                <span className="font-extrabold text-slate-900 text-sm md:text-base tracking-tight">
                  {item.time}
                </span>
              </div>

              <div className="bg-slate-50 border border-slate-150 rounded-16 p-[20px] hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="md:hidden mb-3">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor || "bg-blue-50 text-blue-650 border-blue-100"}`}>
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
