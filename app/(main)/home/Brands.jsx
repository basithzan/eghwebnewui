import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandImg1 from "/public/assets/brands/Jetour.png";
import BrandImg4 from "/public/assets/brands/soueast-black.png";
import BrandImg5 from "/public/assets/brands/art-logo.png";
import BrandImg3 from "/public/assets/brands/TEC.png";
import BrandImg2 from "/public/assets/brands/Zenvo.png";
import BrandImg7 from "/public/assets/brands/zrt-contracting.png";
import BrandsBgImg from "/public/assets/DSC07990.jpg";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { imgUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);
const defaultWidth = '150px'; // Default width for logos
const defaultHeight = '100px'; // Height for logos
const Brands = ({ content }) => {
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

  const images2 = [BrandImg1, BrandImg2,BrandImg7, BrandImg3, BrandImg4, BrandImg5, BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5];
  const images = [BrandImg1, BrandImg2,BrandImg7, BrandImg3, BrandImg4, BrandImg5];
  
  // Define the URLs for each brand
  const brandUrls = [
    "https://jetouruae.com/",
    "https://zenvouae.com/",
    "https://www.zrtcontracting.com/",
    "https://theelitecars.com/",
    "https://soueastuae.com/",
    "https://artelitecarrental.com/"
  ];
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl + content[0]?.image})` }}
      className="xl:h-screen w-screen bg-no-repeat bg-center bg-cover px-[5%] flex flex-col md:justify-center text-white overflow-hidden section-brand relative py-4"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="flex items-start gap-12 flex-col md:pt-0 pt-4">
        <div className="flex items-start md:gap-8 flex-col max-w-[900px]">
          <h4 className="md:text-md text-[2rem] lg:text-[2.5rem] font-semibold text-white relative z-10 head-1 max-md:mb-4">
            {content[0]?.title}
          </h4>
          {/* <p className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] description-1 relative z-10 max-md:py-4 text-[#fff]" dangerouslySetInnerHTML={{ __html: content[0]?.content }}>
           
           </p> */}

          <p className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] description-1 relative z-10 max-md:py-4 text-[#fff]" dangerouslySetInnerHTML={{ __html: content[0]?.content }}>

          </p>
        </div>
        {/* Conditional rendering for Desktop */}
        {!isMobile && (
          <div className="flex" style={{ gap: '50px', overflowX: 'auto' }}>
            {images.map((img, index) => {
              // Define the width for the 3rd, 4th, and last logos
              const width = index === 4
                ? `calc(200px * 1.1)`
                : index === 2
                  ? `calc(${defaultWidth} - 70px)` // Increase 4th logo width by 15%
                : index === 3
                  ? `calc(${defaultWidth} + 22px)` // Increase 3rd logo width by 20px
                  : index === images.length - 1
                    ? `calc(${defaultWidth} - 35px)` // Reduce last logo width by 50px
                    : defaultWidth; // Default width for other logos

              return (
                <a
                  key={index}
                  href={brandUrls[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer"
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
                </a>
              );
            })}
          </div>
        )}




        {/* Conditional rendering for Mobile */}
        {isMobile && (
          <Marquee
            loop={0}
            speed={70}  // Increased speed to 70 for mobile (8.75x faster than original 8)
            direction="left"
            className="w-full gap-[40px] brands mb-5 md:mb-0"
          >
            {images2.map((img, index) => {
              // Define the width for the 1st, 3rd, 4th, and last logos
              const width = index === 0
                ? `calc(${defaultWidth} + 10px)` 
                : index === 2
                ? `calc(200px * 0.40)`// Increase the width of the 1st logo by 10px
                : index === 4
                  ? `calc(200px * 1.10)` // Increase the 4th logo width by 15%
                  : index === 9
                    ? `calc(200px * 1.10)` // Increase the 4th logo width by 15%
                    : index === 14
                      ? `calc(200px * 1.10)` // Increase the 4th logo width by 15%
                      : index === 3
                        ? `calc(${defaultWidth} + 20px)` // Increase the 3rd logo width by 20px
                        : index === images2.length - 1
                          ? `calc(${defaultWidth} - 25px)` // Decrease the width of the last logo by 10px
                          : defaultWidth; // Default width for other logos

              // Get the URL for the current logo (using modulo to handle repeated logos)
              const urlIndex = index % brandUrls.length;
              const logoUrl = brandUrls[urlIndex];

              return (
                <a
                  key={index}
                  href={logoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer"
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
                </a>
              );
            })}

          </Marquee>
        )}
      </div>
    </div>
  );
};

export default Brands;
