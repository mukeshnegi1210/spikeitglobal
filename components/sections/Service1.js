import Link from "next/link";

export default function Service1() {
  return (
    <>
      <section className="section-service pt-122 pb-130 bg-2">
        <div className="tf-container">
          <div className="heading-title center mb-60">
            <span
              className="sub-title texts-blue font-man wow fadeInUpSmall"
              data-wow-delay=".2s"
            >
              Popular Services
            </span>
            <h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">
              Services We Provide
            </h2>
          </div>
          <div
            className="service-grid mb-40 wow fadeInUpSmall"
            data-wow-delay=".3s"
          >
            <div className="icon-box1">
              <div className="icon-box1-visible flex-two">
                <div className="content">
                  <span className="number mb-15">01</span>
                  <h3 className="title mb-47">
                    <Link href="/strategy-consultation-services">
                      Strategy and Consultation
                    </Link>
                  </h3>
                  <div className="icon">
                    <i className="icon-Icon11" />
                  </div>
                </div>
                <div className="button-icon-box">
                  <Link
                    href="/strategy-consultation-services"
                    className="service-link"
                  >
                    <i className="icon-angle-downs" />
                  </Link>
                </div>
              </div>
              <div className="icon-box1-hide">
                <div className="flex-one">
                  <div className="icon">
                    <i className="icon-Icon11" />
                  </div>
                  <span className="number">01</span>
                </div>
                <h3 className="title">
                  <Link href="/strategy-consultation-services">
                    Strategy and Consultation
                  </Link>
                </h3>
                <p className="des">
                  {" "}
                  Aligning technology with business goals to accelerate digital
                  transformation.
                </p>
                <div className="button-icon-box">
                  <Link
                    href="/strategy-consultation-services"
                    className="service-link"
                  >
                    Read More
                    <i className="icon-right-icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="icon-box1">
              <div className="icon-box1-visible flex-two">
                <div className="content">
                  <span className="number mb-15">02</span>
                  <h3 className="title mb-47">
                    <Link href="/cloud-services">Cloud Transformation</Link>
                  </h3>
                  <div className="icon">
                    <i className="icon-self-development-2" />
                  </div>
                </div>
                <div className="button-icon-box">
                  <Link href="/cloud-services" className="service-link">
                    <i className="icon-angle-downs" />
                  </Link>
                </div>
              </div>
              <div className="icon-box1-hide">
                <div className="flex-one">
                  <div className="icon">
                    <i className="icon-self-development-2" />
                  </div>
                  <span className="number">02</span>
                </div>
                <h3 className="title">
                  <Link href="/cloud-services">Cloud Transformation</Link>
                </h3>
                <p className="des">
                  {" "}
                  Delivering secure, scalable cloud solutions that drive agility
                  and innovation.
                </p>
                <div className="button-icon-box">
                  <Link href="/cloud-services" className="service-link">
                    Read More
                    <i className="icon-right-icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="icon-box1">
              <div className="icon-box1-visible flex-two">
                <div className="content">
                  <span className="number mb-15">03</span>
                  <h3 className="title mb-47">
                    <Link href="/data-ai-services">Data & AI </Link>
                  </h3>
                  <div className="icon">
                    <i className="icon-data-management-1" />
                  </div>
                </div>
                <div className="button-icon-box">
                  <Link href="/data-ai-services" className="service-link">
                    <i className="icon-angle-downs" />
                  </Link>
                </div>
              </div>
              <div className="icon-box1-hide">
                <div className="flex-one">
                  <div className="icon">
                    <i className="icon-data-management-1" />
                  </div>
                  <span className="number">03</span>
                </div>
                <h3 className="title">
                  <Link href="/data-ai-services">Data & AI </Link>
                </h3>
                <p className="des">
                  {" "}
                  Empowering smarter decisions through data engineering and AI
                  insights.
                </p>
                <div className="button-icon-box">
                  <Link href="/data-ai-services" className="service-link">
                    Read More
                    <i className="icon-right-icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="icon-box1">
              <div className="icon-box1-visible flex-two">
                <div className="content">
                  <span className="number mb-15">04</span>
                  <h3 className="title mb-47">
                    <Link href="/cyber-security-services">Cyber Security</Link>
                  </h3>
                  <div className="icon">
                    <i className="icon-start-up" />
                  </div>
                </div>
                <div className="button-icon-box">
                  <Link
                    href="/cyber-security-services"
                    className="service-link"
                  >
                    <i className="icon-angle-downs" />
                  </Link>
                </div>
              </div>
              <div className="icon-box1-hide">
                <div className="flex-one">
                  <div className="icon">
                    <i className="icon-start-up" />
                  </div>
                  <span className="number">04</span>
                </div>
                <h3 className="title">
                  <Link href="/cyber-security-services">Cyber Security</Link>
                </h3>
                <p className="des">
                  Protecting your digital assets with end-to-end security
                  solutions.
                </p>
                <div className="button-icon-box">
                  <Link
                    href="/cyber-security-services"
                    className="service-link"
                  >
                    Read More
                    <i className="icon-right-icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="icon-box1">
              <div className="icon-box1-visible flex-two">
                <div className="content">
                  <span className="number mb-15">05</span>
                  <h3 className="title mb-47">
                    <Link href="/web-development-services">
                      Application & Web Development
                    </Link>
                  </h3>
                  <div className="icon">
                    <i className="icon-cloud-network" />
                  </div>
                </div>
                <div className="button-icon-box">
                  <Link
                    href="/web-development-services"
                    className="service-link"
                  >
                    <i className="icon-angle-downs" />
                  </Link>
                </div>
              </div>
              <div className="icon-box1-hide">
                <div className="flex-one">
                  <div className="icon">
                    <i className="icon-cloud-network" />
                  </div>
                  <span className="number">05</span>
                </div>
                <h3 className="title">
                  <Link href="/web-development-services">
                    Application & Web Development
                  </Link>
                </h3>
                <p className="des">
                  Build Modern, Scalable, and Engaging Applications
                </p>
                <div className="button-icon-box">
                  <Link
                    href="/web-development-services"
                    className="service-link"
                  >
                    Read More
                    <i className="icon-right-icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="icon-box1">
              <div className="icon-box1-visible flex-two">
                <div className="content">
                  <span className="number mb-15">06</span>
                  <h3 className="title mb-47">
                    <Link href="/itsm-services">
                      Service Management-ServiceNow
                    </Link>
                  </h3>
                  <div className="icon">
                    <i className="icon-cloud-network" />
                  </div>
                </div>
                <div className="button-icon-box">
                  <Link href="/itsm-services" className="service-link">
                    <i className="icon-angle-downs" />
                  </Link>
                </div>
              </div>
              <div className="icon-box1-hide">
                <div className="flex-one">
                  <div className="icon">
                    <i className="icon-cloud-network" />
                  </div>
                  <span className="number">06</span>
                </div>
                <h3 className="title">
                  <Link href="/itsm-services">
                    Service Management-ServiceNow
                  </Link>
                </h3>
                <p className="des">
                  {" "}
                  Optimizing IT operations with tailored ServiceNow
                  implementations.
                </p>
                <div className="button-icon-box">
                  <Link href="/itsm-services" className="service-link">
                    Read More
                    <i className="icon-right-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
