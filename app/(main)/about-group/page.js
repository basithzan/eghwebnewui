"use client";

import { useEffect, useState } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Footer from "../Footer";
import Navbar from "../Navbar";
import GroupSection from "../group-of-companies/GroupSection";
import mission from "/public/assets/about-us/AbouttheGroup.jpg";
import ImageRakanTurki from "/public/assets/about-us/Leader.jpg";
import reward from "/public/assets/about-us/awards2.jpg";
import BackgroundImage from "/public/assets/about-us/banner-desktop.jpg";
import BackgroundImagemobile from "/public/assets/about-us/banner-mobile.jpg";
import csr2 from "/public/assets/about-us/csr3.jpg";
import vision from "/public/assets/m&v.jpg";
import { apiUrl } from "@/lib/constants";
import { imgUrl } from '../../../lib/constants';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {

  const [pageData, setPageData] = useState([]);

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
        ".section-2 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .text-2",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .text-3",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top center",
        },
      })
      .fromTo(
        ".section-3 .img-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .text-1",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .text-2",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-4",
          start: "top center",
        },
      })
      .fromTo(
        ".section-4 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-4 .img-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-4 .text-1",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-5",
          start: "top center",
        },
      })
      .fromTo(
        ".section-5 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-5 .carousel-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-6",
          start: "top center",
        },
      })
      .fromTo(
        ".section-6 .logo-1",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-6 .text-1",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-6 .text-2",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-7",
          start: "top center",
        },
      })
      .fromTo(
        ".section-7 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-7 .text-2",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-7 .table-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch images or posts asynchronously if not passed as props
        const response = await fetch(apiUrl + `get-about-data`);  // Your API endpoint
        const data = await response.json();

        setPageData(data?.about);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen relative section-1">
        <Image
          unoptimized
          width={200}
          height={300}
          src={BackgroundImage}
          alt="bg-img"
          className="object-cover object-center h-screen max-md:hidden w-screen brightness-50"
        />
        <Image
          unoptimized
          width={200}
          height={300}
          src={BackgroundImagemobile}
          alt="bg-img"
          className="object-cover object-center md:hidden h-screen w-screen brightness-50"
        />

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
          <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">
            Elite Group Holding
          </div>
          <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
            ABOUT THE group
          </div>
        </div>
        <div className=" absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / About us
            </div>
          </div>
        </div>
      </div>
      {pageData && pageData.length !== 0 &&

        <div>

          <div className="bg-[#F7F7F7] max-sm:mb-1">
            <div className="px-[5%] section-2 overflow-hidden">
              <div className="my-5 md:my-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center">
                <div className="relative sm:w-[48%] sm:grow sm:shrink-0 sm:-me-[5.65%] overflow-hidden img-1">
                  {/* <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 -top-10 xl:-left-[19.4%] lg:-left-[14%] md:-left-[12%] sm:-left-[14%] "></div> */}
                  <Image
                    unoptimized
                    width={200}
                    height={300}
                    src={imgUrl + pageData[0]?.image}
                    alt="img1"
                    className="w-full sm:h-[30rem] max-md:aspect-square clip-path-right-md lg:h-[36rem] object-cover"
                  />
                </div>
                <div className="xl:px-24 sm:shrink-1 sm:w-[52%] xl:pb-10">
                  {/* Updated Heading with Padding */}
                  <div
                    className="common-heading mb-5 md:mb-10 text-1 pt-[50px] pb-[15px]"
                    style={{ color: "#fb511e" }}
                  >
                    {pageData[0]?.title}
                  </div>

                  <p className="mb-2 md:mb-4  common-description text-3" dangerouslySetInnerHTML={{ __html: pageData[0]?.content }}>

                  </p>

                </div>
              </div>
            </div>

            <div className="px-[5%] sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-20 section-3 overflow-hidden">
              <div className=" mb-5 sm:my-5 md:my-10 sm:flex sm:flex-row-reverse sm:items-center">
                <div className="xl:px-24 sm:shrink-1  sm:w-[48%] xl:pt-10">
                  {/* Updated Heading with Padding */}
                  <div
                    className="common-heading mb-5 md:mb-10 text-1 pt-[50px] pb-[15px]"
                    style={{ color: "#fb511e" }}
                  >
                    {pageData[1]?.title}
                  </div>
                  <p className="mb-2 md:mb-4  common-description text-2 " dangerouslySetInnerHTML={{ __html: pageData[1]?.content }}>

                  </p>


                </div>
                <div className="relative sm:w-[52%] sm:grow sm:shrink-0 sm:-ms-[5.65%] max-md:mt-3 overflow-hidden img-1">
                  {/* <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 xl:-right-[17.65%] lg:-right-[15%] sm:-right-[11%]"></div> */}
                  <Image
                    unoptimized
                    width={200}
                    height={300}
                    src={imgUrl + pageData[1]?.image}

                    alt="img2"
                    className="w-full md:h-[30rem] max-md:aspect-square  clip-path-md  lg:h-[36rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:px-[5%]">
            <GroupSection
              url="/automotive/the-elite-cars"
              link="https://theelitecars.com/"
              image={imgUrl + pageData[2]?.image}

              title={
                // Wrapped the span in a div with padding
                <div className="pt-[30px] pb-[15px]">
                  <span style={{ color: "#fb511e" }}> {pageData[2]?.title}</span>
                </div>
              }
              hasBtn={false}
              descriptions={[
                <p
                 key="description-1"
                  dangerouslySetInnerHTML={{ __html: pageData[2]?.content }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>
              ]}
              direction="left"
            />

            <GroupSection
              url="/automotive/the-elite-cars"
              link="https://theelitecars.com/"
              image={imgUrl + pageData[3]?.image}
              title={
                // Wrapped the span in a div with padding
                <div className="pt-[10px] pb-[15px]">
                  <span style={{ color: "#fb511e" }}>
                    {pageData[3]?.title}
                  </span>
                </div>
              }
              hasBtn={false}
              descriptions={[
                <p
                 key="description-2"
                  dangerouslySetInnerHTML={{ __html: pageData[3]?.content }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>
              ]}
              direction="right"
            />

            <GroupSection
              url="/automotive/the-elite-cars"
              link="https://theelitecars.com/"
              image={imgUrl + pageData[4]?.image}
              title={
                // Wrapped the span in a div with padding
                <div className="pt-[10px] pb-[15px]">
                  <span style={{ color: "#fb511e" }}>
                    {pageData[4]?.title}
                  </span>
                </div>
              }
              hasBtn={false}
              descriptions={[
                <p
                 key="description-3"
                  dangerouslySetInnerHTML={{ __html: pageData[4]?.content }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>
              ]}
              direction="left"
            />
          </div>
        </div>
      }

      {/* ... Rest of your component ... */}

      <Footer />
    </>
  );
};

export default AboutUs;
