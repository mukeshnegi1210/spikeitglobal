"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

import Contact1 from "@/components/sections/Contact1";
export default function ServiceDetails() {
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
                      Cloud Transformation
                    </span>
                    <h2 className="title">
                      Empower Your Business with Cloud Transformation{" "}
                    </h2>
                    <p className="des">
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
                        Protect data with enterprise-grade cloud security,
                        encryption, and compliance frameworks.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4> Scalability & Flexibility</h4>
                      </div>
                      <p>
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
                        Pay only for what you use while maximizing the return on
                        your cloud investments.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4> Seamless Integration</h4>
                      </div>
                      <p>
                        Connect cloud environments with existing systems and
                        applications for smooth workflows.
                      </p>
                    </li>
                    <li>
                      <div className="flex-three">
                        <i className="icon-Check" />
                        <h4> Global Accessibility</h4>
                      </div>
                      <p>
                        Access data and applications from anywhere, enabling a
                        remote-ready workforce.
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
                      We provide end-to-end consulting, migration, and support
                      to ensure seamless transitions and continuous
                      optimization.
                    </p>
                    <ul className="icon-listing">
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <div>
                          <h6>Assessment & Cloud Readiness</h6>
                          <p>
                            Evaluate current infrastructure and define cloud
                            strategy
                          </p>
                        </div>
                      </li>

                      <li className="flex-three">
                        <i className="icon-Check" />
                        <div>
                          <h6>Architecture & Planning</h6>
                          <p>
                            Design secure, scalable, and high-performing cloud
                            environments
                          </p>
                        </div>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <div>
                          <h6>Migration & Deployment</h6>
                          <p>
                            Execute smooth transitions with minimal downtime
                          </p>
                        </div>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <div>
                          <h6>Integration & Optimization</h6>
                          <p>
                            Connect cloud systems with business applications for
                            efficiency
                          </p>
                        </div>
                      </li>
                      <li className="flex-three">
                        <i className="icon-Check" />
                        <div>
                          <h6>Support & Maintenance</h6>
                          <p>
                            Provide 24/7 monitoring, updates, and continuous
                            improvement
                          </p>
                        </div>
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
                  <h4 className="title">Cloud Strategy & Modernization</h4>
                  <p className="des">
                    End-to-end consulting and cloud readiness assessments to
                    define tailored adoption strategies. We modernize legacy
                    systems into secure, scalable, and cost-optimized cloud
                    environments across AWS, Azure, and Google Cloud.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">02</span>
                  <h4 className="title">Cloud Migration & Deployment</h4>
                  <p className="des">
                    Seamless migration of applications, infrastructure, and data
                    to the cloud with minimal downtime. Using proven frameworks
                    and automation, we accelerate time-to-value while ensuring
                    performance and business continuity.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">03</span>
                  <h4 className="title">
                    Cloud-Native Application Development & DevOps{" "}
                  </h4>
                  <p className="des">
                    Design and build cloud-native applications using
                    microservices, APIs, and containerization. Our DevOps and
                    CI/CD pipelines enable faster releases, agility, and
                    continuous improvement for digital-first enterprises.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">04</span>
                  <h4 className="title"> Data & AI on Cloud</h4>
                  <p className="des">
                    Unlock insights with cloud-based analytics, AI, and machine
                    learning. From building data lakes and warehouses to
                    predictive analytics and intelligent automation, we help
                    organizations turn data into competitive advantage.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">05</span>
                  <h4 className="title">ServiceNow on Cloud</h4>
                  <p className="des">
                    As an official ServiceNow Partner, we deliver workflow
                    automation and service management solutions (ITSM, ITOM,
                    HRSD, GRC, SecOps) on the cloud — streamlining operations,
                    improving service quality, and enhancing user experiences.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 mb-30">
                <div className="tf-performance">
                  <span className="number">06</span>
                  <h4 className="title"> Cloud Security & Managed Services</h4>
                  <p className="des">
                    Protect cloud investments with end-to-end cybersecurity,
                    compliance frameworks, and 24/7 monitoring. Our managed
                    services cover patching, optimization, and FinOps governance
                    to ensure security, efficiency, and continuous improvement.
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
