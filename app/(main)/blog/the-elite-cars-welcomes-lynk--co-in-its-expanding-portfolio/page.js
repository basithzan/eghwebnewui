"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BackgroundImage from "/public/assets/lynk.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const page = ({ title, descriptions = [] }) => {
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
            the elite cars welcomes lynk-co in its expanding portfolio
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            <div>
              <h1 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
                The Elite Cars Welcomes Lynk & Co in its Expanding Portfolio
              </h1>
              <p className="mb-2 md:mb-3 common-description">
                On April 27th, at the prestigious Beijing Auto China Show 2024,
                The Elite Cars, a subsidiary of Elite Group Holding and the UAE
                leading luxury car dealership, was appointed the official
                distributor for Lynk &amp; Co across the Emirates.
              </p>

              <p className="mb-2 md:mb-3 common-description">
                Lynk &amp; Co has gained global recognition for its
                comprehensive range of premium mobility solutions. This includes
                sedans, SUVs, as well as fuel-efficient options like Internal
                Combustion Engine (ICEV), Plug-in Hybrid Electric Vehicle
                (PHEV), and pure Electric Vehicles (EV).
              </p>

              <p className="mb-2 md:mb-3 common-description">
                After a successful introduction into the European Region five
                years ago and the Middle East last year, Lynk &amp; Co will now
                launch in the UAE, a thriving car market and one of the largest
                in the region. The brand increasing popularity is reflected in
                its expanding network, and its entry into the UAE market through
                The Elite Cars is poised to elevate the brand to unprecedented
                heights.
              </p>

              <p className="mb-2 md:mb-3 common-description">
                &ldquo;At The Elite Cars, we have always been committed to
                delivering excellence to our valued customers. Our relentless
                commitment to quality and customer satisfaction has established
                us as an automotive market leader. So, it is no surprise that
                with Lynk &amp; Co on board, we have broadened our customer
                segment to now include the Global New Premium clientele,&rdquo;
                said Mahmoud Imran, Sales and Operations Manager at The Elite
                Cars.
              </p>

              <p className="mb-2 md:mb-3 common-description">
                With Volvo&rsquo;s 20+ ADAS function supporting Lynk &amp; Co
                vehicles, global 5-star rates are ensured. Quality is guaranteed
                through modular development on CMA and SPA platforms with tier-1
                suppliers like Bosch and BorgWarner. The designs reflect urban
                lifestyles worldwide with a unique Mega-city contrast while
                maintaining uncompromised performance as evidenced by motorsport
                success and readiness for PHEV/EV products in the future. Each
                vehicle offers cutting-edge features, advanced safety
                technologies, and exceptional performance, tailored to meet the
                needs of the discerning Global New Premium customer segment.
              </p>

              <p className="mb-2 md:mb-3 common-description">
                &ldquo;Elite Group Holding has established itself as a dynamic
                and formidable brand within the region. Our approach goes beyond
                product expansion and strategic partnerships with renowned
                manufacturers and global automotive experts. With Lynk &amp; Co,
                we are now enhancing our segments to target a wider audience
                throughout the region. With great confidence, I believe that our
                partnership with Lynk &amp; Co will propel further progress in
                the UAE automotive landscape,&rdquo; said Tamer Abu Khalaf,
                Partner, Elite Group Holding.
              </p>

              <p className="mb-2 md:mb-3 common-description">
                &ldquo;The partnership with The Elite Cars marks a significant
                milestone in our journey, uniting with one of the UAE&rsquo;s
                foremost dealerships to transform the automotive experience in
                the region. We are confident this collaboration will pave the
                way for success,&rdquo; commented Fred Shang, Deputy General
                Manager of Lynk &amp; Co Overseas Division.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
