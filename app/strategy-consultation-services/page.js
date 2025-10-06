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
        headerStyle={1}
		footerStyle={2}
        breadcrumbTitle="Strategy and Consultation"
        bgImg={"/assets/images/services/strategy-consultation-services-1.jpg"}
        pageTitle="Empower Growth with Strategic Consulting Services"
      >
        <div>
          <section className="section-benefit pt-122">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefit-content">
                    <div className="heading-title mb-40">
                      <span className="sub-title texts-blue font-man">
                        Best Features Development
                      </span>
                      <h2 className="title">Strategy Consultation Services</h2>
                      <p className="des">
                        {" "}
                        Unlock new opportunities, improve decision-making, and
                        accelerate growth with data-backed, future-ready
                        strategies tailored to your business goals.
                      </p>
                    </div>
                    <img
                      src="/assets/images/services/strategy-consultation-services-2.jpg"
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
                          <h4> Business Growth Planning</h4>
                        </div>
                        <p>
                          {" "}
                          Drive sustainable growth with short- and long-term
                          strategic roadmaps.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Digital Transformation Strategy</h4>
                        </div>
                        <p>
                          {" "}
                          Leverage emerging technologies to innovate and
                          future-proof your operations.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Competitive Market Analysis</h4>
                        </div>
                        <p>
                          {" "}
                          Understand your industry landscape and gain a
                          strategic edge.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Operational Efficiency Optimization</h4>
                        </div>
                        <p>
                          {" "}
                          Streamline processes and cut waste to improve margins
                          and performance.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Customer-Centric Innovation</h4>
                        </div>
                        <p>
                          {" "}
                          Align offerings with real customer needs through
                          market research and design thinking.
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
                      <h2 className="title">
                        Our Strategic Consulting Approach
                      </h2>
                    </div>

                    <div className="content-tab-service-details">
                      <p className="des">
                        We blend industry expertise, data analytics, and
                        business insight to deliver strategies that work in the
                        real world — not just on paper.
                      </p>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Business Assessment & SWOT Analysis
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Vision, Mission & Goal Alignment
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Data-Driven Strategy Formulation
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Change Management Planning</p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Execution Roadmap & Governance
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="it-manager-image">
                    <img
                      src="/assets/images/services/strategy-consultation-services-3.jpg"
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
                      Drive Leadership
                    </span>
                    <h2 className="title">
                      Our Capabilities in Strategy Consulting
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">01</span>
                    <h4 className="title">Business & Corporate Strategy</h4>
                    <p className="des">
                      Align your organization for growth, profitability, and
                      market leadership.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">02</span>
                    <h4 className="title">Go-to-Market (GTM) Strategy</h4>
                    <p className="des">
                      Launch products and services with maximum impact through
                      well-planned GTM blueprints.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">03</span>
                    <h4 className="title">Digital Strategy</h4>
                    <p className="des">
                      Craft transformation plans to adopt new tech, tools, and
                      digital workflows.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">04</span>
                    <h4 className="title">Brand & Positioning Strategy</h4>
                    <p className="des">
                      Define or refine your brand identity, voice, and value
                      proposition for a competitive edge.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">05</span>
                    <h4 className="title">M&A & Expansion Strategy</h4>
                    <p className="des">
                      Make confident decisions around mergers, partnerships, or
                      entering new markets.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">06</span>
                    <h4 className="title">Innovation & Product Strategy</h4>
                    <p className="des">
                      Design the future of your products using innovation
                      frameworks and customer feedback loops.
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
