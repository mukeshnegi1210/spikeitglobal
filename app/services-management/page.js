'use client'
import { useState } from 'react';
import CircleProgress from "@/components/elements/CircleProgress"
import CounterNumber from "@/components/elements/CounterNumber"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Home6 from '../home6/page';
import Service2 from '@/components/sections/Service2';
import MainSlider6 from '@/components/sections/MainSlider6';
import Process1 from '@/components/sections/Process1';
import Contact1 from '@/components/sections/Contact1';
import AboutUs1 from '@/components/sections/AboutUs1';
import Feature1 from '@/components/sections/Feature1';
import Partner5 from '@/components/sections/Partner5';
import CaseStudies3 from '@/components/sections/CaseStudies3';
import { Swiper, SwiperSlide } from "swiper/react"
import { collection1, collection2 } from "@/utils/swiperOptions"
export default function Service1() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<Layout headerStyle={1} footerStyle={5}>
			<section className="banner-home5 bg-1 relative">
				<img src="/assets/images/page/mask-hero.png" alt="image" className="mask-hero" />
				<div className="tf-container">
					<div className="row banner-home5-wrap">
						<div className="col-md-6">
							<div className="content">
								<span className="sub-title fw-600 font-man text-blue2 wow fadeInUpSmall" data-wow-delay=".2s"><i className="icon-angle-downs" />Smarter, Safer, Faster</span>
								<h1 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Accelerate Your Digital Transformation with 
									<span className="text-blue2 mask"> SpikeIT</span>
								</h1>
								<div className="btn-wrap flex-three">
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/services" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".5s">
										<Link href="/contact-us" className="learn-more text-white">Learn More <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="image">
								<img src="https://wiatechnextjs.vercel.app/assets/images/page/image-hero.jpg" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-about-us relative">
				<div className="tf-container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="about-us-image relative">
								<img src="/assets/images/page/about-h1.jpg" alt="image" className="wow zoomIn" data-wow-delay=".3s" />
								<div className="vector wow fadeInLeft" data-wow-delay=".3s">
									<svg width={202} height={200} viewBox="0 0 202 200" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M100.735 47.7898L125.02 0L124.313 53.6011L168.026 22.5699L142.49 69.7042L195.616 62.542L151.103 92.4101L201.471 110.759L148.177 116.519L184.249 156.171L134.38 136.503L147.894 188.377L112.878 147.79L100.735 200L88.5931 147.79L53.5771 188.377L67.0903 136.503L17.2222 156.171L53.2934 116.519L0 110.759L50.3677 92.4101L5.85532 62.542L58.9808 69.7042L33.4452 22.5699L77.1583 53.6011L76.4508 0L100.735 47.7898Z" fill="currentcolor" />
									</svg>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-6 col-xl-4">
							<div className="about-us-content wow fadeInUpSmall" data-wow-delay=".2s">
								<div className="heading-title">
									<span className="sub-title texts-blue font-man">Simplify Your Digital Journey with SpikeIT</span>
									<h2 className="title"> Your Trusted Partner in <br /> Cloud-Driven Transformation
										{/* <span className="animationtext clip texts-blue">
											<TextAnimation text1="Wiatech" text2="Wetech" />
										</span> */}
									</h2>
								</div>
								<ul className="icon-listing">
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man"> <strong>Smooth Cloud Migrations</strong> <br /> Fast, secure, and hassle-free transitions.</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man"> <strong>Custom Solutions</strong> <br /> Aligned with your unique business goals.</p>
									</li>
									<li className="flex-three">
										<i className="icon-Check" />
										<p className="font-man"><strong>Expert Support</strong> <br /> Continuous guidance and optimization.</p>
									</li>
								</ul>
								<Link href="/about-company" className="button-src">Read More <i className="icon-angle-right" /></Link>
							</div>
						</div>
						<div className="col-12 col-md-12 col-lg-12 col-xl-4">
							<div className="about-us-counter wow fadeInUpSmall" data-wow-delay=".3s">
								<h3 className="title">12+ Years of Driving Innovation Through Technology
								</h3>
								<p className="des">At SpikeIT, we specialize in enabling cloud-driven digital transformation.
									With deep industry expertise and a future-focused mindset, we help businesses modernize, scale, and thrive in an ever-evolving digital world.

								</p>
								<div className="line" />
								<div className="flex-one counter-wrap-about">
									<div className="counter-style1 tf-counters">
										<div className="icon">
											<i className="icon-costumer-11" />
										</div>
										<div className="number-counter number-kplus numbers" data-to={56} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={56} /></div>
										<p className="des">Satisfied Customers</p>
									</div>
									<div className="counter-style1 tf-counters">
										<div className="icon">
											<i className="icon-sampp" />
										</div>
										<div className="number-counter number-mplus numbers" data-to={8} data-speed={2000} data-waypoint-active="yes"><CounterNumber count={8} /></div>
										<p className="des">Project Complete</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-service-h2 pt-122 bg-1 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center w-650 m0-auto mb-60">
								<span className="sub-title text-white font-man wow fadeInUpSmall" data-wow-delay=".2s">Popular Services</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Empowering Your
									Startup
									with Our Services</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".2s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-analysis" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/strategy-consultation-services">Strategy and Consultation</Link></h3>
									<p className="des"> Aligning technology with business goals to accelerate digital transformation.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".3s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-cloud-computing" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/cloud-services">Cloud Services</Link></h3>
									<p className="des"> Delivering secure, scalable cloud solutions that drive agility and innovation.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-artificial-intelligence" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/">Data & AI Services</Link></h3>
									<p className="des"> Empowering smarter decisions through data engineering and AI insights.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".4s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-infrastructure" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/infrastructure-services">Infrastructure Plan</Link></h3>
									<p className="des"> Modernizing IT infrastructure for performance, reliability, and growth.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".5s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-cyber-security-1" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/cyber-security-services">Cyber Security Services</Link></h3>
									<p className="des">Protecting your digital assets with end-to-end security solutions.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".6s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-software-development-1" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/software-engineering-services">Software Engineering Services</Link></h3>
									<p className="des"> Building custom software that’s scalable, agile, and business-ready.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".6s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-self-development-2" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/web-development-services">Web Development Services</Link></h3>
									<p className="des"> Creating seamless, responsive web solutions that engage and perform.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".6s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-product-development" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/project-management-services">Project Management Services</Link></h3>
									<p className="des"> Driving efficient, on-time delivery through expert project leadership.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 wow fadeInUpSmall" data-wow-delay=".6s">
							<div className="icon-box-8 flex">
								<div className="icon">
									<i className="icon-technical-support-1" />
								</div>
								<div className="content">
									<h3 className="title"><Link href="/itsm-services">ITSM</Link></h3>
									<p className="des"> Optimizing IT operations with tailored ServiceNow implementations.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-122 pb-130 section-process bg-3 relative">
				<div className="tf-container">
					<div className="row ">
						<div className="col-lg-12">
							<div className="heading-title center mb-50">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">Working Process</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">How SpikeIT Drives Digital Transformation
									{/* <span className=" text-blue1 mask">
										<TextAnimation text1="Works" text2="Wetech" />
									</span> */}
								</h2>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-md-5">
							<div className="process-content-wrap">
								<div className="step-item mb-20 wow fadeInUpSmall" data-wow-delay=".2s">
									<span className="step">step 01</span>
									<h5 className="title"><Link href="/#">Identify Business Challenges</Link></h5>
									<p className="des"> We collaborate with you to clearly define key pain points and transformation goals aligned with your business vision.</p>
								</div>
								<div className="step-item mb-20 wow fadeInUpSmall" data-wow-delay=".3s">
									<span className="step">step 02</span>
									<h5 className="title"><Link href="/#"> Gather & Integrate Data</Link></h5>
									<p className="des"> We collect and unify data from multiple sources to create a comprehensive, real-time view for better decision-making.</p>
								</div>
								<div className="step-item wow fadeInUpSmall" data-wow-delay=".4s">
									<span className="step">step 03</span>
									<h5 className="title"><Link href="/#"> Analyze & Optimize</Link></h5>
									<p className="des"> Leveraging advanced analytics and AI, we turn data into actionable insights that fuel continuous innovation and growth.</p>
								</div>
							</div>
						</div>
						<div className="col-md-7">
							<div className="process-image-wrap layer">
								<img src="/assets/images/page/Illustration-h3.svg" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="section-feature bg-2 relative">
				<div className="tf-container full">
					<div className="row">
						<div className="col-lg-12 col-xl-5">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall">Leading Cloud & Digital Transformation Solutions</span>
									<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s"> We Empower your Business with Innovative Cloud & Digital Strategies. </h2>
									<p className="des wow fadeInUpSmall" data-wow-delay=".4s">We help you navigate the complexities of transformation to unlock lasting value and growth.</p>
								</div>
								<div className="flex progres-wrap mb-50  wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="progress-box1 flex-three">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress percentage={68} />
											</div>
										</div>
										<div className="content-progress">
											<h5> Business Strategy Alignment</h5>
										</div>
									</div>
									<div className="progress-box2 flex-three">
										<div className="progress-skill">
											<div className="couter2">
												<CircleProgress percentage={93} />
											</div>
										</div>
										<div className="content-progress">
											<h5> Technology Solutions Excellence</h5>
										</div>
									</div>
								</div>
								<div className="btn-wrap-about flex-three wow fadeInUpSmall" data-wow-delay=".5s">
									<Link href="/#" className="button-src">Read More <i className="icon-angle-right" /></Link>

								</div>
							</div>
						</div>
						<div className="col-lg-12 col-xl-7">
							<div className="image relative">
								<img src="/assets/images/page/feature-h1.jpg" alt="image" />
								<div className="quote-feature-wrap">
									<div className="counter  tf-counters">
										<div className="numbers number-style" data-speed={2000} data-to={25} data-inviewport="yes"><CounterNumber count={25} /></div>
									</div>
									<span className="text-white">Years Of Experience</span>
									<div className="icon-svg">
										<svg width={148} height={5} viewBox="0 0 148 5" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C116.617 2.03846 118.83 2.07692 121.1 2.15385C122.76 2.19231 124.476 2.23077 126.136 2.26923C127.354 2.30769 128.516 2.34615 129.734 2.38462C133.221 2.5 136.763 2.65385 140.25 2.80769C141.135 2.84615 142.021 2.88462 142.906 2.92308C143.847 2.96154 144.844 3 145.784 3.07692C145.951 3.07692 146.061 3.11539 146.227 3.15385C146.615 3.19231 146.947 3.19231 147.279 3.03846C147.611 2.92308 147.832 2.69231 147.943 2.46154C148.164 1.96154 147.722 1.42308 146.947 1.26923C146.283 1.15385 145.618 1.11538 145.01 1.03846C144.567 1 144.124 0.961538 143.681 0.961538C142.796 0.884615 141.91 0.884615 141.08 0.807692C139.53 0.769231 137.87 0.692308 136.265 0.615385Z" fill="currentcolor" />
										</svg>
									</div>
									<div className="review text-white">
										<i className="icon-start" />
										<i className="icon-start" />
										<i className="icon-start" />
										<i className="icon-start" />
										<i className="icon-start" />
										<span>Trustpoint</span>
									</div>
									<div className="start">
										<span>4.9</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-partner-h2 style-white pt-122 pb-130 bg-9 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center mb-60">
								<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Global Partners</span>
								<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">We’ve 1250+ Global <span className="text-blue2 mask">partners</span></h2>
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
			<CaseStudies3/>
			<Contact1 />

			{/* <MainSlider6 />
			<AboutUs1/>
			<Service2/>
			<Process1/>
			<Feature1/>
			<Partner5/>
			<Contact1/> */}

		</Layout>
	)
}