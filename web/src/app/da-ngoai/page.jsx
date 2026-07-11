import HeaderThree from "../../components/HeaderThree";
import FooterFour from "../../components/FooterFour";
import Breadcrumb from "../../components/Breadcrumb";
import FieldTripIntro from "../../components/FieldTripIntro";
import FieldTripPrograms from "../../components/FieldTripPrograms";
import WhyChooseFieldTrip from "../../components/WhyChooseFieldTrip";
import ContactFormABA from "../../components/ContactFormABA";
import TestimonialsABA from "../../components/TestimonialsABA";

export const metadata = {
  title: "Dã Ngoại Trải Nghiệm ABA - Hành trình kết nối và khám phá học sinh",
  description: "Các chương trình dã ngoại trải nghiệm Hà Nội Em Yêu, dã ngoại theo lớp kết nối bạn bè, dã ngoại theo trường kỷ niệm tri ân đặc sắc của Trung tâm ABA.",
};

const page = () => {
  return (
    <>
      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Dã Ngoại"} />

      {/* FieldTripIntro */}
      <FieldTripIntro />

      {/* FieldTripPrograms */}
      <FieldTripPrograms />

      {/* WhyChooseFieldTrip */}
      <WhyChooseFieldTrip />

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
