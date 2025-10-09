"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { myPortfolio } from "@/utils/swiperOptions";
import Contact1 from "@/components/sections/Contact1";
export default function ServiceDetails() {
  const [isTab, setIsTab] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const handleTab = (i) => {
    setIsTab(i);
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  };
  return (
    <>
      <Layout
        src="/assets/images/services/webdevelopment-1.jpg"
        breadcrumbTitle="Web Development Services"
        pageTitle="Design. Develop. Deliver — Modern Applications & Web Experiences."
        headerStyle={1}
        footerStyle={2}
      >
        <div>
          <section className="section-benefit pt-122">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefit-content">
                    <div className="heading-title mb-40">
                      <span className="sub-title texts-blue font-man">
                        Application & Web Development
                      </span>
                      <h2 className="title">
                        Build Modern, Scalable, and Engaging Applications{" "}
                      </h2>
                      <p className="des">
                        From enterprise-grade applications to responsive
                        websites, we design and develop solutions that align
                        with your business goals while ensuring scalability and
                        performance.
                      </p>
                    </div>
                    <img
                      src="/assets/images/services/webdevelopment-2.jpg"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Application Development </h4>
                        </div>
                        <p>
                          Tailored apps that address your unique workflows and
                          challenges.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Web Development</h4>
                        </div>
                        <p>
                          Responsive, SEO-friendly, and user-centric websites.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Agile & Scalable Solutions </h4>
                        </div>
                        <p>
                          Iterative development cycles to deliver fast and adapt
                          to change.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Integration Services</h4>
                        </div>
                        <p>
                          Seamlessly connects applications with third-party
                          systems and APIs.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Scalable Architecture </h4>
                        </div>
                        <p>
                          {" "}
                          Easily upgrade or expand your platform as your traffic
                          or business grows.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-it-manager pt-130 pb-130">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-7">
                  <div className="it-manager-content">
                    <div className="heading-title mb-20">
                      <h2 className="title">Our Web Development Approach</h2>
                    </div>

                    <div className="content-tab-service-details">
                      <p className="des">
                        We combine user-focused design with modern technology
                        stacks to create websites that are not only visually
                        impressive but also functionally powerful and
                        future-ready.
                      </p>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Discovery & Requirements Gathering
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />

                          <p className="font-man">
                            UI/UX Design & Prototyping{" "}
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Agile Development & Testing
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Deployment & Go-Live</p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Support & Maintenance</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="it-manager-image">
                    <img
                      src="/assets/images/services/webdevelopment-3.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-performance pt-122 bg-2">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-title m0-auto center mb-60">
                    <span className="sub-title texts-blue font-man">
                      Drive Digital Presence
                    </span>
                    <h2 className="title">
                      Our Capabilities in App & Web Development
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">01</span>
                    <h4 className="title">
                      Enterprise Applications (ERP, CRM, Custom Business Tools){" "}
                    </h4>
                    <p className="des">
                      Design and develop enterprise-grade solutions that
                      streamline operations, improve productivity, and provide
                      real-time visibility across your organization.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">02</span>
                    <h4 className="title">E-commerce Platforms </h4>
                    <p className="des">
                      Build secure, scalable, and user-friendly e-commerce
                      solutions with seamless payment integration, personalized
                      shopping experiences, and powerful backend management.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">03</span>
                    <h4 className="title">Progressive Web Apps (PWAs) </h4>
                    <p className="des">
                      Deliver fast, reliable, and engaging web applications with
                      offline functionality and app-like experiences that boost
                      customer engagement.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">04</span>
                    <h4 className="title">
                      Cross-platform Mobile Development (React Native, Flutter)
                    </h4>
                    <p className="des">
                      Develop high-performance mobile apps for iOS and Android
                      using modern frameworks, ensuring faster time-to-market
                      with a single codebase.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">05</span>
                    <h4 className="title">API Development & Integration </h4>
                    <p className="des">
                      Enable smooth connectivity between systems and third-party
                      services with robust, scalable, and secure API development
                      and integration.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">06</span>
                    <h4 className="title">Cloud-Native App Development </h4>
                    <p className="des">
                      Leverage microservices and containerized environments to
                      build scalable, resilient, and future-ready applications
                      designed for the cloud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Contact1 hasYellowBg={true} />
        </div>
      </Layout>
    </>
  );
}
