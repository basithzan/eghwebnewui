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
      <form onSubmit={handleSubmit}>
        {/* ... (keep existing form fields) */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
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