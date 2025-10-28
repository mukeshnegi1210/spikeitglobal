"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Keyboard, EffectFade, Autoplay } from "swiper/modules"; // ✅ use modules
import "swiper/css";
import "swiper/css/navigation";

export default function MainSlider1() {
  return (
    <section className="banner-slider">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoHeight={true}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 4000, // 4 seconds between slides
          disableOnInteraction: false, // keeps autoplay running after user interaction
          pauseOnMouseEnter: true, // ✅ pauses autoplay when user hovers
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Slides */}
        <SwiperSlide>
          <div className="slide relative">
            <div className="slide-img">
              <img src="/assets/images/home/cloud2.jpg" alt="Cloud" />
            </div>
            <span className="floating-text">Cloud Transformation</span>
            <div className="banner-content">
              <div className="slider-sub-title wow fadeInUpSmall">
                <i className="icon-angle-downs " />
                <span className="fw-600 text-white font-man">
                  Accelerate Your Cloud Transformation with SpikeIT{" "}
                </span>
              </div>
              <h1 className="title-slider text-white wow fadeInUpSmall">
                We Move You to the Cloud <br /> Smarter, Safer, Faster
              </h1>
              <div className="btn-main wow fadeInUpSmall">
                <Link href="/cloud-services" className="button-src">
                  Know More
                  <i className="icon-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide relative">
            <div className="slide-img">
              <img
                src="/assets/images/home/digital-tranformation.jpg"
                alt="Digital Transformation"
              />
            </div>
            <span className="floating-text">Digital Transformation</span>
            <div className="banner-content">
              <h1 className="title-slider text-white wow fadeInUpSmall">
                Transform Data into Decisions <br /> Accelerate Your AI Journey
                with SpikeIT
              </h1>
              <div className="btn-main wow fadeInUpSmall">
                <Link href="/web-development-services" className="button-src">
                  Know More
                  <i className="icon-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide relative">
            <div className="slide-img">
              <img src="/assets/images/home/itsm.jpg" alt="ServiceNow" />
            </div>
            <span className="floating-text">ServiceNow</span>
            <div className="banner-content">
              <h1 className="title-slider text-white wow fadeInUpSmall">
                Service Excellence Delivered <br /> Official ServiceNow Partner
              </h1>
              <div className="btn-main wow fadeInUpSmall">
                <Link href="/itsm-services" className="button-src">
                  Know More
                  <i className="icon-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons (class-based) */}
      <div className="banner-slider-navigations">
        <div className="custom-swiper-button custom-swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="custom-swiper-button custom-swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
