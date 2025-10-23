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
                <img
                  // src="https://media.istockphoto.com/id/2153255067/photo/cloud-computing-security-service-big-data-technology-concept.jpg?s=2048x2048&w=is&k=20&c=UySC-qXD3sPjLCY4EwH1vgMbBZs-cCLOizHRYTYeU94="

                  // src="https://media.istockphoto.com/id/1432660477/photo/cloud-computing-technology-big-data-concept.jpg?s=2048x2048&w=is&k=20&c=EgJOO2ljOASGZB8m6wAYpIiGnsLee97BJ0wlBTxkmtE="

                  src="/assets/images/home/cloud2.jpg"
                  alt=""
                />
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
                <img src="https://media.istockphoto.com/id/2214689031/photo/person-using-laptop-with-ai-content-generator-interaction-with-the-ai-assistant-to-solve-some.jpg?s=2048x2048&w=is&k=20&c=mdwYIM_VSPFdxt7Fxa5X4rMRVKtiF80juoaZ5acFWIg=" />
              </div>
              <span className="it-solution fw-600">Digital Tranformation</span>

              <div className="tf-container">
                <div className="slider-content-it relative z-index-3">
                  <h1
                    className="title-slider text-white wow fadeInUpSmall"
                    data-wow-delay=".2s"
                  >
                    Transform Data into Decisions <br /> Accelerate Your AI
                    Journey with SpikeIT
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
                <img
                  //  src="/assets/images/home/itsm.jpg"
                  src=" https://media.istockphoto.com/id/928453496/photo/her-presentation-is-perfect.jpg?s=2048x2048&w=is&k=20&c=btNRoV-fNtD4gE5mlFdrWvxx9RLKW3pg7vKMGq8d5OY="
                  alt=""
                />
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
