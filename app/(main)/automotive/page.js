"use client";

import gsap from "gsap";
import { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer";
import Navbar from "../Navbar";

import Jetour from "../../..//public/assets/Homepage-partners-jetour.jpg";
import Zenvo3 from "../../../public/assets/Homepage-partners-Zenvo3.jpg";
import automobilemobile from "../../../public/assets/automative-mobile.png";

import Image from "next/image";
import BackgroundImage from "../../../public/assets/57af26e48eb6728309d8a752a133493e.png";
import theelitecars from "../../../public/assets/69ef976c37520c78cc1a8ccc57885bdf.png";
import soueast from "../../../public/assets/home/soueast.jpg";
import art from "../../../public/assets/home/art.jpg";
import GroupSection from "../group-of-companies/GroupSection";
import Auto from "/public/assets/Auto.jpg";

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
          src={automobilemobile}
          alt="automobilemobile"
          className="object-cover object-center h-screen w-screen brightness-50 sm:hidden"
        />
        <Image
          unoptimized
          src={BackgroundImage}
          alt="BackgroundImage"
          className="object-cover object-center h-screen w-screen brightness-50 hidden sm:block"
        />

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
          <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">
            ELITE GROUP HOLDING
          </div>
          <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
            Automotive
          </div>
        </div>
        <div className=" absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / Automotive
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] mb-4 sm:pb-3 lg:mb-10"></div>

      <div className="overflow-hidden max-md:px-[5%] max-sm:space-y-10 mt-10">
 <div id="auto">
          <GroupSection
            url="#"
            link="#"
            image={Auto}
title={<span style={{ color: '#fb511e' }}>Automotive</span>} // Color applied here

            hasBtn={false}
            descriptions={[
              "Our automotive sector stands as a testament to its enduring legacy of excellence and innovation. With a deep-seated expertise across various domains of the automotive industry, we excel in delivering cutting-edge solutions that cater to the evolving needs of the market. ",
              `Having decades of experience in the industry, we have grown to become UAE’s well- respected companies having a number of well-established networks at strategic locations across the country. We forged global partnerships with leading brands and officially represent various automotive brands in the UAE.`,
            ]}
            direction="left"
          />
        </div>
        <div id="jetour">
          <GroupSection
            url="/automotive/jetour"
            link="https://jetouruae.com/"
            image={Jetour}
title={<span style={{ color: '#fb511e' }}>Jetour</span>} // Color applied here

            hasBtn={true}
            descriptions={[
              "Jetour has formed an exclusive partnership with Elite Group Holding to introduce the Jetour brand to the UAE.   ",
              `This collaboration combines decades of expertise in the automotive industry, delivering exceptional vehicles at competitive prices. With a strong commitment to professional aftersales service, this partnership ensures our customers in the UAE enjoy complete peace of mind.`,
            ]}
            direction="right"
          />
        </div>

        <div id="zenvo">
          <GroupSection
            url="/automotive/zenvo"
            link="https://zenvouae.com/"
            image={Zenvo3}
            hasBtn={true}
title={<span style={{ color: '#fb511e' }}>Zenvo Automotive</span>} // Color applied here

            descriptions={[
              "Zenvo Automotive is a Danish high-performance car manufacturer known for creating exclusive, hand-built hypercars that combine cutting-edge technology with artisanal craftsmanship. Renowned for their exceptional power, precision engineering, and striking design, Zenvo's limited-edition vehicles deliver a unique driving experience for discerning enthusiasts worldwide. ",
            ]}
direction="left"
          />
        </div>
        <div id="the-elite-cars">
          <GroupSection
            url="/automotive/the-elite-cars"
            link="https://theelitecars.com/"
            image={theelitecars}
title={<span style={{ color: '#fb511e' }}>The Elite Cars</span>} // Color applied here

            hasBtn={true}
            descriptions={[
              "The Elite Cars, a subsidiary of Elite Group Holding, is a multi-brand dealership specializing in high-end car brands, offering an unmatched automotive experience.",
              "With a commitment to quality, service, and customer satisfaction, The Elite Cars has been the undisputed leader in the UAE luxury automotive industry for decades.",
            ]}
            direction="right"
          />
        </div>

        <div id="soueast">
          <GroupSection
            url="/automotive/the-elite-cars"
            link="https://www.soueast-motor.com"
            image={soueast}
title={<span style={{ color: '#fb511e' }}>Soueast</span>} // Color applied here

            hasBtn={true}
            descriptions={[
              "Soueast Motor Corporation Ltd is one of the earliest automobile companies based in China. Soueast integrates advanced international management experience and introduces world-class technology & equipment to form a modern production.",
              "Since its establishment, SOUEAST has nearly 20 years of successful experience in global business.",
            ]}
            direction="left"
          />
        </div>
<div id="art_elite_car_rental">
          <GroupSection
            url="/automotive/the-elite-cars"
            link="https://www.soueast-motor.com"
            image={art}
title={<span style={{ color: '#fb511e' }}>ART Elite Car Rental</span>} // Color applied here

            hasBtn={false}
            descriptions={[
              "Founded on the principles of luxury, innovation, and customer-centric service, ART Elite Car Rental is the premier choice for discerning clients who seek sophistication, performance, unparalleled comfort, and the best car hire deals.",
              "Our brand embodies sophistication and excellence, offering meticulously checked and maintained fleet of high-end vehicles that cater to those who appreciate the finer things in life.",
"With a commitment to excellence and a focus on delivering exceptional customer experiences, ART Elite Car Rental stands as the go-to choice for discerning individuals and businesses looking to elevate their driving experience."
            ]}
            direction="right"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GroupOfCompanies;
