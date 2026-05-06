"use client";

import { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) {
        setIsVisible(true);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hide when footer comes into view (when top of footer is within viewport)
      if (footerRect.top <= windowHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.indicator}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6 9L12 15L18 9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.text}>scroll</span>
      </div>
    </div>
  );
}
