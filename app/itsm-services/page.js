'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { myPortfolio } from "@/utils/swiperOptions"
export default function ServiceDetails() {
	const [isTab, setIsTab] = useState(1)
	const [isVisible, setIsVisible] = useState(true)

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}



	const handleTab = (i) => {
		setIsTab(i)
		setIsVisible(false)
		setTimeout(() => {
			setIsVisible(true)
		}, 200)
	}
	return (
		<>

			<Layout src="/assets/images/services/itsm-1.jpg"  breadcrumbTitle="IT Management Services" pageTitle="Redefine Service Management with ServiceNow">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">IT Service Management (ITSM)</h2>
											<p className="des"> Empower your organization with automated workflows, integrated platforms, and strategic IT operations — powered by ServiceNow expertise.</p>
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
												<p> Bring together incident, problem, change, and request workflows on a single unified platform</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Faster Resolution & Automation</h4>
												</div>
												<p> Reduce response times using embedded workflows, predictive intelligence (NLP/ML), and AI‑powered recommendations</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Increased Visibility & Control</h4>
												</div>
												<p>Gain insights through dashboards like Agent Workspace, Vendor Manager Workspace, and Service Owner Workspace.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Proactive Intelligence</h4>
												</div>
												<p> Leverage health log analytics, predictive AIOps, and service mapping to prevent outages</p>
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
											<h2 className="title">Our ITSM Implementation Approach</h2>
										</div>


										<div className="content-tab-service-details">
											<p className="des">We deliver tailored ITSM solutions to streamline service delivery and enhance user experience. By leveraging platforms like ServiceNow, we ensure efficient, transparent, and scalable IT operations. Our approach empowers businesses to reduce downtime and focus on strategic growth.
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
													<p className="font-man">AI & Automation Integration</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Adoption & Support
													</p>
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
										<span className="sub-title texts-blue font-man">Drive Performance</span>
										<h2 className="title">Our Capabilities with ServiceNow Modules</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title"><Link href="/#">IT Service Management (ITSM)</Link></h4>
										<p className="des">Harness the power of data using efficient and automated IT workflows to enhance productivity and promote agile decision-making.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title"><Link href="/#">Customer Service Management (CSM)</Link></h4>
										<p className="des">Leverage integrated dashboards and omnichannel views to streamline customer support, improve satisfaction, and accelerate query resolution.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title"><Link href="/#">IT Operations Management (ITOM)</Link></h4>
										<p className="des">Enable operational agility with complete visibility into your infrastructure, enabling faster root cause identification and proactive incident response.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title"><Link href="/#">IT Asset Management (ITAM)</Link></h4>
										<p className="des">Track, manage, and optimize your hardware and software assets through their entire lifecycle—from procurement to retirement.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title"><Link href="/#">Security Operations (SecOps)</Link></h4>
										<p className="des">Maintain business continuity with real-time visibility into security incidents, automated risk assessments, and prioritized threat response workflows.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title"><Link href="/#">Governance, Risk, and Compliance (GRC)</Link></h4>
										<p className="des">Strengthen governance with automated risk assessments, real-time compliance tracking, and streamlined audit workflows.</p>
									</div>
								</div>

							</div>
						</div>
					</section>
					<section className="faq-team pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-7">
									<div className="faq-main">
										<div className="heading-title mb-30">
											<span className="sub-title text-blue1 font-man">FAQs</span>
											<h2 className="title">Frequently Ask Questions</h2>
										</div>
										<div className="accordion accordion-h4" id="accordionExample">
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(1)}>
													<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														What modules do you implement?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We deliver Incident, Problem, Change, Request, Knowledge, CMDB, Asset Management, and Predictive Intelligence modules.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														How do you ensure client adoption?
													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We apply structured change management, tailored training, and dashboards to support visibility and cultural buy‑in.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Can you integrate existing tools?
													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Yes — we integrate third-party tools, cloud environments, legacy systems, and extend ServiceNow capabilities.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
														What about ongoing support?
													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														SLA‑driven managed support (24/7 if needed), continuous monitoring, patching, and enhancements.
													</div>
												</div>
											</div>
											{/* <div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(5)}>
													<span className={isAccordion == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
														How do I start an app business?
													</span>
												</h3>
												<div id="collapsefire" className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached SpikeIT with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="image-faq-team">
										<img src="/assets/images/services/faq.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="case-studies-h5 pt-122 pb-130">
						<div className="tf-container full">
							<div className="row mb-70">
								<div className="col-lg-12">
									<div className="heading-title center w-680 m0-auto">
										<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Latest Case Studies</span>
										<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Let’s Explore Our Latest Case <span className="text-blue1 mask">Studies</span></h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<Swiper {...myPortfolio} className="swiper myportfolio px-5">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="tf-portfolio">
													<Link href="/project-details" className="image">
														<img src="/assets/images/image-box/case1.jpg" alt="image" />
													</Link>
													<div className="content">
														<div className="inner-title">
															<h3 className="title"><Link href="/project-details">Transforming ITSM for a Financial Services Firm</Link>
															</h3>
															<p>From manual processes to AI-powered incident handling — achieved 40% faster resolution and real-time analytics.


															</p>
														</div>
														<div className="btn-main">
															<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="tf-portfolio">
													<Link href="/project-details" className="image">
														<img src="/assets/images/image-box/case3.jpg" alt="image" />
													</Link>
													<div className="content">
														<div className="inner-title">
															<h3 className="title"><Link href="/project-details">Healthcare Provider Game‑changer with Self-Service</Link></h3>
															<p> Built HIPAA-compliant request and knowledge portal, reducing support volume by 30%.</p>
														</div>
														<div className="btn-main">
															<Link href="/project-details" className="link-portfolio"><i className="icon-arrow-rights" /></Link>
														</div>
													</div>
												</div>
											</SwiperSlide>

										</div>
									</Swiper>
								</div>
							</div>
						</div>
					</section>
					{/* Contact */}
					<section className="section-contact contact-service-details bg-5 pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title text-white font-man">Work With Us</span>
											<h2 className="title text-white">Elevate Your IT Service Management Today</h2>
											<p className="des font-man text-white">Looking to streamline IT, reduce costs, and improve end-user experience? Let’s collaborate to transform your ITSM approach.</p>
										</div>
										<div className="contact-wrap flex-three mb-40">
											<div className="icon text-white">
												<i className="icon-phones" />
											</div>
											<div className="contact-content">
												<span className="font-man text-white">Call For Inquiry</span>
												<p>+236 (456) 896 22</p>
											</div>
										</div>
										<div className="contact-wrap flex-three">
											<div className="icon text-white">
												<i className="icon-envelopes" />
											</div>
											<div className="contact-content">
												<span className="font-man text-white">Send Us Email</span>
												<p>infotech@gmail.com</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="form-contact-home1 style2">
										<div className="inner-title-form center mb-30">
											<h3 className="title-form">Need Help For Project!</h3>
											<p>We are ready to help your next projects, let’s work together</p>
										</div>
										<form action="/" className="form-contact-home">
											<div className="input-group flex-one">
												<fieldset className="relative mb-20">
													<input type="text" className="form-control" id="name-input" placeholder="Name" />
													<i className="icon-user" />
												</fieldset>
												<fieldset className="relative mb-20">
													<input type="email" className="form-control" id="email-input" placeholder="Email" />
													<i className="icon-envelopes" />
												</fieldset>
											</div>
											<fieldset className="mb-20">
												<div className="nice-select" tabIndex={0}>
													<span className="current">Choose Services</span>
													<ul className="list">
														<li data-value className="option selected focus">Choose Services</li>
														<li data-value="service" className="option">Choose Services</li>
														<li data-value="service" className="option">Choose Services</li>
														<li data-value="service" className="option">Choose Services</li>
													</ul>
												</div>
											</fieldset>
											<fieldset className=" mb-15">
												<textarea id="mess" name="mess" rows={4} cols={50} placeholder="Message" />
											</fieldset>
											<fieldset className="center">
												<button className="btn-submit" type="submit">Send Message Us <i className="icon-right-icon" /></button>
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}