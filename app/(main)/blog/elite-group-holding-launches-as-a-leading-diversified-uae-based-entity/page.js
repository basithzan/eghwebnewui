"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { apiUrl, blogImgUrl } from "@/lib/constants";

const Page = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(apiUrl + 'get-single-blog/elite-group-holding-launches-as-a-leading-diversified-uae-based-entity');
        const data = await response.json();
        
        if (data?.blog) {
          setBlog(data.blog);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(date);
    return `${formattedDate}, Dubai, UAE`;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Blog not found</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <Image
          unoptimized
          width={200}
          height={300}
          src={blog.image ? blogImgUrl + blog.image : "/assets/about-us/banner-desktop.jpg"}
          alt="Background"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
            {blog.title}
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          <div className="mt-10">
            <div className="text-[#282828] font-semibold text-sm mb-4">
              {formatCreatedAt(blog.created_at)}
            </div>
            <h1 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              {blog.title}
            </h1>
            <div 
              className="common-description prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page; 