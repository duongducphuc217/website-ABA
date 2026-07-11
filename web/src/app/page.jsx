import BannerFive from "@/components/BannerFive";
import CounterFour from "@/components/CounterFour";
import FeaturesThree from "@/components/FeaturesThree";
import FooterFour from "@/components/FooterFour";
import GallerySectionTwo from "@/components/GallerySectionTwo";
import WhyChooseABA from "@/components/WhyChooseABA";
import HeaderThree from "@/components/HeaderThree";
import InstructorTwo from "@/components/InstructorTwo";
import KidsCourses from "@/components/KidsCourses";
import MarqueeOne from "@/components/MarqueeOne";
import PopularTwo from "@/components/PopularTwo";
import TestimonialsFour from "@/components/TestimonialsFour";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Trung tâm ABA - Hành động vì hạnh phúc hàng triệu gia đình Việt Nam",
  description:
    "Tổ chức hoạt động dã ngoại, sự kiện và giáo dục kỹ năng uy tín. Cùng Trung tâm ABA hành động vì nụ cười trẻ thơ. Có ABA, không cần đi đâu xa!",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerFive */}
      <BannerFive />

      {/* FeaturesThree */}
      <FeaturesThree />

      {/* WhyChooseABA */}
      <WhyChooseABA />

      {/* KidsCourses */}
      <KidsCourses />

      {/* CounterFour */}
      <CounterFour />

      {/* MarqueeOne */}
      <MarqueeOne />

      {/* GallerySectionTwo */}
      <GallerySectionTwo />

      {/* InstructorTwo */}
      <InstructorTwo />

      {/* PopularTwo */}
      <PopularTwo />

      {/* TestimonialsFour */}
      <TestimonialsFour />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
