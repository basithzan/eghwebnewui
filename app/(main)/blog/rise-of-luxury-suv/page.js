"use client";

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import BackgroundImage from "/public/assets/barbus.jpeg";

gsap.registerPlugin(ScrollTrigger);

const TheEliteCars = ({ title, descriptions = [] }) => {
  useEffect(() => {
    gsap
      .timeline({ duration: 0.5, ease: "power3.out" })
      .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".section-1 .text-2",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 }
      );
  });

  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <Image
          unoptimized
          src={BackgroundImage}
          alt="fve"
          className="object-cover object-center h-full w-screen brightness-50"
        />

        {/* <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2 opacity-0">{title}</div>
                </div> */}
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media Center</a> / The
          Elite Cars / Rise Of Luxury Suvs
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5  max-w-7xl mx-auto ">
          <div className="md:pb-10 md:pt-5 py-2 flex items-center md:justify-end justify-center"></div>
          <h2 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
            <strong>The Rise of Luxury SUVs in the UAE:</strong> How The Elite
            Cars is Catering to the Growing Demand for High-End Off-Road
            Vehicles
          </h2>
          {[
            "UAE’s booming luxury car market, valued at USD 4.12 billion in 2023, is on a growth trajectory. What drives this growth is the increasing appeal of luxury cars, which are often seen as status symbols and are prized for their comfort and superior driving experience. Among luxury car sales, off-road vehicles including SUVs play an imperative part, with revenue projected to reach US$2,822m in 2024, according to this Statista report. In this blog, we will observe how store interest largely goes to high-end luxury SUVs, which could be caused by lifestyle factors, economic factors, and environmental factors, all serviced by The Elite Cars.",
          ].map((description, index) => (
            <p key={index} className="mb-2 md:mb-3 common-description">
              {description}
            </p>
          ))}
          <div className=" pt-4">
            <div className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              So How Do Luxury SUVs Fulfil Driver Expeditions and the Growing
              Demand?
            </div>
            {[
              "The growing wealth in the UAE and the desire for high-end, versatile transportation are driving the demand for luxury SUVs. Recent studies show that the time of year is not a concerning factor to UAE residents, for whom easy transportation stays a priority all year round.  High disposable income and a taste for luxury can fuel increased interest in premium vehicles. As a result, space, flexibility, and safety are now key factors that people in the UAE look for in their SUVs.",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-4">
            <div className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              What are the Finer SUV Ownership Incentives?
            </div>
            {[
              "Several factors drive the demand for luxury SUVs in the UAE. The ever-expanding economy, supported by oil wealth and a high GDP per capita, creates a keen consumer base for high-end vehicles, with SUVs unit sales expected to reach up to 60.4k vehicles by the year 2028.. Cultural preferences in the UAE place a high value on status symbols, which further boosts the luxury SUV market. While the United States currently leads this market, the growth in the UAE has been impressive, mainly due to economic prosperity and lifestyle choices.                            ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-4">
            <div className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              Contributions to SUV Ownership in the UAE
            </div>
            {[
              "The art of driving an SUV comes with its attraction of dominating the road. UAE residents eagerly seek SUV ownership, which aligns well with the Middle Eastern lifestyle.                            ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-0">
            <div className=" flex items-center gap-3">
              <div className=" min-w-4 min-h-4 bg-black rounded-full mt-1"></div>
              <div className="common-heading !text-lg xl:text-[1.5rem] mb-4 md:mt-6 mt-6 uppercase !leading-[120%]">
                Affluence and Lifestyle
              </div>
            </div>
            {[
              "The most important privilege under SUV ownership in the UAE is the purchasing power and resulting wealth. Owning luxury vehicles, while being a means of transport in the country, also symbolise success and prestige in society. The urge for a luxurious and convenient ride fits perfectly into the UAE lifestyle.",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-0">
            <div className=" flex items-center gap-3">
              <div className=" min-w-4 min-h-4 bg-black rounded-full mt-1"></div>
              <div className="common-heading !text-lg xl:text-[1.5rem] mb-4 md:mt-6 mt-6 uppercase !leading-[120%]">
                Utility and Versatility
              </div>
            </div>
            {[
              "Usability for urban and off-road use is an absolute necessity in the UAE. The internal features focusing on capacity and durability has prompted the country-wide adoption of SUVs, popular for both business and family purposes.",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-0">
            <div className=" flex items-center gap-3">
              <div className=" min-w-4 min-h-4 bg-black rounded-full mt-1"></div>
              <div className="common-heading !text-lg xl:text-[1.5rem] mb-4 md:mt-6 mt-6 uppercase !leading-[120%]">
                Technological Advancements
              </div>
            </div>
            {[
              "Innovations in luxury SUVs continue to draw buyers. Modern SUVs are fitted with the latest safety features, in-car entertainment equipment, and unmatched performance that make them increasingly desirable.                            ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-4">
            <div className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              The Elite Cars&apos; Premium Selection of Luxury SUVs
            </div>
            {[
              "The Elite Cars conduct their operations and inventory to reflect true horsepower on the road once the SUV is unleashed. Here’s a closer look into The Elite Cars’ fleet and operations.                            ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-0">
            <div className=" flex items-center gap-3">
              <div className=" min-w-4 min-h-4 bg-black rounded-full mt-1"></div>
              <div className="common-heading !text-lg xl:text-[1.5rem] mb-4 md:mt-6 mt-6 uppercase !leading-[120%]">
                Exclusive Inventory
              </div>
            </div>
            {[
              `The Elite Cars caters to its clients the world's finest luxury SUVs of the most prestigious brands that include, among others, Range Rover, Bentley Bentayga, and Mercedes-Benz GL. Each model is a testament to luxury, performance, and reliability for the "elite" clients who settle only for the best.                            `,
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-0">
            <div className=" flex items-center gap-3">
              <div className=" min-w-4 min-h-4 bg-black rounded-full mt-1"></div>
              <div className="common-heading !text-lg xl:text-[1.5rem] mb-4 md:mt-6 mt-6 uppercase !leading-[120%]">
                Quality Assurance
              </div>
            </div>
            {[
              "Every vehicle at The Elite Cars undergoes a thorough inspection process starting from engine spikes, interior refurbishing and oil coolants. This helps customers rest assured that each of these luxury SUVs is of great quality and reliability, providing peace of mind for off-road navigation and terrains.                            ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-4">
            <div className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              Customization and Personalization Services
            </div>
            {[
              "A luxury SUV isn’t complete without the client’s signature touch. Here are a few features that need to be looked at before handing over the vehicle for usage.",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>
          <div className=" pt-0">
            <div className=" flex items-center gap-3">
              <div className=" min-w-4 min-h-4 bg-black rounded-full mt-1"></div>
              <div className="common-heading !text-lg xl:text-[1.5rem] mb-4 md:mt-6 mt-6 uppercase !leading-[120%]">
                Customizable Options
              </div>
            </div>
            {[
              "The Elite Cars offers a wide selection of options for its customers. Whether it is custom interiors or exotic colours for the exterior, the clients’ prospects are always a top priority.                            ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>

          <div className=" pt-4">
            <div className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              Future Outlook of Luxury SUVs
            </div>
            {[
              "The prospect for luxury SUVs in the UAE is very bright. With sustained economic growth and an appetite for luxury, the market will continue to be dynamic and versatile. Future advancements in electric and autonomous vehicles will further satisfy market demand. Additionally, revenue of the luxury SUV market of the UAE is expected to show an annual growth rate (CAGR 2024-2028) of 0.79%, resulting in a projected market volume of US$2,912m by 2028.                            ",
              "The luxury SUV market in the UAE is thriving due to economic prosperity, cultural preferences, and practical requirements. Leading this trend is The Elite Cars, renowned for their exceptional customer service and premium SUV offerings. As the market expands, The Elite Cars continue to uphold their commitment to delivering top-notch luxury SUV experiences. Explore their range of luxury SUVs,, and find the ideal luxury SUV that meets your needs at The Elite Cars today! ",
            ].map((description, index) => (
              <p key={index} className="mb-2 md:mb-3 common-description">
                {description}
              </p>
            ))}
          </div>

          {/* <a href="/" className={`w-fit block mx-auto bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1 font-light mt-16`}>
                        Visit Website
                        <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                    </a> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TheEliteCars;
