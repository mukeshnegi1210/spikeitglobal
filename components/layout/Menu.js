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
        <li className={`${pathname === "/" ? "current" : ""}`}>
          <Link href="/">Home</Link>
        </li>

        <li
          className={`dropdown2 ${checkParentActive([
            "/about-us",
            "/why-us",
            "/vision-and-mission",
          ])}`}
        >
          <Link href="/#">About</Link>
          <ul>
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
        </li>
        <li
          className={`dropdown2 ${checkParentActive([
            "/strategy-consultation-services",
            "/cloud-services",
            "/data-ai-services",
            "/cyber-security-services",
            "/project-managementservices",
            "/services-management",
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
                Strategy and Consultation
              </Link>
            </li>
            <li className={`${checkCurrentMenuItem("/cloud-services")}`}>
              <Link href="/cloud-services">Cloud Services </Link>
            </li>
            <li className={`${checkCurrentMenuItem("/data-ai-services")}`}>
              <Link href="/data-ai-services">Data & AI</Link>
            </li>
            <li
              className={`${checkCurrentMenuItem("/infrastructure-services")}`}
            >
              <Link href="/infrastructure-services">
                Infrastructure Services
              </Link>
            </li>
            <li
              className={`${checkCurrentMenuItem("/cyber-security-services")}`}
            >
              <Link href="/cyber-security-services">
                Cyber Security Services
              </Link>
            </li>
         
            <li
              className={`${checkCurrentMenuItem("/web-development-services")}`}
            >
              <Link href="/web-development-services">Web & App Development</Link>
            </li>
          
            <li className={`${checkCurrentMenuItem("/services-management")}`}>
              <Link href="/services-management">Service Management-ServiceNow</Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown2 ${checkParentActive([
            "/transportation",
            "/healthcare",
            "/life-Sciences-and-pharma",
            "/banking-and-financial",
          ])}`}
        >
          <Link href="/#">Industries</Link>
          <ul>
            <li className={`${checkCurrentMenuItem("/transportation")}`}>
              <Link href="/transportation">Transportation</Link>
            </li>
            <li className={`${checkCurrentMenuItem("/healthcare")}`}>
              <Link href="/healthcare">HealthCare </Link>
            </li>
            <li
              className={`${checkCurrentMenuItem("/life-Sciences-and-pharma")}`}
            >
              <Link href="/life-Sciences-and-pharma">
                Life Sciences & Pharma
              </Link>
            </li>

            <li className={`${checkCurrentMenuItem("/banking-and-financial")}`}>
              <Link href="/banking-and-financial">Banking & Financial</Link>
            </li>
          </ul>
        </li>

        <li className={`${pathname === "/partnerships" ? "current" : ""}`}>
          <Link href="/partnerships">Partnerships</Link>
        </li>

        <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
}
