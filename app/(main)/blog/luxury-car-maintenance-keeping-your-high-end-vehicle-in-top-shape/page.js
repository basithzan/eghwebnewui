"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BackgroundImage from "/public/assets/luxury.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// Registering GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Page = ({ title, descriptions = [] }) => {
  useEffect(() => {
    // Initialize animations or effects
    gsap.fromTo(
      ".section-1",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".section-1",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{title || "Luxury Car Maintenance"}</title>
        <meta
          name="description"
          content="Learn about the importance of maintaining your luxury vehicle with Elite Motors Services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="md:h-screen h-[40vh] w-screen relative section-1">
          <Image
            unoptimized
            src={BackgroundImage}
            alt="Luxury Car Background"
            className="object-cover object-center h-full w-screen brightness-50"
            layout="fill"
            priority={true}
          />
          <div className="text-[#fff] absolute bottom-5 right-5 md:text-end text-center text-sm">
            <a href="/">Home</a> / <a href="/media-centre">Media center</a> /{" "}
            <span className="capitalize">
              luxury car maintenance keeping your high end vehicle in top shape
            </span>
          </div>
        </section>

        <div className="sm:px-[5%] pb-10">
          <div className="section-spaced !pt-5 max-w-7xl mx-auto ">
            <nav
              aria-label="breadcrumb"
              className="md:pb-10 md:pt-5 py-2 flex items-center md:justify-end justify-center"
            ></nav>

            {/* Content extracted from the image */}
            <article>
              <h1 className="common-heading mb-8 uppercase !leading-[120%]">
                luxury car maintenance keeping your high end vehicle in top
                shape
              </h1>
              <p className="mb-2 md:mb-3 common-description">
                Owning a luxury car represents a significant milestone,
                embodying both success and sophistication. Yet, this prized
                possession demands more than admiration—it also requires
                dedicated upkeep to maintain its performance and value. Regular
                maintenance provides the high level of comfort and driving
                enjoyment that first captivated you. Without proper care, the
                risk of expensive repairs and a reduced driving experience is at
                stake.
              </p>

              <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Importance of Regular Servicing for Luxury Vehicles
              </h3>
              <p className="mb-2 md:mb-3 common-description">
                Regular servicing is crucial for maintaining the performance and
                longevity of luxury vehicles. These high-end cars require
                meticulous self-care to preserve their sophisticated engineering
                and exceptional driving experience. Whether it&apos;s a Rolls
                Royce Ghost or Ferrari 488 Spider, driving a luxury car is a
                bespoke experience.
              </p>

              <h4 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Effects of Neglecting Maintenance on High-End Vehicles
              </h4>
              <p className="mb-2 md:mb-3 common-description">
                Regular servicing ensures luxury vehicles run smoothly, reducing
                the risk of breakdowns and accidents. Neglecting maintenance can
                lead to serious safety issues and costly repairs, such as engine
                misfires and poor fuel efficiency. Maintaining components like
                brakes, steering, and suspension is extremely important for
                safety.
              </p>
              <p>
                Skipping luxury car maintenance can result in inconvenient
                breakdowns and void warranties, leading to expensive repairs.
                Regular servicing also preserves the vehicle&apos;s appearance
                and performance, preventing minor issues from becoming major
                problems. Though it may seem inconvenient, routine maintenance
                ultimately saves time and money.
              </p>

              <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Common Issues to Watch Out for in High-End Cars
              </h3>
              <p className="mb-2 md:mb-3 common-description">
                Navigating the ownership of high-end vehicles presents its
                unique set of challenges and considerations. Among these,
                understanding and addressing common issues become imperative for
                maintaining the integrity and performance of these prestigious
                automobiles.
              </p>

              <h4 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Engine Performance and Tuning
              </h4>
              <p className="mb-2 md:mb-3 common-description">
                While modern engines are engineered to endure well beyond
                100,000 miles, proper maintenance is important to realise their
                full lifespan potential. With a proper car health check-up,
                it&apos;s not uncommon for engines to surpass the 200,000-mile
                mark. However, neglecting maintenance can lead to premature
                breakdowns and engine failure on the road.
              </p>

              <h4 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Electronic System Malfunctions
              </h4>
              <p className="mb-2 md:mb-3 common-description">
                Among the prevalent issues encountered in high-end vehicles,
                electronic system malfunctions often pose significant
                challenges. One common problem is a dead battery, resulting from
                various factors such as leaving lights on, a faulty alternator,
                or battery age. A dead battery can immobilize the vehicle,
                leaving owners stranded and requiring immediate attention
                through jumpstarting with another vehicle&apos;s engine.
              </p>

              <h4 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Suspension and Handling
              </h4>
              <p className="mb-2 md:mb-3 common-description">
                Despite their renowned on-road performance, high-end vehicles
                occasionally face challenges with their suspension systems,
                which are often more intricate. Common issues in luxury car
                models involve worn struts and shocks, compromised springs, and
                deteriorating suspension bushings. These issues can
                significantly affect the vehicle&apos;s handling and ride
                quality, demanding prompt attention to replace and rectify with
                spare parts.
              </p>

              <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Tips for Keeping Exotic Car Interiors Pristine
              </h3>
              <p className="mb-2 md:mb-3 common-description">
                Maintaining the pristine condition of exotic car interiors is a
                component of preserving their luxury and elegance. Here are some
                expert tips to help you keep your high-end vehicle&apos;s
                interior looking and feeling its best.
              </p>

              <ul className="mb-2 md:mb-3 common-description list-disc pl-5">
                <li>
                  <strong>Regular Cleaning and Dusting:</strong> Combat dust
                  accumulation in Dubai&apos;s desert environment by regularly
                  wiping down interior surfaces with a soft, lint-free
                  microfiber cloth.
                </li>
                <li>
                  <strong>Quality Leather Care:</strong> Preserve the elegance
                  of your leather upholstery with a reputable cleaner and
                  conditioner, protecting against drying and cracking.
                </li>
                <li>
                  <strong>Dashboard Protection:</strong> Shield your dashboard
                  from sun damage using a UV-resistant spray, maintaining its
                  original appearance and durability.
                </li>
                <li>
                  <strong>Carpet and Floor Mat Care:</strong> Maintain plush
                  carpets and floor mats with regular vacuuming and specialized
                  cleaning to preserve their integrity and color.
                </li>
                <li>
                  <strong>Wood and Metal Trim Maintenance:</strong> Keep wood
                  and metal trim accents gleaming with specific cleaners and
                  polishes designed for these materials.
                </li>
                <li>
                  <strong>Window and Glass Care:</strong> Ensure crystal-clear
                  windows with a high-quality glass cleaner and lint-free cloth,
                  enhancing both safety and aesthetics.
                </li>
                <li>
                  <strong>Upholstery Protection:</strong> Apply fabric protector
                  spray to seats and carpets to prevent stains and simplify
                  cleanup, preserving their pristine condition.
                </li>
                <li>
                  <strong>Odor Control:</strong> Maintain a fresh interior aroma
                  with car-specific odor eliminators or fresheners, enhancing
                  the driving experience.
                </li>
                <li>
                  <strong>Electronic Maintenance:</strong> Keep touchscreen
                  displays and controls clean and smudge-free with a gentle
                  electronics cleaner and microfiber cloth.
                </li>
                <li>
                  <strong>Seat Covers and Floor Mats:</strong> Protect original
                  upholstery and carpeting with high-quality seat covers and
                  floor mats, adding luxury and personalization.
                </li>
                <li>
                  <strong>Leather Seat Conditioning:</strong> Consult
                  professionals for a conditioning schedule tailored to
                  Dubai&apos;s climate, ensuring leather seats remain supple and
                  luxurious.
                </li>
                <li>
                  <strong>Vent Cleaning for Fresh Air:</strong> Maintain air
                  quality by keeping air vents clean and dust-free, ensuring
                  circulation of fresh air within the cabin.
                </li>
              </ul>
              <p className="mb-2 md:mb-3 common-description">
                By adhering to these expert tips and dedicating attention to
                interior care, exotic car owners can ensure their vehicles
                maintain the luxury and sophistication for which they are
                renowned.
              </p>

              <h3 className="common-heading mb-8 md:mt-6 mt-6 uppercase !font-normal !leading-[120%]">
                Choosing the Right Repair Shop for High-End Vehicles
              </h3>
              <p className="mb-2 md:mb-3 common-description">
                Selecting the right repair shop for high-end vehicles is crucial
                to ensure that luxury cars receive the specialized care and
                attention they require. Here&apos;s a guide to help you choose
                the right repair shop for your luxury car maintenance needs.
              </p>

              <ul className="mb-2 md:mb-3 common-description list-disc pl-5">
                <li>
                  <strong>Specialization and Expertise:</strong> Choose repair
                  shops with a proven track record of expertise in high-end
                  vehicles and certifications in luxury car repair.
                </li>
                <li>
                  <strong>Advanced Diagnostic Equipment:</strong> Opt for repair
                  facilities equipped with advanced diagnostic tools and
                  technology to accurately diagnose and address complex issues.
                </li>
                <li>
                  <strong>OEM Parts and Warranty:</strong> Ensure the repair
                  shop uses Original Equipment Manufacturer (OEM) parts and
                  provides warranties for repairs, preserving the integrity of
                  luxury vehicles.
                </li>
                <li>
                  <strong>Positive Customer Reviews:</strong> Research customer
                  reviews and testimonials to gauge the repair shop&apos;s
                  reputation and customer satisfaction.
                </li>
                <li>
                  <strong>Transparent Pricing and Estimates:</strong> Seek
                  repair shops that provide transparent pricing and detailed
                  estimates for repairs, ensuring no hidden costs.
                </li>
                <li>
                  <strong>Professionalism and Communication:</strong> Choose
                  repair facilities that prioritize clear communication and
                  professional service, addressing any questions or concerns
                  with transparency.
                </li>
                <li>
                  <strong>Authorized Dealership Service:</strong> Consider
                  authorized dealerships for specialized repairs and
                  maintenance, benefiting from manufacturer-specific knowledge
                  and resources.
                </li>
              </ul>
              <p>
                Selecting a reputable repair shop ensures that high-end vehicles
                receive the care and expertise they deserve, maintaining their
                performance, appearance, and longevity.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page;
