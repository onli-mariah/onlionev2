import styles from './ScrollStackSection.module.css';

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
  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
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
      ))}
    </section>
  );
}
