import Hero from "@/components/Hero";
import ScrollStackSection, { StackCardData } from "@/components/ScrollStackSection";
import OnliStaticSection, { OnliCardData } from "@/components/OnliStaticSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import styles from "./page.module.css";

const onliCards: OnliCardData[] = [
  {
    id: "onli-one",
    pill1: "onli",
    pill2: "the protocol and the network",
    pill3: "onli one",
    title: "The protocol and private network for moving digital property.",
    body: [
      "Onli One lets owners, vaults, appliances, and services connect directly when a digital asset needs to move — without public exposure, complex networking, or trusted intermediaries.",
      "Traditional private networks are built around device access. Onli One is built around <strong>asset movement</strong>.",
      "As a protocol, it defines how possession-native assets are authorized, validated, transferred, and received. As a network, it forms a private, just-in-time path between authorized vaults, appliances, services, and owners.",
      "Each transfer is bound to the asset's tensor state, owner credential, vault location, and policy conditions. Instead of broadcasting transactions or relying on shared ledgers, Onli One coordinates the private, state-aware movement of the asset itself.",
    ],
    conclusion: "The result is a private, verifiable movement of the thing itself, not a message about a record.",
  },
  {
    id: "onli-asset",
    pill1: "genome",
    pill2: "the asset",
    pill3: "hyper-dimensional vector storage object",
    title: "An asset is property owned. Onli is an asset class.",
    body: [
      "Onli is a possession-native digital object: a hyper dimensional vector storage container bound to an owner credential and held inside a Vault. In the context of financial assets it makes ownership structural by binding the asset, owner, and Vault into one verifiable possession state. It is not a record of ownership. It is the owned thing itself.",
      "As an Onli moves across a network of devices, its state evolves. The prior possession state is closed, the new possession state is created, and the asset remains singular.",
      "This makes blockchain obsolete. A blockchain records who the network believes owns something.",
      "Onli is not a ledger. It is not a blockchain. It is not a database with better encryption. Onli is ownership technology: the primitive layer on which real digital property is built.",
    ],
    conclusion: "One asset. One owner. There is only one.",
  },
];

const stackCards: StackCardData[] = [
  {
    id: "withonli",
    pill1: "onli",
    pill2: "the primitive",
    pill3: "withonli.com",
    href: "https://withonli.com/",
    title: "An asset is property owned. That definition is not metaphorical. It is structural.",
    body: "Onli is not a ledger. It is not a blockchain. It is not a database with better encryption. Onli is ownership technology — the primitive layer on which real digital property is built. One asset. One owner. There is only one.\nEverything down to the asset, the owner, and the Vault. Learn what Onli is, how it works, and what you can build on top of it.\nExplore use cases and white papers.",
    image: "/images/withonli.png",
  },
  {
    id: "onli-you",
    pill1: "onli",
    pill2: "authentication",
    pill3: "onli.you",
    href: "https://www.onli.you/",
    title: "Create your Onli ID. Because there is only one you.",
    body: "Onli.You is free. Download it on the Apple App Store, verify once, and your identity becomes an unforgeable credential — your Gene. Not an account. Not a username. An owner.\nYou control your identity. You control your assets. Onli provides the infrastructure. Your Vault, your passport, your sovereignty. One profile to rule them all.\nGet the app. Become an owner.",
    image: "/images/onliyou.jpg",
  },
  {
    id: "onli-cloud",
    pill1: "onli",
    pill2: "orchestration",
    pill3: "onli.cloud",
    href: "https://www.onli.cloud/",
    title: "This is where ownership becomes an economy.",
    body: "Onli.Cloud is the developer console for the Possession Economy. Configure your Genome. Build your Appliance. Manage your Treasury. Issue to your owners. Genotype is destiny — get the design right, and the system works with you everywhere.\nAppliances never touch assets. Owners are always in control. Custody risk is eliminated by design.\nJoin the revolution no one saw coming.",
    image: "/images/onlicloud.png",
  },
  {
    id: "onli-ai",
    pill1: "onli",
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

      {/* Section: Onli 0.x (Static stacked cards) */}
      <OnliStaticSection cards={onliCards} />

      {/* Section: The Stack 1.x (Scroll-locked stacked cards) */}
      <ScrollStackSection cards={stackCards} />

      {/* Global scroll indicator - visible until footer */}
      <ScrollIndicator />
    </main>
  );
}

