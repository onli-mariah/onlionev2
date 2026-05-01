"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Preloader.module.css";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Setup the timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up the entire preloader
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    // 2. Animate counter from 0 to 100 over 1.5s
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = `${Math.round(counterObj.value)}%`;
        }
      }
    }, "start");

    // 3. Animate progress bar scaleX to 1
    tl.to(progressBarRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "start");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.preloader}>
      <div className={styles.content}>
        <div className={styles.logo}>onli</div>
        <div ref={counterRef} className={styles.counter}>0%</div>
        <div className={styles.progressContainer}>
          <div ref={progressBarRef} className={styles.progressBar}></div>
        </div>
      </div>
    </div>
  );
}
