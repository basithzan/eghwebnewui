"use client";

import Footer from "../../Footer";
import Navbar from "../../Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="md:h-screen h-[40vh] w-screen relative section-1">
        <img
          src="https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/2zIGkZe7rd54QurzEGhtiXaGhY1i8Gb5TEKEuiqz.jpg"
          alt="Background"
          className="object-cover object-center h-full w-screen brightness-50"
        />
        <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
          <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
          <span className="capitalize">
            the elite cars inspection process for luxury pre owned vehicles
          </span>
        </div>
      </div>

      <div className="sm:px-[5%] pb-10">
        <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
          {/* Content extracted from the image */}
          <div className="mt-10">
            {/* New Content */}
            <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !leading-[120%]">
              The Elite Cars launches limited edition AED 8 Million Zenvo
              Hypercar to the Middle East
            </h3>
            <p className="mb-2 md:mb-3 common-description">
              Dubai: The Elite Cars Group, one of the leading multi-brand luxury
              car dealerships in the UAE becomes the authorized distributor of
              the Danish carmaker Zenvo Automotive - manufacturing
              next-generation hypercars - for the first time in the Middle East.
              The announcement of this partnership was held at Caesars Palace
              Hotel, Bluewaters, along with a debut showcase of its bespoke
              TSR-S model in Dubai.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              Zenvo Automotive plans to firmly establish a presence in the
              region ahead of the reveal of an all-new car, Aurora, this August
              through The Elite Cars. A reveal event featuring the hand-built
              TSR-S highlights the brand’s renowned attention to detail and
              quality for an engaging and intimate driving experience.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              With over 25 years of experience having exclusive partnerships
              with global automotive brands, The Elite Cars offerings comprise a
              wide range of top-quality new and pre-owned high-end ultra-luxury
              vehicles from some of the world&apos;s most prestigious brands.
              The Elite Cars group offers customers an exceptional buying
              experience. Their team of knowledgeable and professional sales
              consultants are dedicated to helping customers find the perfect
              car to meet their needs and exceed their expectations.
            </p>
            <p className="mb-2 md:mb-3 common-description">
              Commenting on the partnership, Mr. Tamer Abu Khalaf, Partner at
              The Elite Cars said, &quot;With a commitment to quality, service,
              and customer satisfaction, The Elite Cars Group has been the
              undisputed leader in the luxury automotive industry for over 25
              years. We are confident that this will bring success to both our
              organizations and we will redefine the boundaries of automotive
              innovation and set a new standard for performance cars.”
            </p>

            <p className="mb-2 md:mb-3 common-description">
              Commenting on this latest partnership with The Elite Cars Group,
              Zenvo’s chief commercial officer and chairman of the board, Mr.
              Jens Sverdrup said: “After a successful 12 months developing the
              brand in North America and Canada, we are keen to continue with
              our strategic plan to grow the Zenvo brand globally. At Zenvo, we
              are thrilled to be working with The Elite Cars Group as our
              authorized distributor to firmly establish the brand in the Middle
              East. The Elite Cars echoes our commitment to providing customers
              with the best possible end-to-end experience. “
            </p>

            <p className="mb-2 md:mb-3 common-description">
              With all the recent TSR-GT models sold out, Zenvo UAE will
              register interest in the all-new V12 powered hypercar, Aurora,
              featuring a modular design chassis with carbon monocoque and
              carbon subframes, plus Zenvo’s own gearbox with integrated hybrid
              drive. Hand-built in Præstø, Denmark, Aurora will be an all-new
              6-litre, twin turbo, V12 engine. Aurora Tur will deliver a road
              focused, GT driving experience with a limited top speed of over
              400kmh, while Aurora Agil will feature more aggressive aero
              designed for maximum capability on the racetrack. Danish-developed
              Zenvo Automotive focuses on limited-edition artisan-made
              hypercars, available to those interested in completely bespoke
              manufacturing experiences and unique driving abilities.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              With the announcement of this partnership, The Elite Cars group is
              looking forward to a successful future for Zenvo Automotive in the
              UAE, and to provide its loyal clientele with the greatest in
              luxury and performance.
            </p>

            <p className="mb-2 md:mb-3 common-description">
              Source:
              <a href="https://www.zawya.com/en/press-release/companies-news/the-elite-cars-launches-limited-edition-aed-8mln-zenvo-hypercar-to-the-middle-east-atrnjnaz?amp=1">
                https://www.zawya.com/en/press-release/companies-news/the-elite-cars-launches-limited-edition-aed-8mln-zenvo-hypercar-to-the-middle-east-atrnjnaz?amp=1
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
