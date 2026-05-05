import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      id: "white-papers",
      title: "White Papers",
      recent: {
        title: "The Architecture of Trust Without Chains",
        description: "An in-depth look at how Onli's technology replaces traditional blockchain ledgers with self-contained, unique digital assets.",
        date: "May 2026",
      },
      link: "/white-papers",
    },
    {
      id: "use-cases",
      title: "Use Cases",
      recent: {
        title: "Enterprise Asset Appliances",
        description: "How large organizations are deploying Onli.cloud to manage real-world asset tokenization securely.",
        date: "April 2026",
      },
      link: "/use-cases",
    },
    {
      id: "publications",
      title: "Publications",
      recent: {
        title: "The Post-Blockchain Era",
        description: "A visionary piece on the future of decentralized finance and true digital ownership.",
        date: "March 2026",
      },
      link: "/publications",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero />

      {categories.map((category) => (
        <Section id={category.id} theme="light" key={category.id}>
          <div className={`${styles.sectionContent} animate-in`} style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '80px' }}>
            
            {/* Full-width header bar */}
            <div style={{
              width: '100%',
              background: '#000',
              color: '#fff',
              padding: '24px 48px',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <h2 className="font-sans-headline" style={{ fontSize: '24px', margin: 0 }}>{category.title}</h2>
            </div>

            {/* Most recent item preview */}
            <div style={{
              padding: '0 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <p style={{ color: '#8c857d', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Most Recent</p>
              <h3 className="font-sans-headline" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--color-text-dark)', lineHeight: 1.1 }}>
                {category.recent.title}
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--color-text-body)', maxWidth: '600px', lineHeight: 1.5 }}>
                {category.recent.description}
              </p>
              <p style={{ color: '#888', fontSize: '14px' }}>{category.recent.date}</p>
            </div>

            {/* Learn More Pill */}
            <div style={{ padding: '0 48px', marginTop: '16px' }}>
              <Link href={category.link} style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                borderRadius: '999px',
                background: '#f5f5f5',
                color: '#000',
                textDecoration: 'none',
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'background 0.3s ease'
              }}>
                Learn more
              </Link>
            </div>

          </div>
        </Section>
      ))}

    </main>
  );
}
