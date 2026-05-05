import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AccordionSection from "@/components/AccordionSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      {/* Main Content */}
      <Section id="main-content" theme="light" className={styles.mainTextSection}>
        <div className={`${styles.sectionContent} animate-in`}>
          <div style={{ width: '100%', paddingBottom: '0' }}>
            <h1 className="font-sans-headline" style={{ 
              fontSize: '3rem', 
              fontWeight: 400, 
              letterSpacing: '-0.03em', 
              lineHeight: '1.1', 
              marginBottom: '2rem', 
              color: '#000',
              textWrap: 'balance'
            }}>
              Onli One creates a secure, zero-config private network for possession-native transfer.
            </h1>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              fontSize: '1rem', 
              fontWeight: 300, 
              lineHeight: '1.6', 
              color: '#555', 
              width: '100%' 
            }}>
              <p>
                It lets owners, vaults, appliances, and services connect directly when a digital asset needs to move — without public exposure, complex networking, or trusted intermediaries.
              </p>
              <p>
                Unlike traditional private networks built around device access, Onli One is built around <strong style={{color: '#000', fontWeight: 500}}>asset movement</strong>. It forms a private, just-in-time transfer path between authorized parties, validates the possession state, completes the move, and disappears.
              </p>
              <p>
                The Onli One network establishes secure, direct, peer-to-peer paths between authorized vaults, appliances, and owners. Instead of broadcasting transactions or relying on shared ledgers, Onli One coordinates transfer through a private, state-aware network path.
              </p>
              <p>
                Each transfer is bound to the asset&apos;s tensor state, owner credential, vault location, and policy conditions. The network does not merely connect machines. It connects possession states.
              </p>
              <p style={{ 
                color: '#000', 
                fontWeight: 500, 
                marginTop: '1.5rem' 
              }}>
                The result is a private, verifiable movement of the thing itself — not a message about the thing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section: The Stack (Horizontal Accordion) */}
      <Section id="the-stack" theme="light" className={styles.stackSection}>
        <div className={`${styles.sectionContent} animate-in`}>
          <AccordionSection
            titlePill="the stack"
            items={[
              {
                id: "onli-ai",
                pillLabel: "onli.ai",
                image: "/images/onliai.png",
                href: "https://www.onli.ai/",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Intent Layer</p>
                  </div>
                )
              },
              {
                id: "onli-cloud",
                pillLabel: "onli.cloud",
                image: "/images/onlicloud.png",
                href: "https://www.onli.cloud/",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Orchestration</p>
                  </div>
                )
              },
              {
                id: "onli-you",
                pillLabel: "onli.you",
                image: "/images/onliyou.jpg",
                href: "https://www.onli.you/",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Authentication</p>
                  </div>
                )
              },
              {
                id: "withonli",
                pillLabel: "withonli.com",
                image: "/images/withonli.png",
                href: "https://www.withonli.com/",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>How it Works</p>
                  </div>
                )
              }
            ]}
          />
        </div>
      </Section>
    </main>
  );
}

