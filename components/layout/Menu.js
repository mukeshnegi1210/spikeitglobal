"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  return (
    <>
      <ul className="navigation clearfix">
        {/* <li className={`${pathname === "/" ? "current" : ""}`}>
          <Link href="/">Home</Link>
        </li> */}

        <li
          className={`dropdown2 ${checkParentActive([
            "/about-us",
            "/why-us",
            "/vision-and-mission",
          ])}`}
        >
          <Link href="/about-us">About</Link>
          <ul>
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
        </li>
        <li
          className={`dropdown2 ${checkParentActive([
            "/strategy-consultation-services",
            "/cloud-services",
            "/data-ai-services",
            "/cyber-security-services",
            "/project-managementservices",
            "/itsm-services",
          ])}`}
        >
          <Link href="/services">Services</Link>
          <ul>
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
              className={`${checkCurrentMenuItem("/cyber-security-services")}`}
            >
              <Link href="/cyber-security-services">
                Cyber Security 
              </Link>
            </li>
         
            <li
              className={`${checkCurrentMenuItem("/web-development-services")}`}
            >
              <Link href="/web-development-services">Application & Web Development </Link>
            </li>
          
            <li className={`${checkCurrentMenuItem("/itsm-services")}`}>
              <Link href="/itsm-services">IT Service Management-ServiceNow</Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown2 ${checkParentActive([
            "/industries",
            "/industries",
            "/industries",
            "/industries",
          ])}`}
        >
          <Link href="/#">Industries</Link>
          <ul>
            <li className={`${checkCurrentMenuItem("/industries/#Transportation")}`}>
              <Link href="/industries/#Transportation">Transportation</Link>
            </li>
            <li className={`${checkCurrentMenuItem("/industries/#Healthcare")}`}>
              <Link href="/industries/#Healthcare">HealthCare </Link>
            </li>
            <li
              className={`${checkCurrentMenuItem("/industries/#LifeSciencesPharma")}`}
            >
              <Link href="/industries/#LifeSciencesPharma">
                Life Sciences & Pharma
              </Link>
            </li>

            <li className={`${checkCurrentMenuItem("/industries/#BankingFinancialServices")}`}>
              <Link href="/industries/#BankingFinancialServices">Banking & Financial</Link>
            </li>
                <li className={`${checkCurrentMenuItem("/industries/#MediaEntertainment")}`}>
              <Link href="/industries/#MediaEntertainment">Media & Entertainment</Link>
            </li>
          </ul>
        </li>

        <li className={`${pathname === "/partnerships" ? "current" : ""}`}>
          <Link href="/partnerships">Partnerships</Link>
        </li>

        <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
