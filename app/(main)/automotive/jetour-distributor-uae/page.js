"use client";

import React, { useEffect, useState } from "react";
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
  hero: "/assets/jetour-bg.webp",
  intro: "/assets/Homepage-partners-jetour.jpg",
  testimonialCar: "/assets/Homepage-partners-jetour.jpg",
  roleBanner: "/assets/jetour-bg.webp",
};

/* ─── Jetour-specific FAQs ─── */
const JETOUR_FAQS = [
  {
    question: "Is Elite Group Holding the official Jetour distributor in the UAE?",
    answer:
      "Yes. Elite Group Holding has been the exclusive official distributor of Jetour in the UAE since 2019. We oversee all sales, aftersales, and brand operations across Dubai and the Emirates.",
  },
  {
    question: "Where are the Jetour showrooms and service centres located?",
    answer:
      "Jetour has showrooms and service centres across the UAE, including locations in Dubai, Abu Dhabi, Ajman, and Al Ain — ensuring convenient access for customers nationwide.",
  },
  {
    question: "What Jetour models are available in the UAE?",
    answer:
      "The current UAE lineup includes the Jetour G700, T1, T2, T2 i-DM (hybrid), Dashing, X50, X70 FL, and X70 Plus. Each model offers a unique blend of design, technology, and performance to suit different lifestyles.",
  },
  {
    question: "What after-sales services does Jetour UAE provide?",
    answer:
      "Jetour UAE offers comprehensive after-sales support including scheduled maintenance, genuine spare parts, roadside assistance, and dedicated service centres staffed by factory-trained technicians to ensure your vehicle is always in top condition.",
  },
  {
    question: "What warranty does Jetour offer in the UAE?",
    answer:
      "Jetour vehicles in the UAE come with an industry-leading warranty of up to 10 years or 1,000,000 km — one of the most generous warranty packages in the automotive market, giving owners complete peace of mind.",
  },
  {
    question: "Does Jetour UAE offer financing options?",
    answer:
      "Yes. Jetour UAE partners with leading banks and financial institutions to provide competitive financing solutions, including flexible EMI plans, low down payment options, and tailored packages to suit a range of budgets.",
  },
];

const ChevronIcon = ({ isOpen }) => (
  <div
    className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#fb911e] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4,7 9,12 14,7" />
    </svg>
  </div>
);

const JetourPage = () => {
  useBrandPageAnimations({ hasTestimonials: true, hasFaq: true });
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = JETOUR_FAQS.filter((_, i) => i % 2 === 0);
  const rightFaqs = JETOUR_FAQS.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      "https://elitegroupholding.com/automotive/jetour-distributor-uae"
    );

    document.title = "Jetour Distributor UAE | Elite Group Holding";

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Elite Group Holding is the official Jetour Distributor in the UAE. Discover how we represent Jetour's innovative SUV range across Dubai and the Emirates."
    );
  }, []);

  return (
    <>
      <Navbar />

      {/* 1. Hero – Jetour SUV, logos overlay */}
      <section className="brand-hero relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            unoptimized
            src={IMG.hero}
            alt="Jetour SUV UAE"
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
            JETOUR
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
                alt="Jetour car Dubai"
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
              Official Jetour Distributor in The UAE &ndash; Explore Jetour SUVs
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
              Jetour, a forward-thinking automotive brand known for bold design
              and intelligent technology, is proudly represented in the UAE by
              Elite Group Holding. As the official Jetour car distributor since
              2019, we are committed to expanding Jetour&apos;s presence across
              Dubai and the UAE, setting a new standard in affordable luxury
              SUVs.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Through this exclusive partnership, Elite Group Holding plays a
              vital role in shaping the UAE&apos;s mobility sector with a growing
              range of Jetour SUVs that combine performance, technology, and
              safety.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stats – #1, 10K+, 5+, EXCLUSIVE DISTRIBUTOR */}
      <section className="brand-stats w-full bg-white py-12 md:py-16 px-[5%]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "#1", label: "Fastest Growing Chinese Brand" },
            { value: "10K+", label: "Customer Reviews" },
            { value: "5+", label: "Showrooms & Service Centres" },
            {
              value: "EXCLUSIVE DISTRIBUTOR",
              label: "Since 2019",
              small: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`stat-item text-center flex flex-col items-center py-6 md:py-4 px-4 md:px-6
                ${i % 2 === 0 ? "border-r border-gray-200" : ""}
                ${i < 2 ? "border-b border-gray-200 md:border-b-0" : ""}
                ${i < 3 ? "md:border-r md:border-gray-200" : "md:border-r-0"}
              `}
            >
              <div className="min-h-[4rem] md:min-h-[7rem] flex items-center justify-center mb-2">
                <div
                  className={`text-[#fb511e] font-bold leading-tight text-center ${item.small ? "text-[1.25rem] md:text-[2.25rem]" : "text-[2.75rem] md:text-[4.5rem]"}`}
                >
                  {item.value}
                </div>
              </div>
              <p className="text-[#1a1a1a] text-xs md:text-base leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-10 border-t border-black hidden md:block" />
      </section>

      {/* 4. Trusted By Thousands – testimonial + 3 images */}
      <section className="brand-testimonials w-full bg-white py-12 md:py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="testimonials-heading text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
            Trusted By Thousands
          </h2>
          <div className="lg:hidden mb-6">
            <svg viewBox="0 0 120 44" className="w-32 md:w-40 h-auto">
              <text
                x="0"
                y="22"
                fontSize="18"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                <tspan fill="#4285F4">G</tspan>
                <tspan fill="#EA4335">o</tspan>
                <tspan fill="#FBBC05">o</tspan>
                <tspan fill="#4285F4">g</tspan>
                <tspan fill="#34A853">l</tspan>
                <tspan fill="#EA4335">e</tspan>
              </text>
              <text
                x="0"
                y="40"
                fontSize="12"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#666"
              >
                Reviews
              </text>
              <text x="52" y="40" fontSize="12" fill="#FBBC05">
                ★★★★★
              </text>
            </svg>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="testimonials-card flex-1">
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
                At Elite Group Holding, we are committed to enhancing the quality
                of life within the communities we serve, continuously seeking
                avenues for fostering growth and making a positive impact on the
                world and our community.
              </p>
            </div>
            <div className="flex flex-col items-end gap-4 w-full lg:max-w-md">
              <div className="hidden lg:block">
                <svg
                  viewBox="0 0 120 44"
                  className="w-32 md:w-40 h-auto flex-shrink-0"
                >
                  <text
                    x="0"
                    y="22"
                    fontSize="18"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    <tspan fill="#4285F4">G</tspan>
                    <tspan fill="#EA4335">o</tspan>
                    <tspan fill="#FBBC05">o</tspan>
                    <tspan fill="#4285F4">g</tspan>
                    <tspan fill="#34A853">l</tspan>
                    <tspan fill="#EA4335">e</tspan>
                  </text>
                  <text
                    x="0"
                    y="40"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                    fill="#666"
                  >
                    Reviews
                  </text>
                  <text x="52" y="40" fontSize="12" fill="#FBBC05">
                    ★★★★★
                  </text>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="testimonials-img relative aspect-[4/3] rounded overflow-hidden border border-gray-200"
                  >
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
        </div>
      </section>

      {/* 5. Role banner – Elite Group's Role in Jetour's UAE Success */}
      <section className="brand-role-banner relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center">
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
          <h2 className="role-heading text-2xl md:text-4xl font-bold mb-6">
            <span className="text-[#fb511e]">
              ELITE GROUP&apos;S ROLE IN JETOUR&apos;S{" "}
            </span>
            <span className="text-white">UAE SUCCESS</span>
          </h2>
          <p className="role-body text-white text-base md:text-lg leading-relaxed">
            Since 2019, Elite Group Holding has been the exclusive distributor of
            Jetour in the UAE, leading the brand&apos;s expansion in affordable
            luxury SUVs. Through strategic initiatives, including new model
            launches, the Jetour Owners Club, and dedicated maintenance services,
            we have driven Jetour UAE&apos;s rapid growth, making it one of the
            fastest-growing automotive brands in the region.
          </p>
        </div>
      </section>

      {/* 6. CTA – To Know More + Visit Our Website */}
      <section className="brand-cta w-full bg-white py-16 md:py-24 px-[5%]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="cta-heading text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] mb-4 md:mb-6">
            To Know More About Jetour in the UAE?
          </h2>
          <Link
            href="https://jetouruae.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-2 border-2 border-gray-300 hover:border-[#fb511e] hover:bg-[#fb511e] hover:text-white text-black transition-all rounded-xl px-8 py-4 font-semibold uppercase"
          >
            Visit Our Website
            <ArrowLongRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 7. FAQ – Jetour-specific */}
      <section className="brand-faq w-full bg-[#f0f0f0] px-[5%] py-12 md:py-16">
        <h2 className="faq-heading text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase mb-8 md:mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left column */}
          <div className="faq-col flex flex-col gap-4 md:gap-6">
            {leftFaqs.map((faq, i) => {
              const realIndex = i * 2;
              const isOpen = openIndex === realIndex;
              return (
                <div key={realIndex}>
                  <button
                    type="button"
                    onClick={() => toggle(realIndex)}
                    className="w-full flex items-center justify-between gap-4 border-2 border-[#fb911e] rounded-xl px-6 py-3 md:py-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm md:text-base text-[#282828] text-left">
                      {faq.question}
                    </span>
                    <ChevronIcon isOpen={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pt-3 pb-1 text-sm text-[#555] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Right column */}
          <div className="faq-col flex flex-col gap-4 md:gap-6">
            {rightFaqs.map((faq, i) => {
              const realIndex = i * 2 + 1;
              const isOpen = openIndex === realIndex;
              return (
                <div key={realIndex}>
                  <button
                    type="button"
                    onClick={() => toggle(realIndex)}
                    className="w-full flex items-center justify-between gap-4 border-2 border-[#fb911e] rounded-xl px-6 py-3 md:py-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm md:text-base text-[#282828] text-left">
                      {faq.question}
                    </span>
                    <ChevronIcon isOpen={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pt-3 pb-1 text-sm text-[#555] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Blogs */}
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

      {/* 9. Explore More Brands – marquee logos */}
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
            {
              src: "/assets/brands/TEC.png",
              url: "https://theelitecars.com/",
              alt: "The Elite Cars",
            },
            {
              src: "/assets/brands/Zenvo.png",
              url: "https://zenvouae.com/",
              alt: "Zenvo",
            },
            {
              src: "/assets/brands/soueast-black.png",
              url: "https://soueastuae.com/",
              alt: "SOUEAST",
            },
            {
              src: "/assets/brands/zrt-contracting.png",
              url: "https://www.zrtcontracting.com/",
              alt: "ZRT Contracting",
            },
            {
              src: "/assets/brands/art-logo.png",
              url: "https://artelitecarrental.com/",
              alt: "ART Elite Car Rental",
            },
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

export default JetourPage;
