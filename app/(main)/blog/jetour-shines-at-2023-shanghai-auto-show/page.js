"use client";

import Image from "next/image";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import BackgroundImage from "/public/assets/897d556a59733e5e2482f1b030c8c4de.png";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <img
          src="https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/sFSwAybOeSJAZgnTZjhiwnyy2wHhLVVPHRHKs65L.jpg"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
            Jetour Shines at 2023 Shanghai Auto..
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            {/* New Content */}
            <h1 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              Jetour Shines at 2023 Shanghai Auto Show with Its Latest
              Achievements, Kicking Off an Accelerated Pace for Its Overseas
              Expansion
            </h1>
            <p className="mb-2 md:mb-3 common-description">
              The Chinese’ up-and-coming SUV brand Jetour Auto showcased
              multiple models including the DASHING i-DM, T2 (Named Traveler in
              the Chinese market), T3 concept cars, and held an international
              press conference during the 2023 Shanghai Auto Show from April 18
              to 27, 2023. More than 200 partners and media outlets from the
              Middle East, Africa, Central and South America, Asia-Pacific and
              other regions were invited to the event.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              In recent years, the international competitiveness of Chinese
              companies has significantly increased, and the Chinese automobile
              industry has successfully transformed its capability from
              “manufacturing” to “creation.” According to the statistics of
              China Association of Automobile Manufacturers, China exported 3.11
              million automobiles in 2022, up 54% Year-on-year, surpassing
              Germany for the first time and becoming the world’s second largest
              exporter of autos.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              Chinese auto brands are deeply involved in global competition, and
              Jetour Auto has become a sample of rapid growth, achieving 700,000
              sales in less than 5 years. Jetour Auto embarked on the journey of
              going global in 2019 and has established over 400 sales and
              service locations in more than 35 countries and regions across the
              Middle East, Africa, Central and South America, Asia-Pacific, and
              the Commonwealth of Independent States (CIS). In 2022, Jetour Auto
              has made itself the up-and- coming SUV brand with the most
              overseas sales and the second fastest-growing auto exporter in
              China.
            </p>
            <p className="mb-2 md:mb-3 common-description font-semibold">
              Jetour T2 debut: Expected to Be Launched Globally This Year
            </p>

            <p className="mb-2 md:mb-3 common-description">
              T2 is Jetour Auto’s new flagship product for 2023 and has
              attracted a lot of attention at the Shanghai auto show. In line
              with the “Travel+” brand positioning, Jetour T2 is designed for
              travel scenes, focusing on free and comfortable experiences.
              Embracing a muscular design style, Jetour T2 is built with sharp
              lines and angles that exude rugged beauty. The interior of the
              vehicle is decorated with simplistic yet powerful elements, which
              is highly consistent with the exterior design.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              The Kunpeng Power is standard on the Jetour T2 series which
              includes the oil-fueled and PHEV versions, achieving a balance
              between strong power and low fuel consumption, and providing a
              more economical and efficient travel experience. Built for all
              terrains and multiple scenes, Jetour T2 is equipped with the
              latest sixth-generation 4WD system from BorgWarner, which
              maximizes the 4WD performance under different driving modes, to
              provide users with a better driving experience. Jetour Auto states
              that Jetour T2 is expected to be launched globally this year.
            </p>

            <p className="mb-2 md:mb-3 common-description font-semibold">
              On the New-Energy Path: DASHING i-DM and Kunlun Platform Lead the
              Way
            </p>

            <p className="mb-2 md:mb-3 common-description">
              At the 2023 Shanghai Auto Show, Jetour Auto had displayed its
              first vehicle with a green license plate: the 2023 DASHING i-DM.
              This model is equipped with the dual motor driving system, the
              first for Chinese brand, and boasts a driving range of 1,000+ km.
              It generates a 240kW combined power and a 545 Nm torque, providing
              drivers with a more thrilling experience. The new vehicle also
              comes with a standard 3,000W capacity for charging other devices,
              making outdoor travel even more enjoyable.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              2023 marks the year that Jetour Auto taps into the HEV segment.
              Following the launch of DASHING i-DM, the brand will start a shift
              to fully embrace new energy, aiming to get all models qualified
              for green license plates in China by 2024 and concurrently
              expanding into international markets. The X70 and X90 models will
              also be iterated into HEVs and be introduced into international
              markets.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              Notably, Jetour Auto’s Kunlun platform has also made its debut at
              the auto show. The platform has core advantages in scalability,
              shift to new energy, smart cockpit and driving, and electronic and
              electrical architecture. All future Jetour models will be built on
              the Kunlun platform. Additionally, the brand-new concept car
              Jetour T3 also made its debut on the same stage. It features a
              non-load-bearing body that better adapts to complex off-road
              conditions, beefs up its off-road recovery capability and improves
              its durability.
            </p>
            <p className="mb-2 md:mb-3 common-description font-semibold">
              Winning Together with the World: Becoming a global “Travel+”
              automotive leading brand.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              By showcasing its new products, technologies, and latest
              achievements at the Shanghai Auto Show, Jetour Auto has greater
              confidence in deepening its international market presence. In the
              future, Jetour Auto will continue to adhere to the “Travel+”
              development strategy, embrace the global automotive market with
              the ambition to become a global “Travel+” automotive leading
              brand.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
