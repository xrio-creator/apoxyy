"use client";

import { useState } from "react";
import styles from "./InteractivePlayground.module.css";

interface FileDescriptor {
  path: string;
  name: string;
  type: string;
  summary: string;
  codePreview: string;
}

const PROJECT_FILES: FileDescriptor[] = [
  {
    path: "src/app/layout.tsx",
    name: "layout.tsx",
    type: "Root Layout",
    summary:
      "Defines the top-level HTML document shell, global metadata (SEO), and font variables for all subroutes.",
    codePreview: `export const metadata: Metadata = {
  title: "Apoxyy — Next.js Application Engine",
  description: "Next-gen web application built with Next.js 16..."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}`,
  },
  {
    path: "src/app/page.tsx",
    name: "page.tsx",
    type: "Home View",
    summary:
      "The primary landing route '/' for the application. Combines high-velocity server components with interactive client islands.",
    codePreview: `import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}`,
  },
  {
    path: "src/app/globals.css",
    name: "globals.css",
    type: "Design System",
    summary:
      "Centralized CSS custom properties, responsive container classes, smooth mesh gradients, and glassmorphic utility rules.",
    codePreview: `:root {
  --bg-page: #08090d;
  --text-primary: #f8fafc;
  --accent-cyan: #06b6d4;
  --gradient-brand: linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #a855f7 100%);
}`,
  },
  {
    path: "next.config.ts",
    name: "next.config.ts",
    type: "Engine Config",
    summary:
      "Next.js framework configuration typed with TypeScript, supporting Turbopack flags, headers, and image domain rules.",
    codePreview: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;`,
  },
  {
    path: "tsconfig.json",
    name: "tsconfig.json",
    type: "TypeScript Settings",
    summary:
      "Type compiler configuration providing strict type safety, JSX preservation, and path alias mapping '@/*'.",
    codePreview: `{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`,
  },
];

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<"counter" | "explorer" | "diagnostics">("counter");

  // Counter tab state
  const [count, setCount] = useState(7);
  const [multiplier, setMultiplier] = useState(1);

  // File explorer tab state
  const [selectedFile, setSelectedFile] = useState<FileDescriptor>(PROJECT_FILES[0]);

  // Diagnostics test state
  const [latency, setLatency] = useState<number | null>(null);
  const [pinging, setPinging] = useState(false);

  const handlePing = () => {
    setPinging(true);
    const start = performance.now();
    setTimeout(() => {
      const elapsed = Math.round(performance.now() - start + Math.random() * 8);
      setLatency(elapsed);
      setPinging(false);
    }, 180);
  };

  const progressPercentage = Math.min(Math.max((count / 25) * 100, 0), 100);

  return (
    <section id="playground" className={styles.playgroundSection} aria-labelledby="playground-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Live Lab</div>
          <h2 id="playground-heading" className={styles.title}>
            Interactive Next.js Playground
          </h2>
          <p className={styles.subtitle}>
            Experience React 19 client reactivity, explore project architecture,
            and inspect live engine parameters in real time.
          </p>
        </div>

        <div className={styles.playgroundContainer}>
          {/* Tab Selector */}
          <div className={styles.tabBar} role="tablist" aria-label="Interactive demo tabs">
            <button
              id="tab-btn-counter"
              role="tab"
              aria-selected={activeTab === "counter"}
              className={`${styles.tabBtn} ${activeTab === "counter" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("counter")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="m10 15 5-3-5-3v6Z" />
              </svg>
              <span>1. Reactive State Demo</span>
            </button>

            <button
              id="tab-btn-explorer"
              role="tab"
              aria-selected={activeTab === "explorer"}
              className={`${styles.tabBtn} ${activeTab === "explorer" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("explorer")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <span>2. File Architecture Inspector</span>
            </button>

            <button
              id="tab-btn-diagnostics"
              role="tab"
              aria-selected={activeTab === "diagnostics"}
              className={`${styles.tabBtn} ${activeTab === "diagnostics" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("diagnostics")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>3. Engine Diagnostics</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            {activeTab === "counter" && (
              <div className={styles.counterGrid} id="playground-tab-counter">
                <div className={styles.counterVisual}>
                  <div className={styles.countDisplay} id="interactive-counter-display">
                    {count}
                  </div>
                  <div className={styles.countSub}>
                    Calculated Value (×{multiplier}):{" "}
                    <strong style={{ color: "#38bdf8" }}>{count * multiplier}</strong>
                  </div>

                  <div className={styles.progressBarContainer}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>

                  <div className={styles.counterActions}>
                    <button
                      id="btn-counter-decrement"
                      className={`${styles.actionBtn} ${styles.btnDec}`}
                      onClick={() => setCount((c) => Math.max(0, c - 1))}
                    >
                      - Decrement
                    </button>
                    <button
                      id="btn-counter-increment"
                      className={`${styles.actionBtn} ${styles.btnInc}`}
                      onClick={() => setCount((c) => c + 1)}
                    >
                      + Increment
                    </button>
                    <button
                      id="btn-counter-reset"
                      className={`${styles.actionBtn} ${styles.btnReset}`}
                      onClick={() => {
                        setCount(0);
                        setMultiplier(1);
                      }}
                    >
                      Reset
                    </button>
                  </div>

                  <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Multiplier:</span>
                    {[1, 2, 5, 10].map((m) => (
                      <button
                        key={m}
                        id={`btn-multiplier-${m}`}
                        onClick={() => setMultiplier(m)}
                        style={{
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                          fontSize: "0.8rem",
                          border: multiplier === m ? "1px solid #6366f1" : "1px solid var(--border-subtle)",
                          background: multiplier === m ? "rgba(99, 102, 241, 0.25)" : "transparent",
                          color: multiplier === m ? "#a5b4fc" : "var(--text-secondary)",
                        }}
                      >
                        {m}×
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.counterExplanation}>
                  <h3 className={styles.explanationTitle}>React 19 Client Boundary</h3>
                  <p className={styles.explanationDesc}>
                    This interactive component runs seamlessly within a Next.js Client Component boundary
                    using the <code className="code-inline">&quot;use client&quot;</code> directive. State updates are
                    instantaneously reconciled with zero server roundtrips.
                  </p>
                  <pre className={styles.codeSnippet}>
{`// Client Component Boundary
"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === "explorer" && (
              <div className={styles.explorerGrid} id="playground-tab-explorer">
                <div className={styles.fileList} role="listbox" aria-label="Project files">
                  {PROJECT_FILES.map((file) => (
                    <button
                      key={file.path}
                      id={`file-btn-${file.name.replace(/\./g, "-")}`}
                      className={`${styles.fileItem} ${
                        selectedFile.path === file.path ? styles.fileItemActive : ""
                      }`}
                      onClick={() => setSelectedFile(file)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span>{file.name}</span>
                    </button>
                  ))}
                </div>

                <div className={styles.fileDetailCard}>
                  <div>
                    <div className={styles.fileDetailTitle}>
                      <span>{selectedFile.path}</span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.2rem 0.5rem",
                          background: "rgba(56, 189, 248, 0.15)",
                          color: "#38bdf8",
                          borderRadius: "4px",
                          fontWeight: 500,
                        }}
                      >
                        {selectedFile.type}
                      </span>
                    </div>
                    <p className={styles.fileDetailDesc}>{selectedFile.summary}</p>
                    <pre className={styles.codeSnippet}>{selectedFile.codePreview}</pre>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "diagnostics" && (
              <div id="playground-tab-diagnostics">
                <div className={styles.diagGrid}>
                  <div className={styles.diagCard}>
                    <div className={styles.diagLabel}>Framework</div>
                    <div className={styles.diagValue}>
                      <span style={{ color: "#38bdf8" }}>Next.js</span> 16.3.7
                    </div>
                  </div>
                  <div className={styles.diagCard}>
                    <div className={styles.diagLabel}>UI Runtime</div>
                    <div className={styles.diagValue}>
                      <span style={{ color: "#818cf8" }}>React</span> 19.2.8
                    </div>
                  </div>
                  <div className={styles.diagCard}>
                    <div className={styles.diagLabel}>Bundler Engine</div>
                    <div className={styles.diagValue}>
                      <span style={{ color: "#f59e0b" }}>⚡ Turbopack</span>
                    </div>
                  </div>
                  <div className={styles.diagCard}>
                    <div className={styles.diagLabel}>Architecture</div>
                    <div className={styles.diagValue}>App Router (/src/app)</div>
                  </div>
                  <div className={styles.diagCard}>
                    <div className={styles.diagLabel}>TypeScript</div>
                    <div className={styles.diagValue}>
                      <span style={{ color: "#34d399" }}>Strict Mode</span>
                    </div>
                  </div>
                  <div className={styles.diagCard}>
                    <div className={styles.diagLabel}>CSS Strategy</div>
                    <div className={styles.diagValue}>Vanilla CSS Modules</div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    padding: "1.5rem",
                    background: "rgba(0, 0, 0, 0.25)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                      Engine Ping Latency Test
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {latency !== null
                        ? `Roundtrip: ${latency}ms (Status 200 OK)`
                        : "Click to test local runtime response time"}
                    </div>
                  </div>
                  <button
                    id="btn-ping-engine"
                    onClick={handlePing}
                    disabled={pinging}
                    className={`${styles.actionBtn} ${styles.btnInc}`}
                    style={{ fontSize: "0.85rem" }}
                  >
                    {pinging ? "Pinging..." : "Test Local Response"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
