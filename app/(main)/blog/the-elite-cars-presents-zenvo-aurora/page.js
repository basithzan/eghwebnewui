"use client";

import Image from "next/image";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import BackgroundImage from "/public/assets/aurora.jpg";

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
            The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            {/* New Content */}
            <h1 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA
                          </h1>
            <p className="mb-2 md:mb-3 common-description">
              The Elite Cars, the leading luxury automotive dealership in the
              United Arab Emirates, through their exclusive partnership with
              Zenvo Automotive, the renowned Danish supercar manufacturer,
              recently unveiled Zenvo&apos;s newest collection, known as Aurora.
              The exclusive launch of the Aurora lineup was held at the Atlantis
              Royal Dubai on the 21st of February.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              The launch not only signifies a significant milestone for both
              entities but also brings forth Zenvo&apos;s latest marvels, the
              track focused Agil and the more tamed Tur, to the UAE. This
              collaboration ushers in a new era of supercar excellence in the
              region, setting the stage for a fusion of Danish craftsmanship and
              Emirati automotive sophistication.
            </p>

            <h4 className="mb-2 md:mb-3 common-description font-semibold">
              A Match Made in Luxury
            </h4>
            <p className="mb-2 md:mb-3 common-description">
              Founded in 2007, Zenvo Automotive has cemented its place as a
              formidable name in the hypercar industry. Known for its
              limited-production, hand-built supercars, Zenvo combines advanced
              materials with traditional craftsmanship.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              The Elite Cars is proud to bring Zenvo’s most ambitious project
              yet, the Aurora, to the discerning clientele of the UAE. The
              Aurora lineup, featuring the Agil and Tur models, is a testament
              to Zenvo&apos;s relentless pursuit of performance and design
              perfection.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              The Aurora Agil, embodying agility and speed, and the Aurora Tur,
              a symbol of touring luxury, both showcase the iconic Danish design
              principle of ‘form follows function’. Powered by a groundbreaking
              6.6-litre quad-turbocharged V12 engine paired with a lightweight
              electric motor, the Aurora series boasts up to 1,850bhp, setting
              new benchmarks for power and performance.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              The Aurora models offer a blend of raw power and electric
              efficiency, capable of reaching speeds up to 280 mph (450 km/h)
              and achieving 0-62mph (0-100km/h) in as little as 2.3 seconds.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              With only 50 units of each model being produced, these hypercars
              promise exclusivity and bespoke luxury, tailored to the individual
              tastes of their owners.
            </p>

            <p className="mb-2 md:mb-3 common-description font-semibold">
              Quote from The Elite Cars:
            </p>

            <p className="mb-2 md:mb-3 common-description">
              A representative of The Elite Cars, expressing their excitement
              about the launch and the Zenvo brand, commented, “We are filled
              with immense pride as we officially unveil the limited-edition
              Zenvo Aurora in the UAE as the authorized distributor for the
              brand across the region. This partnership between The Elite Cars
              and Zenvo is a natural synergy, as we both share a deep passion
              for automotive excellence, a commitment to exceeding expectations
              and a dedication to providing clientele with the greatest in
              luxury and performance,” said Mr. Tamer Abu Khalaf, Co-Founder at
              The Elite Cars. “With the UAE as a global hub of luxury, the Zenvo
              Aurora represents the pinnacle of artisanal craftsmanship for
              automotive enthusiasts and connoisseurs alike, offering an
              unparalleled ownership experience.”
            </p>

            <p className="mb-2 md:mb-3 common-description  font-semibold">
              Quote from Zenvo:
            </p>
            <p className="mb-2 md:mb-3 common-description">
              “We are thrilled to be unveiling the Zenvo Aurora for the first
              time in the UAE market with our partners The Elite Cars,” explains
              the Chairman of the Board and Chief Commercial Officer of Zenvo,
              Jens Sverdrup. “The new model is best described as an equilibrium
              of extremes. We just wanted to build an uncompromised driver’s
              car, which delivered on every level, but without any one aspect
              negatively impacting another. The outcome has given us two models,
              which complement each other, deliver true driving pleasure and,
              almost as a byproduct, offer incredible performance,” said a
              representative from Zenvo at the launch event.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
