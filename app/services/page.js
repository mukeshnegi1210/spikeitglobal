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

			<Layout breadcrumbTitle="Build Future-Ready Solutions with Software Development Services">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">Software Development Services</h2>
											<p className="des">Transform your business ideas into innovative digital products with our full-cycle custom software development services — from design to deployment and beyond.

											</p>
										</div>
										<img src="/assets/images/page/dvl-deatils.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>End-to-End Development</h4>
												</div>
												<p> From ideation to launch — we handle the complete SDLC under one roof.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> User-Centric Design
													</h4>
												</div>
												<p> Deliver intuitive, engaging experiences with UX-first, scalable interfaces.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Agile Methodology </h4>
												</div>
												<p> Faster iterations, quicker releases, and better collaboration using agile & DevOps practices.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Cross-Platform Delivery </h4>
												</div>
												<p> Web, mobile, desktop, and cloud-native solutions — built to perform across platforms.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Ongoing Support & Maintenance </h4>
												</div>
												<p> Post-deployment optimization, performance tuning, and version upgrades.

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

											<h2 className="title">Our Software Development Approach</h2>
										</div>


										<div className="content-tab-service-details">
											<p className="des">We follow a collaborative, agile-driven process that aligns software development with your business goals, market needs, and technology stack preferences.

											</p>
											<ul className="icon-listing">
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Requirement Analysis & Scoping</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">UI/UX Wireframing & Prototyping</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Architecture Design & Tech Stack Selection</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Agile Development & QA Testing</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Deployment & Ongoing Support</p>
												</li>
											</ul>

										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/page/dvl-deatils2.jpg" alt="image" />
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
										<span className="sub-title texts-blue font-man">Drive Innovation</span>
										<h2 className="title">Our Capabilities in Software Development
										</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">
											Custom Web Application Development
										</h4>
										<p className="des">Tailored web apps built for performance, security, and scale — using modern frameworks like React, Angular, and Vue.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">
											Mobile App Development
										</h4>
										<p className="des">Native and cross-platform apps for iOS and Android using Flutter, React Native, and Kotlin.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">
											Enterprise Software Solutions
										</h4>
										<p className="des">Robust, secure, and scalable systems for CRMs, ERPs, HRMS, and more.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">
											API & System Integration
										</h4>
										<p className="des">Seamless integration of third-party services, legacy systems, and APIs to enhance functionality.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">
											Cloud-Native & SaaS Platforms
										</h4>
										<p className="des">Scalable, multi-tenant applications designed for deployment on AWS, Azure, or GCP.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">
											QA & DevOps Enablement
										</h4>
										<p className="des">Automated testing, CI/CD pipelines, and environment setup for faster, reliable releases.

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
														Do you support both web and mobile app development?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Yes, we specialize in both web and mobile — including hybrid and native solutions.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseTwo" aria-expanded="false"
														aria-controls="collapseTwo">
														Which tech stacks do you use?

													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">We work with modern stacks like MERN, MEAN, .NET, Python/Django, Java Spring Boot, Flutter, and more.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">
														Can you help with legacy system upgrades?

													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Absolutely — we modernize old systems with newer architecture and UX/UI enhancements.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapsefore" aria-expanded="false"
														aria-controls="collapsefore">
														Do you provide post-launch support?
													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Yes, including maintenance, feature enhancements, and performance monitoring.
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
											<h2 className="title text-white">Bring Your Software Vision to Life</h2>
											<p className="des font-man text-white">Ready to build impactful, scalable software? Let’s create digital solutions that drive real business value.

</p>
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
											<p>Let’s turn your business idea into an innovative, high-performing software product.

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