"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BackgroundImage from "/public/assets/real-estate.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// Registering GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Page = ({ title, descriptions = [] }) => {
  useEffect(() => {
    // Initialize animations or effects
    gsap.fromTo(
      ".section-1",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".section-1",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{title || "Luxury Car Maintenance"}</title>
        <meta
          name="description"
          content="Learn about the importance of maintaining your luxury vehicle with Elite Motors Services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="md:h-screen h-[40vh] w-screen relative section-1">
          <Image
            unoptimized
            src={BackgroundImage}
            alt="Luxury Car Background"
            className="object-cover object-center h-full w-screen brightness-50"
            layout="fill"
            priority={true}
          />
          <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
            <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
            <span className="capitalize">Real Estate</span>
          </div>
        </section>

        <div className="sm:px-[5%] pb-10">
          <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
            <nav
              aria-label="breadcrumb"
              className="md:pb-10 md:pt-5 py-2 flex items-center md:justify-end justify-center"
            ></nav>

            <article>
              <h1 className="common-heading mb-8 uppercase !leading-[120%]">
                The Growth of Real Estate in the UAE: A Comprehensive Overview
              </h1>
              <p className="mb-2 md:mb-3 common-description">
                The United Arab Emirates (UAE) has witnessed a remarkable transformation over the past few decades, evolving from a desert landscape into a bustling hub of economic activity, innovation, and luxury. Essential to this transformation has been the rapid and sustained growth of the real estate sector.
              </p>
              <p className="mb-2 md:mb-3 common-description">
                Here we explore the key factors driving the growth of real estate in the UAE, its impact on the economy, and the trends shaping its future.
              </p>

              <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Key Milestones in UAE Real Estate Development
              </h3>
              <ul className="mb-2 md:mb-3 common-description list-disc pl-5">
                <li>
                  <strong>1979:</strong> The completion of the World Trade Centre in Dubai, one of the first skyscrapers in the region, marked the beginning of modern commercial real estate development.
                </li>
                <li>
                  <strong>1999:</strong> The opening of the Burj Al Arab, the world&apos;s most luxurious hotel, positioned Dubai as a global tourism and luxury destination.
                </li>
                <li>
                  <strong>2003:</strong> The introduction of freehold property laws allowed expatriates to own property in designated areas, spurring foreign investment.
                </li>
                <li>
                  <strong>2010:</strong> The inauguration of the Burj Khalifa, the tallest building in the world, cemented Dubai&apos;s reputation as a leader in architectural innovation.
                </li>
              </ul>

              <h4 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Factors Contributing to Growth
              </h4>
              <p className="mb-2 md:mb-3 common-description">
                Several factors have contributed to the robust growth of the UAE&apos;s real estate sector:
              </p>
              <ul className="mb-2 md:mb-3 common-description list-disc pl-5">
                <li>
                  <strong>Economic Diversification:</strong> The UAE&apos;s strategic focus on diversifying its economy away from oil has led to significant investments in tourism, trade, finance, and real estate. Cities like Dubai and Abu Dhabi have become global centres for business and tourism, attracting both expats and investors from around the world.
                </li>
                <li>
                  <strong>Government Initiatives:</strong> Proactive government policies and initiatives have played a crucial role in shaping the real estate landscape. The introduction of free zones, property ownership rights for foreigners, and incentives for developers have created a conducive environment for real estate investment.
                </li>
                <li>
                  <strong>Infrastructure Development:</strong> Massive infrastructure projects, including airports, roads, public transport systems, and entertainment facilities, have enhanced the attractiveness of the UAE as a place to live, work, and visit. Iconic developments like the Palm Jumeirah and the Expo 2020 site in Dubai exemplify the scale of these projects.
                </li>
                <li>
                  <strong>Population Growth:</strong> The UAE&apos;s population has grown significantly, driven by a steady influx of expats seeking employment and business opportunities. This population growth has fuelled demand for residential, commercial, and retail real estate.
                </li>
              </ul>

              <h4 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Impact on the Economy
              </h4>
              <p className="mb-2 md:mb-3 common-description">
                The real estate sector is a cornerstone of the UAE&apos;s economy, contributing significantly to GDP and employment. It has also attracted substantial foreign direct investment (FDI), bolstering the country&apos;s economic resilience.
              </p>

              <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Future Trends in UAE Real Estate
              </h3>
              <p className="mb-2 md:mb-3 common-description">
                As the UAE real estate market continues to mature, several trends are shaping its future:
              </p>
              <ul className="mb-2 md:mb-3 common-description list-disc pl-5">
                <li>
                  <strong>Sustainability and Green Development:</strong> There is a growing emphasis on sustainable and green building practices. Developers are increasingly adopting energy-efficient technologies and sustainable materials to meet the rising demand for eco-friendly properties.
                </li>
                <li>
                  <strong>Smart Cities and Technology:</strong> The integration of smart technologies in real estate projects is transforming the way people live and work. Smart homes, advanced security systems, and IoT-enabled infrastructure are becoming standard features.
                </li>
                <li>
                  <strong>Mixed-Use Developments:</strong> Mixed-use developments that combine residential, commercial, and recreational spaces are gaining popularity. These projects offer convenience and a higher quality of life, attracting both residents and investors.
                </li>
                <li>
                  <strong>Post-Pandemic Recovery:</strong> The UAE real estate market has shown resilience in the face of the COVID-19 pandemic. With effective vaccination campaigns and government support, the market is on a path to recovery, with increasing property transactions and stable prices.
                </li>
              </ul>
              <p className="mb-2 md:mb-3 common-description">
                The growth of real estate in the UAE is a testament to the country&apos;s visionary leadership, strategic planning, and commitment to innovation. As the sector continues to evolve, it will play a pivotal role in shaping the UAE&apos;s future, driving economic growth, and enhancing the quality of life for its residents.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page;
