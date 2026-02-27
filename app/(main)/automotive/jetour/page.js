"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import FAQ from "../../home/FAQ";
import CarouselSection2 from "../../home/CarouselSection2";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Logo from "/public/assets/Logo.png";

// Use existing assets as fallbacks; replace with /New_page/Jetour/*.jpg when you add them
const IMG = {
  hero: "/assets/jetour-bg.webp",
  intro: "/assets/Homepage-partners-jetour.jpg",
  testimonialCar: "/assets/Homepage-partners-jetour.jpg",
  roleBanner: "/assets/jetour-bg.webp",
};

const JetourPage = () => {
  useEffect(() => {
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://elitegroupholding.com/automotive/jetour");
  }, []);

  return (
    <>
      <Navbar />

      {/* 1. Hero – Jetour SUV in river, logos overlay */}
      <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            unoptimized
            src={IMG.hero}
            alt="Jetour SUV"
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
          <span className="text-white text-2xl md:text-4xl font-bold tracking-wider">JETOUR</span>
          <span className="w-px h-10 md:h-14 bg-white" />
          <Image
            unoptimized
            alt="Elite Group Holding"
            src={Logo}
            className="w-28 md:w-40 h-auto object-contain"
          />
        </div>
      </section>

      {/* 2. Intro – image left, text right, "At a Glance" below image */}
      <section className="w-full bg-white py-8 md:py-16">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative aspect-[4/3] md:min-h-[400px] overflow-hidden flex-1">
              <Image
                unoptimized
                src={IMG.intro}
                alt="Jetour SUV"
                fill
                className="object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col items-center mt-0">
              <div className="w-[2px] h-14 bg-[#fb511e] flex-shrink-0" aria-hidden />
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mt-1">At a Glance</h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-[5%] pr-[5%] md:pl-8 md:pr-8">
            <h2 className="uppercase text-[#fb511e] mb-6">
              <span className="block text-lg md:text-xl font-semibold mb-1">Proudly represented in the UAE by</span>
              <span className="block text-[2rem] lg:text-[2.5rem] font-bold">Elite Group Holding</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Jetour, a forward-thinking automotive brand known for bold design and intelligent technology, is proudly represented in the UAE by Elite Group Holding. As the official Jetour car distributor, we are committed to expanding Jetour&apos;s presence across Dubai and the UAE, setting a new standard in affordable luxury SUVs.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Through this exclusive partnership, Elite Group Holding plays a vital role in shaping the UAE&apos;s mobility sector with a growing range of Jetour SUVs that combine performance, technology, and safety.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stats – #1, 10K+, 5+, EXCLUSIVE DISTRIBUTOR */}
      <section className="w-full bg-white py-12 md:py-16 px-[5%]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "#1", label: "Fastest Growing Chinese Brand in the Region" },
            { value: "10K+", label: "Fastest Growing Chinese Brand in the Region" },
            { value: "5+", label: "Fastest Growing Chinese Brand in the Region" },
            { value: "EXCLUSIVE DISTRIBUTOR", label: "Fastest Growing Chinese Brand in the Region" },
          ].map((item, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="min-h-[4rem] md:min-h-[5rem] flex items-center justify-center mb-2">
                <div className="text-[#fb511e] text-[1.75rem] md:text-[2.25rem] font-bold leading-tight text-center">
                  {item.value}
                </div>
              </div>
              <p className="text-[#1a1a1a] text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-10 border-t border-black" />
      </section>

      {/* 4. Trusted By Thousands – testimonial + 3 images */}
      <section className="w-full bg-white py-12 md:py-20 px-[5%]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">Trusted By Thousands</h2>
        {/* Google Reviews logo – visible only on small screens / mobile, right after heading */}
        <div className="lg:hidden mb-6">
          <svg viewBox="0 0 120 44" className="w-32 md:w-40 h-auto">
            <text x="0" y="22" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
              <tspan fill="#4285F4">G</tspan>
              <tspan fill="#EA4335">o</tspan>
              <tspan fill="#FBBC05">o</tspan>
              <tspan fill="#4285F4">g</tspan>
              <tspan fill="#34A853">l</tspan>
              <tspan fill="#EA4335">e</tspan>
            </text>
            <text x="0" y="40" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#666">Reviews</text>
            <text x="52" y="40" fontSize="12" fill="#FBBC05">★★★★★</text>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a]">Suraj Nair</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-[#FBBC05]">★★★★★</span>
                  <span>2 months ago</span>
                </div>
              </div>
            </div>
            <p className="text-[#282828] text-base leading-relaxed mb-4">
              At Elite Group Holding, we are committed to enhancing the quality of life within the communities we serve, continuously seeking avenues for fostering growth and making a positive impact on the world and our community.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 w-full lg:max-w-md">
            <div className="hidden lg:block">
            <svg viewBox="0 0 120 44" className="w-32 md:w-40 h-auto flex-shrink-0">
              <text x="0" y="22" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
                <tspan fill="#4285F4">G</tspan>
                <tspan fill="#EA4335">o</tspan>
                <tspan fill="#FBBC05">o</tspan>
                <tspan fill="#4285F4">g</tspan>
                <tspan fill="#34A853">l</tspan>
                <tspan fill="#EA4335">e</tspan>
              </text>
              <text x="0" y="40" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#666">Reviews</text>
              <text x="52" y="40" fontSize="12" fill="#FBBC05">★★★★★</text>
            </svg>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-[4/3] rounded overflow-hidden border border-gray-200">
                <Image
                  unoptimized
                  src={IMG.testimonialCar}
                  alt="Jetour SUV"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Role banner – Elite Group's Role in Jetour's UAE Success */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            unoptimized
            src={IMG.roleBanner}
            alt="Jetour T2 UAE"
            fill
            className="object-cover object-right"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 px-[5%] py-16 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-[#fb511e]">ELITE GROUP&apos;S ROLE IN JETOUR&apos;S </span>
            <span className="text-white">UAE SUCCESS</span>
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Since 2019, Elite Group Holding has been the exclusive distributor of Jetour in the UAE, leading the brand&apos;s expansion in affordable luxury SUVs. Through strategic initiatives, including new model launches, the Jetour Owners Club, and dedicated maintenance services, we have driven Jetour UAE&apos;s rapid growth, making it one of the fastest-growing automotive brands in the region.
          </p>
        </div>
      </section>

      {/* 6. CTA – To Know More + Visit Our Website */}
      <section className="w-full bg-white py-16 md:py-24 px-[5%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] mb-4 md:mb-6">
            To Know More About Jetour in the UAE?
          </h2>
          <Link
            href="https://jetour.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-[#fb511e] hover:bg-[#fb511e] hover:text-white text-black transition-all rounded-xl px-8 py-4 font-semibold uppercase"
          >
            Visit Our Website
            <ArrowLongRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 7. FAQ – Jetour / Elite Group Holding */}
      <FAQ />

      {/* 8. Blogs – card grid only (no featured hero), like reference */}
      <div className="px-[5%] mx-auto md:mt-24 section-6">
        <div className="flex flex-nowrap justify-between items-center gap-4 md:pe-3">
          <h2 className="md:text-md text-[2rem] lg:text-[2.5rem] uppercase font-semibold text-[#fb511e] pt-8 pb-0 md:px-3 shrink-0 whitespace-nowrap">
            Blogs
          </h2>
          <Link href="/media-centre" className="shrink-0">
            <button
              className="block max-md:text-xs uppercase bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-[8px] sm:rounded-xl px-5 md:px-10 py-1 md:py-3 button-1 whitespace-nowrap"
            >
              View All
            </button>
          </Link>
        </div>
        <CarouselSection2 hideFeatured />
      </div>

      {/* 9. Explore More Brands – logo row with separators */}
      <section className="w-full bg-white py-12 md:py-16 px-[5%]">
        <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase mb-8 md:mb-10">
          Explore More Brands
        </h2>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {[
            { src: "/assets/brands/TEC.png", url: "https://theelitecars.com/", alt: "The Elite Cars" },
            { src: "/assets/brands/Zenvo.png", url: "https://zenvouae.com/", alt: "Zenvo" },
            { src: "/assets/brands/soueast-black.png", url: "https://soueastuae.com/", alt: "SOUEAST" },
            { src: "/assets/brands/zrt-contracting.png", url: "https://www.zrtcontracting.com/", alt: "ZRT Contracting" },
            { src: "/assets/brands/art-logo.png", url: "https://artelitecarrental.com/", alt: "ART Elite Car Rental" },
          ].map((brand, index) => (
            <React.Fragment key={brand.alt}>
              {index > 0 && (
                <span className="hidden md:block w-px h-10 bg-gray-300 flex-shrink-0" aria-hidden />
              )}
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center cursor-pointer h-[48px] w-[80px] md:w-[90px] flex-shrink-0"
              >
                <Image
                  unoptimized
                  src={brand.src}
                  alt={brand.alt}
                  width={90}
                  height={48}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            </React.Fragment>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JetourPage;
