import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${styles.footer} surface-dark`}>
      <div className={`${styles.footerContainer} section-container`}>
        <div className={styles.legalRow}>
          <div className={styles.legalContent}>
            <p className={styles.singleLineCatchphrase}>trust without chains. possession without permission. control without consensus.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
