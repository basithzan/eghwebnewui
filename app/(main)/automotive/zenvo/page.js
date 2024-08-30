"use client";

import React, { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BackgroundImage from "/public/assets/ebaac82941ffdd8e43e3861aeb9a9ef3.png";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TheEliteCars = () => {
  useEffect(() => {
    gsap
      .timeline({ duration: 0.5, ease: "power3.out" })
      .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".section-1 .text-2",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 }
      );
  });

  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <Image unoptimized
          src={BackgroundImage}
          alt="fve"
          className="object-cover object-center h-full w-screen brightness-50"
        />

        {/* <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2 opacity-0">{title}</div>
                </div> */}
      </div>

      <div className="px-[5%] sm:pb-10">
        <div className="md:py-5 py-2 flex items-center md:justify-end justify-center">
          <div className="text-[#282828] md:text-end text-center text-sm">
            <a href="/">Home</a> /{" "}
            <a href="/group-of-companies">Group of Companies</a> / Zenvo Automotive
          </div>
        </div>

        <div className="py-14 md:py-20 text-center max-w-2xl mx-auto">
          <div className="text-md sm:text-base lg:text-4xl font-semibold mb-2 md:mb-4 uppercase">
            Zenvo Automotive
          </div>
          {[
            "Zenvo Automotive is a producer of limited-edition hypercars based in Præstø, Denmark. Founded in 2007, Zenvo was started with the aim of combining the latest technologies and innovation with an analogue feel, offering the driver a true connection and astonishing performance.  ",
 
          ].map((description, index) => (
            <p
              key={index}
              className="mb-2 md:mb-4 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2"
            >
              {description}
            </p>
          ))}

          <Link href="/" className="flex items-center justify-center">
            <button className="flex items-center justify-center max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-5 sm:px-10 py-1 md:py-3 button-1 mt-4">
              Visit Website
              <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TheEliteCars;
