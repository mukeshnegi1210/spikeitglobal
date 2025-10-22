"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { sliderSwiperIt } from "@/utils/swiperOptions";

export default function MainSlider1() {
  return (
    <>
      <section className="swiper slider-Swiper-it relative">
        <Swiper {...sliderSwiperIt} className="swiper-wrapper">
          <SwiperSlide>
            <div className="slider-it-main relative over overflow-hiden">
              <div className="slider-image-it">
                <img src="/assets/images/home/cloud-tranformation.jpg" alt="" />
              </div>
              <span className="it-solution fw-600">Cloud Tranformation</span>

              <div className="tf-container">
                <div className="slider-content-it relative z-index-3">
                  <div className="sub-title-slider wow fadeInUpSmall">
                    <i className="icon-angle-downs " />
                    <span className="fw-600 text-white font-man">
                      Accelerate Your Cloud Transformation with SpikeIT{" "}
                    </span>
                  </div>
                  <h1
                    className="title-slider text-white wow fadeInUpSmall"
                    data-wow-delay=".2s"
                  >
                    We Move You to the Cloud <br /> Smarter , Safer, Faster
                  </h1>

                  <div
                    className="btn-main wow fadeInUpSmall"
                    data-wow-delay=".4s"
                  >
                    <Link href="/cloud-services" className="button-src ">
                      Know More
                      <i className="icon-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-it-main relative over overflow-hiden">
              <div className="slider-image-it">
                <img src="/assets/images/home/digital-tranformation.jpg" alt="" />
              </div>
              <span className="it-solution fw-600">Digital Tranformation</span>

              <div className="tf-container">
                <div className="slider-content-it relative z-index-3">
                  <h1
                    className="title-slider text-white wow fadeInUpSmall"
                    data-wow-delay=".2s"
                  >
                    Empowering Businesses Through <br /> Digital Transformation
                  </h1>

                  <div
                    className="btn-main wow fadeInUpSmall"
                    data-wow-delay=".4s"
                  >
                    <Link
                      href="/web-development-services"
                      className="button-src"
                    >
                      Explore Our Service <i className="icon-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-it-main relative over overflow-hiden">
              <div className="slider-image-it">
                <img src="/assets/images/home/itsm.jpg" alt="" />
              </div>
              <span className="it-solution fw-600">ServiceNow</span>

              <div className="tf-container">
                <div className="slider-content-it relative z-index-3">
                  <h1
                    className="title-slider text-white wow fadeInUpSmall"
                    data-wow-delay=".2s"
                  >
                    Service Excellence Delivered
                    <br /> Official ServiceNow Partner
                  </h1>

                  <div
                    className="btn-main wow fadeInUpSmall"
                    data-wow-delay=".4s"
                  >
                    <Link href="/itsm-services" className="button-src">
                      Explore Our Service <i className="icon-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="button-swiper">
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>
    </>
  );
}
