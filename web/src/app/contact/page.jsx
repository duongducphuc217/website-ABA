import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";
import Breadcrumb from "@/components/Breadcrumb";
import ContactInner from "@/components/ContactInner";

export const metadata = {
  title: "Liên Hệ Trung Tâm ABA - Tư vấn dã ngoại, sự kiện và trại hè học đường",
  description: "Thông tin liên hệ chính thức của Trung tâm Đào tạo và Phát triển ABA tại Hà Nội và Lào Cai. Hotline tư vấn dịch vụ: 0963 443 918.",
};

const page = () => {
  return (
    <>
      {/* HeaderThree */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Liên Hệ"} />

      {/* ContactInner */}
      <ContactInner />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
