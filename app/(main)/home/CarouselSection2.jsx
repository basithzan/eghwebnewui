"use client";

import { apiUrl, blogImgUrl } from "@/lib/constants";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection2 = ({ images, hideFeatured = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);

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


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch images or posts asynchronously if not passed as props
        const response = await fetch(apiUrl + 'get-blogs');  // Your API endpoint
        const data = await response.json();

        // Find featured blog where is_first === 1
        let featured = data?.blogs?.find(blog => blog.is_first === 1 || blog.is_first === '1' || Number(blog.is_first) === 1);
        
        // If no blog with is_first === 1 is found, fallback to first blog
        if (!featured) {
          console.warn('Blog with is_first === 1 not found in the blogs list.');
          featured = data?.blogs?.[0];
        }
        
        setFeaturedBlog(featured);

        // Filter out the featured blog from the main blogs list
        const otherBlogs = data?.blogs?.filter(blog => {
          if (!featured) return true;
          // Compare by id (handle both string and number IDs)
          return blog.id !== featured.id && 
                 blog.id !== String(featured.id) && 
                 String(blog.id) !== String(featured.id);
        }) || [];
        
        // Put featured blog first
        const orderedBlogs = featured ? [featured, ...otherBlogs] : data?.blogs || [];
        
        setBlogs(orderedBlogs);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

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
      {blogs && blogs?.length > 0 &&
        <>

          {!isMobile && !hideFeatured && (
            <div className="mb-10 md:block hidden md:px-3">
              <div className="overflow-hidden mb-5" style={{ height: 'calc(100vh - 250px)' }}>
                <Image
                  unoptimized
                  width={100}
                  height={100}
                  src={blogImgUrl + blogs[0].image}
                  className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105"
                  alt="cards"
                />
              </div>


              <div className="flex justify-between items-center">
                {/* Wrap the title and description in a div with 75% width */}
                <div className="flex flex-col gap-1.5 w-[75%]">
                  <div className="text-[#282828] font-semibold text-sm uppercase">
                    {formatCreatedAt(blogs[0].created_at)}
                  </div>
                  <div className="text-[#282828] text-3xl font-semibold uppercase">
                    {blogs[0].title}
                  </div>
                  <div className="text-[#282828] text-sm font-light"  >
                    {stripHtml(blogs[0]?.content).substring(0, 150) + "..."}
                  </div>
                </div>

                {/* "READ MORE" button remains unaffected */}
                <a
                  href={'/blog/' +blogs[0].slug}
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
            {blogs.slice(isMobile || hideFeatured ? 0 : 1).map((blog, index) => (
              <div
                key={index}
                className="carousel-slide pt-0 pb-12 md:py-12  overflow-hidden"
              >
                <Image
                  width={200}
                  height={200}
                  unoptimized
                  src={blogImgUrl + blog.image}
                  className="h-48 w-full object-cover transition-all duration-500 ease-out hover:scale-105"
                  alt="cards"
                />
                <div className="flex flex-col justify-between items-start gap-1.5 md:gap-3 mt-6">
                  <div className="2xl:min-h-[110px] gap-1.5 md:gap-3">
                    <span className="text-sm text-[#282828] font-semibold">
                      {formatCreatedAt(blog.created_at)}
                    </span>
                    <h3 className="text-md md:text-2xl font-semibold uppercase line-clamp-2 hover:line-clamp-none md:leading-8  transition-all">
                      {blog.title}
                    </h3>
                    <p className="text-sm font-light text-[#282828]">
                      {stripHtml(blog?.content).substring(0, 100) + ".."}
                    </p>
                  </div>
                  <a
                    href={'/blog/' + blog.slug}
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


      }


    </>
  );
};

export default CarouselSection2;
