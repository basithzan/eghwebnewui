"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import brandImg from "/public/assets/brands/color/lynk&com-black.png";
import brandImg1 from "/public/assets/brands/Jetour-black.png";
import brandImg2 from "/public/assets/brands/color/image 44.png";
import brandImg3 from "/public/assets/brands/color/image 46.png";
import brandImg4 from "/public/assets/brands/color/Rectangle 24.png";
import brandImg5 from "/public/assets/brands/color/zenvo-black.png";
import brandImg6 from "/public/assets/brands/soueast.png";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const GroupSection = ({
  image,
  title,
  descriptions,
  link = "",
  linkexp = "",
  url = false,
  hasBrands = false,
  hasBtn = false,
  direction = "right",
  hasExplore = false,
}) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const isMdOrLarger = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const imageEl = imageRef.current;
    const descriptionEl = descriptionRef.current;

    if (sectionEl && imageEl && descriptionEl) {
      const directionSettings =
        direction === "right"
          ? { imageX: -50, descX: 150 }
          : { imageX: 150, descX: -50 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top center",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        imageEl,
        { x: directionSettings.imageX, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      ).fromTo(
        descriptionEl,
        { x: directionSettings.descX, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [direction]);

  const clipPathStyle = isMdOrLarger
    ? direction === "right"
      ? "polygon(0 0, 80% 0, 100% 100%, 0% 100%)"
      : "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
    : null;

  return (
    <article className="overflow-hidden" ref={sectionRef}>
      <div
        className={`flex max-md:flex-col-reverse gap-7 xl:gap-3 sm:items-center max-md:mb-5 ${
          direction === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="relative overflow-hidden z-10 md:w-[55.20%]">
          <Image
            unoptimized
            src={image}
            width={100}
            height={100}
            ref={imageRef}
            alt={title}
            className={`w-full sm:h-[20rem] max-md:aspect-square md:h-[40rem] object-cover  ${
              direction === "right" ? "clip-path-left-md" : "clip-path-right-md"
            }`}
          />
        </div>
        <div
          className="md:px-12 lg:px-20 xl:px-24 max-sm:pt-10 md:w-[44.5%]"
          ref={descriptionRef}
        >
          <h2 className="leading-[105%] md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1 uppercase">
            {title}
          </h2>
          {descriptions.map((description, index) => (
            <p
              key={index}
              className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
            >
              {description}
            </p>
          ))}
          {hasBtn && (
            <Link target="blank" href={link}>
              <button
                href="/about-group"
                className="block max-sm:text-xs uppercase md:mt-9 max-md:mt-5  bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
              >
                Visit Website
                <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </Link>
          )}
          {hasExplore && (
            <Link href={linkexp}>
              <button className="block max-sm:text-xs uppercase md:mt-9 max-md:mt-5  bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                Visit Website
                <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </Link>
          )}

          {/* {url && (
            <Link href={url}>
              <button
                className={`${
                  !hasBrands ? "mt-6" : ""
                } block max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-5 sm:px-10 py-1 md:py-3 button-1`}
              >
                Read More
                <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </Link>
          )} */}

          {hasBrands && (
            <Marquee
              loop={0}
              className="gap-0 brands md:mt-10 mt-5 mb-5 md:mb-0"
            >
              {/* <a href="/automotive/lynk-and-co">
                <Image unoptimized
                  src={brandImg}
                  className="h-8 w-fit !object-cover px-10"
                  alt="Lamborghini"
                />
              </a> */}
              <a href="/automotive">
                <Image
                  unoptimized
                  src={brandImg1}
                  className="h-8 w-fit !object-cover  px-10"
                  alt="Brand 1"
                />
              </a>
              {/* <a href="/automotive/ultimate-motors">
                <Image unoptimized
                  src={brandImg2}
                  className="h-8 w-fit !object-cover  px-10"
                  alt="Brand 2"
                />
              </a> */}
              {/* <a href="/automotive/elite-motors">
                <Image unoptimized
                  src={brandImg3}
                  className="h-8 w-fit !object-cover  px-10"
                  alt="Brand 3"
                />
              </a> */}
              <a href="/automotive">
                <Image
                  unoptimized
                  src={brandImg4}
                  className="h-8 w-fit !object-cover  px-10"
                  alt="Brand 4"
                />
              </a>
              <a href="/automotive">
                <Image
                  unoptimized
                  src={brandImg5}
                  className="h-8 w-fit !object-cover  px-10"
                  alt="Brand 5"
                />
              </a>
              <a href="/automotive">
                <Image
                  unoptimized
                  src={brandImg6}
                  className="h-8 w-fit !object-cover  px-10"
                  alt="Brand 5"
                />
              </a>
            </Marquee>
          )}
        </div>
      </div>
    </article>
  );
};

export default GroupSection;
