// lib/useSmoothScroll.ts
"use client";

import { useEffect, useState } from "react";

export function useSmoothScroll() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Handle smooth scrolling
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const sectionId = href.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(sectionId);
          // Optional: Adjust for fixed header
          window.scrollBy(0, -80); // Adjust based on header height
        }
      }
    };

    // Attach click event to anchor tags
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    // Observe all sections with an ID
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
      observer.disconnect();
    };
  }, []);

  return { activeSection };
}