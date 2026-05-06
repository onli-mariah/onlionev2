"use client";

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollStackSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StackCardData {
  id: string;
  pill1: string;
  pill2: string;
  pill3: string;
  href: string;
  title: string;
  body: string;
  image: string;
}

interface ScrollStackSectionProps {
  cards: StackCardData[];
}

export default function ScrollStackSection({ cards }: ScrollStackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    function handleResize() {
      const width = window.innerWidth;
      // Treat tablets and mobile the same - stacked layout without pinning
      setIsMobile(width <= 1024);
    }

    handleResize();
    
    let timer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timer);
    };
  }, []);

  useGSAP(() => {
    if (!mounted || cards.length === 0) return;

    const totalCards = cards.length;
    const mm = gsap.matchMedia(containerRef);

    // Desktop only (large screens)
    mm.add("(min-width: 1025px)", () => {
      // Scroll distance - one scroll per card transition
      const scrollPerTransition = 2;
      const initialHold = 0.1; // Reduced to eliminate bounce at start
      const finalHold = 1;
      const totalScroll = (initialHold + (totalCards - 1) * scrollPerTransition + finalHold) * 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Initial hold - one scroll before transition
      tl.to({}, { duration: initialHold });

      // Slide-up animation - each card slides up from below
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.set(card, { 
            yPercent: i === 0 ? 0 : 100,
            zIndex: i,
            opacity: 1
          });
        }
      });
      
      for (let i = 1; i < totalCards; i++) {
        tl.to({}, { duration: 1 }); // Hold current card for one scroll
        
        // Slide the next card up
        tl.to(cardsRef.current[i], {
          yPercent: 0,
          duration: 1,
          ease: 'power2.inOut',
        }, `card${i}`);
      }
      
      tl.to({}, { duration: finalHold }); // Hold at the end
    });

    // Mobile & Tablet - No GSAP animation, CSS handles the stacked layout
    mm.add("(max-width: 1024px)", () => {
      // Clear any GSAP-applied styles so CSS can take over
      gsap.set(cardsRef.current, { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope: containerRef, dependencies: [mounted, cards.length] });

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.stickyWrapper}>
        {cards.map((card, index) => {
          return (
            <div 
              key={card.id} 
              className={styles.card}
              ref={(el) => { cardsRef.current[index] = el; }}
              data-card-index={index}
            >
              <div className={styles.contentWrapper}>
                <div className={styles.pillsRow}>
                  <div className={styles.pill}>{card.pill1}</div>
                  <div className={styles.pill}>{card.pill2}</div>
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className={`${styles.pill} ${styles.pillLink}`}>
                    {card.pill3}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
                
                <div className={styles.bodyGrid}>
                  <div className={styles.textContent}>
                    <h2 className={styles.textTitle}>{card.title}</h2>
                    <div className={styles.textBody}>
                      {card.body.split('\n').map((line, i) => (
                        <p key={i} style={{ marginBottom: i < card.body.split('\n').length - 1 ? '1.5rem' : 0 }}>
                          {i === 0 ? <strong>{line}</strong> : line}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.imageContainer}>
                    <img src={card.image} alt={card.title} className={styles.image} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
