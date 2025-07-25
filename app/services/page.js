'use client'
import { useState } from 'react';
import CircleProgress from "@/components/elements/CircleProgress"
import CounterNumber from "@/components/elements/CounterNumber"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service1() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<Layout breadcrumbTitle="Popular Services">
				<div>
					<section className="pt-122 pb-130 ">
						<div className="tf-container">
							<div className="row relative z-index-3 mb-60">
								<div className="col-md-8">
									<div className="heading-title optimize-olutions-left w-650">
										<span className="sub-title text-blue2 font-man">Customer Centric Approach</span>
										<h2 className="title">Simplifying Cloud. <br /> Amplifying {" "}
											<span className="text-blue2">Possibilities</span></h2>
									</div>
								</div>
								<div className="col-md-4">
									<div className="optimize-olutions-right">
										<div className="mb-3">
											<h4>Professional IT & Cloud Experts</h4>
											<p>Our certified team delivers smart, scalable, and secure solutions tailored to your business needs.
											</p>
										</div>
										<div className="mb-3">
											<h4>Award-Winning Technology Solutions</h4>
											<p>Recognized for excellence in cloud services, infrastructure management, and IT innovation.
											</p>
										</div>
										<div className="mb-3">
											<h4>Dedicated Technology Services</h4>
											<p>
												From strategy to execution — your trusted partner in digital transformation.
											</p>
										</div>

									</div>
								</div>
							</div>
							<div className="row relative z-index-3">
								<div className="col-md-4">
									<div className="tf-image-box2 style-dark">
										<Link href="/#" className="image">
											<img src="/assets/images/image-box/os-h31.jpg" alt="image" />
										</Link>
										<div className="content mt-3">
											<h3 className="">Cost Effectiveness</h3>

										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="tf-image-box2 style-dark">
										<Link href="/#" className="image">
											<img src="/assets/images/image-box/os-h32.jpg" alt="image" />
										</Link>
										<div className="content mt-3">
											<h3 className="">Innovation Technology</h3>


										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="tf-image-box2 style-dark">
										<Link href="/#" className="image">
											<img src="/assets/images/image-box/os-h33.jpg" alt="image" />
										</Link>
										<div className="content mt-3">

											<h3 className="">Industry Expertise</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Marque text */}
					<section className="marque-text-style bg-5">
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<div className="marquee-wrapper text-slider ">
										<div className="marquee-inner to-left">
											<ul className="marqee-list d-flex marque-slider">
												<li className="marquee-item">
													<span className="text-slider">Web Design</span><i className="icon-asterisk" />
													<span className="text-slider">Digital Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Product Design</span><i className="icon-asterisk" />
													<span className="text-slider">Email Marketing</span><i className="icon-asterisk" />
													<span className="text-slider">Branding &amp; Design</span><i className="icon-asterisk" />
													<span className="text-slider">SEO</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
													<span className="text-slider">Data Security</span><i className="icon-asterisk" />
													<span className="text-slider">IT Services</span><i className="icon-asterisk" />
													<span className="text-slider">Cyber Security</span><i className="icon-asterisk" />
													<span className="text-slider">Data Security</span><i className="icon-asterisk" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Feature */}
					<section className="feature-home2 pt-122 pb-130">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-title center w-680 m0-auto mb-130">
										<span className="sub-title text-blue2 font-man">Popular Services</span>
										<h2 className="title">Services We Provide</h2>
									</div>
								</div>
							</div>
							<div className="feature-h2-wrap feature-service-page">
								<div className="row mt--70 mb-40">
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/strategy-consultation-services" className="icon-box3 active">
											<div className="flex-two icon-box-wrap">
												<span className="number">01</span>
												<div className="icons">
													<i className="icon-vector-dev" />
												</div>
											</div>
											<h3 className="title">Strategy and Consultation</h3>
											<div className="inner-bottom">
												<p className="des font-man">Aligning technology with business goals to accelerate digital transformation.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/cloud-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">02</span>
												<div className="icons">
													<i className="icon-cloud-computing" />
												</div>
											</div>
											<h3 className="title">Cloud Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">Delivering secure, scalable cloud solutions that drive agility and innovation.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/data-ai-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">03</span>
												<div className="icons">
													<i className="icon-planning-2" />
												</div>
											</div>
											<h3 className="title">Data & AI Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">Empowering smarter decisions through data engineering and AI insights.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/infrastructure-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">04</span>
												<div className="icons">
													<i className="icon-vector-dev" />
												</div>
											</div>
											<h3 className="title">Infrastructure Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">
													Modernizing IT infrastructure for performance, reliability, and growth.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className=" col-12 col-md-6 col-lg-4">
										<Link href="/cyber-security-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">05</span>
												<div className="icons">
													<i className="icon-start-up" />
												</div>
											</div>
											<h3 className="title">Cyber Security Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">Protecting your digital assets with end-to-end security solutions.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/software-engineering-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">06</span>
												<div className="icons">
													<i className="icon-cloud-network" />
												</div>
											</div>
											<h3 className="title">Software Engineering Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">Building custom software that’s scalable, agile, and business-ready.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/web-development-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">07</span>
												<div className="icons">
													<i className="icon-market-share" />
												</div>
											</div>
											<h3 className="title">Web Development Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">
													Creating seamless, responsive web solutions that engage and perform.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/project-management-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">08</span>
												<div className="icons">
													<i className="icon-software-development-1" />
												</div>
											</div>
											<h3 className="title">Project Management Services</h3>
											<div className="inner-bottom">
												<p className="des font-man">Driving efficient, on-time delivery through expert project leadership.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<Link href="/itsm-services" className="icon-box3">
											<div className="flex-two icon-box-wrap">
												<span className="number">09</span>
												<div className="icons">
													<i className="icon-software-development-1" />
												</div>
											</div>
											<h3 className="title">ITSM</h3>
											<div className="inner-bottom">
												<p className="des font-man">Optimizing IT operations with tailored ServiceNow implementations.</p>
												<div className="icon-bottom">
													<i className="icon-arrow-right" />
												</div>
											</div>
										</Link>
									</div>
								</div>

							</div>
						</div>
					</section>
					{/*  Feature */}
					<section className="pb-130 feature-home3">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="feature-h3-content">
										<div className="heading-title mb-60">
											{/* <span className="sub-title text-blue2 font-man">Cyber Security Solutions</span> */}
											<h2 className="title">Cloud Transformation Services –
												<span className="text-blue2"> Design, Run & Optimize</span></h2>
										</div>
										<div className="accordion accordion-h3" id="accordionExample">
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(1)}>
													<span className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														Cloud Design & Architecture Services
													</span>
												</h5>
												<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Strategically design scalable, secure, and high-performing cloud environments tailored to your business goals.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(2)}>
													<span className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														Cloud Migration Services

													</span>
												</h5>
												<div id="collapseTwo" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Seamlessly transition applications, data, and infrastructure to the cloud with minimal disruption and maximum efficiency.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(3)}>
													<span className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Managed Cloud Support Services
													</span>
												</h5>
												<div id="collapseThree" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														End-to-end management and 24x7 support to keep your cloud environment optimized, secure, and running smoothly.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h5 className="accordion-header" onClick={() => handleAccordion(4)}>
													<span className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefore" aria-expanded="false" aria-controls="collapsefore">
														Cloud Financial Operations (FinOps)
													</span>
												</h5>
												<div id="collapsefore" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
													<div className="accordion-body">
														Gain visibility and control over cloud spend with cost optimization, budgeting, and governance frameworks.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="feature-h3-image relative">
										<img src="/assets/images/service/image-solution.jpg" alt="image" />
										{/* <div className="counting-feature bg-5">
											<div className="progress-box2 flex-three">
												<div className="progress-skill">
													<div className="couter2">
														<CircleProgress percentage={98} />
													</div>
												</div>
												<div className="content-progress">
													<span className="percent2 text-white">98%</span>
													<h5 className="text-white">Project Success</h5>
												</div>
											</div>
											<div className="progress-box2 flex-three ">
												<div className="progress-skill">
													<div className="couter2">
														<CircleProgress percentage={93} />
													</div>
												</div>
												<div className="content-progress">
													<span className="percent2 text-white">63%</span>
													<h5 className="text-white">Happy Clients</h5>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Why chose us*/}
					<section className="pb-130 wcus-home3 bb-blog">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="image-wrapper-wcus3 relative">
										<div className="image-wcus3 flex">
											<img src="/assets/images/service/cta-list1.jpg" alt="imge" className="wcus-pt" />
											<img src="/assets/images/service/cta-list2.jpg" alt="imge" />
										</div>
										{/* <div className="quote-wcus-3 flex bg-5">
											<div className="icon">
												<i className="icon-medals-gif" />
											</div>
											<div className="content">
												<h5 className="title">Certified Company</h5>
												<p>Accelerate innovation with world match entire remote team</p>
											</div>
										</div> */}
									</div>
								</div>
								<div className="col-lg-6">
									<div className="content-wrapper-wcus3">
										<div className="heading-title mb-40">
											<span className="sub-title text-blue2 font-man">Why Choose Us</span>
											<h2 className="title">Empowering Businesses with End-to-End <span className="text-blue2"> IT & Cloud Solutions</span></h2>
											<p className="des">We lead with innovation—delivering integrated cloud, infrastructure, and digital services that future-proof your enterprise.</p>
										</div>
										<div className="row">
											<div className="col-sm-6">
												<div className="icon-box-wcus style2">
													<div className="icon">
														<i className="icon-icon-dev" />
													</div>
													<h4 className="title">Trusted Technology Partner</h4>
													<p className="des">We bring deep domain expertise and a results-driven mindset to every cloud and digital initiative.</p>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="icon-box-wcus style2">
													<div className="icon">
														<i className="icon-artificial-intelligence" />
													</div>
													<h4 className="title">Agility with Accountability</h4>
													<p className="des">SpikeIT delivers fast, flexible solutions while maintaining full transparency and ownership.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Cta*/}
					<section className="pt-130 pb-130 cta-service">
						<div className="tf-container">
							<div className="row align-center">
								<div className="col-md-7">
									<div className="heading-title">
										<span className="sub-title text-blue2 font-man">Get Consultations</span>
										<h2 className="title mb-40">We believe in strategic design, transparency, and collaborative delivery to drive successful IT & Cloud transformations.</h2>
										<Link href="/contact-us" className="button-src">Read More <i className="icon-angle-right" /></Link>
									</div>
								</div>
								<div className="col-md-5">
									<div className="image-cta-service">
										<img src="/assets/images/service/cta-list3.jpg" alt="image" />
										<div className="quote-feature-wrap">
											<div className="counter  tf-counters">
												<div className="numbers number-style" data-speed={2000} data-to={25} data-inviewport="yes"><CounterNumber count={12} /></div>
											</div>
											<span className="text-white">Years Of Experience</span>
											<div className="icon-svg">
												<svg width={148} height={5} viewBox="0 0 148 5" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C116.617 2.03846 118.83 2.07692 121.1 2.15385C122.76 2.19231 124.476 2.23077 126.136 2.26923C127.354 2.30769 128.516 2.34615 129.734 2.38462C133.221 2.5 136.763 2.65385 140.25 2.80769C141.135 2.84615 142.021 2.88462 142.906 2.92308C143.847 2.96154 144.844 3 145.784 3.07692C145.951 3.07692 146.061 3.11539 146.227 3.15385C146.615 3.19231 146.947 3.19231 147.279 3.03846C147.611 2.92308 147.832 2.69231 147.943 2.46154C148.164 1.96154 147.722 1.42308 146.947 1.26923C146.283 1.15385 145.618 1.11538 145.01 1.03846C144.567 1 144.124 0.961538 143.681 0.961538C142.796 0.884615 141.91 0.884615 141.08 0.807692C139.53 0.769231 137.87 0.692308 136.265 0.615385Z" fill="currentcolor" />
												</svg>
											</div>
											{/* <div className="review text-white">
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<i className="icon-start" />
												<span>Trustpoint</span>
											</div> */}
											<div className="start">
												<span>4.9</span>
											</div>
										</div>
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