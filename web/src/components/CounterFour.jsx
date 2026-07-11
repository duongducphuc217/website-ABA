"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterFour = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='choose-us py-120 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape1.png'
        alt=''
        className='shape one animation-rotation'
      />
      <img
        src='assets/images/shapes/shape3.png'
        alt=''
        className='animation-walking top-10-percent left-85-percent position-absolute z-n1'
      />
      <img
        src='assets/images/shapes/shape5.png'
        alt=''
        className='animation-walking bottom-5-percent left-70-percent position-absolute'
      />
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-xl-6'>
            <div className='choose-us__content'>
              <div className='mb-40'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <span className='text-16 text-main-600'>
                    <i className='ph-bold ph-book' />
                  </span>
                  <h5 className='mb-0 text-main-600'>Về Chúng Tôi</h5>
                </div>
                <h2 className='mb-24 wow bounceIn'>
                  Kiến Tạo Thế Thế Hệ Trẻ Bản Lĩnh & Tự Lập
                </h2>
                <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                  Trung tâm ABA tự hào là đối tác chiến lược hàng đầu của các nhà trường, mang đến giải pháp giáo dục kỹ năng sống thực chất, các chuyến dã ngoại trải nghiệm an toàn và tràn đầy năng lượng.
                </p>
              </div>
              
              {/* Thanh tiến độ sự hài lòng */}
              <div className='mb-40'>
                <div className='mb-16'>
                  <span className='text-neutral-700 text-20 fw-medium'>
                    Mức độ hài lòng & an tâm tuyệt đối
                  </span>
                </div>
                <div
                  className='progress-wrapper d-flex align-items-center flex-column gap-4'
                  data-perc='99%'
                >
                  <div className='h-50-px position-relative w-100 d-flex'>
                    <span 
                      className='floating-label position-absolute text-xl text-main-600 fw-semibold radius-8 w-50-px h-32-px z-1 d-flex justify-content-center align-items-center'
                      style={{ left: '99%', transform: 'translateX(-100%)' }}
                    >
                      99%
                    </span>
                    <div
                      className='progress mt-auto h-8-px w-100 bg-primary-50 rounded-pill'
                      role='progressbar'
                      aria-label='Basic example'
                      aria-valuenow={99}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className='progress-bar animated-bar rounded-pill bg-primary-gradien overflow-visible'
                        style={{ width: "99%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sứ mệnh & Tầm nhìn */}
              <div className='d-flex gap-24 flex-wrap'>
                <div className='max-w-306'>
                  <div className='d-flex gap-12 mb-12 align-items-center' data-aos='fade-right'>
                    <span>
                      <img
                        src='assets/images/icons/about-us-five-checkbox.png'
                        alt='Sứ Mệnh'
                      />
                    </span>
                    <h5 className='mb-0 text-neutral-700 fw-bold'>Sứ Mệnh Của ABA</h5>
                  </div>
                  <p className='text-14 fw-normal text-neutral-500 wow bounceIn' style={{ textAlign: 'justify', lineHeight: '1.5' }}>
                    Hành động vì nụ cười trẻ thơ và hạnh phúc của hàng triệu gia đình Việt thông qua các hoạt động giáo dục thực nghiệm giàu tính giáo dục và nhân văn.
                  </p>
                </div>
                <div className='max-w-306'>
                  <div className='d-flex gap-12 mb-12 align-items-center' data-aos='fade-left'>
                    <span>
                      <img
                        src='assets/images/icons/about-us-five-checkbox.png'
                        alt='Tầm Nhìn'
                      />
                    </span>
                    <h5 className='mb-0 text-neutral-700 fw-bold'>Tầm Nhìn Chiến Lược</h5>
                  </div>
                  <p className='text-14 fw-normal text-neutral-500 wow bounceIn' style={{ textAlign: 'justify', lineHeight: '1.5' }}>
                    Trở thành đơn vị tiên phong dẫn đầu về giáo dục kỹ năng sống toàn diện và chuyển giao tài nguyên giáo dục kỹ năng thực chất tại Việt Nam.
                  </p>
                </div>
              </div>

              {/* Action Buttons & Hotline */}
              <div className='d-flex gap-32 flex-wrap mt-40 align-items-center'>
                <div>
                  <Link
                    href='/about'
                    className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                    data-aos='fade-right'
                  >
                    Tìm hiểu thêm
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
                <div>
                  <div
                    className='d-flex align-items-center gap-16'
                    data-aos='fade-left'
                  >
                    <span className='bg-warning-800 w-54 h-54 rounded-circle justify-content-center text-center align-items-center d-flex text-white'>
                      <img
                        src='assets/images/icons/about-us-five-headset.png'
                        alt=''
                      />
                    </span>
                    <div>
                      <span className='text-14 d-inline-flex mb-4 text-neutral-400'>
                        Hotline hỗ trợ 24/7
                      </span>
                      <h6 className='text-neutral-700 mb-0' style={{ fontSize: '18px', fontWeight: '700' }}>0966 886 111</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='choose-us__thumbs position-relative'>
              <div className='offer-message style-two animation-upDown'>
                <span className=''>
                  <img
                    src='assets/images/thumbs/about-us-five-img3.png'
                    alt=''
                  />
                </span>
              </div>
              <div className='banner-box one style-two ' data-aos='fade-left'>
                <div className='d-sm-block d-none'>
                  <img
                    src='assets/images/thumbs/about-us-five-img2.png'
                    alt=''
                    className=''
                  />
                </div>
              </div>
              <div className='text-end' data-aos='zoom-out'>
                <div className='position-relative'>
                  <img
                    src='assets/images/thumbs/about-us-five-img1.png'
                    alt=''
                    className='choose-us__img rounded-12 w-100'
                    data-tilt=''
                    data-tilt-max={16}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-full-page-listening=''
                  />
                  <span className='shadow-main-two w-80 h-80 flex-center bg-success-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown'>
                    <img src='assets/images/icons/book.png' alt='' />
                  </span>
                </div>
              </div>
              <div className='animation-video' data-aos='zoom-in'>
                <img
                  src='assets/images/thumbs/about-us-five-img4.png'
                  alt=''
                  className='border border-white rounded-circle border-3'
                  data-tilt=''
                />
                <span
                  onClick={() => setIsOpen(true)}
                  className='play-button w-48 h-48 flex-center bg-warning-800 text-white rounded-circle text-xl position-absolute top-50 start-50 translate-middle cursor-pointer'
                  style={{ cursor: 'pointer' }}
                >
                  <i className='ph-fill ph-play' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default CounterFour;
