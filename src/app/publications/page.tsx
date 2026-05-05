import Section from "@/components/Section";
import styles from "../page.module.css";

export default function Publications() {
  return (
    <main className={styles.main}>
      <Section id="publications" theme="light">
        <div className={`${styles.sectionContent} animate-in`} style={{ paddingTop: '120px' }}>
          <h1 className="font-sans-headline" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: '24px' }}>Publications</h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-body)', maxWidth: '600px', lineHeight: 1.5 }}>
            Articles, thoughts, and publications on the future of digital property.
          </p>
          <div style={{ marginTop: '64px' }}>
            <p style={{ color: '#888' }}>Content coming soon...</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
