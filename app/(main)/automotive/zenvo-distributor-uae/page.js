"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import CarouselSection2 from "../../home/CarouselSection2";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Logo from "/public/assets/Logo.png";
import Marquee from "react-fast-marquee";
import { useBrandPageAnimations } from "@/lib/hooks/useBrandPageAnimations";

const IMG = {
  hero: "/assets/home/zenvo.jpg",
  intro: "/assets/home/zenvo.jpg",
  roleBanner: "/assets/home/zenvo.jpg",
};

const ZenvoPage = () => {
  useBrandPageAnimations({ hasTestimonials: false, hasFaq: false });

  useEffect(() => {
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://elitegroupholding.com/automotive/zenvo-distributor-uae"
    );

    document.title = "Official Zenvo Distributor UAE | Elite Group Holding";

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Explore our limited-edition Zenvo hypercar in the UAE with Elite Group Holding, the official Zenvo distributor."
    );
  }, []);

  return (
    <>
      <Navbar />

      {/* 1. Hero – Zenvo hypercar, logos overlay */}
      <section className="brand-hero relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            unoptimized
            src={IMG.hero}
            alt="Zenvo hypercar UAE"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex items-center justify-center gap-6 md:gap-8 px-[5%] py-12">
          <span className="hero-brand-name text-white text-2xl md:text-4xl font-bold tracking-wider">
            ZENVO
          </span>
          <span className="hero-divider w-px h-10 md:h-14 bg-white" />
          <Image
            unoptimized
            alt="Elite Group Holding"
            src={Logo}
            className="hero-logo w-28 md:w-40 h-auto object-contain"
          />
        </div>
      </section>

      {/* 2. Intro – image left, text right, "At a Glance" below image */}
      <section className="brand-intro w-full bg-white py-8 md:py-16">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="intro-image relative aspect-[4/3] md:min-h-[400px] overflow-hidden flex-1">
              <Image
                unoptimized
                src={IMG.intro}
                alt="Zenvo car Dubai"
                fill
                className="object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className="intro-glance flex flex-col items-center mt-0">
              <div
                className="intro-line w-[2px] h-14 bg-[#fb511e] flex-shrink-0"
                aria-hidden
              />
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mt-1">
                At a Glance
              </h3>
            </div>
          </div>
          <div className="intro-text w-full md:w-1/2 flex flex-col justify-center pl-[5%] pr-[5%] md:pl-8 md:pr-8">
            <h1 className="sr-only">
              Official Zenvo Distributor in the UAE &ndash; Explore Zenvo
              HyperCar
            </h1>
            <h2 className="uppercase text-[#fb511e] mb-6">
              <span className="block text-lg md:text-xl font-semibold mb-1">
                Proudly represented in the UAE by
              </span>
              <span className="block text-[2rem] lg:text-[2.5rem] font-bold">
                Elite Group Holding
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Zenvo Automotive, the ultra-exclusive Danish hypercar
              manufacturer, is proudly represented in the UAE by Elite Group
              Holding. As the official Zenvo distributor, we bring one of the
              world&apos;s most coveted limited-edition hypercars to discerning
              collectors and automotive enthusiasts across Dubai and the UAE.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Each Zenvo is a masterpiece of engineering — handcrafted in
              Denmark with meticulous attention to detail, cutting-edge
              aerodynamics, and extraordinary performance. Through this exclusive
              partnership, Elite Group Holding offers an unparalleled ownership
              experience, from bespoke consultations to private viewings and
              tailored after-sales care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stats – LIMITED-EDITION, EXCLUSIVE DISTRIBUTOR */}
      <section className="brand-stats w-full bg-white py-12 md:py-16 px-[5%]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {[
            {
              value: "LIMITED-EDITION",
              label: "Hypercar Brand",
              small: true,
            },
            {
              value: "EXCLUSIVE DISTRIBUTOR",
              label: "Of Zenvo in the UAE",
              small: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`stat-item text-center flex flex-col items-center py-6 md:py-4 px-4 md:px-6
                ${i === 0 ? "border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200" : ""}
              `}
            >
              <div className="min-h-[4rem] md:min-h-[7rem] flex items-center justify-center mb-2">
                <div className="text-[#fb511e] font-bold leading-tight text-center text-[1.5rem] md:text-[2.5rem]">
                  {item.value}
                </div>
              </div>
              <p className="text-[#1a1a1a] text-xs md:text-base leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-10 border-t border-black hidden md:block" />
      </section>

      {/* 4. Role banner – Elite Group's Role in Zenvo's UAE Success */}
      <section className="brand-role-banner relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            unoptimized
            src={IMG.roleBanner}
            alt="Zenvo hypercar showroom UAE"
            fill
            className="object-cover object-right"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 px-[5%] py-16 max-w-2xl">
          <h2 className="role-heading text-2xl md:text-4xl font-bold mb-6">
            <span className="text-[#fb511e]">
              ELITE GROUP&apos;S ROLE IN ZENVO&apos;S{" "}
            </span>
            <span className="text-white">UAE SUCCESS</span>
          </h2>
          <p className="role-body text-white text-base md:text-lg leading-relaxed">
            As the exclusive Zenvo distributor in the UAE, Elite Group Holding
            delivers a hypercar ownership experience like no other. From bespoke
            consultations and private viewings to exclusive launch events and
            tailored concierge service, every interaction is crafted to match the
            extraordinary nature of the Zenvo brand. Our dedicated team provides
            end-to-end support — from initial enquiry to delivery and beyond —
            ensuring that each client receives the personalized attention
            befitting one of the world&apos;s most exclusive automotive marques.
          </p>
        </div>
      </section>

      {/* 5. CTA – To Know More + Visit Our Website */}
      <section className="brand-cta w-full bg-white py-16 md:py-24 px-[5%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="cta-heading text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] mb-4 md:mb-6">
            To Know More About Zenvo in the UAE?
          </h2>
          <Link
            href="https://zenvouae.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-2 border-2 border-gray-300 hover:border-[#fb511e] hover:bg-[#fb511e] hover:text-white text-black transition-all rounded-xl px-8 py-4 font-semibold uppercase"
          >
            Visit Our Website
            <ArrowLongRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 6. Blogs */}
      <div className="brand-blogs px-[5%] mx-auto md:mt-24 section-6">
        <div className="flex flex-nowrap justify-between items-center gap-4 md:pe-3">
          <h2 className="blogs-heading text-[2rem] lg:text-[2.5rem] uppercase font-semibold text-[#fb511e] pt-8 pb-0 shrink-0 whitespace-nowrap">
            Blogs
          </h2>
          <Link href="/media-centre" className="blogs-viewall shrink-0">
            <button className="block max-md:text-xs uppercase bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-[8px] sm:rounded-xl px-5 md:px-10 py-1 md:py-3 button-1 whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>
        <CarouselSection2 hideFeatured />
      </div>

      {/* 7. Explore More Brands – marquee logos */}
      <section className="brand-explore w-full bg-white py-12 md:py-16 px-[5%]">
        <h2 className="explore-heading text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase mb-8 md:mb-10">
          Explore More Brands
        </h2>
        <div className="explore-marquee w-full">
        <Marquee
          loop={0}
          speed={40}
          direction="left"
          pauseOnHover
          gradient={false}
        >
          {[
            { src: "/assets/brands/TEC.png", url: "https://theelitecars.com/", alt: "The Elite Cars" },
            { src: "/assets/brands/Jetour.png", url: "https://jetouruae.com/", alt: "Jetour" },
            { src: "/assets/brands/soueast-black.png", url: "https://soueastuae.com/", alt: "SOUEAST" },
            { src: "/assets/brands/zrt-contracting.png", url: "https://www.zrtcontracting.com/", alt: "ZRT Contracting" },
            { src: "/assets/brands/art-logo.png", url: "https://artelitecarrental.com/", alt: "ART Elite Car Rental" },
          ].map((brand) => (
            <a
              key={brand.alt}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer h-[60px] md:h-[70px] w-[120px] md:w-[160px] flex-shrink-0 mx-6 md:mx-10"
            >
              <Image
                unoptimized
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={70}
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          ))}
        </Marquee>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ZenvoPage;
