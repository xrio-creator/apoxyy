"use client";

import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npm run dev";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badge} id="hero-status-badge">
          <span className={styles.badgePulse}></span>
          <span>Next.js 16.3 + React 19 Engine Ready</span>
        </div>

        <h1 id="hero-heading" className={styles.title}>
          Build High-Performance Web Apps with{" "}
          <span className={styles.titleGradient}>Apoxyy</span>
        </h1>

        <p className={styles.description}>
          Your cutting-edge Next.js application environment is pre-configured
          with the App Router, TypeScript, Turbopack, and modular styling for
          maximum development velocity and buttery-smooth production performance.
        </p>

        {/* Command terminal box */}
        <div className={styles.commandBox} id="hero-command-box">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className={styles.commandPrompt}>$</span>
            <span className={styles.commandText}>{command}</span>
          </div>
          <button
            id="btn-copy-command"
            className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
            onClick={handleCopy}
            aria-label="Copy development command to clipboard"
          >
            {copied ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <a href="#playground" id="hero-cta-playground" className={styles.btnPrimary}>
            <span>Try Interactive Demo</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#quickstart" id="hero-cta-quickstart" className={styles.btnSecondary}>
            <span>Quick Start Guide</span>
          </a>
        </div>

        {/* Metric / Feature Highlights */}
        <div className={styles.statsRow} id="hero-stats-row">
          <div className={styles.statCard}>
            <div className={styles.statValue}>&lt; 50ms</div>
            <div className={styles.statLabel}>Turbopack Refresh</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>TypeScript Safe</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>React 19</div>
            <div className={styles.statLabel}>Server Components</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>0 kB</div>
            <div className={styles.statLabel}>Baseline Client JS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
