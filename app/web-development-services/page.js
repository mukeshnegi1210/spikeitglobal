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

			<Layout

				src="/assets/images/services/webdevelopment-1.jpg"
				breadcrumbTitle="Web Development Services"
				pageTitle="Craft Powerful Web Experiences with Web Development Services
">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">Web Development Services
											</h2>
											<p className="des">From sleek landing pages to complex web portals — we build high-performance, secure, and scalable websites that help you convert, engage, and grow. </p>
										</div>
										<img src="/assets/images/services/webdevelopment-2.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Responsive Design</h4>
												</div>
												<p> Your website will look stunning and work seamlessly across all devices.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> SEO-Friendly Structure</h4>
												</div>
												<p> Built with best practices to ensure visibility, speed, and higher search rankings.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Custom Development
													</h4>
												</div>
												<p>Tailored websites with pixel-perfect UI, custom workflows, and clean backend logic.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Performance Optimized</h4>
												</div>
												<p> Fast-loading pages, lightweight assets, and caching ensure great user experience.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Scalable Architecture </h4>
												</div>
												<p> Easily upgrade or expand your platform as your traffic or business grows.

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

											<h2 className="title">Our Web Development Approach
											</h2>
										</div>


										<div className="content-tab-service-details">
											<p className="des">We combine user-focused design with modern technology stacks to create websites that are not only visually impressive but also functionally powerful and future-ready.

											</p>
											<ul className="icon-listing">
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Requirement Discovery & Goal Mapping</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">UI/UX Wireframing & Design</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Frontend & Backend Development</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">SEO Optimization & QA Testing</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Deployment, Hosting & Support</p>
												</li>
											</ul>

										</div>
									</div>
								</div>


								
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/services/webdevelopment-3.jpg" alt="image" />
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
										<span className="sub-title texts-blue font-man">Drive Digital Presence
										</span>
										<h2 className="title">Our Capabilities in Web Development
										</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">
											Business & Corporate Websites
										</h4>
										<p className="des">Professional websites that reflect your brand and engage visitors effectively.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">
											E-Commerce Development
										</h4>
										<p className="des">Build secure, scalable online stores using Shopify, WooCommerce, Magento, or custom stacks.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">
											Custom Web Portals & Dashboards
										</h4>
										<p className="des">Interactive dashboards, client portals, and internal systems for real-time visibility and control.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">
											CMS Development (WordPress, Webflow, etc.)
										</h4>
										<p className="des">Manage content effortlessly with customized CMS solutions tailored to your team’s workflow.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">
											Progressive Web Apps (PWAs)
										</h4>
										<p className="des">Deliver mobile-app-like performance and offline access directly from browsers.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">
											Maintenance & Optimization
										</h4>
										<p className="des">Regular backups, performance checks, bug fixes, and enhancements to keep your site in top shape.

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
														aria-controls="collapseOne">Do you design as well as develop websites?

													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Yes. We provide complete UI/UX design services along with frontend and backend development.



													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseTwo" aria-expanded="false"
														aria-controls="collapseTwo">
														Which technologies do you use?

													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">We work with HTML5, CSS3, JavaScript (React, Vue, Next.js), PHP, Node.js, Laravel, WordPress, and more.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">
														Is the website mobile-friendly and SEO-ready?

													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Absolutely. All our websites are responsive, speed-optimized, and built with on-page SEO best practices.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapsefore" aria-expanded="false"
														aria-controls="collapsefore">
														Do you offer website maintenance post-launch?

													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Yes — we offer support plans for monitoring, backups, updates, and content management.


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
											<h2 className="title text-white">Let’s Build Your Digital Presence</h2>
											<p className="des font-man text-white">Need a modern website that performs, converts, and impresses? Let’s build your next big digital platform together.

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
											<p>Ready to launch or revamp your website? We’re here to help — from design to deployment.

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