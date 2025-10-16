"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { myPortfolio } from "@/utils/swiperOptions";

export default function CaseStudies3() {
  return (
    <>
      <section className="case-studies-h5 pt-122 pb-130">
        <div className="tf-container full">
          <div className="row mb-70">
            <div className="col-lg-12">
              <div className="heading-title center w-680 m0-auto">
                <span
                  className="sub-title text-blue1 font-man wow fadeInUpSmall"
                  data-wow-delay=".2s"
                >
                  Latest Case Studies
                </span>
                <h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">
                  Let’s Explore Our Latest Case{" "}
                  <span className="text-blue1 mask">Studies</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...myPortfolio} className="swiper myportfolio">
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="tf-portfolio">
                      <Link href="/case-study-1" className="image">
                        <img
                          src="/assets/images/page/Transportation-PublicTransit.jpg"
                          alt="image"
                        />
                      </Link>
                      <div className="content">
                        <div className="inner-title">
                          <h3 className="title">
                            <Link href="/case-study-1">Transporation</Link>
                          </h3>
                          <p>Web Design &amp; Development</p>
                        </div>
                        <div className="btn-main">
                          <Link href="/case-study-1" className="link-portfolio">
                            <i className="icon-arrow-rights" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-portfolio">
                      <Link href="/case-study-2" className="image">
                        <img
                          src="/assets/images/services/itsm-2.jpg"
                          alt="image"
                        />
                      </Link>
                      <div className="content">
                        <div className="inner-title">
                          <h3 className="title">
                            <Link href="/case-study-2">Telecom  </Link>
                          </h3>
                          <p>ServiceNow-IT service management</p>
                        </div>
                        <div className="btn-main">
                          <Link href="/case-study-2" className="link-portfolio">
                            <i className="icon-arrow-rights" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-portfolio">
                      <Link href="/case-study-3" className="image">
                        <img
                          src="/assets/images/page/Healthcare.jpg"
                          alt="image"
                        />
                      </Link>
                      <div className="content">
                        <div className="inner-title">
                          <h3 className="title">
                            <Link href="/case-study-3"> Healthcare </Link>
                          </h3>
                          <p>Cloud Security</p>
                        </div>
                        <div className="btn-main">
                          <Link href="/case-study-3" className="link-portfolio">
                            <i className="icon-arrow-rights" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
