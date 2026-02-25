"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "What industries does Elite Group Holding operate in?",
    answer: "Elite Group Holding operates across multiple sectors including automotive, real estate & contracting, investments, and e-commerce. We are a diversified business group committed to driving growth and excellence across all our industries.",
  },
  {
    question: "Where is your office located?",
    answer: "Our headquarters are located in Dubai, UAE, at The Elite Cars, 4th St - Al Quoz - Al Quoz Industrial Area 3. We have a strategic presence across the UAE to ensure accessibility for our valued clients and partners.",
  },
  {
    question: "Are you open to partnerships?",
    answer: "Yes, we are always open to strategic partnerships that align with our vision and values. We believe in creating lasting relationships that drive mutual growth and innovation. Please reach out to us through our contact page.",
  },
  {
    question: "How does Elite Group Holding promote diversity and inclusion?",
    answer: "We are committed to fostering a diverse and inclusive workplace. Our team comprises professionals from various backgrounds, cultures, and expertise areas, reflecting the cosmopolitan nature of the UAE.",
  },
  {
    question: "What automobile brands are associated with Elite Group Holding?",
    answer: "We are proud partners of several global automobile brands including Jetour, Zenvo Automotive, SOUEAST, and The Elite Cars - our premier multi-brand luxury dealership specializing in high-end automotive marques.",
  },
  {
    question: "What industries does Elite Group Holding operate in?",
    answer: "Elite Group Holding is a diversified conglomerate operating in automotive, real estate & contracting, investments, and e-commerce sectors across the UAE and the broader Middle East region.",
  },
];

const ChevronIcon = ({ isOpen }) => (
  <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#fb911e] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,7 9,12 14,7" />
    </svg>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split into two columns
  const leftColumn = FAQS.filter((_, i) => i % 2 === 0);
  const rightColumn = FAQS.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full bg-[#f0f0f0] px-[5%] py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-[#fb511e] mb-8 md:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4 md:gap-6">
          {leftColumn.map((faq, i) => {
            const realIndex = i * 2;
            const isOpen = openIndex === realIndex;
            return (
              <div key={realIndex}>
                <button
                  type="button"
                  onClick={() => toggle(realIndex)}
                  className="w-full flex items-center justify-between gap-4 border-2 border-[#fb911e] rounded-xl px-6 py-3 md:py-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base text-[#282828] text-left">
                    {faq.question}
                  </span>
                  <ChevronIcon isOpen={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-6 pt-3 pb-1 text-sm text-[#555] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 md:gap-6">
          {rightColumn.map((faq, i) => {
            const realIndex = i * 2 + 1;
            const isOpen = openIndex === realIndex;
            return (
              <div key={realIndex}>
                <button
                  type="button"
                  onClick={() => toggle(realIndex)}
                  className="w-full flex items-center justify-between gap-4 border-2 border-[#fb911e] rounded-xl px-6 py-3 md:py-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base text-[#282828] text-left">
                    {faq.question}
                  </span>
                  <ChevronIcon isOpen={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-6 pt-3 pb-1 text-sm text-[#555] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
