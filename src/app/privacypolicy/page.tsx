import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), "privacy_policy.md");
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    content = "# Privacy Policy\n\nCould not load the privacy policy content at this time.";
  }

  return (
    <main className="section-container" style={{ paddingTop: "160px", paddingBottom: "120px", minHeight: "80vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "var(--font-montserrat)", color: "var(--color-text-body)", lineHeight: "1.6" }}>
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <h1 style={{ fontSize: "2.5rem", fontWeight: "600", color: "var(--color-text-dark)", marginBottom: "1.5rem", marginTop: "2rem" }} {...props} />,
            h2: ({node, ...props}) => <h2 style={{ fontSize: "1.75rem", fontWeight: "500", color: "var(--color-text-dark)", marginBottom: "1.25rem", marginTop: "2.5rem" }} {...props} />,
            h3: ({node, ...props}) => <h3 style={{ fontSize: "1.25rem", fontWeight: "500", color: "var(--color-text-dark)", marginBottom: "1rem", marginTop: "2rem" }} {...props} />,
            p: ({node, ...props}) => <p style={{ marginBottom: "1.25rem", fontSize: "1rem", fontWeight: "300" }} {...props} />,
            ul: ({node, ...props}) => <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem", fontWeight: "300" }} {...props} />,
            ol: ({node, ...props}) => <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "1.5rem", fontWeight: "300" }} {...props} />,
            li: ({node, ...props}) => <li style={{ marginBottom: "0.5rem" }} {...props} />,
            a: ({node, ...props}) => <a style={{ color: "var(--color-text-dark)", textDecoration: "underline" }} {...props} />,
            strong: ({node, ...props}) => <strong style={{ fontWeight: "500", color: "var(--color-text-dark)" }} {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
