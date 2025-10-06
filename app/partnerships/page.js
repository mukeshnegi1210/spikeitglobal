"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { myPortfolio } from "@/utils/swiperOptions";
export default function ServiceDetails() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Partnerships"
        bgImg="/assets/images/services/infrastructure-2.jpg"
        pageTitle="Partnering with AWS, Google, Azure, and ServiceNow to power innovation and digital transformation"
      >
        <section className="partnership-section light section-partner-h2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="/assets/images/page/Amazon_Web_Services-dark.png"
                  alt="image"
                />
              </div>
              <div className="col-md-6">
                <h2 className="mb-4">AWS</h2>
                <p>
                  Harness the capabilities of Amazon Web Services (AWS) to
                  accelerate innovation with secure, scalable, and reliable
                  cloud solutions. From personalized customer experiences to
                  modernizing operations and enhancing engagement, AWS offers
                  powerful AI services that integrate seamlessly into your
                  business. Through our partnership with AWS, SPIKE IT delivers
                  cloud-driven intelligence tailored to your unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="partnership-section section-partner dark">
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <h2 className="mb-4">Google</h2>
                <p>
                  Google offers a comprehensive suite of AI and machine learning
                  services designed to help businesses integrate advanced AI
                  capabilities into their operations. These services enable
                  tasks such as image and video analysis, natural language
                  processing, and speech recognition. By partnering with Google,
                  we deliver AI technologies tailored to your specific needs,
                  empowering your digital journey with cutting-edge tools and
                  platforms.
                </p>
              </div>
              <div className="col-md-6  order-1 order-md-2">
                <img src="/assets/images/page/google.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section className="partnership-section section-partner-h2">
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6">
                <img
                  src="/assets/images/page/Microsoft_Azure-Logo.wine.png"
                  alt="image"
                />
              </div>
              <div className="col-md-6">
                <h2 className="mb-4">Microsoft Azure</h2>
                <p>
                  Unlock the potential of Microsoft Azure to build, deploy, and
                  scale applications with unmatched flexibility and security.
                  Azure’s advanced AI, analytics, and cloud-native services
                  empower organizations to innovate faster, optimize operations,
                  and make smarter business decisions. Partnering with Azure,
                  SPIKE IT delivers customized cloud solutions that accelerate
                  digital transformation and help businesses stay ahead in a
                  competitive landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="partnership-section light section-partner-h2">
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6  order-2 order-md-1">
                <h2 className="mb-4">ServiceNow</h2>
                <p>
                  As an official ServiceNow Partner, SpikeIT helps enterprises
                  accelerate digital transformation by implementing ServiceNow’s
                  powerful platforms and solutions, including IT Service
                  Management (ITSM), IT Operations Management (ITOM), HR Service
                  Delivery (HRSD), Governance, Risk & Compliance (GRC), and
                  Security Operations (SecOps). By automating workflows,
                  simplifying IT operations, and integrating processes across
                  the enterprise, we empower organizations to boost
                  productivity, reduce costs, strengthen compliance, and deliver
                  seamless employee and customer experiences.
                </p>
              </div>
              <div className="col-md-6  order-1 order-md-2 ">
                <img src="/assets/images/page/servicenow.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
