import type { ReactNode } from "react";
import styles from "./FeatureCards.module.css";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  meta: string;
  icon: ReactNode;
}

const features: FeatureItem[] = [
  {
    id: "feature-turbopack",
    title: "Turbopack Bundler",
    description:
      "Next-generation Rust-based incremental bundler configured out-of-the-box for millisecond HMR updates and rapid build cycles.",
    badge: "Bundler",
    meta: "next dev --turbopack",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "feature-app-router",
    title: "Modern App Router",
    description:
      "Next.js App Router with intuitive file-system routing, nested layouts, template state isolation, and streaming responses.",
    badge: "Routing",
    meta: "src/app/page.tsx",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: "feature-react-19",
    title: "React 19 & Server Components",
    description:
      "Full native support for React 19 Server Components, Server Actions, useActionState, and optimized asynchronous data loading.",
    badge: "Runtime",
    meta: "React 19.2 Engine",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "feature-typescript",
    title: "Strict TypeScript Setup",
    description:
      "Pre-configured tsconfig with strict type checking, path aliases (@/*), and automatic Next.js typed routes verification.",
    badge: "Type Safety",
    meta: "tsconfig.json",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z" />
        <polyline points="21 16 21 8" />
      </svg>
    ),
  },
  {
    id: "feature-vanilla-css",
    title: "Zero-Overhead CSS Modules",
    description:
      "Built-in CSS Modules and CSS custom properties providing clean scoped styling, design tokens, and zero JavaScript runtime bloat.",
    badge: "Styles",
    meta: "globals.css + *.module.css",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "feature-seo-perf",
    title: "Built-In SEO & Performance",
    description:
      "Automated font optimization using next/font (Geist), image compression with next/image, and dynamic Metadata API.",
    badge: "Optimization",
    meta: "Metadata & Core Web Vitals",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className={styles.featuresSection} aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Engine Architecture</div>
          <h2 id="features-heading" className={styles.sectionTitle}>
            Engineered for Modern Web Speed
          </h2>
          <p className={styles.sectionSubtitle}>
            Every core aspect of this setup is geared towards developer
            productivity, architectural clarity, and peak lighthouse performance.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item) => (
            <article key={item.id} id={item.id} className={`glass-card ${styles.card}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <span className={styles.badge}>{item.badge}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.dot}></span>
                <span>{item.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
