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
    // ... (keep existing GSAP animations)
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
      {/* ... (keep existing JSX) */}
      <div className="section-1">
        <h1 className="text-1">Contact Us</h1>
        <p className="text-2">Please fill in the form below and we will try our best to get back to you as soon as we can.</p>
      </div>
      <div className="section-2">
        <div className="text-1">
          <p>723 Sheikh Zayed Road, P. O. Box 393316</p>
          <p>Dubai, U.A.E.</p>
        </div>
        <div className="text-2">
          <p>inquiry@elitegroupholding.com</p>
          <p>+971 2 806 0000</p>
          <p>800-535483</p>
        </div>
        <form onSubmit={handleSubmit} className="section-2-1">
          {/* ... (keep existing form fields) */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleInputChange}
            placeholder="Sector"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <Footer />
    </>
  );
};

export default ContactUs;