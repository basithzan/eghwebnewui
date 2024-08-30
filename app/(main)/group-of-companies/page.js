"use client";

import gsap from "gsap";
import { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer";
import Navbar from "../Navbar";

import groupImg1 from "/public/assets/group/automotive.jpg";
import groupImg6 from "/public/assets/remaining-images/group-of-company-ecomerce.jpg";
import groupImg2 from "/public/assets/remaining-images/group-of-company-investment.jpg";
import groupImg3 from "/public/assets/remaining-images/group-of-company-realestate.jpg";

import Image from "next/image";
import GroupSection from "./GroupSection";
import BackgroundImage from "/public/assets/group/banner-desktop.jpg";
import BackgroundImagemobile from "/public/assets/group/banner-mobile.jpg";
import Image1 from "/public/assets/signage.jpg";

gsap.registerPlugin(ScrollTrigger);

const GroupOfCompanies = () => {
  useEffect(() => {
    gsap
      .timeline({ duration: 0.5, ease: "power3.out" })
      .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".section-1 .text-2",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-2",
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-2 .img-1",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
  });

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen relative section-1">
        <Image
          unoptimized
          src={BackgroundImage}
          alt="BackgroundImage"
          className="object-cover max-md:hidden object-center h-screen w-screen brightness-50"
        />
        <Image
          unoptimized
          src={BackgroundImagemobile}
          alt="BackgroundImage"
          className="object-cover md:hidden object-center h-screen w-screen brightness-50"
        />

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
          <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">
            ELITE GROUP HOLDING
          </div>
          <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
            OUR GROUP of COMPANIES
          </div>
        </div>
        <div className=" absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / Our group
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] mb-4 sm:pb-5">
        <div className="px-[5%]">
          <div className="pb-5 pt-10 md:py-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center section-2">
            <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-me-[5.65%] overflow-hidden">
              <Image
                unoptimized
                src={Image1}
                alt="BackgroundImage"
                className="w-full sm:h-[20rem] md:h-[26rem] max-md:aspect-square object-cover img-1 clip-path-right-md"
              />
            </div>
            <div className="xl:px-24 sm:shrink-1 sm:w-1/2">
              <div className="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1 uppercase" style={{ color: '#fb511e' }}>
  ELITE GROUP HOLDING
</div>
              <p className="mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
                We have built a vast network of businesses strategically located
                across prominent areas in the region. This strategic positioning
                allows us to effectively serve diverse markets, leveraging our
                extensive local knowledge and global expertise to deliver
                exceptional value and innovative solutions to our clients. Our
                group of companies is dedicated to excellence, ensuring that we
                meet the highest standards in every industry we operate in.
              </p>
              {/* <p className="mb-4 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2">
                You can ask your questions to the Elite Group Holding Assistant,
                who will guide you through the Elite Group Holding.
              </p>
              <p className="mb-4 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2">
                If our Assistant is unable to find what you are looking for,
                please scroll down and get in touch with our dedicated Customer
                Contact Center via phone or contact form.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden max-md:px-[5%] max-md:space-y-10">
  <GroupSection
    image={groupImg1}
    title={<span style={{ color: '#fb511e' }}>Automotive</span>} // Color applied here
    descriptions={[
      "Rooted in a legacy of excellence, Elite Group Holding’s automotive sector boasts extensive expertise in various domains of the automotive industry.",
      // other descriptions
    ]}
    hasExplore={true}
    linkexp="/automotive"
  />

  <div id="ecommerce">
    <GroupSection
      url="/group-of-companies/elite-investment"
      image={groupImg2}
      title={<span style={{ color: '#fb511e' }}>E-Commerce</span>} // Color applied here
      descriptions={[
        "As a dynamic and forward-thinking division within The Elite Group Holding, our e-commerce sector is committed to revolutionizing the online shopping experience.",
        // other descriptions
      ]}
      direction="left"
      hasExplore={true}
      linkexp="/group-of-companies/elite-e-commerce"
    />
  </div>

  <div id="real_estate">
    <GroupSection
      url="/group-of-companies/elite-real-estate"
      image={groupImg3}
      title={<span style={{ color: '#fb511e' }}>Real Estate and contracting</span>} // Color applied here
      descriptions={[
        "Elite Group Holding has a carefully curated portfolio of projects across the UAE since its establishment in 2002.​",
        // other descriptions
      ]}
      hasExplore={true}
      linkexp="/group-of-companies/elite-real-estate"
    />
  </div>

  <div id="investments">
    <GroupSection
      url="/group-of-companies/elite-e-commerce"
      image={groupImg6}
      title={<span style={{ color: '#fb511e' }}>Investments</span>} // Color applied here
      descriptions={[
        "Elite Group Holding has a large and diversified portfolio of local and international investments.​",
        // other descriptions
      ]}
      direction="left"
      hasExplore={true}
      linkexp="/group-of-companies/elite-investment"
    />
  </div>
</div>


      <Footer />
    </>
  );
};

export default GroupOfCompanies;
