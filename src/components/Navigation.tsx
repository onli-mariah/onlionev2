"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navContainer} section-container ${scrolled ? styles.scrolled : ""}`}>
      {/* Left Pill: Wordmark */}
      <div className={`${styles.pill} ${styles.wordmarkPill} animate-in`}>
        <Link href="/" className={`${styles.wordmark} inter`}>
          <span className={styles.wordmarkBold}>onli</span>
          <span className={styles.wordmarkRegular}>.one</span>
        </Link>
      </div>

      {/* Right Pill: CTA */}
      <div className={`${styles.pill} ${styles.ctaPillContainer} animate-in`}>
        <Link href="#get-started" className={`${styles.navLink} inter`}>
          get started
        </Link>
      </div>
    </nav>
  );
}
