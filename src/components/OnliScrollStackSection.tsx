"use client";

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './OnliScrollStackSection.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface OnliStackCardData {
  id: string;
  pill1: string;
  pill2: string;
  pill3: string;
  title: string;
  body: string[];
  conclusion?: string;
}

interface OnliScrollStackSectionProps {
  cards: OnliStackCardData[];
}

export default function OnliScrollStackSection({ cards }: OnliScrollStackSectionProps) {
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
      const scrollPerTransition = 2;
      const initialHold = 1;
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

      tl.to({}, { duration: initialHold });

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
        tl.to({}, { duration: 1 });
        
        tl.to(cardsRef.current[i], {
          yPercent: 0,
          duration: 1,
          ease: 'power2.inOut',
        }, `card${i}`);
      }
      
      tl.to({}, { duration: finalHold });
    });

    mm.add("(max-width: 1024px)", () => {
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
                  <div className={styles.pill}>{card.pill3}</div>
                </div>
                
                <div className={styles.bodyGrid}>
                  <div className={styles.emptyCol}></div>
                  
                  <div className={styles.titleCol}>
                    <h1 className="font-sans-headline">{card.title}</h1>
                  </div>
                  
                  <div className={styles.bodyCol}>
                    {card.body.map((paragraph, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    {card.conclusion && (
                      <p className={styles.conclusion}>{card.conclusion}</p>
                    )}
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
