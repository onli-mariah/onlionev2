"use client";

import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import ColumnPill from './ColumnPill';

interface FaqItem {
  id: string;
  pillLabel: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  titlePill: string;
  items: FaqItem[];
  theme?: "light" | "dark";
}

export default function FaqSection({ titlePill, items, theme = "light" }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.faqContainer}>
      <div className={styles.titleColumn}>
        <ColumnPill label={titlePill} theme={theme} />
        <div key={activeIndex} className={styles.titleColumnContent}>
          <div className="largeTextCard">
            <h3>{items[activeIndex]?.question}</h3>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.tabsRow}>
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className={styles.tabItem}
              onClick={() => setActiveIndex(index)}
            >
              <ColumnPill 
                label={item.pillLabel} 
                theme={theme} 
                collapsed={activeIndex !== index} 
              />
            </div>
          ))}
        </div>
        
        <div key={`answer-${activeIndex}`} className={styles.answerBlock}>
          <p className={styles.answerText}>{items[activeIndex]?.answer}</p>
        </div>
      </div>
    </div>
  );
}
