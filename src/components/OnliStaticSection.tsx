import styles from './OnliStaticSection.module.css';

export interface OnliCardData {
  id: string;
  pill1: string;
  pill2: string;
  pill3: string;
  href?: string;
  title: string;
  body: string[];
  conclusion?: string;
}

interface OnliStaticSectionProps {
  cards: OnliCardData[];
}

export default function OnliStaticSection({ cards }: OnliStaticSectionProps) {
  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.contentWrapper}>
            <div className={styles.pillsRow}>
              <div className={styles.pill}>{card.pill1}</div>
              <div className={styles.pill}>{card.pill2}</div>
              {card.href ? (
                <a href={card.href} target="_blank" rel="noopener noreferrer" className={`${styles.pill} ${styles.pillLink}`}>
                  {card.pill3}
                  <span className={styles.linkArrow}>→</span>
                </a>
              ) : (
                <div className={styles.pill}>{card.pill3}</div>
              )}
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
      ))}
    </section>
  );
}
