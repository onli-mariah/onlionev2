import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.heroSection} section-container`}>
      <div className={`${styles.heroLeft} animate-in`}>
        trust without chains
      </div>
      <div className={`${styles.heroRight} animate-in`}>
        <span style={{ fontWeight: 300, color: 'var(--color-text-dark)' }}>onli</span>
        <span style={{ fontWeight: 400, color: 'var(--color-text-body)' }}>.one</span>
      </div>
    </section>
  );
}
