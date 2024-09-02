"use client";

import React, { useState, useEffect } from "react";
import Logo from "/public/assets/Logo.png";
import { Squash as Hamburger } from "hamburger-react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMenu]);

  const handleHover = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="fixed z-50 w-screen bg-black/40 h-[90px] sm:h-[120px] ">
        <div className="absolute top-0 md:left-1/2 left-[5%] md:-translate-x-1/2 z-[60] py-[5%] md:py-4">
          <a href="/" className="">
            <Image unoptimized alt="img" src={Logo} className="w-28 md:w-40" />
          </a>
        </div>
        <div className="flex justify-between  items-center px-[4.5%] md:px-[2.5%] py-[5%] md:py-4 bg-[linear-gradient(rgba(15,15,15,0.9),rgba(0,0,0,0))]">
          <SocialLinks
            className="gap-0.5 hidden md:flex items-center pt-5"
            iconClassName="!w-11 !h-11 socialIconCustomColor"
          />
          <div className="flex md:items-center sm:pt-4 gap-8 max-md:justify-end max-md:w-full">
            <div className="hamburger-wrapper">
              <Hamburger
                toggled={showMenu}
                toggle={setShowMenu}
                color="#d7dcd7"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`menu w-screen md:h-auto md:min-h-[100vh] h-full max-md:pt-[15vh] max-md:pb-6 max-md:overflow-scroll fixed z-40 backdrop-blur-lg common-blur backdrop-brightness-50 transition-all duration-1000 ease-in-out ${
          showMenu ? "opacity-full top-0" : "opacity-0 -top-full"
        }`}
      >
        <div className="flex md:justify-evenly  max-md:gap-20 w-screen items-start md:items-start max-md:px-[5%] py-[10%] md:py-[14%] text-sm sm:text-lg md:text-3xl">
          <div>
            <div className="flex flex-col items-start h-full gap-3 md:gap-7">
              <a
                href="/"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                HOME
              </a>
              <a
                href="/about-group"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                ABOUT THE GROUP
              </a>
              <a
                href="/group-of-companies"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                GROUP OF COMPANIES
              </a>
              <a
                href="/media-centre"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                MEDIA CENTER
              </a>

              <a
                href="/careers"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                CAREERS
              </a>

              <a
                href="/contact-us"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start h-full gap-3 md:gap-7">
              <a
                href="/automotive"
                onMouseEnter={() => handleHover("automotive")}
                className={`${
                  activeSection === ""
                    ? "text-white after:opacity-100 after:w-full"
                    : "text-[#fff]"
                } cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}
              >
                AUTOMOTIVE
              </a>
              <a
                onClick={() => setShowMenu(false)}
                onMouseEnter={() => handleHover("investments")}
                href="/group-of-companies/elite-investment"
                className={`${
                  activeSection === "investments"
                    ? "text-white after:opacity-100 after:w-full"
                    : "text-[#fff]"
                } cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}
              >
                INVESTMENTS
              </a>
              <a
                href="/group-of-companies/elite-real-estate"
                onClick={() => setShowMenu(false)}
                onMouseEnter={() => handleHover("real_estate")}
                className={`${
                  activeSection === "real_estate"
                    ? "text-white after:opacity-100 after:w-full"
                    : "text-[#fff]"
                } cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}
              >
                REAL ESTATE
              </a>

              <a
                href="/group-of-companies/elite-e-commerce"
                onClick={() => setShowMenu(false)}
                onMouseEnter={() => handleHover("ecommerce")}
                className={`${
                  activeSection === "ecommerce"
                    ? "text-white after:opacity-100 after:w-full"
                    : "text-[#fff]"
                } cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}
              >
                ECOMMERCE
              </a>
            </div>
          </div>
          <div
            className={`relative max-md:opacity-0 max-md:hidden  ${
              activeSection === "automotive" ? "" : "max-md:hidden"
            }`}
          >
            <div
              className={`flex flex-col items-start transition-all duration-1000 h-full gap-3 md:gap-7 ${
                activeSection === "automotive"
                  ? "opacity-100"
                  : "opacity-0 hover:active:transition-all"
              }`}
            >
              <a
                onClick={() => setShowMenu(false)}
                href="/automotive#the-elite-cars"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                THE ELITE CARS
              </a>
              <a
                onClick={() => setShowMenu(false)}
                href="/automotive#zenvo"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                ZENVO
              </a>
              <a
                onClick={() => setShowMenu(false)}
                href="/automotive#jetour"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                JETOUR
              </a>
              <a
                onClick={() => setShowMenu(false)}
                href="/automotive#soueast"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                SOUEAST
              </a>
<a
                onClick={() => setShowMenu(false)}
                href="/automotive#soueast"
                className="text-white font-semibold whitespace-nowrap navbar-underline-animation"
              >
                ART ELITE CAR RENTAL
              </a>


            </div>
          </div>
        </div>

        <SocialLinks
          className="z-30 md:hidden flex items-center gap-3 px-[5%] mt-6"
          iconClassName="border rounded-full !w-9 !h-9"
        />
      </div>
    </>
  );
};

export default Navbar;
