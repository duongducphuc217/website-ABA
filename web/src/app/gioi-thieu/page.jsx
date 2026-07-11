import AboutABA from "@/components/AboutABA";
import Breadcrumb from "@/components/Breadcrumb";
import CommitmentABA from "@/components/CommitmentABA";
import FeaturesABA from "@/components/FeaturesABA";
import FooterFour from "@/components/FooterFour";
import HeaderThree from "@/components/HeaderThree";
import InfoABA from "@/components/InfoABA";
import ContactFormABA from "@/components/ContactFormABA";
import TestimonialsABA from "@/components/TestimonialsABA";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Về ABA - Trung tâm ABA",
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

      {/* Breadcrumb */}
      <Breadcrumb title={"Về ABA"} />

      {/* FeaturesABA */}
      <FeaturesABA />

      {/* InfoABA */}
      <InfoABA />

      {/* AboutABA */}
      <AboutABA />

      {/* CommitmentABA */}
      <CommitmentABA />

      {/* ContactFormABA */}
      <ContactFormABA />

      {/* TestimonialsABA */}
      <TestimonialsABA />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
