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
        <Image
          unoptimized
          src={BackgroundImage}
          alt="Background"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
            The All-New Jetour T2 Debuts in the UAE
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            {/* New Content */}
            <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              The All-New Jetour T2 Debuts in the UAE
            </h3>
            <p className="mb-2 md:mb-3 common-description">
              The historic event took place at Terra Solis, Dubai where guests
              were treated to a symphony of multi-sensory spectacle, human
              artistry and technological wonder. The night sky lit up through a
              synchronized drone show followed by the unveiling of the Jetour
              T2. And the mesmerizing display capped with fireworks set the
              stage for a momentous occasion where six fortunate first customers
              ceremoniously received their keys to the new off-road SUV.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              The Jetour T2 is the first T-series product and off-road vehicle
              under the Jetour brand, representative of the spirit of travelling
              and modern luxury. Designed for thrill seekers, this 4x4 SUV
              experience combines intelligent, cutting-edge technology, an
              exquisite muscular design and unparalleled performance.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              Featuring a sleek new body design, powered by a feisty 4-cylinder
              2.0L turbocharged engine, the Jetour T2 produces an impressive 390
              Nm of torque – more than enough to tackle any challenge. The power
              delivery is smooth and effortless, making every journey a
              pleasure. With a wider body and longer wheelbase, the Jetour’s
              ride quality is exemplary. The lower stance gives the Jetour T2
              greater stability and better cornering.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              No matter the terrain or challenge, be it the bustling urban
              streets or the steep inclines in nature, the Jetour T2 ensures a
              smooth and exhilarating drive
            </p>

            <p className="mb-2 md:mb-3 common-description">
              The T2 brings together all the latest advancements in road safety,
              to give driver and passengers total peace of mind, such as Lateral
              Collision Warning, Lane Departure warning system, Automatic
              Emergency Braking, High-speed warning, and Forward and Backward
              collision warning, all creating a safer driving experience both on
              and off-road.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              “As the authorised distributor of Jetour in the UAE, we are proud
              to be launching the Jetour T2 to our discerning clientele who will
              be the first to receive and drive their cars outside of China. We
              are dedicated to providing them with a world-class experience,
              paired with exceptional vehicles that cater to their needs,” said
              Mr. Elie Nehme, General Manager of Jetour Auto. “The latest model
              is perfectly equipped for the region, offering drivers peace of
              mind as they effortlessly explore any terrain”.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              “There has been exponential growth and increased demand in the UAE
              since officially launching in 2021. We are confident that the
              Jetour T2 will continue to captivate the hearts of customers in
              the region, given their strong appreciation of innovation, quality
              craftsmanship and performance,” comments Mr. Li Xueyong, President
              of Jetour Auto and Vice President of Chery Automobile Co. Ltd”
            </p>

            <p className="mb-2 md:mb-3 common-description">
              The all-new Jetour T2 offers an outstanding 10 Years / 1 Million
              KM Warranty and 3 years or up to 40,000 kms service packages
              providing you with long-term peace of mind. The Jetour T2 is a car
              that’s perfectly in tune with the UAE way of life, making it the
              ideal choice for the next generation of drivers. Discover Jetour
              T2 today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
