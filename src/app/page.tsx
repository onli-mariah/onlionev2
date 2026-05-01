import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ColumnPill from "@/components/ColumnPill";
import AccordionSection from "@/components/AccordionSection";
import FaqSection from "@/components/FaqSection";
import BottomNav from "@/components/BottomNav";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const sections = [
    { id: 'what-is-onli', label: 'what is onli', number: '01' },
    { id: 'build', label: 'build with onli', number: '02' },
    { id: 'create', label: 'simple pricing', number: '03' },
    { id: 'faq', label: 'FAQ', number: '04' },
    { id: 'team', label: 'meet the team', number: '05' },
    { id: 'connect', label: 'get connected', number: '06' }
  ];

  return (
    <main className={styles.main}>
      <BottomNav 
        sections={sections}
        companionCtaText="Chat with Onli.Ai"
        companionCtaHref="#"
      />
      <Hero />

      {/* Section 001: What is an Onli */}
      <Section id="what-is-onli" theme="light">
        <div className={`${styles.sectionContent} animate-in`}>
          <AccordionSection
            titlePill="what is onli"
            items={[
              {
                id: "assets",
                pillLabel: "assets",
                image: "https://picsum.photos/seed/onliassets/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Onli™ is the first truly decentralized digital asset technology. It replaces the traditional concept of ledgers and accounts with provably unique, singular digital objects that can be directly possessed and transferred.</p>
                    <Link href="#learn" className={styles.button} style={{ marginTop: '24px' }}>Learn More</Link>
                  </div>
                )
              },
              {
                id: "appliances",
                pillLabel: "appliances",
                image: "https://picsum.photos/seed/onliappliances/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>An Appliance is a specialized environment for interacting with Onli assets. Appliances define the rules, logic, and context for how assets behave within your specific ecosystem.</p>
                  </div>
                )
              },
              {
                id: "ownership",
                pillLabel: "ownership",
                image: "https://picsum.photos/seed/onliownership/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>onli.you is the biometric identity layer. Instead of passwords or seed phrases, your assets are cryptographically bound to you. Your presence is the key.</p>
                  </div>
                )
              },
              {
                id: "orchestration",
                pillLabel: "orchestration",
                image: "https://picsum.photos/seed/onliorchestration/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>onli.cloud provides the infrastructure to deploy and manage your Appliances at scale, without the friction of traditional cloud services or blockchain networks.</p>
                  </div>
                )
              }
            ]}
          />
        </div>
      </Section>

      {/* Section 002: Build */}
      <Section id="build" theme="light">
        <div className={`${styles.sectionContent} animate-in`}>
          <AccordionSection
            titlePill="build with onli"
            items={[
              {
                id: "get-started",
                pillLabel: "get started",
                image: "https://picsum.photos/seed/onligetstarted/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Sign-up on the Onli™ Cloud</p>
                  </div>
                )
              },
              {
                id: "become",
                pillLabel: "become a developer",
                image: "https://picsum.photos/seed/onlibecome/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Enroll as a developer, up to 3 seats per subscription</p>
                  </div>
                )
              },
              {
                id: "build-appliance",
                pillLabel: "build your appliance",
                image: "https://picsum.photos/seed/onlibuildappliance/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Create an appliance using the Onli™ Cloud as your asset management database</p>
                  </div>
                )
              },
              {
                id: "deploy",
                pillLabel: "deploy",
                image: "https://picsum.photos/seed/onlideploy/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Launch your appliance with a fully stocked treasury to begin issuing your branded assets</p>
                  </div>
                )
              }
            ]}
          />
        </div>
      </Section>

      {/* Section 003: Create */}
      <Section id="create" theme="light">
        <div className={styles.sectionContent}>

          <div className={styles.grid4}>
            <div className={styles.columnContainer}>
              <ColumnPill label="simple pricing" />
            </div>

            <div className={`${styles.columnContainer} animate-in`}>
              <ColumnPill label="develop" />
              <Card variant="premium">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 className="font-sans-headline" style={{ color: '#fff' }}>Develop</h3>
                </div>
                <p style={{ minHeight: '40px', color: '#ccc' }}>3-team seats</p>
                <h2 style={{ fontSize: '32px', fontWeight: 300, margin: '16px 0', color: '#fff', letterSpacing: '-0.02em' }}>$6,000<span style={{ fontSize: '14px', color: '#888' }}> / Per Year</span></h2>
                <button style={{ width: '100%', padding: '12px', background: '#fff', color: '#000', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-montserrat)' }}>Learn More</button>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', fontSize: '12px', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>• Multi-Seat</li>
                  <li>• Team Vault</li>
                  <li>• Core Security</li>
                  <li>• Email Support</li>
                  <li>• Smart Deploy</li>
                  <li>• Dev Console</li>
                  <li>• Standard API</li>
                </ul>
              </Card>
            </div>

            <div className={`${styles.columnContainer} animate-in`}>
              <ColumnPill label="deploy" />
              <Card variant="standard">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 className="font-sans-headline">Deploy</h3>
                </div>
                <p style={{ minHeight: '40px' }}>launch your appliance</p>
                <h2 style={{ fontSize: '32px', fontWeight: 300, margin: '16px 0', letterSpacing: '-0.02em' }}>$0.00005<span style={{ fontSize: '14px', color: '#888' }}> / Per Asset</span></h2>
                <button style={{ width: '100%', padding: '12px', background: '#0A0A0A', color: '#fff', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-montserrat)' }}>Learn More</button>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', fontSize: '12px', color: '#666', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>• 1B Assets per Treasury</li>
                  <li>• 4 API Calls: Issue, Ask2Move, Move, ChangeOwner</li>
                  <li>• $50k total per deployment</li>
                </ul>
              </Card>
            </div>

            <div className={`${styles.columnContainer} animate-in`}>
              <ColumnPill label="issue" />
              <Card variant="standard">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 className="font-sans-headline">Issue</h3>
                </div>
                <p style={{ minHeight: '40px' }}>mint branded assets</p>
                <h2 style={{ fontSize: '32px', fontWeight: 300, margin: '16px 0', letterSpacing: '-0.02em' }}>$0.05<span style={{ fontSize: '14px', color: '#888' }}> / Per Issuance</span></h2>
                <button style={{ width: '100%', padding: '12px', background: '#0A0A0A', color: '#fff', borderRadius: '4px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-montserrat)' }}>Learn More</button>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', fontSize: '12px', color: '#666', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>• High Margin</li>
                  <li>• White Label</li>
                  <li>• Self-Verify</li>
                  <li>• Scale to Billions</li>
                  <li>• Set Price</li>
                  <li>• No Transaction Fees</li>
                  <li>• No Gas Fees</li>
                  <li>• Own Appliance</li>
                </ul>
              </Card>
            </div>
          </div>

        </div>
      </Section>

      {/* Section 004: FAQ */}
      <Section id="faq" theme="light">
        <div className={`${styles.sectionContent} animate-in`}>
          <FaqSection
            titlePill="FAQ"
            items={[
              {
                id: "faq-1",
                pillLabel: "01",
                question: "How is Onli different from blockchain?",
                answer: "Blockchain tracks ownership in a ledger. Someone else's ledger. Onli doesn't use ledgers, tokens, or consensus. Instead, each asset — called a Genome — is a self-contained mathematical object that exists in exactly one place: the owner's Vault. Duplication is a structural impossibility, not a policy. Blockchain fights the copy problem. Onli solves it. A light bulb is not a new kind of candle."
              },
              {
                id: "faq-2",
                pillLabel: "02",
                question: "Is Onli a cryptocurrency?",
                answer: "No. Onli is not a coin, a token, or a chain. There is no mining, no wallet, no gas fee, and no speculative instrument. Onli is a protocol for creating digital property — assets you actually own, can legally transfer, and can prove are yours. Think of it as the infrastructure layer that finance has been waiting for: real ownership, not its simulation."
              },
              {
                id: "faq-3",
                pillLabel: "03",
                question: "What can I create with Onli?",
                answer: "Anything that must exist as one-of-a-kind. Financial instruments, contracts, licenses, credentials, collectibles, identity documents. If an asset needs to be unique, transferable, and legally provable — Onli can mint it. The platform does not restrict asset types. It enforces the property rules that make any asset real."
              },
              {
                id: "faq-4",
                pillLabel: "04",
                question: "What is a Genome?",
                answer: "A Genome is a digital asset. Not a record of one — the asset itself. It's a three-dimensional mathematical structure that carries its own identity, ownership history, and permissions internally. It cannot be duplicated. When it moves, it doesn't copy — it evolves. The previous state is cryptographically destroyed. There is only one."
              },
              {
                id: "faq-5",
                pillLabel: "05",
                question: "What is a Vault, and how does it secure my assets?",
                answer: "A Vault is a hardware-secured enclave where your Genomes live. Not a cloud folder. Not an account on someone else's server. Your Vault runs in a trusted execution environment (like Intel SGX or AWS Nitro), meaning its contents are encrypted at the hardware level — inaccessible even to system administrators. Your Gene, bound to your verified identity, is the only key that opens it. If you possess it, you own it."
              },
              {
                id: "faq-6",
                pillLabel: "06",
                question: "What is a Gene?",
                answer: "A Gene is your identity credential and ownership key in one. Unlike a blockchain private key — which is a static string that can be stolen and reused — a Gene evolves with every transaction. It is cryptographically bound to your legal identity and your device. It cannot be spoofed, copied, or transferred. You only need one because there is only one you."
              },
              {
                id: "faq-7",
                pillLabel: "07",
                question: "What are the four API calls?",
                answer: "Everything on Onli runs on four operations: Issue (create a new asset from a Treasury), AskToMove (request the owner's authorization to transfer), ChangeOwner (execute the transfer and evolve the Genome), and Destroy (retire an asset permanently). That's the entire protocol. Simple by design, not by accident."
              },
              {
                id: "faq-8",
                pillLabel: "08",
                question: "How do customers make money with Onli?",
                answer: "Issuers set their own economics. It costs $0.05 to mint an asset. Set your sale price at $1.00 and you're running a 95% margin. Issue at scale — millions or billions — and the cost structure remains flat. No gas fees. No per-transaction charges. No infrastructure costs beyond the subscription. You control the asset, the price, and the margin."
              },
              {
                id: "faq-9",
                pillLabel: "09",
                question: "How does the Onli AI interface (MCP) work?",
                answer: "The Onli MCP (Model Context Protocol) lets you operate the entire platform in plain English. Tell it what you want — issue this asset, transfer it to this person, change the owner — and the AI agents handle the protocol calls automatically. No API documentation required to get started. Natural language in, digital property out."
              },
              {
                id: "faq-10",
                pillLabel: "10",
                question: "Is Onli private?",
                answer: "Yes, by default. Unlike a public blockchain, your identity and your transactions are not visible on any shared ledger. The Oracle only records that a valid transaction occurred — not who was involved or what moved. When disclosure is needed, it is controlled, selective, and user-authorized. Private by design. Auditable when required."
              },
              {
                id: "faq-11",
                pillLabel: "11",
                question: "What are my responsibilities as an issuer?",
                answer: "When you issue assets on Onli, you are creating digital property. You are independently responsible for ensuring your assets comply with applicable laws — including securities regulations, intellectual property rights, and KYC/AML requirements. Onli provides the technology. Legal compliance is yours. Consult counsel before issuing financial instruments."
              }
            ]}
          />
        </div>
      </Section>

      {/* Section 005: News & Team */}
      <Section id="team" theme="light">
        <div className={`${styles.sectionContent} animate-in`}>
          <AccordionSection
            titlePill="meet the team"
            items={[
              {
                id: "dhryl",
                pillLabel: "Dhryl Anton",
                image: "https://picsum.photos/seed/dhrylanton/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Chief Executive Officer</p>
                  </div>
                )
              },
              {
                id: "ian",
                pillLabel: "Ian McFall",
                image: "https://picsum.photos/seed/ianmcfall/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Chief Technical Officer</p>
                  </div>
                )
              },
              {
                id: "katherine",
                pillLabel: "M. Katherine Anton",
                image: "https://picsum.photos/seed/katherineanton/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Chief Operations Officer</p>
                  </div>
                )
              },
              {
                id: "peter",
                pillLabel: "Peter Hexel",
                image: "https://picsum.photos/seed/peterhexel/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Chief Legal Counsel</p>
                  </div>
                )
              },
              {
                id: "mariah",
                pillLabel: "Mariah Denton",
                image: "https://picsum.photos/seed/mariahdenton/800/600",
                content: (
                  <div className={styles.largeTextCard}>
                    <p>Executive Assistant to CEO</p>
                  </div>
                )
              },
              {
                id: "join",
                pillLabel: "join the team",
                customVisual: (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', padding: '24px', borderRadius: '16px' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
                      <input type="text" placeholder="Name" style={{ padding: '16px 24px', borderRadius: '999px', border: '1px solid #ddd', outline: 'none' }} />
                      <input type="email" placeholder="Email" style={{ padding: '16px 24px', borderRadius: '999px', border: '1px solid #ddd', outline: 'none' }} />
                      <input type="tel" placeholder="Phone Number" style={{ padding: '16px 24px', borderRadius: '999px', border: '1px solid #ddd', outline: 'none' }} />
                      <textarea placeholder="Message" rows={4} style={{ padding: '16px 24px', borderRadius: '24px', border: '1px solid #ddd', outline: 'none', resize: 'none' }}></textarea>
                      <button type="button" style={{ padding: '16px 32px', background: '#000', color: '#fff', border: 'none', borderRadius: '999px', cursor: 'pointer', fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}>Submit</button>
                    </form>
                  </div>
                ),
                content: (
                  <div className={styles.largeTextCard}>
                    <p>We are always looking for great talent. Connect with us.</p>
                  </div>
                )
              }
            ]}
          />
        </div>
      </Section>

      {/* Section 006: Connect */}
      <Section id="connect" theme="light">
        <div className={`${styles.sectionContent} animate-in`}>
          <div className={styles.grid3}>
            <div className={styles.columnContainer}>
              <ColumnPill label="get connected" />
              <div style={{ marginTop: '24px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px', color: 'var(--color-text-dark)', fontWeight: 300 }}>
                  <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>onli.ai</a></li>
                  <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>onli.you</a></li>
                  <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>onli.cloud</a></li>
                  <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>onli.fyi</a></li>
                  <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>withonli.com</a></li>
                </ul>
              </div>
            </div>

            <div className={styles.columnContainer} style={{ gridColumn: '2 / -1' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '600px', background: 'transparent' }}>
                <input type="text" placeholder="Name" style={{ padding: '16px 24px', borderRadius: '999px', border: '1px solid #ddd', background: '#fff', fontSize: '16px', outline: 'none' }} />
                <input type="email" placeholder="Email" style={{ padding: '16px 24px', borderRadius: '999px', border: '1px solid #ddd', background: '#fff', fontSize: '16px', outline: 'none' }} />
                <input type="tel" placeholder="Phone Number" style={{ padding: '16px 24px', borderRadius: '999px', border: '1px solid #ddd', background: '#fff', fontSize: '16px', outline: 'none' }} />
                <textarea placeholder="Message" rows={5} style={{ padding: '24px', borderRadius: '24px', border: '1px solid #ddd', background: '#fff', fontSize: '16px', resize: 'none', outline: 'none' }}></textarea>
                <button type="button" style={{ padding: '16px 32px', background: '#000', color: '#fff', border: 'none', borderRadius: '999px', cursor: 'pointer', fontFamily: 'var(--font-montserrat)', fontSize: '16px', alignSelf: 'flex-start', fontWeight: 500 }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

