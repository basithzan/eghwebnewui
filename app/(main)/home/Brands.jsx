import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandImg1 from "/public/assets/brands/Jetour.png";
import BrandImg4 from "/public/assets/brands/soueast-black.png";
import BrandImg5 from "/public/assets/brands/art-logo.png";
import BrandImg3 from "/public/assets/brands/TEC.png";
import BrandImg2 from "/public/assets/brands/Zenvo.png";
import BrandsBgImg from "/public/assets/DSC07990.jpg";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

gsap.registerPlugin(ScrollTrigger);
const defaultWidth = '150px'; // Default width for logos
const defaultHeight = '100px'; // Height for logos
const Brands = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-brand",
            start: "top center",
          },
          delay: 0.25,
        })
        .fromTo(
          ".section-brand .head-1 ",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".section-brand .description-1 ",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const images2 = [BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5];
const images = [BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5];
  return (
    <div
      style={{ backgroundImage: `url(${BrandsBgImg.src})` }}
      className="xl:h-screen w-screen bg-no-repeat bg-center bg-cover px-[5%] flex flex-col md:justify-center text-white overflow-hidden section-brand relative py-4"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="flex items-start gap-12 flex-col md:pt-0 pt-16">
        <div className="flex items-start md:gap-8 flex-col max-w-[900px]">
          <h4 className="md:text-md text-[2rem] lg:text-[2.5rem] font-semibold text-white relative z-10 head-1 max-md:mb-4">
            AFFILIATED PARTNERS
          </h4>
          <p className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] description-1 relative z-10 max-md:py-4 text-[#fff]">
            We believe that excellence is the
cornerstone of our diverse
portfolio.
          </p>
<p className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] description-1 relative z-10 max-md:py-4 text-[#fff]">
           Our unwavering commitment to
quality is reflected in every part
of our businesses, driven by our
team of highly experienced
professionals who are dedicated
to delivering exceptional results.
          </p>
        </div>
{/* Conditional rendering for Desktop */}
{!isMobile && (
  <div className="flex" style={{ gap: '50px', overflowX: 'auto' }}>
    {images.map((img, index) => {
      // Define the width for the 3rd, 4th, and last logos
      const width = index === 3
        ? `calc(200px * 1.1)` // Increase 4th logo width by 15%
        : index === 2
        ? `calc(${defaultWidth} + 22px)` // Increase 3rd logo width by 20px
        : index === images.length - 1
        ? `calc(${defaultWidth} - 35px)` // Reduce last logo width by 50px
        : defaultWidth; // Default width for other logos

      return (
        <div
          key={index}
          className="flex items-center"
          style={{
            flexShrink: 0,
            width: width, // Apply the calculated width
            height: defaultHeight
          }}
        >
          <Image
            unoptimized
            src={img}
            className="w-full h-full object-contain transition-opacity duration-10 opacity-80 hover:opacity-60"
            alt="brands"
          />
        </div>
      );
    })}
  </div>
)}




        {/* Conditional rendering for Mobile */}
        {isMobile && (
          <Marquee 
  loop={0} 
  speed={80}  // Adjust the speed for smoother scroll
  direction="left"
  className="w-full gap-[40px] brands mb-5 md:mb-0"
>
            {images2.map((img, index) => {
  // Define the width for the 1st, 3rd, 4th, and last logos
  const width = index === 0
    ? `calc(${defaultWidth} + 10px)` // Increase the width of the 1st logo by 10px
    : index === 3
    ? `calc(200px * 1.10)` // Increase the 4th logo width by 15%
: index === 8
    ? `calc(200px * 1.10)` // Increase the 4th logo width by 15%
: index === 13
    ? `calc(200px * 1.10)` // Increase the 4th logo width by 15%
    : index === 2
    ? `calc(${defaultWidth} + 20px)` // Increase the 3rd logo width by 20px
    : index === images2.length - 1
    ? `calc(${defaultWidth} - 25px)` // Decrease the width of the last logo by 10px
    : defaultWidth; // Default width for other logos

  return (
    <div
      key={index}
      className="flex items-center"
      style={{
        flexShrink: 0,
        width: width, // Apply the calculated width
        height: defaultHeight,
        marginRight: index !== images2.length - 1 ? '40px' : '0px', // Add 40px gap except for the last logo
      }}
    >
      <Image
        unoptimized
        src={img}
        className="w-full h-full object-contain transition-opacity duration-10 opacity-80 hover:opacity-60"
        alt="brands"
      />
    </div>
  );
})}

          </Marquee>
        )}
      </div>
    </div>
  );
};

export default Brands;
