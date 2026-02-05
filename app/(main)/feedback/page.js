"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { imgUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const CASE_REASONS = [
  { value: "", label: "--None--" },
  { value: "Product Related", label: "Product Related" },
  { value: "Technical Support", label: "Technical Support" },
  { value: "Accounts and Invoice Related", label: "Accounts and Invoice Related" },
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Service Related", label: "Service Related" },
  { value: "Sales Related", label: "Sales Related" },
  { value: "Finance and Insurance", label: "Finance and Insurance" },
  { value: "Spare Parts Related", label: "Spare Parts Related" },
];

const Feedback = () => {
  const [banner, setBanner] = useState(null);
  const [phoneDigits, setPhoneDigits] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    reason: "",
    vin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const cachedData = localStorage.getItem("banners");
    if (cachedData) {
      const bnr = JSON.parse(cachedData)?.find(
        (b) => b.page?.toLowerCase() === "feedback"
      );
      setBanner(bnr || null);
    }
  }, []);

  useEffect(() => {
    if (!document.querySelector(".section-1 .text-1")) return;
    gsap
      .timeline({ duration: 0.5, ease: "power3.out" })
      .fromTo(".section-1 .text-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(".section-1 .text-2", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

    if (document.querySelector(".section-2")) {
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
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
    }
  }, []);

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/[^\d]/g, "").slice(0, 9);
    setPhoneDigits(cleaned);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const retURL =
        typeof window !== "undefined"
          ? `${window.location.origin}/feedback`
          : "https://elitegroupholding.com/feedback";
      const res = await fetch("/api/save/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: phoneDigits ? `+971 ${phoneDigits}` : "+971 ",
          subject: formData.subject,
          description: formData.description,
          reason: formData.reason,
          vin: formData.vin,
          retURL,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit feedback");
      }
      setShowThankYou(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        description: "",
        reason: "",
        vin: "",
      });
      setPhoneDigits("");
      setTimeout(() => setShowThankYou(false), 5000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      {banner && (
        <div className="h-screen w-screen relative section-1">
          <div
            className="object-cover object-center max-md:hidden h-screen w-screen brightness-50"
            style={{
              backgroundImage: `url('${imgUrl}${banner?.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="object-cover object-center md:hidden h-screen w-screen brightness-50"
            style={{
              backgroundImage: `url('${imgUrl}${banner?.mobile_banner}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
            <div className="text-lg md:text-xl font-medium mb-4 text-1">
              Share your experience
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-2">
              Feedback
            </h1>
          </div>
          <div className="absolute bottom-0 right-0 px-[5%]">
            <div className="py-5 flex items-center justify-end">
              <div className="text-[#fff]">
                <a href="/">Home</a> / Feedback
              </div>
            </div>
          </div>
        </div>
      )}

      {!banner && (
        <div className="h-[40vh] w-screen relative section-1 bg-[#141414] flex items-center justify-center">
          <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
            <div className="text-lg md:text-xl font-medium mb-4 text-1">
              Share your experience
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-2">
              Feedback
            </h1>
          </div>
          <div className="absolute bottom-0 right-0 px-[5%]">
            <div className="py-5 flex items-center justify-end">
              <div className="text-[#fff]">
                <a href="/">Home</a> / Feedback
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-[5%]">
        <div className="text-center text-[#141414] sm:pt-10 pb-14 section-2">
          <div
            className="mt-10 sm:mt-5 common-heading text-1 text-left sm:text-center"
            style={{ color: "#fb511e" }}
          >
            We value your feedback
          </div>
          <p className="py-3 md:py-5 text-2 common-description text-left sm:text-center">
            Please complete the form below. All fields marked with * are
            required.
          </p>

          <div className="section-2-1">
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 w-full md:max-w-3xl mx-auto gap-5 md:my-10 my-5"
            >
              {/* 1. Name */}
              <div className="md:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  maxLength={80}
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-2 w-full"
                  placeholder="Your name"
                />
              </div>

              {/* 2. Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  Phone *
                </label>
                <div className="relative flex items-center border border-1 border-[#141414B2] rounded-xl overflow-hidden">
                  <span className="text-[#141414B2] px-4 py-2 whitespace-nowrap border-r border-[#141414B2]">
                    +971
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    value={phoneDigits}
                    onChange={handlePhoneChange}
                    required
                    maxLength={9}
                    className="outline-none text-[#141414B2] border-none px-4 py-2 flex-1"
                    placeholder="50 123 4567"
                  />
                </div>
              </div>

              {/* 3. Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={80}
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-2 w-full"
                  placeholder="your@email.com"
                />
              </div>

              {/* 4. Reason */}
              <div className="md:col-span-2">
                <label
                  htmlFor="reason"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  Reason *
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-2 w-full appearance-none bg-white"
                >
                  {CASE_REASONS.map((opt) => (
                    <option key={opt.value || "none"} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. VIN */}
              <div className="md:col-span-2">
                <label
                  htmlFor="vin"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  VIN
                </label>
                <input
                  id="vin"
                  name="vin"
                  type="text"
                  maxLength={100}
                  value={formData.vin}
                  onChange={handleInputChange}
                  className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-2 w-full"
                  placeholder="Vehicle Identification Number (optional)"
                />
              </div>

              {/* 6. Subject */}
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  maxLength={80}
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-2 w-full"
                  placeholder="Subject"
                />
              </div>

              {/* 7. Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-left text-[#141414] mb-1 text-sm"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-xl px-4 py-2 w-full resize-y"
                  placeholder="Please describe your feedback..."
                />
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`max-sm:text-xs bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-xl px-5 sm:px-10 py-2 md:py-3 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ms-2 sm:ms-4 inline w-4 h-4 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4">
            <h2 className="text-xl font-semibold mb-2">Thank you</h2>
            <p>Your feedback has been submitted successfully. We appreciate your input.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 border-l-4 border-red-500">
            <h2 className="text-xl font-semibold mb-2">Error</h2>
            <p>{error}</p>
            <button
              type="button"
              onClick={() => setError("")}
              className="mt-4 text-[#fb511e] hover:underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Feedback;
