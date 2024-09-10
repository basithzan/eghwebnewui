"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImage from "/public/assets/contact/banner-desktop.jpg";
import BackgroundImagemobile from "/public/assets/contact/banner-mobile.jpg";
import Image from "next/image";
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    sector: '',
    message: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');

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
        ".section-2 .text-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .text-2",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-2 .section-2-1",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top bottom",
        },
      })
      .fromTo(
        ".section-3 .section-3-1",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        ".section-3 .section-3-2",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', formData);
      if (response.data.success) {
        setShowThankYou(true);
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          sector: '',
          message: '',
        });
        setTimeout(() => setShowThankYou(false), 5000);
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen relative section-1">
        <div 
          className="object-cover object-center max-md:hidden h-screen w-screen brightness-50"
          style={{
            backgroundImage: "url('/assets/contact/banner-desktop.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div 
          className="object-cover object-center md:hidden h-screen w-screen brightness-50"
          style={{
            backgroundImage: "url('/assets/contact/banner-mobile.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
          <div className="text-lg md:text-xl font-medium mb-4 text-1">
            CONTACT US
          </div>
          <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2">
            CUSTOMER CARE
          </div>
        </div>
        <div className="absolute bottom-0 right-0 px-[5%]">
          <div className="py-5 flex items-center justify-end">
            <div className="text-[#fff]">
              <a href="">Home</a> / Contact us
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%]">
        <div className="text-center text-[#141414] sm:pt-10 pb-14 section-2">
          <div className="mt-10 sm:mt-5 common-heading text-1 text-left sm:text-center" style={{ color: '#fb511e' }}>
            CONTACT US TODAY
          </div>
          <p className="py-3 md:py-5 text-2 common-description text-left sm:text-center">
            Please fill in the form below and
            we will try our best to get back to you as soon as we can.
          </p>

          <div className="section-2-1">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 w-full md:w-3/4 mx-auto gap-5 md:my-10 my-5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-1"
                placeholder="Full Name *"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-1"
                placeholder="Telephone Number *"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-1"
                placeholder="Email Address *"
                required
              />

              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                className="outline-none text-[#141414B2] border border-1 appearance-none border-[#141414B2] rounded-xl px-4 py-1"
                required
              >
                <option value="" disabled>Select Sectors *</option>
                <option value="Automotive">Automotive</option>
                <option value="Investments">Investments</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Ecommerce">Ecommerce</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="text-[#141414B2] border border-1 border-[#141414B2] rounded-3xl px-4 py-1.5 md:col-span-2"
                rows={4}
                placeholder="Message"
              ></textarea>

              <div className="md:col-span-2 flex justify-center">
                <button type="submit" className="max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1">
                  Submit
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex max-sm:flex-col bg-[#F7F7F7] border border-1 border-black sm:h-[60vh] section-3">
        <div className="relative sm:w-[56%] max-sm:mt-4 sm:grow sm:shrink-0 sm:-me-[3.5%] overflow-hidden section-3-2">
          <iframe
            className="w-full h-[400px] sm:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0640573720193!2d55.2168977!3d25.133525100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd1a26ee393%3A0x31908953c6606f5!2sThe%20Elite%20Cars!5e0!3m2!1sen!2sin!4v1721760591057!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="border-r border-black hidden sm:block absolute bg-[#F7F7F7] max-md:w-1/3 w-1/4 h-[120%] rotate-[9deg] lg:rotate-[11deg] xl:rotate-[15deg] -top-10 xl:-right-[18%] lg:-right-[17%] md:-right-[18%] sm:-right-[14%]"></div>
        </div>

        <div className="py-5 sm:py-0 md:grid md:place-content-center max-md:flex max-md:flex-col max-md:justify-center px-[5%] sm:px-0 md:w-1/2 h-full section-3-1">
          <div className="mb-8 common-heading" style={{ color: '#fb511e' }}>HEADQUARTERS</div>
          <p className="common-description">
            723 Sheikh Zayed Road, P. O. Box 393316
          </p>
          <p className="common-description">Dubai, U.A.E.</p>
          <p className="mt-5 common-description">
            inquiry@elitegroupholding.com
          </p>
          <p className="mt-5 common-description">+971 2 806 0000 </p>
          <p className="mt-5 common-description">800-535483 </p>
        </div>
      </div>

      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md border-l-4 border-red-500">
            <h2 className="text-xl font-semibold mb-2">Error</h2>
            <p>{error}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ContactUs;
