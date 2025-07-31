'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { collection1, collection2 } from "@/utils/swiperOptions";
import CaseStudies3 from "@/components/sections/CaseStudies3"
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

			<Layout breadcrumbTitle="Strategic Advisory Services">
				<div>
					<section className="pd-section feature-service2">
						<div className="tf-container">
							<div className="row align-center">
								<div className="col-md-6">
									<div className="feature-service2-content">
										<div className="heading-title mb-26">
											<h2 className="title mb-30">Cloud Strategy & IT Roadmapping</h2>
											<p className="des">We help clients design a sustainable cloud-first IT roadmap to accelerate innovation and reduce risk. This includes:</p>
										</div>
										<ul className="icon-listing mb-50">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Cloud readiness assessment & ROI projections</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Platform selection (AWS, Azure, GCP, hybrid, multi‑cloud)</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Migration planning, tooling choices, and pilot programs</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Governance frameworks, compliance, and policy design</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="feature-service2-image relative">
										<img src="/assets/images/service/service-list.jpg" alt="image" className="service2-image" />
										<div className="cycle" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pd-section feature-service2 has-right-content">
						<div className="tf-container">
							<div className="row align-center">

								<div className="col-md-6">
									<div className="feature-service2-image relative">
										<img src="/assets/images/service/service-list.jpg" alt="image" className="service2-image" />
										<div className="cycle" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="feature-service2-content">
										<div className="heading-title mb-26">
											<h2 className="title mb-30">Business & Technical Alignment</h2>
											<p className="des">Ensuring tech investments drive measurable business outcomes:</p>
										</div>
										<ul className="icon-listing mb-50">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Market and competitor benchmarking</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">SWOT and gap analysis to pinpoint competitive advantages</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Strategic prioritization and value-driven initiative planning</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Integration with KPIs, governance, and change-control mechanisms</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pd-section feature-service2">
						<div className="tf-container">
							<div className="row align-center">
								<div className="col-md-6">
									<div className="feature-service2-content">
										<div className="heading-title mb-26">
											<h2 className="title mb-30">Project & Operational Excellence</h2>
											<p className="des">Optimizing execution and minimizing disruptions:</p>
										</div>
										<ul className="icon-listing mb-50">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Agile transformation consulting and operational process tuning</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Risk mitigation and quality assurance planning</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Lean process analysis to drive efficiency and reduce non‑value-added work</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Ongoing performance tracking and continuous improvement support</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="feature-service2-image relative">
										<img src="/assets/images/service/service-list.jpg" alt="image" className="service2-image" />
										<div className="cycle" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pd-section feature-service2 has-right-content">
						<div className="tf-container">
							<div className="row align-center">

								<div className="col-md-6">
									<div className="feature-service2-image relative">
										<img src="/assets/images/service/service-list.jpg" alt="image" className="service2-image" />
										<div className="cycle" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="feature-service2-content">
										<div className="heading-title mb-26">
											<h2 className="title mb-30">Innovation Management & Emerging Tech</h2>
											<p className="des">Stay ahead of the curve:</p>
										</div>
										<ul className="icon-listing mb-50">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Digital innovation workshops and ideation frameworks</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Feasibility assessments for AI/ML, data analytics, and automation</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">MVP tracking, POC frameworks, and pilot testing</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Strategic growth planning and ideation pipelines</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pd-section feature-service2">
						<div className="tf-container">
							<div className="row align-center">
								<div className="col-md-6">
									<div className="feature-service2-content">
										<div className="heading-title mb-26">
											<h2 className="title mb-30">Change Management & Capability Building</h2>
											<p className="des">Drive adoption and readiness:</p>
										</div>
										<ul className="icon-listing mb-50">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Comprehensive stakeholder assessment and communication plans</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">
													User training, upskilling programs, and workshop facilitation
												</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Organizational readiness diagnostics and transition support</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Post-go-live monitoring, adoption tracking, and feedback loops</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="feature-service2-image relative">
										<img src="/assets/images/service/service-list.jpg" alt="image" className="service2-image" />
										<div className="cycle" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-benefit pt-122">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-6">
									<div className="benefit-content">
										<div className="heading-title mb-40">
											<span className="sub-title texts-blue font-man">Why Us</span>
											<h2 className="title">Why Choose SpikeIT?</h2>
											<p className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis tempore aliquam totam odio tempora voluptatum alias dolores laudantium nisi quis illo veniam cupiditate vero eveniet error, impedit expedita possimus. </p>
										</div>
										<img src="/assets/images/services/strategy-consultation-services.jpg" alt="image" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="benefit-list">
										<ul className="benefit-list-item">
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Industry-Centric Expertise</h4>
												</div>
												<p> Serving Finance, Pharma, Telecom, Insurance, Healthcare, and Media verticals with tailored strategy solutions </p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Client-First Ethos</h4>
												</div>
												<p>“Client First” is baked into every engagement—delivering quality, responsiveness, and transparent communications </p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Flexible Delivery Model</h4>
												</div>
												<p>Onsite, nearshore, offshore, or hybrid approaches—aligned to client needs while optimizing cost and timezone </p>
											</li>
											<li>
												<div className="flex-three">
													<i className="icon-Check" />
													<h4>Lean & Focused Team</h4>
												</div>
												<p>With a tight-knit, expert team (typically under 50 people), we offer agility, attention, and strategic depth</p>
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
											<span className="sub-title texts-blue font-man">How  Manage</span>
											<h2 className="title">Our u Concentrate on What Matters
											</h2>
										</div>
										<ul className="nav nav-tabs-pricing nav-tabs-pricing-service" id="myTab" role="tablist">
											<li className="nav-item" onClick={() => handleTab(1)}>
												<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="approach-tab" data-bs-toggle="tab" data-bs-target="#approach-tab-pane" type="button" role="tab" aria-controls="approach-tab-pane" aria-selected="true">Our
													Approach</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(2)}>
												<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="goals-tab" data-bs-toggle="tab" data-bs-target="#goals-tab-pane" type="button" role="tab" aria-controls="goals-tab-pane" aria-selected="false">Project
													Goals</button>
											</li>
											<li className="nav-item" onClick={() => handleTab(3)}>
												<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="advisory-tab" data-bs-toggle="tab" data-bs-target="#advisory-tab-pane" type="button" role="tab" aria-controls="advisory-tab-pane" aria-selected="false">Advisory</button>
											</li>
										</ul>
										<div className="tab-content" id="myTabContent">
											<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="approach-tab-pane" role="tabpanel" aria-labelledby="approach-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">At veroeos accusamus dignissimos ducimus blanditiis
														volupta
														delenite atque
														corrupti quos dolores et quas molestias excepturi sint occaecatie
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Efficient Sprint Planning</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Iterative Delivery Approach</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Standups and Demos</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Problem-solving</p>
														</li>
													</ul>
													<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="goals-tab-pane" role="tabpanel" aria-labelledby="goals-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">At veroeos accusamus dignissimos ducimus blanditiis
														volupta
														delenite atque
														corrupti quos dolores et quas molestias excepturi sint occaecatie
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Efficient Sprint Planning</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Iterative Delivery Approach</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Standups and Demos</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Problem-solving</p>
														</li>
													</ul>
													<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
												</div>
											</div>
											<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="advisory-tab-pane" role="tabpanel" aria-labelledby="advisory-tab" tabIndex={0}>
												<div className="content-tab-service-details">
													<p className="des">At veroeos accusamus dignissimos ducimus blanditiis
														volupta
														delenite atque
														corrupti quos dolores et quas molestias excepturi sint occaecatie
													</p>
													<ul className="icon-listing">
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Efficient Sprint Planning</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Iterative Delivery Approach</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Standups and Demos</p>
														</li>
														<li className="flex-three">
															<i className="icon-Check" />
															<p className="font-man">Problem-solving</p>
														</li>
													</ul>
													<Link href="/#" className="button-src">Learn More <i className="icon-angle-right" /></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="it-manager-image">
										<img src="/assets/images/services/strategy-consultation-services-2.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-performance  bg-2">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title m0-auto w-680 center mb-60">
										<span className="sub-title texts-blue font-man"> Consulting Workflow </span>
										<h2 className="title">Process Overview</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">01</span>
										<h4 className="title"><Link href="/#">Discovery Kickoff</Link></h4>
										<p className="des">Initial alignment, stakeholder workshops, high-level diagnostics, and success criteria setting.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">02</span>
										<h4 className="title"><Link href="/#">Research & Current-State Analysis</Link></h4>
										<p className="des">Market scanning, benchmarking, cloud readiness, infrastructure and cost analysis.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">03</span>
										<h4 className="title"><Link href="/#">Strategic Design</Link></h4>
										<p className="des">Solution frameworks, roadmap sequencing, risk modeling, and governance blueprint.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">04</span>
										<h4 className="title"><Link href="/#">Execution Planning</Link></h4>
										<p className="des">Actionable implementation plans, resource allocation, migration waves, and pilot design.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">05</span>
										<h4 className="title"><Link href="/#">Implementation Guidance</Link></h4>
										<p className="des">Coordination support, vendor management, framework roll‑out, and pilot oversight.</p>
									</div>
								</div>


								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">06</span>
										<h4 className="title"><Link href="/#">Change Enablement & Measurement</Link></h4>
										<p className="des">Training, adoption tracking, organizational readiness, and KPI dashboards.</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-4 mb-30">
									<div className="tf-performance">
										<span className="number">07</span>
										<h4 className="title"><Link href="/#">Continuous Strategy Support</Link></h4>
										<p className="des">Quarterly reviews, roadmap updates, innovation ideation, and optimization cycles.</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/*  Partner */}
					<section className="section-partner-h2 style-white pt-122 pb-130 bg-4 ">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title center mb-60">
										<span className="sub-title text-blue1 font-man">Global Partners</span>
										<h2 className="title">We’ve 1250+ Global <span className="text-blue1">partners</span></h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 mb-10">
									<Swiper {...collection1} className="swiper collection-1 overflow-hiden">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br1.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br2.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br3.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br4.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br5.png" alt="image" />
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
								<div className="col-md-12">
									<Swiper {...collection2} className="swiper collection-2 overflow-hiden">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br6.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br7.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br9.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br10.png" alt="image" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-partner-logo">
													<img src="/assets/images/brand/br8.png" alt="image" />
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
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
														How much does it cost to build an app?
													</span>
												</h3>
												<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														How do you create an app without any coding?
													</span>
												</h3>
												<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Can you create an app for free?
													</span>
												</h3>
												<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
														How can I create my own app?
													</span>
												</h3>
												<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h3 className="accordion-header" onClick={() => handleAccordion(5)}>
													<span className={isAccordion == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefire" aria-expanded="false" aria-controls="collapsefire">
														How do I start an app business?
													</span>
												</h3>
												<div id="collapsefire" className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														We approached WiaTech with complex project Designing a website can
														involve various such
														as layout, graphics, content, and experience more specific response
														elaborate
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-5">
									<div className="image-faq-team">
										<img src="/assets/images/Services/faq.jpg" alt="image" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<CaseStudies3 />
					{/* Contact */}
					<section className="section-contact contact-service-details bg-5 pt-130 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-5">
									<div className="content">
										<div className="heading-title mb-40">
											<span className="sub-title text-white font-man">Work Inquiry</span>
											<h2 className="title text-white">Let’s Work For your
												Next Projects ?</h2>
											<p className="des font-man text-white">We denounce with righteous indignation and
												like men beguiled and demoralized by the charms</p>
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