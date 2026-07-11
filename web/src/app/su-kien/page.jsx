import HeaderThree from "../../components/HeaderThree";
import FooterFour from "../../components/FooterFour";
import Breadcrumb from "../../components/Breadcrumb";
import EventIntro from "../../components/EventIntro";
import EventCategories from "../../components/EventCategories";
import ContactFormABA from "../../components/ContactFormABA";
import TestimonialsABA from "../../components/TestimonialsABA";

export const metadata = {
  title: "Sự Kiện Học Đường ABA - Tổ chức lễ hội trường học trọn gói uy tín",
  description: "Dịch vụ tổ chức sự kiện giáo dục học đường chuyên nghiệp: Lễ hội Bánh Chưng, Trung Thu rước đèn, Gala tốt nghiệp tri ân, ngày hội gia đình và lễ hội kỹ năng sống của Trung tâm ABA.",
};

const page = () => {
  return (
    <>
      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Sự Kiện"} />

      {/* EventIntro */}
      <EventIntro />

      {/* EventCategories */}
      <EventCategories />

      {/* TestimonialsABA */}
      <TestimonialsABA />

      {/* ContactFormABA */}
      <ContactFormABA />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
