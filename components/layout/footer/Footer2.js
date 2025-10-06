import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer id="footer" className="bg-1">
        <div className="tf-container">
          <div className="row footer-top flex-three">
            <div className="col-md-3">
              <Link href="/#" className="logo-footer">
                <img src="/assets/images/logo-footer.png" alt="" />
              </Link>
            </div>
            <div className="col-md-9">
              <ul className="social-footer flex-six">
                <li>
                  <Link href="/#" className="font-man">
                    <i className="icon-facebook" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="font-man">
                    <i className="icon-tw" />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="font-man">
                    <i className="icon-in" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="font-man">
                    <i className="icon-instagram" />
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-main row">
            <div className="col-md-12 footer-main-right flex-one">
              <div className="footer-main-service">
                <h5 className="title-footer text-white">Quick Links</h5>
                <ul className="menu-service">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/industries">Industries </Link>
                  </li>
                  <li>
                    <Link href="/partnerships">Partnerships </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-main-service">
                <h5 className="title-footer text-white">Industries</h5>
                <ul className="menu-service">
                  <li>
                    <Link href="/strategy-consultation-services">
                      Transportation
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloud-services">Healthcare </Link>
                  </li>
                  <li>
                    <Link href="/cloud-services">Life Sciences & Pharma </Link>
                  </li>
                  <li>
                    <Link href="/cloud-services">Banking & Financial </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-main-service">
                <h5 className="title-footer text-white">Services</h5>
                <ul className="menu-service">
                  <li>
                    <Link href="/strategy-consultation-services">
                      Strategy and Consultation
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloud-services">Cloud Transformation </Link>
                  </li>
                  <li>
                    <Link href="/data-ai-services">Data & AI</Link>
                  </li>

                  <li>
                    <Link href="/infrastructure-services">
                      Cyber Security Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development-services">
                      Web and App Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/services-management">
                      Service Management - ServiceNow
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-main-locations">
                <h5 className="title-footer text-white">Locations</h5>
                <p className="font-man text-lcation text-white mb-20">
                  SpikeIT Global Solutions, Inc <br />
                  100 Horizon Center Blvd,
                  <br />
                  Hamilton, NJ 08691
                </p>
                <h5 className="title-footer text-white">Contact</h5>
                <p className="font-man text-lcation ">info@spikeitglobal.com</p>
                <p className="phone text-white">+1 732-820-0276</p>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-lg-12">
              <p className="coppy-right center text-white">
                © 2025 SpikeIT - IT Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
