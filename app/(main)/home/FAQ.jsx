"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "What industries does Elite Group Holding operate in?",
    answer: "We are a diversified UAE-based conglomerate with expertise spanning Automotive, Real Estate, Investment, and E-commerce.",
  },
  {
    question: "Where is your office located?",
    answer: "We are located in Al Quoz Industrial Area 3.",
  },
  {
    question: "Are you open to partnerships?",
    answer: "Yes. Kindly reach out to us on xxxx.",
  },
  {
    question: "How does Elite Group Holding promote diversity and inclusion?",
    answer: 'At Elite Group Holding, our belief in "People First, Always" shapes everything we do. We actively invest in a culture that nurtures personal growth, encourages innovation, and celebrates ownership. Our culture is not static; it\'s a dynamic tapestry of diverse nationalities, generations, and lived experiences, each enriching our collective journey and driving us forward with purpose.',
  },
  {
    question: "What automobile brands are associated with Elite Group Holding?",
    answer: "We are the exclusive partners and official distributors of Jetour, SOUEAST, and Zenvo.",
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
      <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase mb-8 md:mb-10">
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
