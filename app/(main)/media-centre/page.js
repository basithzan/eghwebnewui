"use client";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect } from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";
// import GalleryImg6 from "/public/assets/gallery/gallery6.png";
// import GalleryImg7 from "/public/assets/gallery/gallery7.png";
// import GalleryImg9 from "/public/assets/gallery/gallery9.png";
// import GalleryImg10 from "/public/assets/gallery/gallery10.png";
// import GalleryImg11 from "/public/assets/gallery/gallery11.png";
import Carousel3Img1 from "/public/assets/897d556a59733e5e2482f1b030c8c4de.png";
import Carousel3Img01 from "/public/assets/03.jpg";
import BackgroundImage from "/public/assets/aurora.jpg";
import BackgroundImagemobile from "/public/assets/aurora-mobile.jpg";

import Image from "next/image";
import Link from "next/link";
import "photoswipe/dist/photoswipe.css";

gsap.registerPlugin(ScrollTrigger);

const MediaCenter = () => {
  useEffect(() => {
    // Smooth Scroll
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // GSAP Animations
    gsap
      .timeline({ duration: 0.5, ease: "power3.out" })
      .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(".section-1 .text-2", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".section-1 .text-3",
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
        ".section-2 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .images-1",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-3 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .section-3-1",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-4",
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-4 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-4 .images-1",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-5",
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-5 .head-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-5 .images-1",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    let lightbox = new PhotoSwipeLightbox({
      gallery: "#photo-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    let lightbox2 = new PhotoSwipeLightbox({
      gallery: "#video-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox2.init();

    return () => {
      lightbox.destroy();
      lightbox = null;

      lightbox2.destroy();
      lightbox2 = null;
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen relative section-1">
        <Image
          unoptimized
          src={Carousel3Img01}
          alt="BackgroundImage"
          className="object-cover object-center h-screen w-screen brightness-50"
        />

        <div className="absolute bottom-24 left-[3%] flex flex-col gap-1.5">
          <div className="text-white font-bold text-sm text-1">
          Aug 12, 2024, Dubai, UAE
          </div>
          <div className="text-[#FFFFFF] text-4xl font-bold text-2">
           Elite Group Holding and SOUEAST Motor Form Strategic Partnership to Accelerate Growth.. 
          </div>
          <a
            href="/blog/elite-group-holding-and-soueast-motor"
            className="text-white text-sm font-light underline text-3"
          >
            Read More
          </a>
        </div>
        <div className=" absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / Media Center
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%]">
        <div className="section-2" id="main">
          <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:py-10 pb-5 pt-10 head-1" style={{ color: '#fb511e' }}>
            MEDIA CENTER
          </div>
          {/* <div className="grid md:grid-cols-3 gap-3 md:gap-8 images-1">
            <a href="#press" className="relative group overflow-hidden">
              <div className="absolute left-0 text-center w-full transition-all duration-500 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 text-[32px] md:text-2xl lg:text-3xl font-medium text-white z-10">
                Press Releases
              </div>
              <Image unoptimized
                src={Img1}
                alt="Img1"
                className="brightness-50 transition-all duration-500 group-hover:scale-100 scale-110"
              />
            </a>
            <a href="#photo-gallery" className="relative group overflow-hidden">
              <div className="absolute left-0 text-center w-full transition-all duration-500 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 text-[32px] md:text-2xl lg:text-3xl font-medium text-white z-10">
                Photo Gallery
              </div>
              <Image unoptimized
                src={Img2}
                alt="Img2"
                className="brightness-50 transition-all duration-500 group-hover:scale-100 scale-110"
              />
            </a>
            <a href="#video-gallery" className="relative group overflow-hidden">
              <div className="absolute left-0 text-center w-full transition-all duration-500 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 text-[32px] md:text-2xl lg:text-3xl font-medium text-white z-10">
                Video Gallery
              </div>
              <Image unoptimized
                src={Img3}
                alt="Img3"
                className="brightness-50 transition-all duration-500 group-hover:scale-100 scale-110"
              />
            </a>
          </div> */}
        </div>

        {/* <hr className="border-black my-12 md:my-20" /> */}

        <div className="section-3 mb-10" id="press">
          {/* <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1 uppercase">
            Press Releases
          </div> */}
          <div className="flex flex-col gap-10 section-3-1">
<div className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
              <Image
                unoptimized
                width={200}
                height={200}
                src={BackgroundImage} 
                alt="The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA"
                className="w-[550px] h-[300px] object-cover"
              />
              <div className="lg:w-[65%]">
                <div className="text-[#282828] font-semibold text-sm  mb-[5px] sm:mb-4">
                February 21, 2024, Dubai, UAE
                </div>
                <div className="font-semibold text-2xl md:text-4xl  mb-[5px] sm:mb-4 uppercase line-clamp-2">
                The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA
                </div>
                <div className=" mb-4 sm:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
The Elite Cars, the leading luxury automotive dealership in the United Arab Emirates, through their exclusive partnership...                </div>
                <Link href="/blog/the-elite-cars-presents-zenvo-aurora">
                  <button className="block max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                    Read More
                    <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
              <Image
                unoptimized
                width={200}
                height={200}
                src={Carousel3Img1} 
                alt="The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA"
                className="w-[550px] h-[300px] object-cover"
              />
              <div className="lg:w-[65%]">
                <div className="text-[#282828] font-semibold text-sm  mb-[5px] sm:mb-4">
                Jan 21, 2024, Dubai, UAE
                </div>
                <div className="font-semibold text-2xl md:text-4xl  mb-[5px] sm:mb-4 uppercase line-clamp-2">
                The All-New Jetour T2 Debuts in the UAE
                </div>
                <div className=" mb-4 sm:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
                The historic event took place at Terra Solis, Dubai where guests were treated to a symphony of multi-sensory spectacle
                </div>
                <Link href="/blog/the-all-new-jetour-t2-debuts-in-the-uae">
                  <button className="block max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                    Read More
                    <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </div>
                 

            <div className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
              <Image
                unoptimized
                width={200}
                height={200}
                src="https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/2zIGkZe7rd54QurzEGhtiXaGhY1i8Gb5TEKEuiqz.jpg"
                alt="Img2"
                className="w-[550px] h-[300px] object-cover"
              />
              <div className="lg:w-1/2">
                <div className="text-[#282828] font-semibold text-sm mb-[5px] sm:mb-4">
                June 06, 2023, Dubai, UAE
                </div>
                <div className="font-semibold text-2xl md:text-4xl mb-[5px] sm:mb-4 uppercase line-clamp-2">
                The Elite Cars launches limited edition AED 8 Million...
                </div>
                <div className="mb-4 sm:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
                Dubai: The Elite Cars Group, one of the leading multi-brand luxury car dealerships in the UAE
                </div>
                <Link href="/blog/the-elite-cars-launches-zenvo-hypercar-to-the-middle-east">
                  <button className="block max-sm:text-xs  bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                    Read More
                    <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
              <Image
                unoptimized
                width={200}
                height={200}
                src="https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/sFSwAybOeSJAZgnTZjhiwnyy2wHhLVVPHRHKs65L.jpg"
                alt="Img1"
                className="w-[550px] h-[300px] object-cover"
              />
              <div className="lg:w-1/2">
                <div className="text-[#282828] font-semibold text-sm mb-[5px] sm:mb-4 md:mb-6">
                27 January 2024, Dubai, UAE
                </div>
                <div className="font-semibold text-2xl md:text-4xl mb-[5px] sm:mb-4 uppercase line-clamp-2">
                Jetour Shines at 2023 Shanghai Auto Show with Its Latest...
                </div>
                <div className="mb-4 sm:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
                  The Chinese’ up-and-coming SUV brand Jetour Auto showcased multiple models including the DASHING i-DM, T2 (Named Traveler in the Chinese market), T3
                </div>
                <Link href="/blog/jetour-shines-at-2023-shanghai-auto-show">
                  <button className="block max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                    Read More
                    <ArrowLongRightIcon className="ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
              <img
                src="/assets/growth.jpeg"
                alt="Img2"
                className="w-[550px] h-[300px] object-cover"
              />
              <div className="lg:w-1/2">
                <div className="text-[#282828] font-semibold text-sm mb-[5px] sm:mb-4">
                March 16, 2023, Dubai, UAE
                </div>
                <div className="font-semibold text-2xl md:text-4xl mb-[5px] sm:mb-4 uppercase line-clamp-2">
                THE GROWTH OF REAL ESTATE IN THE UAE
                </div>
                <div className="mb-4 sm:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
                The United Arab Emirates (UAE) has witnessed a remarkable transformation over the past few decades, evolving from a desert landscape into a bustling hub of
                </div>
                <Link href="/blog/real-estate">
                  <button className="block max-sm:text-xs  bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                    Read More
                    <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#1E1E1E1A] px-[5%] md:py-20 py-10 section-4">
        <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1 uppercase">
          Photo Gallery
        </div>
        <div className="grid grid-cols-5 images-1" id="photo-gallery">
          <a
            href={GalleryImg1.src}
            data-pswp-width="1000"
            data-pswp-height="667"
            target="_blank"
            className="col-span-5 overflow-hidden"
          >
            <Image unoptimized
              src={GalleryImg1.src}
              width={200}
              height={200}
              className="w-full max-h-[60vh] object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg1"
            />
          </a>
          <a
            href={GalleryImg2.src}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
              src={GalleryImg2.src}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg2"
            />
          </a>
          <a
            href={GalleryImg3.src}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
              src={GalleryImg3.src}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg3"
            />
          </a>
          <a
            href={GalleryImg4.src}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg4.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg4"
            />
          </a>
          <a
            href={GalleryImg5.src}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg5.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg5"
            />
          </a>
          
          <a
            href={GalleryImg8.src}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg8.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg8"
            />
          </a>
      
        </div>


        
      </div> */}

      {/* <div className="px-[5%] md:py-20 py-10 section-5" id="video-gallery">
        <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1 uppercase">
          Video Gallery
        </div>
        <div className="grid grid-cols-5 images-1" id="video-gallery">
          <a
            href={GalleryImg1.src}
            data-pswp-width="1000"
            data-pswp-height="667"
            target="_blank"
            className="col-span-5  overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg1.src}
              className="w-full max-h-[60vh] object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg1"
            />
          </a>
          <a
            href={GalleryImg2.src}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg2.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg2"
            />
          </a>
          <a
            href={GalleryImg3.src}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg3.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg3"
            />
          </a>
          <a
            href={GalleryImg4.src}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg4.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg4"
            />
          </a>
          <a
            href={GalleryImg5.src}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg5.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg5"
            />
          </a>
        
          <a
            href={GalleryImg8.src}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover overflow-hidden"
          >
            <Image unoptimized
             width={200}
             height={200}
              src={GalleryImg8.src}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]"
              alt="GalleryImg8"
            />
          </a>
      
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default MediaCenter;