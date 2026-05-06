import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ScrollStackSection, { StackCardData } from "@/components/ScrollStackSection";
import styles from "./page.module.css";

const stackCards: StackCardData[] = [
  {
    id: "withonli",
    pill1: "0.1 onli",
    pill2: "the primitive",
    pill3: "withonli.com",
    href: "https://withonli.com/",
    title: "An asset is property owned. That definition is not metaphorical. It is structural.",
    body: "Onli is not a ledger. It is not a blockchain. It is not a database with better encryption. Onli is ownership technology — the primitive layer on which real digital property is built. One asset. One owner. There is only one.\nEverything down to the asset, the owner, and the Vault. Learn what Onli is, how it works, and what you can build on top of it.\nExplore use cases and white papers.",
    image: "/images/withonli.png",
  },
  {
    id: "onli-you",
    pill1: "0.2 onli",
    pill2: "authentication",
    pill3: "onli.you",
    href: "https://www.onli.you/",
    title: "Create your Onli ID. Because there is only one you.",
    body: "Onli.You is free. Download it on the Apple App Store, verify once, and your identity becomes an unforgeable credential — your Gene. Not an account. Not a username. An owner.\nYou control your identity. You control your assets. Onli provides the infrastructure. Your Vault, your passport, your sovereignty. One profile to rule them all.\nGet the app. Become an owner.",
    image: "/images/onliyou.jpg",
  },
  {
    id: "onli-cloud",
    pill1: "0.3 onli",
    pill2: "orchestration",
    pill3: "onli.cloud",
    href: "https://www.onli.cloud/",
    title: "This is where ownership becomes an economy.",
    body: "Onli.Cloud is the developer console for the Possession Economy. Configure your Genome. Build your Appliance. Manage your Treasury. Issue to your owners. Genotype is destiny — get the design right, and the system works with you everywhere.\nAppliances never touch assets. Owners are always in control. Custody risk is eliminated by design.\nJoin the revolution no one saw coming.",
    image: "/images/onlicloud.png",
  },
  {
    id: "onli-ai",
    pill1: "0.4 onli",
    pill2: "intent layer",
    pill3: "onli.ai",
    href: "https://www.onli.ai/",
    title: "What if a single sentence could create a whole economy?",
    body: "Onli.AI translates natural language into ownership operations. Describe what should happen — the system resolves the path. Natural language changes how you express intent. It does not change who is allowed to authorize it.\nExpression is human. Planning is computational. Authorization is ownership.\nNow go build something intelligent.",
    image: "/images/onliai.png",
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      {/* Main Content */}
      <Section id="main-content" theme="light" className={styles.mainTextSection}>
        <div className={`${styles.sectionContent} animate-in`}>
          <div className={styles.onliOneGrid}>
            {/* Pills Row */}
            <div className={styles.onliOnePillsRow}>
              <div className={styles.onliOnePill}>0.0 onli</div>
              <div className={styles.onliOnePill}>the network</div>
              <div className={styles.onliOnePill}>onli one</div>
            </div>
            
            {/* Body Grid */}
            <div className={styles.onliOneBodyGrid}>
              {/* Empty first column */}
              <div className={styles.onliOneEmptyCol}></div>
              
              {/* Title in second column */}
              <div className={styles.onliOneTitleCol}>
                <h1 className="font-sans-headline">
                  Onli One creates a secure, zero-config private network for possession-native transfer.
                </h1>
              </div>
              
              {/* Body text in third column */}
              <div className={styles.onliOneBodyCol}>
                <p>
                  It lets owners, vaults, appliances, and services connect directly when a digital asset needs to move — without public exposure, complex networking, or trusted intermediaries.
                </p>
                <p>
                  Unlike traditional private networks built around device access, Onli One is built around <strong>asset movement</strong>. It forms a private, just-in-time transfer path between authorized parties, validates the possession state, completes the move, and disappears.
                </p>
                <p>
                  The Onli One network establishes secure, direct, peer-to-peer paths between authorized vaults, appliances, and owners. Instead of broadcasting transactions or relying on shared ledgers, Onli One coordinates transfer through a private, state-aware network path.
                </p>
                <p>
                  Each transfer is bound to the asset&apos;s tensor state, owner credential, vault location, and policy conditions. The network does not merely connect machines. It connects possession states.
                </p>
                <p className={styles.onliOneConclusion}>
                  The result is a private, verifiable movement of the thing itself — not a message about the thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section: The Stack (Scrollable Stacked Cards) */}
      <ScrollStackSection cards={stackCards} />
    </main>
  );
}

