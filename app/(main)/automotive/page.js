"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer";
import Navbar from "../Navbar";

import Jetour from "../../..//public/assets/Homepage-partners-jetour.jpg";
import Zenvo3 from "../../../public/assets/Homepage-partners-Zenvo3.jpg";
import automobilemobile from "../../../public/assets/automative-mobile.png";

import Image from "next/image";
import BackgroundImage from "../../../public/assets/57af26e48eb6728309d8a752a133493e.png";
import theelitecars from "../../../public/assets/69ef976c37520c78cc1a8ccc57885bdf.png";
import soueast from "../../../public/assets/home/soueast.jpg";
import art from "../../../public/assets/home/art.jpg";
import GroupSection from "../group-of-companies/GroupSection";
import Auto from "/public/assets/Auto.jpg";
import { apiUrl, imgUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const GroupOfCompanies = () => {
const [pageData, setPageData] = useState([]);

const [banner, setBanner] = useState(null);


useEffect(() => {
// Check if the data exists in local storage
const cachedData = localStorage.getItem('banners');
if (cachedData) {
  // If it exists, use it
  setBanner(JSON.parse(cachedData));
  const bnr = JSON.parse(cachedData)?.find(banner => banner.page == 'Automotive');
  setBanner(bnr);

} else {
  // If not, fetch from API and cache it
  fetch(apiUrl + `get-banners`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('banners', JSON.stringify(data.banners));
      setBanner(data?.banners?.find(banner => banner.page == 'Automotive'));


    });
}
}, []);
useEffect(() => {
gsap
  .timeline({ duration: 0.5, ease: "power3.out" })
  .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    ".section-1 .text-2",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 }
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-2",
      start: "top bottom",
    },
  })
  .fromTo(
    ".section-2 .img-1",
    { x: 150, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
  )
  .fromTo(
    ".section-2 .head-1",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
  )
  .fromTo(
    ".section-2 .text-1",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
  );
});


useEffect(() => {
const fetchData = async () => {
  try {
    // Example: Fetch images or posts asynchronously if not passed as props
    const response = await fetch(apiUrl + `get-automotive`);  // Your API endpoint
    const data = await response.json();

    setPageData(data?.automotive);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
}, [])
// 
useEffect(() => {
  let canonicalLink = document.querySelector("link[rel='canonical']");
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', 'https://elitegroupholding.com/automotive');
}, []);
return (
<>
  <Navbar />  
  {banner &&

    <div className="h-screen w-screen relative section-1">
    <Image
      unoptimized
      width={200}
      height={300}
      src={imgUrl + banner?.image}
      alt="bg-img"
      className="object-cover object-center h-screen max-md:hidden w-screen brightness-50"
    />
    <Image
      unoptimized
      width={200}
      height={300}
      src={imgUrl + banner?.mobile_banner}
      alt="bg-img"
      className="object-cover object-center md:hidden h-screen w-screen brightness-50"
    />

      <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
        <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">
          {banner?.title1}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
          {banner?.title2}
        </h1>
      </div>
          <div className=" absolute bottom-0 right-0 px-[5%]">
            <div className="py-5 flex items-center justify-end">
              <div className="text-[#fff]">
                <a href="">Home</a> / Automotive
              </div>
            </div>
          </div>
        </div>
      }

      <div className="bg-[#ffffff] mb-4 sm:pb-3 lg:mb-10"></div>
      {pageData && pageData.length !== 0 && (

        <div>

          <div className="overflow-hidden max-md:px-[5%] max-sm:space-y-10 mt-10">
            <div id="auto">
              <GroupSection
                url="#"
                link="#"
                image={imgUrl + pageData[0]?.image}
                title={<span style={{ color: '#fb511e' }}>{pageData[0]?.title}</span>} // Color applied here

                hasBtn={false}
                descriptions={[
                  <p
                    key="description-1"
                    dangerouslySetInnerHTML={{ __html: pageData[0]?.description }}
                    className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                  >

                  </p>]}
                direction="left"
              />
            </div>
            <div id="jetour">
              <GroupSection
                url="/automotive/jetour"
                link="https://jetouruae.com/"
                image={imgUrl + pageData[1]?.image}
                title={<span style={{ color: '#fb511e' }}>{pageData[1]?.title}</span>} // Color applied here

                hasBtn={true}
                descriptions={[<p
                  key="description-1"
                  dangerouslySetInnerHTML={{ __html: pageData[1]?.description }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>]}
                direction="right"
              />
            </div>

            <div id="zenvo">
              <GroupSection
                url="/automotive/zenvo"
                link="https://zenvouae.com/"
                image={imgUrl + pageData[2]?.image}
                hasBtn={true}
                title={<span style={{ color: '#fb511e' }}>{pageData[2]?.title}</span>} // Color applied here

                descriptions={[<p
                  key="description-1"
                  dangerouslySetInnerHTML={{ __html: pageData[2]?.description }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>]}
                direction="left"
              />
            </div>
            <div id="the-elite-cars">
              <GroupSection
                url="/automotive/the-elite-cars"
                link="https://theelitecars.com/"
                image={imgUrl + pageData[3]?.image}
                title={<span style={{ color: '#fb511e' }}>{pageData[3]?.title}</span>} // Color applied here

                hasBtn={true}
                descriptions={[<p
                  key="description-1"
                  dangerouslySetInnerHTML={{ __html: pageData[3]?.description }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>]}
                direction="right"
              />
            </div>

            <div id="soueast">
              <GroupSection
                url="/automotive/the-elite-cars"
                link="https://soueastuae.com"
                image={imgUrl + pageData[4]?.image}
                title={<span style={{ color: '#fb511e' }}>{pageData[4]?.title}</span>} // Color applied here

                hasBtn={true}
                descriptions={[<p
                  key="description-1"
                  dangerouslySetInnerHTML={{ __html: pageData[4]?.description }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>]}
                direction="left"
              />
            </div>
            <div id="art_elite_car_rental">
              <GroupSection
                url="/automotive/the-elite-cars"
                link="https://artelitecarrental.com"
                image={imgUrl + pageData[5]?.image}
                title={<span style={{ color: '#fb511e' }}>{pageData[5]?.title}</span>} // Color applied here

                hasBtn={true}
                descriptions={[<p
                  key="description-1"
                  dangerouslySetInnerHTML={{ __html: pageData[5]?.description }}
                  className="mb-2 md:mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem]	 text-2"
                >

                </p>]}
                direction="right"
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default GroupOfCompanies;
