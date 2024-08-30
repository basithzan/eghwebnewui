"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Navbar from "../Navbar";
import Footer from "../Footer";
import GalleryImg1 from "/public/assets/gallery/1.png";
import GalleryImg2 from "/public/assets/gallery/2.png";
import GalleryImg3 from "/public/assets/gallery/3.png";
import GalleryImg4 from "/public/assets/gallery/4.png";
import GalleryImg5 from "/public/assets/gallery/5.png";
import GalleryImg6 from "/public/assets/gallery/6.png";
import GalleryImg7 from "/public/assets/gallery/7.png";
import GalleryImg8 from "/public/assets/gallery/8.png";
import GalleryImg9 from "/public/assets/gallery/9.png";
import GalleryImg10 from "/public/assets/gallery/10.png";
import GalleryImg11 from "/public/assets/gallery/11.png";
import Img1 from "/public/assets/220c8c6b943f41d253ab5e853e6103b7.png";
import Img2 from "/public/assets/897d556a59733e5e2482f1b030c8c4de.png";
import Img3 from "/public/assets/ebaac82941ffdd8e43e3861aeb9a9ef3.png";
import BackgroundImage from "/public/assets/8feed4b5e6b4f73a93ac24feb4a0ddc6.png";

import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
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
          src={BackgroundImage}
          alt="BackgroundImage"
          className="object-cover object-center h-screen w-screen brightness-50"
        />
        <div className="absolute bottom-24 left-[3%] flex flex-col gap-1.5">
          <div className="text-[#919191] font-bold text-sm text-1">
            May 20, 2024, Dubai, UAE
          </div>
          <div className="text-[#FFFFFF] text-3xl font-bold text-2">
            LAMBORGHINI URUS SE DEBUTS IN GERMANY
          </div>
          <a
            href="#main"
            className="text-[#919191] text-sm font-light underline text-3"
          >
            Read More
          </a>
        </div>
      </div>

      <div className="px-[5%]">
        <div className="py-5 flex items-center justify-end">
          <div className="text-[#282828]">
            <a href="/">Home</a> / Media Center
          </div>
        </div>

        <div className="section-2" id="main">
          <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1">
            MEDIA CENTER
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-8 images-1">
            <a href="#press" className="relative group overflow-hidden">
              <div className="absolute left-0 text-center w-full transition-all duration-500 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 text-2xl md:3xl lg:text-4xl font-medium text-white z-10">
                Press Releases
              </div>
              <Image
                unoptimized
                src={Img1}
                alt="Img1"
                className="brightness-50 transition-all duration-500 group-hover:scale-100 scale-110"
              />
            </a>
            <a href="#photo-gallery" className="relative group overflow-hidden">
              <div className="absolute left-0 text-center w-full transition-all duration-500 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 text-2xl md:3xl lg:text-4xl font-medium text-white z-10">
                Photo Gallery
              </div>
              <Image
                unoptimized
                src={Img2}
                alt="Img2"
                className="brightness-50 transition-all duration-500 group-hover:scale-100 scale-110"
              />
            </a>
            <a href="#video-gallery" className="relative group overflow-hidden">
              <div className="absolute left-0 text-center w-full transition-all duration-500 bottom-[20%] group-hover:bottom-1/2 translate-y-1/2 text-2xl md:3xl lg:text-4xl font-medium text-white z-10">
                Video Gallery
              </div>
              <Image
                unoptimized
                src={Img3}
                alt="Img3"
                className="brightness-50 transition-all duration-500 group-hover:scale-100 scale-110"
              />
            </a>
          </div>
        </div>

        <hr className="border-black my-12 md:my-20" />

        <div className="section-3 mb-10" id="press">
          <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1">
            Press Releases
          </div>
          <div className="flex flex-col gap-10 section-3-1">
            <div className="flex items-start max-lg:flex-col gap-10">
              <Image
                unoptimized
                src={Img1}
                alt="Img1"
                className="lg:w-1/2 h-full object-cover"
              />
              <div className="lg:w-1/2">
                <div className="font-normal text-[#282828] mb-4 md:mb-6">
                  February 22, 2024, Dubai, UAE
                </div>
                <div className="font-bold text-2xl md:text-4xl mb-5 uppercase line-clamp-2">
                  The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA
                </div>
                <div className="text-[#282828] text-[1rem] md:text-[1.2rem] mb-5">
                  The Elite Cars, the leading luxury automotive dealership in
                  the United Arab Emirates, through their exclusive partnership
                  with Zenvo Automotive, the renowned Danish supercar{" "}
                </div>
                <button className="bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1">
                  Read More
                  <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex items-start max-lg:flex-col gap-10">
              <Image
                unoptimized
                src={Img2}
                alt="Img2"
                className="lg:w-1/2 h-full object-cover"
              />
              <div className="lg:w-1/2">
                <div className="font-normal text-[#282828] mb-4 md:mb-6">
                  February 22, 2024, Dubai, UAE
                </div>
                <div className="font-bold text-2xl md:text-4xl mb-5 uppercase line-clamp-2">
                  The All-New Jetour T2 Debuts in the UAE
                </div>
                <div className="text-[#282828] text-[1rem] md:text-[1.2rem] mb-5">
                  The Elite Cars, the leading luxury automotive dealership in
                  the United Arab Emirates, through their exclusive partnership
                  with Zenvo Automotive, the renowned Danish supercar
                </div>
                <button className="bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1">
                  Read More
                  <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex items-start max-lg:flex-col gap-10">
              <Image
                unoptimized
                src={Img1}
                alt="Img1"
                className="lg:w-1/2 h-full object-cover"
              />
              <div className="lg:w-1/2">
                <div className="font-normal text-[#282828] mb-4 md:mb-6">
                  February 22, 2024, Dubai, UAE
                </div>
                <div className="font-bold text-2xl md:text-4xl mb-5 uppercase line-clamp-2">
                  2023 Jetour Dashing Makes Its Debut in UAE Through The Elite
                  Cars
                </div>
                <div className="text-[#282828] text-[1rem] md:text-[1.2rem] mb-5">
                  The Elite Cars, the leading luxury automotive dealership in
                  the United Arab Emirates, through their exclusive partnership
                  with Zenvo Automotive, the renowned Danish supercar{" "}
                </div>
                <button className="bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1">
                  Read More
                  <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E1A] px-[5%] md:py-20 py-10 section-4">
        <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1">
          Photo Gallery
        </div>
        <div className="grid grid-cols-5 images-1" id="photo-gallery">
          <a
            href={GalleryImg1}
            data-pswp-width="1000"
            data-pswp-height="667"
            target="_blank"
            className="col-span-5 "
          >
            <Image
              unoptimized
              src={GalleryImg1}
              className="w-full max-h-[60vh] object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg2}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg2}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg3}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg3}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg4}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg4}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg5}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg5}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg6}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg6}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg7}
            data-pswp-width="1350"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg7}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg8}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg8}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg9}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg9}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg10}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg10}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg11}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg11}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
        </div>
      </div>

      <div className="px-[5%] md:py-20 py-10 section-5" id="video-gallery">
        <div class="md:text-md text-[2rem] lg:text-[2.5rem] text-[#282828] font-semibold md:pb-10 pb-5 head-1">
          Video Gallery
        </div>
        <div className="grid grid-cols-5 images-1" id="video-gallery">
          <a
            href={GalleryImg1}
            data-pswp-width="1000"
            data-pswp-height="667"
            target="_blank"
            className="col-span-5 "
          >
            <Image
              unoptimized
              src={GalleryImg1}
              className="w-full max-h-[60vh] object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg2}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg2}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg3}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg3}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg4}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg4}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg5}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg5}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg6}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg6}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg7}
            data-pswp-width="1350"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg7}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg8}
            data-pswp-width="1300"
            data-pswp-height="650"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg8}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg9}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg9}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg10}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg10}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
          <a
            href={GalleryImg11}
            data-pswp-width="1000"
            data-pswp-height="500"
            target="_blank"
            className="w-full h-full object-cover"
          >
            <Image
              unoptimized
              src={GalleryImg11}
              className="w-full h-full object-cover"
              alt="galleryImg"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test;
