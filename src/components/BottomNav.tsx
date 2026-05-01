"use client";

import React, { useRef } from "react";
import styles from "./BottomNav.module.css";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionData {
  id: string;
  label: string;
  number: string;
}

interface BottomNavProps {
  sections: SectionData[];
  companionCtaText?: string;
  companionCtaHref?: string;
}

export default function BottomNav({ sections, companionCtaText, companionCtaHref }: BottomNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    sections.forEach((section, index) => {
      const sectionEl = document.getElementById(section.id);
      if (!sectionEl) return;

      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      });
    });

    function setActive(index: number) {
      const pills = document.querySelectorAll('.bottom-nav-pill');
      pills.forEach((pill, i) => {
        const label = pill.querySelector('.pill-label');
        if (i === index) {
          gsap.to(pill, { width: 140, duration: 0.3, ease: "power2.out" });
          gsap.to(label, { opacity: 0.9, duration: 0.25, display: "inline-block" });
        } else {
          gsap.to(pill, { width: 40, duration: 0.3, ease: "power2.out" });
          gsap.to(label, { opacity: 0, duration: 0.25, display: "none" });
        }
      });
    }

    // Initialize the first one
    if (sections.length > 0) setActive(0);
  }, [sections]);

  return (
    <div ref={containerRef} className={styles.bottomNavWrapper}>
      <nav className={styles.bottomNav}>
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${styles.pill} bottom-nav-pill`}
            data-target={section.id}
          >
            <span className={`${styles.number} inter`}>{section.number}</span>
            <span className={`${styles.label} inter pill-label`}>{section.label}</span>
          </div>
        ))}
      </nav>

      {companionCtaText && companionCtaHref && (
        <div className={styles.companionCta}>
          <Link href={companionCtaHref} className={`${styles.companionPill} inter`}>
            {companionCtaText}
          </Link>
        </div>
      )}
    </div>
  );
}
