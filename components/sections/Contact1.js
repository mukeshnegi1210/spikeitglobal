export default function Contact1({ hasYellowBg }) {
  return (
    <>
      <section
        className={`section-contact bg-1 pt-130 pb-130 ${
          hasYellowBg ? "contact-service-details bg-5" : ""
        }`}
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="heading-title mb-40 ">
                  <span
                    className="sub-title text-white font-man wow fadeInUpSmall"
                    data-wow-delay=".2s"
                  >
                    Work Inquiry
                  </span>
                  <h2
                    className="title text-white wow fadeInUpSmall"
                    data-wow-delay=".3s"
                  >
                    Ready to Transform Your Business?
                  </h2>
                  <p
                    className="des font-man text-white wow fadeInUpSmall"
                    data-wow-delay=".4s"
                  >
                    Let’s collaborate on your next project and unlock the power
                    of digital innovation together.
                  </p>
                </div>
                <div
                  className="contact-wrap flex-three mb-40 wow fadeInUpSmall"
                  data-wow-delay=".4s"
                >
                  <div className="icon text-white">
                    <i className="icon-phones" />
                  </div>
                  <div className="contact-content">
                    <span className="font-man text-white">Call For Inquiry</span>
                    <p>+1 732-820-0276</p>
                  </div>
                </div>
                <div
                  className="contact-wrap flex-three wow fadeInUpSmall"
                  data-wow-delay=".5s"
                >
                  <div className="icon text-white">
                    <i className="icon-envelopes" />
                  </div>
                  <div className="contact-content">
                    <span className="font-man text-white">Send Us Email</span>
                    <p>info@spikeitglobal.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-contact-home1">
                <div className="inner-title-form center mb-30">
                  <h3 className="title-form">Need Help For Project!</h3>
                  <p>
                    We are ready to help your next projects, let’s work together
                  </p>
                </div>
                <form
                  className="form-contact-home"
                  id="contactform"
                  method="post"
                  action="./contact/contact-process.php"
                >
                  <div className="mb-20">
                    <fieldset className="relative mb-20">
                      <input
                        type="text"
                        className="form-control"
                        id="name-input"
                        placeholder="Name"
                        name="name"
                        required
                      />
                      <i className="icon-user" />
                    </fieldset>
                  </div>
                  <div className="input-group flex-one">
                    <fieldset className="relative mb-20">
                      <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        placeholder="Email"
                        name="email"
                        required
                      />
                      <i className="icon-envelopes" />
                    </fieldset>
                    <fieldset className="relative mb-20">
                      <input
                        type="text"
                        className="form-control"
                        id="name-input"
                        placeholder="Phone"
                        name="phone"
                        required
                      />
                      <i className="icon-phone" />
                    </fieldset>
                  </div>

                  <fieldset className=" mb-15">
                    <textarea
                      rows={4}
                      cols={50}
                      placeholder="Message"
                      name="message"
                      id="message"
                      required
                    />
                  </fieldset>
                  <fieldset className="center">
                    <button className="btn-submit" type="submit">
                      Send <i className="icon-right-icon" />
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
