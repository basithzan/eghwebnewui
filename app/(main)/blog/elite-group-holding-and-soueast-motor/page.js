"use client";

import Image from "next/image";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import BackgroundImage from "/public/assets/03.jpg";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <Image
          unoptimized
          src={BackgroundImage}
          alt="Background"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
          Elite Group Holding and SOUEAST Motor Form Strategic Partnership..
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            {/* New Content */}
            <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              Elite Group Holding and SOUEAST Motor Form Strategic Partnership to Accelerate Growth in UAEs Booming Market Segment
            </h3>
            <p className="mb-2 md:mb-3 common-description">
              Elite Group Holding Ltd. and SOUEAST Motor Corporation Ltd. marked a significant milestone in their collaboration by signing a strategic partnership agreement. Formalized on August 7 at the prestigious Bvlgari Yacht Club, this partnership celebrates a remarkable achievement for both the group and the automotive brand.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              SOUEASTs entry into the UAE, in partnership with Elite Group Holding, is poised to set a new standard for premium mobility solutions. With its “EASE YOUR LIFE” proposition, SOUEAST prioritizes stylish design, comfortable driving, and advanced technology. The vehicles, equipped with the latest powertrain and new energy technologies, offer high power, an intelligent chassis, and a versatile interior cockpit designed for superior comfort and adaptability.
            </p>


            <p className="mb-2 md:mb-3 common-description">
              With the expertise of a top-tier R&D team and a world-class supply chain, SOUEAST Motor is set to introduce 13 cutting-edge models over the next five years. These offerings will include ICE, PHEV, and BEV options, covering a range of SUVs and sedans aimed at diverse global markets from B to D segments. 
            </p>
            <p className="mb-2 md:mb-3 common-description">
              “This partnership with SOUEAST aligns seamlessly with our mission to deliver exceptional automotive solutions to our discerning clientele that prioritise convenience and comfort. We take pride in being one step ahead, launching and bringing to market brands that resonate with the evolving trends and preferences,” said Mr. Tamer Abu Khalaf, Partner, Elite Group Holding. 
            </p>

            <p className="mb-2 md:mb-3 common-description">
              “We are excited to join forces with Elite Group Holding to introduce SOUEAST to the rapidly growing UAE automotive market. This collaboration is a strategic priority for us, reflecting our commitment to serving this robust region with advanced automotive technology. By working together, we aim to deliver innovative and user-centric vehicles that resonate with the needs of families and individuals in the UAE.” commented Mr. Ke Chuandeng, Vice President of SOUEAST Motor. 
            </p>

            <p className="mb-2 md:mb-3 common-description">
             Founded in 1995, SOUEAST Motor is renowned for its diverse portfolio of SUVs and sedans, designed to meet the needs of modern urban lifestyles. Their technology enhances the customer experience by offering user-centric products and services that elevate both the journey and daily life.
            </p>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;