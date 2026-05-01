import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

interface CardProps {
  variant?: "standard" | "premium" | "feature";
  eyebrow?: string;
  headline?: string;
  body?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Card({
  variant = "standard",
  eyebrow,
  headline,
  body,
  ctaText,
  ctaHref,
  icon,
  className = "",
  style,
  children,
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} style={style}>
      {children ? (
        children
      ) : (
        <>
          {icon && <div className={styles.iconArea}>{icon}</div>}
          
          <div className={styles.content}>
            {eyebrow && <span className={`${styles.eyebrow} font-sans`}>{eyebrow}</span>}
            {headline && <h3 className={`${styles.headline} font-sans`}>{headline}</h3>}
            {body && <div className={`${styles.body} font-sans`}>{body}</div>}
          </div>
          
          {ctaText && ctaHref && (
            <div className={styles.ctaWrapper}>
              <Link href={ctaHref} className={`${styles.ctaPill} font-sans`}>
                {ctaText}
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
