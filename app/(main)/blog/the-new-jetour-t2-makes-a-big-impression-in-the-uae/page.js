"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BackgroundImage from "/public/assets/jetour-bg.webp";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

gsap.registerPlugin(ScrollTrigger);

const Page = ({ title, descriptions = [] }) => {
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
        <Image
          unoptimized
          src={BackgroundImage}
          alt="Background"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
            New Jetour T2 Makes A Big Impression In The UAE
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto">
          {/* Content extracted from the image */}
          <div className="mt-10">
            <h1 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              New Jetour T2 Makes A Big Impression In The UAE
            </h1>
            <p className="mb-2 md:mb-3 common-description">
              Dubai was the chosen venue for the launch of the groundbreaking
              Jetour T2 on 27th January 2024 in Terra Solis. The guests had the
              opportunity to explore an SUV that embodies style, innovation and
              luxury &ndash; a truly remarkable addition to the market in recent
              years and an exciting new addition to the UAE roads, bringing the
              next generation of drivers the opportunity to unleash their
              adventurous side.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              Featuring a sleek new body design and powered by a feisty
              4-cylinder 2.0L turbocharged engine, the Jetour T2 produces an
              impressive 390 Nm of torque &ndash; more than enough to tackle any
              challenge. The power delivery is smooth and effortless, making
              every journey a pleasure. With a wider body and longer wheelbase,
              the Jetour&rsquo;s ride quality is exemplary. The lower stance
              gives the Jetour T2 greater stability and better cornering, too.
            </p>
            <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
              Innovative Design and Performance Features of the Jetour T2
            </h3>
            <p className="mb-2 md:mb-3 common-description">
              The Jetour T2 is just as sophisticated on the inside. The roomy
              cabin gives plenty of space for its five occupants, providing
              world-class comfort and luxury. The advanced levels of technology
              make the T2 a user-friendly vehicle. An intuitive infotainment
              centre puts everything from onboard navigation to Bluetooth
              connectivity and in-car entertainment systems at your fingertips,
              utilising a 15.6 Inch High-Resolution colour touch screen with
              SnapDragon 8155 Smart Chip. It also includes an exclusive
              expandable tailgate, giving you easy access to the large cargo
              space and demonstrating how form and functionality can come
              together in perfect synergy.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              The T2 brings together all the latest advancements in road safety,
              to give driver and passengers total peace of mind, such as Lateral
              Collision Warning, Lane Departure warning system, Automatic
              Emergency Braking, High-speed warning, and Forward and Backward
              collision warning, all creating a safer driving experience both on
              and off-road.
            </p>
            <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
              The Joy of Travel &ndash; Bringing The Fun Back Into Any Road Trip
            </h3>
            <p className="mb-2 md:mb-3 common-description">
              While the Jetour T2 is an advanced and incredibly capable vehicle,
              there is one aspect of the experience that lies at the heart of
              this SUV, and that&rsquo;s fun. The principle behind the
              development of the Jetour T2 is to put the enjoyment back into
              driving once more. With a driving setup that feels like a
              personalised cockpit and handling so responsive it practically
              waltzes around curves, T2 is not just an SUV &ndash; it&apos;s an
              invitation to embark on an exhilarating joyride! It is designed to
              take you on adventures in style.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              This all-new Jetour T2 also offers an outstanding 10 Years / 1
              Million KM Warranty and 3 years or up to 40,000 kms service
              packages providing you with long-term peace of mind. The Jetour T2
              is a car that&rsquo;s perfectly in tune with the UAE way of life,
              making it the ideal choice for the next generation of drivers.
              Discover Jetour T2 today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
