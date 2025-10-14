import Layout from "@/components/layout/Layout";
import AboutUs1 from "@/components/sections/AboutUs1";
import Contact1 from "@/components/sections/Contact1";
import Feature1 from "@/components/sections/Feature1";
import MainSlider1 from "@/components/sections/MainSlider1";
import Partner1 from "@/components/sections/Partner1";
import Service1 from "@/components/sections/Service1";
import CaseStudies3 from "@/components/sections/CaseStudies3";
import Process1 from "@/components/sections/Process1";
import Partner2 from "@/components/sections/Partner2";
export default function Home() {
  return (
    <>
      <Layout>
        <MainSlider1 />
        <Partner1 />
        <AboutUs1 />
        <Service1 />
        <Feature1 />
        <Process1 />
        <CaseStudies3 />
        <Contact1 />
        <Partner2 />
      </Layout>
    </>
  );
}
