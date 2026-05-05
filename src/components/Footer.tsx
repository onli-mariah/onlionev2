import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} section-container`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnHeader}>Contact</h4>
            <a href="mailto:hello@theonlicorporation.com" className={styles.footerLink}>hello@theonlicorporation.com</a>
          </div>
          
          <div className={styles.footerColumn}>
            <h4 className={styles.columnHeader}>Legal</h4>
            <Link href="/privacypolicy" className={styles.footerLink}>Privacy Policy</Link>
          </div>
        </div>

        <div className={styles.copyrightRow}>
          <span className={styles.copyrightText}>© 2025 The Onli Corporation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
