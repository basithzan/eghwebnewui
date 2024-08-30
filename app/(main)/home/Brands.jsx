import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandImg1 from "/public/assets/brands/Jetour.png";
import BrandImg4 from "/public/assets/brands/soueast-black.png";
import BrandImg3 from "/public/assets/brands/TEC.png";
import BrandImg2 from "/public/assets/brands/Zenvo.png";
import BrandsBgImg from "/public/assets/DSC07990.jpg";
import Marquee from "react-fast-marquee";
import Image from "next/image"; 
import "react-multi-carousel/lib/styles.css";

gsap.registerPlugin(ScrollTrigger);

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
        )
        .fromTo(
          ".section-brand .brands ",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
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

  const images2 = [BrandImg2, BrandImg3, BrandImg1, BrandImg4];

  return (
    <div
      style={{ backgroundImage: `url(${BrandsBgImg.src})` }}
      className="xl:h-screen w-screen bg-no-repeat bg-center bg-cover px-[5%] flex flex-col md:justify-center text-white overflow-hidden section-brand relative py-4"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="flex items-start gap-12 flex-col md:pt-0 pt-16">
        <div className="flex items-start md:gap-8 flex-col max-w-[900px]">
          <h4 className="md:text-md text-[2rem] lg:text-[2.5rem] font-semibold text-white relative z-10 head-1 max-md:mb-4">
            OUR BRANDS
          </h4>
          <p className="text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] description-1 relative z-10 max-md:py-4 text-[#fff]">
            We believe that excellence is the cornerstone of our diverse
            portfolio, which spans across various sectors. Our unwavering
            commitment to quality is reflected in every part of our businesses,
            driven by our team of highly experienced professionals who are
            dedicated to delivering exceptional results.
          </p>
        </div>

        <div className={`grid max-md:hidden ${isMobile ? 'grid-cols-2 gap-x-[15px] gap-y-[30px] justify-center' : 'grid-cols-4 gap-8 justify-start'} brands mt-0`}>
      
          {images2.map((img, index) => (
            <Image
              unoptimized
              key={index}
              src={img}
              className={`${
                isMobile
                  ? "w-[150px] h-auto mx-auto"
                  : "w-[220px] h-auto object-contain"
              } transition-all duration-500 opacity-60 hover:opacity-100`}
              alt="brands"
            />
          ))}
         
        </div>
 
        <Marquee
              loop={0}
              className=" w-full md:hidden  gap-10 brands  mb-5 md:mb-0"
            >
          {images2.map((img, index) => (
            <Image
              unoptimized
              key={index}
              src={img}
              className={`${
                isMobile
                  ? "w-[150px] h-auto mx-5"
                  : "w-[0px] h-auto object-contain"
              } transition-all duration-500 opacity-60 hover:opacity-100`}
              alt="brands"
            />
          ))}
           </Marquee>
 
      </div>
    </div>
  );
};

export default Brands;
