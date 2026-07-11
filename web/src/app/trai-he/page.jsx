import HeaderThree from "../../components/HeaderThree";
import FooterFour from "../../components/FooterFour";
import Breadcrumb from "../../components/Breadcrumb";
import CampOverview from "../../components/CampOverview";
import CampValues from "../../components/CampValues";
import CampActivities from "../../components/CampActivities";
import CampPhilosophy from "../../components/CampPhilosophy";
import ContactFormABA from "../../components/ContactFormABA";
import TestimonialsABA from "../../components/TestimonialsABA";

export const metadata = {
  title: "Trại Hè Sống Ý Nghĩa ABA - Trại hè kỹ năng sống Yên Tử",
  description: "Trại Hè Sống Ý Nghĩa Yên Tử 6 ngày 5 đêm rèn luyện tự lập, kỷ luật chiến binh và đánh thức cảm xúc yêu thương cho học sinh cấp 1, cấp 2.",
};

const page = () => {
  return (
    <>
      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Trại Hè"} />

      {/* CampOverview */}
      <CampOverview />

      {/* CampValues */}
      <CampValues />

      {/* CampActivities */}
      <CampActivities />

      {/* CampPhilosophy */}
      <CampPhilosophy />

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
