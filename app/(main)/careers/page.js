"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImageDesktop from "/public/assets/career/banner-desktop.jpg";
import BackgroundImageMobile from "/public/assets/career/banner-mobile.jpg";
import Img from "/public/assets/career/join-our-team.jpg";
import Image from "next/image";
import Link from "next/link";
import { apiUrl,imgUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {

  const [pageData, setPageData] = useState([]);
  const [banner, setBanner] = useState(null);
  const [seoData, setSeoData] = useState(null); // New state for SEO data


  useEffect(() => {
    // Check if the data exists in local storage
    const cachedData = localStorage.getItem('banners');
    if (cachedData) {
      // If it exists, use it
      setBanner(JSON.parse(cachedData));
      const bnr = JSON.parse(cachedData)?.find(banner => banner.page == 'Careers');

      setBanner(bnr);

    } else {
      // If not, fetch from API and cache it
      fetch(apiUrl + `get-banners`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('banners', JSON.stringify(data.banners));
          setBanner(data?.banners?.find(banner => banner.page == 'Careers'));


        });
    }

    fetch(apiUrl + 'get-seo-data?page=Careers')
    .then((response) => response.json())
    .then((data) => {
      setSeoData(data?.seo); // Store SEO data in the state

    });
  }, []);

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
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-3 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .text-2",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .button-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch images or posts asynchronously if not passed as props
        const response = await fetch(apiUrl + `get-careers`);  // Your API endpoint
        const data = await response.json();

        setPageData(data?.careers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  useEffect(() => {
    // Set the document title
    document.title = seoData?.metaTitle || 'Elite group holdings';

    // Set the meta description
    let descriptionMetaTag = document.querySelector("meta[name='description']");
    if (!descriptionMetaTag) {
      descriptionMetaTag = document.createElement('meta');
      descriptionMetaTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionMetaTag);
    }
    descriptionMetaTag.setAttribute('content', seoData?.metaDescription || 'Elite group holdings');

    // Set the meta keywords
    let keywordsMetaTag = document.querySelector("meta[name='keywords']");
    if (!keywordsMetaTag) {
      keywordsMetaTag = document.createElement('meta');
      keywordsMetaTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMetaTag);
    }
    keywordsMetaTag.setAttribute('content', seoData?.metaKeywords || 'elite, group');

    // Set Open Graph (og) title
    let ogTitleTag = document.querySelector("meta[property='og:title']");
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', seoData?.ogTitle || 'Elite group holdings');

    // Set Open Graph (og) description
    let ogDescriptionTag = document.querySelector("meta[property='og:description']");
    if (!ogDescriptionTag) {
      ogDescriptionTag = document.createElement('meta');
      ogDescriptionTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescriptionTag);
    }
    ogDescriptionTag.setAttribute('content', seoData?.ogDescription || 'Elite group holdings');

    // Set Open Graph (og) image
    let ogImageTag = document.querySelector("meta[property='og:image']");
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', imgUrl+ seoData?.ogImage || 'https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/egh-elitecars-fullwhite-1.png');

    // Set Open Graph (og) url
    let ogUrlTag = document.querySelector("meta[property='og:url']");
    if (!ogUrlTag) {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlTag);
    }
    ogUrlTag.setAttribute('content', seoData?.ogUrl || 'https://elitegroupholding.com/');
  }, [seoData]);
  return (
    <>
      <Navbar />

      {banner &&

      <div className="h-screen w-screen relative section-1">
        <div className="block md:hidden">
          <Image
            unoptimized
            width={200}
            height={300}
            src={imgUrl + banner?.image}
            alt="Mobile Background"
            className="object-cover object-center h-screen w-screen brightness-[0.3] sm:brightness-50"
          />
        </div>
        <div className="hidden md:block">
          <Image
            unoptimized
            width={200}
            height={300}
            src={imgUrl + banner?.mobile_banner}
            alt="Desktop Background"
            className="object-cover object-center h-screen w-screen brightness-[0.3] sm:brightness-50"
          />
        </div>

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
          <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">
          {banner?.title2}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
          {banner?.title1}
        </h1>
        </div>
        <div className="absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <Link href="/">Home</Link> / Careers
            </div>
          </div>
        </div>
      </div>
    }

      {pageData && pageData.length !== 0 &&

        <div>

          <div className="bg-[#F7F7F7]">
            <div className="px-[5%]">
              <div className="py-10 flex max-md:flex-col-reverse max-md:gap-3 md:flex-row-reverse md:items-center section-2">
                <div className="relative md:w-1/2 md:grow md:shrink-0 md:-me-[5.65%] overflow-hidden img-1">
                  <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 -top-10 xl:-left-[17%] lg:-left-[14%] md:-left-[12%] sm:-left-[14%]"></div>
                  <Image
                    unoptimized
                    src={Img}
                    alt="Join our team image"
                    className="w-full sm:h-[20rem] max-md:aspect-square md:h-[26rem] max-md:object-center object-cover"
                  />
                </div>
                <div className="xl:pe-10 md:shrink-1 md:w-1/2">
                  <div className="common-heading mb-8 text-1" style={{ color: '#fb511e' }}>{pageData[0]?.title}</div>
                  {/* <p className="text-md md:text-lg font-semibold uppercase line-clamp-2 hover:line-clamp-none md:leading-8 mb-4" >
                
                    Where Luxury Meets Opportunity
                  </p> */}
                  <p className="mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] text-2" dangerouslySetInnerHTML={{ __html: pageData[0].content }} >
                  
                   
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="px-[5%]">
            <div className="my-20 section-3">
              <div className="common-heading mb-10 text-1 uppercase" style={{ color: '#fb511e' }}>
              {pageData[1]?.title}
              </div>
              <div className="px-5">
                <ul className="list-disc mb-8 text-2">
                  <li className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2" dangerouslySetInnerHTML={{ __html: pageData[1].content }} >
                    
                  </li>
                </ul>
                <p className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2 text-center">
                  <strong className="text-[#282828]">
                    Become a Part of Elite Group Holding:
                  </strong>
                  <br /> Embark on a rewarding career journey with Elite Group
                  Holding. Join us and be part of a team that values innovation,
                  excellence, and collaboration. Together, we can achieve great
                  things.
                </p>
                <div className="flex justify-center mt-10">
                  <a
                  
                    href="https://www.linkedin.com/company/elite-groupholding/jobs/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-sm:text-xs uppercase md:mt-9 max-md:mt-5 max-md:mb-16 bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
                  >
                    {pageData[1]?.link_text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <Footer />
    </>
  );
};

export default Careers;
