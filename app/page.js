import Layout from "@/components/layout/Layout"
import AboutUs1 from "@/components/sections/AboutUs1"
import Blog1 from "@/components/sections/Blog1"
import CaseStudies1 from "@/components/sections/CaseStudies1"
import Contact1 from "@/components/sections/Contact1"
import Cta1 from "@/components/sections/Cta1"
import Feature1 from "@/components/sections/Feature1"
import Feature2 from "@/components/sections/Feature2"
import MainSlider1 from "@/components/sections/MainSlider1"
import MarqueText1 from "@/components/sections/MarqueText1"
import Partner1 from "@/components/sections/Partner1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import CaseStudies3 from "@/components/sections/CaseStudies3"
import Process1 from "@/components/sections/Process1"
import Partner2 from "@/components/sections/Partner2"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={2}>
				<MainSlider1 />
				<Partner1 />
				<AboutUs1 />
				<Service1 />
				<Feature1 />
				{/* <Cta1 /> */}
				<Process1/>
				<CaseStudies3/>
				<Contact1 />
				<Partner2/>
			</Layout>
		</>
	)
}