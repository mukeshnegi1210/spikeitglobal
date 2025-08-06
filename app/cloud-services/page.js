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

			<Layout headerStyle={1} pageTitle="Redefine Cloud Services for Scalable Success" bgImg="/assets/images/services/cloud-service-1.jpg" breadcrumbTitle="Cloud Services">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">Cloud Services</h2>
											<p className="des"> Empower your organization with secure, scalable, and cost-efficient cloud solutions tailored to meet business demands — from migration to optimization.</p>
										</div>
										<img src="/assets/images/services/cloud-service-2.jpg" alt="image" />
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
												<p> Protect data with robust cloud security, encryption, and compliance standards.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Scalability & Flexibility</h4>
												</div>
												<p> Rapidly scale resources up or down to meet changing demands without disrupting operations.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Cost Optimization</h4>
												</div>
												<p>Pay only for what you use and get the most out of your cloud investments.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Seamless Integration</h4>
												</div>
												<p> Connect cloud environments with existing systems and applications for streamlined workflows.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Global Accessibility</h4>
												</div>
												<p> Access your data and applications from anywhere, anytime — empowering a truly remote-ready organization.

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
											<p className="des">We provide end-to-end cloud consulting, migration, and support to ensure seamless transition and ongoing optimization. Our experts help you choose the right platform, architect secure cloud solutions, and support continuous innovation.
											</p>
											<ul className="icon-listing">
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Assessment & Cloud Readiness</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Architecture & Planning</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Migration & Deployment</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Integration & Optimization
													</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Support & Maintenance
													</p>
												</li>
											</ul>
											{/* <Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link> */}
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/services/cloud-service-3.jpg" alt="image" />
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
										<h2 className="title">Our Capabilities in Cloud Solutions</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title"><Link href="/#">Cloud Migration Services</Link></h4>
										<p className="des">End-to-end migration from on-premises to public, private, or hybrid cloud platforms like AWS, Azure, and GCP.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title"><Link href="/#"> Infrastructure as a Service (IaaS)</Link></h4>
										<p className="des">Virtualized computing resources tailored to scale — reducing hardware dependency.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title"><Link href="/#">Platform as a Service (PaaS)</Link></h4>
										<p className="des">Accelerate development with managed platforms for building, testing, and deploying applications.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title"><Link href="/#">Software as a Service (SaaS)</Link></h4>
										<p className="des">Deliver cloud-hosted applications to users over the internet — cost-effective and always up-to-date.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title"><Link href="/#"> Hybrid & Multi-Cloud Architecture</Link></h4>
										<p className="des">Balance workloads between cloud and on-prem with secure, flexible hybrid or multi-cloud setups.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title"><Link href="/#">Cloud Security & Compliance</Link></h4>
										<p className="des">Advanced protection against breaches, with adherence to GDPR, HIPAA, ISO, and other regulatory standards.

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
													<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														What platforms do you support?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We use industry-leading encryption, access control, and continuous monitoring.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														Can you help us migrate legacy apps?
													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Absolutely — we assess, re-platform, or refactor legacy apps to fit modern cloud environments.					</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Do you offer managed cloud services?
													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Yes, including monitoring, backups, updates, and 24/7 support.			</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
														How do you ensure data security in cloud?
													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We use industry-leading encryption, access control, and continuous monitoring.		</div>
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
															<h3 className="title"><Link href="/project-details"> ITSM for a Financial Services Firm</Link>
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
											<h2 className="title text-white">Elevate Your Cloud Strategy Today</h2>
											<p className="des font-man text-white">Looking to modernize your IT with secure, scalable, and efficient cloud infrastructure? Let’s build a cloud solution that fits your goals.</p>
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