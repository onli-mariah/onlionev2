"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SurfaceTransitionProps {
  triggerSelector: string;
}

export default function SurfaceTransition({ triggerSelector }: SurfaceTransitionProps) {
  const isDarkRef = useRef(false);

  useGSAP(() => {
    const triggerElement = document.querySelector(triggerSelector);
    if (!triggerElement) return;

    // We animate the body background and text color
    const lightBg = "#FAFAFA";
    const darkBg = "#2A2A2A";
    const lightText = "#0A0A0A";
    const darkText = "#FFFFFF";

    gsap.to("body", {
      backgroundColor: darkBg,
      color: darkText,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        onEnter: () => { isDarkRef.current = true; },
        onLeaveBack: () => { isDarkRef.current = false; },
      },
    });

    // We also need to transition back to light when leaving the section at the bottom
    gsap.to("body", {
      backgroundColor: lightBg,
      color: lightText,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: triggerElement,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        onLeave: () => { isDarkRef.current = false; },
        onEnterBack: () => { isDarkRef.current = true; },
      },
    });
  }, [triggerSelector]);

  return null;
}
