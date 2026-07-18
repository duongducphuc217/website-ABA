"use client";

import { motion } from "framer-motion";

const HeroBanner = ({ data }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-[140px] pb-24 z-1 font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-80 blur-[2px] transition-transform duration-[12000ms] hover:scale-102"
        style={{ 
          backgroundImage: `url('${data?.bgImage || '/assets/images/trai-nghiem/cap-thcs/le-hoi-trung-thu/hero_bg.png'}')` 
        }}
      />
      
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/65 z-0" />

      {/* Grid Pattern overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-0" 
        style={{
          backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-1 w-full max-w-5xl px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Top Label */}
          <motion.div 
            variants={itemVariants}
            className="flex-align justify-content-center gap-8 mb-16 fw-semibold text-main-800 text-xl font-heading"
          >
            <span>
              <i className="ph-bold ph-moon text-abaBlue text-2xl" />
            </span>
            <span className="text-abaBlue">{data?.kicker || "Chương Trình Lễ Hội Trải Nghiệm"}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 className="whitespace-pre-line"
            variants={itemVariants}
            className="fw-semibold text-neutral-700 display2 line-height-96 mb-24 font-heading"
          >
            {data?.title || (
              <>
                LỄ HỘI{" "}
            <span className="text-success-600">
              TRUNG THU
            </span>
            <br />
            <span className="text-warning-800">
              MID-AUTUMN
            </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-slate-500 font-medium max-w-2xl mb-40 leading-relaxed text-wrap-balance font-sans"
          >
            {data?.subtitle || "Sân chơi Trung thu gắn kết, vui Tết đoàn viên giàu màu sắc kết hợp các yếu tố truyền thống và hiện đại: hoạt cảnh chú Cuội AI độc đáo, xiếc ảo thuật, làm đèn ông sao, gói bánh dẻo."}
          </motion.p>

          {/* Badges container */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-40 max-w-4xl"
          >
            <motion.div 
              variants={badgeVariants}
              className="flex items-center gap-3 bg-white border border-slate-150 p-[10px] rounded-full text-slate-650 text-sm md:text-base shadow-sm font-sans"
            >
              <i className="ph-bold ph-calendar text-abaBlue text-lg md:text-xl" />
              <span>Thời gian: <strong className="text-slate-800">1 buổi (Sáng/Chiều)</strong></span>
            </motion.div>

            <motion.div 
              variants={badgeVariants}
              className="flex items-center gap-3 bg-white border border-slate-150 p-[10px] rounded-full text-slate-650 text-sm md:text-base shadow-sm font-sans"
            >
              <i className="ph-bold ph-users text-abaBlue text-lg md:text-xl" />
              <span>Đối tượng: <strong className="text-slate-800">Học sinh THCS</strong></span>
            </motion.div>

            <motion.div 
              variants={badgeVariants}
              className="flex items-center gap-3 bg-white border border-slate-150 p-[10px] rounded-full text-slate-650 text-sm md:text-base shadow-sm font-sans"
            >
              <i className="ph-bold ph-map-pin text-abaBlue text-lg md:text-xl" />
              <span>Địa điểm: <strong className="text-slate-700">Sân trường học</strong></span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="d-flex align-items-center justify-content-center gap-24 flex-wrap"
          >
            <a
              href="#tu-van"
              className="btn btn-main rounded-pill inline-flex items-center gap-2 hover:scale-102 active:scale-98 transition-all border-0 text-white font-bold cursor-pointer"
            >
              <span>Nhận Tư Vấn & Báo Giá</span>
              <i className="ph-bold ph-arrow-right text-lg" />
            </a>

            <a
              href="#lich-trinh"
              className="btn btn-outline-main rounded-pill inline-flex items-center gap-2 hover:scale-102 active:scale-98 transition-all cursor-pointer font-bold"
            >
              <span>Xem Lịch Trình Chi Tiết</span>
              <i className="ph-bold ph-calendar-check text-lg" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[25px] fill-slate-100"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.28C1123.63,55.51,1053,74.87,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
