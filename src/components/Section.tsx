import React from "react";
import styles from "./Section.module.css";
import Link from "next/link";

interface SectionProps {
  id?: string;
  theme?: "light" | "dark";
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  theme = "light",
  eyebrow,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  children,
  className = "",
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`${styles.section} ${theme === "dark" ? "surface-dark" : "surface-light"} ${className}`}
    >
      <div className="section-container">
        <div className={styles.sectionHeader}>
          {eyebrow && <span className={`${styles.eyebrow} font-sans`}>{eyebrow}</span>}
          {headline && <h2 className={`${styles.headline} font-sans`}>{headline}</h2>}
          {subheadline && <p className={`${styles.subheadline} font-sans`}>{subheadline}</p>}
        </div>
        
        <div className={styles.content}>
          {children}
        </div>
        
        {ctaText && ctaHref && (
          <div className={styles.ctaWrapper}>
            <Link href={ctaHref} className={`${styles.ctaPill} font-sans`}>
              {ctaText} &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
