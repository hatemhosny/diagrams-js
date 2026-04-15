import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";
import styles from "./index.module.css";

function HeroSection() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className={styles.heroTitle}>
              diagrams-js
            </Heading>
            <p className={styles.heroSubtitle}>
              Draw cloud system architecture diagrams as code in TypeScript
            </p>
            <p className={styles.heroDescription}>
              A <strong>TypeScript port</strong> of the popular Python{" "}
              <a
                href="https://github.com/mingrammer/diagrams"
                target="_blank"
                rel="noopener noreferrer"
              >
                diagrams
              </a>{" "}
              library. Generate beautiful architecture diagrams programmatically with full type
              safety and autocompletion.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started/quickstart"
              >
                Get Started
              </Link>
              <Link className="button button--secondary button--lg" to="/playground">
                Try Online
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.diagramPreview}>
              <img
                src="/examples/example3-event-processing.svg"
                alt="Example architecture diagram"
                className={styles.diagramImage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "🌐 Runs Everywhere",
      description: (
        <>
          Works in <strong>browsers</strong>, <strong>Node.js</strong>, <strong>Deno</strong>, and{" "}
          <strong>Bun</strong>. No server required for browser usage.
        </>
      ),
    },
    {
      title: "📦 Zero Dependencies",
      description: (
        <>
          The core library has <strong>zero runtime dependencies</strong>. Uses WebAssembly-based
          Graphviz for rendering, bundled with the package.
        </>
      ),
    },
    {
      title: "🔷 Full TypeScript Support",
      description: (
        <>
          Written in TypeScript with complete type definitions. Get <strong>autocompletion</strong>{" "}
          and <strong>type checking</strong> for all 2000+ node types.
        </>
      ),
    },
    {
      title: "☁️ 17 Cloud Providers",
      description: (
        <>
          Support for <strong>AWS</strong>, <strong>Azure</strong>, <strong>GCP</strong>,{" "}
          <strong>Kubernetes</strong>, and 13 more providers with 2000+ pre-built node types.
        </>
      ),
    },
    {
      title: "🎨 Custom Nodes",
      description: (
        <>
          Use your own icons from URLs, local files, or data URLs. Mix custom nodes with built-in
          provider nodes seamlessly.
        </>
      ),
    },
    {
      title: "🚀 Tree-Shakeable",
      description: (
        <>Import only what you need. Each provider is a separate module for optimal bundle size.</>
      ),
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why diagrams-js?
        </Heading>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className={styles.featureCard}>
                <Heading as="h3" className={styles.featureTitle}>
                  {feature.title}
                </Heading>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeExampleSection() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2" className={styles.sectionTitle}>
              Simple & Intuitive API
            </Heading>
            <p className={styles.sectionDescription}>
              Define your architecture with a clean, chainable API. Create diagrams in just a few
              lines of code.
            </p>
            <ul className={styles.benefitsList}>
              <li>Factory functions for easy diagram creation</li>
              <li>Chainable connections with .to(), .from(), .with()</li>
              <li>Cluster support for grouping related components</li>
              <li>Custom styling for edges and nodes</li>
            </ul>
            <div className={styles.buttons}>
              <Link
                className="button button--primary"
                style={{ marginBottom: "2rem" }}
                to="/docs/getting-started/examples"
              >
                View Examples
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <CodeBlock language="typescript">{`import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";
import { ELB } from "diagrams-js/aws/network";

const diagram = Diagram("Web Architecture", {
  direction: "TB"
});

const lb = diagram.add(ELB("Load Balancer"));
const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));

lb.to(web).to(db);

const svg = await diagram.render();`}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to get started?
          </Heading>
          <p className={styles.ctaDescription}>
            Check out the documentation, try the interactive playground, or browse the examples.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started/installation"
            >
              Get Started
            </Link>
            <Link className="button button--primary button--lg" to="/docs/guides/diagram">
              API Reference
            </Link>
            <Link className="button button--primary button--lg" to="/docs/guides/providers">
              Browse Nodes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Draw cloud system architecture diagrams as code in TypeScript. A TypeScript port of the Python diagrams library."
    >
      <main>
        <HeroSection />
        <FeaturesSection />
        <CodeExampleSection />
        <CTASection />
      </main>
    </Layout>
  );
}
