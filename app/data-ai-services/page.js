"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Contact1 from "@/components/sections/Contact1";
export default function ServiceDetails() {
  
  return (
    <>
      <Layout
        headerStyle={1}
        breadcrumbTitle="Data and AI Services"
        bgImg="/assets/images/services/data-ai-2.jpg"
        pageTitle="Unlock Business Intelligence with Data & AI Services"
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
                      <h2 className="title">Data and AI Services</h2>
                      <p className="des">
                        Leverage the power of artificial intelligence, machine
                        learning, and advanced analytics to drive innovation,
                        automation, and strategic decisions across your
                        enterprise.{" "}
                      </p>
                    </div>
                    <img
                      src="/assets/images/services/data-ai-3.jpg"
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
                          <h4>Data-Driven Decisions</h4>
                        </div>
                        <p>
                          Empower teams with insights derived from structured
                          and unstructured data.{" "}
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>AI-Powered Automation </h4>
                        </div>
                        <p>
                          {" "}
                          Streamline workflows and reduce manual intervention
                          with intelligent automation.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Real-Time Analytics </h4>
                        </div>
                        <p>
                          {" "}
                          Enable quick decision-making with real-time data
                          pipelines and dashboards.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Predictive Intelligence </h4>
                        </div>
                        <p>
                          {" "}
                          Anticipate trends, behaviors, and risks using machine
                          learning algorithms.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Data Governance</h4>
                        </div>
                        <p>
                          Ensure data quality, consistency, and compliance with
                          robust governance frameworks.
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
                        Our Data & AI Implementation Approach
                      </h2>
                    </div>

                    <div className="content-tab-service-details">
                      <p className="des">
                        We help organizations harness the full value of their
                        data with end-to-end data lifecycle management — from
                        strategy and architecture to modeling and AI solution
                        delivery.
                      </p>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Data Strategy & Roadmap</p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Architecture & Data Engineering
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            AI, Machine Learning & Model Development
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Visualization & Reporting</p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Governance, Compliance & Continuous Monitoring{" "}
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">Discovery & Assessment </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="it-manager-image">
                    <img
                      src="/assets/images/services/data-ai-1.jpg"
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
                    <h2 className="title">Our Capabilities in Data & AI</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">01</span>
                    <h4 className="title">Data Engineering & Warehousing </h4>
                    <p className="des">
                      Design and build scalable data lakes and warehouses to
                      store, organize, and manage enterprise data.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">02</span>
                    <h4 className="title">
                      Business Intelligence & Reporting{" "}
                    </h4>
                    <p className="des">
                      Transform raw data into actionable dashboards using tools
                      like Power BI, Tableau, and Looker.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">03</span>
                    <h4 className="title">AI & Machine Learning Solutions</h4>
                    <p className="des">
                      Develop predictive and intelligent models that identify
                      patterns, forecast outcomes, and enable smarter
                      decision-making across industries
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">04</span>
                    <h4 className="title">NLP & Conversational AI </h4>
                    <p className="des">
                      Leverage natural language processing to power chatbots,
                      virtual assistants, and text analytics — enhancing
                      customer engagement and operational efficiency.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">05</span>
                    <h4 className="title">Computer Vision Solutions </h4>
                    <p className="des">
                      Use AI-powered image and video recognition to automate
                      inspections, improve security, and enable advanced use
                      cases such as facial recognition and object detection
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-30">
                  <div className="tf-performance">
                    <span className="number">06</span>
                    <h4 className="title">MLOps & Model Deployment</h4>
                    <p className="des">
                      Automate model training, testing, deployment, and
                      monitoring for scalable AI adoption.
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
