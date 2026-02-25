"use client";

import React, { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "Suraj Nair",
    time: "2 months ago",
    stars: 5,
    text: "At Elite Group Holding, we are committed to enhancing the quality of life within the communities we serve, continuously seeking avenues for fostering growth and making a positive impact on the world and our community.",
  },
  {
    name: "Ahmed Al Mansouri",
    time: "3 months ago",
    stars: 5,
    text: "Outstanding experience with Elite Group Holding. Their professionalism and commitment to excellence is truly remarkable. Highly recommend their services to anyone looking for a trusted partner.",
  },
  {
    name: "Sarah Thompson",
    time: "4 months ago",
    stars: 5,
    text: "Elite Group Holding has set a new standard in the industry. Their attention to detail and customer-first approach makes them stand out. A truly world-class organization.",
  },
  {
    name: "Mohammed Rashid",
    time: "5 months ago",
    stars: 5,
    text: "Exceptional service and a team that truly cares about delivering the best. Elite Group Holding continues to impress with their dedication to quality and innovation.",
  },
  {
    name: "Priya Sharma",
    time: "6 months ago",
    stars: 5,
    text: "Working with Elite Group Holding has been a wonderful experience. Their diverse portfolio and commitment to excellence make them a leader in every sector they operate in.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => setCurrent(index), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = TESTIMONIALS[current];

  return (
    <section className="w-full bg-white px-[5%] py-12 md:py-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase">
          Testimonials
        </h2>
        {/* Google Reviews logo */}
        <div className="flex-shrink-0 text-right">
          <svg viewBox="0 0 120 44" className="w-28 md:w-36 h-auto">
            <text x="0" y="22" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">
              <tspan fill="#4285F4">G</tspan>
              <tspan fill="#EA4335">o</tspan>
              <tspan fill="#FBBC05">o</tspan>
              <tspan fill="#4285F4">g</tspan>
              <tspan fill="#34A853">l</tspan>
              <tspan fill="#EA4335">e</tspan>
            </text>
            <text x="0" y="40" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#666">Reviews</text>
            <text x="62" y="40" fontSize="14" fill="#FBBC05">★★★★★</text>
          </svg>
        </div>
      </div>

      {/* Review card */}
      <div className="border-2 border-[#fb511e] rounded-sm p-6 md:p-10 transition-all duration-300">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
            {review.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-[#1a1a1a]">
              {review.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-[#FBBC05] text-sm">
                {"★".repeat(review.stars)}
              </span>
              <span className="text-gray-400 text-xs md:text-sm">
                {review.time}
              </span>
            </div>
          </div>
        </div>

        {/* Review text */}
        <p className="text-[#282828] text-sm md:text-base leading-relaxed">
          {review.text}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-6">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              current === index
                ? "bg-black border-gray-800 scale-110"
                : "bg-transparent border-gray-400 hover:border-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
