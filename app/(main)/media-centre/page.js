"use client";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useState } from "react";

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
import { apiUrl, blogImgUrl,imgUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const MediaCenter = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [seoData, setSeoData] = useState(null); // New state for SEO data

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


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch images or posts asynchronously if not passed as props
        const response = await fetch(apiUrl + 'get-blogs');  // Your API endpoint
        const data = await response.json();

        setBlogs(data?.blogs);

        // Find featured blog or use specific slug as fallback
        let featured = data?.blogs?.find(blog => blog.featured === true || blog.featured === 1) || 
                      data?.blogs?.find(blog => blog.slug === 'elite-group-holding-launches-as-a-leading-diversified-uae-based-entity');
        
        // If the specific blog is not found in the main blogs array, fetch it separately
        if (!featured) {
          try {
            const specificBlogResponse = await fetch(apiUrl + 'get-single-blog/elite-group-holding-launches-as-a-leading-diversified-uae-based-entity');
            const specificBlogData = await specificBlogResponse.json();
            
            if (specificBlogData?.blog) {
              featured = specificBlogData.blog;
              featured.featured = true; // Mark it as featured
            } else {
              // Fallback to other blogs if the specific one doesn't exist
              featured = data?.blogs?.find(blog => blog.slug === 'elite-group-holding-and-soueast-motor') || data?.blogs?.[0];
            }
          } catch (error) {
            console.error('Error fetching specific blog:', error);
            // Fallback to other blogs if API call fails
            featured = data?.blogs?.find(blog => blog.slug === 'elite-group-holding-and-soueast-motor') || data?.blogs?.[0];
          }
        }
        
        setFeaturedBlog(featured);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    fetch(apiUrl + 'get-seo-data?page=Media center')
    .then((response) => response.json())
    .then((data) => {
      setSeoData(data?.seo); // Store SEO data in the state

    });
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
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);

    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(date);

    // Add static location details (Dubai, UAE)
    return `${formattedDate}, Dubai, UAE`;
  };

  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };


  return (

          <>
      <Navbar />
      {featuredBlog && 
      
      <div className="h-screen w-screen relative section-1">
        <Image
          unoptimized
          width={200}
          height={300}
          src={blogImgUrl + featuredBlog?.image}
          alt="Featured Blog Background"
          className="object-cover object-center h-screen w-screen brightness-50"
        />

        <div className="absolute bottom-24 left-[3%] flex flex-col gap-1.5">
          <div className="text-white font-bold text-sm text-1">
            <span className="bg-[#fb511e] px-3 py-1 rounded-full text-xs uppercase tracking-wider mr-3">
              Featured
            </span>
            {formatCreatedAt(featuredBlog?.created_at)}
          </div>
          <div className="text-[#FFFFFF] text-4xl font-bold text-2 max-w-4xl">
            {featuredBlog?.title}
          </div>
          <div className="text-[#FFFFFF] text-lg font-light text-3 max-w-3xl mt-2">
            {stripHtml(featuredBlog?.content).substring(0, 150)}...
          </div>
          <Link
            href={'/blog/' + featuredBlog?.slug}
            className="text-white text-sm font-light underline text-3 inline-flex items-center gap-2 mt-4 hover:text-[#fb511e] transition-colors"
          >
            Read More
            <ArrowLongRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className=" absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / Media Center
            </div>
          </div>
        </div>
      </div>
      }

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

          {blogs?.filter(blog => blog.id !== featuredBlog?.id).map((blog, index) => (

            <div key={blog?.id} className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
              <Image
                unoptimized
                width={200}
                height={200}
                src={blogImgUrl + blog.image}
                alt={blog.title}
                className="w-[550px] h-[300px] object-cover"
              />
              <div className="lg:w-[65%]">
                <div className="text-[#282828] font-semibold text-sm  mb-[5px] sm:mb-4">
                {formatCreatedAt(blog.created_at)}
                </div>
                <div className="font-semibold text-2xl md:text-4xl  mb-[5px] sm:mb-4 uppercase line-clamp-2">
                {blog.title}
                </div>
                <div className=" mb-4 sm:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2">
                {stripHtml(blog?.content).substring(0, 100) + ".."}
                   </div>
                <Link  href={'/blog/' +blog.slug}>
                  <button className="block max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-lg sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                    Read More
                    <ArrowLongRightIcon className=" ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </Link>
              </div>
            </div>

          ))}


            {/* <div className="flex sm:items-center max-lg:flex-col gap-5 sm:gap-10">
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
                  The Chinese' up-and-coming SUV brand Jetour Auto showcased multiple models including the DASHING i-DM, T2 (Named Traveler in the Chinese market), T3
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
            </div> */}
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