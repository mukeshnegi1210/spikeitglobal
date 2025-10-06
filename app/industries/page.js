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
        breadcrumbTitle="Industries"
        bgImg="/assets/images/services/infrastructure-2.jpg"
        pageTitle="Transforming Key Industries with Technology and Innovation"
      >
        <section
          className="partnership-section light section-partner-h2"
          id="Transportation"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="/assets/images/page/Amazon_Web_Services-dark.png"
                  alt="image"
                />
              </div>
              <div className="col-md-6">
                <h2 className="mb-4">Transportation & Public Transit </h2>
                <p>
                  SpikeIT is redefining{" "}
                  <strong className="fw-700">
                    transportation and public transit
                  </strong>{" "}
                  by modernizing legacy systems with cloud-first solutions on
                  AWS, Azure, and Google Cloud. Through{" "}
                  <strong className="fw-700">ServiceNow ITSM and ITOM</strong>,
                  we streamline asset management, incident response, and service
                  delivery for transit authorities. Our Data & AI capabilities
                  enable predictive maintenance, route optimization, and
                  passenger flow insights, ensuring reliability and efficiency.
                  With{" "}
                  <strong className="fw-700">cybersecurity services</strong> at
                  the core, we safeguard critical infrastructure and commuter
                  data, enabling safe, connected, and future-ready transit
                  ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="partnership-section section-partner dark"
          id="Healthcare"
        >
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <h2 className="mb-4">Healthcare </h2>
                <p>
                  In <strong className="fw-700">healthcare</strong>, SpikeIT
                  empowers providers to deliver better patient outcomes through{" "}
                  <strong className="fw-700">digital transformation</strong>.
                  Our
                  <strong className="fw-700">
                    {" "}
                    ServiceNow healthcare workflows
                  </strong>{" "}
                  improve patient intake, staff coordination, and compliance
                  tracking, while{" "}
                  <strong className="fw-700">cloud-first adoption</strong>{" "}
                  accelerates interoperability and secure data exchange.
                  Leveraging <strong className="fw-700"> Data & AI</strong>, we
                  enable predictive diagnostics, personalized patient care, and
                  advanced analytics to reduce operational costs. Combined with
                  our{" "}
                  <strong className="fw-700">cybersecurity expertise</strong>,
                  we ensure HIPAA compliance and robust protection of sensitive
                  patient records — making healthcare smarter, faster, and more
                  secure.
                </p>
              </div>
              <div className="col-md-6  order-1 order-md-2">
                <img src="/assets/images/page/google.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="partnership-section section-partner-h2"
          id="LifeSciencesPharma"
        >
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6">
                <img
                  src="/assets/images/page/Microsoft_Azure-Logo.wine.png"
                  alt="image"
                />
              </div>
              <div className="col-md-6">
                <h2 className="mb-4">Life Sciences & Pharma </h2>
                <p>
                  SpikeIT accelerates innovation in{" "}
                  <strong className="fw-700">
                    life sciences and pharmaceuticals
                  </strong>{" "}
                  by digitizing research, clinical trials, and regulatory
                  processes. Our{" "}
                  <strong className="fw-700">cloud platforms</strong> (AWS,
                  Azure, Google) provide scalable compute for high-performance
                  drug discovery and data management. With{" "}
                  <strong className="fw-700">ServiceNow workflows</strong>, we
                  streamline R&D, quality control, and regulatory approvals,
                  reducing time-to-market. Our{" "}
                  <strong className="fw-700">
                    AI and machine learning solutions
                  </strong>{" "}
                  enhance clinical trial monitoring and drug efficacy analysis,
                  while
                  <strong className="fw-700">
                    cybersecurity services
                  </strong>{" "}
                  ensure the integrity of intellectual property and compliance
                  with stringent global standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="partnership-section section-partner dark"
          id="BankingFinancialServices"
        >
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <h2 className="mb-4">Banking & Financial Services </h2>
                <p>
                  In the{" "}
                  <strong className="fw-700">
                    banking and financial sector
                  </strong>
                  , SpikeIT drives{" "}
                  <strong className="fw-700">
                    secure, agile, and customer-centric digital transformation
                  </strong>
                  . We enable
                  <strong className="fw-700">cloud-first adoption</strong> to
                  modernize core banking platforms, support real-time payments,
                  and enhance mobile banking experiences.{" "}
                  <strong className="fw-700">ServiceNow solutions</strong>{" "}
                  streamline risk management, compliance, IT operations, and
                  customer service. By applying
                  <strong className="fw-700"> Data & AI</strong>, we deliver
                  predictive fraud detection, credit risk modeling, and
                  personalized financial insights. Our
                  <strong className="fw-700">
                    cybersecurity framework
                  </strong>{" "}
                  ensures adherence to regulatory mandates, secures
                  transactions, and strengthens trust in every customer
                  interaction.
                </p>
              </div>
              <div className="col-md-6  order-1 order-md-2">
                <img src="/assets/images/page/google.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="partnership-section light section-partner-h2"
          id="MediaEntertainment"
        >
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-6  order-2 order-md-1">
                <h2 className="mb-4">Media & Entertainment </h2>
                <p>
                  SpikeIT supports{" "}
                  <strong className="fw-700">
                    media and entertainment companies
                  </strong>{" "}
                  in transforming operations for the digital era. We help
                  streamline{" "}
                  <strong className="fw-700">
                    content management, digital asset workflows, and customer
                    engagement
                  </strong>{" "}
                  with ServiceNow-powered solutions. Leveraging{" "}
                  <strong className="fw-700">cloud-first platforms</strong>, we
                  enable high-speed content delivery, scalable streaming, and
                  global collaboration. With
                  <strong className="fw-700"> AI-driven analytics</strong>, we
                  unlock audience insights, sentiment analysis, and targeted
                  advertising strategies to maximize ROI. Our{" "}
                  <strong className="fw-700">cybersecurity services</strong>{" "}
                  protect intellectual property, secure distribution channels,
                  and mitigate piracy risks — ensuring media companies stay
                  competitive and future-ready in a rapidly evolving landscape.
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
