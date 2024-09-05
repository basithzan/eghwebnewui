"use client";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection2 = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state on mount
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
     {!isMobile && (
  <div className="mb-10 md:block hidden md:px-3">
    <div className="overflow-hidden mb-5" style={{ height: 'calc(100vh - 250px)' }}>
  <Image
    unoptimized
    src={images[0].src}
    className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105"
    alt="cards"
  />
</div>


    <div className="flex justify-between items-center">
      {/* Wrap the title and description in a div with 75% width */}
      <div className="flex flex-col gap-1.5 w-[75%]">
        <div className="text-[#282828] font-semibold text-sm uppercase">
          {images[0].created_at}
        </div>
        <div className="text-[#282828] text-3xl font-semibold uppercase">
          {images[0].title}
        </div>
        <div className="text-[#282828] text-sm font-light">
          {images[0].description}
        </div>
      </div>

      {/* "READ MORE" button remains unaffected */}
      <a
        href={images[0].url}
        className="block max-sm:text-xs hover:bg-[#fb511e] hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
      >
        READ MORE
        <ArrowLongRightIcon className="ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
      </a>
    </div>
  </div>
)}

      <Carousel
        responsive={responsive}
        infinite
        autoPlaySpeed={5000}
        transitionDuration={1000}
        arrows={false}
        showDots={false}
        containerClass="carousel-container"
        itemClass="md:px-3"
      >
        {images.slice(isMobile ? 0 : 1).map((image, index) => (
          <div
            key={index}
            className="carousel-slide pt-0 pb-12 md:py-12  overflow-hidden"
          >
            <Image
              width={200}
              height={200}
              unoptimized
              src={image.src}
              className="h-48 w-full object-cover transition-all duration-500 ease-out hover:scale-105"
              alt="cards"
            />
            <div className="flex flex-col justify-between items-start gap-1.5 md:gap-3 mt-6">
              <div className="2xl:min-h-[110px] gap-1.5 md:gap-3">
                <span className="text-sm text-[#282828] font-semibold">
                  {image.created_at}
                </span>
                <h3 className="text-md md:text-2xl font-semibold uppercase line-clamp-2 hover:line-clamp-none md:leading-8  transition-all">
                  {image.title}
                </h3>
                <p className="text-sm font-light text-[#282828]">
                  {image.description}
                </p>
              </div>
              <a
                href={image.url}
                className="block max-sm:text-xs hover:bg-[#fb511e] max-sm:mt-3 hover:text-white transition-all border border-1 border-black hover:border-[#fb511e]  rounded-[8px] sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
              >
                READ MORE
                <ArrowLongRightIcon className="ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselSection2;
