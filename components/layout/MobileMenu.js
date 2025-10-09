"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div
        class="navbar-collapse collapse clearfix"
        id="navbarSupportedContent"
      >
        <ul className="navigation clearfix">
          {/* <li className={`${pathname === "/" ? "current" : ""}`}>
            <Link href="/">Home</Link>
          </li> */}

          <li
            className={`dropdown2 ${
              isAccordion == 1 ? "open" : ""
            } ${checkParentActive(["/about-us", "/about-us", "/about-us"])}`}
          >
            <Link href="/#">About</Link>
            <ul style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/about-us")}`}>
                <Link href="/about-us/#About">About Us</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/about-us")}`}>
                <Link href="/about-us/#WhyUs">What make us different</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/about-us")}`}>
                <Link href="/about-us/#OurVision">Our Vision and Mission</Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(1)} />
          </li>

          <li
            className={`dropdown2 ${
              isAccordion == 3 ? "open" : ""
            } ${checkParentActive([
              "/strategy-consultation-services",
              "/cloud-services",
              "/data-ai-services",
              "/cyber-security-services",
              "/web-development-services",
              "/itsm-services",
            ])}`}
          >
            <Link href="/#">Services</Link>
            <ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
              <li
                className={`${checkCurrentMenuItem(
                  "/strategy-consultation-services"
                )}`}
              >
                <Link href="/strategy-consultation-services">
                  Strategy & Consultation
                </Link>
              </li>
              <li className={`${checkCurrentMenuItem("/cloud-services")}`}>
                <Link href="/cloud-services">Cloud Transformation </Link>
              </li>
              <li className={`${checkCurrentMenuItem("/data-ai-services")}`}>
                <Link href="/data-ai-services">Data & AI </Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/cyber-security-services"
                )}`}
              >
                <Link href="/cyber-security-services">Cyber Security</Link>
              </li>

              <li
                className={`${checkCurrentMenuItem(
                  "/web-development-services"
                )}`}
              >
                <Link href="/web-development-services">
                  Application & Web Development{" "}
                </Link>
              </li>

              <li className={`${checkCurrentMenuItem("/itsm-services")}`}>
                <Link href="/itsm-services">
                  IT Service Management-ServiceNow
                </Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(3)} />
          </li>
          <li
            className={`dropdown2 ${
              isAccordion == 4 ? "open" : ""
            } ${checkParentActive([
              "/industries",
              "/industries",
              "/industries",
              "/industries",
            ])}`}
          >
            <Link href="/#">Industries</Link>
            <ul style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
              <li
                className={`${checkCurrentMenuItem(
                  "/industries/#Transportation"
                )}`}
              >
                <Link href="/industries/#Transportation">Transportation</Link>
              </li>
              <li
                className={`${checkCurrentMenuItem("/industries/#Healthcare")}`}
              >
                <Link href="/industries/#Healthcare">HealthCare </Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/industries/#LifeSciencesPharma"
                )}`}
              >
                <Link href="/industries/#LifeSciencesPharma">
                  Life Sciences & Pharma
                </Link>
              </li>

              <li
                className={`${checkCurrentMenuItem(
                  "/industries/#BankingFinancialServices"
                )}`}
              >
                <Link href="/industries/#BankingFinancialServices">
                  Banking & Financial
                </Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/industries/#MediaEntertainment"
                )}`}
              >
                <Link href="/industries/#MediaEntertainment">
                  Media & Entertainment
                </Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(4)} />
          </li>

          <li className={`${pathname === "/partnerships" ? "current" : ""}`}>
            <Link href="/partnerships">Partnerships</Link>
          </li>

          <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
