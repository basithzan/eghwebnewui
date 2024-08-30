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

const Partner = ({ images }) => {
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
        className="lg:hidden absolute bottom-[5%] left-[5%] transform py-0.5 border border-white text-white z-10"
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
        className="lg:hidden absolute bottom-[5%] right-[5%] transform py-0.5 border border-white text-white z-10"
      >
        <ArrowLongRightIcon className="w-12 h-5" />
      </button>
    );

  return (
    <div className="w-screen lg:h-[570px] xl:h-[80vh] relative flex flex-col-reverse lg:block carouselSection max-lg:py-1">
      <div className="lg:absolute w-screen h-[50vh] lg:h-[570px] xl:h-[80vh]">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          // renderArrowPrev={customRenderArrowPrev}
          // renderArrowNext={customRenderArrowNext}
          selectedItem={images.indexOf(currentImage)}
          onChange={(index) => setCurrentImage(images[index])}
          className="relative w-full h-full reactCarousel"
          autoPlay
          infiniteLoop={true}
          interval={5000}
          transitionTime={1000}
          stopOnHover={false}
          emulateTouch
          swipeable={false}
          animationHandler={`fade`}
          dynamicHeight={false}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[50vh] lg:h-[570px] xl:h-[80vh]"
            >
              <Image
                unoptimized
                src={image.src}
                alt={image.name}
                className="object-cover brightness-[50%] w-full h-full"
              />

              <div className="lg:hidden absolute left-0 w-full px-[5%] pb-7 pt-3 bg-[#00000078] bottom-0 text-center  text-white">
                <div className="lg:text-md text-[2rem] text-[#fb511e]  lg:text-[2.5rem] font-semibold  mb-3">
                  {image.name}
                </div>
                <a target="blank" href={image.url} className="block mt-2">
                  <button className="hover:bg-[#fb511e] transition-all flex items-center justify-center mx-auto  border border-1 border-white hover:border-[#fb511e] rounded-xl px-10 py-1 lg:py-1 button-1">
                    <span className=" whitespace-nowrap">
                      {" "}
                      {index === 4 ? "EXPLORE" : "Visit Website"}
                    </span>
                    <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                  </button>
                </a>
              </div>
              {/* <div className="md:hidden absolute left-0 w-full px-[5%] top-1/2 -translate-y-1/2 text-white text-left">
                <div className="md:text-md text-[2rem]  lg:text-[2.5rem] font-semibold  mb-3">
                  {image.name}
                </div>
                <div className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]">
                  {image.description}
                </div>
              </div> */}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="hidden lg:grid-cols-6"></div>
      <div className="hidden lg:grid-cols-5"></div>
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

      {/* <div
        className={`flex justify-evenly gap-3 px-5 max-lg:w-fit lg:px-0 mb-5 lg:mb-5 lg:gap-0 flex-wrap lg:grid lg:grid-cols-${images.length} lg:h-full`}
      >
        {images.map((image, index) => (
          <a
            href={image.url}
            target="blank"
            key={index}
            className={`relative border lg:rounded-none max-sm:flex justify-center rounded-[10px] sm:rounded-full max-lg:w-[45%] px-5 lg:px-0 py-1 lg:py-0 flex-auto lg:border-r border-black lg:border-[#808080] group transition-all max-lg:hover:bg-black`}
            onMouseEnter={() => setCurrentImage(image)}
            ref={(el) => (descriptionRefs.current[index] = el)}
          >
            <div className="lg:absolute w-fit lg:w-[80%]  left-1/2 lg:-translate-x-1/2 lg:py-4  bottom-0 transition-all duration-300 ease-in-out lg:bg-[#0000007d]  transform lg:mb-6">
              <div
                className={`select-none text-center  group-hover:text-[#fb511e] duration-300 sm:text-start lg:px-5 text-[10px] sm:text-xs lg:text-lg   transition-all text-black lg:text-white max-lg:group-hover:text-white`}
              >
                {image.name}
              </div>
              <div
                className={`h-0 description max-lg:hidden text-start lg:text-xs 2xl:text-lg text-xs lg:px-5 text-black lg:text-[#DFDCDC] overflow-hidden cursor-pointer`}
              >
                {image.description}
                <a
                  target={index === 4 ? "none" : "blank"}
                  href={image.url}
                  className="block mt-4"
                >
                  <button className="hover:bg-[#fb511e] transition-all flex items-center flex-nowrap border border-1 border-white hover:border-[#fb511e] rounded-xl px-6 2xl:px-10 py-1 lg:py-1 button-1">
                    <span className=" whitespace-nowrap">
                      {" "}
                      {index === 4 ? "EXPLORE" : "Visit Website"}
                    </span>

                    <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                  </button>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div> */}

      <div className="md:hidden  flex flex-col px-5">
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
      </div>
    </div>
  );
};

export default Partner;
