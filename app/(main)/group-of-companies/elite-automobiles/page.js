"use client"
import React, { useEffect ,useState} from "react";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import TheEliteCarsImage from '/public/assets/61eb2205573fced65146611241f3b4c4.jpeg';
import { apiUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const GroupOfCompanies = ({ BackgroundImage, title, descriptions = [] }) => {
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        gsap.timeline({ duration: 0.5, ease: 'power3.out' })
            .fromTo('.section-1 .text-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.section-1 .text-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
    });

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Example: Fetch images or posts asynchronously if not passed as props
            const response = await fetch(apiUrl + `get-automotive`);  // Your API endpoint
            const data = await response.json();
    
            setPageData(data?.automotive);
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
                <Image unoptimized src={TheEliteCarsImage} alt="TheEliteCarsImage" className="object-cover object-center h-full w-screen brightness-50" />

                {/* <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2 opacity-0">{title}</div>
                </div> */}
            </div>

            <div className="px-[5%] pb-10">
                <div className="md:py-5 py-2 flex items-center md:justify-end justify-center">
                    <div className="text-[#282828] md:text-end text-center text-sm">
                        <a href="/">Home</a> / <a href="/group-of-companies">Group of Companies</a> / Automotive
                    </div>
                </div>

                <div className="section-spaced text-center max-w-2xl mx-auto">
                    <div className="common-heading mb-10 md:mt-6 mt-6 uppercase">Automotive</div>
                    {[
                "Our automotive division is a key player in the UAE's robust automotive market, offering a comprehensive range of services from vehicle sales and leasing to maintenance and after-sales support. We partner with leading global brands to bring the latest and most reliable vehicles to our customers.  ",
              ].map((description, index) => (
                        <p key={index} className="mb-2 md:mb-3 common-description">
                            {description}
                        </p>
                    ))}
                    <a href="/" className={`w-fit block mx-auto bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1 font-light mt-16`}>
                        Visit Website
                        <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default GroupOfCompanies;
