import Link from "next/link";
import HeaderThree from "@/components/HeaderThree";
import FooterFour from "@/components/FooterFour";

export const metadata = {
  title: "Không tìm thấy trang - Trung tâm ABA",
  description: "Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị thay đổi trên hệ thống Website ABA.",
};

export default function NotFound() {
  return (
    <>
      <HeaderThree />
      <section className='not_found py-120' style={{ marginTop: "100px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='display-1 text-danger fw-bold'>404</h1>
              <h2 className='mb-16'>Không tìm thấy trang!</h2>
              <p className='text-neutral-500 mb-32 max-w-646 mx-auto'>
                Rất tiếc, trang bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc đường dẫn đã thay đổi trên hệ thống Trung tâm ABA.
              </p>

              <Link href='/' className='btn btn-main rounded-pill px-32 py-12 fw-semibold'>
                Quay lại Trang Chủ
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterFour />
    </>
  );
}
