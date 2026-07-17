import Link from "next/link";

const Breadcrumb = ({ title, hideNav = false }) => {
  return (
    <section className={`breadcrumb bg-main-25 position-relative z-1 overflow-hidden mb-0 ${hideNav ? "py-60" : "py-120"}`}>
      <style dangerouslySetInnerHTML={{
        __html: hideNav ? `
          .breadcrumb {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          @media (max-width: 991px) {
            .breadcrumb {
              padding-top: 80px !important;
              padding-bottom: 40px !important;
            }
          }
        ` : `
          @media (max-width: 991px) {
            .breadcrumb {
              padding-top: 130px !important;
              padding-bottom: 50px !important;
            }
          }
        `
      }} />
      <img
        src='/assets/images/shapes/shape1.png'
        alt=''
        className='shape one animation-rotation d-md-block d-none'
      />
      <img
        src='/assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation d-md-block d-none'
      />
      <img
        src='/assets/images/shapes/shape3.png'
        alt=''
        className='shape eight animation-walking d-md-block d-none'
      />
      <img
        src='/assets/images/shapes/shape5.png'
        alt=''
        className='shape six animation-walking d-md-block d-none'
      />
      <img
        src='/assets/images/shapes/shape4.png'
        alt=''
        className='shape four animation-scalation'
      />
      <img
        src='/assets/images/shapes/shape4.png'
        alt=''
        className='shape nine animation-scalation'
      />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='breadcrumb__wrapper'>
              <h1 
                className={`breadcrumb__title fw-semibold text-center ${hideNav ? "mb-0" : "display-4"}`}
                style={hideNav ? { fontSize: "24px", color: "#0f172a", lineHeight: "1.4" } : {}}
              >
                {" "}
                {title}
              </h1>
              {!hideNav && (
                <ul className='breadcrumb__list d-flex align-items-center justify-content-center gap-4'>
                  <li className='breadcrumb__item'>
                    <Link
                      href='/'
                      className='breadcrumb__link text-neutral-500 hover-text-main-600 fw-medium'
                    >
                      <i className='text-lg d-inline-flex ph-bold ph-house' />{" "}
                      Trang chủ
                    </Link>
                  </li>

                  <li className='breadcrumb__item '>
                    <i className='text-neutral-500 d-flex ph-bold ph-caret-right' />
                  </li>
                  <li className='breadcrumb__item'>
                    <span className='text-main-two-600'> {title} </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
