import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer id="footer" className="bg-1">
        <div className="tf-container">
          <div className="row footer-top flex-three">
            <div className="col-md-3">
              <Link href="/#" className="logo-footer">
                <img src="/assets/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-md-9">
              <ul className="social-footer flex-six">
                <li className="fw-700">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/SpikeITGlobalSolutions"
                    className="font-man"
                  >
                    <i className="icon-facebook" />
                    Facebook
                  </Link>
                </li>
                <li  className="fw-700">
                  <Link
                    target="_blank"
                    href="https://x.com/SpikeIT_Global"
                    className="font-man"
                  >
                    <i className="icon-tw" />
                    Twitter
                  </Link>
                </li>
                <li className="fw-700">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/spikeit-global-solutions-inc"
                    className="font-man"
                  >
                    <i className="icon-in" />
                    LinkedIn
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
                    <Link href="/industries#Transportation">
                      Transportation
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries#Healthcare">Healthcare </Link>
                  </li>
                  <li>
                    <Link href="/industries#LifeSciencesPharma">
                      Life Sciences & Pharma{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries#BankingFinancialServices">
                      Banking & Financial{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries#MediaEntertainment">
                      Media & Entertainment{" "}
                    </Link>
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
                    <Link href="/cyber-security-services">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/web-development-services">
                      Application & Web Development
                    </Link>
                  </li>

                  <li>
                    <Link href="/itsm-services">
                      Service Management - ServiceNow
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-main-locations">
                <h5 className="title-footer text-white">Address</h5>
                <p className="mb-20">
                  SpikeIT Global Solutions, Inc <br />
                  100 Horizon Center Blvd,
                  <br />
                  Hamilton, NJ 08691
                </p>
                <h5 className="title-footer text-white">Contact Us</h5>
                <p>Mail: info@spikeitglobal.com</p>
                <p>Phone: +1 732-820-0276</p>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-lg-12">
              <p className="coppy-right center text-white">
                © 2025 SpikeIT - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
