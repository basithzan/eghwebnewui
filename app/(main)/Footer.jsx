"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Logo from "/public/assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-[#141414] py-10">
      <div className="px-[5%] mx-auto">
        <Image
          unoptimized
          alt="img"
          src={Logo}
          className="w-28 md:w-40 mx-auto mb-5 md:mb-10"
        />

        <div className="grid md:grid-cols-3 gap-5 md:gap-14 text-[#B3B3B3]">
          <div>
            <div className=" md:text-base text-[1.25rem] lg:text-[1.5rem] lg:leading-[1.75rem] mb-2.5  text-white">
              ABOUT US
            </div>
            <p className="text-base md:text-base lg:text-[1rem] lg:leading-[1.75rem] mb-2.5">
              At Elite Group Holding, we are committed to enhance the quality of
              life within the communities we serve, continuously seek avenues
              for fostering growth and make a positive impact on the world and
              our community.{" "}
            </p>
            <p className="text-base md:text-base lg:text-[1rem] lg:leading-[1.75rem] mb-2.5">
              Headquartered in the United Arab Emirates, our expansive portfolio
              encompasses automotive, e-commerce, healthcare, real estate and
              contracting, and investments.
            </p>
            <p className="text-base md:text-base lg:text-[1rem] lg:leading-[1.75rem] mb-2.5">
              We pride ourselves on our unwavering dedication to excellence,
              integrity, and teamwork.
            </p>
          </div>

          <div className="flex gap-2 md:justify-around justify-between">
            <div>
              <div className="md:text-base text-[1.25rem] lg:text-[1.5rem] lg:leading-[1.75rem] mb-4 text-white">
                NAVIGATION
              </div>
              <div className="grid gap-2 text-base md:text-base lg:text-[1rem] lg:leading-[1.75rem]">
                <a href="/" className="hover:text-white">
                  Home
                </a>
                <a href="/about-group" className="hover:text-white">
                  About the Group
                </a>
                <a href="/group-of-companies" className="hover:text-white">
                  Group of Companies
                </a>
                <a href="/media-centre" className="hover:text-white">
                  Media Center
                </a>
                <a href="/careers" className="hover:text-white">
                  Careers
                </a>
                <a href="/contact-us" className="hover:text-white">
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <div className="md:text-base text-[1.25rem] lg:text-[1.5rem] lg:leading-[1.75rem] mb-4 text-white">
                GROUP OF COMPANIES
              </div>
              <div className="grid gap-2 text-base md:text-base lg:text-[1rem] lg:leading-[1.75rem]">
                <a href="/automotive" className="hover:text-white">
                  Automotive
                </a>
                <a
                  href="/group-of-companies#investments"
                  className="hover:text-white"
                >
                  Investments
                </a>
                <a
                  href="/group-of-companies#real_estate"
                  className="hover:text-white"
                >
                  Real Estate
                </a>

                <a
                  href="/group-of-companies#ecommerce"
                  className="hover:text-white"
                >
                  Ecommerce
                </a>

              </div>
            </div>
          </div>

          <div>
            <div className="md:text-base text-[1.25rem] lg:text-[1.5rem] lg:leading-[1.75rem] mb-4 text-white">
              STAY CONNECTED
            </div>

            <p className="mb-4">
              Visit our social channels for the latest updates, news and events.
            </p>
            {/* <input type="text" className='md:h-10 h-9 text-sm mb-4 bg-[#808080] rounded-full outline-none py-1.5 px-5 w-full text-white placeholder:text-white' placeholder='Your Email Address' />
            <button className='md:h-10 h-9 mb-5 w-full bg-transparent text-white hover:bg-white hover:text-black transition-all border border-1 border-[#808080] rounded-full py-1.5'>STAY CONNECTED</button> */}

            <SocialLinks
              className="gap-0.5  flex items-center"
              iconClassName="w-6 h-6"
            />
          </div>
        </div>

        <hr className="my-10 border-[#808080]" />

        <p className="mb-2 text-[#C3C3C3] text-sm uppercase">
          Copyright © 2024 | ALL RIGHTS RESERVED | ELITE GROUP HOLDING LTD |
          <span className="font-bold">
            <a href="/privacy"> PRIVACY POLICY</a> |{" "}
            <a href="/terms-and-condition">Terms & Condition</a>
          </span>
        </p>
        {/* <p className="text-[#818181] text-sm">
          <strong>Disclaimer:</strong> The Elite Cars is not endorsed by,
          directly affiliated with, maintained or sponsored by any car
          manufacturer.
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
