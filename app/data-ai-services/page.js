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

			<Layout headerStyle={1} breadcrumbTitle="Data and AI Services" bgImg="/assets/images/services/data-ai-2.jpg"
			pageTitle="Unlock Business Intelligence with Data & AI Services">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">Data and AI Services</h2>
											<p className="des">Leverage the power of artificial intelligence, machine learning, and advanced analytics to drive innovation, automation, and strategic decisions across your enterprise. </p>
										</div>
										<img src="/assets/images/services/data-ai-3.jpg" alt="image" />
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
												<p>Empower teams with insights derived from structured and unstructured data. </p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>AI-Powered Automation </h4>
												</div>
												<p> Streamline workflows and reduce manual intervention with intelligent automation.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Real-Time Analytics </h4>
												</div>
												<p> Enable quick decision-making with real-time data pipelines and dashboards.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Predictive Intelligence </h4>
												</div>
												<p> Anticipate trends, behaviors, and risks using machine learning algorithms.</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Data Governance</h4>
												</div>
												<p>Ensure data quality, consistency, and compliance with robust governance frameworks.

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

											<h2 className="title">Our Data & AI Implementation Approach</h2>
										</div>


										<div className="content-tab-service-details">
											<p className="des">We help organizations harness the full value of their data with end-to-end data lifecycle management — from strategy and architecture to modeling and AI solution delivery.</p>
											<ul className="icon-listing">
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Data Strategy & Roadmap</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Architecture & Data Engineering</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">AI & Machine Learning Development</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Visualization & Reporting</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Governance & Compliance</p>
												</li>
											</ul>

										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/services/data-ai-1.jpg" alt="image" />
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
										<h2 className="title">Our Capabilities in Data & AI</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">
											Data Engineering & Warehousing
										</h4>
										<p className="des">Design and build scalable data lakes and warehouses to store, organize, and manage enterprise data.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">
											Business Intelligence & Reporting
										</h4>
										<p className="des">Transform raw data into actionable dashboards using tools like Power BI, Tableau, and Looker.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">
											Machine Learning & AI Solutions
										</h4>
										<p className="des">Create ML models for customer insights, fraud detection, demand forecasting, and more.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">
											Natural Language Processing (NLP)
										</h4>
										<p className="des">Unlock value from text, voice, and unstructured content through sentiment analysis, chatbots, and language models.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">
											Computer Vision
										</h4>
										<p className="des">Enable intelligent visual data processing for object detection, quality checks, and facial recognition.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">
											MLOps & Model Deployment
										</h4>
										<p className="des">Automate model training, testing, deployment, and monitoring for scalable AI adoption.

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
														What AI platforms do you work with?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Azure AI, Google Vertex AI, AWS SageMaker, OpenAI, and various open-source frameworks like TensorFlow and PyTorch.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseTwo" aria-expanded="false"
														aria-controls="collapseTwo">
														Do you offer custom AI model development?
													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Yes, we build models tailored to specific use cases like churn prediction, classification, recommendation engines, and more.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">
														Can you integrate AI with our existing apps?
													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Absolutely — we offer seamless integration of AI into CRMs, ERPs, websites, and other enterprise systems.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapsefore" aria-expanded="false"
														aria-controls="collapsefore">
														Is our data safe with AI platforms?

													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Is our data safe with AI platforms?

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
											<h2 className="title text-white">Transform with Data & AI Today</h2>
											<p className="des font-man text-white">Looking to harness the power of AI and data insights for your business? Let’s build your next intelligent solution together.</p>
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
											<p>Let’s explore how data and AI can deliver measurable value for your business.</p>
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