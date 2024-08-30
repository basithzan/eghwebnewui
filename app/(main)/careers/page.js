"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImageDesktop from "/public/assets/career/banner-desktop.jpg";
import BackgroundImageMobile from "/public/assets/career/banner-mobile.jpg";
import Img from "/public/assets/career/join-our-team.jpg";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
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
        ".section-2 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .text-2",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .text-3",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-3 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .text-2",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .button-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen relative section-1">
        <div className="block md:hidden">
          <Image
            unoptimized
            src={BackgroundImageMobile}
            alt="Mobile Background"
            className="object-cover object-center h-screen w-screen brightness-[0.3] sm:brightness-50"
          />
        </div>
        <div className="hidden md:block">
          <Image
            unoptimized
            src={BackgroundImageDesktop}
            alt="Desktop Background"
            className="object-cover object-center h-screen w-screen brightness-[0.3] sm:brightness-50"
          />
        </div>

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
          <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">
            CAREERS
          </div>
          <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">
            JOIN US
          </div>
        </div>
        <div className="absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <Link href="/">Home</Link> / Careers
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7]">
        <div className="px-[5%]">
          <div className="py-10 flex max-md:flex-col-reverse max-md:gap-3 md:flex-row-reverse md:items-center section-2">
            <div className="relative md:w-1/2 md:grow md:shrink-0 md:-me-[5.65%] overflow-hidden img-1">
              <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 -top-10 xl:-left-[17%] lg:-left-[14%] md:-left-[12%] sm:-left-[14%]"></div>
              <Image
                unoptimized
                src={Img}
                alt="Join our team image"
                className="w-full sm:h-[20rem] max-md:aspect-square md:h-[26rem] max-md:object-center object-cover"
              />
            </div>
            <div className="xl:pe-10 md:shrink-1 md:w-1/2">
              <div className="common-heading mb-8 text-1" style={{ color: '#fb511e' }}>JOIN OUR TEAM</div>
              <p className="text-md md:text-lg font-semibold uppercase line-clamp-2 hover:line-clamp-none md:leading-8 mb-4">
                Where Luxury Meets Opportunity
              </p>
              <p className="mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] text-2">
                At Elite Group Holding, we live by our commitment to make a
                positive impact on the lives of our customers, partners,
                stakeholders, and employees through outstanding products and
                customer-focused services.
              </p>
              <p className="mb-4 text-[#282828] text-base md:text-base lg:text-[1.1rem] lg:leading-[1.75rem] text-2">
                We are constantly searching for motivated individuals who are
                dedicated to innovation and excellence, who view challenges as
                opportunities and successes as inspiration to join our team at
                various levels in industries such as automotive, real estate and
                construction, e-commerce and investments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5%]">
        <div className="my-20 section-3">
          <div className="common-heading mb-10 text-1 uppercase" style={{ color: '#fb511e' }}>
            Why Choose ELITE GROUP HOLDING?
          </div>
          <div className="px-5">
            <ul className="list-disc mb-8 text-2">
              <li className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2">
                <strong className=" text-[#282828]">
                  Career Growth Opportunities
                </strong>
                : We are committed to the professional development of our
                employees. With regular training sessions, mentorship programs,
                and clear career paths, Elite Group Holding provides ample
                opportunities for you to advance and grow within the company.
              </li>
              <li className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2">
                <strong className=" text-[#282828]">Collaborative Culture</strong>
                : Our success is built on teamwork. We cultivate a collaborative
                environment where every contribution is valued. Working here
                means being part of a supportive and inclusive team that works
                together to achieve common goals.
              </li>
              <li className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2">
                <strong className=" text-[#282828]">
                  Commitment to Excellence and Integrity
                </strong>
                : Our commitment to excellence extends beyond our projects to
                our workplace culture. We uphold the highest standards of
                integrity and ethics in all our operations, ensuring a
                respectful and transparent working environment.
              </li>
              <li className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2">
                <strong className=" text-[#282828]">
                  Community Engagement and Sustainability
                </strong>
                : Elite Group Holding is dedicated to making a positive impact
                on society. We engage in various community service initiatives
                and prioritize sustainable practices, giving you the chance to
                contribute to meaningful causes.
              </li>
            </ul>
            <p className="mt-5 text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem] text-2 text-center">
              <strong className="text-[#282828]">
                Become a Part of Elite Group Holding:
              </strong>
              <br /> Embark on a rewarding career journey with Elite Group
              Holding. Join us and be part of a team that values innovation,
              excellence, and collaboration. Together, we can achieve great
              things.
            </p>
            <div className="flex justify-center mt-10">
  <a
    href="https://www.linkedin.com/company/elite-group-holding/jobs"
    target="_blank"
    rel="noopener noreferrer"
    className="block max-sm:text-xs uppercase md:mt-9 max-md:mt-5 max-md:mb-16 bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
  >
    SUBMIT CV
  </a>
</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
