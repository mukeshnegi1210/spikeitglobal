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
        pageTitle="Redefine Cloud Services for Scalable Success"
        bgImg="/assets/images/services/cloud-service-1.jpg"
        breadcrumbTitle="Cloud Services"
      >
        <section className="section-benefit pt-122">
          <div className="tf-container">
            <div className="row">
              <div className="col-md-6">
                <div className="benefit-content">
                  <div className="heading-title mb-40">
                    <span className="sub-title texts-blue font-man">
                      Best Features Development
                    </span>
                    <h2 className="title">Cloud Services</h2>
                    <p className="des">
                      {" "}
                      Empower your organization with secure, scalable, and
                      cost-efficient cloud solutions tailored to meet business
                      demands — from migration to optimization.
                    </p>
                  </div>
                  <img
                    src="/assets/images/services/cloud-service-2.jpg"
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
                        <h4>Secure Infrastructure</h4>
                      </div>
                      <p>
                        {" "}
                        Protect data with robust cloud security, encryption, and
                        compliance standards.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4> Scalability & Flexibility</h4>
                      </div>
                      <p>
                        {" "}
                        Rapidly scale resources up or down to meet changing
                        demands without disrupting operations.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4>Cost Optimization</h4>
                      </div>
                      <p>
                        Pay only for what you use and get the most out of your
                        cloud investments.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4> Seamless Integration</h4>
                      </div>
                      <p>
                        {" "}
                        Connect cloud environments with existing systems and
                        applications for streamlined workflows.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4> Global Accessibility</h4>
                      </div>
                      <p>
                        {" "}
                        Access your data and applications from anywhere, anytime
                        — empowering a truly remote-ready organization.
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
                    {/* <span className="sub-title texts-blue font-man">Our ITSM Implementation Approach</span> */}
                    <h2 className="title">Our Cloud Implementation Approach</h2>
                  </div>

                  <div className="content-tab-service-details">
                    <p className="des">
                      We provide end-to-end cloud consulting, migration, and
                      support to ensure seamless transition and ongoing
                      optimization. Our experts help you choose the right
                      platform, architect secure cloud solutions, and support
                      continuous innovation.
                    </p>
                    <ul className="icon-listing">
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <p className="font-man">Assessment & Cloud Readiness</p>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <p className="font-man">Architecture & Planning</p>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <p className="font-man">Migration & Deployment</p>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <p className="font-man">Integration & Optimization</p>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <p className="font-man">Support & Maintenance</p>
                      </li>
                    </ul>
                    {/* <Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link> */}
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="it-manager-image">
                  <img
                    src="/assets/images/services/cloud-service-3.jpg"
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
                    Drive Performance
                  </span>
                  <h2 className="title">Our Capabilities in Cloud Solutions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">01</span>
                  <h4 className="title">
                    <Link href="/#">Cloud Migration Services</Link>
                  </h4>
                  <p className="des">
                    End-to-end migration from on-premises to public, private, or
                    hybrid cloud platforms like AWS, Azure, and GCP.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">02</span>
                  <h4 className="title">
                    <Link href="/#"> Infrastructure as a Service (IaaS)</Link>
                  </h4>
                  <p className="des">
                    Virtualized computing resources tailored to scale — reducing
                    hardware dependency.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">03</span>
                  <h4 className="title">
                    <Link href="/#">Platform as a Service (PaaS)</Link>
                  </h4>
                  <p className="des">
                    Accelerate development with managed platforms for building,
                    testing, and deploying applications.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">04</span>
                  <h4 className="title">
                    <Link href="/#">Software as a Service (SaaS)</Link>
                  </h4>
                  <p className="des">
                    Deliver cloud-hosted applications to users over the internet
                    — cost-effective and always up-to-date.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">05</span>
                  <h4 className="title">
                    <Link href="/#"> Hybrid & Multi-Cloud Architecture</Link>
                  </h4>
                  <p className="des">
                    Balance workloads between cloud and on-prem with secure,
                    flexible hybrid or multi-cloud setups.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">06</span>
                  <h4 className="title">
                    <Link href="/#">Cloud Security & Compliance</Link>
                  </h4>
                  <p className="des">
                    Advanced protection against breaches, with adherence to
                    GDPR, HIPAA, ISO, and other regulatory standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact1 hasYellowBg={true} />
      </Layout>
    </>
  );
}
