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
        <div key={activeIndex} className={styles.titleColumnContent}>
          {items[activeIndex]?.content}
        </div>
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
                <ColumnPill label={item.pillLabel} theme={theme} collapsed={!isActive} />
              </div>
              
              <div className={`${styles.contentWrapper} ${isActive ? styles.contentActive : styles.contentCollapsed}`}>
                {item.customVisual ? (
                  item.customVisual
                ) : item.image ? (
                  <div className={styles.imageContainer}>
                    <img src={item.image} alt={item.pillLabel} className={styles.image} />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
