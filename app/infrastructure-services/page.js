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

			<Layout headerStyle={1} breadcrumbTitle="Infrastructure Services" bgImg="/assets/images/services/infrastructure-2.jpg" pageTitle="Modernize Your IT Backbone with Infrastructure Services">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">Infrastructure Services</h2>
											<p className="des"> Ensure a secure, scalable, and resilient IT foundation with our end-to-end infrastructure services — empowering digital growth and operational continuity.</p>
										</div>
										<img src="/assets/images/services/infrastructure-3.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Reliable Uptime</h4>
												</div>
												<p>Maximize availability with resilient infrastructure built for 24/7 operations.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Cloud & On-Prem Flexibility</h4>
												</div>
												<p> Choose from fully cloud-native, on-premises, or hybrid infrastructure solutions.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>  Proactive Monitoring & Support
													</h4>
												</div>
												<p>Minimize downtime with 24/7 monitoring, predictive alerts, and rapid incident response.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Scalable Architecture </h4>
												</div>
												<p> Infrastructure that grows with your business — without the growing pains.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Security & Compliance </h4>
												</div>
												<p> Ensure every layer of your infrastructure meets top security and regulatory standards.
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

											<h2 className="title">Our Infrastructure Implementation Approach
											</h2>
										</div>


										<div className="content-tab-service-details">
											<p className="des">From assessment to transformation, we provide expert-led services to design, implement, and manage robust IT infrastructure that aligns with your business needs.

											</p>
											<ul className="icon-listing">
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Infrastructure Assessment</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Design & Architecture</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Design & Architecture</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Network & Storage Management</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Ongoing Support & Optimization</p>
												</li>
											</ul>

										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/services/infrastructure-1.jpg" alt="image" />
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
										<h2 className="title">Our Capabilities in Infrastructure Services</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">
											Server & Network Management
										</h4>
										<p className="des">Design, configure, and manage physical and virtual servers, routers, switches, and firewalls.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">
											Cloud Infrastructure
										</h4>
										<p className="des">Deploy and manage cloud-based infrastructure on AWS, Azure, or GCP for agility and cost-efficiency.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">
											Data Center Services
										</h4>
										<p className="des">End-to-end support for on-prem data centers, including cooling, power, and disaster recovery.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">
											Virtualization & Containerization
										</h4>
										<p className="des">Optimize resource usage through VMs, Kubernetes, and Docker-based container solutions.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">
											Backup & Disaster Recovery (DR)
										</h4>
										<p className="des">Ensure business continuity with real-time backup solutions and tested recovery processes.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">
											IT Asset & Patch Management
										</h4>
										<p className="des">Maintain infrastructure health with lifecycle tracking, updates, and vulnerability patching.

										</p>
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
													<span className={isAccordion == 1 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseOne" aria-expanded="true"
														aria-controls="collapseOne">
														Do you support both cloud and on-prem setups?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Yes, we offer hybrid, cloud-native, and traditional infrastructure management services.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseTwo" aria-expanded="false"
														aria-controls="collapseTwo">
														Can you manage infrastructure remotely?

													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Absolutely — we provide remote monitoring, updates, and troubleshooting globally.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">
														What security protocols do you follow?

													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">We implement firewalls, encryption, endpoint protection, and follow ISO/IEC 27001 standards.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapsefore" aria-expanded="false"
														aria-controls="collapsefore">
														How scalable is the infrastructure?

													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Our solutions are built for scalability — from 10 users to 10,000 — without re-architecture.


													</div>
												</div>
											</div>

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
										<span className="sub-title text-blue1 font-man wow fadeInUpSmall"
											data-wow-delay=".2s">Latest Case Studies</span>
										<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Let’s Explore Our Latest
											Case <span className="text-blue1 mask">Studies</span></h2>
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
															<h3 className="title">
																<Link href="/project-details"> ITSM for a Financial Services
																	Firm</Link>
															</h3>
															<p>From manual processes to AI-powered incident handling — achieved
																40% faster resolution and real-time analytics.


															</p>
														</div>
														<div className="btn-main">
															<Link href="/project-details" className="link-portfolio"><i
																className="icon-arrow-rights" /></Link>
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
															<h3 className="title">
																<Link href="/project-details">Healthcare Provider Game‑changer
																	with Self-Service</Link>
															</h3>
															<p> Built HIPAA-compliant request and knowledge portal, reducing
																support volume by 30%.</p>
														</div>
														<div className="btn-main">
															<Link href="/project-details" className="link-portfolio"><i
																className="icon-arrow-rights" /></Link>
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
											<h2 className="title text-white">Upgrade Your IT Infrastructure Today</h2>
											<p className="des font-man text-white">Ready to modernize your infrastructure for tomorrow’s challenges? Let’s build a resilient foundation — together.</p>
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
											<p>We’ll guide you from infrastructure design to deployment and maintenance — every step of the way.

											</p>
										</div>
										<form action="/" className="form-contact-home">
											<div className="input-group flex-one">
												<fieldset className="relative mb-20">
													<input type="text" className="form-control" id="name-input"
														placeholder="Name" />
													<i className="icon-user" />
												</fieldset>
												<fieldset className="relative mb-20">
													<input type="email" className="form-control" id="email-input"
														placeholder="Email" />
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
												<button className="btn-submit" type="submit">Send Message Us <i
													className="icon-right-icon" /></button>
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