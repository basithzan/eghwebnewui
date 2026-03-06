"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global scroll-reveal animations for all pages.
 * Skips brand pages (they use useBrandPageAnimations instead).
 * Drop into root layout — renders nothing, just runs animations.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Brand pages handle their own animations via useBrandPageAnimations
    if (document.querySelector(".brand-hero")) return;

    // Small delay so the DOM is fully painted before we animate
    const timer = setTimeout(() => {
      const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768;
      const slideY = isMobile ? 25 : 50;
      const slideX = isMobile ? 30 : 60;

      const ctx = gsap.context(() => {
        /* ─── Sections: alternating reveal directions ─── */
        gsap.utils.toArray("section").forEach((section, i) => {
          if (i === 0) {
            // First section: immediate fade + scale entrance
            gsap.fromTo(
              section,
              { opacity: 0, scale: 0.97 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
                delay: 0.15,
              }
            );
          } else {
            // Alternate between slide-up and slight slide-from-side
            const isEven = i % 2 === 0;
            gsap.fromTo(
              section,
              { opacity: 0, y: slideY, x: isEven ? -15 : 0 },
              {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 85%",
                },
              }
            );
          }
        });

        /* ─── Non-section wrapper divs ─── */
        gsap.utils
          .toArray(
            ".section-spaced, .section-5, .section-6, .carouselSection, [class*='md:mt-']"
          )
          .forEach((el) => {
            if (el.closest("section")) return;
            gsap.fromTo(
              el,
              { opacity: 0, y: slideY },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                },
              }
            );
          });

        /* ─── Headings: prominent slide from left ─── */
        gsap.utils.toArray("h1, h2").forEach((heading) => {
          const parentSection = heading.closest("section");
          const allSections = gsap.utils.toArray("section");
          if (parentSection === allSections[0]) return;

          gsap.fromTo(
            heading,
            { opacity: 0, x: -slideX * 0.6, skewX: -2 },
            {
              opacity: 1,
              x: 0,
              skewX: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
              },
            }
          );
        });

        /* ─── Paragraphs in sections: fade up with slight delay ─── */
        gsap.utils.toArray("section p").forEach((p) => {
          const parentSection = p.closest("section");
          const allSections = gsap.utils.toArray("section");
          if (parentSection === allSections[0]) return;

          gsap.fromTo(
            p,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: p,
                start: "top 90%",
              },
            }
          );
        });

        /* ─── Images: scale reveal ─── */
        gsap.utils.toArray("section img").forEach((img) => {
          const parentSection = img.closest("section");
          const allSections = gsap.utils.toArray("section");
          if (parentSection === allSections[0]) return;

          gsap.fromTo(
            img,
            { opacity: 0, scale: 0.92 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: img,
                start: "top 90%",
              },
            }
          );
        });

        /* ─── Grid/flex children: staggered reveal ─── */
        gsap.utils
          .toArray("section .grid, section .flex")
          .forEach((container) => {
            const parentSection = container.closest("section");
            const allSections = gsap.utils.toArray("section");
            if (parentSection === allSections[0]) return;

            const children = container.children;
            if (children.length >= 2 && children.length <= 8) {
              gsap.fromTo(
                children,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power3.out",
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                  },
                }
              );
            }
          });

        /* ─── Buttons/CTAs: pop in ─── */
        gsap.utils.toArray("section a button, section a[class*='button']").forEach((btn) => {
          const parentSection = btn.closest("section");
          const allSections = gsap.utils.toArray("section");
          if (parentSection === allSections[0]) return;

          gsap.fromTo(
            btn,
            { opacity: 0, scale: 0.85 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: btn,
                start: "top 92%",
              },
            }
          );
        });
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
