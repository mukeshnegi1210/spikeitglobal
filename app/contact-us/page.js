import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ContactUs() {
  return (
    <>
      <Layout breadcrumbTitle="Contact Us">
        <div>
          <section className="contact-us-page pt-130 pb-130">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us-page-content">
                    <div className="heading-title">
                      <span className="sub-title texts-blue font-man">
                        Get In Touch
                      </span>
                      <h2 className="title">
                        Let’s Build Something <br /> Great Together <br />
                        
                      </h2>
                      <p className="des">
                       Have a question or a project in mind? Our team is ready to assist you with reliable and customized IT solutions.
                      </p>
                    </div>
                    <div className="contact-item-wrap">
                      <div className="contact-item">
                        <div className="flex item-contact">
                          <div className="icon">
                            <i className="icon-maps" />
                          </div>
                          <div className="content">
                            <h4>Location</h4>
                            <p>
                              SpikeIT Global Solutions, Inc 100 Horizon Center
                              Blvd, Hamilton, NJ 08691
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="flex item-contact">
                          <div className="icon">
                            <i className="icon-phones" />
                          </div>
                          <div className="content">
                            <h4>Phone</h4>
                            <p>+1 732-820-0276</p>
                          </div>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="flex item-contact">
                          <div className="icon">
                            <i className="icon-envelopes" />
                          </div>
                          <div className="content">
                            <h4>Email</h4>
                            <p>info@spikeitglobal.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="flex item-contact">
                          <div className="icon">
                            <i className="icon-share-nodes" />
                          </div>
                          <div className="content">
                            <h4>Social</h4>
                            <ul className="social-footer flex-three">
                              <li>
                                <Link href="https://www.facebook.com/SpikeITGlobalSolutions" target="_blank" className="flex-five">
                                  <i className="icon-facebook" />
                                </Link>
                              </li>
                              <li>
                                <Link href="https://x.com/SpikeIT_Global" target="_blank" className="flex-five">
                                  <i className="icon-twiter" />
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.linkedin.com/company/spikeit-global-solutions-inc" target="_blank" className="flex-five">
                                  <i className="icon-ins" />
                                </Link>
                              </li>
                            
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src="/assets/images/page/feature-h1.jpg" className="contact-us-img" alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-us-page-form bg-2">
                    <h3 className="title">Send Us Message</h3>
                    <form
                      className="contact-us-form"
                      id="contactform"
                      method="post"
                      action="./contact/contact-process.php"
                    >
                      <fieldset className="mb-18">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email"
                          name="name"
                          id="name"
                          required
                        />
                      </fieldset>
                      <fieldset className="mb-18">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your name"
                          name="email"
                          id="email"
                          required
                        />
                      </fieldset>
                      <fieldset className="mb-18">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="url"
                          name="url"
                          placeholder="Enter your phone number"
                          required
                        />
                      </fieldset>
                      <fieldset className=" mb-18">
                        <label>Message</label>
                        <textarea
                          rows={5}
                          cols={50}
                          placeholder="Write message"
                          name="message"
                          id="message"
                        />
                      </fieldset>
                      <fieldset>
                        <button className="btn-submit" type="submit">
                          Send  <i className="icon-right-icon" />
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="map-page">
            <div className="tf-container full">
              <div className="row">
                <div className="col-lg-12">
                  <div className="map relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
                      height={570}
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </Layout>
    </>
  );
}
