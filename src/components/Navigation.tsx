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
        <Link href="/" className={`${styles.wordmark}`}>
          <span className={styles.wordmarkBold}>only</span>
          <span className={styles.wordmarkRegular}>.fyi</span>
        </Link>
      </div>

      {/* Right Pill: Dropdown Navigation */}
      <div className={`${styles.pill} ${styles.ctaPillContainer} animate-in`}>
        <div className={styles.dropdownContainer}>
          <span className={styles.dropdownTrigger}>Categories ▾</span>
          <div className={styles.dropdownMenu}>
            <Link href="/white-papers" className={styles.dropdownItem}>White Papers</Link>
            <Link href="/use-cases" className={styles.dropdownItem}>Use Cases</Link>
            <Link href="/publications" className={styles.dropdownItem}>Publications</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
