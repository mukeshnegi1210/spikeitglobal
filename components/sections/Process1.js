
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function Process1() {
	return (
		<>

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
		</>
	)
}
