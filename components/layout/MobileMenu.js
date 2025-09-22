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
          <li className={`${pathname === "/" ? "current" : ""}`}>
            <Link href="/">Home</Link>
          </li>

          <li
            className={`dropdown2 ${
              isAccordion == 1 ? "open" : ""
            } ${checkParentActive(["/about-us", "/why-us", "/vision"])}`}
          >
            <Link href="/#">About</Link>
            <ul style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/about-company")}`}>
                <Link href="/about-company">About Us</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/team")}`}>
                <Link href="/team">What make us different</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/team-details")}`}>
                <Link href="/team-details">Our Vision and Mission</Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(1)} />
          </li>
          <li
            className={`dropdown2 ${
              isAccordion == 2 ? "open" : ""
            } ${checkParentActive([
              "/about-company",
              "/team",
              "/vision-and-mission",
            ])}`}
          >
            <Link href="/#">Company</Link>
            <ul style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/about-us")}`}>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/why-us")}`}>
                <Link href="/why-us">What make us different</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/vision-and-mission")}`}>
                <Link href="/vision-and-mission">Our Vision and Mission</Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(2)} />
          </li>
          <li
            className={`dropdown2 ${
              isAccordion == 3 ? "open" : ""
            } ${checkParentActive([
              "/strategy-consultation-services",
              "/cloud-services",
              "/data-ai-services",
              "/infrastructure-services",
              "/cyber-security-services",
              "/software-engineering-services",
              "/web-development-services",
              "/project-management-services",
              "/itsm-services",
            ])}`}
          >
            <Link href="/#">Service</Link>
            <ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
              <li
                className={`${checkCurrentMenuItem(
                  "/strategy-consultation-services"
                )}`}
              >
                <Link href="/strategy-consultation-services">
                  Strategy and Consultation
                </Link>
              </li>
              <li className={`${checkCurrentMenuItem("/cloud-services")}`}>
                <Link href="/cloud-services">Cloud </Link>
              </li>
              <li className={`${checkCurrentMenuItem("/data-ai-services")}`}>
                <Link href="/data-ai-services">Data & AI</Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/infrastructure-services"
                )}`}
              >
                <Link href="/infrastructure-services">
                  Infrastructure Services
                </Link>
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
                  "/software-engineering-services"
                )}`}
              >
                <Link href="/software-engineering-services">
                  Software Engineering
                </Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/web-development-services"
                )}`}
              >
                <Link href="/web-development-services">Web Development</Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/project-management-services"
                )}`}
              >
                <Link href="/project-management-services">
                  Project Management
                </Link>
              </li>
              <li className={`${checkCurrentMenuItem("/itsm-services")}`}>
                <Link href="/itsm-services">Service Management-ServiceNow</Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(3)} />
          </li>
          <li
            className={`dropdown2 ${
              isAccordion == 4 ? "open" : ""
            } ${checkParentActive([
              "/transportation",
              "/healthcare",
              "/life-Sciences-and-pharma",
              "/banking-and-financial",
            ])}`}
          >
            <Link href="/#">Industries</Link>
            <ul style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/transportation")}`}>
                <Link href="/transportation">Transportation</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/healthcare")}`}>
                <Link href="/healthcare">HealthCare </Link>
              </li>
              <li
                className={`${checkCurrentMenuItem(
                  "/life-Sciences-and-pharma"
                )}`}
              >
                <Link href="/life-Sciences-and-pharma">
                  Life Sciences & Pharma
                </Link>
              </li>

              <li
                className={`${checkCurrentMenuItem("/banking-and-financial")}`}
              >
                <Link href="/banking-and-financial">Banking & Financial</Link>
              </li>
            </ul>
            <div class="dropdown2-btn" onClick={() => handleAccordion(4)} />
          </li>

          <li className={`${pathname === "/" ? "current" : ""}`}>
            <Link href="/">Partnerships</Link>
          </li>

          <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
