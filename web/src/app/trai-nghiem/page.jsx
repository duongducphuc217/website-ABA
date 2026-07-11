import HeaderThree from "../../components/HeaderThree";
import FooterFour from "../../components/FooterFour";
import Breadcrumb from "../../components/Breadcrumb";
import ExperienceCategories from "../../components/ExperienceCategories";
import OutingAppABA from "../../components/OutingAppABA";
import PropRentalABA from "../../components/PropRentalABA";
import ContactFormABA from "../../components/ContactFormABA";

export const metadata = {
  title: "Trải Nghiệm ABA - Hoạt động trải nghiệm, dã ngoại sáng tạo học sinh",
  description: "Khám phá các chương trình hoạt động trải nghiệm sáng tạo STEM, Lễ hội nước mùa hè, Teambuilding công nghệ Outing App 4.0 và dịch vụ cho thuê đạo cụ sự kiện của Trung tâm ABA.",
};

const page = () => {
  return (
    <>
      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Trải Nghiệm"} />

      {/* ExperienceCategories */}
      <ExperienceCategories />

      {/* OutingAppABA */}
      <OutingAppABA />

      {/* PropRentalABA */}
      <PropRentalABA />

      {/* ContactFormABA */}
      <ContactFormABA />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
