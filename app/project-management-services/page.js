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

			<Layout bgImg="/assets/images/services/project-management-1.jpg" breadcrumbTitle="Project Management Services" pageTitle="Deliver Projects On Time with Expert Project Management Services
">
				<div>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Best Features Development</span>
											<h2 className="title">Project Management Services</h2>
											<p className="des"> Ensure project success with structured, agile, and client-focused project management solutions that deliver results — on time, on budget, and aligned with your business goals.

											</p>
										</div>
										<img src="/assets/images/services/project-management-2.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>End-to-End Project Oversight</h4>
												</div>
												<p> From initiation to closure — we manage every stage with precision.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Agile & Waterfall Expertise </h4>
												</div>
												<p>Choose the right methodology or blend to match your project needs and culture.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Time & Cost Efficiency</h4>
												</div>
												<p> Keep timelines tight and costs optimized through proactive planning and tracking.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Risk Management
													</h4>
												</div>
												<p>Identify, assess, and mitigate risks before they impact your project.

												</p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4> Transparent Reporting</h4>
												</div>
												<p> Get real-time visibility into project health, timelines, and resources.
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

											<h2 className="title">Our Project Management Approach
											</h2>
										</div>


										<div className="content-tab-service-details">
											<p className="des">We follow a structured approach, balancing flexibility and control to ensure project delivery meets business goals, stakeholder expectations, and technical feasibility.

											</p>
											<ul className="icon-listing">
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Requirement Gathering & Scope Definition

													</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Resource Allocation & Scheduling

													</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Task Planning & Sprint Management

													</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Real-Time Progress Tracking

													</p>
												</li>
												<li className="flex-three">
													<i className="icon-Check" />
													<p className="font-man">Risk, Quality, and Change Management

													</p>
												</li>
											</ul>

										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/services/project-management-3.jpg" alt="image" />
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
										<span className="sub-title texts-blue font-man">Drive Execution
										</span>
										<h2 className="title">Our Capabilities in Project Management
										</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title">
											Agile Project Management
										</h4>
										<p className="des">Scrum and Kanban-based execution with sprints, stand-ups, backlogs, and continuous delivery.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title">
											Traditional (Waterfall) Project Management

										</h4>
										<p className="des">Structured planning, fixed timelines, and phase-wise delivery for predictable outcomes.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title">
											Hybrid Models
										</h4>
										<p className="des">Blend Agile flexibility with Waterfall control for large or evolving projects.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title">
											Project Portfolio Management (PPM)

										</h4>
										<p className="des">Manage multiple projects with prioritization, resource balancing, and strategic alignment.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title">
											PMO Setup & Optimization

										</h4>
										<p className="des">Establish or refine your Project Management Office (PMO) with tools, governance, and KPIs.

										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title">
											Tool Expertise (Jira, Trello, Asana, MS Project)

										</h4>
										<p className="des">Use of industry-standard tools to track milestones, dependencies, and resource utilization.

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
														Do you manage software development projects only?

													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">
														No — we handle IT, marketing, infrastructure, operations, and cross-functional business projects.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseTwo" aria-expanded="false"
														aria-controls="collapseTwo">
														Which project management tools do you use?

													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">We use Jira, Confluence, Asana, Trello, Microsoft Project, ClickUp, and more — based on client preference.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">
														Can you work with distributed teams?

													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Absolutely. We specialize in managing global, remote, and hybrid teams effectively.


													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button"
														: "accordion-button collapsed"} type="button" data-bs-toggle="collapse"
														data-bs-target="#collapsefore" aria-expanded="false"
														aria-controls="collapsefore">Do you provide dedicated project managers?
													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4
													? "accordion-collapse collapse show" : "accordion-collapse collapse"}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">Yes — certified PMs (PMP, CSM) available on full-time or part-time basis.
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
											<h2 className="title text-white">Deliver Projects with Confidence
											</h2>
											<p className="des font-man text-white">Need help managing a high-impact project or setting up a PMO? Let’s take your projects from planning to success.

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
											<p>We’re ready to lead your next project to success. Let’s collaborate.

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