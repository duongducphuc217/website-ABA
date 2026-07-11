import HeaderThree from "../../components/HeaderThree";
import FooterFour from "../../components/FooterFour";
import Breadcrumb from "../../components/Breadcrumb";
import KnsIntro from "../../components/KnsIntro";
import KnsTopics from "../../components/KnsTopics";
import KnsChecklist from "../../components/KnsChecklist";
import ContactFormABA from "../../components/ContactFormABA";
import TestimonialsABA from "../../components/TestimonialsABA";

export const metadata = {
  title: "Chuyên Đề Kỹ Năng Sống Sân Trường ABA - Sinh hoạt dưới cờ",
  description: "Chuỗi 10 chuyên đề KNS sinh hoạt dưới cờ Hành trình Con Trưởng Thành cho học sinh tiểu học do Trung tâm ABA tổ chức, được Sở GD&ĐT Hà Nội cấp phép.",
};

const page = () => {
  return (
    <>
      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Chuyên Đề KNS"} />

      {/* KnsIntro */}
      <KnsIntro />

      {/* KnsTopics */}
      <KnsTopics />

      {/* KnsChecklist */}
      <KnsChecklist />

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
