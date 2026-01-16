"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from 'axios';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { apiUrl, imgUrl } from "@/lib/constants";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '+971 ',
    email: '',
    sector: '',
    message: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageData, setPageData] = useState([]);

  const [banner, setBanner] = useState(null);
  const [seoData, setSeoData] = useState(null); // New state for SEO data


  useEffect(() => {
    // Check if the data exists in local storage
    const cachedData = localStorage.getItem('banners');
    if (cachedData) {
      // If it exists, use it
      setBanner(JSON.parse(cachedData));
      const bnr = JSON.parse(cachedData)?.find(banner => banner.page == 'Contact us');

      console.log(bnr)

      setBanner(bnr);

    } else {
      // If not, fetch from API and cache it
      fetch(apiUrl + `get-banners`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('banners', JSON.stringify(data.banners));
          setBanner(data?.banners?.find(banner => banner.page == 'Contact us'));


        });
    }

    fetch(apiUrl + 'get-seo-data?page=Contact us')
      .then((response) => response.json())
      .then((data) => {
        setSeoData(data?.seo); // Store SEO data in the state

      });
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
    
    // Handle phone number with +971 prefix
    if (name === 'phoneNumber') {
      // Remove any existing +971 to avoid duplication
      let cleanedValue = value.replace(/^\+971\s*/, '');
      
      // Remove any non-digit characters except + at the start
      cleanedValue = cleanedValue.replace(/[^\d]/g, '');
      
      // Always prepend +971
      const phoneWithPrefix = '+971' + (cleanedValue ? ' ' + cleanedValue : '');
      
      setFormData(prevState => ({
        ...prevState,
        [name]: phoneWithPrefix
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/send-email', formData);
      if (response.data.success) {
        const saveResponse = await axios.post(apiUrl + 'save-enquiry', formData);
        if (saveResponse.data.success) {

          setShowThankYou(true);
          setFormData({
            fullName: '',
            phoneNumber: '+971 ',
            email: '',
            sector: '',
            message: '',
          });
          setTimeout(() => setShowThankYou(false), 5000);
        }
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch images or posts asynchronously if not passed as props
        const response = await fetch(apiUrl + `get-contact-us`);  // Your API endpoint
        const data = await response.json();

        setPageData(data?.contact);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    // Set the document title
    document.title = seoData?.metaTitle || 'Elite group holdings';

    // Set the meta description
    let descriptionMetaTag = document.querySelector("meta[name='description']");
    if (!descriptionMetaTag) {
      descriptionMetaTag = document.createElement('meta');
      descriptionMetaTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionMetaTag);
    }
    descriptionMetaTag.setAttribute('content', seoData?.metaDescription || 'Elite group holdings');

    // Set the meta keywords
    let keywordsMetaTag = document.querySelector("meta[name='keywords']");
    if (!keywordsMetaTag) {
      keywordsMetaTag = document.createElement('meta');
      keywordsMetaTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMetaTag);
    }
    keywordsMetaTag.setAttribute('content', seoData?.metaKeywords || 'elite, group');

    // Set Open Graph (og) title
    let ogTitleTag = document.querySelector("meta[property='og:title']");
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', seoData?.ogTitle || 'Elite group holdings');

    // Set Open Graph (og) description
    let ogDescriptionTag = document.querySelector("meta[property='og:description']");
    if (!ogDescriptionTag) {
      ogDescriptionTag = document.createElement('meta');
      ogDescriptionTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescriptionTag);
    }
    ogDescriptionTag.setAttribute('content', seoData?.ogDescription || 'Elite group holdings');

    // Set Open Graph (og) image
    let ogImageTag = document.querySelector("meta[property='og:image']");
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', imgUrl + seoData?.ogImage || 'https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/egh-elitecars-fullwhite-1.png');

    // Set Open Graph (og) url
    let ogUrlTag = document.querySelector("meta[property='og:url']");
    if (!ogUrlTag) {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlTag);
    }
    ogUrlTag.setAttribute('content', seoData?.ogUrl || 'https://elitegroupholding.com/');
  }, [seoData]);
  return (
    <>
      <Navbar />
      {banner &&

        <div className="h-screen w-screen relative section-1">
          <div
            className="object-cover object-center max-md:hidden h-screen w-screen brightness-50"
            style={{
              backgroundImage: `url('${imgUrl}${banner?.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div
            className="object-cover object-center md:hidden h-screen w-screen brightness-50"
            style={{
              backgroundImage: `url('${imgUrl}${banner?.mobile_banner}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
            <div className="text-lg md:text-xl font-medium mb-4 text-1">
              {banner?.title2}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-2">
              {banner?.title1}
            </h1>
          </div>
          <div className="absolute bottom-0 right-0 px-[5%]">
            <div className="py-5 flex items-center justify-end">
              <div className="text-[#fff]">
                <a href="">Home</a> / Contact us
              </div>
            </div>
          </div>
        </div>
      }
      {pageData && pageData.length !== 0 &&
        <div>

          <div className="px-[5%]">
            <div className="text-center text-[#141414] sm:pt-10 pb-14 section-2">
              <div className="mt-10 sm:mt-5 common-heading text-1 text-left sm:text-center" style={{ color: '#fb511e' }}>
                {pageData[0]?.title}
              </div>
              <p className="py-3 md:py-5 text-2 common-description text-left sm:text-center">
                {pageData[0]?.title2}
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
                  <div className="relative flex items-center border border-1 border-[#141414B2] rounded-xl overflow-hidden">
                    <span className="text-[#141414B2] px-4 py-1 whitespace-nowrap border-r border-[#141414B2]">+971</span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber.replace(/^\+971\s*/, '') || ''}
                      onChange={handleInputChange}
                      className="outline-none text-[#141414B2] border-none px-4 py-1 flex-1"
                      placeholder="Telephone Number *"
                      required
                    />
                  </div>
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
                    <button
                      type="submit"
                      className={`max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
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
                src={pageData[0]?.iframesrc}
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="border-r border-black hidden sm:block absolute bg-[#F7F7F7] max-md:w-1/3 w-1/4 h-[120%] rotate-[9deg] lg:rotate-[11deg] xl:rotate-[15deg] -top-10 xl:-right-[18%] lg:-right-[17%] md:-right-[18%] sm:-right-[14%]"></div>
            </div>

            <div className="py-5 sm:py-0 md:grid md:place-content-center max-md:flex max-md:flex-col max-md:justify-center px-[5%] sm:px-0 md:w-1/2 h-full section-3-1">
              <div className="mb-8 common-heading" style={{ color: '#fb511e' }}>{pageData[0]?.address_head}</div>
              <p className="common-description" dangerouslySetInnerHTML={{ __html: pageData[0]?.address }} >
              </p>
              <p className="mt-5 common-description">
                <a href={`mailto:${pageData[0]?.email}`}>{pageData[0]?.email}</a>
              </p>
              {/* Uncommented the phone block and added the phone link */}
              {/* <p className="mt-5 common-description">
  <a href={`tel:${pageData[0]?.phone}`}>{pageData[0]?.phone}</a>
</p> */}

              <a
                href="tel:97128060000"
                className="mt-5 block max-sm:text-xs hover:bg-[#fb511e] max-sm:mt-3 hover:text-white transition-all border border-1 border-black hover:border-[#fb511e]  rounded-[8px] sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
              >
                International (outside UAE):  +971 2 806 0000
              </a>

              <a
                href="tel:800535483"
                className="mt-5 block max-sm:text-xs hover:bg-[#fb511e] max-sm:mt-3 hover:text-white transition-all border border-1 border-black hover:border-[#fb511e]  rounded-[8px] sm:rounded-xl px-5 sm:px-10 py-1 md:py-3 button-1"
              >
                Local (within UAE): 800-5-ELITE (800-5-35483)
              </a>
              {/* <p className="mt-5 common-description">
                International (outside UAE): <a href="tel:+97128060000">+971 2 806 0000</a>
                <br />
                <a href="tel:800535483">Local (within UAE): 800-5-ELITE (800-5-35483)</a>
              </p> */}

            </div>
          </div>
        </div>
      }

      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
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