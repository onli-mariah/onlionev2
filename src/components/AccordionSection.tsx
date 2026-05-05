"use client";

import React, { useState } from 'react';
import styles from './AccordionSection.module.css';
import ColumnPill from './ColumnPill';

interface AccordionItem {
  id: string;
  pillLabel: string;
  image?: string;
  customVisual?: React.ReactNode;
  content: React.ReactNode;
  href?: string;
}

interface AccordionSectionProps {
  titlePill: string;
  items: AccordionItem[];
  theme?: "light" | "dark";
}

export default function AccordionSection({ titlePill, items, theme = "light" }: AccordionSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.titleColumn}>
        <ColumnPill label={titlePill} theme={theme} />
      </div>

      <div className={styles.itemsContainer}>
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id}
              className={`${styles.accordionItem} ${isActive ? styles.active : styles.collapsed}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={styles.header}>
                {isActive && item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }} onClick={(e) => e.stopPropagation()}>
                    <ColumnPill label={item.pillLabel} theme={theme} collapsed={!isActive} />
                  </a>
                ) : (
                  <ColumnPill label={item.pillLabel} theme={theme} collapsed={!isActive} />
                )}
              </div>
              
              <div className={`${styles.contentWrapper} ${isActive ? styles.contentActive : styles.contentCollapsed}`}>
                {isActive && (
                  <div className={styles.titleColumnContent}>
                    {item.content}
                  </div>
                )}
                {item.customVisual ? (
                  item.customVisual
                ) : item.image ? (
                  item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }} onClick={(e) => e.stopPropagation()}>
                      <div className={styles.imageContainer}>
                        <img src={item.image} alt={item.pillLabel} className={styles.image} />
                      </div>
                    </a>
                  ) : (
                    <div className={styles.imageContainer}>
                      <img src={item.image} alt={item.pillLabel} className={styles.image} />
                    </div>
                  )
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
