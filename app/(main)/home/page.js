"use client";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

import Footer from "../Footer";
import Navbar from "../Navbar";
import Brands from "./Brands";
// import video1 from "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/B2vvHPYGrFKF0gYb8ItD5DBb0x2z2kNoFxRTP2xD.mp4";
// import video2 from "/public/assets/video2.mp4";
// import video3 from "/public/assets/video3.mp4";
import CarouselSection from "./CarouselSection";
import CarouselSection2 from "./CarouselSection2";
import Img5 from "/public/assets/home/Homepage-partners-elite-cars.jpg";
import Img3 from "/public/assets/home/Homepage-partners-jetour.jpg";
import AboutImage from "/public/assets/homepage-about-us.jpg";
// import Img1 from "/public/assets/home/Homepage-allsectors--automotive.jpg";
import Image from "next/image";
import Link from "next/link";
import Partner from "./partner";
import soueast from "/public/assets/03.jpg";
import soueast1 from "/public/assets/about-us/Homepage-partners-art.jpg";
import Carousel3Img1 from "/public/assets/897d556a59733e5e2482f1b030c8c4de.png";
import aurora from "/public/assets/aurora.jpg";
import growth from "/public/assets/growth.jpeg";
import Img6 from "/public/assets/home/Homepage-allsectors-ecommerce.jpg";
import Img9 from "/public/assets/home/Homepage-allsectors-investments.jpg";
import Img8 from "/public/assets/home/Homepage-allsectors-real-estate.jpg";
import zenvo from "/public/assets/home/zenvo.jpg";
import Img1 from "/public/assets/night-showroom.jpg";

gsap.registerPlugin(ScrollTrigger);

const CarouselImage1 = [
  {
    src: Img3,
    name: "JETOUR",
    description:
      "Jetour has exclusively partnered with Elite Group Holding to bring the Jetour brand to the UAE. This exclusive partnership brings decades of combined formidable experience in the automotive industry, committed to deliver exceptional vehicles at very competitive prices, and professional after sales service, ensuring complete peace of mind to our customers in the UAE",
    url: "https://jetouruae.com/",
  },
  {
    src: zenvo,
    name: " ZENVO AUTOMOTIVE",
    description: `Elite Group Holding is the authorized distributor of
Danish car manufacturer, Zenvo Automotive across the
UAE. Zenvo Automotive is a producer of limited-edition
hypercars based in Præstø, Denmark. Founded in 2007,
Zenvo started with the aim of combining the latest
technologies and innovation with an analogue feel,
offering the driver a true connection and astonishing
performance.`,
    url: "https://zenvouae.com/",
  },
  {
    src: Img5,
    name: "THE ELITE CARS",
    description:
      "The Elite Cars, is a subsidiary of Elite Group Holding, automotive division, specializing in high-end to mid-luxury car brands.​With a commitment to quality, service, and customer satisfaction, The Elite Cars has been the undisputed leader in the UAE luxury automotive industry for decades.",
    url: "https://theelitecars.com/",
  },
  {
    src: soueast,
    name: "SOUEAST",
    description: `SOUEAST's entry into the UAE with Elite Group Holding as its exclusive authorised distributor, is set to introduce a new standard of premium mobility solutions with its "EASE YOUR LIFE" proposition. Since its establishment, SOUEAST has nearly 20 years of successful experience in global business.`,
    url: "https://www.soueast-motor.com",
  },
  {
    src: soueast1,
    name: "ART ELITE CAR RENTAL",
    description: `ART Elite Car Rental is a
subsidiary of Elite Group
Holding's automotive division.
They specialize in the leasing
and rental of high-end luxury
vehicles offering an exclusive
selection of top-tier
automobiles, catering to
clients who seek
sophistication, performance,
and unparalleled comfort.`,
    url: "https://elite-cars-updated-mainv3.vercel.app/automotive#art_elite_car_rental",
  },
];

const CarouselImage2 = [
  {
    src: Img1,
    name: "AUTOMOTIVE",
    description:
      "Our automotive division is a key player in the UAE's robust automotive market, offering a comprehensive range of services from vehicle sales and leasing to maintenance and after-sales support. We partner with leading global brands to bring the latest and most reliable vehicles to our customers.",
    url: "/automotive",
  },
  {
    src: Img6,
    name: "E-COMMERCE",
    description:
      "We are at the forefront of the digital revolution, providing seamless online shopping experiences through our cutting-edge e-commerce platforms. Our goal is to make shopping convenient, efficient, and enjoyable, catering to the evolving needs of modern consumers. ",
    url: "/group-of-companies#ecommerce",
  },
  {
    src: Img8,
    name: "REAL ESTATE AND CONTRACTING",
    description:
      "Our real estate and contracting division is synonymous with luxury, quality, and innovation. We develop, manage, and invest in a diverse portfolio of residential, commercial, and mixed-use properties, setting new benchmarks in the real estate industry. ",
    url: "/group-of-companies#real_estate",
  },
  {
    src: Img9,
    name: "INVESTMENTS",
    description:
      "Our investments arm is instrumental in the development and implementation of various projects and businesses that drive economic growth. We are involved in a wide range of projects ensuring long-term value creation and sustainability.",
    url: "/group-of-companies#investments",
  },
];

const CarouselImage3 = [
  {
    src: soueast,
    title: "Elite Group Holding and SOUEAST Motor Form Strategic Partnership to Accelerate Growth in UAE's Booming Market Segment",
    description:
      "Elite Group Holding Ltd. and SOUEAST Motor Corporation Ltd. marked a significant milestone in their collaboration...",
    created_at: "Aug 31, 2024, Dubai, UAE",
    url: "/blog/the-elite-cars-presents-zenvo-aurora",
  },
  {
    src: Carousel3Img1,
    title: "The All-New Jetour T2 Debuts in the UAE",
    description:
      "The historic event took place at Terra Solis, Dubai where guests were treated to a symphony of multi-sensory spectacle",
    created_at: "May 20, 2024, Dubai, UAE",
    url: "/blog/the-all-new-jetour-t2-debuts-in-the-uae",
  },
  {
    src: "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/2zIGkZe7rd54QurzEGhtiXaGhY1i8Gb5TEKEuiqz.jpg",
    title: "The Elite Cars launches limited edition AED 8 Million...",
    description:
      "Dubai: The Elite Cars Group, one of the leading multi-brand luxury car dealerships in the UAE",
    created_at: "February 22, 2024, Dubai, UAE",
    url: "/blog/the-elite-cars-launches-zenvo-hypercar-to-the-middle-east",
  },
  {
    src: "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/sFSwAybOeSJAZgnTZjhiwnyy2wHhLVVPHRHKs65L.jpg",
    title: "Jetour Shines at 2023 Shanghai Auto Show with Its Latest...",
    description:
      "The Chinese’ up-and-coming SUV brand Jetour Auto showcased multiple models including the DASHING i-DM",
    created_at: "27 January 2024, Dubai, UAE",
    url: "/blog/jetour-shines-at-2023-shanghai-auto-show",
  },
  {
    src: growth,
    title: "THE GROWTH OF REAL ESTATE IN THE UAE",
    description:
      "On April 27th, at the prestigious Beijing Auto China Show 2024",
    created_at: "March 16, 2023, Dubai, UAE",
    url: "/blog/real-estate",
  },
];

const EliteHome = () => {
  const video1 =
    "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/B2vvHPYGrFKF0gYb8ItD5DBb0x2z2kNoFxRTP2xD.mp4";
  const video2 =
    "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/9FmRU5ZUf72IE2chKRzLuCdfPBQjDhgfYUK9PFlh.mp4";
  const video3 =
    "https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/9FmRU5ZUf72IE2chKRzLuCdfPBQjDhgfYUK9PFlh.mp4";
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const videoUrls = [
    video2,
    video3,
    video2,
    video3,
    video2,
    video3,
    video2, // Add more video URLs here...
  ];
  const isMdOrLarger = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    gsap
      .timeline({ duration: 0.5, ease: "power3.out" })
      .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(".section-1 .text-2", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".section-1 .button-1",
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
        ".section-2 .button-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .img-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    // gsap.fromTo('.section-2 .img-1', { opacity: 0 }, {
    //   scrollTrigger: {
    //     trigger: '.section-2',
    //     start: 'top bottom',
    //   }, opacity: 1, duration: 0.75, ease: 'power3.out'
    // });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-3-head",
          start: "top center",
        },
      })
      .fromTo(
        ".section-3-head",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
      .fromTo(
        ".section-3-head+.carouselSection",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-4",
          start: "top center",
        },
        delay: 0.25,
      })
      .fromTo(
        ".section-4 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-4 .text",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-4 .count",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-5",
          start: "top center",
        },
        delay: 0.25,
      })
      .fromTo(
        ".section-5 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-5 .carouselSection",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-6",
          start: "top center",
        },
        delay: 0.25,
      })
      .fromTo(
        ".section-6 ",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
  }, []);

  useEffect(() => {
    let animationFrameId;
    const updateProgress = () => {
      if (videoRef.current) {
        const percentage =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      animationFrameId = requestAnimationFrame(updateProgress);
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [currentVideo]);

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videoUrls.length);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen section-1 relative z-10">
        <div className="relative bg-black h-[100vh] w-screen text-white">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 top-0 w-screen h-full object-cover video-banner"
            onEnded={handleVideoEnd}
          >
            <source src={videoUrls[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute w-full h-full bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9))]"></div>
          <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-10">
            <div className="text-lg md:text-xl font-medium md:mb-4 text-1">
              WELCOME TO ELITE GROUP HOLDING
            </div>
            <div className="text-4xl lg:text-6xl font-bold max-md:leading-[50px] md:mb-5 mb-10 text-2">
              DRIVING <span className="text-[#fb511e]">EXCELLENCE</span>
              <br />
              BUILDING <span className="text-[#fb511e]">FUTURES</span>
            </div>
            <a href="/about-group">
              <button className="hover:bg-[#fb511e] transition-all border border-1 border-white hover:border-[#fb511e] rounded-xl px-10 py-1 md:py-3 button-1">
                Explore
                <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
              </button>
            </a>
          </div>
          <div className="absolute bottom-[10%] w-screen flex flex-wrap gap-[3%] px-[5%] overflow-x-auto whitespace-nowrap">
            {[
              {
                title: "Our Company",
                url: "/group-of-companies",
              },
              {
                title: "Automotive",
                url: "/automotive",
              },
              {
                title: "Investments",
                url: "/group-of-companies#investments",
              },
              {
                title: "Real-Estate",
                url: "/group-of-companies#real_estate",
              },
              {
                title: "Ecommerce",
                url: "/group-of-companies#ecommerce",
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => handleVideoClick(index)}
                className={`cursor-pointer lg:flex-1 ${
                  currentVideo == index ? "max-md:block" : "max-md:hidden"
                }`}
              >
                <Link href={item.url} className="pb-1">
                  <div className="text-xl mb-2 text-[#d7dcd7]">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-between  w-full">
                    {/* Progress Bar */}
                    <div className="w-full bg-[#ffffff33] h-[2px]">
                      {currentVideo == index && (
                        <div
                          className="bg-[#d7dcd7] h-[2px]"
                          style={{ width: `${progress}%` }}
                        ></div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-2 max-md:py-4 mt-8">
        <div className="max-md:my-10 md:flex md:flex-row-reverse items-center">
          <div className=" md:shrink-1 md:w-1/2 px-[5%] md:py-10">
            <div className="md:text-md text-[2rem]  lg:text-[2.5rem] font-semibold  text-[#fb511e]  mb-4 md:mb-8 text-1 ">
              ABOUT US
            </div>
            <p className="mb-3 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2 pt-4">
              At Elite Group Holding, we are committed to enhance the quality of
              life within the communities we serve, continuously seek avenues
              for fostering growth and make a positive impact on the world and
              our community.
            </p>
            <p className="mb-3 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]		 text-2">
              Headquartered in the United Arab Emirates, our expansive portfolio
              encompasses automotive, e-commerce, real estate and contracting,
              and investments.
            </p>
            <p className="mb-3 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	  text-2">
              We pride ourselves on our unwavering dedication to excellence,
              integrity, and teamwork.
            </p>
            <Link href="/about-group">
              <button
                href="/about-group"
                className="block max-sm:text-xs uppercase md:mt-9 max-md:mt-5 max-md:mb-16 bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
              >
                know More
                <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </Link>
          </div>
          <div className="relative md:w-1/2 md:grow md:shrink-0 overflow-hidden img-1 max-md:px-[5%]">
            <div className="overflow-hidden clip-path-md">
              <Image
                unoptimized
                src={AboutImage}
                alt="AboutImage"
                className={`w-full h-full max-md:h-full max-md:aspect-square max-[1680px]:h-[650px] max-[2000px]:h-[550px] object-cover  transition-all duration-500 ease-out hover:scale-105`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] md:text-md text-[2rem]  lg:text-[2.5rem]   text-[#fb511e] font-semibold md:mb-0 mb-0 section-3-head md:mt-20 py-4">
        EXPLORE OUR SECTORS
      </div>
      <CarouselSection images={CarouselImage2} />

      <div className="px-[5%] md:py-0  section-4 bg-[#F7F7F7] md:pb-12  py-16">
        <div className="md:grid md:grid-cols-4 flex flex-col md:items-center gap-5 md:gap-[5%] md:py-[5%] mb-4 ">
          <div className="md:text-md text-[2rem] lg:text-[2.5rem] text-[#fb511e] font-semibold head-1 whitespace-nowrap">
            BUSINESS SYNOPSIS
          </div>
          <div className="flex items-start flex-col md:flex-row md:col-span-3 gap-3 md:gap-3 ">
            <p className="text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] text-2 md:w-1/2 line-clamp-5 hover:line-clamp-none">
              Trust and integrity are our core currencies, it is a foundation on
              how we build trust with our stakeholders and our partners.
            </p>
            <p className="text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] text-2 md:w-1/2 line-clamp-5 hover:line-clamp-none">
              We hold ourselves to the highest ethical standards, ensuring
              transparency, honesty and accountability in everything we do.
            </p>
            <p className="text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] text-2 md:w-1/2 line-clamp-5 hover:line-clamp-none">
              We believe in creating lasting value for our stakeholders. Our
              diversified portfolio, strategic vision, and operational
              excellence drive our success and ensure we remain a trusted
              partner in every sector we operate.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] mb-10 count">
          <div className="flex flex-col items-center justify-center text-xl font-semibold sm:text-2xl text-center gap-3 sm:gap-2 py-6 px-2 border-2 border-[#808080] rounded-lg shadow-[0px_0px_10px_5px_rgba(128,128,128,0.5)] h-[200px]">
            <img
              src="/assets/p1.png"
              alt="Icon 1"
              className="w-[60px] h-[60px] mb-[3px]"
            />
            <div>
              20+ FACILITIES
              <br />
              ACROSS UAE
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-xl font-semibold sm:text-2xl text-center gap-3 sm:gap-2 py-6 px-2 border-2 border-[#808080] rounded-lg shadow-[0px_0px_10px_5px_rgba(128,128,128,0.5)] h-[200px]">
            <img
              src="/assets/p2.png"
              alt="Icon 2"
              className="w-[60px] h-[60px] mb-[3px]"
            />
            <div>
              DECADES OF<span className="sm:block"> EXPERIENCE</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-xl font-semibold sm:text-2xl text-center gap-3 sm:gap-2 py-6 px-2 border-2 border-[#808080] rounded-lg shadow-[0px_0px_10px_5px_rgba(128,128,128,0.5)] h-[200px]">
            <img
              src="/assets/p3.png"
              alt="Icon 3"
              className="w-[60px] h-[60px] mb-[3px]"
            />
            <div>OVER 5000 SATISFIED CUSTOMERS</div>
          </div>
          <div className="flex flex-col items-center justify-center text-xl font-semibold sm:text-2xl text-center gap-3 sm:gap-2 py-6 px-2 border-2 border-[#808080] rounded-lg shadow-[0px_0px_10px_5px_rgba(128,128,128,0.5)] h-[200px]">
            <img
              src="/assets/p4.png"
              alt="Icon 4"
              className="w-[60px] h-[60px] mb-[3px]"
            />
            <div className="uppercase">
              ⁠Multiple international brand partners
            </div>
          </div>
        </div>
      </div>

      <div className="section-5  max-md:mt-8">
        <div
          className="px-[5%] md:text-md text-[2rem]  lg:text-[2.5rem]   text-[#fb511e] font-semibold md:mb-0 mb-0 section-3-head md:mt-20 py-4"
          style={{ color: "#fb511e", lineHeight: "2.5rem" }}
        >
          EXPLORE OUR AUTOMOTIVE PARTNERS
        </div>
        <Partner images={CarouselImage1} />
      </div>

      <div className="px-[5%] mx-auto md:mt-24 section-6">
        <div className=" flex justify-between items-center md:pe-3">
          <div className="md:text-md text-[2rem]  lg:text-[2.5rem] uppercase font-semibold  text-[#fb511e] py-8  md:px-3">
            Media Center
          </div>
          <Link href="/media-centre">
            <button
              href="/about-group"
              className="block max-md:text-xs  uppercase  bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-[8px] sm:rounded-xl px-5 md:px-10 py-1 md:py-3 button-1"
            >
              View All
            </button>
          </Link>
        </div>
        <CarouselSection2 images={CarouselImage3} />
      </div>

      <Brands />

      <Footer />
    </>
  );
};

export default EliteHome;
