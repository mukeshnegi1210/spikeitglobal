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
        breadcrumbTitle="Cyber Security Services"
        src="/assets/images/services/cybersecurity-1.jpg"
        pageTitle="Secure Your Digital Future with Cyber Security Services"
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
                      <h2 className="title">Cybersecurity Services</h2>
                      <p className="des">
                        Protect your digital assets, infrastructure, and
                        sensitive data with enterprise-grade cybersecurity
                        solutions — built to detect, defend, and respond to
                        ever-evolving threats.
                      </p>
                    </div>
                    <img
                      src="/assets/images/services/cybersecurity-3.jpg"
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
                          <h4>End-to-End Protection</h4>
                        </div>
                        <p>
                          {" "}
                          Comprehensive security across endpoints, networks,
                          cloud, and applications.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Threat Detection & Response</h4>
                        </div>
                        <p>
                          Identify and neutralize threats in real-time with
                          advanced SIEM and SOC capabilities.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Zero Trust Architecture </h4>
                        </div>
                        <p>
                          Ensure users and devices are verified continuously
                          before granting access.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Regulatory Compliance </h4>
                        </div>
                        <p>
                          {" "}
                          Meet GDPR, HIPAA, ISO 27001, and other global
                          cybersecurity standards.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Risk Assessment & Management</h4>
                        </div>
                        <p>
                          {" "}
                          Uncover vulnerabilities and mitigate risks proactively
                          with continuous assessment.
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
                        Our Cybersecurity Implementation Approach
                      </h2>
                    </div>

                    <div className="content-tab-service-details">
                      <p className="des">
                        We help organizations strengthen their security posture
                        through a structured, multi-layered defense strategy —
                        aligned to business objectives and industry regulations.
                      </p>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Security Audit & Gap Analysis
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Architecture Design & Policy Setup
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Tools Deployment (EDR, SIEM, MFA)
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Threat Monitoring & Incident Response
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Compliance Reporting & Ongoing Support
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="it-manager-image">
                    <img
                      src="/assets/images/services/cybersecurity-2.jpg"
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
                      Drive Protection
                    </span>
                    <h2 className="title">
                      Our Capabilities in Cybersecurity Services
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">01</span>
                    <h4 className="title">Security Operations Center (SOC)</h4>
                    <p className="des">
                      24/7 threat monitoring, log analysis, and rapid incident
                      response through centralized security operations.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">02</span>
                    <h4 className="title">
                      Identity & Access Management (IAM)
                    </h4>
                    <p className="des">
                      Secure access with single sign-on, multi-factor
                      authentication, and least-privilege access controls.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">03</span>
                    <h4 className="title">Network & Endpoint Security</h4>
                    <p className="des">
                      Protect users and devices with firewalls, antivirus,
                      intrusion prevention, and endpoint detection and response
                      (EDR).
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">04</span>
                    <h4 className="title">Cloud Security Services</h4>
                    <p className="des">
                      Safeguard cloud environments (AWS, Azure, GCP) with
                      visibility, compliance, and access controls.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">05</span>
                    <h4 className="title">
                      Penetration Testing & Vulnerability Scanning
                    </h4>
                    <p className="des">
                      Simulate attacks to uncover weaknesses and ensure systems
                      are resilient against real threats.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">06</span>
                    <h4 className="title">Compliance & Data Privacy</h4>
                    <p className="des">
                      Implement frameworks that meet regulatory requirements —
                      PCI DSS, HIPAA, SOC 2, etc.
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
