import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

export const metadata = {
  title: {
    default: "Trung tâm ABA - Hành động vì hạnh phúc hàng triệu gia đình Việt Nam",
    template: "%s | Trung tâm ABA"
  },
  description:
    "Trung tâm giáo dục kỹ năng sống ABA - Chuyên tổ chức dã ngoại trải nghiệm, sự kiện trường học, teambuilding công nghệ Outing App 4.0 và cho thuê đạo cụ sự kiện uy tín hàng đầu.",
  keywords: [
    "trung tâm aba",
    "dã ngoại học sinh",
    "kỹ năng sống",
    "outing app",
    "cho thuê đạo cụ sự kiện",
    "trại hè học sinh",
    "sự kiện trường học"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='vi'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
