import Link from "next/link";
import CounterNumber from "../elements/CounterNumber";
import TextAnimation from "../elements/TextAnimation";

export default function AboutUs1() {
    return (
        <section className="section-about-us relative">
            <div className="tf-container">
                <div className="row">
                    {/* Left Image Section */}
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="about-us-image relative">
                            <img
                                src="/assets/images/page/about-h1.jpg"
                                alt="About SpikeIT"
                                className="wow zoomIn"
                                data-wow-delay=".3s"
                            />
                           
                        </div>
                    </div>

                    {/* Middle Content Section */}
                    <div className="col-12 col-md-6 col-xl-8">
                        <div className="about-us-content wow fadeInUpSmall" data-wow-delay=".2s">
                            <div className="heading-title">
                                <span className="sub-title texts-blue font-man">
                                    Simplify Your Digital Journey with SpikeIT
                                </span>
                                <h2 className="title">
                                    Your Trusted Partner in <br /> Cloud-Driven Transformation
                                    {/* Example usage of animation */}
                                    {/* 
                                    <span className="animationtext clip texts-blue">
                                        <TextAnimation text1="SpikeIT" text2="Wetech" />
                                    </span>
                                    */}
                                </h2>
                            </div>

                            <ul className="icon-listing">
                                <li className="flex-three">
                                    <i className="icon-Check" />
                                    <p className="font-man">
                                        <strong className="fw-semibold text-dark">Smooth Cloud Migrations</strong>
                                        <br />
                                        Fast, secure, and hassle-free transitions.
                                    </p>
                                </li>
                                <li className="flex-three">
                                    <i className="icon-Check" />
                                    <p className="font-man">
                                        <strong  className="fw-semibold text-dark">Custom Solutions</strong>
                                        <br />
                                        Aligned with your unique business goals.
                                    </p>
                                </li>
                                <li className="flex-three">
                                    <i className="icon-Check" />
                                    <p className="font-man">
                                        <strong  className="fw-semibold text-dark">Expert Support</strong>
                                        <br />
                                        Continuous guidance and optimization.
                                    </p>
                                </li>
                            </ul>

                            <Link href="/about-company" className="button-src">
                                Read More <i className="icon-angle-right" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Counter Section */}
                    {/* <div className="col-12 col-md-12 col-lg-12 col-xl-4">
                        <div className="about-us-counter wow fadeInUpSmall" data-wow-delay=".3s">
                            <h3 className="title">
                                12+ Years of Driving Innovation Through Technology
                            </h3>
                            <p className="des">
                                At SpikeIT, we specialize in enabling cloud-driven digital
                                transformation. With deep industry expertise and a future-focused
                                mindset, we help businesses modernize, scale, and thrive in an
                                ever-evolving digital world.
                            </p>
                            <div className="line" />

                            <div className="flex-one counter-wrap-about">
                                <div className="counter-style1 tf-counters">
                                    <div className="icon">
                                        <i className="icon-costumer-11" />
                                    </div>
                                    <div
                                        className="number-counter number-kplus numbers"
                                        data-to={56}
                                        data-speed={2000}
                                        data-waypoint-active="yes"
                                    >
                                        <CounterNumber count={56} />
                                    </div>
                                    <p className="des">Satisfied Customers</p>
                                </div>

                                <div className="counter-style1 tf-counters">
                                    <div className="icon">
                                        <i className="icon-sampp" />
                                    </div>
                                    <div
                                        className="number-counter number-mplus numbers"
                                        data-to={8}
                                        data-speed={2000}
                                        data-waypoint-active="yes"
                                    >
                                        <CounterNumber count={8} />
                                    </div>
                                    <p className="des">Project Complete</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
