"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";

import Search from "./Search";
import Footer2 from "./footer/Footer2";

import Header1 from "./header/Header1";

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
  bgImg,
  pageTitle,
}) {
  // const [scroll, setScroll] = useState(0);

  // MoblileMenu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  // Search
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!isSearch);
  };



  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    // const onScroll = () => {
    //   setScroll(window.scrollY > 100);
    // };

    // window.addEventListener("scroll", onScroll);
    // return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="top" />
      {/* <AddClassBody /> */}

      <div id="wrapper">
        <div id="pagee" className="clearfix">
          <Header1
            // scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handleSearch={handleSearch}
          />
          <main className="main">
            {breadcrumbTitle && (
              <Breadcrumb
                pageTitle={pageTitle}
                breadcrumbTitle={breadcrumbTitle}
                bgImg={bgImg}
              />
            )}

            {children}
          </main>

          <Footer2 />

          <BackToTop target="#top" />
        </div>
      </div>
      <Search isSearch={isSearch} handleSearch={handleSearch} />
      
    </>
  );
}
