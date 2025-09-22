'use client'
import CounterNumber from "@/components/elements/CounterNumber"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import { collection1, collection2, myTeamMember, myTesHome5 } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function AboutCompany() {

	return (
		<>

			<Layout breadcrumbTitle="About Company" pageTitle="" headerStyle={1}>
				<div>
					<section className="section-about-us about-us-page pd-section relative">
						<div className="tf-container">
							<div className="row">
								<div className="col-12 col-md-6 col-lg-6 col-xl-4">
									<div className="about-us-content">
										<div className="heading-title">
											<span className="sub-title texts-blue font-man">About Company</span>
											<h2 className="title">Make your life easier with help
												from <span className="texts-blue">SpikeIt</span></h2>
										</div>
										<ul className="icon-listing">
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man"> Professional & Skilled Team</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">Trusted Partner for Innovative Solutions</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man"> Proven Track Record in Delivering Results</p>
											</li>
											<li className="flex-three">
												<i className="icon-Check" />
												<p className="font-man">  Customer-Centric & Scalable Tech Services</p>
											</li>
										</ul>
										{/* <Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link> */}
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-6 col-xl-4">
									<div className="about-us-images relative">
										<img src="/assets/images/page/about1.jpg" alt="image" />
									</div>
								</div>
								<div className="col-12 col-md-12 col-lg-12 col-xl-4">
									<div className="about-us-counter">
										<h3 className="title">We’ve <Link href="/#">10+ Years</Link> Of Experience <br />
											In Tech Services
										</h3>
										<p className="des">At SpikeIT, we blend creativity, strategy, and technology to solve real-world problems. Whether you’re a startup or an enterprise, our mission is to help you scale, innovate, and lead in a digital-first world.


										</p>
										<div className="line" />
										<div className="flex-one">
											<div className="counter-style1 tf-counters">
												<div className="icon">
													<i className="icon-costumer-11" />
												</div>
												<div className="number-counter number-kplus numbers" data-to={56} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={56} /></div>
												<p className="des">Satisfied Customers</p>
											</div>
											<div className="counter-style1 tf-counters">
												<div className="icon">
													<i className="icon-costumer-11" />
												</div>
												<div className="number-counter number-mplus numbers" data-to={56} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={56} /></div>
												<p className="des">Project Complete</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Feature */}
					<section>
						<div className="tf-container full">
							<div className="row feature-about-wrap">
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-expert" />
										</div>
										<h2 className="title"><Link href="/#">Passionate</Link></h2>
										<p className="des">We love what we do and bring energy and innovation into every solution we deliver.

</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-hands" />
										</div>
										<h2 className="title"><Link href="/#">Respectful</Link></h2>
										<p className="des">We believe in collaboration, transparency, and mutual growth with clients and partners.


										</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-ownership" />
										</div>
										<h2 className="title"><Link href="/#">Ownership</Link></h2>
										<p className="des">We’re driven by results — creating measurable impact through high-performance tech.

</p>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-lg-3">
									<div className="tf-icon-box">
										<div className="icon">
											<i className="icon-wrench" />
										</div>
										<h2 className="title"><Link href="/#">Clients Services</Link></h2>
										<p className="des">Your growth is our priority. We go the extra mile to ensure your goals are achieved.

</p>
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
					
					{/*  fact */}
					<section className="pt-122 pb-130 bg-1 ">
						<div className="tf-container">
							<div className="fact-widget fact-about-us">
								<div className="heading-title">
									<span className="sub-title text-white font-man">Company Fun Fact</span>
									<h2 className="title text-white">Behind the Scenes <br /> Surprising Fun Facts <br /> About
										SpikeIT</h2>
								</div>
								<div className="counter-area flex">
									<div className="counter-items tf-counters">
										<div className="icon">
											<i className="icon-verified" />
										</div>
										<div className="content">
											<div className="number kplus  numbers" data-speed={2000} data-to={5} data-inviewport="yes"><CounterNumber count={5} />
											</div>
											<p>Project Complete</p>
										</div>
									</div>
									<div className="counter-items tf-counters">
										<div className="icon">
											<i className="icon-reviews" />
										</div>
										<div className="content">
											<div className="number kplus numbers" data-speed={2000} data-to={3} data-inviewport="yes"><CounterNumber count={3} />
											</div>
											<p>Satisficed Clients</p>
										</div>
									</div>
									<div className="counter-items tf-counters">
										<div className="icon">
											<i className="icon-medal-gif" />
										</div>
										<div className="content">
											<div className="number plus numbers" data-speed={2000} data-to={85} data-inviewport="yes"><CounterNumber count={85} />
											</div>
											<p>Awards Winning</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="video-about-us bg-1">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="video-about">
										<img src="/assets/images/page/video-about.jpg" alt="image" />
										<VideoPopup />
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*  Testimonial */}
					<section className="testimonial-video pb-130">
						<div className="tf-container">
							<div className="row mb-70">
								<div className="col-lg-12">
									<div className="heading-title center">
										<span className="sub-title text-blue1 font-man">Our Testimonials</span>
										<h2 className="title">1250+ Clients Say <span className="text-blue1">About Us</span></h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 relative">
									<div className="myteshome5-wrap overflow-hiden">
										<Swiper {...myTesHome5} className="swiper myteshome5 ">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="testimonial-style3 style3-h5 flex-three">
														<div className="image">
															<img src="/assets/images/testimonial/avt.jpg" alt="image" />
														</div>
														<div className="content">
															<p className="des">Climb the mountain not to plant your flag but to
																embrace
																the ways challenge, enjoy the air, and behold the. Climb it
																see the world, not so the world can see you.
															</p>
															<div className="testimonial-bottom flex-two">
																<div className="testimonial-top flex-three">
																	<i className="icon-des" />
																	<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span>
																	</p>
																</div>
																<div className="review">
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="testimonial-style3 style3-h5 flex-three">
														<div className="image">
															<img src="/assets/images/testimonial/avt.jpg" alt="image" />
														</div>
														<div className="content">
															<p className="des">Climb the mountain not to plant your flag but to
																embrace
																the ways challenge, enjoy the air, and behold the. Climb it
																see the world, not so the world can see you.
															</p>
															<div className="testimonial-bottom flex-two">
																<div className="testimonial-top flex-three">
																	<i className="icon-des" />
																	<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span>
																	</p>
																</div>
																<div className="review">
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="testimonial-style3 style3-h5 flex-three">
														<div className="image">
															<img src="/assets/images/testimonial/avt.jpg" alt="image" />
														</div>
														<div className="content">
															<p className="des">Climb the mountain not to plant your flag but to
																embrace
																the ways challenge, enjoy the air, and behold the. Climb it
																see the world, not so the world can see you.
															</p>
															<div className="testimonial-bottom flex-two">
																<div className="testimonial-top flex-three">
																	<i className="icon-des" />
																	<p className="name">Robert J. Hare/<span className="job font-man">Graphics Designer</span>
																	</p>
																</div>
																<div className="review">
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																	<i className="icon-start" />
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
											<div className="swiper-pagination" />
										</Swiper>
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
				</div>

			</Layout>
		</>
	)
}