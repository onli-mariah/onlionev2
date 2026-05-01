"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Preloader from "./Preloader";

export default function AnimationsWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPreloader, setShowPreloader] = useState(true);

  useGSAP(() => {
    if (isLoaded && containerRef.current) {
      // Stagger animate-in elements
      gsap.fromTo(
        ".animate-in",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
      
      // We can safely hide preloader completely from DOM after it animates out
      setTimeout(() => setShowPreloader(false), 500);
    }
  }, [isLoaded]);

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setIsLoaded(true)} />}
      <div ref={containerRef}>
        {children}
      </div>
    </>
  );
}
