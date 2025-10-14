"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

import Contact1 from "@/components/sections/Contact1";
export default function ServiceDetails() {
  return (
    <>
      <Layout
        src="/assets/images/services/itsm-1.jpg"
        breadcrumbTitle="IT Management Services"
        pageTitle="Next-Level Service Management. Powered by ServiceNow"
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
                        Best Features Development
                      </span>
                      <h2 className="title">IT Service Management (ITSM)</h2>
                      <p className="des">
                        {" "}
                        Empower your organization with automated workflows,
                        integrated platforms, and strategic IT operations —
                        powered by ServiceNow expertise.
                      </p>
                    </div>
                    <img src="/assets/images/services/itsm-2.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Centralized Service Delivery</h4>
                        </div>
                        <p>
                          {" "}
                          Bring together incident, problem, change, and request
                          workflows on a single unified platform.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Faster Resolution & Automation</h4>
                        </div>
                        <p>
                          {" "}
                          Reduce response times using embedded workflows,
                          predictive intelligence (NLP/ML), and AI‑powered
                          recommendations.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Increased Visibility & Control</h4>
                        </div>
                        <p>
                          Gain insights through dashboards like Agent Workspace,
                          Vendor Manager Workspace, and Service Owner Workspace.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Proactive Intelligence</h4>
                        </div>
                        <p>
                          {" "}
                          Leverage health log analytics, predictive AIOps, and
                          service mapping to prevent outages.
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
                      <h2 className="title">
                        Our ITSM Implementation Approach
                      </h2>
                    </div>

                    <div className="content-tab-service-details">
                      <p className="des">
                        We deliver tailored ITSM solutions to streamline service
                        delivery and enhance user experience. By leveraging
                        platforms like ServiceNow, we ensure efficient,
                        transparent, and scalable IT operations. Our approach
                        empowers businesses to reduce downtime and focus on
                        strategic growth.
                      </p>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">IT Assessment & Strategy</p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Module Implementation</p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            AI & Automation Integration
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Adoption & Support</p>
                        </li>
                      </ul>
                      {/* <Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="it-manager-image">
                    <img src="/assets/images/Services/itsm-3.jpg" alt="image" />
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
                    <h2 className="title">
                      Our Capabilities with ServiceNow Modules
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">01</span>
                    <h4 className="title">
                      <Link href="/#">IT Service Management (ITSM)</Link>
                    </h4>
                    <p className="des">
                      Harness the power of data using efficient and automated IT
                      workflows to enhance productivity and promote agile
                      decision-making.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">02</span>
                    <h4 className="title">
                      <Link href="/#">Customer Service Management (CSM)</Link>
                    </h4>
                    <p className="des">
                      Leverage integrated dashboards and omnichannel views to
                      streamline customer support, improve satisfaction, and
                      accelerate query resolution.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">03</span>
                    <h4 className="title">
                      <Link href="/#">IT Operations Management (ITOM)</Link>
                    </h4>
                    <p className="des">
                      Enable operational agility with complete visibility into
                      your infrastructure, enabling faster root cause
                      identification and proactive incident response.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">04</span>
                    <h4 className="title">
                      <Link href="/#">IT Asset Management (ITAM)</Link>
                    </h4>
                    <p className="des">
                      Track, manage, and optimize your hardware and software
                      assets through their entire lifecycle—from procurement to
                      retirement.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">05</span>
                    <h4 className="title">
                      <Link href="/#">Security Operations (SecOps)</Link>
                    </h4>
                    <p className="des">
                      Maintain business continuity with real-time visibility
                      into security incidents, automated risk assessments, and
                      prioritized threat response workflows.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">06</span>
                    <h4 className="title">
                      <Link href="/#">
                        Governance, Risk, and Compliance (GRC)
                      </Link>
                    </h4>
                    <p className="des">
                      Strengthen governance with automated risk assessments,
                      real-time compliance tracking, and streamlined audit
                      workflows.
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
