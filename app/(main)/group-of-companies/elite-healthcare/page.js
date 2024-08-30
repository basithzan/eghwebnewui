"use client";

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

import Footer from "../../Footer";
import Navbar from "../../Navbar";
import mission from "/public/assets/about-us/Ecom.jpg";
import ImageRakanTurki from "/public/assets/about-us/Leader.jpg";
import reward from "/public/assets/about-us/awards2.jpg";
import BackgroundImageecom from "/public/assets/about-us/BackgroundImageecom.jpg";
import BackgroundImageecommob from "/public/assets/about-us/BackgroundImageecommob.jpg";
import csr2 from "/public/assets/about-us/csr3.jpg";
import vision from "/public/assets/m&v.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
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

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen relative section-1">
        <Image
          unoptimized
          width={200}
          height={300}
          src={BackgroundImageecom}
          alt="bg-img"
          className="object-cover object-center h-screen max-md:hidden w-screen brightness-50"
        />
        <Image
          unoptimized
          width={200}
          height={300}
          src={BackgroundImageecommob}
          alt="bg-img"
          className="object-cover object-center md:hidden h-screen w-screen brightness-50"
        />

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">

          <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
            E-Commerce
          </div>
        </div>
        <div className=" absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / Group of companies / E-commerce
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] max-sm:mb-1">
        <div className="px-[5%] section-2 overflow-hidden">
          <div className="my-5 md:my-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center">
            <div className="relative sm:w-[48%] sm:grow sm:shrink-0 sm:-me-[5.65%] overflow-hidden img-1">
              {/* <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 -top-10 xl:-left-[19.4%] lg:-left-[14%] md:-left-[12%] sm:-left-[14%] "></div> */}
              <Image
                unoptimized
                width={200}
                height={300}
                src={mission}
                alt="img1"
                className="w-full sm:h-[30rem] max-md:aspect-square clip-path-right-md lg:h-[36rem] object-cover"
              />
            </div>
            <div className="xl:px-24 sm:shrink-1 sm:w-[52%] xl:pb-10">
              <div className="common-heading mb-5 md:mb-10 text-1 mt-8 sm:mt-0" style={{ color: '#fb511e' }}>
                E-COMMERCE
              </div>
              {/* <p className="font-semibold mb-2 md:mb-4 text-[#282828] text-xl md:text-xl xl:text-[1.25rem] text-2">
                It all started with a dream
              </p> */}
              <p className="mb-2 md:mb-4  common-description text-3">
                As a dynamic and forward-thinking division
within The Elite Group Holding, our e-commerce
sector is committed to revolutionizing the online
shopping experience for customers in the UAE
and the world.
              </p>
              <p className="mb-2 md:mb-4  common-description text-3">
                With a relentless focus on delivering premium
products, seamless transactions, and unparalleled
customer service, we have positioned ourselves
as a budding-leader in the digital marketplace.{" "}
              </p>
              <p className="mb-2 md:mb-4 common-description text-3">
  For more information, contact us at
  <br />
  <strong>ecommerce@elitegroupholding.com</strong>
</p>
            </div>
          </div>
        </div>


      </div>



      {/* <div className="container mx-auto md:py-24 py-16 px-[5%] section-5 overflow-hidden">
                <div className="common-heading mb-5 sm:mb-10 head-1">ORGANIZATION STRUCTURE</div>

                <div className="grid md:grid-cols-3 md:gap-10 carousel-1">
                    <div className="relative aspect-square">
                        <Image unoptimized width={200} height={300} src={ImageRakanTurki} alt="ImageRakanTurki" className="h-full w-full object-cover brightness-75 hover:grayscale hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square hidden md:block">
                        <Image unoptimized width={200} height={300} src={ImageRakanTurki} alt="ImageRakanTurki" className="h-full w-full object-cover brightness-75 hover:grayscale hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square hidden md:block">
                        <Image unoptimized width={200} height={300} src={ImageRakanTurki} alt="ImageRakanTurki" className="h-full w-full object-cover brightness-75 hover:grayscale hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* <div className="relative w-screen md:h-screen section-6 grid overflow-hidden ">
                <Image unoptimized width={200} height={300} src={BackgroundImage2} alt="ImageRakanTurki" className="absolute object-cover object-right sm:object-center max-md:hidden w-full h-full brightness-50" />
                <Image unoptimized width={200} height={300} src={BackgroundImage2mobile} alt="ImageRakanTurki" className="absolute object-cover md:hidden w-full h-full brightness-50" />
                <div className="px-[5%] z-10 text-white place-content-center container mx-auto md:py-24 py-16">
                    <Image unoptimized width={200} height={300} alt="img" src={Logo} className="w-36 md:w-56 mb-5 logo-1" />
                    <div className="common-heading !text-white mb-7 uppercase text-1">CORPORATE SOCIAL RESPONSIBILITY</div>
                    <div className="common-description lg:w-1/2 !text-[#fff] text-2 mb-3">At Elite Group Holding, our commitment to excellence extends beyond business performance. We firmly believe that corporate success is intertwined with social responsibility, and we are dedicated to making a positive impact on the communities we serve and the environment we live in. Our Corporate Social Responsibility (CSR) initiatives are rooted in the core values of sustainability, ethical conduct, and community engagement.</div>
                    <div className="common-description lg:w-1/2 !text-[#fff] text-2">We understand that our responsibilities extend beyond financial success. We are dedicated to creating a positive impact on society and the environment, ensuring that our business practices contribute to a better future for all. By integrating CSR into our core operations, we strive to build a sustainable and prosperous world for generations to come.</div>
                </div>
            </div> */}

      {/* <div className="py-24 container mx-auto px-[5%] section-7 overflow-hidden">
                <div className="common-heading mb-7 text-1">Awards & Publications</div>
                <p className=" common-description  text-2">At Elite Group Holding, our dedication to excellence, innovation, and integrity has earned us numerous accolades and industry recognitions. These awards are a testament to our unwavering commitment to delivering exceptional value to our clients and partners, and making a positive impact in the communities we serve. Each honor reflects the hard work and dedication of our talented team, and we are proud to showcase these achievements as milestones in our journey towards continued success and excellence. </p>

               
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 sm:mt-10">
        {awards.map((award, index) => (
          <div key={index} className="text-center">
            <Image unoptimized width={200} height={300} src={award.image} alt={award.name} className=" border h-80 w-full object-contain mx-auto" />
            <p className="mt-2 text-gray-600">{award.year}</p>
            <p className="text-lg font-semibold">{award.name}</p>
          </div>
        ))}
      </div>


            </div> */}

      <Footer />
    </>
  );
};

export default AboutUs;
