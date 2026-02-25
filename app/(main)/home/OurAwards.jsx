"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

const AWARDS = [
  { image: "/awards/post-first.jpg", alt: "Images RetailME Awards - Customer Service Initiative of the Year" },
  { image: "/awards/post-second.jpg", alt: "Emiratization Best Partner" },
  { image: "/awards/post-third.jpg", alt: "Superbrands UAE's Choice" },
  { image: "/awards/post-fourth.jpg", alt: "Outstanding Performance, Innovation & Brand Reputation Awards" },
  { image: "/awards/post-fifth.jpg", alt: "Community Creation Campaign of the Year (Automobile)" },
  { image: "/awards/post-sixth.jpg", alt: "MENA Digital Awards - Best Use of Instagram" },
];

const SLIDES_VISIBLE = 3.5; // 3 full columns + half of the 4th
const TOTAL_DOTS = Math.ceil(AWARDS.length - SLIDES_VISIBLE + 1);

const OurAwards = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideWidthPx = (el) => el ? el.clientWidth / SLIDES_VISIBLE : 0;

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const width = slideWidthPx(el);
    const index = Math.round(el.scrollLeft / width);
    setCurrentSlide(Math.min(Math.max(0, index), TOTAL_DOTS - 1));
  }, []);

  const goToSlide = useCallback((index) => {
    const el = scrollRef.current;
    if (!el) return;
    const width = slideWidthPx(el);
    el.scrollTo({ left: index * width, behavior: "smooth" });
    setCurrentSlide(index);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev >= TOTAL_DOTS - 1 ? 0 : prev + 1;
        goToSlide(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [goToSlide]);

  return (
    <section className="w-screen bg-white overflow-hidden">
      <div className="w-full px-[5%] py-8 md:py-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-[#fb511e] mb-3">
          OUR AWARDS
        </h2>
        <p className="text-gray-800 text-sm md:text-base max-w-2xl">
          Our success as a UAE business group with global partnerships is reflected in the awards and recognition we have received.
        </p>
      </div>

      <div className="w-screen relative bg-[#0d0d0d]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-[#fb511e]/30 blur-sm" />
          <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-amber-400/40 blur-sm" />
          <div className="absolute bottom-1/3 left-[20%] w-1 h-1 rounded-full bg-[#fb511e]/25 blur-sm" />
          <div className="absolute top-2/3 right-[25%] w-2 h-2 rounded-full bg-amber-300/25 blur-sm" />
          <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#fb511e]/20 blur-sm" />
          <div className="absolute top-1/3 left-[30%] w-1.5 h-1.5 rounded-full bg-amber-500/30 blur-sm" />
          <div className="absolute bottom-1/4 right-[10%] w-1 h-1 rounded-full bg-[#fb511e]/20 blur-sm" />
        </div>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="relative z-10 w-full h-[200px] md:h-[244px] flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth awards-scroll-hide py-4 md:py-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {AWARDS.map((award, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 h-full snap-center snap-always box-border"
              style={{
                width: "calc(100% / 3.5)",
                marginLeft: index === 0 ? 0 : "-1%",
                zIndex: index,
              }}
            >
              {/* Gold border layer */}
              <div
                className="absolute inset-0 bg-[#c9a84e]"
                style={{
                  clipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)",
                  WebkitClipPath: "polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)",
                }}
              />
              {/* Inner image area */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: "polygon(7.2% 1.2%, 99.6% 1.2%, 92.8% 98.8%, 0.4% 98.8%)",
                  WebkitClipPath: "polygon(7.2% 1.2%, 99.6% 1.2%, 92.8% 98.8%, 0.4% 98.8%)",
                }}
              >
                <img
                  src={award.image}
                  alt={award.alt ?? "Award"}
                  className="w-full h-full object-cover object-center block"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-6 bg-white gap-1.5">
        {Array.from({ length: TOTAL_DOTS }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full border-2 transition-all ${
              currentSlide === index
                ? "bg-black border-gray-800 scale-110"
                : "bg-transparent border-gray-400 hover:border-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurAwards;
