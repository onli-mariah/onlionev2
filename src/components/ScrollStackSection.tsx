"use client";

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useViewport } from '@/context/ViewportContext';
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

function getGridCols(width: number) {
  if (width <= 599) return 6; // SP
  if (width <= 1024) return 10; // Tablet
  return 14; // PC
}

export default function ScrollStackSection({ cards }: ScrollStackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const viewport = useViewport();

  const [grid, setGrid] = useState({ cols: 14, rows: 10 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Safari-specific: use simpler animation approach if SVG masks are not well supported
  const useSafariMode = viewport.browser.isSafari && !viewport.features.supportsSVGMasks;
  
  // Use viewport's hydration state instead of local mounted state
  const mounted = viewport.isHydrated;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = getGridCols(width);
      const rows = Math.max(1, Math.round(cols * (height / width)));
      setGrid({ cols, rows });
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
      gsap.set(cardsRef.current, { 
        yPercent: 0,
        zIndex: (i) => i
      });

      // Scroll distance calculation:
      // - 3 units for initial first card hold (sticky on scroll down)
      // - 3 units pause + 2 units transition per card change (more intentional scrolling)
      // - 3 units for final last card hold
      // When scrolling back up, the timeline reverses - so first card gets the initial hold again
      const scrollPerTransition = 5; // Significantly more scroll required between cards
      const initialHold = 3; // Extra scroll before first transition starts (also applies when scrolling back up)
      const finalHold = 3; // Hold on the last card
      const totalScroll = (initialHold + (totalCards - 1) * scrollPerTransition + finalHold) * 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}%`,
          pin: true,
          scrub: 2.5, // Smoother, less sensitive scrolling
          invalidateOnRefresh: true,
        }
      });

      // Initial hold - keep first card visible for longer scroll (works both directions)
      tl.to({}, { duration: initialHold });

      // Safari fallback: use simple opacity crossfade instead of SVG masks
      if (useSafariMode) {
        // Set initial state - all cards visible but stacked
        gsap.set(cardsRef.current, { opacity: 1 });
        gsap.set(cardsRef.current.slice(1), { opacity: 0 });
        
        for (let i = 1; i < totalCards; i++) {
          tl.to({}, { duration: 3 }); // Hold current card for a full scroll
          
          // Crossfade: fade out previous, fade in current
          tl.to(cardsRef.current[i - 1], {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          }, `card${i}`)
          .to(cardsRef.current[i], {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          }, `card${i}`);
        }
        
        tl.to({}, { duration: finalHold }); // Hold at the end
      } else {
        // Standard grid mask reveal animation for Chrome, Firefox, etc.
        for (let i = 1; i < totalCards; i++) {
          tl.to({}, { duration: 3 }); // Hold current card for a full scroll

          const cells = gsap.utils.toArray(`.mask-cell-${i}`);
          const ordered: Element[] = [];

          for (let x = 0; x < grid.cols; x++) {
            const column: Element[] = [];
            for (let y = 0; y < grid.rows; y++) {
              const index = y * grid.cols + x;
              if (cells[index]) {
                column.push(cells[index] as Element);
              }
            }
            const shuffledColumn = gsap.utils.shuffle(column);
            ordered.push(...shuffledColumn);
          }

          tl.to(ordered, {
            opacity: 1,
            duration: 2, // Longer transition for more intentional feel
            ease: 'power3.out',
            stagger: {
              each: 0.02,
            },
          });
        }

        tl.to({}, { duration: finalHold }); // Hold at the end
      }
    });

    // Mobile & Tablet - No GSAP animation, CSS handles the stacked layout
    mm.add("(max-width: 1024px)", () => {
      // Clear any GSAP-applied styles so CSS can take over
      gsap.set(cardsRef.current, { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope: containerRef, dependencies: [mounted, grid, cards.length, useSafariMode] });

  // Do not render masks until mounted on client to prevent hydration mismatch
  // Skip SVG masks entirely in Safari mode
  const shouldRenderMasks = mounted && !isMobile && !useSafariMode;
  
  return (
    <section className={styles.container} ref={containerRef}>
      {shouldRenderMasks && (
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
          <defs>
            {cards.map((_, i) => {
              if (i === 0) return null; // First card doesn't need a mask
              
              const rects = [];
              const cellW = 1 / grid.cols;
              const cellH = 1 / grid.rows;
              
              for (let y = 0; y < grid.rows; y++) {
                for (let x = 0; x < grid.cols; x++) {
                  rects.push(
                    <rect
                      key={`${x}-${y}`}
                      className={`mask-cell-${i}`}
                      x={x * cellW}
                      y={y * cellH}
                      width={cellW + 0.005} // slight overlap to prevent visual gaps
                      height={cellH + 0.005}
                      fill="white"
                      opacity="0"
                      shapeRendering="crispEdges"
                    />
                  );
                }
              }

              return (
                <mask id={`card-mask-${i}`} key={i} maskContentUnits="objectBoundingBox">
                  <rect x="0" y="0" width="1" height="1" fill="black" />
                  <g>
                    {rects}
                  </g>
                </mask>
              );
            })}
          </defs>
        </svg>
      )}

      <div className={styles.stickyWrapper}>
        {cards.map((card, index) => {
          // Only apply masks on desktop when not in Safari mode
          const maskStyle = index > 0 && shouldRenderMasks ? {
            WebkitMaskImage: `url(#card-mask-${index})`,
            maskImage: `url(#card-mask-${index})`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          } : {};

          return (
            <div 
              key={card.id} 
              className={styles.card}
              ref={(el) => { cardsRef.current[index] = el; }}
              style={maskStyle}
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
