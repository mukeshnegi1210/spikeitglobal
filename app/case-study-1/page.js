import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function CaseStudy() {
  return (
    <>
      <Layout breadcrumbTitle="Case Study Details">
        <section className="project-details pt-130 pb-130">
          <div className="tf-container">
            <div className="row align-center mb-100">
              <div className="col-md-12">
                <div className="heading-title">
                  <span className="sub-title texts-blue font-man">
                    About The Project
                  </span>
                  <h2 className="title">
                    {" "}
                    Accelerating Cloud Transformation for a Leading
                    Transportation Company
                  </h2>
                  <p className="des mb-40">
                    A large North American transportation enterprise sought to
                    modernize its IT landscape to improve scalability, cost
                    efficiency, and resilience. The client managed over 110
                    business-critical applications running across legacy data
                    centers, many of which were nearing end-of-life and lacked
                    agility to support digital initiatives.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/assets/images/project/pj-details1.jpg"
                  alt="image"
                  className="image-two-project"
                />
              </div>
              <div className="col-md-8">
                <img src="/assets/images/project/pj-details2.jpg" alt="image" />
              </div>
            </div>
            <div className="row interesting bb-blog">
              <div className="col-md-6">
                <h2 className="title">Business Challenge</h2>
              </div>
              <div className="col-md-6">
                <div className="interesting-content">
                  <p className="mb-20">
                    The client faced significant operational challenges due to:
                  </p>
                  <ul className="icon-listing mb-20">
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        A fragmented on-premises environment with siloed
                        applications and redundant systems
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Limited disaster recovery and high-availability
                        capabilities
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Rising infrastructure costs and slow provisioning cycles
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Lack of a unified cloud adoption framework or migration
                        roadmap
                      </p>
                    </li>
                  </ul>
                  <p>
                    They required a comprehensive cloud assessment and
                    transformation roadmap that could identify the right landing
                    zones, prioritize migration workloads, and establish a
                    future-ready hybrid/multi-cloud architecture.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row results bb-blog">
              <div className="col-md-12">
                <div className="mb-50">
                  <h2 className="title mb-20">SpikeIT’s Approach</h2>
                  <p>
                    SpikeIT Global Solutions was engaged to perform a full-scale
                    Cloud Readiness Assessment and Migration Planning
                    initiative. Leveraging its proven Cloud Migration Framework,
                    SpikeIT delivered a structured and outcome-driven
                    transformation journey using a combination of AWS and Azure
                    native tools and automation accelerators.{" "}
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div>
                      <h3 className="mb-20">Cloud Assessment & Discovery </h3>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check  mt-10" />
                          <p className="font-man">
                            Conducted in-depth assessment of 110 applications,
                            analyzing business criticality, technology stack,
                            integration dependencies, and performance baselines.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Used AWS Migration Evaluator and Azure Migrate –
                            Discovery & Assessment tools for performance
                            profiling and TCO estimation.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Classified applications into priority buckets
                            (Critical, High, Medium, Low) based on business
                            impact and technical complexity.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Identified candidate platforms for optimal
                            performance—AWS for scalability-intensive workloads
                            and Azure for enterprise-integrated applications.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div>
                      <h3 className="mb-20">Cloud Roadmap & Strategy </h3>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check  mt-10" />
                          <p className="font-man">
                            {" "}
                            Developed a multi-cloud roadmap recommending
                            workload placement across AWS and Azure.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            {" "}
                            Designed Landing Zones using AWS Control Tower and
                            Azure Landing Zone Accelerator, embedding
                            governance, security, and compliance guardrails.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Created reference architectures for web, data, and
                            middleware tiers to enable uniform deployments.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Defined migration waves and timelines aligned with
                            business priorities.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div>
                      <h3 className="mb-20">
                        {" "}
                        Cloud Architecture & Framework Development
                      </h3>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check  mt-10" />
                          <p className="font-man">
                            {" "}
                            Built a reusable Cloud Migration Framework that
                            accelerated assessment-to-execution by 40%.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Established Cloud Governance Models, including
                            role-based access controls, tagging policies, and
                            cost optimization guidelines
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            {" "}
                            Used AWS Identity & Access Management (IAM) and
                            Azure Entra ID (AD) for centralized identity and
                            access management.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Created application dependency maps through Azure
                            Migrate Application Discovery and custom CMDB
                            integrations.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div>
                      <h3 className="mb-20"> Execution & Implementation</h3>
                      <ul className="icon-listing">
                        <li className="flex-three">
                          <i className="icon-Check  mt-10" />
                          <p className="font-man">
                            Migrated workloads using a mix of re-host,
                            re-platform, and re-architect strategies.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            {" "}
                            Utilized AWS Application Migration Service (MGN),
                            AWS Database Migration Service (DMS), Azure Database
                            Migration Service, and Azure App Service Migration
                            Assistant for seamless workload transition.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Implemented High Availability (HA) using AWS Auto
                            Scaling, Elastic Load Balancer (ELB), Azure
                            Availability Zones, and Azure Load Balancer.
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Built Disaster Recovery (DR) with AWS Backup, AWS
                            CloudEndure, Azure Site Recovery (ASR), and
                            Geo-redundant storage (GRS).
                          </p>
                        </li>
                        <li className="flex-three">
                          <i className="icon-Check" />
                          <p className="font-man">
                            Enabled automated deployment pipelines using Azure
                            DevOps and AWS CodePipeline for CI/CD.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row results bb-blog">
              <div className="col-md-12">
                <div className="results-content">
                  <h2 className="mb-50">Key Outcomes </h2>
                  <div className="benefit-list">
                    <ul className="benefit-list-item key-outcomes">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Comprehensive Cloud Roadmap</h4>
                        </div>
                        <p>
                          Delivered a 3-year transformation plan across AWS and
                          Azure covering 110 applications.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Improved Agility</h4>
                        </div>
                        <p>
                          Reduced provisioning time from weeks to hours through
                          Infrastructure-as-Code automation (Terraform, ARM
                          templates).
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Cost Optimization</h4>
                        </div>
                        <p>
                          Identified 25% annual cost savings through
                          right-sizing, Reserved Instances, and Savings Plans.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Resilience & Continuity</h4>
                        </div>
                        <p>
                          Achieved 99.95% uptime SLA through HA and DR
                          architectures.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Operational Excellence</h4>
                        </div>
                        <p>
                          Centralized monitoring via AWS CloudWatch, Azure
                          Monitor, and Log Analytics dashboards
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4> Framework Reusability</h4>
                        </div>
                        <p>
                          SpikeIT’s migration playbooks and governance templates
                          were adopted enterprise-wide for future initiatives.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row interesting bb-blog">
              <div className="col-md-6">
                <h2 className="title">
                  SpikeIT’s Edge in Cloud Migration & Digital Transformation{" "}
                </h2>
              </div>
              <div className="col-md-6">
                <div className="interesting-content">
                  <p className="mb-20">
                    SpikeIT’s distinct advantage lies in its end-to-end,
                    framework-driven approach—from discovery to steady state.
                    Its Cloud Transformation Accelerators, coupled with deep
                    expertise in AWS, Azure, and hybrid architectures, enable
                    faster adoption with lower risk.
                  </p>

                  <h4 className="mb-20">Key Differentiators:</h4>
                  <ul className="icon-listing mb-20">
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Proprietary Cloud Assessment & Migration Framework
                        (CAMF)
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Multi-cloud partnerships with AWS, Azure, and Google
                        Cloud
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Pre-built Landing Zone templates and compliance
                        automation
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Automation-first approach leveraging DevOps, IaC, and
                        FinOps governance
                      </p>
                    </li>
                    <li className="flex-three">
                      <i className="icon-Check" />
                      <p className="font-man">
                        Cross-functional expertise across AI/ML, analytics, and
                        application modernization
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
            <div className="results">
               <h2 className="mb-40">Executive Takeaway </h2>
                <p>
                  Through structured assessment, prioritized migration planning,
                  and robust execution leveraging AWS and Azure native
                  capabilities, SpikeIT transformed a legacy transportation
                  enterprise into a modern, cloud-ready organization—enabling
                  scalability, reliability, and future-proof digital innovation.
                </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
