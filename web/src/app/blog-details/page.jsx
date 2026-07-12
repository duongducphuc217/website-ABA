import React, { Suspense } from "react";
import BlogDetailsInner from "@/components/BlogDetailsInner";
import Breadcrumb from "@/components/Breadcrumb";
import FooterFour from "@/components/FooterFour";
import HeaderThree from "@/components/HeaderThree";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Chi tiết bài viết - Trung tâm ABA",
  description:
    "Xem chi tiết các bài viết, chuyên đề kỹ năng sống, hoạt động giáo dục và teambuilding học sinh tại Trung tâm ABA.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Chi Tiết Tin Tức"} />

      {/* BlogDetailsInner with Suspense */}
      <Suspense fallback={
        <div className="blog-page-section py-120">
          <div className="container text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
          </div>
        </div>
      }>
        <BlogDetailsInner />
      </Suspense>

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
