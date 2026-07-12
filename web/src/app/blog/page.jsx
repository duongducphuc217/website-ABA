import BlogGridInner from "@/components/BlogGridInner";
import Breadcrumb from "@/components/Breadcrumb";
import FooterFour from "@/components/FooterFour";
import HeaderThree from "@/components/HeaderThree";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Blog & Tin Tức - Trung tâm ABA",
  description:
    "Cập nhật các hoạt động dã ngoại, trải nghiệm thực tế, chuyên đề kỹ năng sống và tin tức giáo dục mới nhất từ Trung tâm ABA.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tin Tức - Hoạt Động"} />

      {/* BlogGridInner */}
      <BlogGridInner />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
