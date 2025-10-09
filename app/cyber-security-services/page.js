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
                            Security Audit & Risk Analysis
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            implementation & Tools Integration
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
                    <h4 className="title">
                      Vulnerability Assessments & Penetration Testing{" "}
                    </h4>
                    <p className="des">
                      Identify, test, and remediate weaknesses across
                      applications, networks, and infrastructure with systematic
                      vulnerability scanning and real-world simulated attack
                      scenarios.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">02</span>
                    <h4 className="title">
                      Endpoint Security & Mobile Device Protection{" "}
                    </h4>
                    <p className="des">
                      Secure every device, from laptops to mobile phones, with
                      next-gen antivirus, endpoint detection & response (EDR),
                      and mobile device management solutions that stop threats
                      at the source.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">03</span>
                    <h4 className="title">
                      Application, Infrastructure & Data Security{" "}
                    </h4>
                    <p className="des">
                      Protect critical business networks from external and
                      internal threats with advanced firewalls, intrusion
                      detection, and prevention systems that ensure continuous
                      availability and secure connectivity.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">04</span>
                    <h4 className="title">Identity & Access Management</h4>
                    <p className="des">
                      Enable the right access for the right users with
                      zero-trust frameworks, multi-factor authentication (MFA),
                      and role-based access controls, minimizing insider threats
                      and unauthorized entry.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">05</span>
                    <h4 className="title">Cloud Security Solutions </h4>
                    <p className="des">
                      Safeguard cloud environments with encryption, identity
                      controls, and compliance-ready architectures — ensuring
                      secure operations across AWS, Azure, GCP, and hybrid
                      platforms.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">06</span>
                    <h4 className="title">
                      Security Operations Center (SOC) & SIEM Solutions{" "}
                    </h4>
                    <p className="des">
                      Get 24/7 visibility into your IT environment with
                      centralized monitoring, threat intelligence, and automated
                      incident response powered by SOC teams and advanced SIEM
                      platforms.
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
