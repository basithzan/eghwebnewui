"use client";

import Image from "next/image";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import BackgroundImage from "/public/assets/03.jpg";
import { notFound } from 'next/navigation';
import { apiUrl, blogImgUrl } from "@/lib/constants";
import { useState,useEffect } from "react";

const page = ({ params }) => {
  const { slug } = params;
  const updatedSlug = slug.replace(/-/g, ' ');

  const [blog, setBlog] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch images or posts asynchronously if not passed as props
        const response = await fetch( apiUrl +`get-single-blog/${slug}`);  // Your API endpoint
        const data = await response.json();
     
        setBlog(data?.blog);

       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <Image
          unoptimized
          width={100}
          height={100}
          src={blogImgUrl + blog?.image}
          alt="Background"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
          {updatedSlug}
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            {/* New Content */}
            <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              {blog?.title}
            </h3>
            <p className="mb-2 md:mb-3 common-description" dangerouslySetInnerHTML={{ __html: blog.content }} >
            </p>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;