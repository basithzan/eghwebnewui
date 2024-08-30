"use client";

import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

const CarouselSection = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    descriptionRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener("mouseenter", () => {
          gsap.to(ref.querySelector(".description"), {
            height: "auto",
            marginTop: "0.5rem",
            duration: 0.75,
            ease: "power1.inOut",
          });
        });
        ref.addEventListener("mouseleave", () => {
          gsap.to(ref.querySelector(".description"), {
            height: 0,
            marginTop: 0,
            duration: 0.75,
            ease: "power1.inOut",
          });
        });
      }
    });
  }, [images]);

  const customRenderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="md:hidden absolute bottom-[5%] left-[5%] transform py-0.5 border border-white text-white z-10"
      >
        <ArrowLongLeftIcon className="w-12 h-5" />
      </button>
    );

  const customRenderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="md:hidden absolute bottom-[5%] right-[5%] transform py-0.5 border border-white text-white z-10"
      >
        <ArrowLongRightIcon className="w-12 h-5" />
      </button>
    );

  return (
    <div className="w-screen md:h-[80vh] relative flex flex-col-reverse md:block carouselSection overflow-hidden max-md:py-1">
      <div className="md:absolute w-screen h-[55vh] md:h-[80vh]0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          renderArrowPrev={customRenderArrowPrev}
          renderArrowNext={customRenderArrowNext}
          selectedItem={images.indexOf(currentImage)}
          onChange={(index) => setCurrentImage(images[index])}
          className="relative w-full h-full reactCarousel max-sm:z-10"
          autoPlay
          infiniteLoop={true}
          interval={5000}
          transitionTime={1000}
          stopOnHover={false}
          emulateTouch
          animationHandler={`fade`}
          swipeable={false}
          dynamicHeight={false}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-[50vh] md:h-[80vh]">
              <Image
                unoptimized
                src={image.src}
                alt={image.name}
                className="object-cover brightness-[50%] w-full h-full"
              />

              <div className="md:hidden absolute left-0 w-full px-[5%] top-1/2 -translate-y-1/2 text-white text-left">
                <div className="md:text-md text-[2rem]  lg:text-[2.5rem] font-semibold  mb-3">
                  {image.name}
                </div>
                <div className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]">
                  {image.description}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="hidden md:grid-cols-6"></div>
      <div className="hidden md:grid-cols-5"></div>

      <div
        className={`justify-evenly max-md:hidden relative z-50 gap-3 px-5 w-full md:px-0 mb-5 md:mb-5 md:gap-0 max-md:min-w-[730px] max-md:overflow-auto flex-wrap grid grid-cols-4 md:grid-cols-${images.length} md:h-full`}
      >
        {images.map((image, index) => (
          <a
            target="blank"
            href={image.url}
            key={index}
            className={`relative border md:rounded-none rounded-[10px] sm:rounded-full px-2 min-w-[80px]   sm:px-5 md:px-0 py-1 md:py-0 flex-auto md:border-r border-black md:border-[#808080] group duration-300 transition-all max-md:hover:bg-black`}
            onMouseEnter={() => setCurrentImage(image)}
            ref={(el) => (descriptionRefs.current[index] = el)}
          >
            <div className="md:absolute md:w-[80%] left-1/2 md:-translate-x-1/2 md:py-4  bottom-0 transition-all duration-300 ease-in-out md:bg-[#0000007d]  transform md:mb-6">
              <div
                className={`select-none text-center group-hover:text-[#fb511e]   duration-300 sm:text-start md:px-5 text-[10px] sm:text-xs xl:text-sm 2xl:text-lg  transition-all text-black md:text-white max-md:group-hover:text-white`}
              >
                {image.name}
              </div>
              <div
                className={` h-[0px] group-hover:h-[220px] xl:group-hover:h-[220px] 2xl:group-hover:h-[220px] duration-300 description max-md:hidden text-start xl:text-sm 2xl:text-base text-xs md:px-5 text-black md:text-[#DFDCDC] overflow-hidden cursor-pointer`}
              >
                {image.description}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className=" md:hidden  flex flex-col px-5">
        {/* <div
          className={`justify-evenly relative z-50 gap-3 px-5 w-full md:px-0 mb-5 md:mb-5 md:gap-0 max-md:min-w-[730px] max-md:overflow-auto flex-wrap grid grid-cols-4 md:grid-cols-${images.length} md:h-full`}
        > */}
        {/* {images.map((image, index) => ( */}
        <Link
          target="blank"
          href={currentImage.url}
          // key={index}
          className={`relative border mb-4 md:rounded-none rounded-[10px] sm:rounded-full px-2 min-w-[80px]   sm:px-5 md:px-0 py-1 md:py-0 flex-auto md:border-r border-black w-full md:border-[#808080] group transition-all max-md:hover:bg-black`}
          // onMouseEnter={() => setCurrentImage(image)}
          // ref={(el) => (descriptionRefs.current[index] = el)}
        >
          <div className="md:absolute md:w-[80%] left-1/2 md:-translate-x-1/2 md:py-4  bottom-0 transition-all duration-300 ease-in-out md:bg-[#0000007d]  transform md:mb-6">
            <div
              className={`select-none text-center group-hover:text-[#fb511e] whitespace-nowrap  duration-300 sm:text-start md:px-5 text-[10px] sm:text-xs md:text-lg  transition-all text-black md:text-white max-md:group-hover:text-white`}
            >
              {currentImage.name}
            </div>
            <div
              className={`h-0 description max-md:hidden text-start md:text-base xl:text-lg text-xs md:px-5 text-black md:text-[#DFDCDC] overflow-hidden cursor-pointer`}
            >
              {currentImage.description}
            </div>
          </div>
        </Link>
        {/* ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CarouselSection;
