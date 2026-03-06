"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useBrandPageAnimations({
  hasTestimonials = true,
  hasFaq = true,
} = {}) {
  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;
    const slideX = isMobile ? 30 : 60;
    const slideY = isMobile ? 20 : 40;
    const smallSlideX = isMobile ? 20 : 40;
    const smallSlideY = isMobile ? 15 : 30;

    const ctx = gsap.context(() => {
      /* ─── Hero: fade + scale, then stagger overlay elements ─── */
      gsap
        .timeline({ delay: 0.2 })
        .fromTo(
          ".brand-hero",
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }
        )
        .fromTo(
          ".brand-hero .hero-brand-name",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".brand-hero .hero-divider",
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".brand-hero .hero-logo",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        );

      /* ─── Intro: image from left, text from right, line draw ─── */
      gsap
        .timeline({
          scrollTrigger: { trigger: ".brand-intro", start: "top 85%" },
        })
        .fromTo(
          ".brand-intro .intro-image",
          { x: -slideX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
        .fromTo(
          ".brand-intro .intro-text",
          { x: slideX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".brand-intro .intro-line",
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            transformOrigin: "top center",
          },
          "-=0.2"
        )
        .fromTo(
          ".brand-intro .intro-glance",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.1"
        );

      /* ─── Stats: stagger fade up ─── */
      gsap
        .timeline({
          scrollTrigger: { trigger: ".brand-stats", start: "top 85%" },
        })
        .fromTo(
          ".brand-stats .stat-item",
          { y: slideY, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
          }
        );

      /* ─── Testimonials (conditional) ─── */
      if (hasTestimonials) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".brand-testimonials",
              start: "top 85%",
            },
          })
          .fromTo(
            ".brand-testimonials .testimonials-heading",
            { y: smallSlideY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
          )
          .fromTo(
            ".brand-testimonials .testimonials-card",
            { x: -slideX * 0.8, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            ".brand-testimonials .testimonials-img",
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.1,
            },
            "-=0.3"
          );
      }

      /* ─── Role banner: text slides up ─── */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".brand-role-banner",
            start: "top 85%",
          },
        })
        .fromTo(
          ".brand-role-banner .role-heading",
          { y: slideY, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
        .fromTo(
          ".brand-role-banner .role-body",
          { y: smallSlideY, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );

      /* ─── CTA: heading fade up, button pop ─── */
      gsap
        .timeline({
          scrollTrigger: { trigger: ".brand-cta", start: "top 85%" },
        })
        .fromTo(
          ".brand-cta .cta-heading",
          { y: smallSlideY, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".brand-cta .cta-button",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2"
        );

      /* ─── FAQ (conditional) ─── */
      if (hasFaq) {
        gsap
          .timeline({
            scrollTrigger: { trigger: ".brand-faq", start: "top 85%" },
          })
          .fromTo(
            ".brand-faq .faq-heading",
            { x: -smallSlideX, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
          )
          .fromTo(
            ".brand-faq .faq-col",
            { y: smallSlideY, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.15,
            },
            "-=0.3"
          );
      }

      /* ─── Blogs: heading left, viewall right ─── */
      gsap
        .timeline({
          scrollTrigger: { trigger: ".brand-blogs", start: "top 85%" },
        })
        .fromTo(
          ".brand-blogs .blogs-heading",
          { x: -smallSlideX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".brand-blogs .blogs-viewall",
          { x: smallSlideX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );

      /* ─── Explore More Brands: heading left, marquee fade ─── */
      gsap
        .timeline({
          scrollTrigger: { trigger: ".brand-explore", start: "top 90%" },
        })
        .fromTo(
          ".brand-explore .explore-heading",
          { x: -smallSlideX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".brand-explore .explore-marquee",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, [hasTestimonials, hasFaq]);
}
